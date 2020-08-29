(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.cM(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.aU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.aU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.aU(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={aN:function aN(){},z:function z(a){this.a=a},
bB:function(a){var t,s=H.bA(a)
if(s!=null)return s
t="minified:"+a
return t},
b:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ag(a)
if(typeof t!="string")throw H.a(H.cz(a))
return t},
I:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ax:function(a){return H.bT(a)},
bT:function(a){var t,s,r
if(a instanceof P.e)return H.h(H.Q(a),null)
if(J.t(a)===C.q||u.o.b(a)){t=C.d(a)
if(H.b8(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.b8(r))return r}}return H.h(H.Q(a),null)},
b8:function(a){var t=a!=="Object"&&a!==""
return t},
m:function(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
C.b.E(t,b)
r.b=""
if(c!=null&&c.a!==0)c.k(0,new H.aw(r,s,t))
""+r.a
return J.bD(a,new H.ao(C.v,0,t,s,0))},
bU:function(a,b,c){var t,s,r,q
if(b instanceof Array)t=c==null||c.a===0
else t=!1
if(t){s=b
r=s.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(s[0])}else if(r===2){if(!!a.$2)return a.$2(s[0],s[1])}else if(r===3){if(!!a.$3)return a.$3(s[0],s[1],s[2])}else if(r===4){if(!!a.$4)return a.$4(s[0],s[1],s[2],s[3])}else if(r===5)if(!!a.$5)return a.$5(s[0],s[1],s[2],s[3],s[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,s)}return H.bS(a,b,c)},
bS:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(b!=null)t=b instanceof Array?b:P.bR(b)
else t=[]
s=t.length
r=a.$R
if(s<r)return H.m(a,t,c)
q=a.$D
p=q==null
o=!p?q():null
n=J.t(a)
m=n.$C
if(typeof m=="string")m=n[m]
if(p){if(c!=null&&c.a!==0)return H.m(a,t,c)
if(s===r)return m.apply(a,t)
return H.m(a,t,c)}if(o instanceof Array){if(c!=null&&c.a!==0)return H.m(a,t,c)
if(s>r+o.length)return H.m(a,t,null)
C.b.E(t,o.slice(s-r))
return m.apply(a,t)}else{if(s>r)return H.m(a,t,c)
l=Object.keys(o)
if(c==null)for(p=l.length,k=0;k<l.length;l.length===p||(0,H.af)(l),++k){j=o[l[k]]
if(C.f===j)return H.m(a,t,c)
C.b.v(t,j)}else{for(p=l.length,i=0,k=0;k<l.length;l.length===p||(0,H.af)(l),++k){h=l[k]
if(c.V(h)){++i
C.b.v(t,c.I(0,h))}else{j=o[h]
if(C.f===j)return H.m(a,t,c)
C.b.v(t,j)}}if(i!==c.a)return H.m(a,t,c)}return m.apply(a,t)}},
cz:function(a){return new P.C(!0,a,null,null)},
a:function(a){var t,s
if(a==null)a=new P.av()
t=new Error()
t.dartException=a
s=H.cN
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
cN:function(){return J.ag(this.dartException)},
aX:function(a){throw H.a(a)},
af:function(a){throw H.a(P.b4(a))},
bN:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.az().constructor.prototype):Object.create(new H.D(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.k
$.k=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.b3(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.bJ(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.b3(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
bJ:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.bu,a)
if(typeof a=="string"){if(b)throw H.a("Cannot compute signature for static tearoff.")
t=c?H.bH:H.bG
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.a("Error in functionType of tearoff")},
bK:function(a,b,c,d){var t=H.b2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
b3:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.bM(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.bK(s,!q,t,b)
if(s===0){q=$.k
$.k=q+1
o="self"+H.b(q)
return new Function("return function(){var "+o+" = this."+H.b(H.aM())+";return "+o+"."+H.b(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.k
$.k=q+1
n+=H.b(q)
return new Function("return function("+n+"){return this."+H.b(H.aM())+"."+H.b(t)+"("+n+");}")()},
bL:function(a,b,c,d){var t=H.b2,s=H.bI
switch(b?-1:a){case 0:throw H.a(new H.ay("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
bM:function(a,b){var t,s,r,q,p,o,n=H.aM(),m=$.b0
if(m==null)m=$.b0=H.b_("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.bL(s,!q,t,b)
if(s===1){q="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+m+");"
p=$.k
$.k=p+1
return new Function(q+H.b(p)+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+m+", "+o+");"
p=$.k
$.k=p+1
return new Function(q+H.b(p)+"}")()},
aU:function(a,b,c,d,e,f,g){return H.bN(a,b,c,d,!!e,!!f,g)},
bG:function(a,b){return H.aa(v.typeUniverse,H.Q(a.a),b)},
bH:function(a,b){return H.aa(v.typeUniverse,H.Q(a.c),b)},
b2:function(a){return a.a},
bI:function(a){return a.c},
aM:function(){var t=$.b1
return t==null?$.b1=H.b_("self"):t},
b_:function(a){var t,s,r,q=new H.D("self","target","receiver","name"),p=J.bQ(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.a(P.bE("Field name "+a+" not found."))},
cM:function(a){throw H.a(new P.ak(a))},
cD:function(a){return v.getIsolateTag(a)},
cJ:function(a){var t,s,r,q,p,o=$.bt.$1(a),n=$.aF[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aJ[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.bs.$2(a,o)
if(r!=null){n=$.aF[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aJ[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.aL(t)
$.aF[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.aJ[o]=t
return t}if(q==="-"){p=H.aL(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.bx(a,t)
if(q==="*")throw H.a(P.bb(o))
if(v.leafTags[o]===true){p=H.aL(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.bx(a,t)},
bx:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.aW(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
aL:function(a){return J.aW(a,!1,null,!!a.$icQ)},
cK:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.aL(t)
else return J.aW(t,c,null,null)},
cG:function(){if(!0===$.aV)return
$.aV=!0
H.cH()},
cH:function(){var t,s,r,q,p,o,n,m
$.aF=Object.create(null)
$.aJ=Object.create(null)
H.cF()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bz.$1(p)
if(o!=null){n=H.cK(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
cF:function(){var t,s,r,q,p,o,n=C.k()
n=H.B(C.l,H.B(C.m,H.B(C.e,H.B(C.e,H.B(C.n,H.B(C.o,H.B(C.p(C.d),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bt=new H.aG(q)
$.bs=new H.aH(p)
$.bz=new H.aI(o)},
B:function(a,b){return a(b)||b},
W:function W(a){this.a=a},
V:function V(){},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
aw:function aw(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
aA:function aA(){},
az:function az(){},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ay:function ay(a){this.a=a},
aE:function aE(){},
a_:function a_(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
aq:function aq(a,b){this.a=a
this.b=b
this.c=null},
aG:function aG(a){this.a=a},
aH:function aH(a){this.a=a},
aI:function aI(a){this.a=a},
bW:function(a,b){var t=b.c
return t==null?b.c=H.aR(a,b.z,!0):t},
b9:function(a,b){var t=b.c
return t==null?b.c=H.K(a,"b5",[b.z]):t},
ba:function(a){var t=a.y
if(t===6||t===7||t===8)return H.ba(a.z)
return t===11||t===12},
bV:function(a){return a.cy},
cB:function(a){return H.aS(v.typeUniverse,a,!1)},
p:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.p(a,t,c,a0)
if(s===t)return b
return H.bk(a,s,!0)
case 7:t=b.z
s=H.p(a,t,c,a0)
if(s===t)return b
return H.aR(a,s,!0)
case 8:t=b.z
s=H.p(a,t,c,a0)
if(s===t)return b
return H.bj(a,s,!0)
case 9:r=b.Q
q=H.O(a,r,c,a0)
if(q===r)return b
return H.K(a,b.z,q)
case 10:p=b.z
o=H.p(a,p,c,a0)
n=b.Q
m=H.O(a,n,c,a0)
if(o===p&&m===n)return b
return H.aP(a,o,m)
case 11:l=b.z
k=H.p(a,l,c,a0)
j=b.Q
i=H.cw(a,j,c,a0)
if(k===l&&i===j)return b
return H.bi(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.O(a,h,c,a0)
p=b.z
o=H.p(a,p,c,a0)
if(g===h&&o===p)return b
return H.aQ(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.a(P.ai("Attempted to substitute unexpected RTI kind "+d))}},
O:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.p(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
cx:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.p(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
cw:function(a,b,c,d){var t,s=b.a,r=H.O(a,s,c,d),q=b.b,p=H.O(a,q,c,d),o=b.c,n=H.cx(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.a7()
t.a=r
t.b=p
t.c=n
return t},
cA:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.bu(t)
return a.$S()}return null},
bv:function(a,b){var t
if(H.ba(b))if(a instanceof H.u){t=H.cA(a)
if(t!=null)return t}return H.Q(a)},
Q:function(a){var t
if(a instanceof P.e){t=a.$ti
return t!=null?t:H.aT(a)}if(Array.isArray(a))return H.cc(a)
return H.aT(J.t(a))},
cc:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
d6:function(a){var t=a.$ti
return t!=null?t:H.aT(a)},
aT:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.cm(a,t)},
cm:function(a,b){var t=a instanceof H.u?a.__proto__.__proto__.constructor:b,s=H.cb(v.typeUniverse,t.name)
b.$ccache=s
return s},
bu:function(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=H.aS(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
cl:function(a){var t,s,r=this,q=u.K
if(r===q)return H.N(r,a,H.cq)
if(!H.l(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.N(r,a,H.ct)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.cn
else if(t===u.i||t===u.H)s=H.cp
else if(t===u.N)s=H.cr
else s=t===u.y?H.bp:null
if(s!=null)return H.N(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.cI)){r.r="$i"+q
return H.N(r,a,H.cs)}}else if(q===7)return H.N(r,a,H.cj)
return H.N(r,a,H.ch)},
N:function(a,b,c){a.b=c
return a.b(b)},
ck:function(a){var t,s,r=this
if(!H.l(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.ce
else if(r===u.K)s=H.cd
else s=H.ci
r.a=s
return r.a(a)},
cu:function(a){var t,s=a.y
if(!H.l(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
ch:function(a){var t=this
if(a==null)return H.cu(t)
return H.d(v.typeUniverse,H.bv(a,t),null,t,null)},
cj:function(a){if(a==null)return!0
return this.z.b(a)},
cs:function(a){var t=this,s=t.r
if(a instanceof P.e)return!!a[s]
return!!J.t(a)[s]},
d5:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.bn(a,t)},
ci:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.bn(a,t)},
bn:function(a,b){throw H.a(H.c1(H.bd(a,H.bv(a,b),H.h(b,null))))},
bd:function(a,b,c){var t=P.v(a),s=H.h(b==null?H.Q(a):b,null)
return t+": type '"+H.b(s)+"' is not a subtype of type '"+H.b(c)+"'"},
c1:function(a){return new H.a8("TypeError: "+a)},
f:function(a,b){return new H.a8("TypeError: "+H.bd(a,null,b))},
cq:function(a){return a!=null},
cd:function(a){return a},
ct:function(a){return!0},
ce:function(a){return a},
bp:function(a){return!0===a||!1===a},
cR:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.a(H.f(a,"bool"))},
cT:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.a(H.f(a,"bool"))},
cS:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.a(H.f(a,"bool?"))},
cU:function(a){if(typeof a=="number")return a
throw H.a(H.f(a,"double"))},
cW:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.f(a,"double"))},
cV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.f(a,"double?"))},
cn:function(a){return typeof a=="number"&&Math.floor(a)===a},
cX:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.a(H.f(a,"int"))},
cZ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.a(H.f(a,"int"))},
cY:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.a(H.f(a,"int?"))},
cp:function(a){return typeof a=="number"},
d_:function(a){if(typeof a=="number")return a
throw H.a(H.f(a,"num"))},
d1:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.f(a,"num"))},
d0:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.f(a,"num?"))},
cr:function(a){return typeof a=="string"},
d2:function(a){if(typeof a=="string")return a
throw H.a(H.f(a,"String"))},
d4:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.a(H.f(a,"String"))},
d3:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.a(H.f(a,"String?"))},
cv:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.a.j(s,H.h(a[r],b))
return t},
bo:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=[]
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)a4.push("T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a2){m=C.a.j(m+l,a4[a4.length-1-q])
k=a5[q]
j=k.y
if(!(j===2||j===3||j===4||j===5||k===p))if(!(k===o))i=k===n
else i=!0
else i=!0
if(!i)m+=C.a.j(" extends ",H.h(k,a4))}m+=">"}else{m=""
s=null}p=a3.z
h=a3.Q
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=H.h(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=C.a.j(a1,H.h(g[q],a4))
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=C.a.j(a1,H.h(e[q],a4))
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=J.aZ(H.h(c[q+2],a4)," ")+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return m+"("+a0+") => "+H.b(a)},
h:function(a,b){var t,s,r,q,p,o,n=a.y
if(n===5)return"erased"
if(n===2)return"dynamic"
if(n===3)return"void"
if(n===1)return"Never"
if(n===4)return"any"
if(n===6){t=H.h(a.z,b)
return t}if(n===7){s=a.z
t=H.h(s,b)
r=s.y
return J.aZ(r===11||r===12?C.a.j("(",t)+")":t,"?")}if(n===8)return"FutureOr<"+H.b(H.h(a.z,b))+">"
if(n===9){q=H.cy(a.z)
p=a.Q
return p.length!==0?q+("<"+H.cv(p,b)+">"):q}if(n===11)return H.bo(a,b,null)
if(n===12)return H.bo(a.z,b,a.Q)
if(n===13){b.toString
o=a.z
return b[b.length-1-o]}return"?"},
cy:function(a){var t,s=H.bA(a)
if(s!=null)return s
t="minified:"+a
return t},
bl:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
cb:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.aS(a,b,!1)
else if(typeof n=="number"){t=n
s=H.L(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.K(a,b,r)
o[b]=p
return p}else return n},
c9:function(a,b){return H.bm(a.tR,b)},
c8:function(a,b){return H.bm(a.eT,b)},
aS:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.bh(H.bf(a,null,b,c))
s.set(b,t)
return t},
aa:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.bh(H.bf(a,b,c,!0))
r.set(c,s)
return s},
ca:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.aP(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
o:function(a,b){b.a=H.ck
b.b=H.cl
return b},
L:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.i(null,null)
t.y=b
t.cy=c
s=H.o(a,t)
a.eC.set(c,s)
return s},
bk:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.c6(a,b,s,c)
a.eC.set(s,t)
return t},
c6:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.l(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.i(null,null)
r.y=6
r.z=b
r.cy=c
return H.o(a,r)},
aR:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.c5(a,b,s,c)
a.eC.set(s,t)
return t},
c5:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.l(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.aK(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.aK(r.z))return r
else return H.bW(a,b)}}q=new H.i(null,null)
q.y=7
q.z=b
q.cy=c
return H.o(a,q)},
bj:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.c3(a,b,s,c)
a.eC.set(s,t)
return t},
c3:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.l(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.K(a,"b5",[b])
else if(b===u.P||b===u.T)return u.O}r=new H.i(null,null)
r.y=8
r.z=b
r.cy=c
return H.o(a,r)},
c7:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.i(null,null)
t.y=13
t.z=b
t.cy=r
s=H.o(a,t)
a.eC.set(r,s)
return s},
a9:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
c2:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
K:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.a9(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.i(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.o(a,s)
a.eC.set(q,r)
return r},
aP:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.a9(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.i(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.o(a,p)
a.eC.set(r,o)
return o},
bi:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.a9(n)
if(k>0){t=m>0?",":""
s=H.a9(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.c2(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.i(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.o(a,p)
a.eC.set(r,s)
return s},
aQ:function(a,b,c,d){var t,s=b.cy+("<"+H.a9(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.c4(a,b,c,s,d)
a.eC.set(s,t)
return t},
c4:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.p(a,b,s,0)
n=H.O(a,c,s,0)
return H.aQ(a,o,n,c!==n)}}m=new H.i(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.o(a,m)},
bf:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
bh:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.bY(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.bg(a,s,h,g,!1)
else if(r===46)s=H.bg(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.n(a.u,a.e,g.pop()))
break
case 94:g.push(H.c7(a.u,g.pop()))
break
case 35:g.push(H.L(a.u,5,"#"))
break
case 64:g.push(H.L(a.u,2,"@"))
break
case 126:g.push(H.L(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.aO(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.K(q,o,p))
else{n=H.n(q,a.e,o)
switch(n.y){case 11:g.push(H.aQ(q,n,p,a.n))
break
default:g.push(H.aP(q,n,p))
break}}break
case 38:H.bZ(a,g)
break
case 42:m=a.u
g.push(H.bk(m,H.n(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.aR(m,H.n(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.bj(m,H.n(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.a7()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.aO(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.bi(q,H.n(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.aO(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.c0(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.n(a.u,a.e,i)},
bY:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
bg:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.bl(t,p.z)[q]
if(o==null)H.aX('No "'+q+'" in "'+H.bV(p)+'"')
d.push(H.aa(t,p,o))}else d.push(q)
return n},
bZ:function(a,b){var t=b.pop()
if(0===t){b.push(H.L(a.u,1,"0&"))
return}if(1===t){b.push(H.L(a.u,4,"1&"))
return}throw H.a(P.ai("Unexpected extended operation "+H.b(t)))},
n:function(a,b,c){if(typeof c=="string")return H.K(a,c,a.sEA)
else if(typeof c=="number")return H.c_(a,b,c)
else return c},
aO:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.n(a,b,c[t])},
c0:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.n(a,b,c[t])},
c_:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.a(P.ai("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.a(P.ai("Bad index "+c+" for "+b.h(0)))},
d:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.l(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.l(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.d(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.d(a,b.z,c,d,e)
if(q===6){t=d.z
return H.d(a,b,c,t,e)}if(s===8){if(!H.d(a,b.z,c,d,e))return!1
return H.d(a,H.b9(a,b),c,d,e)}if(s===7){t=H.d(a,b.z,c,d,e)
return t}if(q===8){if(H.d(a,b,c,d.z,e))return!0
return H.d(a,b,c,H.b9(a,d),e)}if(q===7){t=H.d(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.d(a,l,c,k,e)||!H.d(a,k,e,l,c))return!1}return H.bq(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.bq(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.co(a,b,c,d,e)}return!1},
bq:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.d(a2,a3.z,a4,a5.z,a6))return!1
t=a3.Q
s=a5.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.d(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.d(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.d(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!H.d(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
co:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.d(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.bl(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.d(a,H.aa(a,b,m[q]),c,s[q],e))return!1
return!0},
aK:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.l(a))if(s!==7)if(!(s===6&&H.aK(a.z)))t=s===8&&H.aK(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cI:function(a){var t
if(!H.l(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
l:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
bm:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
i:function i(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
a7:function a7(){this.c=this.b=this.a=null},
aD:function aD(){},
a8:function a8(a){this.a=a},
bA:function(a){return v.mangledGlobalNames[a]},
cL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cE:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.aV==null){H.cG()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.a(P.bb("Return interceptor for "+H.b(t(a,p))))}r=a.constructor
q=r==null?null:r[J.b6()]
if(q!=null)return q
q=H.cJ(a)
if(q!=null)return q
if(typeof a=="function")return C.t
t=Object.getPrototypeOf(a)
if(t==null)return C.j
if(t===Object.prototype)return C.j
if(typeof r=="function"){Object.defineProperty(r,J.b6(),{value:C.c,enumerable:false,writable:true,configurable:true})
return C.c}return C.c},
b6:function(){var t=$.be
return t==null?$.be=v.getIsolateTag("_$dart_js"):t},
bQ:function(a){a.fixed$length=Array
return a},
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.Z.prototype
return J.Y.prototype}if(typeof a=="string")return J.w.prototype
if(a==null)return J.E.prototype
if(typeof a=="boolean")return J.an.prototype
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof P.e)return a
return J.cE(a)},
cC:function(a){if(typeof a=="number")return J.F.prototype
if(typeof a=="string")return J.w.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.A.prototype
return a},
aZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.cC(a).j(a,b)},
bC:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).l(a,b)},
S:function(a){return J.t(a).gi(a)},
bD:function(a,b){return J.t(a).n(a,b)},
ag:function(a){return J.t(a).h(a)},
c:function c(){},
an:function an(){},
E:function E(){},
r:function r(){},
a4:function a4(){},
A:function A(){},
x:function x(){},
q:function q(){},
ap:function ap(){},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
F:function F(){},
Z:function Z(){},
Y:function Y(){},
w:function w(){}},P={
bP:function(a,b,c){var t,s
if(P.br(a))return b+"..."+c
t=new P.J(b)
$.P.push(a)
try{s=t
s.a=P.bX(s.a,a,", ")}finally{$.P.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
br:function(a){var t,s
for(t=$.P.length,s=0;s<t;++s)if(a===$.P[s])return!0
return!1},
ar:function(a){var t,s={}
if(P.br(a))return"{...}"
t=new P.J("")
try{$.P.push(a)
t.a+="{"
s.a=!0
a.k(0,new P.as(s,t))
t.a+="}"}finally{$.P.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
a1:function a1(){},
as:function as(a,b){this.a=a
this.b=b},
a2:function a2(){},
ab:function ab(){},
a3:function a3(){},
a6:function a6(){},
M:function M(){},
bO:function(a){if(a instanceof H.u)return a.h(0)
return"Instance of '"+H.b(H.ax(a))+"'"},
bR:function(a){var t,s,r=[]
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.af)(a),++s)r.push(a[s])
return r},
bX:function(a,b,c){var t=new J.U(b,b.length)
if(!t.A())return a
if(c.length===0){do a+=H.b(t.d)
while(t.A())}else{a+=H.b(t.d)
for(;t.A();)a=a+c+H.b(t.d)}return a},
b7:function(a,b,c,d){return new P.at(a,b,c,d)},
v:function(a){if(typeof a=="number"||H.bp(a)||null==a)return J.ag(a)
if(typeof a=="string")return JSON.stringify(a)
return P.bO(a)},
ai:function(a){return new P.ah(a)},
bE:function(a){return new P.C(!1,null,null,a)},
bF:function(a,b,c){return new P.C(!0,a,b,c)},
bc:function(a){return new P.aC(a)},
bb:function(a){return new P.aB(a)},
b4:function(a){return new P.aj(a)},
by:function(a){H.cL(a)},
au:function au(a,b){this.a=a
this.b=b},
ad:function ad(){},
j:function j(){},
am:function am(){},
ah:function ah(a){this.a=a},
av:function av(){},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(a){this.a=a},
aB:function aB(a){this.a=a},
aj:function aj(a){this.a=a},
ak:function ak(a){this.a=a},
ae:function ae(){},
a0:function a0(){},
H:function H(){},
R:function R(){},
e:function e(){},
y:function y(){},
J:function J(a){this.a=a},
a5:function a5(){},
cg:function(a){var t,s=a.$dart_jsFunction
if(s!=null)return s
t=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(P.cf,a)
t[$.aY()]=a
a.$dart_jsFunction=t
return t},
cf:function(a,b){return H.bU(a,b,null)},
ac:function(a){if(typeof a=="function")return a
else return P.cg(a)}},W={al:function al(){}},S={G:function G(){}},V={
bw:function(){new V.T().O()},
T:function T(){}}
var w=[C,H,J,P,W,S,V]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.aN.prototype={}
J.c.prototype={
l:function(a,b){return a===b},
gi:function(a){return H.I(a)},
h:function(a){return"Instance of '"+H.b(H.ax(a))+"'"},
n:function(a,b){throw H.a(P.b7(a,b.gF(),b.gH(),b.gG()))}}
J.an.prototype={
h:function(a){return String(a)},
gi:function(a){return a?519018:218159}}
J.E.prototype={
l:function(a,b){return null==b},
h:function(a){return"null"},
gi:function(a){return 0},
n:function(a,b){return this.K(a,b)}}
J.r.prototype={
gi:function(a){return 0},
h:function(a){return String(a)}}
J.a4.prototype={}
J.A.prototype={}
J.x.prototype={
h:function(a){var t=a[$.aY()]
if(t==null)return this.L(a)
return"JavaScript function for "+H.b(J.ag(t))}}
J.q.prototype={
v:function(a,b){if(!!a.fixed$length)H.aX(P.bc("add"))
a.push(b)},
E:function(a,b){var t,s
if(!!a.fixed$length)H.aX(P.bc("addAll"))
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.af)(b),++s)a.push(b[s])},
h:function(a){return P.bP(a,"[","]")},
gi:function(a){return H.I(a)}}
J.ap.prototype={}
J.U.prototype={
A:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.a(H.af(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.F.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi:function(a){var t,s,r,q,p=a|0
if(a===p)return 536870911&p
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
$ij:1}
J.Z.prototype={}
J.Y.prototype={}
J.w.prototype={
j:function(a,b){if(typeof b!="string")throw H.a(P.bF(b,null,null))
return a+b},
h:function(a){return a},
gi:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
$iy:1}
H.z.prototype={
gi:function(a){var t=this._hashCode
if(t!=null)return t
t=536870911&664597*J.S(this.a)
this._hashCode=t
return t},
h:function(a){return'Symbol("'+H.b(this.a)+'")'},
l:function(a,b){if(b==null)return!1
return b instanceof H.z&&this.a==b.a},
$ia5:1}
H.W.prototype={}
H.V.prototype={
h:function(a){return P.ar(this)}}
H.X.prototype={
U:function(a){return this.b[a]},
k:function(a,b){var t,s,r,q=this.c
for(t=q.length,s=0;s<t;++s){r=q[s]
b.$2(r,this.U(r))}}}
H.ao.prototype={
gF:function(){var t=this.a
return t},
gH:function(){var t,s,r,q,p=this
if(p.c===1)return C.h
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return C.h
r=[]
for(q=0;q<s;++q)r.push(t[q])
r.fixed$length=Array
r.immutable$list=Array
return r},
gG:function(){var t,s,r,q,p,o,n=this
if(n.c!==0)return C.i
t=n.e
s=t.length
r=n.d
q=r.length-s-n.f
if(s===0)return C.i
p=new H.a_()
for(o=0;o<s;++o)p.J(0,new H.z(t[o]),r[q+o])
return new H.W(p)}}
H.aw.prototype={
$2:function(a,b){var t=this.a
t.b=t.b+"$"+H.b(a)
this.b.push(a)
this.c.push(b);++t.a}}
H.u.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.bB(s==null?"unknown":s)+"'"},
ga5:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aA.prototype={}
H.az.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.bB(t)+"'"}}
H.D.prototype={
l:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.D))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gi:function(a){var t,s=this.c
if(s==null)t=H.I(this.a)
else t=typeof s!=="object"?J.S(s):H.I(s)
return(t^H.I(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.ax(t))+"'")}}
H.ay.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aE.prototype={}
H.a_.prototype={
V:function(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return this.P(t,a)}else{s=this.a_(a)
return s}},
a_:function(a){var t=this.d
if(t==null)return!1
return this.w(this.p(t,J.S(a)&0x3ffffff),a)>=0},
I:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.m(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.m(q,b)
r=s==null?o:s.b
return r}else return p.a0(b)},
a0:function(a){var t,s,r=this.d
if(r==null)return null
t=this.p(r,J.S(a)&0x3ffffff)
s=this.w(t,a)
if(s<0)return null
return t[s].b},
J:function(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.D(t==null?n.b=n.q():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.D(s==null?n.c=n.q():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.q()
q=J.S(b)&0x3ffffff
p=n.p(r,q)
if(p==null)n.u(r,q,[n.t(b,c)])
else{o=n.w(p,b)
if(o>=0)p[o].b=c
else p.push(n.t(b,c))}}},
k:function(a,b){var t=this,s=t.e,r=t.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==t.r)throw H.a(P.b4(t))
s=s.c}},
D:function(a,b,c){var t=this.m(a,b)
if(t==null)this.u(a,b,this.t(b,c))
else t.b=c},
t:function(a,b){var t=this,s=new H.aq(a,b)
if(t.e==null)t.e=t.f=s
else t.f=t.f.c=s;++t.a
t.r=t.r+1&67108863
return s},
w:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bC(a[s].a,b))return s
return-1},
h:function(a){return P.ar(this)},
m:function(a,b){return a[b]},
p:function(a,b){return a[b]},
u:function(a,b,c){a[b]=c},
R:function(a,b){delete a[b]},
P:function(a,b){return this.m(a,b)!=null},
q:function(){var t="<non-identifier-key>",s=Object.create(null)
this.u(s,t,s)
this.R(s,t)
return s}}
H.aq.prototype={}
H.aG.prototype={
$1:function(a){return this.a(a)}}
H.aH.prototype={
$2:function(a,b){return this.a(a,b)}}
H.aI.prototype={
$1:function(a){return this.a(a)}}
H.i.prototype={
a7:function(a){return H.aa(v.typeUniverse,this,a)},
a6:function(a){return H.ca(v.typeUniverse,this,a)}}
H.a7.prototype={}
H.aD.prototype={
h:function(a){return this.a}}
H.a8.prototype={}
P.a1.prototype={}
P.as.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.b(a)
s.a=t+": "
s.a+=H.b(b)}}
P.a2.prototype={
h:function(a){return P.ar(this)}}
P.ab.prototype={}
P.a3.prototype={
k:function(a,b){this.a.k(0,b)},
h:function(a){return P.ar(this.a)}}
P.a6.prototype={}
P.M.prototype={}
P.au.prototype={
$2:function(a,b){var t,s=this.b,r=this.a
s.a+=r.a
t=s.a+=H.b(a.a)
s.a=t+": "
s.a+=P.v(b)
r.a=", "}}
P.ad.prototype={
gi:function(a){return P.e.prototype.gi.call(this,this)},
h:function(a){return this?"true":"false"}}
P.j.prototype={}
P.am.prototype={}
P.ah.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.v(t)
return"Assertion failed"}}
P.av.prototype={
h:function(a){return"Throw of null."}}
P.C.prototype={
gT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gS:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gT()+p+n
if(!r.a)return m
t=r.gS()
s=P.v(r.b)
return m+t+": "+s}}
P.at.prototype={
h:function(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new P.J("")
k.a=""
t=l.c
for(s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=P.v(o)
k.a=", "}l.d.k(0,new P.au(k,j))
n=P.v(l.a)
m=j.h(0)
s="NoSuchMethodError: method not found: '"+H.b(l.b.a)+"'\nReceiver: "+n+"\nArguments: ["+m+"]"
return s}}
P.aC.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aB.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aj.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.v(t)+"."}}
P.ak.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.ae.prototype={}
P.a0.prototype={}
P.H.prototype={
gi:function(a){return P.e.prototype.gi.call(C.r,this)},
h:function(a){return"null"}}
P.R.prototype={}
P.e.prototype={constructor:P.e,$ie:1,
l:function(a,b){return this===b},
gi:function(a){return H.I(this)},
h:function(a){return"Instance of '"+H.b(H.ax(this))+"'"},
n:function(a,b){throw H.a(P.b7(this,b.gF(),b.gH(),b.gG()))},
toString:function(){return this.h(this)}}
P.y.prototype={}
P.J.prototype={
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
P.a5.prototype={}
W.al.prototype={
h:function(a){return String(a)}}
S.G.prototype={
O:function(){var t=this
self.enterTree=P.ac(t.gW())
self.ready=P.ac(t.ga4())
self.process=P.ac(t.ga3())
self.physicsProcess=P.ac(t.ga1())
self.exitTree=P.ac(t.gY())},
X:function(){},
C:function(){},
B:function(a){},
a2:function(a){},
Z:function(){}}
V.T.prototype={
C:function(){this.N()
P.by("hello world")},
B:function(a){this.M(a)
P.by("the dart is on :) "+H.b(a))}};(function aliases(){var t=J.c.prototype
t.K=t.n
t=J.r.prototype
t.L=t.h
t=S.G.prototype
t.N=t.C
t.M=t.B})();(function installTearOffs(){var t=hunkHelpers._instance_0u,s=hunkHelpers._instance_1u
var r
t(r=S.G.prototype,"gW","X",0)
s(r,"ga1","a2",1)
t(r,"gY","Z",0)
t(r=V.T.prototype,"ga4","C",0)
s(r,"ga3","B",1)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.e,null)
r(P.e,[H.aN,J.c,J.U,H.z,P.a3,H.V,H.ao,H.u,P.am,H.aE,P.a2,H.aq,H.i,H.a7,P.ab,P.ad,P.R,P.a0,P.H,P.y,P.J,P.a5,S.G])
r(J.c,[J.an,J.E,J.r,J.q,J.F,J.w,W.al])
r(J.r,[J.a4,J.A,J.x])
s(J.ap,J.q)
r(J.F,[J.Z,J.Y])
s(P.M,P.a3)
s(P.a6,P.M)
s(H.W,P.a6)
s(H.X,H.V)
r(H.u,[H.aw,H.aA,H.aG,H.aH,H.aI,P.as,P.au])
r(H.aA,[H.az,H.D])
r(P.am,[H.ay,H.aD,P.ah,P.av,P.C,P.at,P.aC,P.aB,P.aj,P.ak])
s(P.a1,P.a2)
s(H.a_,P.a1)
s(H.a8,H.aD)
r(P.R,[P.j,P.ae])
s(V.T,S.G)
t(P.M,P.ab)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{ae:"int",j:"double",R:"num",y:"String",ad:"bool",H:"Null",a0:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~(j*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.c9(v.typeUniverse,JSON.parse('{"x":"r","a4":"r","A":"r","F":{"j":[]},"Z":{"j":[]},"Y":{"j":[]},"w":{"y":[]},"z":{"a5":[]}}'))
H.c8(v.typeUniverse,JSON.parse('{"q":1,"ap":1,"U":1,"W":2,"V":2,"X":2,"a_":2,"a1":2,"a2":2,"ab":2,"a3":2,"a6":2,"M":2,"a0":1}'))
0
var u=(function rtii(){var t=H.cB
return{Z:t("cP"),b:t("q<@>"),T:t("E"),g:t("x"),P:t("H"),K:t("e"),N:t("y"),o:t("A"),y:t("ad"),i:t("j"),S:t("ae"),A:t("0&*"),_:t("e*"),O:t("b5<H>?"),X:t("e?"),H:t("R")}})();(function constants(){var t=hunkHelpers.makeConstList
C.q=J.c.prototype
C.b=J.q.prototype
C.r=J.E.prototype
C.a=J.w.prototype
C.t=J.x.prototype
C.j=J.a4.prototype
C.c=J.A.prototype
C.d=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.k=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.p=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.l=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.m=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.o=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.n=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.e=function(hooks) { return hooks; }

C.f=new H.aE()
C.h=t([])
C.u=t([])
C.i=new H.X(0,{},C.u)
C.v=new H.z("call")})();(function staticFields(){$.be=null
$.k=0
$.b1=null
$.b0=null
$.bt=null
$.bs=null
$.bz=null
$.aF=null
$.aJ=null
$.aV=null
$.P=[]})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"cO","aY",function(){return H.cD("_$dart_dartClosure")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.c,DOMError:J.c,ErrorEvent:J.c,Event:J.c,InputEvent:J.c,SubmitEvent:J.c,MediaError:J.c,NavigatorUserMediaError:J.c,OverconstrainedError:J.c,PositionError:J.c,SensorErrorEvent:J.c,SpeechRecognitionError:J.c,SQLError:J.c,DOMException:W.al})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,DOMException:true})})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.bw,[])
else V.bw([])})})()
//# sourceMappingURL=test.js.map
