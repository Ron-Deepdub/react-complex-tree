"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4088],{3393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(876));const i={sidebar_position:1},o="Get Started",l={unversionedId:"getstarted",id:"getstarted",title:"Get Started",description:"The following document shows how React Complex Tree can be installed and used in your",source:"@site/docs/getstarted.mdx",sourceDirName:".",slug:"/getstarted",permalink:"/docs/getstarted",draft:!1,editUrl:"https://github.com/lukasbach/react-complex-tree/edit/main/packages/docs/docs/getstarted.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"UncontrolledTreeEnvironmentProps",permalink:"/docs/api/interfaces/UncontrolledTreeEnvironmentProps"},next:{title:"Uncontrolled Environment",permalink:"/docs/guides/uncontrolled-environment"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Importing",id:"importing",level:2},{value:"Using CDNs",id:"using-cdns",level:2},{value:"Integrating React Complex Tree into your project",id:"integrating-react-complex-tree-into-your-project",level:2},{value:"Providing the data for the tree",id:"providing-the-data-for-the-tree",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-started"},"Get Started"),(0,r.kt)("p",null,"The following document shows how React Complex Tree can be installed and used in your\nweb projects."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To start using React Complex Table, install it to your project as a dependency via"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install react-complex-tree\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add react-complex-tree\n")),(0,r.kt)("h2",{id:"importing"},"Importing"),(0,r.kt)("p",null,"You can always import any of the entities used in the examples directly as named imports from\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"react-complex-tree")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';\n")),(0,r.kt)("p",null,"Make sure to also import the CSS file that defines the default styling of React Complex Tree, if\nyou do not intent do provide manual CSS declarations. More on the default stylings and possibilities\nto modify those are given ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/styling"},"in the guide on styling customizability"),". Import the\nCSS in one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import it directly in your JS code, if you use Webpack with a loader that can load CSS files:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import 'react-complex-tree/lib/style-modern.css';\n"))),(0,r.kt)("li",{parentName:"ul"},"Import it from within a CSS file with node-style package resolution:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@import '~react-complex-tree/lib/style-modern.css';\n"))),(0,r.kt)("li",{parentName:"ul"},"Import it in your HTML by linking to the CSS file in your ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," or on unpkg:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <link href="https://unpkg.com/react-complex-tree/lib/style-modern.css" rel="stylesheet" />\n</head>\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This will use the new styles introduced in v2.0.3.\nIf you want the old default styles, import ",(0,r.kt)("inlineCode",{parentName:"p"},".../style.css")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},".../style-modern.css"),".")),(0,r.kt)("p",null,"React Complex Tree comes compiled as CommonJS package, ESM package and ESNext package."),(0,r.kt)("h2",{id:"using-cdns"},"Using CDNs"),(0,r.kt)("p",null,"The package is also available as UMD bundle which can be consumed from the ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com"},"unpkg CDN"),".\nYou can import it in your HTML by copying the following snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <link href="https://unpkg.com/react-complex-tree/lib/style.css" rel="stylesheet" />\n  <script src="https://unpkg.com/react-complex-tree/lib/bundle.js"><\/script>\n</head>\n')),(0,r.kt)("p",null,"Importing the file ",(0,r.kt)("inlineCode",{parentName:"p"},"https://unpkg.com/react-complex-tree/lib/bundle.js")," will make the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactComplexTree"),"\navailable to the global scope. All exports from the package are then available as children of that variable,\ni.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactComplexTree.UncontrolledTreeEnvironment")," can be used to reference the react component of an uncontrolled\ntree environment."),(0,r.kt)("h2",{id:"integrating-react-complex-tree-into-your-project"},"Integrating React Complex Tree into your project"),(0,r.kt)("p",null,"After installation, import the package and start using it by creating a new tree environment that\ncontains a tree instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{}}\n    >\n      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n')),(0,r.kt)("p",null,"The example above uses an ",(0,r.kt)("a",{parentName:"p",href:"/docs/react/UncontrolledTreeEnvironment"},"UncontrolledTreeEnvironment"),", which is\nthe easiest way to get started as it maintains the tree view state in itself. Inside the environment,\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/react/Tree"},"Tree")," itself is added to the DOM structure. You can add multiple trees within one\nenvironment, that share a common state. Each tree needs to provide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An individual ID for the tree, which remains unique for that tree."),(0,r.kt)("li",{parentName:"ul"},"Which item is used as root item for that tree. Different trees may show different items as root."),(0,r.kt)("li",{parentName:"ul"},"Optionally, a label, which is used as accessibility label for that tree to describe it to screen readers.")),(0,r.kt)("p",null,"Individual trees do not provide their own state, but share the state that is provided by the environment."),(0,r.kt)("p",null,"For the environment, there are three ways to implement your tree environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use an ",(0,r.kt)("a",{parentName:"li",href:"/docs/react/UncontrolledTreeEnvironment"},"UncontrolledTreeEnvironment")," and a\n",(0,r.kt)("a",{parentName:"li",href:"/docs/api/classes/StaticTreeDataProvider"},"StaticTreeDataProvider")," that provides the items. This is the easiest\napproach and is described below."),(0,r.kt)("li",{parentName:"ul"},"Use an ",(0,r.kt)("a",{parentName:"li",href:"/docs/react/UncontrolledTreeEnvironment"},"UncontrolledTreeEnvironment")," and implement a custom\n",(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/TreeDataProvider"},"TreeDataProvider"),". This is similarly easy and provides the ability to\ndirectly react to change events and define a lazy item-loading strategy. This approach is most likely the best\nway to integrate React Complex Tree in realistic scenarios. This approach is described ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/uncontrolled-environment"},"here"),",\nwith additional details on implementing custom a TreeDataProvider ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/custom-data-provider"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"Use an ",(0,r.kt)("a",{parentName:"li",href:"/docs/react/ControlledTreeEnvironment"},"ControlledTreeEnvironment"),". This requires you to define your\nown logic to manage the view state, thus requiring the most effort, but also provides the most customizability.\nThis approach is described ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/controlled-environment"},"here"),".")),(0,r.kt)("h2",{id:"providing-the-data-for-the-tree"},"Providing the data for the tree"),(0,r.kt)("p",null,"When integrating React Complex Tree with an uncontrolled environment and a static tree data provider, items\nmust be provided as ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ExplicitDataSource"},"explicit data source"),". An example for such\nitems looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"const items = {\n  root: {\n    index: 'root',\n    canMove: true,\n    isFolder: true,\n    children: ['child1', 'child2'],\n    data: 'Root item',\n    canRename: true,\n  },\n  child1: {\n    index: 'child1',\n    canMove: true,\n    isFolder: false,\n    children: [],\n    data: 'Child item 1',\n    canRename: true,\n  },\n  child2: {\n    index: 'child2',\n    canMove: true,\n    isFolder: false,\n    children: [],\n    data: 'Child item 2',\n    canRename: true,\n  },\n};\n")),(0,r.kt)("p",null,"Each item needs to implement the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TreeItem"},"TreeItem")," interface. The ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," attribute\nis generic and can contain any kind of data such as objects or strings. The environment then also needs to\nimplement the ",(0,r.kt)("inlineCode",{parentName:"p"},"getItemTitle")," method, which derives the title of the item given a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TreeItem"},"TreeItem"),"\ninstance. In our example, where ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is just a string that contains the title, we can use the trivial\nimplementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"getItemTitle={item => item.data}"),"."),(0,r.kt)("p",null,"We then create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticTreeDataProvider")," instance that uses this data structure as data source. See the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/StaticTreeDataProvider"},"public interface")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticTreeDataProvider")," to get details on its constructor and abilities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"const dataProvider = new StaticTreeDataProvider(items, (item, newName) => ({ ...item, data: newName }));\n")),(0,r.kt)("p",null,"The first constructor parameter is a record specifying available items. The second is an optional callback with which\nyou can customize how renaming an item works. It is called when the user renames an item (by using the F2 hotkey),\nand how the item data payload is changed by that rename operation. This is necessary since react-complex-tree does not\nby itself know which part of the item payload contains the name. This parameter has the type ",(0,r.kt)("inlineCode",{parentName:"p"},"(item: TreeItem<T>, newName: string) => TreeItem<T>"),"."),(0,r.kt)("admonition",{title:"Handling drag events",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To handle drag events, call ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider.onDidChangeTreeData")," like that:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const listener = (changedItemIds: (string | number)[]) => {\n  const changedItems = changedItemIds.map(dataProvider.getTreeItem)\n  console.log("Changed items:", changedItems)\n}\ndataProvider.onDidChangeTreeData(listener)\n')),(0,r.kt)("p",{parentName:"admonition"},"You also need to set the property ",(0,r.kt)("inlineCode",{parentName:"p"},"canDragAndDrop")," and either ",(0,r.kt)("inlineCode",{parentName:"p"},"canDropOnFolder")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"canReorderItems")," on the tree environment.")),(0,r.kt)("p",null,"Finally, you can mount a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tree")," component within an ",(0,r.kt)("inlineCode",{parentName:"p"},"UncontrolledTreeEnvironment")," that uses your dataProvider\nas data source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  const items = {\n    root: {\n      index: 'root',\n      isFolder: true,\n      children: ['child1', 'child2'],\n      data: 'Root item',\n    },\n    child1: {\n      index: 'child1',\n      children: [],\n      data: 'Child item 1',\n    },\n    child2: {\n      index: 'child2',\n      isFolder: true,\n      children: ['child3'],\n      data: 'Child item 2',\n    },\n    child3: {\n      index: 'child3',\n      children: [],\n      data: 'Child item 3',\n    },\n  };\n\n  const dataProvider = new StaticTreeDataProvider(items, (item, newName) => ({ ...item, data: newName }));\n\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={dataProvider}\n      getItemTitle={item => item.data}\n      viewState={{}}\n      canDragAndDrop={true}\n      canDropOnFolder={true}\n      canReorderItems={true}\n    >\n      <Tree treeId=\"tree-2\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")))}p.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=r,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);