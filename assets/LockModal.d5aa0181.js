var f=(e,m,r)=>new Promise((c,a)=>{var d=o=>{try{t(r.next(o))}catch(i){a(i)}},s=o=>{try{t(r.throw(o))}catch(i){a(i)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(d,s);t((r=r.apply(e,m)).next())});import{aw as w,a as C,b as y,s as $,f as _,ay as u,o as x,j as F,z as h,i as p,q as l,t as g,n as k,B as L,az as M,c as S}from"./index.ab98c7b1.js";import{B as I,a as N}from"./index.9e6faf70.js";import{B as R}from"./BasicForm.b74b745c.js";import{u as P}from"./useForm.73245f7c.js";import{u as z}from"./lock.ed9c5097.js";import{h as U}from"./header.d801b988.js";import"./useWindowSizeFn.72b72c1d.js";import"./FullscreenOutlined.19a716cc.js";/* empty css              *//* empty css              */import"./index.7dc1d591.js";import"./index.0f354445.js";import"./Checkbox.8b1c65a3.js";import"./index.d66f9c31.js";import"./index.b78b34ac.js";import"./index.50806c50.js";import"./index.f80fd37c.js";import"./index.29480bc9.js";import"./get.c8fc8848.js";import"./index.1cc74673.js";import"./eagerComputed.63cc3594.js";import"./index.ae4af0cf.js";import"./_baseIteratee.2d32e8d8.js";import"./DeleteOutlined.21a25305.js";import"./index.e42d69e1.js";import"./useRefs.0af5cbd8.js";import"./Form.22896c14.js";import"./Col.3bd69772.js";import"./useFlexGapSupport.121cfba4.js";import"./useSize.fc2ee807.js";import"./transButton.8a692425.js";import"./index.3fc9314b.js";import"./index.c1554983.js";import"./index.c54bd162.js";import"./uuid.2b29000c.js";import"./download.b97f2402.js";import"./base64Conver.08b9f4ec.js";import"./index.0a062903.js";import"./index.7745012e.js";import"./uniqBy.21a9e22b.js";const V=C({name:"LockModal",components:{BasicModal:I,BasicForm:R},setup(){const{t:e}=S(),{prefixCls:m}=y("header-lock-modal"),r=$(),c=z(),a=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realName}),[d,{closeModal:s}]=N(),[t,{validateFields:o,resetFields:i}]=P({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const b=(yield o()).password;s(),c.setLockInfo({isLock:!0,pwd:b}),yield i()})}const B=_(()=>{const{avatar:n}=r.getUserInfo;return n||U});return{t:e,prefixCls:m,getRealName:a,register:d,registerForm:t,handleLock:v,avatar:B}}}),q=["src"];function D(e,m,r,c,a,d){const s=u("BasicForm"),t=u("a-button"),o=u("BasicModal");return x(),F(o,M({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:h(()=>[p("div",{class:l(`${e.prefixCls}__entry`)},[p("div",{class:l(`${e.prefixCls}__header`)},[p("img",{src:e.avatar,class:l(`${e.prefixCls}__header-img`)},null,10,q),p("p",{class:l(`${e.prefixCls}__header-name`)},g(e.getRealName),3)],2),k(s,{onRegister:e.registerForm},null,8,["onRegister"]),p("div",{class:l(`${e.prefixCls}__footer`)},[k(t,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:h(()=>[L(g(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var Fe=w(V,[["render",D]]);export{Fe as default};
