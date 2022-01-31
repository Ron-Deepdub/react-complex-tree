import { useKey } from '../hotkeys/useKey';
import { useHotkey } from '../hotkeys/useHotkey';
import { useMoveFocusToIndex } from './useMoveFocusToIndex';
import { useViewState } from './useViewState';
import { useTree } from './Tree';
import { useTreeEnvironment } from '../controlledEnvironment/ControlledTreeEnvironment';
import { useGetLinearItems } from './useGetLinearItems';
import { useDragAndDrop } from '../controlledEnvironment/DragAndDropProvider';
import { useSelectUpTo } from './useSelectUpTo';

export const useTreeKeyboardBindings = () => {
  const environment = useTreeEnvironment();
  const { treeId, setRenamingItem, setSearch, renamingItem } = useTree();
  const dnd = useDragAndDrop();
  const viewState = useViewState();
  const moveFocusToIndex = useMoveFocusToIndex();
  const getLinearItems = useGetLinearItems();
  const selectUpTo = useSelectUpTo();

  const isActiveTree = environment.activeTreeId === treeId;
  const isRenaming = !!renamingItem;

  useKey(
    'arrowdown',
    e => {
      e.preventDefault();
      if (dnd.isProgrammaticallyDragging) {
        dnd.programmaticDragDown();
      } else {
        const newFocusItem = moveFocusToIndex(currentIndex => currentIndex + 1);

        if (e.shiftKey) {
          selectUpTo(newFocusItem);
        }
      }
    },
    isActiveTree && !isRenaming
  );

  useKey(
    'arrowup',
    e => {
      e.preventDefault();
      if (dnd.isProgrammaticallyDragging) {
        dnd.programmaticDragUp();
      } else {
        const newFocusItem = moveFocusToIndex(currentIndex => currentIndex - 1);

        if (e.shiftKey) {
          selectUpTo(newFocusItem);
        }
      }
    },
    isActiveTree && !isRenaming
  );

  useHotkey(
    'moveFocusToFirstItem',
    e => {
      e.preventDefault();
      moveFocusToIndex(() => 0);
    },
    isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming
  );

  useHotkey(
    'moveFocusToLastItem',
    e => {
      e.preventDefault();
      moveFocusToIndex((currentIndex, linearItems) => linearItems.length - 1);
    },
    isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming
  );

  useKey(
    'arrowright',
    e => {
      e.preventDefault();
      moveFocusToIndex((currentIndex, linearItems) => {
        const item = environment.items[linearItems[currentIndex].item];
        if (item.hasChildren) {
          if (viewState.expandedItems?.includes(item.index)) {
            return currentIndex + 1;
          } else {
            environment.onExpandItem?.(item, treeId);
          }
        }
        return currentIndex;
      });
    },
    isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming
  );

  useKey(
    'arrowleft',
    e => {
      e.preventDefault();
      moveFocusToIndex((currentIndex, linearItems) => {
        const item = environment.items[linearItems[currentIndex].item];
        const itemDepth = linearItems[currentIndex].depth;
        if (item.hasChildren && viewState.expandedItems?.includes(item.index)) {
          environment.onCollapseItem?.(item, treeId);
        } else if (itemDepth > 0) {
          let parentIndex = currentIndex;
          for (parentIndex; linearItems[parentIndex].depth !== itemDepth - 1; parentIndex--);
          return parentIndex;
        }
        return currentIndex;
      });
    },
    isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming
  );

  useHotkey(
    'primaryAction',
    e => {
      e.preventDefault();
      if (viewState.focusedItem) {
        environment.onSelectItems?.([viewState.focusedItem], treeId);
        environment.onPrimaryAction?.(environment.items[viewState.focusedItem], treeId);
      }
    },
    isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming
  );

  useHotkey(
    'toggleSelectItem',
    e => {
      e.preventDefault();
      if (viewState.focusedItem) {
        if (viewState.selectedItems && viewState.selectedItems.includes(viewState.focusedItem)) {
          environment.onSelectItems?.(
            viewState.selectedItems.filter(item => item !== viewState.focusedItem),
            treeId
          );
        } else {
          environment.onSelectItems?.([...(viewState.selectedItems ?? []), viewState.focusedItem], treeId);
        }
      }
    },
    isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming
  );

  useHotkey(
    'selectAll',
    e => {
      e.preventDefault();
      environment.onSelectItems?.(
        getLinearItems().map(({ item }) => item),
        treeId
      );
    },
    isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming
  );

  useHotkey(
    'renameItem',
    e => {
      if (viewState.focusedItem) {
        e.preventDefault();
        const item = environment.items[viewState.focusedItem];
        environment.onStartRenamingItem?.(item, treeId);
        setRenamingItem(item.index);
      }
    },
    isActiveTree && (environment.canRename ?? true) && !isRenaming
  );

  useHotkey(
    'startSearch',
    e => {
      e.preventDefault();
      setSearch('');
      (document.querySelector('[data-rct-search-input="true"]') as any)?.focus?.();
    },
    isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming
  );

  useHotkey(
    'startProgrammaticDnd',
    e => {
      e.preventDefault();
      dnd.startProgrammaticDrag();
    },
    isActiveTree && !isRenaming
  );
  useHotkey(
    'completeProgrammaticDnd',
    e => {
      e.preventDefault();
      dnd.completeProgrammaticDrag();
    },
    isActiveTree && dnd.isProgrammaticallyDragging && !isRenaming
  );
  useHotkey(
    'abortProgrammaticDnd',
    e => {
      e.preventDefault();
      dnd.abortProgrammaticDrag();
    },
    isActiveTree && dnd.isProgrammaticallyDragging && !isRenaming
  );
};
