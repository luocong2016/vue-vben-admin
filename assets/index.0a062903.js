var he=Object.defineProperty,ue=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var L=Math.pow,q=(r,e,t)=>e in r?he(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,k=(r,e)=>{for(var t in e||(e={}))fe.call(e,t)&&q(r,t,e[t]);if(W)for(var t of W(e))ge.call(e,t)&&q(r,t,e[t]);return r},T=(r,e)=>ue(r,de(e));import{a as pe,I as me,aG as P,v as be,b as ye,f as ve,L as Me,a7 as ke,aw as Ee,ay as we,o as z,h as De,j as Se,aA as Te,aB as Ae,az as xe,l as Ie,i as F,q as j,k as _,z as Le,aC as Ce,aD as Pe,aE as je,aF as _e}from"./index.ab98c7b1.js";const Re=r=>Object.keys(r).length===0,N=(r,e)=>r.push.apply(r,e),Oe=(r,e)=>r.split("").map(s=>e[s]||s).join(""),x=r=>r.sort((e,t)=>e.i-t.i||e.j-t.j),V=r=>{const e={};let t=1;return r.forEach(s=>{e[s]=t,t+=1}),e};var Ne={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const B=2050,H=1e3,$e=Ne,Ge=10,Ye=1e4,X=10,J=50,Q=20,ee=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,Ue=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,We=/^[A-Z\xbf-\xdf]+$/,te=/^[^a-z\xdf-\xff]+$/,qe=/^[a-z\xdf-\xff]+$/,ze=/^[^A-Z\xbf-\xdf]+$/,Fe=/[a-z\xdf-\xff]/,Ve=/[A-Z\xbf-\xdf]/,Be=/[^A-Za-z\xbf-\xdf]/gi,He=/^\d+$/,G=new Date().getFullYear(),Ze={recentYear:/19\d\d|200\d|201\d|202\d/g};class Ke{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return x(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=e.length);a+=1){const i=e.slice(n,+a+1||9e9),o=s.exec(i);if(o!=null){const c=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);c!=null&&t.push({pattern:"date",token:i,i:n,j:a,separator:o[2],year:c.year,month:c.month,day:c.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=a=>Math.abs(a.year-G);for(let a=0;a<=Math.abs(e.length-4);a+=1)for(let i=a+3;i<=a+7&&!(i>=e.length);i+=1){const o=e.slice(a,+i+1||9e9);if(s.exec(o)){const c=[],l=o.length;if($e[l].forEach(([d,p])=>{const m=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,d),10),parseInt(o.slice(d,p),10),parseInt(o.slice(p),10)]);m!=null&&c.push(m)}),c.length>0){let d=c[0],p=n(c[0]);c.slice(1).forEach(m=>{const u=n(m);u<p&&(d=m,p=u)}),t.push({pattern:"date",token:o,i:a,j:i,separator:"",year:d.year,month:d.month,day:d.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let a=0;a<n;a+=1){const i=e[a];if(t!==i&&i.i<=t.i&&i.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let a=0,i=e.length;a<i;a+=1){const o=e[a];if(o>99&&o<H||o>B)return null;o>31&&(s+=1),o>12&&(t+=1),o<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[a,i]=t[n];if(H<=a&&a<=B){const o=this.mapIntegersToDayMonth(i);return o!=null?{year:a,month:o.month,day:o.day}:null}}for(let n=0;n<s;n+=1){const[a,i]=t[n],o=this.mapIntegersToDayMonth(i);if(o!=null)return{year:this.twoToFourDigitYear(a),month:o.month,day:o.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],a=n[0],i=n[1];if(a>=1&&a<=31&&i>=1&&i<=12)return{day:a,month:i}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const D=new Uint32Array(65536),Xe=(r,e)=>{const t=r.length,s=e.length,n=1<<t-1;let a=-1,i=0,o=t,c=t;for(;c--;)D[r.charCodeAt(c)]|=1<<c;for(c=0;c<s;c++){let l=D[e.charCodeAt(c)];const f=l|i;l|=(l&a)+a^a,i|=~(l|a),a&=l,i&n&&o++,a&n&&o--,i=i<<1|1,a=a<<1|~(f|i),i&=f}for(c=t;c--;)D[r.charCodeAt(c)]=0;return o},Je=(r,e)=>{const t=r.length,s=e.length,n=[],a=[],i=Math.ceil(t/32),o=Math.ceil(s/32);let c=s;for(let u=0;u<i;u++)a[u]=-1,n[u]=0;let l=0;for(;l<o-1;l++){let u=0,b=-1;const S=l*32,E=Math.min(32,s)+S;for(let g=S;g<E;g++)D[e.charCodeAt(g)]|=1<<g;c=s;for(let g=0;g<t;g++){const w=D[r.charCodeAt(g)],v=a[g/32|0]>>>g&1,M=n[g/32|0]>>>g&1,Y=w|u,U=((w|M)&b)+b^b|w|M;let I=u|~(U|b),C=b&U;I>>>31^v&&(a[g/32|0]^=1<<g),C>>>31^M&&(n[g/32|0]^=1<<g),I=I<<1|v,C=C<<1|M,b=C|~(Y|I),u=I&Y}for(let g=S;g<E;g++)D[e.charCodeAt(g)]=0}let f=0,d=-1;const p=l*32,m=Math.min(32,s-p)+p;for(let u=p;u<m;u++)D[e.charCodeAt(u)]|=1<<u;c=s;for(let u=0;u<t;u++){const b=D[r.charCodeAt(u)],S=a[u/32|0]>>>u&1,E=n[u/32|0]>>>u&1,g=b|f,w=((b|E)&d)+d^d|b|E;let v=f|~(w|d),M=d&w;c+=v>>>s-1&1,c-=M>>>s-1&1,v>>>31^S&&(a[u/32|0]^=1<<u),M>>>31^E&&(n[u/32|0]^=1<<u),v=v<<1|S,M=M<<1|E,d=M|~(g|v),f=v&g}for(let u=p;u<m;u++)D[e.charCodeAt(u)]=0;return c},se=(r,e)=>{if(r.length>e.length){const t=e;e=r,r=t}return r.length===0?e.length:r.length<=32?Xe(r,e):Je(r,e)},Qe=(r,e)=>{let t=1/0,s=0;for(let n=0;n<e.length;n++){const a=se(r,e[n]);a<t&&(t=a,s=n)}return e[s]};var et={closest:Qe,distance:se};const tt=(r,e,t)=>{const s=r.length<=e.length,n=r.length<=t;return s||n?Math.ceil(r.length/4):t},st=(r,e,t)=>{let s=0;const n=Object.keys(e).find(a=>{const i=tt(r,a,t),o=et.distance(r,a),c=o<=i;return c&&(s=o),c});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var nt={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},R={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class rt{constructor(){this.matchers={},this.l33tTable=nt,this.dictionary={userInputs:[]},this.rankedDictionaries={},this.translations=R,this.graphs={},this.availableGraphs=[],this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(R).forEach(s=>{if(s in e){const n=s;Object.keys(R[n]).forEach(a=>{a in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={};Object.keys(this.dictionary).forEach(t=>{e[t]=this.getRankedDictionary(t)}),this.rankedDictionaries=e}getRankedDictionary(e){const t=this.dictionary[e];if(e==="userInputs"){const s=[];return t.forEach(n=>{const a=typeof n;(a==="string"||a==="number"||a==="boolean")&&s.push(n.toString().toLowerCase())}),V(s)}return V(t)}extendUserInputsDictionary(e){this.dictionary.userInputs?this.dictionary.userInputs=[...this.dictionary.userInputs,...e]:this.dictionary.userInputs=e,this.rankedDictionaries.userInputs=this.getRankedDictionary("userInputs")}addMatcher(e,t){this.matchers[e]?console.info("Matcher already exists"):this.matchers[e]=t}}const h=new rt;class at{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>T(k({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class it{constructor(e){this.defaultMatch=e}match({password:e}){const t=[],s=this.enumerateL33tSubs(this.relevantL33tSubtable(e,h.l33tTable));for(let n=0;n<s.length;n+=1){const a=s[n];if(Re(a))break;const i=Oe(e,a);this.defaultMatch({password:i}).forEach(c=>{const l=e.slice(c.i,+c.j+1||9e9);if(l.toLowerCase()!==c.matchedWord){const f={};Object.keys(a).forEach(p=>{const m=a[p];l.indexOf(p)!==-1&&(f[p]=m)});const d=Object.keys(f).map(p=>`${p} -> ${f[p]}`).join(", ");t.push(T(k({},c),{l33t:!0,token:l,sub:f,subDisplay:d}))}})}return t.filter(n=>n.token.length>1)}relevantL33tSubtable(e,t){const s={},n={};return e.split("").forEach(a=>{s[a]=!0}),Object.keys(t).forEach(a=>{const o=t[a].filter(c=>c in s);o.length>0&&(n[a]=o)}),n}enumerateL33tSubs(e){const t=Object.keys(e);return this.getSubs(t,[[]],e).map(n=>{const a={};return n.forEach(([i,o])=>{a[i]=o}),a})}getSubs(e,t,s){if(!e.length)return t;const n=e[0],a=e.slice(1),i=[];s[n].forEach(c=>{t.forEach(l=>{let f=-1;for(let d=0;d<l.length;d+=1)if(l[d][0]===c){f=d;break}if(f===-1){const d=l.concat([[c,n]]);i.push(d)}else{const d=l.slice(0);d.splice(f,1),d.push([c,n]),i.push(l),i.push(d)}})});const o=this.dedup(i);return a.length?this.getSubs(a,o,s):o}dedup(e){const t=[],s={};return e.forEach(n=>{const a=n.map((o,c)=>[o,c]);a.sort();const i=a.map(([o,c])=>`${o},${c}`).join("-");i in s||(s[i]=!0,t.push(n))}),t}}class ot{constructor(){this.l33t=new it(this.defaultMatch),this.reverse=new at(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return x(t)}defaultMatch({password:e}){const t=[],s=e.length,n=e.toLowerCase();return Object.keys(h.rankedDictionaries).forEach(a=>{const i=h.rankedDictionaries[a];for(let o=0;o<s;o+=1)for(let c=o;c<s;c+=1){const l=n.slice(o,+c+1||9e9),f=l in i;let d={};const p=o===0&&c===s-1;h.useLevenshteinDistance&&p&&!f&&(d=st(l,i,h.levenshteinThreshold));const m=Object.keys(d).length!==0;if(f||m){const u=m?d.levenshteinDistanceEntry:l,b=i[u];t.push(k({pattern:"dictionary",i:o,j:c,token:e.slice(o,+c+1||9e9),matchedWord:l,rank:b,dictionaryName:a,reversed:!1,l33t:!1},d))}}}),t}}class ct{match({password:e,regexes:t=Ze}){const s=[];return Object.keys(t).forEach(n=>{const a=t[n];a.lastIndex=0;const i=a.exec(e);if(i){const o=i[0];s.push({pattern:"regex",token:o,i:i.index,j:i.index+i[0].length-1,regexName:n,regexMatch:i})}}),x(s)}}var A={nCk(r,e){let t=r;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(r){return Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let e=1;for(let t=2;t<=r;t+=1)e*=t;return e}},lt=({token:r})=>{let e=L(Ge,r.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return r.length===1?t=X+1:t=J+1,Math.max(e,t)},ht=({year:r,separator:e})=>{let s=Math.max(Math.abs(r-G),Q)*365;return e&&(s*=4),s};const ut=r=>{const e=r.split(""),t=e.filter(i=>i.match(Fe)).length,s=e.filter(i=>i.match(Ve)).length;let n=0;const a=Math.min(t,s);for(let i=1;i<=a;i+=1)n+=A.nCk(t+s,i);return n};var dt=r=>{const e=r.replace(Be,"");if(e.match(ze)||e.toLowerCase()===e)return 1;const t=[ee,Ue,te],s=t.length;for(let n=0;n<s;n+=1){const a=t[n];if(e.match(a))return 2}return ut(e)};const ft=({subs:r,subbed:e,token:t})=>{const s=r[e],n=t.toLowerCase().split(""),a=n.filter(o=>o===e).length,i=n.filter(o=>o===s).length;return{subbedCount:a,unsubbedCount:i}};var gt=({l33t:r,sub:e,token:t})=>{if(!r)return 1;let s=1;const n=e;return Object.keys(n).forEach(a=>{const{subbedCount:i,unsubbedCount:o}=ft({subs:n,subbed:a,token:t});if(i===0||o===0)s*=2;else{const c=Math.min(o,i);let l=0;for(let f=1;f<=c;f+=1)l+=A.nCk(o+i,f);s*=l}}),s},pt=({rank:r,reversed:e,l33t:t,sub:s,token:n})=>{const a=r,i=dt(n),o=gt({l33t:t,sub:s,token:n}),c=e&&2||1,l=a*i*o*c;return{baseGuesses:a,uppercaseVariations:i,l33tVariations:o,calculation:l}},mt=({regexName:r,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return L(s[r],t.length);switch(r){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-G),Q)}return 0},bt=({baseGuesses:r,repeatCount:e})=>r*e,yt=({token:r,ascending:e})=>{const t=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*r.length};const vt=r=>{let e=0;return Object.keys(r).forEach(t=>{e+=r[t].filter(n=>!!n).length}),e/=Object.entries(r).length,e},Mt=({token:r,graph:e,turns:t})=>{const s=Object.keys(h.graphs[e]).length,n=vt(h.graphs[e]);let a=0;const i=r.length;for(let o=2;o<=i;o+=1){const c=Math.min(t,o-1);for(let l=1;l<=c;l+=1)a+=A.nCk(o-1,l-1)*s*L(n,l)}return a};var kt=({graph:r,token:e,shiftedCount:t,turns:s})=>{let n=Mt({token:e,graph:r,turns:s});if(t){const a=e.length-t;if(t===0||a===0)n*=2;else{let i=0;for(let o=1;o<=Math.min(t,a);o+=1)i+=A.nCk(t+a,o);n*=i}}return Math.round(n)};const Et=(r,e)=>{let t=1;return r.token.length<e.length&&(r.token.length===1?t=X:t=J),t},Z={bruteforce:lt,date:ht,dictionary:pt,regex:mt,repeat:bt,sequence:yt,spatial:kt},wt=(r,e)=>Z[r]?Z[r](e):h.matchers[r]&&"scoring"in h.matchers[r]?h.matchers[r].scoring(e):0;var Dt=(r,e)=>{const t={};if("guesses"in r&&r.guesses!=null)return r;const s=Et(r,e),n=wt(r.pattern,r);let a=0;typeof n=="number"?a=n:r.pattern==="dictionary"&&(a=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const i=Math.max(a,s);return T(k(k({},r),t),{guesses:i,guessesLog10:A.log10(i)})};const y={password:"",optimal:{},excludeAdditive:!1,fillArray(r,e){const t=[];for(let s=0;s<r;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(r,e){return{pattern:"bruteforce",token:this.password.slice(r,+e+1||9e9),i:r,j:e}},update(r,e){const t=r.j,s=Dt(r,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let a=A.factorial(e)*n;this.excludeAdditive||(a+=L(Ye,e-1));let i=!1;Object.keys(this.optimal.g[t]).forEach(o=>{const c=this.optimal.g[t][o];parseInt(o,10)<=e&&c<=a&&(i=!0)}),i||(this.optimal.g[t][e]=a,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(r){let e=this.makeBruteforceMatch(0,r);this.update(e,1);for(let t=1;t<=r;t+=1){e=this.makeBruteforceMatch(t,r);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(r){const e=[];let t=r-1,s=0,n=1/0;const a=this.optimal.g[t];for(a&&Object.keys(a).forEach(i=>{const o=a[i];o<n&&(s=parseInt(i,10),n=o)});t>=0;){const i=this.optimal.m[t][s];e.unshift(i),t=i.i-1,s-=1}return e}};var $={mostGuessableMatchSequence(r,e,t=!1){y.password=r,y.excludeAdditive=t;const s=r.length;let n=y.fillArray(s,"array");e.forEach(c=>{n[c.j].push(c)}),n=n.map(c=>c.sort((l,f)=>l.i-f.i)),y.optimal={m:y.fillArray(s,"object"),pi:y.fillArray(s,"object"),g:y.fillArray(s,"object")};for(let c=0;c<s;c+=1)n[c].forEach(l=>{l.i>0?Object.keys(y.optimal.m[l.i-1]).forEach(f=>{y.update(l,parseInt(f,10)+1)}):y.update(l,1)}),y.bruteforceUpdate(c);const a=y.unwind(s),i=a.length,o=this.getGuesses(r,i);return{password:r,guesses:o,guessesLog10:A.log10(o),sequence:a}},getGuesses(r,e){const t=r.length;let s=0;return r.length===0?s=1:s=y.optimal.g[t-1][e],s}};class St{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const i=this.getGreedyMatch(e,n),o=this.getLazyMatch(e,n);if(i==null)break;const{match:c,baseToken:l}=this.setMatchToken(i,o);if(c){const f=c.index+c[0].length-1,d=this.getBaseGuesses(l,t);s.push(this.normalizeMatch(l,f,c,d)),n=f+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const a={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(i=>T(k({},a),{baseGuesses:i})):T(k({},a),{baseGuesses:n})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,a="";if(t&&e[0].length>t[0].length){n=e;const i=s.exec(n[0]);i&&(a=i[1])}else n=t,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(a=>$.mostGuessableMatchSequence(e,a).guesses):$.mostGuessableMatchSequence(e,s).guesses}}class Tt{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const a=e.length;for(let i=1;i<a;i+=1){const o=e.charCodeAt(i)-e.charCodeAt(i-1);if(n==null&&(n=o),o!==n){const c=i-1;this.update({i:s,j:c,delta:n,password:e,result:t}),s=c,n=o}}return this.update({i:s,j:a-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:a}){if(t-e>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const o=n.slice(e,+t+1||9e9),{sequenceName:c,sequenceSpace:l}=this.getSequence(o);return a.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:c,sequenceSpace:l,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return qe.test(e)?(t="lower",s=26):We.test(e)?(t="upper",s=26):He.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class At{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(h.graphs).forEach(s=>{const n=h.graphs[s];N(t,this.helper(e,n,s))}),x(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const a=[];let i=0;const o=e.length;for(;i<o-1;){let c=i+1,l=0,f=0;for(n=this.checkIfShifted(s,e,i);;){const d=e.charAt(c-1),p=t[d]||[];let m=!1,u=-1,b=-1;if(c<o){const S=e.charAt(c),E=p.length;for(let g=0;g<E;g+=1){const w=p[g];if(b+=1,w){const v=w.indexOf(S);if(v!==-1){m=!0,u=b,v===1&&(n+=1),l!==u&&(f+=1,l=u);break}}}}if(m)c+=1;else{c-i>2&&a.push({pattern:"spatial",i,j:c-1,token:e.slice(i,c),graph:s,turns:f,shiftedCount:n}),i=c;break}}}return a}}class xt{constructor(){this.matchers={date:Ke,dictionary:ot,regex:ct,repeat:St,sequence:Tt,spatial:At}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(h.matchers)].forEach(a=>{if(!this.matchers[a]&&!h.matchers[a])return;const i=this.matchers[a]?this.matchers[a]:h.matchers[a].Matching,c=new i().match({password:e,omniMatch:this});c instanceof Promise?(c.then(l=>{N(t,l)}),s.push(c)):N(t,c)}),s.length>0?new Promise(a=>{Promise.all(s).then(()=>{a(x(t))})}):x(t)}}const ne=1,re=ne*60,ae=re*60,ie=ae*24,oe=ie*31,ce=oe*12,It=ce*100,O={second:ne,minute:re,hour:ae,day:ie,month:oe,year:ce,century:It};class Lt{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=h.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const a=t[n];s[n]=this.displayTime(a)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1e3+5?0:e<1e6+5?1:e<1e8+5?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(O),a=n.findIndex(i=>e<O[i]);return a>-1&&(t=n[a-1],a!==0?s=Math.round(e/O[t]):t="ltSecond"),this.translate(t,s)}}var Ct=()=>null,Pt=()=>({warning:h.translations.warnings.dates,suggestions:[h.translations.suggestions.dates]});const jt=(r,e)=>{let t="";return e&&!r.l33t&&!r.reversed?r.rank<=10?t=h.translations.warnings.topTen:r.rank<=100?t=h.translations.warnings.topHundred:t=h.translations.warnings.common:r.guessesLog10<=4&&(t=h.translations.warnings.similarToCommon),t},_t=(r,e)=>{let t="";return e&&(t=h.translations.warnings.wordByItself),t},Rt=(r,e)=>e?h.translations.warnings.namesByThemselves:h.translations.warnings.commonNames,Ot=(r,e)=>{let t="";const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=jt(r,e):s.includes("wikipedia")?t=_t(r,e):n?t=Rt(r,e):s==="userInputs"&&(t=h.translations.warnings.userInputs),t};var Nt=(r,e)=>{const t=Ot(r,e),s=[],n=r.token;return n.match(ee)?s.push(h.translations.suggestions.capitalization):n.match(te)&&n.toLowerCase()!==n&&s.push(h.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(h.translations.suggestions.reverseWords),r.l33t&&s.push(h.translations.suggestions.l33t),{warning:t,suggestions:s}},$t=r=>r.regexName==="recentYear"?{warning:h.translations.warnings.recentYears,suggestions:[h.translations.suggestions.recentYears,h.translations.suggestions.associatedYears]}:{warning:"",suggestions:[]},Gt=r=>{let e=h.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(e=h.translations.warnings.simpleRepeat),{warning:e,suggestions:[h.translations.suggestions.repeated]}},Yt=()=>({warning:h.translations.warnings.sequences,suggestions:[h.translations.suggestions.sequences]}),Ut=r=>{let e=h.translations.warnings.keyPattern;return r.turns===1&&(e=h.translations.warnings.straightRow),{warning:e,suggestions:[h.translations.suggestions.longerKeyboardPattern]}};const K={warning:"",suggestions:[]};class Wt{constructor(){this.matchers={bruteforce:Ct,date:Pt,dictionary:Nt,regex:$t,repeat:Gt,sequence:Yt,spatial:Ut},this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(h.translations.suggestions.useWords,h.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return K;const s=h.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let a=this.getMatchFeedback(n,t.length===1);return a!=null?(a.suggestions.unshift(s),a.warning==null&&(a.warning="")):a={warning:"",suggestions:[s]},a}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):h.matchers[e.pattern]&&"feedback"in h.matchers[e.pattern]?h.matchers[e.pattern].feedback(e,t):K}}const le=()=>new Date().getTime(),qt=(r,e,t)=>{const s=new Wt,n=new Lt,a=$.mostGuessableMatchSequence(e,r),i=le()-t,o=n.estimateAttackTimes(a.guesses);return T(k(k({calcTime:i},a),o),{feedback:s.getFeedback(o.score,a.sequence)})},zt=(r,e)=>(e&&h.extendUserInputsDictionary(e),new xt().match(r)),Ft=(r,e)=>{const t=le(),s=zt(r,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return qt(s,r,t)};const Vt=pe({name:"StrengthMeter",components:{InputPassword:me.Password},props:{value:P.string,showInput:P.bool.def(!0),disabled:P.bool},emits:["score-change","change"],setup(r,{emit:e}){const t=be(""),{prefixCls:s}=ye("strength-meter"),n=ve(()=>{const{disabled:i}=r;if(i)return-1;const c=_(t)?Ft(_(t)).score:-1;return e("score-change",c),c});function a(i){t.value=i.target.value}return Me(()=>{t.value=r.value||""}),ke(()=>_(t),i=>{e("change",i)}),{getPasswordStrength:n,handleChange:a,prefixCls:s,innerValueRef:t}}}),Bt=["data-score"];function Ht(r,e,t,s,n,a){const i=we("InputPassword");return z(),De("div",{class:j([r.prefixCls,"relative"])},[r.showInput?(z(),Se(i,xe({key:0},r.$attrs,{allowClear:"",value:r.innerValueRef,onChange:r.handleChange,disabled:r.disabled}),Te({_:2},[Ae(Object.keys(r.$slots),o=>({name:o,fn:Le(c=>[Ce(r.$slots,o,Pe(je(c||{})),void 0,!0)])}))]),1040,["value","onChange","disabled"])):Ie("",!0),F("div",{class:j(`${r.prefixCls}-bar`)},[F("div",{class:j(`${r.prefixCls}-bar--fill`),"data-score":r.getPasswordStrength},null,10,Bt)],2)],2)}var Zt=Ee(Vt,[["render",Ht],["__scopeId","data-v-367aeb21"]]);const Jt=_e(Zt);export{Jt as S};
