import{B as s}from"./TableImg.6efe76f4.js";import{l as d}from"./BasicForm.b74b745c.js";import{u as c}from"./useTable.3a6eb613.js";import{d as F}from"./table.deeabee4.js";import{aw as h,a as b,ay as a,o as r,h as f,n as B,z as A,j as C,l as w}from"./index.ab98c7b1.js";import"./index.0f354445.js";import"./Checkbox.8b1c65a3.js";import"./index.d66f9c31.js";import"./index.1cc74673.js";import"./eagerComputed.63cc3594.js";import"./useForm.73245f7c.js";import"./index.ffeead41.js";import"./index.07e55bad.js";import"./index.21cec426.js";import"./useSize.fc2ee807.js";import"./useWindowSizeFn.72b72c1d.js";import"./useContentViewHeight.4e203b13.js";import"./ArrowLeftOutlined.0928a200.js";import"./index.e61a59c9.js";import"./transButton.8a692425.js";import"./index.50806c50.js";import"./index.f80fd37c.js";import"./index.b78b34ac.js";import"./uuid.2b29000c.js";import"./index.ae4af0cf.js";import"./_baseIteratee.2d32e8d8.js";import"./get.c8fc8848.js";import"./DeleteOutlined.21a25305.js";import"./index.e42d69e1.js";import"./useRefs.0af5cbd8.js";import"./Form.22896c14.js";import"./Col.3bd69772.js";import"./useFlexGapSupport.121cfba4.js";import"./index.9e6faf70.js";import"./FullscreenOutlined.19a716cc.js";import"./index.7dc1d591.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c0e291cf.js";import"./index.c54bd162.js";import"./fromPairs.84aabb58.js";import"./scrollTo.0e9e42f3.js";import"./index.16a08b89.js";/* empty css              *//* empty css              */import"./index.29480bc9.js";import"./index.3fc9314b.js";import"./index.c1554983.js";import"./download.b97f2402.js";import"./base64Conver.08b9f4ec.js";import"./index.0a062903.js";import"./index.7745012e.js";import"./uniqBy.21a9e22b.js";const I=[{title:"\u7F16\u53F7",dataIndex:"no",width:100},{title:"\u59D3\u540D",dataIndex:"name",width:200,auth:"test"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u72B6\u60011",dataIndex:"status1"},{title:"\u72B6\u60012",dataIndex:"status2"},{title:"\u72B6\u60013",dataIndex:"status3"},{title:"\u72B6\u60014",dataIndex:"status4"},{title:"\u72B6\u60015",dataIndex:"status5"},{title:"\u5730\u5740",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],T=b({components:{BasicTable:s,TableAction:d},setup(){const[t]=c({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:F,columns:I,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function i(e){}function u(e){}function n(e){}return{registerTable:t,handleEdit:i,handleDelete:u,handleOpen:n}}}),x={class:"p-4"};function _(t,i,u,n,e,E){const l=a("TableAction"),p=a("BasicTable");return r(),f("div",x,[B(p,{onRegister:t.registerTable},{bodyCell:A(({column:m,record:o})=>[m.key==="action"?(r(),C(l,{key:0,actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,o),auth:"other"},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,o),auth:"super"}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:g=>o.status!=="enable"},{label:"\u7981\u7528",popConfirm:{title:"\u662F\u5426\u7981\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:()=>o.status==="enable"},{label:"\u540C\u65F6\u63A7\u5236",popConfirm:{title:"\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",confirm:t.handleOpen.bind(null,o)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])])}var Et=h(T,[["render",_]]);export{Et as default};
