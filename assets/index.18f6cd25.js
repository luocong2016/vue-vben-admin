import{v as _,cc as Ba,M as Ja,a as ua,f as J,n as v,c2 as ea,R as ha,S as z,L as Wa,_ as Z,cd as G,a6 as E,N as za,a7 as ya,ce as Lt,b7 as Mt,cf as Kt,cg as Ot,G as Qa,a4 as Wt,K as zt,bc as Dt,ch as vt,T as ba,ci as yt,X as dt,cj as _a,ck as Ft,ar as wt,Q as jt,$ as Ht,cl as Vt,c1 as Gt,c5 as Za,J as Ut,cm as Yt,cn as ct,c7 as $t,Y as Xt}from"./index.ab98c7b1.js";import{u as Zt}from"./useRefs.0af5cbd8.js";import{P as Jt}from"./PlusOutlined.f965ae47.js";function Qt(y){var a=_(),t=_(!1);function i(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];t.value||(Ba.cancel(a.value),a.value=Ba(function(){y.apply(void 0,r)}))}return Ja(function(){t.value=!0,Ba.cancel(a.value)}),i}function qt(y){var a=_([]),t=_(typeof y=="function"?y():y),i=Qt(function(){var r=t.value;a.value.forEach(function(s){r=s(r)}),a.value=[],t.value=r});function n(r){a.value.push(r),i()}return[t,n]}var an=ua({name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(a,t){var i=t.expose,n=t.attrs,r=_();function s(l){var f;!((f=a.tab)===null||f===void 0)&&f.disabled||a.onClick(l)}i({domRef:r});function d(l){var f;l.preventDefault(),l.stopPropagation(),a.editable.onEdit("remove",{key:(f=a.tab)===null||f===void 0?void 0:f.key,event:l})}var o=J(function(){var l;return a.editable&&a.closable!==!1&&!(!((l=a.tab)===null||l===void 0)&&l.disabled)});return function(){var l,f,h=a.prefixCls,g=a.id,L=a.active,T=a.tab,D=T.key,C=T.tab,j=T.disabled,w=T.closeIcon,b=a.renderWrapper,B=a.removeAriaLabel,H=a.editable,M=a.onFocus,I="".concat(h,"-tab"),K=v("div",{key:D,ref:r,class:ha(I,(l={},z(l,"".concat(I,"-with-remove"),o.value),z(l,"".concat(I,"-active"),L),z(l,"".concat(I,"-disabled"),j),l)),style:n.style,onClick:s},[v("div",{role:"tab","aria-selected":L,id:g&&"".concat(g,"-tab-").concat(D),class:"".concat(I,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(D),"aria-disabled":j,tabindex:j?null:0,onClick:function(O){O.stopPropagation(),s(O)},onKeydown:function(O){[ea.SPACE,ea.ENTER].includes(O.which)&&(O.preventDefault(),s(O))},onFocus:M},[typeof C=="function"?C():C]),o.value&&v("button",{type:"button","aria-label":B||"remove",tabindex:0,class:"".concat(I,"-remove"),onClick:function(O){O.stopPropagation(),d(O)}},[(w==null?void 0:w())||((f=H.removeIcon)===null||f===void 0?void 0:f.call(H))||"\xD7"])]);return b?b(K):K}}}),ut={width:0,height:0,left:0,top:0};function tn(y,a){var t=_(new Map);return Wa(function(){for(var i,n,r=new Map,s=y.value,d=a.value.get((i=s[0])===null||i===void 0?void 0:i.key)||ut,o=d.left+d.width,l=0;l<s.length;l+=1){var f=s[l].key,h=a.value.get(f);h||(h=a.value.get((n=s[l-1])===null||n===void 0?void 0:n.key)||ut);var g=r.get(f)||Z({},h);g.right=o-g.left-g.width,r.set(f,g)}t.value=new Map(r)}),t}var kt=ua({name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(a,t){var i=t.expose,n=t.attrs,r=_();return i({domRef:r}),function(){var s=a.prefixCls,d=a.editable,o=a.locale;return!d||d.showAdd===!1?null:v("button",{ref:r,type:"button",class:"".concat(s,"-nav-add"),style:n.style,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(f){d.onEdit("add",{event:f})}},[d.addIcon?d.addIcon():"+"])}}}),nn={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Qa.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}},en=ua({name:"OperationNode",inheritAttrs:!1,props:nn,emits:["tabClick"],slots:["moreIcon"],setup:function(a,t){var i=t.attrs,n=t.slots,r=G(!1),s=E(r,2),d=s[0],o=s[1],l=G(null),f=E(l,2),h=f[0],g=f[1],L=function(b){for(var B=a.tabs.filter(function(U){return!U.disabled}),H=B.findIndex(function(U){return U.key===h.value})||0,M=B.length,I=0;I<M;I+=1){H=(H+b+M)%M;var K=B[H];if(!K.disabled){g(K.key);return}}},T=function(b){var B=b.which;if(!d.value){[ea.DOWN,ea.SPACE,ea.ENTER].includes(B)&&(o(!0),b.preventDefault());return}switch(B){case ea.UP:L(-1),b.preventDefault();break;case ea.DOWN:L(1),b.preventDefault();break;case ea.ESC:o(!1);break;case ea.SPACE:case ea.ENTER:h.value!==null&&a.onTabClick(h.value,b);break}},D=J(function(){return"".concat(a.id,"-more-popup")}),C=J(function(){return h.value!==null?"".concat(D.value,"-").concat(h.value):null}),j=function(b,B){b.preventDefault(),b.stopPropagation(),a.editable.onEdit("remove",{key:B,event:b})};return za(function(){ya(h,function(){var w=document.getElementById(C.value);w&&w.scrollIntoView&&w.scrollIntoView(!1)},{flush:"post",immediate:!0})}),ya(d,function(){d.value||g(null)}),function(){var w,b=a.prefixCls,B=a.id,H=a.tabs,M=a.locale,I=a.mobile,K=a.moreIcon,U=K===void 0?((w=n.moreIcon)===null||w===void 0?void 0:w.call(n))||v(Lt,null,null):K,O=a.moreTransitionName,F=a.editable,la=a.tabBarGutter,m=a.rtl,e=a.onTabClick,c="".concat(b,"-dropdown"),k=M==null?void 0:M.dropdownAriaLabel,W=z({},m?"marginRight":"marginLeft",la);H.length||(W.visibility="hidden",W.order=1);var R=ha(z({},"".concat(c,"-rtl"),m)),P=I?null:v(Ot,{prefixCls:c,trigger:["hover"],visible:d.value,transitionName:O,onVisibleChange:o,overlayClassName:R,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return v(Mt,{onClick:function(A){var Y=A.key,ra=A.domEvent;e(Y,ra),o(!1)},id:D.value,tabindex:-1,role:"listbox","aria-activedescendant":C.value,selectedKeys:[h.value],"aria-label":k!==void 0?k:"expanded dropdown"},{default:function(){return[H.map(function(A){var Y,ra,ka=F&&A.closable!==!1&&!A.disabled;return v(Kt,{key:A.key,id:"".concat(D.value,"-").concat(A.key),role:"option","aria-controls":B&&"".concat(B,"-panel-").concat(A.key),disabled:A.disabled},{default:function(){return[v("span",null,[typeof A.tab=="function"?A.tab():A.tab]),ka&&v("button",{type:"button","aria-label":a.removeAriaLabel||"remove",tabindex:0,class:"".concat(c,"-menu-item-remove"),onClick:function(va){va.stopPropagation(),j(va,A.key)}},[((Y=A.closeIcon)===null||Y===void 0?void 0:Y.call(A))||((ra=F.removeIcon)===null||ra===void 0?void 0:ra.call(F))||"\xD7"])]}})})]}})},default:function(){return v("button",{type:"button",class:"".concat(b,"-nav-more"),style:W,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":D.value,id:"".concat(B,"-more"),"aria-expanded":d.value,onKeydown:T},[U])}});return v("div",{class:ha("".concat(b,"-nav-operations"),i.class),style:i.style},[P,v(kt,{prefixCls:b,locale:M,editable:F},null)])}}}),St=Symbol("tabsContextKey"),Tt=function(a){Wt(St,a)},Ct=function(){return zt(St,{tabs:_([]),prefixCls:_()})};ua({name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(a,t){var i=t.slots;return Tt(Dt(a)),function(){var n;return(n=i.default)===null||n===void 0?void 0:n.call(i)}}});var rn=.1,ft=.01,Oa=20,pt=Math.pow(.995,Oa);function sn(y,a){var t=G(),i=E(t,2),n=i[0],r=i[1],s=G(0),d=E(s,2),o=d[0],l=d[1],f=G(0),h=E(f,2),g=h[0],L=h[1],T=G(),D=E(T,2),C=D[0],j=D[1],w=_();function b(m){var e=m.touches[0],c=e.screenX,k=e.screenY;r({x:c,y:k}),clearInterval(w.value)}function B(m){if(!!n.value){m.preventDefault();var e=m.touches[0],c=e.screenX,k=e.screenY,W=c-n.value.x,R=k-n.value.y;a(W,R),r({x:c,y:k});var P=Date.now();L(P-o.value),l(P),j({x:W,y:R})}}function H(){if(!!n.value){var m=C.value;if(r(null),j(null),m){var e=m.x/g.value,c=m.y/g.value,k=Math.abs(e),W=Math.abs(c);if(Math.max(k,W)<rn)return;var R=e,P=c;w.value=setInterval(function(){if(Math.abs(R)<ft&&Math.abs(P)<ft){clearInterval(w.value);return}R*=pt,P*=pt,a(R*Oa,P*Oa)},Oa)}}}var M=_();function I(m){var e=m.deltaX,c=m.deltaY,k=0,W=Math.abs(e),R=Math.abs(c);W===R?k=M.value==="x"?e:c:W>R?(k=e,M.value="x"):(k=c,M.value="y"),a(-k,-k)&&m.preventDefault()}var K=_({onTouchStart:b,onTouchMove:B,onTouchEnd:H,onWheel:I});function U(m){K.value.onTouchStart(m)}function O(m){K.value.onTouchMove(m)}function F(m){K.value.onTouchEnd(m)}function la(m){K.value.onWheel(m)}za(function(){var m,e;document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",F,{passive:!1}),(m=y.value)===null||m===void 0||m.addEventListener("touchstart",U,{passive:!1}),(e=y.value)===null||e===void 0||e.addEventListener("wheel",la,{passive:!1})}),Ja(function(){document.removeEventListener("touchmove",O),document.removeEventListener("touchend",F)})}function mt(y,a){var t=_(y);function i(n){var r=typeof n=="function"?n(t.value):n;r!==t.value&&a(r,t.value),t.value=r}return[t,i]}var ht={width:0,height:0,left:0,top:0,right:0},on=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:Qa.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}},gt=ua({name:"TabNavList",inheritAttrs:!1,props:on(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(a,t){var i=t.attrs,n=t.slots,r=Ct(),s=r.tabs,d=r.prefixCls,o=_(),l=_(),f=_(),h=_(),g=Zt(),L=E(g,2),T=L[0],D=L[1],C=J(function(){return a.tabPosition==="top"||a.tabPosition==="bottom"}),j=mt(0,function(p,x){C.value&&a.onTabScroll&&a.onTabScroll({direction:p>x?"left":"right"})}),w=E(j,2),b=w[0],B=w[1],H=mt(0,function(p,x){!C.value&&a.onTabScroll&&a.onTabScroll({direction:p>x?"top":"bottom"})}),M=E(H,2),I=M[0],K=M[1],U=G(0),O=E(U,2),F=O[0],la=O[1],m=G(0),e=E(m,2),c=e[0],k=e[1],W=G(null),R=E(W,2),P=R[0],wa=R[1],ga=G(null),A=E(ga,2),Y=A[0],ra=A[1],ka=G(0),xa=E(ka,2),Sa=xa[0],va=xa[1],Aa=G(0),Q=E(Aa,2),Da=Q[0],Ra=Q[1],Na=qt(new Map),La=E(Na,2),Fa=La[0],Ta=La[1],Ma=tn(s,Fa),Pt=J(function(){return"".concat(d.value,"-nav-operations-hidden")}),Ca=_(0),Ia=_(0);Wa(function(){C.value?a.rtl?(Ca.value=0,Ia.value=Math.max(0,F.value-P.value)):(Ca.value=Math.min(0,P.value-F.value),Ia.value=0):(Ca.value=Math.min(0,Y.value-c.value),Ia.value=0)});var ja=function(x){return x<Ca.value?Ca.value:x>Ia.value?Ia.value:x},qa=_(),Et=G(),at=E(Et,2),Ha=at[0],tt=at[1],Va=function(){tt(Date.now())},Ga=function(){clearTimeout(qa.value)},nt=function(x,u){x(function(N){var S=ja(N+u);return S})};sn(o,function(p,x){if(C.value){if(P.value>=F.value)return!1;nt(B,p)}else{if(Y.value>=c.value)return!1;nt(K,x)}return Ga(),Va(),!0}),ya(Ha,function(){Ga(),Ha.value&&(qa.value=setTimeout(function(){tt(0)},100))});var et=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a.activeKey,u=Ma.value.get(x)||{width:0,height:0,left:0,right:0,top:0};if(C.value){var N=b.value;a.rtl?u.right<b.value?N=u.right:u.right+u.width>b.value+P.value&&(N=u.right+u.width-P.value):u.left<-b.value?N=-u.left:u.left+u.width>-b.value+P.value&&(N=-(u.left+u.width-P.value)),K(0),B(ja(N))}else{var S=I.value;u.top<-I.value?S=-u.top:u.top+u.height>-I.value+Y.value&&(S=-(u.top+u.height-Y.value)),B(0),K(ja(S))}},Ua=_(0),Ya=_(0);Wa(function(){var p,x,u,N,S,$,X,fa=Ma.value;["top","bottom"].includes(a.tabPosition)?(x="width",S=P.value,$=F.value,X=Sa.value,u=a.rtl?"right":"left",N=Math.abs(b.value)):(x="height",S=Y.value,$=F.value,X=Da.value,u="top",N=-I.value);var q=S;$+X>S&&$<S&&(q=S-X);var sa=s.value;if(!sa.length){var ia;return ia=[0,0],Ua.value=ia[0],Ya.value=ia[1],ia}for(var pa=sa.length,V=pa,ta=0;ta<pa;ta+=1){var na=fa.get(sa[ta].key)||ht;if(na[u]+na[x]>N+q){V=ta-1;break}}for(var oa=0,aa=pa-1;aa>=0;aa-=1){var ma=fa.get(sa[aa].key)||ht;if(ma[u]<N){oa=aa+1;break}}return p=[oa,V],Ua.value=p[0],Ya.value=p[1],p});var $a=function(){var x,u,N,S,$,X=((x=o.value)===null||x===void 0?void 0:x.offsetWidth)||0,fa=((u=o.value)===null||u===void 0?void 0:u.offsetHeight)||0,q=((N=h.value)===null||N===void 0?void 0:N.$el)||{},sa=q.offsetWidth||0,ia=q.offsetHeight||0;wa(X),ra(fa),va(sa),Ra(ia);var pa=(((S=l.value)===null||S===void 0?void 0:S.offsetWidth)||0)-sa,V=((($=l.value)===null||$===void 0?void 0:$.offsetHeight)||0)-ia;la(pa),k(V),Ta(function(){var ta=new Map;return s.value.forEach(function(na){var oa=na.key,aa,ma=D.value.get(oa),ca=((aa=ma)===null||aa===void 0?void 0:aa.$el)||ma;ca&&ta.set(oa,{width:ca.offsetWidth,height:ca.offsetHeight,left:ca.offsetLeft,top:ca.offsetTop})}),ta})},rt=J(function(){return[].concat(dt(s.value.slice(0,Ua.value)),dt(s.value.slice(Ya.value+1)))}),_t=G(),st=E(_t,2),Bt=st[0],At=st[1],da=J(function(){return Ma.value.get(a.activeKey)}),it=_(),ot=function(){Ba.cancel(it.value)};ya([da,C,function(){return a.rtl}],function(){var p={};da.value&&(C.value?(a.rtl?p.right=_a(da.value.right):p.left=_a(da.value.left),p.width=_a(da.value.width)):(p.top=_a(da.value.top),p.height=_a(da.value.height))),ot(),it.value=Ba(function(){At(p)})}),ya([function(){return a.activeKey},da,Ma,C],function(){et()},{flush:"post"}),ya([function(){return a.rtl},function(){return a.tabBarGutter},function(){return a.activeKey},function(){return s.value}],function(){$a()},{flush:"post"});var Xa=function(x){var u=x.position,N=x.prefixCls,S=x.extra;if(!S)return null;var $=S==null?void 0:S({position:u});return $?v("div",{class:"".concat(N,"-extra-content")},[$]):null};return Ja(function(){Ga(),ot()}),function(){var p,x=a.id,u=a.animated,N=a.activeKey,S=a.rtl,$=a.editable,X=a.locale,fa=a.tabPosition,q=a.tabBarGutter,sa=a.onTabClick,ia=i.class,pa=i.style,V=d.value,ta=!!rt.value.length,na="".concat(V,"-nav-wrap"),oa,aa,ma,ca;C.value?S?(aa=b.value>0,oa=b.value+P.value<F.value):(oa=b.value<0,aa=-b.value+P.value<F.value):(ma=I.value<0,ca=-I.value+Y.value<c.value);var Ka={};fa==="top"||fa==="bottom"?Ka[S?"marginRight":"marginLeft"]=typeof q=="number"?"".concat(q,"px"):q:Ka.marginTop=typeof q=="number"?"".concat(q,"px"):q;var bt=s.value.map(function(Pa,lt){var Ea=Pa.key;return v(an,{id:x,prefixCls:V,key:Ea,tab:Pa,style:lt===0?void 0:Ka,closable:Pa.closable,editable:$,active:Ea===N,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:T(Ea),onClick:function(Nt){sa(Ea,Nt)},onFocus:function(){et(Ea),Va(),o.value&&(S||(o.value.scrollLeft=0),o.value.scrollTop=0)}},n)});return v("div",{role:"tablist",class:ha("".concat(V,"-nav"),ia),style:pa,onKeydown:function(){Va()}},[v(Xa,{position:"left",prefixCls:V,extra:n.leftExtra},null),v(vt,{onResize:$a},{default:function(){return[v("div",{class:ha(na,(p={},z(p,"".concat(na,"-ping-left"),oa),z(p,"".concat(na,"-ping-right"),aa),z(p,"".concat(na,"-ping-top"),ma),z(p,"".concat(na,"-ping-bottom"),ca),p)),ref:o},[v(vt,{onResize:$a},{default:function(){return[v("div",{ref:l,class:"".concat(V,"-nav-list"),style:{transform:"translate(".concat(b.value,"px, ").concat(I.value,"px)"),transition:Ha.value?"none":void 0}},[bt,v(kt,{ref:h,prefixCls:V,locale:X,editable:$,style:Z(Z({},bt.length===0?void 0:Ka),{visibility:ta?"hidden":null})},null),v("div",{class:ha("".concat(V,"-ink-bar"),z({},"".concat(V,"-ink-bar-animated"),u.inkBar)),style:Bt.value},null)])]}})])]}}),v(en,ba(ba({},a),{},{removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:f,prefixCls:V,tabs:rt.value,class:!ta&&Pt.value}),yt(n,["moreIcon"])),v(Xa,{position:"right",prefixCls:V,extra:n.rightExtra},null),v(Xa,{position:"right",prefixCls:V,extra:n.tabBarExtraContent},null)])}}}),bn=ua({name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(a){var t=Ct(),i=t.tabs,n=t.prefixCls;return function(){var r=a.id,s=a.activeKey,d=a.animated,o=a.tabPosition,l=a.rtl,f=a.destroyInactiveTabPane,h=d.tabPane,g=n.value,L=i.value.findIndex(function(T){return T.key===s});return v("div",{class:"".concat(g,"-content-holder")},[v("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(o),z({},"".concat(g,"-content-animated"),h)],style:L&&h?z({},l?"marginRight":"marginLeft","-".concat(L,"00%")):null},[i.value.map(function(T){return Ft(T.node,{key:T.key,prefixCls:g,tabKey:T.key,id:r,animated:h,active:T.key===s,destroyInactiveTabPane:f})})])])}}}),xt=0,It=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:Qa.any}};function ln(y){return y.map(function(a){if(Ht(a)){for(var t=Z({},a.props||{}),i=0,n=Object.entries(t);i<n.length;i++){var r=E(n[i],2),s=r[0],d=r[1];delete t[s],t[Vt(s)]=d}var o=a.children||{},l=a.key!==void 0?a.key:void 0,f=t.tab,h=f===void 0?o.tab:f,g=t.disabled,L=t.forceRender,T=t.closable,D=t.animated,C=t.active,j=t.destroyInactiveTabPane;return Z(Z({key:l},t),{node:a,closeIcon:o.closeIcon,tab:h,disabled:g===""||g,forceRender:L===""||L,closable:T===""||T,animated:D===""||D,active:C===""||C,destroyInactiveTabPane:j===""||j})}return null}).filter(function(a){return a})}var vn=ua({name:"InternalTabs",inheritAttrs:!1,props:Z(Z({},wt(It(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(a,t){var i=t.attrs,n=t.slots;Za(a.onPrevClick===void 0&&a.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Za(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Za(n.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var r=Ut("tabs",a),s=r.prefixCls,d=r.direction,o=r.size,l=r.rootPrefixCls,f=J(function(){return d.value==="rtl"}),h=J(function(){var e=a.animated,c=a.tabPosition;return e===!1||["left","right"].includes(c)?{inkBar:!1,tabPane:!1}:e===!0?{inkBar:!0,tabPane:!0}:Z({inkBar:!0,tabPane:!1},Xt(e)==="object"?e:{})}),g=G(!1),L=E(g,2),T=L[0],D=L[1];za(function(){D(Yt())});var C=ct(function(){var e;return(e=a.tabs[0])===null||e===void 0?void 0:e.key},{value:J(function(){return a.activeKey}),defaultValue:a.defaultActiveKey}),j=E(C,2),w=j[0],b=j[1],B=G(function(){return a.tabs.findIndex(function(e){return e.key===w.value})}),H=E(B,2),M=H[0],I=H[1];Wa(function(){var e,c=a.tabs.findIndex(function(k){return k.key===w.value});c===-1&&(c=Math.max(0,Math.min(M.value,a.tabs.length-1)),b((e=a.tabs[c])===null||e===void 0?void 0:e.key)),I(c)});var K=ct(null,{value:J(function(){return a.id})}),U=E(K,2),O=U[0],F=U[1],la=J(function(){return T.value&&!["left","right"].includes(a.tabPosition)?"top":a.tabPosition});za(function(){a.id||(F("rc-tabs-".concat(xt)),xt+=1)});var m=function(c,k){var W,R;(W=a.onTabClick)===null||W===void 0||W.call(a,c,k);var P=c!==w.value;b(c),P&&((R=a.onChange)===null||R===void 0||R.call(a,c))};return Tt({tabs:J(function(){return a.tabs}),prefixCls:s}),function(){var e,c=a.id,k=a.type,W=a.tabBarGutter,R=a.tabBarStyle,P=a.locale,wa=a.destroyInactiveTabPane,ga=a.renderTabBar,A=ga===void 0?n.renderTabBar:ga,Y=a.onTabScroll,ra=a.hideAdd,ka=a.centered,xa={id:O.value,activeKey:w.value,animated:h.value,tabPosition:la.value,rtl:f.value,mobile:T.value},Sa;k==="editable-card"&&(Sa={onEdit:function(Ra,Na){var La=Na.key,Fa=Na.event,Ta;(Ta=a.onEdit)===null||Ta===void 0||Ta.call(a,Ra==="add"?Fa:La,Ra)},removeIcon:function(){return v($t,null,null)},addIcon:n.addIcon?n.addIcon:function(){return v(Jt,null,null)},showAdd:ra!==!0});var va,Aa=Z(Z({},xa),{moreTransitionName:"".concat(l.value,"-slide-up"),editable:Sa,locale:P,tabBarGutter:W,onTabClick:m,onTabScroll:Y,style:R});A?va=A(Z(Z({},Aa),{DefaultTabBar:gt})):va=v(gt,Aa,yt(n,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var Q=s.value;return v("div",ba(ba({},i),{},{id:c,class:ha(Q,"".concat(Q,"-").concat(la.value),(e={},z(e,"".concat(Q,"-").concat(o.value),o.value),z(e,"".concat(Q,"-card"),["card","editable-card"].includes(k)),z(e,"".concat(Q,"-editable-card"),k==="editable-card"),z(e,"".concat(Q,"-centered"),ka),z(e,"".concat(Q,"-mobile"),T.value),z(e,"".concat(Q,"-editable"),k==="editable-card"),z(e,"".concat(Q,"-rtl"),f.value),e),i.class)}),[va,v(bn,ba(ba({destroyInactiveTabPane:wa},xa),{},{animated:h.value}),null)])}}}),fn=ua({name:"ATabs",inheritAttrs:!1,props:wt(It(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(a,t){var i=t.attrs,n=t.slots,r=t.emit,s=function(o){r("update:activeKey",o),r("change",o)};return function(){var d,o=ln(jt((d=n.default)===null||d===void 0?void 0:d.call(n)));return v(vn,ba(ba(ba({},Gt(a,["onUpdate:activeKey"])),i),{},{onChange:s,tabs:o}),n)}}});export{fn as T};
