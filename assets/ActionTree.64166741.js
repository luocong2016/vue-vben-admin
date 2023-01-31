import{_ as S}from"./index.75a7f7cb.js";import{t as A}from"./data.ec134722.js";import{aw as F,a as K,v as g,ay as c,o as h,j as $,z as l,i as p,n as a,B as s,E as G,k as T}from"./index.ab98c7b1.js";import{P as b}from"./index.ffeead41.js";import"./fromPairs.84aabb58.js";import"./index.1cc74673.js";import"./eagerComputed.63cc3594.js";import"./useContextMenu.32e27203.js";import"./index.7dc1d591.js";import"./get.c8fc8848.js";import"./index.07e55bad.js";import"./index.21cec426.js";import"./useSize.fc2ee807.js";import"./useWindowSizeFn.72b72c1d.js";import"./useContentViewHeight.4e203b13.js";import"./ArrowLeftOutlined.0928a200.js";import"./index.e61a59c9.js";import"./transButton.8a692425.js";const w=K({components:{BasicTree:S,PageWrapper:b},setup(){const u=g(null),{createMessage:e}=G();function o(){const t=T(u);if(!t)throw new Error("tree is null!");return t}function f(t){o().filterByLevel(t)}function m(){o().setCheckedKeys(["0-0"])}function k(){const t=o().getCheckedKeys();e.success(JSON.stringify(t))}function n(){o().setSelectedKeys(["0-0"])}function d(){const t=o().getSelectedKeys();e.success(JSON.stringify(t))}function i(){const t=o().getSelectedKeys(),B=o().getSelectedNode(t[0]);e.success(B!==null?JSON.stringify(B):null)}function r(){o().setExpandedKeys(["0-0"])}function C(){const t=o().getExpandedKeys();e.success(JSON.stringify(t))}function y(t){o().checkAll(t)}function E(t){o().expandAll(t)}function D(t=null){o().insertNodeByKey({parentKey:t,node:{title:"\u65B0\u589E\u8282\u70B9",key:"2-2-2"},push:"push"})}function v(t){o().deleteNodeByKey(t)}function N(t){o().updateNodeByKey(t,{title:"parent2-new"})}return{treeData:A,treeRef:u,handleLevel:f,handleSetCheckData:m,handleGetCheckData:k,handleSetSelectData:n,handleGetSelectData:d,handleSetExpandData:r,handleGetExpandData:C,handleGetSelectNode:i,appendNodeByKey:D,deleteNodeByKey:v,updateNodeByKey:N,checkAll:y,expandAll:E}}}),J={class:"mb-4"},L={class:"mb-4"},O={class:"mb-4"};function P(u,e,o,f,m,k){const n=c("a-button"),d=c("BasicTree"),i=c("PageWrapper");return h(),$(i,{title:"Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B",contentBackground:"",contentClass:"p-4"},{default:l(()=>[p("div",J,[a(n,{onClick:e[0]||(e[0]=r=>u.expandAll(!0)),class:"mr-2"},{default:l(()=>[s(" \u5C55\u5F00\u5168\u90E8 ")]),_:1}),a(n,{onClick:e[1]||(e[1]=r=>u.expandAll(!1)),class:"mr-2"},{default:l(()=>[s(" \u6298\u53E0\u5168\u90E8 ")]),_:1}),a(n,{onClick:e[2]||(e[2]=r=>u.checkAll(!0)),class:"mr-2"},{default:l(()=>[s(" \u5168\u9009 ")]),_:1}),a(n,{onClick:e[3]||(e[3]=r=>u.checkAll(!1)),class:"mr-2"},{default:l(()=>[s(" \u5168\u4E0D\u9009 ")]),_:1}),a(n,{onClick:e[4]||(e[4]=r=>u.handleLevel(2)),class:"mr-2"},{default:l(()=>[s(" \u663E\u793A\u5230\u7B2C2\u7EA7 ")]),_:1}),a(n,{onClick:e[5]||(e[5]=r=>u.handleLevel(1)),class:"mr-2"},{default:l(()=>[s(" \u663E\u793A\u5230\u7B2C1\u7EA7 ")]),_:1})]),p("div",L,[a(n,{onClick:u.handleSetCheckData,class:"mr-2"},{default:l(()=>[s(" \u8BBE\u7F6E\u52FE\u9009\u6570\u636E ")]),_:1},8,["onClick"]),a(n,{onClick:u.handleGetCheckData,class:"mr-2"},{default:l(()=>[s(" \u83B7\u53D6\u52FE\u9009\u6570\u636E ")]),_:1},8,["onClick"]),a(n,{onClick:u.handleSetSelectData,class:"mr-2"},{default:l(()=>[s(" \u8BBE\u7F6E\u9009\u4E2D\u6570\u636E ")]),_:1},8,["onClick"]),a(n,{onClick:u.handleGetSelectData,class:"mr-2"},{default:l(()=>[s(" \u83B7\u53D6\u9009\u4E2D\u6570\u636E ")]),_:1},8,["onClick"]),a(n,{onClick:u.handleGetSelectNode,class:"mr-2"},{default:l(()=>[s(" \u83B7\u53D6\u9009\u4E2D\u8282\u70B9 ")]),_:1},8,["onClick"]),a(n,{onClick:u.handleSetExpandData,class:"mr-2"},{default:l(()=>[s(" \u8BBE\u7F6E\u5C55\u5F00\u6570\u636E ")]),_:1},8,["onClick"]),a(n,{onClick:u.handleGetExpandData,class:"mr-2"},{default:l(()=>[s(" \u83B7\u53D6\u5C55\u5F00\u6570\u636E ")]),_:1},8,["onClick"])]),p("div",O,[a(n,{onClick:e[6]||(e[6]=r=>u.appendNodeByKey(null)),class:"mr-2"},{default:l(()=>[s(" \u6DFB\u52A0\u6839\u8282\u70B9 ")]),_:1}),a(n,{onClick:e[7]||(e[7]=r=>u.appendNodeByKey("2-2")),class:"mr-2"},{default:l(()=>[s(" \u6DFB\u52A0\u5728parent3\u5185\u6DFB\u52A0\u8282\u70B9 ")]),_:1}),a(n,{onClick:e[8]||(e[8]=r=>u.deleteNodeByKey("2-2")),class:"mr-2"},{default:l(()=>[s(" \u5220\u9664parent3\u8282\u70B9 ")]),_:1}),a(n,{onClick:e[9]||(e[9]=r=>u.updateNodeByKey("1-1")),class:"mr-2"},{default:l(()=>[s(" \u66F4\u65B0parent2\u8282\u70B9 ")]),_:1})]),a(d,{treeData:u.treeData,title:"\u51FD\u6570\u64CD\u4F5C",ref:"treeRef",checkable:!0},null,8,["treeData"])]),_:1})}var ue=F(w,[["render",P]]);export{ue as default};
