import{B as b}from"./TableImg.6efe76f4.js";import{l as C}from"./BasicForm.b74b745c.js";import{u as g}from"./useTable.3a6eb613.js";import{d as T}from"./system.509581d8.js";import{u as w}from"./index.54a65bca.js";import{M as D,c as _,s as S}from"./MenuDrawer.4b2dccf0.js";import{aw as B,a as k,ay as t,o as h,h as F,n as m,z as p,B as y,j as M,l as A,al as E}from"./index.ab98c7b1.js";import"./index.0f354445.js";import"./Checkbox.8b1c65a3.js";import"./index.d66f9c31.js";import"./index.1cc74673.js";import"./eagerComputed.63cc3594.js";import"./useForm.73245f7c.js";import"./index.ffeead41.js";import"./index.07e55bad.js";import"./index.21cec426.js";import"./useSize.fc2ee807.js";import"./useWindowSizeFn.72b72c1d.js";import"./useContentViewHeight.4e203b13.js";import"./ArrowLeftOutlined.0928a200.js";import"./index.e61a59c9.js";import"./transButton.8a692425.js";import"./index.50806c50.js";import"./index.f80fd37c.js";import"./index.b78b34ac.js";import"./uuid.2b29000c.js";import"./index.ae4af0cf.js";import"./_baseIteratee.2d32e8d8.js";import"./get.c8fc8848.js";import"./DeleteOutlined.21a25305.js";import"./index.e42d69e1.js";import"./useRefs.0af5cbd8.js";import"./Form.22896c14.js";import"./Col.3bd69772.js";import"./useFlexGapSupport.121cfba4.js";import"./index.9e6faf70.js";import"./FullscreenOutlined.19a716cc.js";import"./index.7dc1d591.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.c0e291cf.js";import"./index.c54bd162.js";import"./fromPairs.84aabb58.js";import"./scrollTo.0e9e42f3.js";import"./index.16a08b89.js";/* empty css              *//* empty css              */import"./index.29480bc9.js";import"./index.3fc9314b.js";import"./index.c1554983.js";import"./download.b97f2402.js";import"./base64Conver.08b9f4ec.js";import"./index.0a062903.js";import"./index.7745012e.js";import"./uniqBy.21a9e22b.js";import"./index.bcc385e0.js";const R=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:D,TableAction:C},setup(){const[e,{openDrawer:r}]=w(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:_,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function s(){E(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:s}}});function v(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),s=t("MenuDrawer");return h(),F("div",null,[m(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[m(i,{type:"primary",onClick:e.handleCreate},{default:p(()=>[y(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:p(({column:o,record:f})=>[o.key==="action"?(h(),M(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),m(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var $e=B(R,[["render",v]]);export{$e as default};
