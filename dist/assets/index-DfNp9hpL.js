(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const Za="187",nh=0,Ao=1,sh=2,Ys=1,rh=2,ss=3,un=0,qe=1,oe=2,Un=0,Nn=1,li=2,Ro=3,Co=4,ah=5,In=100,oh=101,lh=102,ch=103,hh=104,uh=200,dh=201,fh=202,ph=203,ic=204,nc=205,mh=206,gh=207,_h=208,vh=209,xh=210,Mh=211,Sh=212,yh=213,bh=214,aa=0,oa=1,la=2,cs=3,ca=4,ha=5,ua=6,da=7,Ja=0,wh=1,Eh=2,Fi=0,sc=1,rc=2,ac=3,Qa=4,oc=5,lc=6,cc=7,hc=300,Bn=301,hs=302,Er=303,Tr=304,er=1e3,Ni=1001,fa=1002,Ne=1003,Th=1004,vs=1005,Ke=1006,Ar=1007,Ki=1008,je=1009,uc=1010,dc=1011,us=1012,ja=1013,Ei=1014,mi=1015,Ti=1016,to=1017,eo=1018,zn=1020,fc=35902,pc=35899,mc=1021,gc=1022,yi=1023,ji=1026,Zi=1027,io=1028,no=1029,dn=1030,so=1031,ro=1033,$s=33776,Ks=33777,Zs=33778,Js=33779,pa=35840,ma=35841,ga=35842,_a=35843,va=36196,xa=37492,Ma=37496,Sa=37488,ya=37489,ir=37490,ba=37491,wa=37808,Ea=37809,Ta=37810,Aa=37811,Ra=37812,Ca=37813,Pa=37814,La=37815,Da=37816,Ia=37817,Ua=37818,Na=37819,Fa=37820,Oa=37821,Ba=36492,za=36494,ka=36495,Ga=36283,Ha=36284,nr=36285,Va=36286,Ah=3200,sr=0,Rh=1,$i="",Ie="srgb",rr="srgb-linear",ar="linear",ne="srgb",Rr=7680,Ch=519,Ph=512,Lh=513,Dh=514,_c=515,Ih=516,Uh=517,vc=518,xc=519,Mc=35044,rs=35048,Po="300 es",gi=2e3,ds=2001;function Nh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fh(){const s=or("canvas");return s.style.display="block",s}const Lo={};function lr(...s){const t="THREE."+s.shift();console.log(t,...s)}function Sc(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function It(...s){s=Sc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Qt(...s){s=Sc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Qs(...s){const t=s.join(" ");t in Lo||(Lo[t]=!0,It(...s))}function Oh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Bh={[aa]:aa,[la]:ua,[ca]:ca,[cs]:ha,[oa]:oa,[ua]:la,[da]:da,[ha]:cs};class fn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cr=Math.PI/180,Wa=180/Math.PI;function pn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function Vt(s,t,e){return Math.max(t,Math.min(e,s))}function zh(s,t){return(s%t+t)%t}function Pr(s,t,e){return(1-e)*s+e*t}function kh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pr(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yc(s,t){if(t.constructor===Float32Array)return s;const e=pr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function bc(s,t){if(t.constructor===Float32Array)return s;const e=pr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const uo=class uo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uo.prototype.isVector2=!0;let Lt=uo;class Qe{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3],u=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==m){let p=l*u+c*d+h*m+f*v;p<0&&(u=-u,d=-d,m=-m,v=-v,p=-p);let g=1-o;if(p<.9995){const x=Math.acos(p),E=Math.sin(x);g=Math.sin(g*x)/E,o=Math.sin(o*x)/E,l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,f=f*g+v*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,f=f*g+v*o;const x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-o*d,t[e+2]=c*m+h*d+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),f=o(r/2),u=l(i/2),d=l(n/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fo=class fo{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Do.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Do.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=n+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Lr.copy(this).projectOnVector(t),this.sub(Lr)}reflect(t){return this.sub(Lr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fo.prototype.isVector3=!0;let P=fo;const Lr=new P,Do=new Qe,po=class po{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],v=n[0],p=n[3],g=n[6],x=n[1],E=n[4],b=n[7],T=n[2],w=n[5],_=n[8];return r[0]=a*v+o*x+l*T,r[3]=a*p+o*E+l*w,r[6]=a*g+o*b+l*_,r[1]=c*v+h*x+f*T,r[4]=c*p+h*E+f*w,r[7]=c*g+h*b+f*_,r[2]=u*v+d*x+m*T,r[5]=u*p+d*E+m*w,r[8]=u*g+d*b+m*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=e*f+i*u+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=f*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=u*v,t[4]=(h*e-n*l)*v,t[5]=(n*r-o*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dr.makeScale(t,e)),this}rotate(t){return Qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dr.makeRotation(-t)),this}translate(t,e){return Qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};po.prototype.isMatrix3=!0;let Ft=po;const Dr=new Ft,Io=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uo=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gh(){const s={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(n.r=Oi(n.r),n.g=Oi(n.g),n.b=Oi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(n.r=Fn(n.r),n.g=Fn(n.g),n.b=Fn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$i?ar:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[rr]:{primaries:t,whitePoint:i,transfer:ar,toXYZ:Io,fromXYZ:Uo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:i,transfer:ne,toXYZ:Io,fromXYZ:Uo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}const qt=Gh();function Oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gn;class Hh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{gn===void 0&&(gn=or("canvas")),gn.width=t.width,gn.height=t.height;const n=gn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=gn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Oi(e[i]/255)*255):e[i]=Oi(e[i]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vh=0;class ao{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Ir(n[a].image)):r.push(Ir(n[a]))}else r=Ir(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ir(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let Wh=0;const Ur=new P;class Ge extends fn{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,i=Ni,n=Ni,r=Ke,a=Ki,o=yi,l=je,c=Ge.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=pn(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ur).x}get height(){return this.source.getSize(Ur).y}get depth(){return this.source.getSize(Ur).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=hc;Ge.DEFAULT_ANISOTROPY=1;const mo=class mo{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,b=(d+1)/2,T=(g+1)/2,w=(h+u)/4,_=(f+v)/4,y=(m+p)/4;return E>b&&E>T?E<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(E),n=w/i,r=_/i):b>T?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=w/n,r=y/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=_/r,n=y/r),this.set(i,n,r,e),this}let x=Math.sqrt((p-m)*(p-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(f-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mo.prototype.isVector4=!0;let pe=mo;class Xh extends fn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];const n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Ge({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new ao(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Xh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class wc extends Ge{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qh extends Ge{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const fr=class fr{constructor(t,e,i,n,r,a,o,l,c,h,f,u,d,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,f,u,d,m,v,p)}set(t,e,i,n,r,a,o,l,c,h,f,u,d,m,v,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/_n.setFromMatrixColumn(t,0).length(),r=1/_n.setFromMatrixColumn(t,1).length(),a=1/_n.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,m=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,v=c*f;e[0]=u+v*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,v=c*f;e[0]=u-v*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,m=o*h,v=o*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=v-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-v*f}else if(t.order==="XZY"){const u=a*l,d=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yh,t,$h)}lookAt(t,e,i){const n=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Gi.crossVectors(i,Ze),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Gi.crossVectors(i,Ze)),Gi.normalize(),xs.crossVectors(Ze,Gi),n[0]=Gi.x,n[4]=xs.x,n[8]=Ze.x,n[1]=Gi.y,n[5]=xs.y,n[9]=Ze.y,n[2]=Gi.z,n[6]=xs.z,n[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],v=i[6],p=i[10],g=i[14],x=i[3],E=i[7],b=i[11],T=i[15],w=n[0],_=n[4],y=n[8],D=n[12],C=n[1],N=n[5],R=n[9],O=n[13],I=n[2],k=n[6],$=n[10],H=n[14],j=n[3],W=n[7],J=n[11],tt=n[15];return r[0]=a*w+o*C+l*I+c*j,r[4]=a*_+o*N+l*k+c*W,r[8]=a*y+o*R+l*$+c*J,r[12]=a*D+o*O+l*H+c*tt,r[1]=h*w+f*C+u*I+d*j,r[5]=h*_+f*N+u*k+d*W,r[9]=h*y+f*R+u*$+d*J,r[13]=h*D+f*O+u*H+d*tt,r[2]=m*w+v*C+p*I+g*j,r[6]=m*_+v*N+p*k+g*W,r[10]=m*y+v*R+p*$+g*J,r[14]=m*D+v*O+p*H+g*tt,r[3]=x*w+E*C+b*I+T*j,r[7]=x*_+E*N+b*k+T*W,r[11]=x*y+E*R+b*$+T*J,r[15]=x*D+E*O+b*H+T*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],v=t[7],p=t[11],g=t[15],x=l*d-c*u,E=o*d-c*f,b=o*u-l*f,T=a*d-c*h,w=a*u-l*h,_=a*f-o*h;return e*(v*x-p*E+g*b)-i*(m*x-p*T+g*w)+n*(m*E-v*T+g*_)-r*(m*b-v*w+p*_)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],v=t[13],p=t[14],g=t[15],x=e*o-i*a,E=e*l-n*a,b=e*c-r*a,T=i*l-n*o,w=i*c-r*o,_=n*c-r*l,y=h*v-f*m,D=h*p-u*m,C=h*g-d*m,N=f*p-u*v,R=f*g-d*v,O=u*g-d*p,I=x*O-E*R+b*N+T*C-w*D+_*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/I;return t[0]=(o*O-l*R+c*N)*k,t[1]=(n*R-i*O-r*N)*k,t[2]=(v*_-p*w+g*T)*k,t[3]=(u*w-f*_-d*T)*k,t[4]=(l*C-a*O-c*D)*k,t[5]=(e*O-n*C+r*D)*k,t[6]=(p*b-m*_-g*E)*k,t[7]=(h*_-u*b+d*E)*k,t[8]=(a*R-o*C+c*y)*k,t[9]=(i*C-e*R-r*y)*k,t[10]=(m*w-v*b+g*x)*k,t[11]=(f*b-h*w-d*x)*k,t[12]=(o*D-a*N-l*y)*k,t[13]=(e*N-i*D+n*y)*k,t[14]=(v*E-m*T-p*x)*k,t[15]=(h*T-f*E+u*x)*k,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,v=a*h,p=a*f,g=o*f,x=l*c,E=l*h,b=l*f,T=i.x,w=i.y,_=i.z;return n[0]=(1-(v+g))*T,n[1]=(d+b)*T,n[2]=(m-E)*T,n[3]=0,n[4]=(d-b)*w,n[5]=(1-(u+g))*w,n[6]=(p+x)*w,n[7]=0,n[8]=(m+E)*_,n[9]=(p-x)*_,n[10]=(1-(u+v))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=_n.set(n[0],n[1],n[2]).length();const o=_n.set(n[4],n[5],n[6]).length(),l=_n.set(n[8],n[9],n[10]).length();r<0&&(a=-a),hi.copy(this);const c=1/a,h=1/o,f=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=f,hi.elements[9]*=f,hi.elements[10]*=f,e.setFromRotationMatrix(hi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=gi,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===gi)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ds)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=gi,l=!1){const c=this.elements,h=2/(e-t),f=2/(i-n),u=-(e+t)/(e-t),d=-(i+n)/(i-n);let m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===gi)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===ds)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};fr.prototype.isMatrix4=!0;let Yt=fr;const _n=new P,hi=new Yt,Yh=new P(0,0,0),$h=new P(1,1,1),Gi=new P,xs=new P,Ze=new P,No=new Yt,Fo=new Qe;class Xe{constructor(t=0,e=0,i=0,n=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],f=n[2],u=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class Ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kh=0;const Oo=new P,vn=new Qe,Ri=new Yt,Ms=new P,Xn=new P,Zh=new P,Jh=new Qe,Bo=new P(1,0,0),zo=new P(0,1,0),ko=new P(0,0,1),Go={type:"added"},Qh={type:"removed"},xn={type:"childadded",child:null},Nr={type:"childremoved",child:null};class we extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new P,e=new Xe,i=new Qe,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ft}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vn.setFromAxisAngle(t,e),this.quaternion.multiply(vn),this}rotateOnWorldAxis(t,e){return vn.setFromAxisAngle(t,e),this.quaternion.premultiply(vn),this}rotateX(t){return this.rotateOnAxis(Bo,t)}rotateY(t){return this.rotateOnAxis(zo,t)}rotateZ(t){return this.rotateOnAxis(ko,t)}translateOnAxis(t,e){return Oo.copy(t).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bo,t)}translateY(t){return this.translateOnAxis(zo,t)}translateZ(t){return this.translateOnAxis(ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ms.copy(t):Ms.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Xn,Ms,this.up):Ri.lookAt(Ms,Xn,this.up),this.quaternion.setFromRotationMatrix(Ri),n&&(Ri.extractRotation(n.matrixWorld),vn.setFromRotationMatrix(Ri),this.quaternion.premultiply(vn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Go),xn.child=t,this.dispatchEvent(xn),xn.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qh),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Go),xn.child=t,this.dispatchEvent(xn),xn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}we.DEFAULT_UP=new P(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _e extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jh={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jh)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new _e;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Or(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=qt.workingColorSpace){if(t=zh(t,1),e=Vt(e,0,1),i=Vt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Or(a,r,t+1/3),this.g=Or(a,r,t),this.b=Or(a,r,t-1/3)}return qt.colorSpaceToWorking(this,n),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const i=Tc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return qt.workingToColorSpace(ze.copy(this),t),Math.round(Vt(ze.r*255,0,255))*65536+Math.round(Vt(ze.g*255,0,255))*256+Math.round(Vt(ze.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(ze.copy(this),e);const i=ze.r,n=ze.g,r=ze.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ie){qt.workingToColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,n=ze.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Ss);const i=Pr(Hi.h,Ss.h,e),n=Pr(Hi.s,Ss.s,e),r=Pr(Hi.l,Ss.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new xt;xt.NAMES=Tc;class oo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(t),this.density=e}clone(){return new oo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tu extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ui=new P,Ci=new P,Br=new P,Pi=new P,Mn=new P,Sn=new P,Ho=new P,zr=new P,kr=new P,Gr=new P,Hr=new pe,Vr=new pe,Wr=new pe;class oi{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ui.subVectors(t,e),n.cross(ui);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){ui.subVectors(n,e),Ci.subVectors(i,e),Br.subVectors(t,e);const a=ui.dot(ui),o=ui.dot(Ci),l=ui.dot(Br),c=Ci.dot(Ci),h=Ci.dot(Br),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Hr.setScalar(0),Vr.setScalar(0),Wr.setScalar(0),Hr.fromBufferAttribute(t,e),Vr.fromBufferAttribute(t,i),Wr.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Hr,r.x),a.addScaledVector(Vr,r.y),a.addScaledVector(Wr,r.z),a}static isFrontFacing(t,e,i,n){return ui.subVectors(i,e),Ci.subVectors(t,e),ui.cross(Ci).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ui.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return oi.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;Mn.subVectors(n,i),Sn.subVectors(r,i),zr.subVectors(t,i);const l=Mn.dot(zr),c=Sn.dot(zr);if(l<=0&&c<=0)return e.copy(i);kr.subVectors(t,n);const h=Mn.dot(kr),f=Sn.dot(kr);if(h>=0&&f<=h)return e.copy(n);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Mn,a);Gr.subVectors(t,r);const d=Mn.dot(Gr),m=Sn.dot(Gr);if(m>=0&&d<=m)return e.copy(r);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(Sn,o);const p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return Ho.subVectors(r,n),o=(f-h)/(f-h+(d-m)),e.copy(n).addScaledVector(Ho,o);const g=1/(p+v+u);return a=v*g,o=u*g,e.copy(i).addScaledVector(Mn,a).addScaledVector(Sn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class mn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qn),bs.subVectors(this.max,qn),yn.subVectors(t.a,qn),bn.subVectors(t.b,qn),wn.subVectors(t.c,qn),Vi.subVectors(bn,yn),Wi.subVectors(wn,bn),rn.subVectors(yn,wn);let e=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-rn.z,rn.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,rn.z,0,-rn.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-rn.y,rn.x,0];return!Xr(e,yn,bn,wn,bs)||(e=[1,0,0,0,1,0,0,0,1],!Xr(e,yn,bn,wn,bs))?!1:(ws.crossVectors(Vi,Wi),e=[ws.x,ws.y,ws.z],Xr(e,yn,bn,wn,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Li=[new P,new P,new P,new P,new P,new P,new P,new P],di=new P,ys=new mn,yn=new P,bn=new P,wn=new P,Vi=new P,Wi=new P,rn=new P,qn=new P,bs=new P,ws=new P,an=new P;function Xr(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){an.fromArray(s,r);const o=n.x*Math.abs(an.x)+n.y*Math.abs(an.y)+n.z*Math.abs(an.z),l=t.dot(an),c=e.dot(an),h=i.dot(an);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Se=new P,Es=new Lt;let eu=0;class ke extends fn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mc,this.updateRanges=[],this.gpuType=mi,this.version=0,this._normalizationScale=t!==void 0?pr(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):yc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):bc(t,this.array)}}class Ac extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Rc extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Zt extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}const iu=new mn,Yn=new P,qr=new P;class Hn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):iu.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yn.subVectors(t,this.center);const e=Yn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Yn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yn.copy(t.center).add(qr)),this.expandByPoint(Yn.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let nu=0;const si=new Yt,Yr=new we,En=new P,Je=new mn,$n=new mn,Pe=new P;class xe extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?Rc:Ac)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,i){return si.makeTranslation(t,e,i),this.applyMatrix4(si),this}scale(t,e,i){return si.makeScale(t,e,i),this.applyMatrix4(si),this}lookAt(t){return Yr.lookAt(t),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(En).negate(),this.translate(En.x,En.y,En.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$n.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Je.min,$n.min),Je.expandByPoint(Pe),Pe.addVectors(Je.max,$n.max),Je.expandByPoint(Pe)):(Je.expandByPoint($n.min),Je.expandByPoint($n.max))}Je.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(En.fromBufferAttribute(t,c),Pe.add(En)),n=Math.max(n,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new P,l[D]=new P;const h=new P,f=new P,u=new P,d=new Lt,m=new Lt,v=new Lt,p=new P,g=new P;function x(D,C,N){c[D]=c[C]=c[N]=1,h.fromBufferAttribute(i,D),f.fromBufferAttribute(i,C),u.fromBufferAttribute(i,N),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,C),v.fromBufferAttribute(r,N),f.sub(h),u.sub(h),m.sub(d),v.sub(d);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(p.copy(f).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(R),g.copy(u).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(R),o[D].add(p),o[C].add(p),o[N].add(p),l[D].add(g),l[C].add(g),l[N].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,C=E.length;D<C;++D){const N=E[D],R=N.start,O=N.count;for(let I=R,k=R+O;I<k;I+=3)x(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const b=new P,T=new P,w=new P,_=new P;function y(D){w.fromBufferAttribute(n,D),_.copy(w);const C=o[D];b.copy(C),b.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(_,C);const R=T.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,R)}for(let D=0,C=i.count;D<C;++D)c[D]&&y(D);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const n=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(n,r),h.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(n,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new ke(u,h,f)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class su{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Vo(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Vo(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Vo(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=pn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Ve=new P;class cr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?pr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new cr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):yc(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):bc(t,this.data.array)}}const $r=new P,ru=new P,au=new Ft;class qi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=$r.subVectors(i,e).cross(ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta($r),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||au.getNormalMatrix(t),n=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let ou=0;class tn extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Nn,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=nc,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new qi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qi extends tn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Tn;const Kn=new P,An=new P,Rn=new P,Cn=new Lt,Zn=new Lt,Cc=new Yt,Ts=new P,Jn=new P,As=new P,Wo=new Lt,Kr=new Lt,Xo=new Lt;class cn extends we{constructor(t=new Qi){if(super(),this.isSprite=!0,this.type="Sprite",Tn===void 0){Tn=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new su(e,5);Tn.setIndex([0,1,2,0,2,3]),Tn.setAttribute("position",new cr(i,3,0,!1)),Tn.setAttribute("uv",new cr(i,2,3,!1))}this.geometry=Tn,this.material=t,this.center=new Lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),An.setFromMatrixScale(this.matrixWorld),Cc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&An.multiplyScalar(-Rn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Rs(Ts.set(-.5,-.5,0),Rn,a,An,n,r),Rs(Jn.set(.5,-.5,0),Rn,a,An,n,r),Rs(As.set(.5,.5,0),Rn,a,An,n,r),Wo.set(0,0),Kr.set(1,0),Xo.set(1,1);let o=t.ray.intersectTriangle(Ts,Jn,As,!1,Kn);if(o===null&&(Rs(Jn.set(-.5,.5,0),Rn,a,An,n,r),Kr.set(0,1),o=t.ray.intersectTriangle(Ts,As,Jn,!1,Kn),o===null))return;const l=t.ray.origin.distanceTo(Kn);l<t.near||l>t.far||e.push({distance:l,point:Kn.clone(),uv:oi.getInterpolation(Kn,Ts,Jn,As,Wo,Kr,Xo,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Rs(s,t,e,i,n,r){Cn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Zn.x=r*Cn.x-n*Cn.y,Zn.y=n*Cn.x+r*Cn.y):Zn.copy(Cn),s.copy(t),s.x+=Zn.x,s.y+=Zn.y,s.applyMatrix4(Cc)}const Di=new P,Zr=new P,Cs=new P,Ps=new P;class Pc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Zr.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),Ps.copy(this.origin).sub(Zr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Cs),o=Ps.dot(this.direction),l=-Ps.dot(Cs),c=Ps.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Zr).addScaledVector(Cs,u),d}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);const i=Di.dot(this.direction),n=Di.dot(Di)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,m=e.x-a.x,v=e.y-a.y,p=e.z-a.z,g=i.x-a.x,x=i.y-a.y,E=i.z-a.z,b=Math.abs(l),T=Math.abs(c),w=Math.abs(h);let _,y,D,C,N,R,O,I,k,$,H,j;if(b>=T&&b>=w?(D=l,R=f,k=m,j=g,l>=0?(_=c,y=h,C=u,N=d,O=v,I=p,$=x,H=E):(_=h,y=c,C=d,N=u,O=p,I=v,$=E,H=x)):T>=w?(D=c,R=u,k=v,j=x,c>=0?(_=h,y=l,C=d,N=f,O=p,I=m,$=E,H=g):(_=l,y=h,C=f,N=d,O=m,I=p,$=g,H=E)):(D=h,R=d,k=p,j=E,h>=0?(_=l,y=c,C=f,N=u,O=m,I=v,$=g,H=x):(_=c,y=l,C=u,N=f,O=v,I=m,$=x,H=g)),D===0)return null;const W=_/D,J=y/D,tt=1/D,wt=C-W*R,Dt=N-J*R,Y=O-W*k,pt=I-J*k,Mt=$-W*j,Rt=H-J*j,mt=Mt*pt-Rt*Y,Ut=wt*Rt-Dt*Mt,ue=Y*Dt-pt*wt;if(n){if(mt<0||Ut<0||ue<0)return null}else if((mt<0||Ut<0||ue<0)&&(mt>0||Ut>0||ue>0))return null;const Ct=mt+Ut+ue;if(Ct===0)return null;const Jt=tt*(mt*R+Ut*k+ue*j);return(Ct>0?Jt<0:Jt>0)?null:this.at(Jt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge extends tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qo=new Yt,on=new Pc,Ls=new Hn,Yo=new P,Ds=new P,Is=new P,Us=new P,Jr=new P,Ns=new P,$o=new P,Fs=new P;class it extends we{constructor(t=new xe,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Jr.fromBufferAttribute(f,t),a?Ns.addScaledVector(Jr,h):Ns.addScaledVector(Jr.sub(e),h))}e.add(Ns)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(r),on.copy(t.ray).recast(t.near),!(Ls.containsPoint(on.origin)===!1&&(on.intersectSphere(Ls,Yo)===null||on.origin.distanceToSquared(Yo)>(t.far-t.near)**2))&&(qo.copy(r).invert(),on.copy(t.ray).applyMatrix4(qo),!(i.boundingBox!==null&&on.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,on)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const p=u[m],g=a[p.materialIndex],x=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,T=E;b<T;b+=3){const w=o.getX(b),_=o.getX(b+1),y=o.getX(b+2);n=Os(this,g,t,i,c,h,f,w,_,y),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){const x=o.getX(p),E=o.getX(p+1),b=o.getX(p+2);n=Os(this,a,t,i,c,h,f,x,E,b),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const p=u[m],g=a[p.materialIndex],x=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,T=E;b<T;b+=3){const w=b,_=b+1,y=b+2;n=Os(this,g,t,i,c,h,f,w,_,y),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){const x=p,E=p+1,b=p+2;n=Os(this,a,t,i,c,h,f,x,E,b),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function lu(s,t,e,i,n,r,a,o){let l;if(t.side===qe?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===un,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Fs);return c<e.near||c>e.far?null:{distance:c,point:Fs.clone(),object:s}}function Os(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Ds),s.getVertexPosition(l,Is),s.getVertexPosition(c,Us);const h=lu(s,t,e,i,Ds,Is,Us,$o);if(h){const f=new P;oi.getBarycoord($o,Ds,Is,Us,f),n&&(h.uv=oi.getInterpolatedAttribute(n,o,l,c,f,new Lt)),r&&(h.uv1=oi.getInterpolatedAttribute(r,o,l,c,f,new Lt)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,l,c,f,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};oi.getNormal(Ds,Is,Us,u.normal),h.face=u,h.barycoord=f}return h}class Lc extends Ge{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Ne,h=Ne,f,u){super(null,a,o,l,c,h,n,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko extends ke{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Pn=new Yt,Zo=new Yt,Bs=[],Jo=new mn,cu=new Yt,Qn=new it,jn=new Hn;class fi extends it{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,cu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Pn),Jo.copy(t.boundingBox).applyMatrix4(Pn),this.boundingBox.union(Jo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Pn),jn.copy(t.boundingSphere).applyMatrix4(Pn),this.boundingSphere.union(jn)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Qn.geometry=this.geometry,Qn.material=this.material,Qn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jn.copy(this.boundingSphere),jn.applyMatrix4(i),t.ray.intersectsSphere(jn)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Pn),Zo.multiplyMatrices(i,Pn),Qn.matrixWorld=Zo,Qn.raycast(t,Bs);for(let a=0,o=Bs.length;a<o;a++){const l=Bs[a];l.instanceId=r,l.object=this,e.push(l)}Bs.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Lc(new Float32Array(n*this.count),n,this.count,io,mi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ln=new Hn,hu=new Lt(.5,.5),zs=new P;class fs{constructor(t=new qi,e=new qi,i=new qi,n=new qi,r=new qi,a=new qi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gi,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],v=r[9],p=r[10],g=r[11],x=r[12],E=r[13],b=r[14],T=r[15];if(n[0].setComponents(c-a,d-h,g-m,T-x).normalize(),n[1].setComponents(c+a,d+h,g+m,T+x).normalize(),n[2].setComponents(c+o,d+f,g+v,T+E).normalize(),n[3].setComponents(c-o,d-f,g-v,T-E).normalize(),i)n[4].setComponents(l,u,p,b).normalize(),n[5].setComponents(c-l,d-u,g-p,T-b).normalize();else if(n[4].setComponents(c-l,d-u,g-p,T-b).normalize(),e===gi)n[5].setComponents(c+l,d+u,g+p,T+b).normalize();else if(e===ds)n[5].setComponents(l,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ln)}intersectsSprite(t){ln.center.set(0,0,0);const e=hu.distanceTo(t.center);return ln.radius=.7071067811865476+e,ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(ln)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(zs.x=n.normal.x>0?t.max.x:t.min.x,zs.y=n.normal.y>0?t.max.y:t.min.y,zs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Qo=new Yt;class lo{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const r=e[n];Qo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new fs),i[n].setFromProjectionMatrix(Qo,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new fs),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new lo().copy(this)}}class uu extends tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jo=new Yt,Xa=new Pc,ks=new Hn,Gs=new P;class du extends we{constructor(t=new xe,e=new uu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(n),ks.radius+=r,t.ray.intersectsSphere(ks)===!1)return;jo.copy(n).invert(),Xa.copy(t.ray).applyMatrix4(jo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=u,v=d;m<v;m++){const p=c.getX(m);Gs.fromBufferAttribute(f,p),tl(Gs,p,l,n,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=u,v=d;m<v;m++)Gs.fromBufferAttribute(f,m),tl(Gs,m,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tl(s,t,e,i,n,r,a){const o=Xa.distanceSqToPoint(s);if(o<e){const l=new P;Xa.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Dc extends Ge{constructor(t=[],e=Bn,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mr extends Ge{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kn extends Ge{constructor(t,e,i=Ei,n,r,a,o=Ne,l=Ne,c,h=ji,f=1){if(h!==ji&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ic extends kn{constructor(t,e=Ei,i=Bn,n,r,a=Ne,o=Ne,l,c=ji){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Uc extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ae extends xe{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,r,4),m("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(f,2));function m(v,p,g,x,E,b,T,w,_,y,D){const C=b/_,N=T/y,R=b/2,O=T/2,I=w/2,k=_+1,$=y+1;let H=0,j=0;const W=new P;for(let J=0;J<$;J++){const tt=J*N-O;for(let wt=0;wt<k;wt++){const Dt=wt*C-R;W[v]=Dt*x,W[p]=tt*E,W[g]=I,c.push(W.x,W.y,W.z),W[v]=0,W[p]=0,W[g]=w>0?1:-1,h.push(W.x,W.y,W.z),f.push(wt/_),f.push(1-J/y),H+=1}}for(let J=0;J<y;J++)for(let tt=0;tt<_;tt++){const wt=u+tt+k*J,Dt=u+tt+k*(J+1),Y=u+(tt+1)+k*(J+1),pt=u+(tt+1)+k*J;l.push(wt,Dt,pt),l.push(Dt,Y,pt),j+=6}o.addGroup(d,j,D),d+=j,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class gr extends xe{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,m=i*2+r,v=n+1,p=new P,g=new P;for(let x=0;x<=m;x++){let E=0,b=0,T=0,w=0;if(x<=i){const D=x/i,C=D*Math.PI/2;b=-h-t*Math.cos(C),T=t*Math.sin(C),w=-t*Math.cos(C),E=D*f}else if(x<=i+r){const D=(x-i)/r;b=-h+D*e,T=t,w=0,E=f+D*u}else{const D=(x-i-r)/i,C=D*Math.PI/2;b=h+t*Math.sin(C),T=t*Math.cos(C),w=t*Math.sin(C),E=f+u+D*f}const _=Math.max(0,Math.min(1,E/d));let y=0;x===0?y=.5/n:x===m&&(y=-.5/n);for(let D=0;D<=n;D++){const C=D/n,N=C*Math.PI*2,R=Math.sin(N),O=Math.cos(N);g.x=-T*O,g.y=b,g.z=T*R,o.push(g.x,g.y,g.z),p.set(-T*O,w,T*R),p.normalize(),l.push(p.x,p.y,p.z),c.push(C+y,_)}if(x>0){const D=(x-1)*v;for(let C=0;C<n;C++){const N=D+C,R=D+C+1,O=x*v+C,I=x*v+C+1;a.push(N,R,O),a.push(R,I,O)}}}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ps extends xe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new Lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*n;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class he extends xe{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],f=[],u=[],d=[];let m=0;const v=[],p=i/2;let g=0;x(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function x(){const b=new P,T=new P;let w=0;const _=(e-t)/i;for(let y=0;y<=r;y++){const D=[],C=y/r,N=C*(e-t)+t;for(let R=0;R<=n;R++){const O=R/n,I=O*l+o,k=Math.sin(I),$=Math.cos(I);T.x=N*k,T.y=-C*i+p,T.z=N*$,f.push(T.x,T.y,T.z),b.set(k,_,$).normalize(),u.push(b.x,b.y,b.z),d.push(O,1-C),D.push(m++)}v.push(D)}for(let y=0;y<n;y++)for(let D=0;D<r;D++){const C=v[D][y],N=v[D+1][y],R=v[D+1][y+1],O=v[D][y+1];(t>0||D!==0)&&(h.push(C,N,O),w+=3),(e>0||D!==r-1)&&(h.push(N,R,O),w+=3)}c.addGroup(g,w,0),g+=w}function E(b){const T=m,w=new Lt,_=new P;let y=0;const D=b===!0?t:e,C=b===!0?1:-1;for(let R=1;R<=n;R++)f.push(0,p*C,0),u.push(0,C,0),d.push(.5,.5),m++;const N=m;for(let R=0;R<=n;R++){const I=R/n*l+o,k=Math.cos(I),$=Math.sin(I);_.x=D*$,_.y=p*C,_.z=D*k,f.push(_.x,_.y,_.z),u.push(0,C,0),w.x=k*.5+.5,w.y=$*.5*C+.5,d.push(w.x,w.y),m++}for(let R=0;R<n;R++){const O=T+R,I=N+R;b===!0?h.push(I,I+1,O):h.push(I+1,I,O),y+=3}c.addGroup(g,y,b===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _r extends he{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new _r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vr extends xe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const E=new P,b=new P,T=new P;for(let w=0;w<e.length;w+=3)d(e[w+0],E),d(e[w+1],b),d(e[w+2],T),l(E,b,T,x)}function l(x,E,b,T){const w=T+1,_=[];for(let y=0;y<=w;y++){_[y]=[];const D=x.clone().lerp(b,y/w),C=E.clone().lerp(b,y/w),N=w-y;for(let R=0;R<=N;R++)R===0&&y===w?_[y][R]=D:_[y][R]=D.clone().lerp(C,R/N)}for(let y=0;y<w;y++)for(let D=0;D<2*(w-y)-1;D++){const C=Math.floor(D/2);D%2===0?(u(_[y][C+1]),u(_[y+1][C]),u(_[y][C])):(u(_[y][C+1]),u(_[y+1][C+1]),u(_[y+1][C]))}}function c(x){const E=new P;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(x),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){const x=new P;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const b=p(x)/2/Math.PI+.5,T=g(x)/Math.PI+.5;a.push(b,1-T)}m(),f()}function f(){for(let x=0;x<a.length;x+=6){const E=a[x+0],b=a[x+2],T=a[x+4],w=Math.max(E,b,T),_=Math.min(E,b,T);w>.9&&_<.1&&(E<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,E){const b=x*3;E.x=t[b+0],E.y=t[b+1],E.z=t[b+2]}function m(){const x=new P,E=new P,b=new P,T=new P,w=new Lt,_=new Lt,y=new Lt;for(let D=0,C=0;D<r.length;D+=9,C+=6){x.set(r[D+0],r[D+1],r[D+2]),E.set(r[D+3],r[D+4],r[D+5]),b.set(r[D+6],r[D+7],r[D+8]),w.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),T.copy(x).add(E).add(b).divideScalar(3);const N=p(T);v(w,C+0,x,N),v(_,C+2,E,N),v(y,C+4,b,N)}}function v(x,E,b,T){T<0&&x.x===1&&(a[E]=x.x-1),b.x===0&&b.z===0&&(a[E]=T/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.vertices,t.indices,t.radius,t.detail)}}class xr extends vr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xr(t.radius,t.detail)}}class fu{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],u=i[n+1]-h,d=(a-h)/u;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new P,n=[],r=[],a=[],o=new P,l=new Yt;for(let d=0;d<=t;d++){const m=d/t;n[d]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),f=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Vt(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(Vt(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],d*m)),a[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function co(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,n(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const el=new P,il=new P,Qr=new co,jr=new co,ta=new co;class pu extends fu{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new P){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(il.subVectors(n[0],n[1]).add(n[0]),c=il);const f=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(el.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=el),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),Qr.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,v,p),jr.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,v,p),ta.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(Qr.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),jr.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ta.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Qr.calc(l),jr.calc(l),ta.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new P().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class bi extends vr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bi(t.radius,t.detail)}}class Ue extends xe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,f=t/o,u=e/l,d=[],m=[],v=[],p=[];for(let g=0;g<h;g++){const x=g*u-a;for(let E=0;E<c;E++){const b=E*f-r;m.push(b,-x,0),v.push(0,0,1),p.push(E/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const E=x+c*g,b=x+c*(g+1),T=x+1+c*(g+1),w=x+1+c*g;d.push(E,b,w),d.push(b,T,w)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.widthSegments,t.heightSegments)}}class hr extends xe{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let f=t;const u=(e-t)/n,d=new P,m=new Lt;for(let v=0;v<=n;v++){for(let p=0;p<=i;p++){const g=r+p/i*a;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let v=0;v<n;v++){const p=v*(i+1);for(let g=0;g<i;g++){const x=g+p,E=x,b=x+i+1,T=x+i+2,w=x+1;o.push(E,b,w),o.push(b,T,w)}}this.setIndex(o),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Bi extends xe{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new P,u=new P,d=[],m=[],v=[],p=[];for(let g=0;g<=i;g++){const x=[],E=g/i,b=a+E*o,T=t*Math.cos(b),w=Math.sqrt(t*t-T*T);let _=0;g===0&&a===0?_=.5/e:g===i&&l===Math.PI&&(_=-.5/e);for(let y=0;y<=e;y++){const D=y/e,C=n+D*r;f.x=-w*Math.cos(C),f.y=T,f.z=w*Math.sin(C),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),p.push(D+_,1-E),x.push(c++)}h.push(x)}for(let g=0;g<i;g++)for(let x=0;x<e;x++){const E=h[g][x+1],b=h[g][x],T=h[g+1][x],w=h[g+1][x+1];(g!==0||a>0)&&d.push(E,b,w),(g!==i-1||l<Math.PI)&&d.push(b,T,w)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Mr extends xe{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],f=[],u=new P,d=new P,m=new P;for(let v=0;v<=i;v++){const p=a+v/i*o;for(let g=0;g<=n;g++){const x=g/n*r;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(g/n),f.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=n;p++){const g=(n+1)*v+p-1,x=(n+1)*(v-1)+p-1,E=(n+1)*(v-1)+p,b=(n+1)*v+p;l.push(g,x,b),l.push(x,E,b)}this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Gn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(nl(n))n.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(nl(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function We(s){const t={};for(let e=0;e<s.length;e++){const i=Gn(s[e]);for(const n in i)t[n]=i[n]}return t}function nl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function mu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Nc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const gu={clone:Gn,merge:We};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gn(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new xt().setHex(n.value);break;case"v2":this.uniforms[i].value=new Lt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new pe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ft().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Yt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class xu extends _i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class be extends tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ie extends tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Ja,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mu extends tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Su extends tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Fc extends we{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class yu extends Fc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ea=new Yt,sl=new P,rl=new P;class bu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(sl),rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ea,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hs=new P,Vs=new Qe,xi=new P;class Oc extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hs,Vs,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Vs,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Hs,Vs,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Vs,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new P,al=new Lt,ol=new Lt;class pi extends Oc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,al,ol),e.subVectors(ol,al)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Bc extends Oc{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class wu extends bu{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ll extends Fc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new wu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ln=-90,Dn=1;class qa extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new pi(Ln,Dn,t,e);n.layers=this.layers,this.add(n);const r=new pi(Ln,Dn,t,e);r.layers=this.layers,this.add(r);const a=new pi(Ln,Dn,t,e);a.layers=this.layers,this.add(a);const o=new pi(Ln,Dn,t,e);o.layers=this.layers,this.add(o);const l=new pi(Ln,Dn,t,e);l.layers=this.layers,this.add(l);const c=new pi(Ln,Dn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Eu extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Tu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,It("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function cl(s,t,e,i){const n=Au(i);switch(e){case mc:return s*t;case io:return s*t/n.components*n.byteLength;case no:return s*t/n.components*n.byteLength;case dn:return s*t*2/n.components*n.byteLength;case so:return s*t*2/n.components*n.byteLength;case gc:return s*t*3/n.components*n.byteLength;case yi:return s*t*4/n.components*n.byteLength;case ro:return s*t*4/n.components*n.byteLength;case $s:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Js:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ma:case _a:return Math.max(s,16)*Math.max(t,8)/4;case pa:case ga:return Math.max(s,8)*Math.max(t,8)/2;case va:case xa:case Sa:case ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ma:case ir:case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Na:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ba:case za:case ka:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ga:case Ha:return Math.ceil(s/4)*Math.ceil(t/4)*8;case nr:case Va:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Au(s){switch(s){case je:case uc:return{byteLength:1,components:1};case us:case dc:case Ti:return{byteLength:2,components:1};case to:case eo:return{byteLength:2,components:4};case Ei:case ja:case mi:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);function zc(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ru(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const v=f[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Td=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ad=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$f=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Cu,alphahash_pars_fragment:Pu,alphamap_fragment:Lu,alphamap_pars_fragment:Du,alphatest_fragment:Iu,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:ku,bsdfs:Gu,iridescence_fragment:Hu,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:$u,color_pars_fragment:Ku,color_pars_vertex:Zu,color_vertex:Ju,common:Qu,defaultnormal_vertex:ju,displacementmap_pars_vertex:td,displacementmap_vertex:ed,emissivemap_fragment:id,emissivemap_pars_fragment:nd,colorspace_fragment:sd,colorspace_pars_fragment:rd,envmap_fragment:ad,envmap_common_pars_fragment:od,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:Md,envmap_vertex:hd,fog_vertex:ud,fog_pars_vertex:dd,fog_fragment:fd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:vd,lights_pars_begin:xd,lights_toon_fragment:Sd,lights_toon_pars_fragment:yd,lights_phong_fragment:bd,lights_phong_pars_fragment:wd,lights_physical_fragment:Ed,lights_physical_pars_fragment:Td,lights_fragment_begin:Ad,lights_fragment_maps:Rd,lights_fragment_end:Cd,lightprobes_pars_fragment:Pd,logdepthbuf_fragment:Ld,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Id,logdepthbuf_vertex:Ud,map_fragment:Nd,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:kd,morphinstance_vertex:Gd,morphcolor_vertex:Hd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:$d,normal_pars_vertex:Kd,normal_vertex:Zd,normalmap_pars_fragment:Jd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:tf,iridescence_pars_fragment:ef,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:af,dithering_fragment:of,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:_f,skinnormal_vertex:vf,specularmap_fragment:xf,specularmap_pars_fragment:Mf,tonemapping_fragment:Sf,tonemapping_pars_fragment:yf,transmission_fragment:bf,transmission_pars_fragment:wf,uv_pars_fragment:Ef,uv_pars_vertex:Tf,uv_vertex:Af,worldpos_vertex:Rf,background_vert:Cf,background_frag:Pf,backgroundCube_vert:Lf,backgroundCube_frag:Df,cube_vert:If,cube_frag:Uf,depth_vert:Nf,depth_frag:Ff,distance_vert:Of,distance_frag:Bf,equirect_vert:zf,equirect_frag:kf,linedashed_vert:Gf,linedashed_frag:Hf,meshbasic_vert:Vf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:$f,meshnormal_vert:Kf,meshnormal_frag:Zf,meshphong_vert:Jf,meshphong_frag:Qf,meshphysical_vert:jf,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:ip,points_vert:np,points_frag:sp,shadow_vert:rp,shadow_frag:ap,sprite_vert:op,sprite_frag:lp},_t={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Si={basic:{uniforms:We([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:We([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:We([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:We([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:We([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new xt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:We([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:We([_t.points,_t.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:We([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:We([_t.common,_t.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:We([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:We([_t.sprite,_t.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:We([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:We([_t.lights,_t.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Si.physical={uniforms:We([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Ws={r:0,b:0,g:0},cp=new Yt,kc=new Ft;kc.set(-1,0,0,0,1,0,0,0,1);function hp(s,t,e,i,n,r){const a=new xt(0);let o=n===!0?0:1,l,c,h=null,f=0,u=null;function d(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const b=x.backgroundBlurriness>0;E=t.get(E,b)}return E}function m(x){let E=!1;const b=d(x);b===null?p(a,o):b&&b.isColor&&(p(b,1),E=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(x,E){const b=d(E);b&&b.isCubeTexture?(c===void 0&&(c=new it(new ae(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Gn(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kc),c.material.toneMapped=qt.getTransfer(b.colorSpace)!==ne,(h!==b||f!==b.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new it(new Ue(2,2),new _i({name:"BackgroundMaterial",uniforms:Gn(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=qt.getTransfer(b.colorSpace)!==ne,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,E){x.getRGB(Ws,Nc(s)),e.buffers.color.setClear(Ws.r,Ws.g,Ws.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:m,addToRenderList:v,dispose:g}}function up(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function o(N,R,O,I,k){let $=!1;const H=f(N,I,O,R);r!==H&&(r=H,c(r.object)),$=d(N,I,O,k),$&&m(N,I,O,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(N,R,O,I),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function f(N,R,O,I){const k=I.wireframe===!0;let $=i[R.id];$===void 0&&($={},i[R.id]=$);const H=N.isInstancedMesh===!0?N.id:0;let j=$[H];j===void 0&&(j={},$[H]=j);let W=j[O.id];W===void 0&&(W={},j[O.id]=W);let J=W[k];return J===void 0&&(J=u(l()),W[k]=J),J}function u(N){const R=[],O=[],I=[];for(let k=0;k<e;k++)R[k]=0,O[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:I,object:N,attributes:{},index:null}}function d(N,R,O,I){const k=r.attributes,$=R.attributes;let H=0;const j=O.getAttributes();for(const W in j)if(j[W].location>=0){const tt=k[W];let wt=$[W];if(wt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(wt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(wt=N.instanceColor)),tt===void 0||tt.attribute!==wt||wt&&tt.data!==wt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function m(N,R,O,I){const k={},$=R.attributes;let H=0;const j=O.getAttributes();for(const W in j)if(j[W].location>=0){let tt=$[W];tt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));const wt={};wt.attribute=tt,tt&&tt.data&&(wt.data=tt.data),k[W]=wt,H++}r.attributes=k,r.attributesNum=H,r.index=I}function v(){const N=r.newAttributes;for(let R=0,O=N.length;R<O;R++)N[R]=0}function p(N){g(N,0)}function g(N,R){const O=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;O[N]=1,I[N]===0&&(s.enableVertexAttribArray(N),I[N]=1),k[N]!==R&&(s.vertexAttribDivisor(N,R),k[N]=R)}function x(){const N=r.newAttributes,R=r.enabledAttributes;for(let O=0,I=R.length;O<I;O++)R[O]!==N[O]&&(s.disableVertexAttribArray(O),R[O]=0)}function E(N,R,O,I,k,$,H){H===!0?s.vertexAttribIPointer(N,R,O,k,$):s.vertexAttribPointer(N,R,O,I,k,$)}function b(N,R,O,I){v();const k=I.attributes,$=O.getAttributes(),H=R.defaultAttributeValues;for(const j in $){const W=$[j];if(W.location>=0){let J=k[j];if(J===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){const tt=J.normalized,wt=J.itemSize,Dt=t.get(J);if(Dt===void 0)continue;const Y=Dt.buffer,pt=Dt.type,Mt=Dt.bytesPerElement,Rt=pt===s.INT||pt===s.UNSIGNED_INT||J.gpuType===ja;if(J.isInterleavedBufferAttribute){const mt=J.data,Ut=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,ue=J.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let Ct=0;Ct<W.locationSize;Ct++)g(W.location+Ct,mt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)p(W.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let Ct=0;Ct<W.locationSize;Ct++)E(W.location+Ct,wt/W.locationSize,pt,tt,Ut*Mt,(ue+wt/W.locationSize*Ct)*Mt,Rt)}else{if(J.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)g(W.location+mt,J.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let mt=0;mt<W.locationSize;mt++)p(W.location+mt);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let mt=0;mt<W.locationSize;mt++)E(W.location+mt,wt/W.locationSize,pt,tt,wt*Mt,wt/W.locationSize*mt*Mt,Rt)}}else if(H!==void 0){const tt=H[j];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(W.location,tt);break;case 3:s.vertexAttrib3fv(W.location,tt);break;case 4:s.vertexAttrib4fv(W.location,tt);break;default:s.vertexAttrib1fv(W.location,tt)}}}}x()}function T(){D();for(const N in i){const R=i[N];for(const O in R){const I=R[O];for(const k in I){const $=I[k];for(const H in $)h($[H].object),delete $[H];delete I[k]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;const R=i[N.id];for(const O in R){const I=R[O];for(const k in I){const $=I[k];for(const H in $)h($[H].object),delete $[H];delete I[k]}}delete i[N.id]}function _(N){for(const R in i){const O=i[R];for(const I in O){const k=O[I];if(k[N.id]===void 0)continue;const $=k[N.id];for(const H in $)h($[H].object),delete $[H];delete k[N.id]}}}function y(N){for(const R in i){const O=i[R],I=N.isInstancedMesh===!0?N.id:0,k=O[I];if(k!==void 0){for(const $ in k){const H=k[$];for(const j in H)h(H[j].object),delete H[j];delete k[$]}delete O[I],Object.keys(O).length===0&&delete i[R]}}}function D(){C(),a=!0,r!==n&&(r=n,c(r.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function dp(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fp(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(_){return!(_!==yi&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const y=_===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==je&&_!==mi&&!y&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:b,maxSamples:T,samples:w}}function pp(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new qi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||n;return n=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,g=s.get(f);if(!n||m===null||m.length===0||r&&!p)r?h(null):c();else{const x=r?0:i,E=x*4;let b=g.clippingState||null;l.value=b,b=h(m,u,E,d);for(let T=0;T!==E;++T)b[T]=e[T];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,m){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=d+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,b=d;E!==v;++E,b+=4)a.copy(f[E]).applyMatrix4(x,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}class ho extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Dc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ae(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:Gn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:Un});r.uniforms.tEquirect.value=e;const a=new it(n,r),o=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Ke),new qa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const hl=256,mp=3,gp=20,Gc=256,Hc=16,_p=3,vp=new P,xp=new xt;class ur{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qa(1,10,null),this._boxMesh=new it(new ae(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=vp}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(xp));const p=new qa(i,n,h);return p.position.copy(o),p.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(hl,kh(t))}_fromTexture(t,e){t.mapping===Bn||t.mapping===hs?this._setSize(t.image.length===0?hl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=ul(t,!1,!1),i=Math.log2(t)-mp;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ul(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Bn||t.mapping===hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dl()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Mp(),this._integrationMaterial=Sp());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Hc);for(let a=0;a<=i;a++){const o=ur.lodToRoughness(a,i);if(a>i-_p)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Gc*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=yp());const i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}}function ul(s,t,e){return new ho(s,{minFilter:Ki,generateMipmaps:t,type:Ti,colorSpace:rr,depthBuffer:e})}function ms(s,t,e){return new _i({name:s,uniforms:t,vertexShader:kt.cube_vert,fragmentShader:e,side:qe,blending:Un,depthTest:!1,depthWrite:!1})}function Mp(){return ms("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Sp(){return ms("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yp(){return ms("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function dl(){return ms("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function fl(){return ms("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bp(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Er||d===Tr)if(t.has(u)){const m=t.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new ho(m.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const d=u.mapping,m=d===Er||d===Tr,v=d===Bn||d===hs;if(m||v){let p=e.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new ur(s)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const x=u.image;return m&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new ur(s)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===Er?u.mapping=Bn:d===Tr&&(u.mapping=hs),u}function l(u){let d=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function wp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Qs("WebGLRenderer: "+i+" extension not supported."),n}}}function Ep(s,t,e,i){const n={},r=new WeakMap,a=new FinalizationRegistry(m=>delete n[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete n[m.id],a.unregister(m);const v=r.get(m);v&&(t.remove(v),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,v){return n[v.id]!==void 0||(v.addEventListener("dispose",o),n[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(m){const v=m.attributes;for(const p in v)t.update(v[p],s.ARRAY_BUFFER)}function f(m){const v=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const x=v!==null?v.array.length:p.array.length/3-1,E=p.count>=65535?Rc:Ac,b=new E(Math.ceil(x/3)*6,1),T=b.array;if(v!==null){const _=v.array;g=v.version;for(let y=0,D=0;y<x;y+=3){const C=_[y+0],N=_[y+1],R=_[y+2];T[D++]=C,T[D++]=N,T[D++]=N,T[D++]=R,T[D++]=R,T[D++]=C}}else{g=p.version;for(let _=0,y=0;_<x;_+=3){const D=_+0,C=_+1,N=_+2;T[y++]=D,T[y++]=C,T[y++]=C,T[y++]=N,T[y++]=N,T[y++]=D}}b.version=g;const w=r.get(m);w&&t.remove(w),r.set(m,b)}function u(m){const v=r.get(m);if(v){const p=m.index;p!==null&&v.version<p.version&&f(m)}else f(m);return r.get(m)}function d(){for(const m in n){const v=n[m].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Tp(s,t,e){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(i,u,r,f*a),e.update(u,i,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let v=0;for(let p=0;p<d;p++)v+=u[p];e.update(v,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ap(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Rp(s,t,e){const i=new WeakMap,n=new pe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let C=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var d=C;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let T=o.attributes.position.count*b,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const _=new Float32Array(T*w*4*f),y=new wc(_,T,w,f);y.type=mi,y.needsUpdate=!0;const D=b*4;for(let N=0;N<f;N++){const R=g[N],O=x[N],I=E[N],k=T*w*4*N;for(let $=0;$<R.count;$++){const H=$*D;m===!0&&(n.fromBufferAttribute(R,$),_[k+H+0]=n.x,_[k+H+1]=n.y,_[k+H+2]=n.z,_[k+H+3]=0),v===!0&&(n.fromBufferAttribute(O,$),_[k+H+4]=n.x,_[k+H+5]=n.y,_[k+H+6]=n.z,_[k+H+7]=0),p===!0&&(n.fromBufferAttribute(I,$),_[k+H+8]=n.x,_[k+H+9]=n.y,_[k+H+10]=n.z,_[k+H+11]=I.itemSize===4?n.w:1)}}u={count:f,texture:y,size:new Lt(T,w)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Cp(s,t,e,i,n){let r=new WeakMap;function a(c){const h=n.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Pp={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[Qa]:"ACES_FILMIC_TONE_MAPPING",[lc]:"AGX_TONE_MAPPING",[cc]:"NEUTRAL_TONE_MAPPING",[oc]:"CUSTOM_TONE_MAPPING"};function Lp(s,t,e,i,n,r){const a=new wi(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new xe;h.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const f=new xu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new it(h,f),d=new Bc(-1,1,1,-1,0,1);let m=null,v=null,p=!1,g,x=null,E=[],b=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let _=0;_<E.length;_++){const y=E[_];y.setSize&&y.setSize(T,w)}},this.setEffects=function(T){E=T,b=E.length>0&&E[0].isRenderPass===!0;const w=a.width,_=a.height;E.length>0&&o===null&&(o=new wi(w,_,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new wi(w,_,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));const y=n===!0&&E.some(D=>D.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new kn(w,_),r===!0&&(c.format=Zi,c.type=zn)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let D=0;D<E.length;D++){const C=E[D];C.setSize&&C.setSize(w,_),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,w){if(p||T.toneMapping===Fi&&E.length===0)return!1;if(x=w,w!==null){const _=w.width,y=w.height;(a.width!==_||a.height!==y)&&this.setSize(_,y)}return b===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=Fi,!0},this.hasRenderPass=function(){return b},this.end=function(T,w){T.toneMapping=g,p=!0;let _=a,y=o;for(let D=0;D<E.length;D++){const C=E[D];C.enabled!==!1&&(C.render(T,y,_,w),C.needsSwap!==!1&&(_=y,y=y===o?l:o))}if(m!==T.outputColorSpace||v!==T.toneMapping){m=T.outputColorSpace,v=T.toneMapping,f.defines={},qt.getTransfer(m)===ne&&(f.defines.SRGB_TRANSFER="");const D=Pp[v];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(x),T.render(u,d),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const Vc=new Ge,Wc=new kn(1,1),Xc=new Ic(1),qc=new wc,Yc=new qh,$c=new Dc,pl=[],ml=[],gl=new Float32Array(16),_l=new Float32Array(9),vl=new Float32Array(4);function Vn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=pl[n];if(r===void 0&&(r=new Float32Array(n),pl[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Sr(s,t){let e=ml[t];e===void 0&&(e=new Int32Array(t),ml[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function Fp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;vl.set(i),s.uniformMatrix2fv(this.addr,!1,vl),Te(e,i)}}function Op(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;_l.set(i),s.uniformMatrix3fv(this.addr,!1,_l),Te(e,i)}}function Bp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;gl.set(i),s.uniformMatrix4fv(this.addr,!1,gl),Te(e,i)}}function zp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function Vp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function yr(s){return s.version===0&&(s.compareFunction=xc,s.needsUpdate=!0),s}function Yp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=yr(Wc):r=Vc,e.setTexture2D(t||r,n)}function $p(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Yc,n)}function Kp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=yr(Xc):r=$c,e.setTextureCube(t||r,n)}function Zp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||qc,n)}function Jp(s){switch(s){case 5126:return Dp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return kp;case 35668:case 35672:return Gp;case 35669:case 35673:return Hp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Qp(s,t){s.uniform1fv(this.addr,t)}function jp(s,t){const e=Vn(t,this.size,2);s.uniform2fv(this.addr,e)}function tm(s,t){const e=Vn(t,this.size,3);s.uniform3fv(this.addr,e)}function em(s,t){const e=Vn(t,this.size,4);s.uniform4fv(this.addr,e)}function im(s,t){const e=Vn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function nm(s,t){const e=Vn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sm(s,t){const e=Vn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function rm(s,t){s.uniform1iv(this.addr,t)}function am(s,t){s.uniform2iv(this.addr,t)}function om(s,t){s.uniform3iv(this.addr,t)}function lm(s,t){s.uniform4iv(this.addr,t)}function cm(s,t){s.uniform1uiv(this.addr,t)}function hm(s,t){s.uniform2uiv(this.addr,t)}function um(s,t){s.uniform3uiv(this.addr,t)}function dm(s,t){s.uniform4uiv(this.addr,t)}function fm(s,t,e){const i=this.cache,n=t.length,r=Sr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=yr(Wc):a=Vc;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function pm(s,t,e){const i=this.cache,n=t.length,r=Sr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Yc,r[a])}function mm(s,t,e){const i=this.cache,n=t.length,r=Sr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=yr(Xc):a=$c;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function gm(s,t,e){const i=this.cache,n=t.length,r=Sr(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||qc,r[a])}function _m(s){switch(s){case 5126:return Qp;case 35664:return jp;case 35665:return tm;case 35666:return em;case 35674:return im;case 35675:return nm;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class vm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Jp(e.type)}}class xm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}}class Mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function xl(s,t){s.seq.push(t),s.map[t.id]=t}function Sm(s,t,e){const i=s.name,n=i.length;for(ia.lastIndex=0;;){const r=ia.exec(i),a=ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){xl(e,c===void 0?new vm(o,s,t):new xm(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new Mm(o),xl(e,f)),e=f}}}class js{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Sm(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Ml(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const ym=37297;let bm=0;function wm(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Sl=new Ft;function Em(s){qt._getMatrix(Sl,qt.workingColorSpace,s);const t=`mat3( ${Sl.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case ar:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wm(s.getShaderSource(t),o)}else return r}function Tm(s,t){const e=Em(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Am={[sc]:"Linear",[rc]:"Reinhard",[ac]:"Cineon",[Qa]:"ACESFilmic",[lc]:"AgX",[cc]:"Neutral",[oc]:"Custom"};function Rm(s,t){const e=Am[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xs=new P;function Cm(){qt.getLuminanceCoefficients(Xs);const s=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function Lm(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dm(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function as(s){return s!==""}function bl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function wl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(s){return s.replace(Im,Um)}function Um(s,t){const e=kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ya(e)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(s){return s.replace(Nm,Fm)}function Fm(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Tl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Om={[Ys]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function Bm(s){return Om[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zm={[hs]:"ENVMAP_MODE_REFRACTION"};function km(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gm={[Ja]:"ENVMAP_BLENDING_MULTIPLY",[wh]:"ENVMAP_BLENDING_MIX",[Eh]:"ENVMAP_BLENDING_ADD"};function Hm(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Gm[s.combine]||"ENVMAP_BLENDING_NONE"}function Vm(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Bm(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=km(e),f=Hm(e),u=Pm(e),d=Lm(r),m=n.createProgram();let v,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(as).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(as).join(`
`),p.length>0&&(p+=`
`)):(v=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),p=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?kt.tonemapping_pars_fragment:"",e.toneMapping!==Fi?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Tm("linearToOutputTexel",e.outputColorSpace),Cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),a=Ya(a),a=bl(a,e),a=wl(a,e),o=Ya(o),o=bl(o,e),o=wl(o,e),a=El(a),o=El(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=g+v+a,E=g+p+o,b=Ml(n,n.VERTEX_SHADER,x),T=Ml(n,n.FRAGMENT_SHADER,E);n.attachShader(m,b),n.attachShader(m,T),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function w(C){if(s.debug.checkShaderErrors){const N=n.getProgramInfoLog(m)||"",R=n.getShaderInfoLog(b)||"",O=n.getShaderInfoLog(T)||"",I=N.trim(),k=R.trim(),$=O.trim();let H=!0,j=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,m,b,T);else{const W=yl(n,b,"vertex"),J=yl(n,T,"fragment");Qt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+J)}else I!==""?It("WebGLProgram: Program Info Log:",I):(k===""||$==="")&&(j=!1);j&&(C.diagnostics={runnable:H,programLog:I,vertexShader:{log:k,prefix:v},fragmentShader:{log:$,prefix:p}})}n.deleteShader(b),n.deleteShader(T),_=new js(n,m),y=Dm(n,m)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=n.getProgramParameter(m,ym)),D},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new qm(t),e.set(t,i)),i}}class qm{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}}function Ym(s){return s===dn||s===ir||s===nr}function $m(s,t,e,i,n,r){const a=new Ec,o=new Xm,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,y,D,C,N,R){const O=C.fog,I=N.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=t.get(_.envMap||k,$),j=u[_.type];let W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&It("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));const J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=J!==void 0?J.length:0;let wt=0;I.morphAttributes.position!==void 0&&(wt=1),I.morphAttributes.normal!==void 0&&(wt=2),I.morphAttributes.color!==void 0&&(wt=3);let Dt,Y,pt,Mt;if(j){const gt=Si[j];Dt=gt.vertexShader,Y=gt.fragmentShader}else{Dt=_.vertexShader,Y=_.fragmentShader;const gt=o.getVertexShaderStage(_),ee=o.getFragmentShaderStage(_);o.update(_,gt,ee),pt=gt.id,Mt=ee.id}const Rt=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,ue=N.isBatchedMesh===!0,Ct=!!_.map,Jt=!!_.matcap,te=!!H,Ht=te&&H.isPMREMTexture===!0,ve=!!_.aoMap,me=!!_.lightMap,Ye=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,vi=!!_.displacementMap,Ae=!!_.emissiveMap,ti=!!_.metalnessMap,ei=!!_.roughnessMap,ii=_.anisotropy>0,F=_.clearcoat>0,ni=_.diffuseRoughness>0,le=_.dispersion>0,ce=_.retroreflectivity>0,dt=_.iridescence>0,ye=_.sheen>0,Pt=_.transmission>0,Nt=ii&&!!_.anisotropyMap,A=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,z=F&&!!_.clearcoatRoughnessMap,et=ni&&!!_.diffuseRoughnessMap,Q=dt&&!!_.iridescenceMap,rt=dt&&!!_.iridescenceThicknessMap,ht=ye&&!!_.sheenColorMap,q=ye&&!!_.sheenRoughnessMap,K=!!_.specularMap,ot=!!_.specularColorMap,L=!!_.specularIntensityMap,Z=Pt&&!!_.transmissionMap,X=Pt&&!!_.thicknessMap,lt=!!_.gradientMap,st=!!_.alphaMap,at=_.alphaTest>0,Tt=!!_.alphaHash,zt=!!_.extensions;let nt=Fi;_.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(nt=s.toneMapping);const At=Ht?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Bt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:Dt,fragmentShader:Y,defines:_.defines,customVertexShaderID:pt,customFragmentShaderID:Mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:ue,batchingColor:ue&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:Jt,envMap:te,envMapMode:te&&H.mapping,envMapPMREM:Ht,envMapMaxLod:Ht?At.length-1:null,envMapSize:Ht?At[0].width:null,aoMap:ve,lightMap:me,bumpMap:Ye,normalMap:de,displacementMap:vi,emissiveMap:Ae,normalMapObjectSpace:de&&_.normalMapType===Rh,normalMapTangentSpace:de&&_.normalMapType===sr,packedNormalMap:de&&_.normalMapType===sr&&Ym(_.normalMap.format),metalnessMap:ti,roughnessMap:ei,anisotropy:ii,anisotropyMap:Nt,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:z,diffuseRoughness:ni,diffuseRoughnessMap:et,dispersion:le,retroreflection:ce,iridescence:dt,iridescenceMap:Q,iridescenceThicknessMap:rt,sheen:ye,sheenColorMap:ht,sheenRoughnessMap:q,specularMap:K,specularColorMap:ot,specularIntensityMap:L,transmission:Pt,transmissionMap:Z,thicknessMap:X,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Nn&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:Tt,combine:_.combine,mapUv:Ct&&d(_.map.channel),aoMapUv:ve&&d(_.aoMap.channel),lightMapUv:me&&d(_.lightMap.channel),bumpMapUv:Ye&&d(_.bumpMap.channel),normalMapUv:de&&d(_.normalMap.channel),displacementMapUv:vi&&d(_.displacementMap.channel),emissiveMapUv:Ae&&d(_.emissiveMap.channel),metalnessMapUv:ti&&d(_.metalnessMap.channel),roughnessMapUv:ei&&d(_.roughnessMap.channel),anisotropyMapUv:Nt&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(_.sheenRoughnessMap.channel),specularMapUv:K&&d(_.specularMap.channel),specularColorMapUv:ot&&d(_.specularColorMap.channel),specularIntensityMapUv:L&&d(_.specularIntensityMap.channel),transmissionMapUv:Z&&d(_.transmissionMap.channel),thicknessMapUv:X&&d(_.thicknessMap.channel),alphaMapUv:st&&d(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(de||ii),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ct||st),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:wt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:R.filter(gt=>gt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&qt.getTransfer(_.map.colorSpace)===ne,decodeVideoTextureEmissive:Ae&&_.emissiveMap.isVideoTexture===!0&&qt.getTransfer(_.emissiveMap.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===oe,flipSided:_.side===qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&_.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function v(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)y.push(D),y.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(y,_),g(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function p(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const y=u[_.type];let D;if(y){const C=Si[y];D=gu.clone(C.uniforms)}else D=_.uniforms;return D}function E(_,y){let D=h.get(y);return D!==void 0?++D.usedTimes:(D=new Vm(s,y,_,n),c.push(D),h.set(y,D)),D}function b(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:x,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:w}}function Km(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Zm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Al(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rl(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,v,p,g){let x=s[t];return x===void 0?(x={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:g},s[t]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=m,x.materialVariant=a(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=p,x.group=g),t++,x}function l(u,d,m,v,p,g,x){x.reversedDepth===!0&&(p=-p);const E=o(u,d,m,v,p,g);m.transmission>0?i.push(E):m.transparent===!0?n.push(E):e.push(E)}function c(u,d,m,v,p,g){const x=o(u,d,m,v,p,g);m.transmission>0?i.unshift(x):m.transparent===!0?n.unshift(x):e.unshift(x)}function h(u,d){e.length>1&&e.sort(u||Zm),i.length>1&&i.sort(d||Al),n.length>1&&n.sort(d||Al)}function f(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:f,sort:h}}function Jm(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Rl,s.set(i,[a])):n>=r.length?(a=new Rl,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Qm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new xt};break;case"SpotLight":e={position:new P,direction:new P,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function jm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let t0=0;function e0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function i0(s){const t=new Qm,e=jm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const n=new P,r=new Yt,a=new Yt;function o(c){let h=0,f=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,m=0,v=0,p=0,g=0,x=0,E=0,b=0,T=0,w=0,_=0,y=0,D=0,C=0;c.sort(e0);for(let R=0,O=c.length;R<O;R++){const I=c[R],k=I.color,$=I.intensity,H=I.distance;let j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===dn?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*$,f+=k.g*$,u+=k.b*$;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],$);C++}else if(I.isSunLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,tt=e.get(I);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[m]=tt,i.sunShadowMap[m]=j;const wt=J.getViewportCount();for(let Dt=0;Dt<wt;Dt++)i.sunShadowMatrix[v+Dt]=J.getMatrix(Dt),i.sunShadowCascade[v+Dt]=J._cascadeData[Dt];v+=wt,m++}i.sun[d]=W,d++}else if(I.isDirectionalLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,tt=e.get(I);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,i.directionalShadow[p]=tt,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=I.shadow.matrix,T++}i.directional[p]=W,p++}else if(I.isSpotLight){const W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(k).multiplyScalar($),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[x]=W;const J=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,J.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[x]=J.matrix,I.castShadow){const tt=e.get(I);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,i.spotShadow[x]=tt,i.spotShadowMap[x]=j,_++}x++}else if(I.isRectAreaLight){const W=t.get(I);W.color.copy(k).multiplyScalar($),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=W,E++}else if(I.isPointLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const J=I.shadow,tt=e.get(I);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,tt.shadowCameraNear=J.camera.near,tt.shadowCameraFar=J.camera.far,i.pointShadow[g]=tt,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=W,g++}else if(I.isHemisphereLight){const W=t.get(I);W.skyColor.copy(I.color).multiplyScalar($),W.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[b]=W,b++}}E>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const N=i.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==E||N.hemiLength!==b||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==_||N.numSpotMaps!==y||N.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=p,i.spot.length=x,i.rectArea.length=E,i.point.length=g,i.hemi.length=b,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+y-D,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,N.sunLength=d,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=E,N.hemiLength=b,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=_,N.numSpotMaps=y,N.numLightProbes=C,i.version=t0++)}function l(c,h){let f=0,u=0,d=0,m=0,v=0,p=0;const g=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){const b=c[x];if(b.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(g),f++}else if(b.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(g),u++}else if(b.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(g),m++}else if(b.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function Cl(s){const t=new i0(s),e=[],i=[],n=[];function r(f){h.camera=f,e.length=0,i.length=0,n.length=0}function a(f){f.isLightProbeGrid?n.push(f):e.push(f)}function o(f){i.push(f)}function l(){t.setup(e),n.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function n0(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Cl(s),t.set(n,[o])):r>=a.length?(o=new Cl(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,a0=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],o0=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Pl=new Yt,ts=new P,na=new P;function l0(s,t,e){let i=new fs;const n=new Lt,r=new Lt,a=new pe,o=new Mu,l=new Su,c={},h=e.maxTextureSize,f={[un]:qe,[qe]:un,[oe]:oe},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:s0,fragmentShader:r0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new xe;m.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new it(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let g=this.type;this.render=function(w,_,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===rh&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);const D=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),R=s.state;R.setBlending(Un),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const O=g!==this.type;O&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=w.length;I<k;I++){const $=w[I],H=$.shadow;if(H===void 0){It("WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const j=H.getFrameExtents();n.multiply(j),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/j.x),n.x=r.x*j.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/j.y),n.y=r.y*j.y,H.mapSize.y=r.y));const W=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ss){if($.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new wi(n.x,n.y,{format:dn,type:Ti,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),H.map.texture.name=$.name+".shadowMap",H.map.depthTexture=new kn(n.x,n.y,mi),H.map.depthTexture.name=$.name+".shadowMapDepth",H.map.depthTexture.format=ji,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ne,H.map.depthTexture.magFilter=Ne}else $.isPointLight?(H.map=new ho(n.x),H.map.depthTexture=new Ic(n.x,Ei)):(H.map=new wi(n.x,n.y),H.map.depthTexture=new kn(n.x,n.y,Ei)),H.map.depthTexture.name=$.name+".shadowMap",H.map.depthTexture.format=ji,this.type===Ys?(H.map.depthTexture.compareFunction=W?vc:_c,H.map.depthTexture.minFilter=Ke,H.map.depthTexture.magFilter=Ke):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ne,H.map.depthTexture.magFilter=Ne);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);const J=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();$.isPointLight!==!0&&H.updateMatrices($,y);const tt=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:y.layers;for(let wt=0;wt<J;wt++){const Dt=H.getCamera(wt);if($.isPointLight){const Y=H.camera,pt=H.matrix,Mt=$.distance||Y.far;Mt!==Y.far&&(Y.far=Mt,Y.updateProjectionMatrix()),ts.setFromMatrixPosition($.matrixWorld),Y.position.copy(ts),na.copy(Y.position),na.add(a0[wt]),Y.up.copy(o0[wt]),Y.lookAt(na),Y.updateMatrixWorld(),pt.makeTranslation(-ts.x,-ts.y,-ts.z),Pl.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Pl,Y.coordinateSystem,Y.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,wt),s.clear();else{wt===0&&(s.setRenderTarget(H.map),s.clear());const Y=H.getViewport(wt);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),R.viewport(a)}i=H.getFrustum(wt),b(_,y,Dt,$,tt,this.type)}H.isPointLightShadow!==!0&&this.type===ss&&x(H,y),H.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(D,C,N)};function x(w,_){const y=t.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new wi(n.x,n.y,{format:dn,type:Ti}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(_,null,y,u,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(_,null,y,d,v,null)}function E(w,_,y,D){let C=null;const N=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)C=N;else if(C=y.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const R=C.uuid,O=_.uuid;let I=c[R];I===void 0&&(I={},c[R]=I);let k=I[O];k===void 0&&(k=C.clone(),I[O]=k,_.addEventListener("dispose",T)),C=k}if(C.visible=_.visible,C.wireframe=_.wireframe,D===ss?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:f[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const R=s.properties.get(C);R.light=y}return C}function b(w,_,y,D,C,N){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===ss)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const I=t.update(w),k=w.material;if(Array.isArray(k)){const $=I.groups;for(let H=0,j=$.length;H<j;H++){const W=$[H],J=k[W.materialIndex];if(J&&J.visible){const tt=E(w,J,D,N);w.onBeforeShadow(s,w,_,y,I,tt,W),s.renderBufferDirect(y,null,I,tt,w,W),w.onAfterShadow(s,w,_,y,I,tt,W)}}}else if(k.visible){const $=E(w,k,D,N);w.onBeforeShadow(s,w,_,y,I,$,null),s.renderBufferDirect(y,null,I,$,w,null),w.onAfterShadow(s,w,_,y,I,$,null)}}const O=w.children;for(let I=0,k=O.length;I<k;I++)b(O[I],_,y,D,C,N)}function T(w){w.target.removeEventListener("dispose",T);for(const y in c){const D=c[y],C=w.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function c0(s,t){function e(){let L=!1;const Z=new pe;let X=null;const lt=new pe(0,0,0,0);return{setMask:function(st){X!==st&&!L&&(s.colorMask(st,st,st,st),X=st)},setLocked:function(st){L=st},setClear:function(st,at,Tt,zt,nt){nt===!0&&(st*=zt,at*=zt,Tt*=zt),Z.set(st,at,Tt,zt),lt.equals(Z)===!1&&(s.clearColor(st,at,Tt,zt),lt.copy(Z))},reset:function(){L=!1,X=null,lt.set(-1,0,0,0)}}}function i(){let L=!1,Z=!1,X=null,lt=null,st=null;return{setReversed:function(at){if(Z!==at){const Tt=t.get("EXT_clip_control");at?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),Z=at;const zt=st;st=null,this.setClear(zt)}},getReversed:function(){return Z},setTest:function(at){at?mt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(at){X!==at&&!L&&(s.depthMask(at),X=at)},setFunc:function(at){if(Z&&(at=Bh[at]),lt!==at){switch(at){case aa:s.depthFunc(s.NEVER);break;case oa:s.depthFunc(s.ALWAYS);break;case la:s.depthFunc(s.LESS);break;case cs:s.depthFunc(s.LEQUAL);break;case ca:s.depthFunc(s.EQUAL);break;case ha:s.depthFunc(s.GEQUAL);break;case ua:s.depthFunc(s.GREATER);break;case da:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=at}},setLocked:function(at){L=at},setClear:function(at){st!==at&&(st=at,Z&&(at=1-at),s.clearDepth(at))},reset:function(){L=!1,X=null,lt=null,st=null,Z=!1}}}function n(){let L=!1,Z=null,X=null,lt=null,st=null,at=null,Tt=null,zt=null,nt=null;return{setTest:function(At){L||(At?mt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(At){Z!==At&&!L&&(s.stencilMask(At),Z=At)},setFunc:function(At,Bt,gt){(X!==At||lt!==Bt||st!==gt)&&(s.stencilFunc(At,Bt,gt),X=At,lt=Bt,st=gt)},setOp:function(At,Bt,gt){(at!==At||Tt!==Bt||zt!==gt)&&(s.stencilOp(At,Bt,gt),at=At,Tt=Bt,zt=gt)},setLocked:function(At){L=At},setClear:function(At){nt!==At&&(s.clearStencil(At),nt=At)},reset:function(){L=!1,Z=null,X=null,lt=null,st=null,at=null,Tt=null,zt=null,nt=null}}}const r=new e,a=new i,o=new n;let l={};const c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],v=null,p=!1,g=null,x=null,E=null,b=null,T=null,w=null,_=null,y=new xt(0,0,0),D=0,C=!1,N=null,R=null,O=null,I=null,k=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=j>=2);let J=null,tt={};const wt=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),Y=new pe().fromArray(wt),pt=new pe().fromArray(Dt);function Mt(L,Z,X,lt){const st=new Uint8Array(4),at=s.createTexture();s.bindTexture(L,at),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Tt=0;Tt<X;Tt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(Z,0,s.RGBA,1,1,lt,0,s.RGBA,s.UNSIGNED_BYTE,st):s.texImage2D(Z+Tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,st);return at}const Rt={};Rt[s.TEXTURE_2D]=Mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=Mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=Mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=Mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),mt(s.DEPTH_TEST),a.setFunc(cs),Ye(!1),de(Ao),mt(s.CULL_FACE),ve(Un);function mt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Ut(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function ue(L,Z){return u[L]!==Z?(s.bindFramebuffer(L,Z),u[L]=Z,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Z),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ct(L,Z){let X=m,lt=!1;if(L){X=d.get(Z),X===void 0&&(X=[],d.set(Z,X));const st=L.textures;if(X.length!==st.length||X[0]!==s.COLOR_ATTACHMENT0){for(let at=0,Tt=st.length;at<Tt;at++)X[at]=s.COLOR_ATTACHMENT0+at;X.length=st.length,lt=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,lt=!0);lt&&s.drawBuffers(X)}function Jt(L){return v!==L?(s.useProgram(L),v=L,!0):!1}const te={[In]:s.FUNC_ADD,[oh]:s.FUNC_SUBTRACT,[lh]:s.FUNC_REVERSE_SUBTRACT};te[ch]=s.MIN,te[hh]=s.MAX;const Ht={[uh]:s.ZERO,[dh]:s.ONE,[fh]:s.SRC_COLOR,[ic]:s.SRC_ALPHA,[xh]:s.SRC_ALPHA_SATURATE,[_h]:s.DST_COLOR,[mh]:s.DST_ALPHA,[ph]:s.ONE_MINUS_SRC_COLOR,[nc]:s.ONE_MINUS_SRC_ALPHA,[vh]:s.ONE_MINUS_DST_COLOR,[gh]:s.ONE_MINUS_DST_ALPHA,[Mh]:s.CONSTANT_COLOR,[Sh]:s.ONE_MINUS_CONSTANT_COLOR,[yh]:s.CONSTANT_ALPHA,[bh]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(L,Z,X,lt,st,at,Tt,zt,nt,At){if(L===Un){p===!0&&(Ut(s.BLEND),p=!1);return}if(p===!1&&(mt(s.BLEND),p=!0),L!==ah){if(L!==g||At!==C){if((x!==In||T!==In)&&(s.blendEquation(s.FUNC_ADD),x=In,T=In),At)switch(L){case Nn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case li:s.blendFunc(s.ONE,s.ONE);break;case Ro:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Co:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qt("WebGLState: Invalid blending: ",L);break}else switch(L){case Nn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ro:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Co:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",L);break}E=null,b=null,w=null,_=null,y.set(0,0,0),D=0,g=L,C=At}return}st=st||Z,at=at||X,Tt=Tt||lt,(Z!==x||st!==T)&&(s.blendEquationSeparate(te[Z],te[st]),x=Z,T=st),(X!==E||lt!==b||at!==w||Tt!==_)&&(s.blendFuncSeparate(Ht[X],Ht[lt],Ht[at],Ht[Tt]),E=X,b=lt,w=at,_=Tt),(zt.equals(y)===!1||nt!==D)&&(s.blendColor(zt.r,zt.g,zt.b,nt),y.copy(zt),D=nt),g=L,C=!1}function me(L,Z){L.side===oe?Ut(s.CULL_FACE):mt(s.CULL_FACE);let X=L.side===qe;Z&&(X=!X),Ye(X),L.blending===Nn&&L.transparent===!1?ve(Un):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const lt=L.stencilWrite;o.setTest(lt),lt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(L){N!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),N=L)}function de(L){L!==nh?(mt(s.CULL_FACE),L!==R&&(L===Ao?s.cullFace(s.BACK):L===sh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),R=L}function vi(L){L!==O&&(H&&s.lineWidth(L),O=L)}function Ae(L,Z,X){L?(mt(s.POLYGON_OFFSET_FILL),(I!==Z||k!==X)&&(I=Z,k=X,a.getReversed()&&(Z=-Z,X=-X),s.polygonOffset(Z,X))):Ut(s.POLYGON_OFFSET_FILL)}function ti(L){L?mt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function ei(L){L===void 0&&(L=s.TEXTURE0+$-1),J!==L&&(s.activeTexture(L),J=L)}function ii(L,Z,X){X===void 0&&(J===null?X=s.TEXTURE0+$-1:X=J);let lt=tt[X];lt===void 0&&(lt={type:void 0,texture:void 0},tt[X]=lt),(lt.type!==L||lt.texture!==Z)&&(J!==X&&(s.activeTexture(X),J=X),s.bindTexture(L,Z||Rt[L]),lt.type=L,lt.texture=Z)}function F(){const L=tt[J];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ni(){try{s.compressedTexImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function le(){try{s.compressedTexImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function ce(){try{s.texSubImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function dt(){try{s.texSubImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function ye(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function Nt(){try{s.texStorage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function A(){try{s.texStorage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function M(){try{s.texImage2D(...arguments)}catch(L){Qt("WebGLState:",L)}}function z(){try{s.texImage3D(...arguments)}catch(L){Qt("WebGLState:",L)}}function et(L){return f[L]!==void 0?f[L]:s.getParameter(L)}function Q(L,Z){f[L]!==Z&&(s.pixelStorei(L,Z),f[L]=Z)}function rt(L){Y.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Y.copy(L))}function ht(L){pt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),pt.copy(L))}function q(L,Z){let X=c.get(Z);X===void 0&&(X=new WeakMap,c.set(Z,X));let lt=X.get(L);lt===void 0&&(lt=s.getUniformBlockIndex(Z,L.name),s.uniformBlockBinding(Z,lt,lt),X.set(L,lt))}function K(L,Z,X){const st=c.get(Z).get(L);l[st]!==X&&(s.bindBufferBase(s.UNIFORM_BUFFER,st,X),l[st]=X)}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,tt={},u={},l={},d=new WeakMap,m=[],v=null,p=!1,g=null,x=null,E=null,b=null,T=null,w=null,_=null,y=new xt(0,0,0),D=0,C=!1,N=null,R=null,O=null,I=null,k=null,Y.set(0,0,s.canvas.width,s.canvas.height),pt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:mt,disable:Ut,bindFramebuffer:ue,drawBuffers:Ct,useProgram:Jt,setBlending:ve,setMaterial:me,setFlipSided:Ye,setCullFace:de,setLineWidth:vi,setPolygonOffset:Ae,setScissorTest:ti,activeTexture:ei,bindTexture:ii,unbindTexture:F,compressedTexImage2D:ni,compressedTexImage3D:le,texImage2D:M,texImage3D:z,pixelStorei:Q,getParameter:et,updateUBOMapping:q,uniformBlockBinding:K,texStorage2D:Nt,texStorage3D:A,texSubImage2D:ce,texSubImage3D:dt,compressedTexSubImage2D:ye,compressedTexSubImage3D:Pt,scissor:rt,viewport:ht,reset:ot}}function h0(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,f=new Set;let u;const d=new WeakMap,m=new Set,v=new FinalizationRegistry(A=>m.delete(A));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):or("canvas")}function x(A,M,z){let et=1;const Q=Nt(A);if((Q.width>z||Q.height>z)&&(et=z/Math.max(Q.width,Q.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const rt=Math.floor(et*Q.width),ht=Math.floor(et*Q.height);u===void 0&&(u=g(rt,ht));const q=M?g(rt,ht):u;return q.width=rt,q.height=ht,q.getContext("2d").drawImage(A,0,0,rt,ht),It("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+rt+"x"+ht+")."),q}else return"data"in A&&It("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function E(A){return A.generateMipmaps}function b(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(A,M,z,et,Q,rt=!1){if(A!==null){if(s[A]!==void 0)return s[A];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht;et&&(ht=t.get("EXT_texture_norm16"),ht||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===s.RED&&(z===s.FLOAT&&(q=s.R32F),z===s.HALF_FLOAT&&(q=s.R16F),z===s.UNSIGNED_BYTE&&(q=s.R8),z===s.UNSIGNED_SHORT&&ht&&(q=ht.R16_EXT),z===s.SHORT&&ht&&(q=ht.R16_SNORM_EXT)),M===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.R8UI),z===s.UNSIGNED_SHORT&&(q=s.R16UI),z===s.UNSIGNED_INT&&(q=s.R32UI),z===s.BYTE&&(q=s.R8I),z===s.SHORT&&(q=s.R16I),z===s.INT&&(q=s.R32I)),M===s.RG&&(z===s.FLOAT&&(q=s.RG32F),z===s.HALF_FLOAT&&(q=s.RG16F),z===s.UNSIGNED_BYTE&&(q=s.RG8),z===s.UNSIGNED_SHORT&&ht&&(q=ht.RG16_EXT),z===s.SHORT&&ht&&(q=ht.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RG8UI),z===s.UNSIGNED_SHORT&&(q=s.RG16UI),z===s.UNSIGNED_INT&&(q=s.RG32UI),z===s.BYTE&&(q=s.RG8I),z===s.SHORT&&(q=s.RG16I),z===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RGB8UI),z===s.UNSIGNED_SHORT&&(q=s.RGB16UI),z===s.UNSIGNED_INT&&(q=s.RGB32UI),z===s.BYTE&&(q=s.RGB8I),z===s.SHORT&&(q=s.RGB16I),z===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),z===s.UNSIGNED_INT&&(q=s.RGBA32UI),z===s.BYTE&&(q=s.RGBA8I),z===s.SHORT&&(q=s.RGBA16I),z===s.INT&&(q=s.RGBA32I)),M===s.RGB&&(z===s.UNSIGNED_SHORT&&ht&&(q=ht.RGB16_EXT),z===s.SHORT&&ht&&(q=ht.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),M===s.RGBA){const K=rt?ar:qt.getTransfer(Q);z===s.FLOAT&&(q=s.RGBA32F),z===s.HALF_FLOAT&&(q=s.RGBA16F),z===s.UNSIGNED_BYTE&&(q=K===ne?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&ht&&(q=ht.RGBA16_EXT),z===s.SHORT&&ht&&(q=ht.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(A,M){let z;return A?M===null||M===Ei||M===zn?z=s.DEPTH24_STENCIL8:M===mi?z=s.DEPTH32F_STENCIL8:M===us&&(z=s.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===zn?z=s.DEPTH_COMPONENT24:M===mi?z=s.DEPTH_COMPONENT32F:M===us&&(z=s.DEPTH_COMPONENT16),z}function y(A,M){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ne&&A.minFilter!==Ke?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function D(A){const M=new WeakRef(A);i.get(A).__ref=M,m.add(M),v.register(A,M,M)}function C(A){const M=i.get(A).__ref;M!==void 0&&(m.delete(M),v.unregister(M))}function N(A){O(A.target)}function R(A){I(A.target)}function O(A){A.removeEventListener("dispose",N),C(A),$(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function I(A){A.removeEventListener("dispose",R),C(A),j(A)}function k(){for(const A of m){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):O(M))}m.clear(),f.clear()}function $(A){const M=i.get(A);if(M.__webglInit===void 0)return;const z=A.source,et=d.get(z);if(et){const Q=et[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&H(A),Object.keys(et).length===0&&d.delete(z)}i.remove(A)}function H(A){const M=i.get(A);s.deleteTexture(M.__webglTexture);const z=A.source,et=d.get(z);delete et[M.__cacheKey],a.memory.textures--}function j(A){const M=i.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const z=A.depthTexture;if(z&&z.renderTarget===A&&O(z),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let rt=0;rt<M.__webglFramebuffer[Q].length;rt++)s.deleteFramebuffer(M.__webglFramebuffer[Q][rt]);else s.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)s.deleteFramebuffer(M.__webglFramebuffer[Q]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const et=A.textures;for(let Q=0,rt=et.length;Q<rt;Q++){const ht=i.get(et[Q]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(et[Q])}i.remove(A)}let W=0;function J(){W=0}function tt(){return W}function wt(A){W=A}function Dt(){const A=W;return A>=n.maxTextures&&It("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,A}function Y(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function pt(A,M){const z=i.get(A);if(A.isVideoTexture&&ye(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const et=A.image;if(et===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{me(z,A,M);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+M)}function Mt(A,M){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){me(z,A,M);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+M)}function Rt(A,M){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){me(z,A,M);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+M)}function mt(A,M){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Ye(z,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+M)}const Ut={[er]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},ue={[Ne]:s.NEAREST,[Th]:s.NEAREST_MIPMAP_NEAREST,[vs]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[Ki]:s.LINEAR_MIPMAP_LINEAR},Ct={[Ph]:s.NEVER,[xc]:s.ALWAYS,[Lh]:s.LESS,[_c]:s.LEQUAL,[Dh]:s.EQUAL,[vc]:s.GEQUAL,[Ih]:s.GREATER,[Uh]:s.NOTEQUAL};function Jt(A,M){if(M.type===mi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ke||M.magFilter===Ar||M.magFilter===vs||M.magFilter===Ki||M.minFilter===Ke||M.minFilter===Ar||M.minFilter===vs||M.minFilter===Ki)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ut[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ut[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ut[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ue[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Ct[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ne||M.minFilter!==vs&&M.minFilter!==Ki||M.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function te(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N),D(M));const et=M.source;let Q=d.get(et);Q===void 0&&(Q={},d.set(et,Q));const rt=Y(M);if(rt!==A.__cacheKey){Q[rt]===void 0&&(Q[rt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[rt].usedTimes++;const ht=Q[A.__cacheKey];ht!==void 0&&(Q[A.__cacheKey].usedTimes--,ht.usedTimes===0&&H(M)),A.__cacheKey=rt,A.__webglTexture=Q[rt].texture}return z}function Ht(A,M,z){return Math.floor(Math.floor(A/z)/M)}function ve(A,M,z,et){const rt=A.updateRanges;if(rt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,z,et,M.data);else{rt.sort((L,Z)=>L.start-Z.start);let ht=0;for(let L=1;L<rt.length;L++){const Z=rt[ht],X=rt[L],lt=Z.start+Z.count,st=Ht(X.start,M.width,4),at=Ht(Z.start,M.width,4);X.start<=lt+1&&st===at&&Ht(X.start+X.count-1,M.width,4)===st?Z.count=Math.max(Z.count,X.start+X.count-Z.start):(++ht,rt[ht]=X)}rt.length=ht+1;const q=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),ot=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let L=0,Z=rt.length;L<Z;L++){const X=rt[L],lt=Math.floor(X.start/4),st=Math.ceil(X.count/4),at=lt%M.width,Tt=Math.floor(lt/M.width),zt=st,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,at),e.pixelStorei(s.UNPACK_SKIP_ROWS,Tt),e.texSubImage2D(s.TEXTURE_2D,0,at,Tt,zt,nt,z,et,M.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,ot)}}function me(A,M,z){let et=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=s.TEXTURE_3D);const Q=te(A,M),rt=M.source;e.bindTexture(et,A.__webglTexture,s.TEXTURE0+z);const ht=i.get(rt);if(rt.version!==ht.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const nt=qt.getPrimaries(qt.workingColorSpace),At=M.colorSpace===$i?null:qt.getPrimaries(M.colorSpace),Bt=M.colorSpace===$i||nt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let K=x(M.image,!1,n.maxTextureSize);K=Pt(M,K);const ot=r.convert(M.format,M.colorSpace),L=r.convert(M.type);let Z=w(M.internalFormat,ot,L,M.normalized,M.colorSpace,M.isVideoTexture);Jt(et,M);let X;const lt=M.mipmaps,st=M.isVideoTexture!==!0,at=ht.__version===void 0||Q===!0,Tt=rt.dataReady,zt=y(M,K);if(M.isDepthTexture)Z=_(M.format===Zi,M.type),at&&(st?e.texStorage2D(s.TEXTURE_2D,1,Z,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,Z,K.width,K.height,0,ot,L,null));else if(M.isDataTexture)if(lt.length>0){st&&at&&e.texStorage2D(s.TEXTURE_2D,zt,Z,lt[0].width,lt[0].height);for(let nt=0,At=lt.length;nt<At;nt++)X=lt[nt],st?Tt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,X.width,X.height,ot,L,X.data):e.texImage2D(s.TEXTURE_2D,nt,Z,X.width,X.height,0,ot,L,X.data);M.generateMipmaps=!1}else st?(at&&e.texStorage2D(s.TEXTURE_2D,zt,Z,K.width,K.height),Tt&&ve(M,K,ot,L)):e.texImage2D(s.TEXTURE_2D,0,Z,K.width,K.height,0,ot,L,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){st&&at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Z,lt[0].width,lt[0].height,K.depth);for(let nt=0,At=lt.length;nt<At;nt++)if(X=lt[nt],M.format!==yi)if(ot!==null)if(st){if(Tt)if(M.layerUpdates.size>0){const Bt=cl(X.width,X.height,M.format,M.type);for(const gt of M.layerUpdates){const ee=X.data.subarray(gt*Bt/X.data.BYTES_PER_ELEMENT,(gt+1)*Bt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,gt,X.width,X.height,1,ot,ee)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,X.width,X.height,K.depth,ot,X.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,Z,X.width,X.height,K.depth,0,X.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Tt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,X.width,X.height,K.depth,ot,L,X.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,Z,X.width,X.height,K.depth,0,ot,L,X.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{st&&at&&e.texStorage2D(s.TEXTURE_2D,zt,Z,lt[0].width,lt[0].height);for(let nt=0,At=lt.length;nt<At;nt++)X=lt[nt],M.format!==yi?ot!==null?st?Tt&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,X.width,X.height,ot,X.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,Z,X.width,X.height,0,X.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Tt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,X.width,X.height,ot,L,X.data):e.texImage2D(s.TEXTURE_2D,nt,Z,X.width,X.height,0,ot,L,X.data)}else if(M.isDataArrayTexture)if(st){if(at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Z,K.width,K.height,K.depth),Tt)if(M.layerUpdates.size>0){const nt=cl(K.width,K.height,M.format,M.type);for(const At of M.layerUpdates){const Bt=K.data.subarray(At*nt/K.data.BYTES_PER_ELEMENT,(At+1)*nt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,At,K.width,K.height,1,ot,L,Bt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ot,L,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Z,K.width,K.height,K.depth,0,ot,L,K.data);else if(M.isData3DTexture)st?(at&&e.texStorage3D(s.TEXTURE_3D,zt,Z,K.width,K.height,K.depth),Tt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ot,L,K.data)):e.texImage3D(s.TEXTURE_3D,0,Z,K.width,K.height,K.depth,0,ot,L,K.data);else if(M.isFramebufferTexture){if(at)if(st)e.texStorage2D(s.TEXTURE_2D,zt,Z,K.width,K.height);else{let nt=K.width,At=K.height;for(let Bt=0;Bt<zt;Bt++)e.texImage2D(s.TEXTURE_2D,Bt,Z,nt,At,0,ot,L,null),nt>>=1,At>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),K.parentNode!==nt){nt.appendChild(K),f.add(M),nt.onpaint=At=>{const Bt=At.changedElements;for(const gt of f)Bt.includes(gt.image)&&(gt.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{const Bt=s.RGBA,gt=s.RGBA,ee=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Bt,gt,ee,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&at){const nt=Nt(lt[0]);e.texStorage2D(s.TEXTURE_2D,zt,Z,nt.width,nt.height)}for(let nt=0,At=lt.length;nt<At;nt++)X=lt[nt],st?Tt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ot,L,X):e.texImage2D(s.TEXTURE_2D,nt,Z,ot,L,X);M.generateMipmaps=!1}else if(st){if(at){const nt=Nt(K);e.texStorage2D(s.TEXTURE_2D,zt,Z,nt.width,nt.height)}Tt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,L,K)}else e.texImage2D(s.TEXTURE_2D,0,Z,ot,L,K);E(M)&&M.mipmapsAutoUpdate===!0&&b(et),ht.__version=rt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ye(A,M,z){if(M.image.length!==6)return;const et=te(A,M),Q=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);const rt=i.get(Q);if(Q.version!==rt.__version||et===!0){e.activeTexture(s.TEXTURE0+z);const ht=qt.getPrimaries(qt.workingColorSpace),q=M.colorSpace===$i?null:qt.getPrimaries(M.colorSpace),K=M.colorSpace===$i||ht===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ot=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let gt=0;gt<6;gt++)!ot&&!L?Z[gt]=x(M.image[gt],!0,n.maxCubemapSize):Z[gt]=L?M.image[gt].image:M.image[gt],Z[gt]=Pt(M,Z[gt]);const X=Z[0],lt=r.convert(M.format,M.colorSpace),st=r.convert(M.type);let at=w(M.internalFormat,lt,st,M.normalized,M.colorSpace);const Tt=M.isVideoTexture!==!0,zt=rt.__version===void 0||et===!0,nt=Q.dataReady;let At=y(M,X);Jt(s.TEXTURE_CUBE_MAP,M);let Bt;if(M.isDepthTexture){if(at=_(M.format===Zi,M.type),zt)if(Tt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,at,X.width,X.height);else for(let gt=0;gt<6;gt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,at,X.width,X.height,0,lt,st,null)}else if(ot){Tt&&zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,at,X.width,X.height);for(let gt=0;gt<6;gt++){Bt=Z[gt].mipmaps;for(let ee=0;ee<Bt.length;ee++){const Re=Bt[ee];M.format!==yi?lt!==null?Tt?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee,0,0,Re.width,Re.height,lt,Re.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee,at,Re.width,Re.height,0,Re.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee,0,0,Re.width,Re.height,lt,st,Re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee,at,Re.width,Re.height,0,lt,st,Re.data)}}}else{if(Bt=M.mipmaps,Tt&&zt){Bt.length>0&&At++;const gt=Nt(Z[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,at,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(L){Tt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Z[gt].width,Z[gt].height,lt,st,Z[gt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,at,Z[gt].width,Z[gt].height,0,lt,st,Z[gt].data);for(let ee=0;ee<Bt.length;ee++){const zi=Bt[ee].image[gt].image;Tt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee+1,0,0,zi.width,zi.height,lt,st,zi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee+1,at,zi.width,zi.height,0,lt,st,zi.data)}}else{Tt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,lt,st,Z[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,at,lt,st,Z[gt]);for(let ee=0;ee<Bt.length;ee++){const Re=Bt[ee];Tt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee+1,0,0,lt,st,Re.image[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee+1,at,lt,st,Re.image[gt])}}}E(M)&&M.mipmapsAutoUpdate===!0&&b(s.TEXTURE_CUBE_MAP),rt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function de(A,M,z,et,Q,rt){const ht=r.convert(z.format,z.colorSpace),q=r.convert(z.type),K=w(z.internalFormat,ht,q,z.normalized,z.colorSpace),ot=i.get(M),L=i.get(z);if(L.__renderTarget=M,!ot.__hasExternalTextures){const Z=Math.max(1,M.width>>rt),X=Math.max(1,M.height>>rt);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,rt,K,Z,X,M.depth,0,ht,q,null):e.texImage2D(Q,rt,K,Z,X,0,ht,q,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),dt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,Q,L.__webglTexture,0,ce(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,Q,L.__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function vi(A,M,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const et=M.depthTexture,Q=et&&et.isDepthTexture?et.type:null,rt=_(M.stencilBuffer,Q),ht=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;dt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce(M),rt,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce(M),rt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,rt,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,A)}else{const et=M.textures;for(let Q=0;Q<et.length;Q++){const rt=et[Q],ht=r.convert(rt.format,rt.colorSpace),q=r.convert(rt.type),K=w(rt.internalFormat,ht,q,rt.normalized,rt.colorSpace);dt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce(M),K,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce(M),K,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,K,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(A,M,z){const et=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);Q.__renderTarget=M;const rt=et?M.depthTexture.image[0]:M.depthTexture.image;(!Q.__webglTexture||rt.width!==M.width||rt.height!==M.height)&&(rt.width=M.width,rt.height=M.height,M.depthTexture.needsUpdate=!0),et?mt(M.depthTexture,0):pt(M.depthTexture,0);const ht=Q.__webglTexture,q=ce(M),K=et?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,ot=M.depthTexture.format===Zi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===ji)dt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,K,ht,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,ot,K,ht,0);else if(M.depthTexture.format===Zi)dt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,K,ht,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,ot,K,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ti(A){const M=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const et=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",Q)};et.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=et}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let et=0;et<6;et++)Ae(M.__webglFramebuffer[et],A,et);else A.texture.mipmaps.length>0?Ae(M.__webglFramebuffer[0],A,0):Ae(M.__webglFramebuffer,A,0);else if(z){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=s.createRenderbuffer(),vi(M.__webglDepthbuffer[et],A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,rt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),vi(M.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,rt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ei(A,M,z){const et=i.get(A);M!==void 0&&de(et.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&ti(A)}function ii(A){const M=A.texture,z=i.get(A),et=i.get(M);A.addEventListener("dispose",R),D(A);const Q=A.textures,rt=A.isWebGLCubeRenderTarget===!0,ht=Q.length>1;if(ht||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=M.version,a.memory.textures++),rt){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let K=0;K<M.mipmaps.length;K++)z.__webglFramebuffer[q][K]=s.createFramebuffer()}else z.__webglFramebuffer[q]=s.createFramebuffer()}else{if(M.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)z.__webglFramebuffer[q]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ht)for(let q=0,K=Q.length;q<K;q++){const ot=i.get(Q[q]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&dt(A)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<Q.length;q++){const K=Q[q];z.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[q]);const ot=r.convert(K.format,K.colorSpace),L=r.convert(K.type),Z=w(K.internalFormat,ot,L,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),X=ce(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,X,Z,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,z.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),vi(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),Jt(s.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)de(z.__webglFramebuffer[q][K],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else de(z.__webglFramebuffer[q],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);E(M)?b(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(ht){for(let q=0,K=Q.length;q<K;q++){const ot=Q[q],L=i.get(ot);let Z=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,L.__webglTexture),Jt(Z,ot),de(z.__webglFramebuffer,A,ot,s.COLOR_ATTACHMENT0+q,Z,0),E(ot)&&b(Z)}e.unbindTexture()}else{let q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,et.__webglTexture),Jt(q,M),M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)de(z.__webglFramebuffer[K],A,M,s.COLOR_ATTACHMENT0,q,K);else de(z.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,q,0);E(M)?b(q):M.mipmaps.length>0&&s.texParameteri(q,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ti(A)}function F(A){const M=A.textures;for(let z=0,et=M.length;z<et;z++){const Q=M[z];if(E(Q)&&Q.mipmapsAutoUpdate===!0){const rt=T(A),ht=i.get(Q).__webglTexture;e.bindTexture(rt,ht),b(rt),e.unbindTexture()}}}const ni=[];function le(A){if(A.samples>0){if(dt(A)===!1){const M=A.textures,z=A.width,et=A.height;let Q=s.COLOR_BUFFER_BIT;const rt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=i.get(A),q=M.length>1;if(q)for(let ot=0;ot<M.length;ot++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<M.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);const L=i.get(M[ot]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,z,et,0,0,z,et,Q,s.NEAREST),l===!0&&(ni.length=0,ni.push(s.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ni.push(rt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ni))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let ot=0;ot<M.length;ot++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);const L=i.get(M[ot]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ce(A){return Math.min(n.maxSamples,A.samples)}function dt(A){const M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ye(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Pt(A,M){const z=A.colorSpace,et=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==rr&&z!==$i&&(qt.getTransfer(z)===ne?(et!==yi||Q!==je)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",z)),M}function Nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Dt,this.resetTextureUnits=J,this.getTextureUnits=tt,this.setTextureUnits=wt,this.setTexture2D=pt,this.setTexture2DArray=Mt,this.setTexture3D=Rt,this.setTextureCube=mt,this.rebindTextures=ei,this.setupRenderTarget=ii,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=ti,this.setupFrameBufferTexture=de,this.useMultisampledRTT=dt,this.dispose=k}function u0(s,t){function e(i,n=$i){let r;const a=qt.getTransfer(n);if(i===je)return s.UNSIGNED_BYTE;if(i===to)return s.UNSIGNED_SHORT_4_4_4_4;if(i===eo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===pc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===uc)return s.BYTE;if(i===dc)return s.SHORT;if(i===us)return s.UNSIGNED_SHORT;if(i===ja)return s.INT;if(i===Ei)return s.UNSIGNED_INT;if(i===mi)return s.FLOAT;if(i===Ti)return s.HALF_FLOAT;if(i===mc)return s.ALPHA;if(i===gc)return s.RGB;if(i===yi)return s.RGBA;if(i===ji)return s.DEPTH_COMPONENT;if(i===Zi)return s.DEPTH_STENCIL;if(i===io)return s.RED;if(i===no)return s.RED_INTEGER;if(i===dn)return s.RG;if(i===so)return s.RG_INTEGER;if(i===ro)return s.RGBA_INTEGER;if(i===$s||i===Ks||i===Zs||i===Js)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pa||i===ma||i===ga||i===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===va||i===xa||i===Ma||i===Sa||i===ya||i===ir||i===ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===va||i===xa)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ma)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sa)return r.COMPRESSED_R11_EAC;if(i===ya)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ir)return r.COMPRESSED_RG11_EAC;if(i===ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wa||i===Ea||i===Ta||i===Aa||i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Ua||i===Na||i===Fa||i===Oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ea)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ta)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Aa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ra)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ca)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===La)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Da)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ia)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ua)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Na)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ba||i===za||i===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ba)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ga||i===Ha||i===nr||i===Va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Uc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new _i({vertexShader:d0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Ue(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m0 extends fn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",p=new p0,g={},x=e.getContextAttributes();let E=null,b=null;const T=[],w=[],_=new Lt;let y=null,D=null;const C=new pi;C.viewport=new pe;const N=new pi;N.viewport=new pe;const R=[C,N],O=new Eu;let I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pt=T[Y];return pt===void 0&&(pt=new Fr,T[Y]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Y){let pt=T[Y];return pt===void 0&&(pt=new Fr,T[Y]=pt),pt.getGripSpace()},this.getHand=function(Y){let pt=T[Y];return pt===void 0&&(pt=new Fr,T[Y]=pt),pt.getHandSpace()};function $(Y){const pt=w.indexOf(Y.inputSource);if(pt===-1)return;const Mt=T[pt];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){n.removeEventListener("select",$),n.removeEventListener("selectstart",$),n.removeEventListener("selectend",$),n.removeEventListener("squeeze",$),n.removeEventListener("squeezestart",$),n.removeEventListener("squeezeend",$),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",j);for(let Y=0;Y<T.length;Y++){const pt=w[Y];pt!==null&&(w[Y]=null,T[Y].disconnect(pt))}I=null,k=null,p.reset();for(const Y in g)delete g[Y];if(t.setRenderTarget(E),d=null,u=null,f=null,n=null,b=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(_.width,_.height,!1),D!==null){const Y=D.camera;Y.fov=D.fov,Y.zoom=D.zoom,Y.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(E=t.getRenderTarget(),n.addEventListener("select",$),n.addEventListener("selectstart",$),n.addEventListener("selectend",$),n.addEventListener("squeeze",$),n.addEventListener("squeezestart",$),n.addEventListener("squeezeend",$),n.addEventListener("end",H),n.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,mt=null;x.depth&&(mt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=x.stencil?Zi:ji,Rt=x.stencil?zn:Ei);const Ut={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ut),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new wi(u.textureWidth,u.textureHeight,{format:yi,type:je,depthTexture:new kn(u.textureWidth,u.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,Mt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new wi(d.framebufferWidth,d.framebufferHeight,{format:yi,type:je,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Dt.setContext(n),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(Y){for(let pt=0;pt<Y.removed.length;pt++){const Mt=Y.removed[pt],Rt=w.indexOf(Mt);Rt>=0&&(w[Rt]=null,T[Rt].disconnect(Mt))}for(let pt=0;pt<Y.added.length;pt++){const Mt=Y.added[pt];let Rt=w.indexOf(Mt);if(Rt===-1){for(let Ut=0;Ut<T.length;Ut++)if(Ut>=w.length){w.push(Mt),Rt=Ut;break}else if(w[Ut]===null){w[Ut]=Mt,Rt=Ut;break}if(Rt===-1)break}const mt=T[Rt];mt&&mt.connect(Mt)}}function W(Y,pt){pt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let pt=Y.near,Mt=Y.far;p.texture!==null&&(p.depthNear>0&&(pt=p.depthNear),p.depthFar>0&&(Mt=p.depthFar)),O.near=N.near=C.near=pt,O.far=N.far=C.far=Mt,(I!==O.near||k!==O.far)&&(n.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,k=O.far),O.layers.mask=Y.layers.mask|6,C.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;const Rt=Y.parent,mt=O.cameras;W(O,Rt);for(let Ut=0;Ut<mt.length;Ut++)W(mt[Ut],Rt);O.projectionMatrix.copy(C.projectionMatrix),O.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&Y.isPerspectiveCamera&&(D={camera:Y,fov:Y.fov,zoom:Y.zoom}),J(Y,O,Rt)};function J(Y,pt,Mt){Mt===null?Y.matrix.copy(pt.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Wa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Y){return g[Y]};let tt=null;function wt(Y,pt){if(h=pt.getViewerPose(c||a),m=pt,h!==null){const Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Rt=!1;Mt.length!==O.cameras.length&&(O.cameras.length=0,Rt=!0);for(let Ct=0;Ct<Mt.length;Ct++){const Jt=Mt[Ct];let te=null;if(d!==null)te=d.getViewport(Jt);else{const ve=f.getViewSubImage(u,Jt);te=ve.viewport,Ct===0&&(t.setRenderTargetTextures(b,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(b))}let Ht=R[Ct];Ht===void 0&&(Ht=new pi,Ht.layers.enable(Ct),Ht.viewport=new pe,R[Ct]=Ht),Ht.matrix.fromArray(Jt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Jt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(te.x,te.y,te.width,te.height),Ct===0&&(O.matrix.copy(Ht.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Rt===!0&&O.cameras.push(Ht)}const mt=n.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Ct=f.getDepthInformation(Mt[0]);Ct&&Ct.isValid&&Ct.texture&&p.init(Ct,n.renderState)}if(mt&&mt.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let Ct=0;Ct<Mt.length;Ct++){const Jt=Mt[Ct].camera;if(Jt){let te=g[Jt];te||(te=new Uc,g[Jt]=te);const Ht=f.getCameraImage(Jt);te.sourceTexture=Ht}}}}for(let Mt=0;Mt<T.length;Mt++){const Rt=w[Mt],mt=T[Mt];Rt!==null&&mt!==void 0&&mt.update(Rt,pt,c||a)}tt&&tt(Y,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),m=null}const Dt=new zc;Dt.setAnimationLoop(wt),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}}const g0=new Yt,Kc=new Ft;Kc.set(-1,0,0,0,1,0,0,0,1);function _0(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Nc(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function n(p,g,x,E,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,x,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===qe&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===qe&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=t.get(g),E=x.envMap,b=x.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Kc),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,x){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qe&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const x=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function v0(s,t,e,i){let n={},r={};function a(x,E){const b=E.program;i.uniformBlockBinding(x,b,n[x.id])}function o(x,E){let b=n[x.id];b===void 0&&(m(x),b=l(x),n[x.id]=b,x.addEventListener("dispose",p));const T=E.program;i.updateUBOMapping(x,T);const w=t.render.frame;r[x.id]!==w&&(c(x),r[x.id]=w)}function l(x){const E=s.createBuffer(),b=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),E}function c(x){const E=n[x.id],b=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,_=b.length;w<_;w++){const y=b[w];if(Array.isArray(y))for(let D=0,C=y.length;D<C;D++)h(y[D],w,D,T);else h(y,w,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(x,E,b,T){if(u(x,E,b,T)===!0){const w=x.__offset,_=x.value;if(Array.isArray(_)){let y=0;for(let D=0;D<_.length;D++){const C=_[D],N=v(C,!0);f(C,x.__data,y),y+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,x.__data)}}function f(x,E,b){typeof x=="number"||typeof x=="boolean"?E[b]=x:x.isMatrix3?(E[b]=x.elements[0],E[b+1]=x.elements[1],E[b+2]=x.elements[2],E[b+3]=0,E[b+4]=x.elements[3],E[b+5]=x.elements[4],E[b+6]=x.elements[5],E[b+7]=0,E[b+8]=x.elements[6],E[b+9]=x.elements[7],E[b+10]=x.elements[8],E[b+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-b),b):x.toArray(E,b)}function u(x,E,b,T){const w=x.value,_=E+"_"+b;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);const y=T[_];let D=!1;for(let C=0;C<w.length;C++)d(w[C],y,C)===!0&&(D=!0);return D}return d(w,T,_)}function d(x,E,b){if(E[b]===void 0)return typeof x=="number"||typeof x=="boolean"?E[b]=x:ArrayBuffer.isView(x)?E[b]=x.slice():E[b]=x.clone(),!0;{const T=E[b];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return E[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function m(x){const E=x.uniforms;let b=0;const T=16;for(let _=0,y=E.length;_<y;_++){const D=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,N=D.length;C<N;C++){const R=D[C],O=Array.isArray(R.value)?R.value:[R.value],I=Array.isArray(E[_])||Array.isArray(R.value);let k=b;for(let H=0,j=O.length;H<j;H++){const W=O[H],J=v(W,I),tt=b%T,wt=tt%J.boundary,Dt=tt+wt;b+=wt,Dt!==0&&T-Dt<J.storage&&(b+=T-Dt),H===0&&(k=b),b+=J.storage}const $=R.type==="int"?Int32Array:R.type==="uint"?Uint32Array:Float32Array;R.__data=new $((b-k)/Float32Array.BYTES_PER_ELEMENT),R.__offset=k}}const w=b%T;return w>0&&(b+=T-w),x.__size=b,x.__cache={},this}function v(x,E){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=16,b.storage=48):x.isMatrix4?(b.boundary=16,b.storage=64):x.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):It("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(x){const E=x.target;E.removeEventListener("dispose",p),s.deleteBuffer(n[E.id]),delete n[E.id],delete r[E.id]}function g(){for(const x in n)s.deleteBuffer(n[x]);n={},r={}}return{bind:a,update:o,dispose:g}}const x0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function M0(){return Mi===null&&(Mi=new Lc(x0,16,16,dn,Ti),Mi.name="DFG_LUT",Mi.minFilter=Ke,Mi.magFilter=Ke,Mi.wrapS=Ni,Mi.wrapT=Ni,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class S0{constructor(t={}){const{canvas:e=Fh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=je}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=d,p=new Set([ro,so,no]),g=new Set([je,Ei,us,zn,to,eo]),x=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let T=null,w=null;const _=[],y=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,R=null,O=null,I=null,k=null;this._outputColorSpace=Ie;let $=0,H=0,j=null,W=-1,J=null;const tt=new pe,wt=new pe;let Dt=null;const Y=new xt(0);let pt=0,Mt=e.width,Rt=e.height,mt=1,Ut=null,ue=null;const Ct=new pe(0,0,Mt,Rt),Jt=new pe(0,0,Mt,Rt);let te=!1;const Ht=new fs,ve=new lo;let me=!1,Ye=!1;const de=new Yt,vi=new P,Ae=new pe,ti={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ei=!1;function ii(){return j===null?mt:1}let F=i;function ni(S,U){return e.getContext(S,U)}let le,ce,dt,ye,Pt,Nt,A,M,z,et,Q,rt,ht,q,K,ot,L,Z,X,lt,st,at,Tt;try{const S={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),F===null){const U="webgl2";if(F=ni(U,S),F===null)throw ni(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(S){throw e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Qt("WebGLRenderer: "+S.message),S}function zt(){le=new wp(F),le.init(),st=new u0(F,le),ce=new fp(F,le,t,st),dt=new c0(F,le),ce.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),O=F.createFramebuffer(),I=F.createFramebuffer(),k=F.createFramebuffer(),ye=new Ap(F),Pt=new Km,Nt=new h0(F,le,dt,Pt,ce,st,ye),A=new bp(C),M=new Ru(F),at=new up(F,M),z=new Ep(F,M,ye,at),et=new Cp(F,z,M,at,ye),Z=new Rp(F,ce,Nt),K=new pp(Pt),Q=new $m(C,A,le,ce,at,K),rt=new _0(C,Pt),ht=new Jm,q=new n0(le),L=new hp(C,A,dt,et,m,l),ot=new l0(C,et,ce),Tt=new v0(F,ye,ce,dt),X=new dp(F,le,ye),lt=new Tp(F,le,ye),ye.programs=Q.programs,C.capabilities=ce,C.extensions=le,C.properties=Pt,C.renderLists=ht,C.shadowMap=ot,C.state=dt,C.info=ye}v!==je&&(D=new Lp(v,e.width,e.height,o,n,r));const nt=new m0(C,F);this.xr=nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(S){S!==void 0&&(mt=S,this.setSize(Mt,Rt,!1))},this.getSize=function(S){return S.set(Mt,Rt)},this.setSize=function(S,U,V=!0){if(nt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=S,Rt=U,e.width=Math.floor(S*mt),e.height=Math.floor(U*mt),V===!0&&(e.style.width=S+"px",e.style.height=U+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Mt*mt,Rt*mt).floor()},this.setDrawingBufferSize=function(S,U,V){Mt=S,Rt=U,mt=V,e.width=Math.floor(S*V),e.height=Math.floor(U*V),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===je){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(tt)},this.getViewport=function(S){return S.copy(Ct)},this.setViewport=function(S,U,V,B){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,U,V,B),dt.viewport(tt.copy(Ct).multiplyScalar(ii()).round())},this.getScissor=function(S){return S.copy(Jt)},this.setScissor=function(S,U,V,B){S.isVector4?Jt.set(S.x,S.y,S.z,S.w):Jt.set(S,U,V,B),dt.scissor(wt.copy(Jt).multiplyScalar(ii()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(S){dt.setScissorTest(te=S)},this.setOpaqueSort=function(S){Ut=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,V=!0){let B=0;if(S){let G=!1;if(j!==null){const ut=j.texture.format;G=p.has(ut)}if(G){const ut=j.texture.type,St=g.has(ut),ct=L.getClearColor(),vt=L.getClearAlpha(),Et=ct.r,Ot=ct.g,Wt=ct.b;St?(x[0]=Et,x[1]=Ot,x[2]=Wt,x[3]=vt,F.clearBufferuiv(F.COLOR,0,x)):(E[0]=Et,E[1]=Ot,E[2]=Wt,E[3]=vt,F.clearBufferiv(F.COLOR,0,E))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),R=S},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),L.dispose(),ht.dispose(),q.dispose(),Nt.dispose(),Pt.dispose(),A.dispose(),et.dispose(),z.dispose(),at.dispose(),Tt.dispose(),Q.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",_o),nt.removeEventListener("sessionend",vo),en.stop()};function At(S){S.preventDefault(),lr("WebGLRenderer: Context Lost."),N=!0}function Bt(){lr("WebGLRenderer: Context Restored."),N=!1;const S=ye.autoReset,U=ot.enabled,V=ot.autoUpdate,B=ot.needsUpdate,G=ot.type;zt(),ye.autoReset=S,ot.enabled=U,ot.autoUpdate=V,ot.needsUpdate=B,ot.type=G}function gt(S){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ee(S){const U=S.target;U.removeEventListener("dispose",ee),Re(U)}function Re(S){zi(S),Pt.remove(S)}function zi(S){const U=Pt.get(S).programs;U!==void 0&&(U.forEach(function(V){Q.releaseProgram(V)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,V,B,G,ut){U===null&&(U=ti);const St=G.isMesh&&G.matrixWorld.determinantAffine()<0,ct=th(S,U,V,B,G);dt.setMaterial(B,St);let vt=V.index,Et=1;if(B.wireframe===!0){if(vt=z.getWireframeAttribute(V),vt===void 0)return;Et=2}const Ot=V.drawRange,Wt=V.attributes.position;let yt=Ot.start*Et,Xt=(Ot.start+Ot.count)*Et;ut!==null&&(yt=Math.max(yt,ut.start*Et),Xt=Math.min(Xt,(ut.start+ut.count)*Et)),vt!==null?(yt=Math.max(yt,0),Xt=Math.min(Xt,vt.count)):Wt!=null&&(yt=Math.max(yt,0),Xt=Math.min(Xt,Wt.count));const Me=Xt-yt;if(Me<0||Me===1/0)return;at.setup(G,B,ct,V,vt);let re,se=X;if(vt!==null&&(re=M.get(vt),se=lt,se.setIndex(re)),G.isMesh)B.wireframe===!0?(dt.setLineWidth(B.wireframeLinewidth*ii()),se.setMode(F.LINES)):se.setMode(F.TRIANGLES);else if(G.isLine){let Fe=B.linewidth;Fe===void 0&&(Fe=1),dt.setLineWidth(Fe*ii()),G.isLineSegments?se.setMode(F.LINES):G.isLineLoop?se.setMode(F.LINE_LOOP):se.setMode(F.LINE_STRIP)}else G.isPoints?se.setMode(F.POINTS):G.isSprite&&se.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(le.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Fe=G._multiDrawStarts,bt=G._multiDrawCounts,He=G._multiDrawCount,jt=vt?M.get(vt).bytesPerElement:1,nn=Pt.get(B).currentProgram.getUniforms();for(let Oe=0;Oe<He;Oe++)nn.setValue(F,"_gl_DrawID",Oe),se.render(Fe[Oe]/jt,bt[Oe])}else if(G.isInstancedMesh)se.renderInstances(yt,Me,G.count);else if(V.isInstancedBufferGeometry){const Fe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,bt=Math.min(V.instanceCount,Fe);se.renderInstances(yt,Me,bt)}else se.render(yt,Me)};function go(S,U,V,B){R!==null&&S.isNodeMaterial&&R.setObject(B,S),me===!0&&K.setState(S,V,!1),S.transparent===!0&&S.side===oe&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,Wn(S,U,B),S.side=un,S.needsUpdate=!0,Wn(S,U,B),S.side=oe):Wn(S,U,B)}this.compile=function(S,U,V=null){V===null&&(V=S),R!==null&&R.renderStart(S,U,V),w=q.get(V),w.init(U),y.push(w),V.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),S!==V&&S.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),R!==null&&R.updateLights(w.state.lightsArray),Ye=this.localClippingEnabled,me=K.init(this.clippingPlanes,Ye),me===!0&&K.setGlobalState(this.clippingPlanes,U),R!==null&&ot.render(w.state.shadowsArray,V,U);const B=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ut=G.material;if(ut)if(Array.isArray(ut))for(let St=0;St<ut.length;St++){const ct=ut[St];go(ct,V,U,G),B.add(ct)}else go(ut,V,U,G),B.add(ut)}),w=y.pop(),R!==null&&R.renderEnd(),B},this.compileAsync=function(S,U,V=null){const B=this.compile(S,U,V);return new Promise(G=>{function ut(){if(B.forEach(function(St){const vt=Pt.get(St).currentProgram;(vt===void 0||vt.isReady())&&B.delete(St)}),B.size===0){G(S);return}setTimeout(ut,10)}le.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let br=null;function Qc(S){br&&br(S)}function _o(){en.stop()}function vo(){en.start()}const en=new zc;en.setAnimationLoop(Qc),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(S){br=S,nt.setAnimationLoop(S),S===null?en.stop():en.start()},nt.addEventListener("sessionstart",_o),nt.addEventListener("sessionend",vo),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;R!==null&&R.renderStart(S,U);const V=nt.enabled===!0&&nt.isPresenting===!0,B=D!==null&&(j===null||V)&&D.begin(C,j);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(U),U=nt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,U,j),w=q.get(S,y.length),w.init(U),w.state.textureUnits=Nt.getTextureUnits(),y.push(w),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ve.setFromArrayCamera(U):Ht.setFromProjectionMatrix(de,gi,U.reversedDepth),Ye=this.localClippingEnabled,me=K.init(this.clippingPlanes,Ye),T=ht.get(S,_.length),T.init(),_.push(T),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){const St=C.xr.getDepthSensingMesh();St!==null&&wr(St,U,-1/0,C.sortObjects)}wr(S,U,0,C.sortObjects),T.finish(),R!==null&&R.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(Ut,ue),ei=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ei&&L.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),me===!0&&K.beginShadows();const G=w.state.shadowsArray;if(ot.render(G,S,U),me===!0&&K.endShadows(),(B&&D.hasRenderPass())===!1){const St=T.opaque,ct=T.transmissive;if(w.setupLights(),U.isArrayCamera){const vt=U.cameras;if(ct.length>0)for(let Et=0,Ot=vt.length;Et<Ot;Et++){const Wt=vt[Et];Mo(St,ct,S,Wt)}ei&&L.render(S);for(let Et=0,Ot=vt.length;Et<Ot;Et++){const Wt=vt[Et];xo(T,S,Wt,Wt.viewport)}}else ct.length>0&&Mo(St,ct,S,U),ei&&L.render(S),xo(T,S,U)}j!==null&&H===0&&(Nt.updateMultisampleRenderTarget(j),Nt.updateRenderTargetMipmap(j)),B&&D.end(C),S.isScene===!0&&S.onAfterRender(C,S,U),at.resetDefaultState(),W=-1,J=null,y.pop(),y.length>0?(w=y[y.length-1],Nt.setTextureUnits(w.state.textureUnits),me===!0&&K.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,R!==null&&R.renderEnd()};function wr(S,U,V,B){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){const St=U.isArrayCamera?ve:Ht;if(!S.frustumCulled||S.intersectsFrustum(St)){B&&Ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(de);const ct=et.update(S),vt=S.material;vt.visible&&T.push(S,ct,vt,V,Ae.z,null,U)}}else if(S.isMesh||S.isLine||S.isPoints){const St=U.isArrayCamera?ve:Ht;if(!S.frustumCulled||S.intersectsFrustum(St)){const ct=et.update(S),vt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ae.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ae.copy(ct.boundingSphere.center)),Ae.applyMatrix4(S.matrixWorld).applyMatrix4(de)),Array.isArray(vt)){const Et=ct.groups;for(let Ot=0,Wt=Et.length;Ot<Wt;Ot++){const yt=Et[Ot],Xt=vt[yt.materialIndex];Xt&&Xt.visible&&T.push(S,ct,Xt,V,Ae.z,yt,U)}}else vt.visible&&T.push(S,ct,vt,V,Ae.z,null,U)}}}const ut=S.children;for(let St=0,ct=ut.length;St<ct;St++)wr(ut[St],U,V,B)}function xo(S,U,V,B){const{opaque:G,transmissive:ut,transparent:St}=S;w.setupLightsView(V),me===!0&&K.setGlobalState(C.clippingPlanes,V),B&&dt.viewport(tt.copy(B)),G.length>0&&gs(G,U,V),ut.length>0&&gs(ut,U,V),St.length>0&&gs(St,U,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Mo(S,U,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const yt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new wi(1,1,{generateMipmaps:!0,type:yt?Ti:je,minFilter:Ki,samples:Math.max(4,ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const ut=w.state.transmissionRenderTarget[B.id],St=B.viewport||tt;ut.setSize(St.z*C.transmissionResolutionScale,St.w*C.transmissionResolutionScale);const ct=C.getRenderTarget(),vt=C.getActiveCubeFace(),Et=C.getActiveMipmapLevel();C.setRenderTarget(ut),C.getClearColor(Y),pt=C.getClearAlpha(),pt<1&&C.setClearColor(16777215,.5),C.clear(),ei&&L.render(V);const Ot=C.toneMapping;C.toneMapping=Fi;const Wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),me===!0&&K.setGlobalState(C.clippingPlanes,B),gs(S,V,B),Nt.updateMultisampleRenderTarget(ut),Nt.updateRenderTargetMipmap(ut),le.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Xt=0,Me=U.length;Xt<Me;Xt++){const re=U[Xt],{object:se,geometry:Fe,material:bt,group:He}=re;if(bt.side===oe&&se.layers.test(B.layers)){const jt=bt.side;bt.side=qe,bt.needsUpdate=!0,So(se,V,B,Fe,bt,He),bt.side=jt,bt.needsUpdate=!0,yt=!0}}yt===!0&&(Nt.updateMultisampleRenderTarget(ut),Nt.updateRenderTargetMipmap(ut))}C.setRenderTarget(ct,vt,Et),C.setClearColor(Y,pt),Wt!==void 0&&(B.viewport=Wt),C.toneMapping=Ot}function gs(S,U,V){const B=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ut=S.length;G<ut;G++){const St=S[G],{object:ct,geometry:vt,group:Et}=St;let Ot=St.material;Ot.allowOverride===!0&&B!==null&&(Ot=B),ct.layers.test(V.layers)&&So(ct,U,V,vt,Ot,Et)}}function So(S,U,V,B,G,ut){R!==null&&G.isNodeMaterial&&R.setObject(S,G),S.onBeforeRender(C,U,V,B,G,ut),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(C,U,V,B,S,ut),G.transparent===!0&&G.side===oe&&G.forceSinglePass===!1?(G.side=qe,G.needsUpdate=!0,C.renderBufferDirect(V,U,B,G,S,ut),G.side=un,G.needsUpdate=!0,C.renderBufferDirect(V,U,B,G,S,ut),G.side=oe):C.renderBufferDirect(V,U,B,G,S,ut),S.onAfterRender(C,U,V,B,G,ut)}function yo(S){let U=0;for(const V of S)V.texture!==null&&U++;return U}function Wn(S,U,V){U.isScene!==!0&&(U=ti);const B=Pt.get(S),G=w.state.lights,ut=w.state.shadowsArray,St=G.state.version,ct=Q.getParameters(S,G.state,ut,U,V,w.state.lightProbeGridArray),vt=Q.getProgramCacheKey(ct);let Et=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const Ot=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=A.get(S.envMap||B.environment,Ot),B.envMapRotation=B.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Et===void 0&&(S.addEventListener("dispose",ee),Et=new Map,B.programs=Et,B.programVariants=new Map);let Wt=Et.get(vt);if(Wt!==void 0){if(B.currentProgram===Wt&&B.lightsStateVersion===St)return wo(S,ct),Wt}else ct.uniforms=Q.getUniforms(S),R!==null&&S.isNodeMaterial&&R.build(S,V,ct),S.onBeforeCompile(ct,C),Wt=Q.acquireProgram(ct,vt),Et.set(vt,Wt),B.uniforms=ct.uniforms;const yt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=K.uniform),wo(S,ct),B.needsLights=ih(S),B.lightsStateVersion=St,B.needsLights&&(yt.ambientLightColor.value=G.state.ambient,yt.lightProbe.value=G.state.probe,yt.sunLights.value=G.state.sun,yt.sunLightShadows.value=G.state.sunShadow,yt.directionalLights.value=G.state.directional,yt.directionalLightShadows.value=G.state.directionalShadow,yt.spotLights.value=G.state.spot,yt.spotLightShadows.value=G.state.spotShadow,yt.rectAreaLights.value=G.state.rectArea,yt.ltc_1.value=G.state.rectAreaLTC1,yt.ltc_2.value=G.state.rectAreaLTC2,yt.pointLights.value=G.state.point,yt.pointLightShadows.value=G.state.pointShadow,yt.hemisphereLights.value=G.state.hemi,yt.sunShadowMatrix.value=G.state.sunShadowMatrix,yt.sunShadowCascade.value=G.state.sunShadowCascade,yt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,yt.spotLightMatrix.value=G.state.spotLightMatrix,yt.spotLightMap.value=G.state.spotLightMap,yt.pointShadowMatrix.value=G.state.pointShadowMatrix),B.numLightProbeGrids=yo(w.state.lightProbeGridArray),B.currentProgram=Wt,B.uniformsList=null,Wt}function jc(S,U,V,B,G){const ut=Pt.get(S),St=ut.currentProgram.id+","+B+","+G;let ct=ut.programVariants.get(St);return ct===void 0?(ct=Wn(S,U,V),ut.programVariants.set(St,ct)):(ut.currentProgram=ct,ut.uniformsList=null,ut.outputColorSpace=B,ut.toneMapping=G),ct}function bo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=js.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function wo(S,U){const V=Pt.get(S);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function th(S,U,V,B,G){U.isScene!==!0&&(U=ti),Nt.resetTextureUnits();const ut=U.fog,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ct=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qt.workingColorSpace,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Et=A.get(B.envMap||St,vt),Ot=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Wt=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!V.morphAttributes.position,Xt=!!V.morphAttributes.normal,Me=!!V.morphAttributes.color;let re=Fi;B.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(re=C.toneMapping);const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Fe=se!==void 0?se.length:0,bt=Pt.get(B),He=w.state.lights;if(me===!0&&(Ye===!0||S!==J)){const fe=S===J&&B.id===W;K.setState(B,S,fe)}let jt=!1,nn=!1;B.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==He.state.version||G.isBatchedMesh&&bt.batching===!1||!G.isBatchedMesh&&bt.batching===!0||G.isBatchedMesh&&bt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&bt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&bt.instancing===!1||!G.isInstancedMesh&&bt.instancing===!0||G.isSkinnedMesh&&bt.skinning===!1||!G.isSkinnedMesh&&bt.skinning===!0||G.isInstancedMesh&&bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&bt.instancingMorph===!1&&G.morphTexture!==null||bt.envMap!==Et||B.fog===!0&&bt.fog!==ut||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==K.numPlanes||bt.numIntersection!==K.numIntersection)||bt.vertexAlphas!==Ot||bt.vertexTangents!==Wt||bt.morphTargets!==yt||bt.morphNormals!==Xt||bt.morphColors!==Me||bt.morphTargetsCount!==Fe||bt.numLightProbeGrids!==yo(w.state.lightProbeGridArray)?jt=!0:(bt.outputColorSpace!==ct||bt.toneMapping!==re)&&(nn=!0):(jt=!0,bt.__version=B.version);let Oe=bt.currentProgram;(jt===!0||nn===!0)&&(Oe=nn===!0?jc(B,U,G,ct,re):Wn(B,U,G),R&&B.isNodeMaterial&&R.onUpdateProgram(B,Oe,bt));let _s=!1,ki=!1,sn=!1;const Kt=Oe.getUniforms(),Le=bt.uniforms;if(dt.useProgram(Oe.program)&&(_s=!0,ki=!0,sn=!0),B.id!==W&&(W=B.id,ki=!0),_s||J!==S){dt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Kt.setValue(F,"projectionMatrix",S.projectionMatrix),Kt.setValue(F,"viewMatrix",S.matrixWorldInverse);const Ce=Kt.map.cameraPosition;Ce!==void 0&&Ce.setValue(F,vi.setFromMatrixPosition(S.matrixWorld)),ce.logarithmicDepthBuffer&&Kt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Kt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,ki=!0,sn=!0)}if(bt.needsLights&&(He.state.sunShadowMap.length>0&&Kt.setValue(F,"sunShadowMap",He.state.sunShadowMap,Nt),He.state.directionalShadowMap.length>0&&Kt.setValue(F,"directionalShadowMap",He.state.directionalShadowMap,Nt),He.state.spotShadowMap.length>0&&Kt.setValue(F,"spotShadowMap",He.state.spotShadowMap,Nt),He.state.pointShadowMap.length>0&&Kt.setValue(F,"pointShadowMap",He.state.pointShadowMap,Nt)),G.isSkinnedMesh){Kt.setOptional(F,G,"bindMatrix"),Kt.setOptional(F,G,"bindMatrixInverse");const fe=G.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),Kt.setValue(F,"boneTexture",fe.boneTexture,Nt))}G.isBatchedMesh&&(Kt.setOptional(F,G,"batchingTexture"),Kt.setValue(F,"batchingTexture",G._matricesTexture,Nt),Kt.setOptional(F,G,"batchingIdTexture"),Kt.setValue(F,"batchingIdTexture",G._indirectTexture,Nt),Kt.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&Kt.setValue(F,"batchingColorTexture",G._colorsTexture,Nt));const ci=V.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&Z.update(G,V,Oe),(ki||bt.receiveShadow!==G.receiveShadow)&&(bt.receiveShadow=G.receiveShadow,Kt.setValue(F,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(Le.envMapIntensity.value=U.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=M0()),ki){if(Kt.setValue(F,"toneMappingExposure",C.toneMappingExposure),bt.needsLights&&eh(Le,sn),ut&&B.fog===!0&&rt.refreshFogUniforms(Le,ut),rt.refreshMaterialUniforms(Le,B,mt,Rt,w.state.transmissionRenderTarget[S.id]),bt.needsLights&&bt.numLightProbeGrids>0){const fe=b;let Ce=0;for(const Ai of w.state.lightProbeGridArray)Ai.texture!==null&&(fe.textures[Ce]=Ai.texture,fe.min[Ce]=Ai.boundingBox.min,fe.max[Ce]=Ai.boundingBox.max,fe.resolution[Ce]=Ai.resolution,Ce++);for(const Ai in fe)fe[Ai].length=Ce;Le.probesSH.value=fe.textures,Le.probesMin.value=fe.min,Le.probesMax.value=fe.max,Le.probesResolution.value=fe.resolution}js.upload(F,bo(bt),Le,Nt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(js.upload(F,bo(bt),Le,Nt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Kt.setValue(F,"center",G.center),Kt.setValue(F,"modelViewMatrix",G.modelViewMatrix),Kt.setValue(F,"normalMatrix",G.normalMatrix),Kt.setValue(F,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const fe=B.uniformsGroups;for(let Ce=0,Ai=fe.length;Ce<Ai;Ce++){const To=fe[Ce];Tt.update(To,Oe),Tt.bind(To,Oe)}}return Oe}function eh(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function ih(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(S,U,V){const B=Pt.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Pt.get(S.texture).__webglTexture=U,Pt.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const V=Pt.get(S);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,V=0){j=S,$=U,H=V;let B=null,G=!1,ut=!1;if(S){const ct=Pt.get(S);if(ct.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(F.FRAMEBUFFER,ct.__webglFramebuffer),tt.copy(S.viewport),wt.copy(S.scissor),Dt=S.scissorTest,dt.viewport(tt),dt.scissor(wt),dt.setScissorTest(Dt),W=-1;return}else if(ct.__webglFramebuffer===void 0)Nt.setupRenderTarget(S);else if(ct.__hasExternalTextures)Nt.rebindTextures(S,Pt.get(S.texture).__webglTexture,Pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ot=S.depthTexture;if(ct.__boundDepthTexture!==Ot){if(Ot!==null&&Pt.has(Ot)&&(S.width!==Ot.image.width||S.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(S)}}const vt=S.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ut=!0);const Et=Pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Et[U])?B=Et[U][V]:B=Et[U],G=!0):S.samples>0&&Nt.useMultisampledRTT(S)===!1?B=Pt.get(S).__webglMultisampledFramebuffer:Array.isArray(Et)?B=Et[V]:B=Et,tt.copy(S.viewport),wt.copy(S.scissor),Dt=S.scissorTest}else tt.copy(Ct).multiplyScalar(mt).floor(),wt.copy(Jt).multiplyScalar(mt).floor(),Dt=te;if(V!==0&&(B=O),dt.bindFramebuffer(F.FRAMEBUFFER,B)&&dt.drawBuffers(S,B),dt.viewport(tt),dt.scissor(wt),dt.setScissorTest(Dt),G){const ct=Pt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ct.__webglTexture,V)}else if(ut){const ct=U;for(let vt=0;vt<S.textures.length;vt++){const Et=Pt.get(S.textures[vt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+vt,Et.__webglTexture,V,ct)}}else if(S!==null&&V!==0){const ct=Pt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ct.__webglTexture,V)}W=-1};function Eo(S){const U=Pt.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=ce.textureFormatReadable(S.format),U.__typeReadable=ce.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,V,B,G,ut,St,ct=0){if(!(S&&S.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(vt=vt[St],Array.isArray(vt)&&(vt=vt[0])),vt){dt.bindFramebuffer(F.FRAMEBUFFER,vt);try{const Et=S.textures[ct],Ot=Et.format,Wt=Et.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ct);const yt=Eo(Et);if(yt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-B&&V>=0&&V<=S.height-G&&F.readPixels(U,V,B,G,st.convert(Ot),st.convert(Wt),ut)}finally{const Et=j!==null?Pt.get(j).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(S,U,V,B,G,ut,St,ct=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(vt=vt[St],Array.isArray(vt)&&(vt=vt[0])),vt)if(U>=0&&U<=S.width-B&&V>=0&&V<=S.height-G){dt.bindFramebuffer(F.FRAMEBUFFER,vt);const Et=S.textures[ct],Ot=Et.format,Wt=Et.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ct);const yt=Eo(Et);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.bufferData(F.PIXEL_PACK_BUFFER,ut.byteLength,F.STREAM_READ),F.readPixels(U,V,B,G,st.convert(Ot),st.convert(Wt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Me=j!==null?Pt.get(j).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,Me);const re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Oh(F,re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ut),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Xt),F.deleteSync(re),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,V=0){const B=Math.pow(2,-V),G=Math.floor(S.image.width*B),ut=Math.floor(S.image.height*B),St=U!==null?U.x:0,ct=U!==null?U.y:0;Nt.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,St,ct,G,ut),dt.unbindTexture()},this.copyTextureToTexture=function(S,U,V=null,B=null,G=0,ut=0){let St,ct,vt,Et,Ot,Wt,yt,Xt,Me;const re=S.isCompressedTexture?S.mipmaps[ut]:S.image;if(V!==null)St=V.max.x-V.min.x,ct=V.max.y-V.min.y,vt=V.isBox3?V.max.z-V.min.z:1,Et=V.min.x,Ot=V.min.y,Wt=V.isBox3?V.min.z:0;else{const Kt=Math.pow(2,-G);St=Math.floor(re.width*Kt),ct=Math.floor(re.height*Kt),S.isDataArrayTexture?vt=re.depth:S.isData3DTexture?vt=Math.floor(re.depth*Kt):vt=1,Et=0,Ot=0,Wt=0}B!==null?(yt=B.x,Xt=B.y,Me=B.z):(yt=0,Xt=0,Me=0);const se=st.convert(U.format),Fe=st.convert(U.type);let bt;U.isData3DTexture?(Nt.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Nt.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(Nt.setTexture2D(U,0),bt=F.TEXTURE_2D),dt.activeTexture(F.TEXTURE0),dt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),dt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),dt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const He=dt.getParameter(F.UNPACK_ROW_LENGTH),jt=dt.getParameter(F.UNPACK_IMAGE_HEIGHT),nn=dt.getParameter(F.UNPACK_SKIP_PIXELS),Oe=dt.getParameter(F.UNPACK_SKIP_ROWS),_s=dt.getParameter(F.UNPACK_SKIP_IMAGES);dt.pixelStorei(F.UNPACK_ROW_LENGTH,re.width),dt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re.height),dt.pixelStorei(F.UNPACK_SKIP_PIXELS,Et),dt.pixelStorei(F.UNPACK_SKIP_ROWS,Ot),dt.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const ki=S.isDataArrayTexture||S.isData3DTexture,sn=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Kt=Pt.get(S),Le=Pt.get(U),ci=Pt.get(Kt.__renderTarget),fe=Pt.get(Le.__renderTarget);dt.bindFramebuffer(F.READ_FRAMEBUFFER,ci.__webglFramebuffer),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ce=0;Ce<vt;Ce++)ki&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(S).__webglTexture,G,Wt+Ce),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(U).__webglTexture,ut,Me+Ce)),F.blitFramebuffer(Et,Ot,Et+St,Ot+ct,yt,Xt,yt+St,Xt+ct,F.DEPTH_BUFFER_BIT,F.NEAREST);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||Pt.has(S)){const Kt=Pt.get(S),Le=Pt.get(U);dt.bindFramebuffer(F.READ_FRAMEBUFFER,I),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let ci=0;ci<vt;ci++)ki?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.__webglTexture,G,Wt+ci):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Kt.__webglTexture,G),sn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.__webglTexture,ut,Me+ci):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Le.__webglTexture,ut),G!==0?F.blitFramebuffer(Et,Ot,Et+St,Ot+ct,yt,Xt,yt+St,Xt+ct,F.COLOR_BUFFER_BIT,F.NEAREST):sn?F.copyTexSubImage3D(bt,ut,yt,Xt,Me+ci,Et,Ot,St,ct):F.copyTexSubImage2D(bt,ut,yt,Xt,Et,Ot,St,ct);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else sn?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(bt,ut,yt,Xt,Me,St,ct,vt,se,Fe,re.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,ut,yt,Xt,Me,St,ct,vt,se,re.data):F.texSubImage3D(bt,ut,yt,Xt,Me,St,ct,vt,se,Fe,re):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ut,yt,Xt,St,ct,se,Fe,re.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ut,yt,Xt,re.width,re.height,se,re.data):F.texSubImage2D(F.TEXTURE_2D,ut,yt,Xt,St,ct,se,Fe,re);dt.pixelStorei(F.UNPACK_ROW_LENGTH,He),dt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,jt),dt.pixelStorei(F.UNPACK_SKIP_PIXELS,nn),dt.pixelStorei(F.UNPACK_SKIP_ROWS,Oe),dt.pixelStorei(F.UNPACK_SKIP_IMAGES,_s),ut===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(bt),dt.unbindTexture()},this.initRenderTarget=function(S){Pt.get(S).__webglFramebuffer===void 0&&Nt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Nt.setTextureCube(S,0):S.isData3DTexture?Nt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Nt.setTexture2DArray(S,0):Nt.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){$=0,H=0,j=null,dt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Gt=(s,t,e)=>Math.max(t,Math.min(e,s)),On=(s,t,e)=>s+(t-s)*e,$e=(s,t,e,i)=>On(s,t,1-Math.exp(-e*i)),es=(s,t,e)=>{const i=Gt((e-s)/(t-s),0,1);return i*i*(3-2*i)},Ll=s=>(s%1+1)%1,y0=s=>s>.5?s-1:s<-.5?s+1:s,Dl=s=>{const t=["th","st","nd","rd"],e=s%100;return s+(t[(e-20)%10]||t[e]||t[0])},os=(s,t=!0)=>{(!Number.isFinite(s)||s<0)&&(s=0);const e=Math.floor(s/60),i=Math.floor(s%60),n=Math.floor(s%1*10);return t?`${e}:${String(i).padStart(2,"0")}.${n}`:`${e}:${String(i).padStart(2,"0")}`},Ii=s=>Math.round(s).toLocaleString("en-US");function Yi(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function b0(s=1){const t=Yi(s),e=new Float32Array(256);for(let n=0;n<256;n++)e[n]=t();const i=(n,r)=>e[(n*73856093^r*19349663)&255];return(n,r)=>{const a=Math.floor(n),o=Math.floor(r),l=n-a,c=r-o,h=l*l*(3-2*l),f=c*c*(3-2*c),u=i(a,o),d=i(a+1,o),m=i(a,o+1),v=i(a+1,o+1);return On(On(u,d,h),On(m,v,h),f)}}function ls(s=128,t="#ffffff",e="rgba(255,255,255,0)"){const i=document.createElement("canvas");i.width=i.height=s;const n=i.getContext("2d"),r=n.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);r.addColorStop(0,t),r.addColorStop(.22,"rgba(255,255,255,0.85)"),r.addColorStop(.55,"rgba(255,255,255,0.18)"),r.addColorStop(1,e),n.fillStyle=r,n.fillRect(0,0,s,s);const a=new mr(i);return a.colorSpace=Ie,a}function w0(s,t="START • FINISH",e="#0b5147",i="#d8ff5d"){const a=document.createElement("canvas");a.width=1024,a.height=160;const o=a.getContext("2d");o.fillStyle=e,o.fillRect(0,0,1024,160);const l=20;for(let h=0;h<1024;h+=l)for(let f=0;f<160;f+=l)(h/l+f/l)%2===0&&(o.fillStyle=f===0||f+l>=160?"rgba(255,255,255,.9)":"rgba(255,255,255,.04)",o.fillRect(h,f,l,l));o.fillStyle="rgba(5,38,32,.86)",o.fillRect(0,l+8,1024,160-l*2-16),o.fillStyle=i,o.fillRect(26,160/2-2,972,4),o.font="900 52px Outfit, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillStyle="#f8f5e6",o.fillText(s,1024/2,160/2-8),o.font="800 17px Outfit, sans-serif",o.fillStyle=i,o.letterSpacing="8px",o.fillText(t,1024/2,160/2+36);const c=new mr(a);return c.colorSpace=Ie,c.anisotropy=4,c}function E0(s,t="#d8ff5d",e="#0a3029",i=256){const n=document.createElement("canvas");n.width=n.height=i;const r=n.getContext("2d");r.clearRect(0,0,i,i),r.beginPath(),r.roundRect(14,14,i-28,i-28,50),r.fillStyle=t,r.fill(),r.lineWidth=8,r.strokeStyle="rgba(255,255,255,.75)",r.stroke(),r.fillStyle=e,r.font=`900 ${i*.47}px Outfit, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(s,i/2,i/2+4);const a=new mr(n);return a.colorSpace=Ie,a}const hn={morning:{name:"Morning",skyTop:"#3f9fd0",skyMid:"#9adbd4",horizon:"#f5e7b8",fog:"#b9dfc6",sun:"#fff1c4",sunPos:[-.28,.52,.78],light:"#fff0cf",lightIntensity:2.15,hemiSky:"#bde9e4",hemiGround:"#385b36",waterDeep:"#2a6652",waterShallow:"#8b9c55",waterFoam:"#eef9e3",waterSky:"#c9ecda",ambience:.85},noon:{name:"High Sun",skyTop:"#2a8fc9",skyMid:"#93e0d4",horizon:"#f8f0c7",fog:"#bce6cd",sun:"#fff8d9",sunPos:[.2,.72,.45],light:"#fff8dd",lightIntensity:2.35,hemiSky:"#c8f0e6",hemiGround:"#3e653a",waterDeep:"#2a6b56",waterShallow:"#93a75a",waterFoam:"#f4fcea",waterSky:"#d0f1e0",ambience:.95},sunset:{name:"Golden Hour",skyTop:"#396a9b",skyMid:"#e8a47d",horizon:"#ffe2a0",fog:"#e7bd9a",sun:"#ffd28f",sunPos:[-.66,.24,.68],light:"#ffce9a",lightIntensity:2.1,hemiSky:"#f3c9b1",hemiGround:"#3b4730",waterDeep:"#2d5949",waterShallow:"#948d55",waterFoam:"#faf0d5",waterSky:"#f0d6b5",ambience:.78},storm:{name:"Storm Run",skyTop:"#334b56",skyMid:"#789b92",horizon:"#d9cfae",fog:"#9fb4a4",sun:"#f4edd3",sunPos:[.3,.35,.55],light:"#dce2d2",lightIntensity:1.35,hemiSky:"#a8c3ba",hemiGround:"#2d4431",waterDeep:"#22483f",waterShallow:"#718659",waterFoam:"#e8f0e4",waterSky:"#b5c7b8",ambience:.62}},T0=[[200,-16],[217,56],[179,126],[100,158],[19,160],[-56,158],[-139,143],[-207,94],[-219,18],[-186,-48],[-146,-102],[-99,-157],[-23,-196],[66,-185],[129,-133],[165,-75]],$t={ax:.32,az:.44,axz:.58,t1:1.25,t2:.95,t3:1.8,a1:.1,a2:.07,a3:.045};function ai(s,t,e){return Math.sin(s*$t.ax+e*$t.t1)*$t.a1+Math.sin(t*$t.az-e*$t.t2)*$t.a2+Math.sin((s+t)*$t.axz+e*$t.t3)*$t.a3}class A0{constructor(){const t=T0.map(([e,i])=>new P(e,0,i));this.curve=new pu(t,!0,"centripetal",.5),this.length=this.curve.getLength(),this.sampleCount=1200,this.pts=[],this.tangents=[],this.lefts=[],this.widths=[];for(let e=0;e<this.sampleCount;e++){const i=e/this.sampleCount,n=this.curve.getPointAt(i),r=this.curve.getTangentAt(i).setY(0).normalize(),a=new P(-r.z,0,r.x).normalize();this.pts.push(n),this.tangents.push(r),this.lefts.push(a),this.widths.push(this.getWidth(i))}this.gateCount=8,this.gateFractions=Array.from({length:this.gateCount},(e,i)=>(i+1)/this.gateCount),this.gateDistances=this.gateFractions.map(e=>e*this.length),this.rampTs=[.2,.7],this.startFrame=this.getFrameAt(0)}getWidth(t){t=Ll(t);let e=30+Math.sin(t*Math.PI*4+.8)*2.3+Math.cos(t*Math.PI*6+1.9)*1.3;const i=es(.14,.2,t)*(1-es(.27,.34,t));e-=i*5.2;const n=es(.62,.69,t)*(1-es(.79,.87,t));return e+=n*4.2,Gt(e,23.5,36)}getFrameAt(t){t=Ll(t);const e=t*this.sampleCount,i=Math.floor(e)%this.sampleCount,n=(i+1)%this.sampleCount,r=e-Math.floor(e),a=this.pts[i].clone().lerp(this.pts[n],r),o=this.tangents[i].clone().lerp(this.tangents[n],r).normalize(),l=this.lefts[i].clone().lerp(this.lefts[n],r).normalize(),c=On(this.widths[i],this.widths[n],r);return{t,pos:a,tangent:o,left:l,width:c,index:i}}offset(t,e,i=0,n=new P){const r=this.getFrameAt(t);return n.copy(r.pos).addScaledVector(r.left,e).setY(i)}nearest(t,e=null,i=70){let n=0,r=1/0;if(e==null)for(let h=0;h<this.sampleCount;h+=2){const f=this.pts[h],u=f.x-t.x,d=f.z-t.z,m=u*u+d*d;m<r&&(r=m,n=h)}else for(let h=-i;h<=i;h++){const f=((e+h)%this.sampleCount+this.sampleCount)%this.sampleCount,u=this.pts[f],d=u.x-t.x,m=u.z-t.z,v=d*d+m*m;v<r&&(r=v,n=f)}for(let h=-3;h<=3;h++){const f=((n+h)%this.sampleCount+this.sampleCount)%this.sampleCount,u=this.pts[f],d=u.x-t.x,m=u.z-t.z,v=d*d+m*m;v<r&&(r=v,n=f)}const a=this.getFrameAt(n/this.sampleCount),o=t.x-a.pos.x,l=t.z-a.pos.z,c=o*a.left.x+l*a.left.z;return{t:n/this.sampleCount,index:n,lateral:c,distance:Math.sqrt(r),frame:a}}deltaT(t,e){return y0(e-t)}bankHeight(t,e){const i=this.getWidth(t)/2;return e<=i-1?-.5:e<i+5?.16+Math.sin(e*.5)*.04:e<i+15?.42:e<i+34?.9+es(i+15,i+34,e)*2.1+Math.sin(e*.4+t*50)*.18:3.2+(e-i-34)*.105+Math.sin(e*.21+t*37)*.7}waterHeight(t,e){return ai(t.x,t.z,e)}gridPosition(t,e){const i=.985-t*.0065,n=(e-1)*7.4+(t===1?3.7:0),r=this.getFrameAt(i);return{t:i,position:r.pos.clone().addScaledVector(r.left,n),tangent:r.tangent.clone(),left:r.left.clone(),lateral:n,row:t,column:e}}}const R0=`
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vWave;
  varying float vViewDist;

  float getWave(vec2 p) {
    return sin(p.x * ${$t.ax.toFixed(3)} + uTime * ${$t.t1.toFixed(3)}) * ${$t.a1.toFixed(3)}
         + sin(p.y * ${$t.az.toFixed(3)} - uTime * ${$t.t2.toFixed(3)}) * ${$t.a2.toFixed(3)}
         + sin((p.x + p.y) * ${$t.axz.toFixed(3)} + uTime * ${$t.t3.toFixed(3)}) * ${$t.a3.toFixed(3)};
  }

  void main() {
    vec3 p = position;
    vUv = uv;
    float h = getWave(p.xz);
    p.y += h;
    vWave = h;
    vec4 world = modelMatrix * vec4(p, 1.0);
    vWorld = world.xyz;
    vec4 mv = viewMatrix * world;
    vViewDist = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,C0=`
  precision highp float;

  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uFoam;
  uniform vec3 uSky;
  uniform vec3 uSand;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec3 uFog;
  uniform vec3 uTint;

  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vWave;
  varying float vViewDist;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    v += noise(p) * 0.55;
    v += noise(p * 2.03 + 4.7) * 0.28;
    v += noise(p * 4.01 - 8.2) * 0.17;
    return v;
  }

  float waveDerivX(vec2 p) {
    return cos(p.x * ${$t.ax.toFixed(3)} + uTime * ${$t.t1.toFixed(3)}) * ${($t.a1*$t.ax).toFixed(4)}
         + cos((p.x + p.y) * ${$t.axz.toFixed(3)} + uTime * ${$t.t3.toFixed(3)}) * ${($t.a3*$t.axz).toFixed(4)};
  }

  float waveDerivZ(vec2 p) {
    return cos(p.y * ${$t.az.toFixed(3)} - uTime * ${$t.t2.toFixed(3)}) * ${($t.a2*$t.az).toFixed(4)}
         + cos((p.x + p.y) * ${$t.axz.toFixed(3)} + uTime * ${$t.t3.toFixed(3)}) * ${($t.a3*$t.axz).toFixed(4)};
  }

  void main() {
    vec2 flowUv = vec2(vUv.x, vUv.y);
    float edge = abs(flowUv.x - 0.5) * 2.0;
    float longFlow = vUv.y * 34.0;
    float t = uTime;

    float n1 = fbm(vec2(flowUv.x * 9.0, longFlow - t * 0.55));
    float n2 = fbm(vec2(flowUv.x * 22.0 + 3.0, longFlow * 2.3 - t * 0.95));
    float n3 = fbm(vec2(flowUv.x * 44.0 - 12.0, longFlow * 4.2 - t * 1.55));

    // Analytic surface normal so the water reads smooth even with low-poly geometry.
    vec3 normal = normalize(vec3(
      -waveDerivX(vWorld.xz) - (n2 - 0.5) * 0.10,
      1.0,
      -waveDerivZ(vWorld.xz) - (n1 - 0.5) * 0.10
    ));

    vec3 viewDir = normalize(cameraPosition - vWorld);

    // Depth / distance from bank colour ramp, with brown-green tropical water.
    float shallow = smoothstep(0.35, 1.0, edge + (n1 - 0.5) * 0.28);
    vec3 base = mix(uDeep, uShallow, shallow * 0.72);
    base = mix(base, uSand, smoothstep(0.88, 1.0, edge + (n2 - 0.5) * 0.12) * 0.42);
    base *= 0.93 + n3 * 0.16;

    // Moving current streaks and surface chop.
    float streak = smoothstep(0.58, 0.82, fbm(vec2(flowUv.x * 17.0, longFlow * 1.7 - t * 1.2)));
    base += uShallow * streak * 0.10;

    // Sky reflection.
    float fresnel = pow(1.0 - clamp(dot(normal, viewDir), 0.0, 1.0), 3.2);
    vec3 col = mix(base, uSky, fresnel * 0.52);
    col = mix(col, uTint, 0.08);

    // Shoreline foam: a soft band plus lacy foam pulled along by the current.
    float edgeBand = smoothstep(0.80, 0.995, edge + (n1 - 0.5) * 0.09);
    float lace = smoothstep(0.48, 0.79, fbm(vec2(flowUv.x * 14.0, longFlow * 2.6 - t * 1.9)));
    float bankFoam = edgeBand * (0.35 + lace * 0.65);
    float crest = smoothstep(0.085, 0.12, abs(vWave)) * smoothstep(0.55, 0.9, n2) * 0.28;
    float foam = clamp(bankFoam + crest, 0.0, 1.0);
    vec3 foamColor = uFoam * (0.88 + n3 * 0.16);
    col = mix(col, foamColor, foam * 0.92);

    // Sun specular + sparkle.
    vec3 halfV = normalize(uSunDir + viewDir);
    float spec = pow(max(dot(normal, halfV), 0.0), 140.0);
    col += uSunColor * spec * 1.35;
    float sparkle = step(0.985, hash(floor(vUv * vec2(150.0, 900.0)) + floor(t * 2.0))) * pow(max(dot(normal, halfV), 0.0), 8.0);
    col += vec3(sparkle) * 0.6;

    // Distance haze keeps the horizon soft on mobile.
    float fogF = smoothstep(120.0, 520.0, vViewDist);
    col = mix(col, uFog, fogF);

    gl_FragColor = vec4(col, 1.0);
  }
`;class P0{constructor(t){this.track=t,this.group=new _e,this.material=new _i({vertexShader:R0,fragmentShader:C0,side:oe,uniforms:{uTime:{value:0},uDeep:{value:new xt("#1e4d41")},uShallow:{value:new xt("#748a4f")},uFoam:{value:new xt("#e9f7de")},uSky:{value:new xt("#c4e7d4")},uSand:{value:new xt("#a99c62")},uSunDir:{value:new P(-.28,.52,.78).normalize()},uSunColor:{value:new xt("#fff1c4")},uFog:{value:new xt("#b9dfc6")},uTint:{value:new xt("#6f9b64")}}}),this.mesh=new it(this.buildGeometry(),this.material),this.mesh.renderOrder=1,this.mesh.frustumCulled=!1,this.group.add(this.mesh)}buildGeometry(){const i=new Float32Array(23997),n=new Float32Array(421*19*2),r=[],a=this.track;for(let l=0;l<=420;l++){const c=l/420,h=a.getFrameAt(c),f=h.width/2+.15;for(let u=0;u<=18;u++){const d=u/18,m=(d-.5)*2*f,v=h.pos.x+h.left.x*m,p=h.pos.z+h.left.z*m,g=(l*19+u)*3;i[g]=v,i[g+1]=0,i[g+2]=p;const x=(l*19+u)*2;n[x]=d,n[x+1]=c*19}}for(let l=0;l<420;l++)for(let c=0;c<18;c++){const h=l*19+c,f=h+1,u=h+18+1,d=u+1;r.push(h,u,f,f,u,d)}const o=new xe;return o.setAttribute("position",new ke(i,3)),o.setAttribute("uv",new ke(n,2)),o.setIndex(r),o.computeBoundingSphere(),o}update(t){this.material.uniforms.uTime.value=t}applyPalette(t){const e=this.material.uniforms;e.uDeep.value.set(t.waterDeep),e.uShallow.value.set(t.waterShallow),e.uFoam.value.set(t.waterFoam),e.uSky.value.set(t.waterSky),e.uFog.value.set(t.fog),e.uSunColor.value.set(t.sun),e.uSunDir.value.set(...t.sunPos).normalize(),e.uSand.value.set("#a99c62"),e.uTint.value.set(t.waterShallow)}}function Zc(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new xe;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0,d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in f.morphAttributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==s[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(e)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const f=[];for(let u=0;u<s.length;++u){const d=s[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=Il(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][u]);const m=Il(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Il(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new ke(a,e,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const v=h.getComponent(u,m);o.setComponent(u+f,m,v)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}const L0=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
  }
`,D0=`
  uniform vec3 uTop;
  uniform vec3 uMid;
  uniform vec3 uHorizon;
  uniform vec3 uSun;
  uniform vec3 uSunDir;
  varying vec3 vDir;

  void main() {
    vec3 d = normalize(vDir);
    float h = clamp(d.y, 0.0, 1.0);
    vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.28, h));
    col = mix(col, uTop, smoothstep(0.16, 0.9, h));
    float sunDot = max(dot(d, normalize(uSunDir)), 0.0);
    col += uSun * pow(sunDot, 1200.0) * 3.4;
    col += uSun * pow(sunDot, 38.0) * 0.22;
    col += uSun * pow(sunDot, 6.0) * 0.05;
    // soft warm haze near the horizon
    col = mix(col, uHorizon, smoothstep(0.12, -0.08, d.y) * 0.45);
    gl_FragColor = vec4(col, 1.0);
  }
`,I0=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,U0=`
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1,0)), f.x), mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
  }
  void main() {
    vec2 uv = vUv;
    float n = noise(vec2(uv.x * 10.0, uv.y * 8.0 - uTime * 3.4));
    float n2 = noise(vec2(uv.x * 28.0 + 2.0, uv.y * 26.0 - uTime * 6.0));
    float streak = smoothstep(0.36, 0.72, n * 0.65 + n2 * 0.5);
    float edge = smoothstep(0.0, 0.16, uv.x) * smoothstep(1.0, 0.84, uv.x);
    float alpha = (0.2 + streak * 0.8) * edge;
    vec3 col = mix(vec3(0.66, 0.84, 0.8), uColor, streak);
    gl_FragColor = vec4(col, alpha * 0.9);
  }
`;function N0(){const s=[];for(let i=0;i<9;i++){const n=new Ue(1.15,3.9,1,5);n.translate(0,1.9,0);const r=n.attributes.position;for(let a=0;a<r.count;a++){const o=r.getY(a),l=Gt(o/3.9,0,1);r.setX(a,r.getX(a)*(1-l*.78)),r.setZ(a,-l*l*.85)}n.rotateX(-Math.PI/2+.38),n.rotateY(i/9*Math.PI*2+i%2*.12),n.translate(0,.15+i%3*.1,0),s.push(n)}const e=Zc(s,!1);return s.forEach(i=>i.dispose()),e.computeVertexNormals(),e}function F0(){const s=[],t=[[0,0,0,1],[.8,.35,.2,.72],[-.65,.45,-.15,.68],[.05,.7,-.6,.6]];for(const[i,n,r,a]of t){const o=new bi(1.7,0);o.scale(a,a*.75,a),o.translate(i,n,r),s.push(o)}const e=Zc(s,!1);return s.forEach(i=>i.dispose()),e}const O0=typeof document<"u"?N0():null,B0=typeof document<"u"?F0():null,Ul=(()=>{const s=new he(.13,.32,1,6,2);return s.translate(0,.5,0),s})(),z0=new bi(1,0),is=new xr(1,0),k0=new bi(1,1),G0=new _r(4.4,2.7,4),H0=new ae(4.4,2.3,3.8);class V0{constructor(t,e){this.scene=t,this.track=e,this.group=new _e,this.scene.add(this.group),this.noise=b0(8421),this.rand=Yi(777),this.time=0,this.clouds=[],this.mist=[],this.birds=[],this.startLightMats=[],this.mountainMaterials=[],this.palette=hn.morning,this.buildLights(),this.buildSky(),this.buildTerrain(),this.buildMountains(),this.buildClouds(),this.buildJungle(),this.buildBanks(),this.buildStartArch(),this.buildBridge(),this.buildVillage(),this.buildWaterfall(),this.buildBirds(),this.applyPalette("morning")}buildLights(){this.hemi=new yu("#bde9e4","#385b36",1.15),this.scene.add(this.hemi),this.sun=new ll("#fff0cf",2.2),this.sun.position.set(-30,55,80),this.scene.add(this.sun),this.fill=new ll("#9be5d1",.35),this.fill.position.set(40,20,-60),this.scene.add(this.fill)}buildSky(){this.skyMat=new _i({vertexShader:L0,fragmentShader:D0,side:qe,depthWrite:!1,uniforms:{uTop:{value:new xt("#3f9fd0")},uMid:{value:new xt("#9adbd4")},uHorizon:{value:new xt("#f5e7b8")},uSun:{value:new xt("#fff1c4")},uSunDir:{value:new P(-.28,.52,.78).normalize()}}}),this.sky=new it(new Bi(1500,32,18),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.group.add(this.sky),this.sunSprite=new cn(new Qi({map:ls(256),color:"#fff2c4",transparent:!0,blending:li,depthWrite:!1,depthTest:!1,opacity:.85})),this.sunSprite.scale.setScalar(210),this.sunSprite.renderOrder=-9,this.group.add(this.sunSprite)}buildTerrain(){const e=[-1,1],i=[{add:1.8,y:-.7},{add:6,y:null},{add:15,y:null},{add:25,y:null},{add:40,y:null},{add:65,y:null},{add:95,y:null}],n=[new xt("#d8bd82"),new xt("#cab373"),new xt("#a3a463"),new xt("#79a653"),new xt("#4f8c47"),new xt("#427f43"),new xt("#356d3b")],r=[],a=[],o=[];for(const h of e){const f=r.length/3;for(let u=0;u<=300;u++){const d=u/300,m=this.track.getFrameAt(d),v=m.width/2;for(let p=0;p<i.length;p++){const g=i[p],x=v+g.add,E=x*h,b=g.y??this.track.bankHeight(d,x),T=this.noise(d*35,p*7.1)-.5,w=m.pos.x+m.left.x*E,_=m.pos.z+m.left.z*E;r.push(w,b+(p>1?T*(p-1)*.42:0),_);const y=n[p].clone();if(p>=3){const D=this.noise(w*.06,_*.06);y.offsetHSL((D-.5)*.025,(D-.5)*.08,(D-.5)*.1)}p===1&&this.noise(d*90,h)>.52&&y.lerp(n[2],.65),p===0&&y.set("#c8a96e"),a.push(y.r,y.g,y.b)}}for(let u=0;u<300;u++)for(let d=0;d<i.length-1;d++){const m=f+u*i.length+d,v=m+1,p=m+i.length,g=p+1;h===1?o.push(m,p,v,v,p,g):o.push(m,v,p,v,g,p)}}const l=new xe;l.setAttribute("position",new Zt(r,3)),l.setAttribute("color",new Zt(a,3)),l.setIndex(o),l.computeVertexNormals(),this.terrainMat=new ie({vertexColors:!0,flatShading:!0}),this.terrain=new it(l,this.terrainMat),this.terrain.receiveShadow=!1,this.group.add(this.terrain);const c=new it(new ps(1400,32),new ie({color:"#244f36"}));c.rotation.x=-Math.PI/2,c.position.y=-28,this.group.add(c)}buildMountains(){const t=new _r(1,1,6,1);t.translate(0,.5,0);const e=new ie({color:"#4b7c63",flatShading:!0});this.mountainMaterials.push(e);const i=22,n=new fi(t,e,i),r=new Yt,a=new Qe,o=new P,l=new P,c=Yi(909);for(let h=0;h<i;h++){const f=h/i*Math.PI*2+c()*.22,u=560+c()*280,d=90+c()*150,m=70+c()*170;l.set(Math.cos(f)*u,-12,Math.sin(f)*u),a.setFromAxisAngle(new P(0,1,0),c()*Math.PI*2),o.set(d,m,d*(.7+c()*.5)),r.compose(l,a,o),n.setMatrixAt(h,r)}n.instanceMatrix.needsUpdate=!0,this.group.add(n),this.mountains=n}buildClouds(){const t=new ge({color:"#fffaf0",transparent:!0,opacity:.7,depthWrite:!1,fog:!0}),e=46,i=new fi(k0,t,e),n=Yi(2341),r=new Yt,a=new Qe;for(let o=0;o<e;o++){const l=n()*Math.PI*2,c=320+n()*520,h=new P(Math.cos(l)*c,68+n()*85,Math.sin(l)*c),f=new P(16+n()*28,5+n()*8,12+n()*20);a.setFromEuler(new Xe(n()*.3,n()*Math.PI,0)),r.compose(h,a,f),i.setMatrixAt(o,r),this.clouds.push({p:h,s:f,q:a,speed:.5+n()*.7,phase:n()*10})}i.instanceMatrix.setUsage(rs),i.instanceMatrix.needsUpdate=!0,i.frustumCulled=!1,this.group.add(i),this.cloudMesh=i}placeInstance(t,e,i,n,r={}){if(i===-1&&e>.472&&e<.578&&n<58)return;const a=this.track.getFrameAt(e),o=i*n,l=this.track.bankHeight(e,n),c=new P(a.pos.x+a.left.x*o,l,a.pos.z+a.left.z*o);t.push({t:e,pos:c,side:i,offset:n,...r})}buildJungle(){const t=Yi(99123),e=[],i=[],n=[],r=[],a=[],o=R=>this.track.getWidth(R)/2;for(let R=0;R<270;R++){const O=t(),I=t()<.5?-1:1,k=o(O)+14+t()*52;this.placeInstance(e,O,I,k,{h:5.5+t()*7,lean:(t()-.5)*.22,rot:t()*Math.PI*2,size:.82+t()*.5,shade:t()})}for(let R=0;R<230;R++){const O=t(),I=t()<.5?-1:1,k=o(O)+19+t()*62;this.placeInstance(i,O,I,k,{h:5.2+t()*5.8,rot:t()*Math.PI*2,size:1.45+t()*1.4,shade:t()})}for(let R=0;R<250;R++){const O=t(),I=t()<.5?-1:1,k=o(O)+8+t()*60;this.placeInstance(n,O,I,k,{s:.55+t()*1.35,rot:t()*Math.PI*2,shade:t()})}for(let R=0;R<120;R++){const O=t(),I=t()<.5?-1:1,k=o(O)+3+t()*42;this.placeInstance(r,O,I,k,{s:.5+t()*2.4,rot:t()*Math.PI*2,shade:t()})}for(let R=0;R<100;R++){const O=.16+t()*.17,I=t()<.5?-1:1,k=o(O)+4+t()*18;this.placeInstance(a,O,I,k,{h:4+t()*7,rot:t()*Math.PI*2,lean:(t()-.5)*.2})}const l=new ie({color:"#8c6a42",flatShading:!0}),c=new ie({color:"#ffffff",flatShading:!0,side:oe}),h=new ie({color:"#ffffff",flatShading:!0}),f=new ie({color:"#ffffff",flatShading:!0}),u=new ie({color:"#ffffff",flatShading:!0}),d=new ie({color:"#86a94d",flatShading:!0}),m=new Yt,v=new Qe,p=new P,g=new P,x=new P(0,1,0),E=new xt,b=new fi(Ul,l,e.length),T=new fi(O0,c,e.length);e.forEach((R,O)=>{const I=new Qe().setFromEuler(new Xe(R.lean,R.rot,R.lean*.5));v.copy(I),p.copy(R.pos),g.set(1.1*R.size,R.h,1.1*R.size),m.compose(p,v,g),b.setMatrixAt(O,m);const k=new P(0,R.h,0).applyQuaternion(v).add(R.pos);v.setFromAxisAngle(x,R.rot),g.setScalar(.65*R.size+R.shade*.24),m.compose(k,v,g),T.setMatrixAt(O,m),E.setHSL(.24+R.shade*.05,.5+R.shade*.14,.44+R.shade*.13),T.setColorAt(O,E)}),b.instanceMatrix.needsUpdate=!0,T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0),this.group.add(b,T);const w=new fi(Ul,l,i.length),_=new fi(B0,h,i.length);i.forEach((R,O)=>{v.setFromAxisAngle(x,R.rot),p.copy(R.pos),g.set(1.8*R.size/3,R.h,1.8*R.size/3),m.compose(p,v,g),w.setMatrixAt(O,m);const I=R.pos.clone().add(new P(0,R.h*.94,0));v.setFromEuler(new Xe(0,R.rot,(R.shade-.5)*.15)),g.setScalar(R.size),m.compose(I,v,g),_.setMatrixAt(O,m),E.setHSL(.255+R.shade*.045,.42+R.shade*.15,.36+R.shade*.12),_.setColorAt(O,E)}),w.instanceMatrix.needsUpdate=!0,_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0),this.group.add(w,_);const y=new fi(z0,f,n.length);n.forEach((R,O)=>{v.setFromEuler(new Xe(0,R.rot,0)),p.set(R.pos.x,R.pos.y+R.s*.42,R.pos.z),g.set(R.s*1.3,R.s*.65,R.s),m.compose(p,v,g),y.setMatrixAt(O,m),E.setHSL(.27+R.shade*.045,.4+R.shade*.16,.36+R.shade*.12),y.setColorAt(O,E)}),y.instanceMatrix.needsUpdate=!0,y.instanceColor&&(y.instanceColor.needsUpdate=!0),this.group.add(y);const D=new fi(is,u,r.length);r.forEach((R,O)=>{v.setFromEuler(new Xe(R.shade*.4,R.rot,R.shade*.3)),p.set(R.pos.x,R.pos.y+R.s*.34,R.pos.z),g.set(R.s*1.2,R.s*.8,R.s),m.compose(p,v,g),D.setMatrixAt(O,m),E.setHSL(.23,.06,.42+R.shade*.16),D.setColorAt(O,E)}),D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0),this.group.add(D);const C=new he(.075,.1,1,5);C.translate(0,.5,0);const N=new fi(C,d,a.length);a.forEach((R,O)=>{v.setFromEuler(new Xe(R.lean,R.rot,R.lean*.4)),p.copy(R.pos),g.set(1,R.h,1),m.compose(p,v,g),N.setMatrixAt(O,m)}),N.instanceMatrix.needsUpdate=!0,this.group.add(N),this.vegetationMeshes=[b,T,w,_,y,D,N]}buildBanks(){const t=Yi(551),e=[];for(let o=0;o<90;o++){const l=t(),c=t()<.5?-1:1,h=this.track.getWidth(l)/2,f=c*(h-1.4-t()*2.6),u=this.track.getFrameAt(l);e.push({p:new P(u.pos.x+u.left.x*f,.11,u.pos.z+u.left.z*f),s:.25+t()*.55,rot:t()*Math.PI})}const i=new ps(1,9);i.rotateX(-Math.PI/2);const n=new ie({color:"#4f8f43",side:oe}),r=new fi(i,n,e.length),a=new Yt;for(let o=0;o<e.length;o++){const l=e[o];a.compose(l.p,new Qe().setFromAxisAngle(new P(0,1,0),l.rot),new P(l.s,1,l.s)),r.setMatrixAt(o,a)}r.instanceMatrix.needsUpdate=!0,this.group.add(r)}buildStartArch(){const t=new _e,e=this.track.getFrameAt(0);t.position.copy(e.pos),t.rotation.y=Math.atan2(e.tangent.x,e.tangent.z);const i=e.width/2,n=new ie({color:"#bea05c",flatShading:!0}),r=new ie({color:"#7b6738",flatShading:!0}),a=new he(.32,.42,7.1,6);for(const u of[-1,1]){const d=new it(a,n);d.position.set(u*(i+1.8),3.55,0),d.rotation.z=u*-.03,t.add(d);for(let m=0;m<3;m++){const v=new it(new Mr(.4,.055,4,8),r);v.rotation.x=Math.PI/2,v.position.set(u*(i+1.8),1.6+m*2,0),t.add(v)}}const o=new it(new he(.24,.24,e.width+5.4,6),n);o.rotation.z=Math.PI/2,o.position.y=7,t.add(o);const l=new ge({map:w0("RIVER RUSH","START  •  FINISH"),side:oe,transparent:!0}),c=new it(new Ue(e.width+1.8,2.9),l);c.position.set(0,5.55,.08),c.rotation.y=Math.PI,t.add(c);const h=c.clone();h.position.z=-.04,t.add(h);for(let u=0;u<3;u++){const d=new ge({color:"#22352e"}),m=new it(new Bi(.22,8,6),d);m.position.set((u-1)*2.2,7.35,.3),t.add(m),this.startLightMats.push(d)}const f=new ge({color:"#d8ff5d",side:oe});for(const u of[-1,1]){const d=new it(new Ue(1.8,.9,3,1),f);d.position.set(u*(i+1.8),7.9,.1),d.rotation.y=Math.PI/2,t.add(d)}this.group.add(t),this.startArch=t}buildBridge(){const t=new _e,i=this.track.getFrameAt(.335);t.position.copy(i.pos),t.rotation.y=Math.atan2(i.tangent.x,i.tangent.z);const n=i.width+22,r=new ie({color:"#8c6238",flatShading:!0}),a=new ie({color:"#5a3f27",flatShading:!0}),o=new ie({color:"#b59a68",flatShading:!0}),l=new it(new ae(n,.24,7.4),a);l.position.y=6.1,t.add(l);const c=34;for(let h=0;h<c;h++){const f=-n/2+(h+.5)*(n/c),u=new it(new ae(n/c-.06,.12,7.7),r);u.position.set(f,6.25,0),u.rotation.y=(Math.random()-.5)*.025,t.add(u)}for(const h of[-1,1]){const f=new it(new ae(n,.18,.18),r);f.position.set(0,7.5,h*3.5),t.add(f);const u=f.clone();u.position.y=7.05,t.add(u);for(let d=0;d<9;d++){const m=-n/2+d*(n/8),v=new it(new he(.11,.13,1.35,5),a);v.position.set(m,6.85,h*3.5),t.add(v)}for(const d of[-n/2+3,n/2-3]){const m=new it(new he(.35,.5,6.2,6),a);m.position.set(d,3.1,h*2.6),t.add(m);const v=new it(new he(.09,.09,4.6,4),o);v.position.set(d,5,h*3.1),v.rotation.z=.55*(d<0?-1:1),t.add(v)}}for(let h=0;h<7;h++){const f=-n/2+4+Math.random()*(n-8),u=1+Math.random()*2.5,d=new it(new he(.035,.035,u,4),new ie({color:"#477a3b"}));d.position.set(f,6.1-u/2,(Math.random()<.5?-1:1)*(3.8+Math.random()*.6)),t.add(d)}this.group.add(t),this.bridge=t}buildVillage(){const t=[[.365,-1,22],[.395,-1,27],[.425,-1,23],[.375,1,25],[.415,1,28]];for(const[e,i,n]of t){const r=this.track.getFrameAt(e),a=this.track.bankHeight(e,r.width/2+n),o=new _e;o.position.set(r.pos.x+r.left.x*i*(r.width/2+n),a,r.pos.z+r.left.z*i*(r.width/2+n)),o.rotation.y=Math.atan2(r.left.x*i,r.left.z*i)+Math.PI/2;const l=new ie({color:"#7f5c39",flatShading:!0}),c=new ie({color:"#b28b5f",flatShading:!0}),h=new ie({color:"#c29c5a",flatShading:!0});for(const[E,b]of[[-1.7,-1.4],[1.7,-1.4],[-1.7,1.4],[1.7,1.4]]){const T=new it(new he(.16,.2,2.2,5),l);T.position.set(E,1.1,b),o.add(T)}const f=new it(new ae(5.2,.28,4.6),l);f.position.y=2.2,o.add(f);const u=new it(H0,c);u.position.y=3.45,o.add(u);const d=new it(G0,h);d.position.y=5.9,d.rotation.y=Math.PI/4,o.add(d);const m=new it(new ae(.9,1.5,.06),new ie({color:"#3f2a1d"}));m.position.set(0,3.15,1.93),o.add(m);const v=new it(new Ue(.6,.5),new ge({color:"#ffd98a"}));v.position.set(1.35,3.65,1.94),o.add(v);const p=new it(new ae(2.1,.16,9),l);p.position.set(0,1,-6.8),o.add(p);for(let E=0;E<3;E++){const b=new it(new he(.12,.14,2.4,5),l);b.position.set(-.8,.4,-3.5-E*3),o.add(b)}const g=new it(new Bi(.18,7,5),new ge({color:"#ffca6b"}));g.position.set(-.6,2.8,2.25),o.add(g);const x=new cn(new Qi({map:ls(64),color:"#ffbe5c",transparent:!0,blending:li,depthWrite:!1,opacity:.55}));x.position.copy(g.position),x.scale.setScalar(1.4),o.add(x),this.group.add(o)}}buildWaterfall(){const e=this.track.getFrameAt(.525),i=-1,n=e.width/2+24,r=new P(e.pos.x+e.left.x*i*n,this.track.bankHeight(.525,n),e.pos.z+e.left.z*i*n),a=new _e;a.position.copy(r),a.rotation.y=Math.atan2(-e.left.x*i,-e.left.z*i);const o=Yi(303),l=new ie({color:"#5c705f",flatShading:!0}),c=new ie({color:"#465b51",flatShading:!0}),h=new ie({color:"#7b8a70",flatShading:!0});for(let v=0;v<7;v++){const p=new it(is,v%3===0?h:l),g=-15+v*5+(o()-.5)*2;p.scale.set(4.4+o()*2.4,8+o()*8,4+o()*3),p.position.set(g,5.5+o()*3,-3.6-o()*3.5),p.rotation.set((o()-.5)*.5,o()*Math.PI,(o()-.5)*.4),a.add(p)}const f=new it(is,c);f.scale.set(6.2,11.5,4.2),f.position.set(0,9.4,-1.4),f.rotation.set(.1,.4,.06),a.add(f);for(const v of[-1,1])for(let p=0;p<3;p++){const g=new it(is,p===0?h:l);g.scale.set(2.4+o()*2.2,2.8+o()*4.5,2.4+o()*1.8),g.position.set(v*(5.4+p*2.1),2.2+p*3.1,.2+o()*2.4),g.rotation.set(o()*.7,o()*Math.PI,o()*.5),a.add(g)}const u=new it(is,h);u.scale.set(7.5,2.2,4.2),u.position.set(.3,16.1,.3),u.rotation.set(.2,.6,.05),a.add(u),this.fallMat=new _i({vertexShader:I0,fragmentShader:U0,transparent:!0,depthWrite:!1,side:oe,uniforms:{uTime:{value:0},uColor:{value:new xt("#bfe9e2")}}});const d=new it(new Ue(8.6,14.6),this.fallMat);d.position.set(.15,8.8,1.35),a.add(d);const m=new it(new Ue(6.2,13.2),this.fallMat);m.position.set(-.2,8.4,2.05),a.add(m);for(const v of[-1,1]){const p=new it(new Ue(1.5,9.5),this.fallMat);p.position.set(v*5.5,6.2,1.8),p.rotation.z=v*.03,a.add(p)}for(let v=0;v<7;v++){const p=new cn(new Qi({map:ls(128),color:"#f2fff1",transparent:!0,blending:li,depthWrite:!1,opacity:.4}));p.position.set((o()-.5)*9,.7+o()*1.5,2.6+o()*2.6),p.scale.setScalar(3.4+o()*4),a.add(p),this.mist.push({sprite:p,phase:o()*6,base:p.scale.x,y:p.position.y})}this.group.add(a),this.waterfall=a}buildBirds(){const t=new ge({color:"#315b5b",side:oe,transparent:!0,opacity:.55});for(let e=0;e<8;e++){const i=new _e;for(const a of[-1,1]){const o=new it(new Ue(1.4,.22),t);o.position.x=a*.7,o.rotation.z=a*.22,i.add(o)}const n=Math.random()*Math.PI*2,r=90+Math.random()*170;i.position.set(Math.cos(n)*r,42+Math.random()*35,Math.sin(n)*r),this.group.add(i),this.birds.push({g:i,angle:n,radius:r,speed:.03+Math.random()*.05,y:i.position.y,flap:Math.random()*10})}}applyPalette(t){const e=hn[t]||hn.morning;this.palette=e;const i=this.skyMat.uniforms;i.uTop.value.set(e.skyTop),i.uMid.value.set(e.skyMid),i.uHorizon.value.set(e.horizon),i.uSun.value.set(e.sun),i.uSunDir.value.set(...e.sunPos).normalize(),this.sunSprite.material.color.set(e.sun),this.sunSprite.position.copy(i.uSunDir.value).multiplyScalar(900),this.sunSprite.scale.setScalar(t==="sunset"?280:210),this.sun.color.set(e.light),this.sun.intensity=e.lightIntensity,this.sun.position.copy(i.uSunDir.value).multiplyScalar(120),this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.ambience+.35,this.fill.color.set(e.skyMid),this.fill.intensity=.3,this.scene.fog&&this.scene.fog.color.set(e.fog),this.mountainMaterials[0]&&this.mountainMaterials[0].color.set(t==="storm"?"#436057":t==="sunset"?"#6c7a64":"#4b7c63"),this.cloudMesh&&this.cloudMesh.material.color.set(t==="storm"?"#cdd8ce":"#fffaf0"),this.scene.background=null}setStartLights(t){this.startLightMats.forEach((e,i)=>{e.color.set(i<t?"#d8ff5d":"#22352e")})}update(t,e){if(this.time=t,this.fallMat&&(this.fallMat.uniforms.uTime.value=t),this.cloudMesh){const i=new Yt;this.clouds[0]?.q||new Qe;for(let n=0;n<this.clouds.length;n++){const r=this.clouds[n],a=Math.atan2(r.p.z,r.p.x)+e*8e-4*r.speed,o=Math.hypot(r.p.x,r.p.z);r.p.x=Math.cos(a)*o,r.p.z=Math.sin(a)*o,r.p.y+=Math.sin(t*.12+r.phase)*e*.03,i.compose(r.p,r.q,r.s),this.cloudMesh.setMatrixAt(n,i)}this.cloudMesh.instanceMatrix.needsUpdate=!0}for(const i of this.mist){const n=1+Math.sin(t*1.3+i.phase)*.1;i.sprite.scale.setScalar(i.base*n),i.sprite.position.y=i.y+Math.sin(t*.7+i.phase)*.3}for(const i of this.birds){i.angle+=e*i.speed,i.g.position.set(Math.cos(i.angle)*i.radius,i.y+Math.sin(t*.35+i.flap)*2,Math.sin(i.angle)*i.radius),i.g.rotation.y=-i.angle+Math.PI/2;const n=Math.sin(t*7+i.flap);i.g.children.forEach((r,a)=>{r.rotation.z=(a===0?-1:1)*(.22+n*.25)})}}}const Nl=typeof document<"u"?ls(96):null,W0=[[.062,-7.5,1.7],[.116,7.8,2],[.235,-5.5,1.5],[.322,9.2,1.8],[.438,-8.2,2.1],[.548,6.4,1.6],[.648,-7.4,1.9],[.782,8.4,1.8],[.894,-6.2,1.6],[.952,5.2,1.4]],X0=[[.095,1.5,.2],[.286,-1.8,-.3],[.487,2.4,.5],[.73,-2,-.1],[.856,7,.4]],q0=[[.205,5],[.596,-4],[.812,2]],Y0=[[.045,0,"nitro"],[.085,-4,"coin"],[.105,4,"coin"],[.152,3,"shield"],[.184,-5,"coin"],[.258,0,"nitro"],[.305,-6,"coin"],[.352,5,"coin"],[.402,-3,"shield"],[.46,4,"nitro"],[.515,-2,"coin"],[.575,5,"coin"],[.622,-5,"shield"],[.685,2,"nitro"],[.745,-4,"coin"],[.795,4,"coin"],[.848,0,"nitro"],[.915,-4,"shield"],[.946,4,"coin"]];function $0(){const s=document.createElement("canvas");s.width=512,s.height=128;const t=s.getContext("2d"),e=32;for(let n=0;n<4;n++)for(let r=0;r<16;r++)t.fillStyle=(r+n)%2?"rgba(9,40,34,.55)":"rgba(245,252,235,.9)",t.fillRect(r*e,n*e,e,e);const i=new mr(s);return i.colorSpace=Ie,i.wrapS=er,i.repeat.set(4,1),i}class K0{constructor(t,e){this.scene=t,this.track=e,this.group=new _e,this.scene.add(this.group),this.obstacles=[],this.pickups=[],this.ramps=[],this.whirls=[],this.flags=[],this.rand=Yi(613),this.checkerTex=$0(),this.buildCheckpoints(),this.buildStartLine(),this.buildObstacles(),this.buildPickups(),this.buildRamps(),this.buildBuoys()}buildCheckpoints(){const t=new ie({color:"#b79a55",flatShading:!0}),e=[new ge({color:"#ff8a3d",side:oe}),new ge({color:"#d8ff5d",side:oe}),new ge({color:"#7af3d5",side:oe})];for(let i=0;i<this.track.gateCount;i++){const n=this.track.gateFractions[i],r=this.track.getFrameAt(n),a=new _e;a.position.copy(r.pos),a.rotation.y=Math.atan2(r.tangent.x,r.tangent.z);const o=r.width/2;for(const c of[-1,1]){const h=new it(new he(.16,.24,4.4,5),t);h.position.set(c*(o+.7),2,0),a.add(h);const f=new it(new Ue(1.5,.85,3,1),e[i%e.length]);f.position.set(c*(o+.7)+c*.78,3.85,0),f.rotation.y=Math.PI/2,a.add(f),this.flags.push({mesh:f,phase:i*1.1+(c>0?.5:0),side:c});const u=new it(new Bi(.38,8,6),new ie({color:i===this.track.gateCount-1?"#d8ff5d":"#ff8a3d"}));u.position.set(c*(o-1.3),.25,0),a.add(u)}const l=new cn(new Qi({map:E0(String(i+1),"rgba(7,40,35,.82)","#d8ff5d",160),transparent:!0,depthWrite:!1}));l.position.set(0,5.4,0),l.scale.setScalar(1.15),a.add(l),this.group.add(a)}}buildStartLine(){const t=this.track.getFrameAt(0),e=new Ue(t.width+1,3.4),i=new ge({map:this.checkerTex,transparent:!0,depthWrite:!1,opacity:.92,side:oe}),n=new it(e,i);n.rotation.x=-Math.PI/2,n.rotation.z=-Math.atan2(t.tangent.x,t.tangent.z),n.position.set(t.pos.x,.14,t.pos.z),n.renderOrder=3,this.group.add(n)}buildObstacles(){const t=new be({color:"#7d8875",roughness:.93,flatShading:!0}),e=new ie({color:"#4a7e3d",flatShading:!0}),i=new be({color:"#6b4b2c",roughness:.9,flatShading:!0}),n=new ie({color:"#4b331e",flatShading:!0});for(const[o,l,c]of W0){const h=this.track.getFrameAt(o),f=h.pos.clone().addScaledVector(h.left,l),u=new _e;u.position.copy(f);const d=new it(new xr(1,0),t);d.scale.set(c*1.15,c*.82,c*1.05),d.position.y=c*.16,d.rotation.set(this.rand()*2,this.rand()*3,this.rand()*2),u.add(d);const m=new it(new bi(1,0),e);m.scale.set(c*.66,c*.25,c*.58),m.position.set(c*.1,c*.55,-c*.1),u.add(m);const v=new it(new hr(c*.9,c*1.55,18),new ge({color:"#eaffdf",transparent:!0,opacity:.25,blending:li,depthWrite:!1,side:oe}));v.rotation.x=-Math.PI/2,v.position.y=.06,u.add(v),this.group.add(u),this.obstacles.push({type:"rock",group:u,position:f.clone(),t:o,lat:l,radius:c*1.25+.5,baseY:0,hit:!1})}for(const[o,l,c]of X0){const h=this.track.getFrameAt(o),f=h.pos.clone().addScaledVector(h.left,l),u=new _e;u.position.copy(f),u.rotation.y=Math.atan2(h.tangent.x,h.tangent.z)+c;const d=new it(new he(.55,.62,6.2,7),i);d.rotation.z=Math.PI/2,d.position.y=.36,u.add(d);for(let v=0;v<3;v++){const p=new it(new he(.1,.14,1.7,5),n);p.position.set(-2.2+v*2.1,.68,v%2?.55:-.5),p.rotation.z=Math.PI/2+(v-1)*.45,p.rotation.y=v*.8,u.add(p)}const m=new it(new bi(.85,0),n);m.scale.set(1.2,.8,1.4),m.position.set(3.1,.5,.2),u.add(m),this.group.add(u),this.obstacles.push({type:"log",group:u,position:f.clone(),t:o,lat:l,radius:3.6,baseY:0,hit:!1,phase:this.rand()*6})}const r=new ge({color:"#183e38",transparent:!0,opacity:.52,side:oe,depthWrite:!1}),a=new ge({color:"#c7f5e4",transparent:!0,opacity:.34,side:oe,blending:li,depthWrite:!1});for(const[o,l]of q0){const c=this.track.getFrameAt(o),h=c.pos.clone().addScaledVector(c.left,l),f=new _e;f.position.copy(h);const u=new it(new ps(3.5,24),r);u.rotation.x=-Math.PI/2,u.position.y=.08,f.add(u);const d=[];for(let v=0;v<3;v++){const p=new it(new hr(1.4+v*.85,1.6+v*.85,24),a);p.rotation.x=-Math.PI/2,p.position.y=.1+v*.02,f.add(p),d.push({mesh:p,speed:.5+v*.25})}const m=new cn(new Qi({map:Nl,color:"#d9fff3",transparent:!0,blending:li,depthWrite:!1,opacity:.25}));m.scale.setScalar(7),m.position.y=.4,f.add(m),this.group.add(f),this.whirls.push({group:f,rings:d,speed:1.2,phase:this.rand()*5}),this.obstacles.push({type:"whirlpool",group:f,position:h.clone(),t:o,lat:l,radius:3.9,baseY:0,hit:!1})}}buildPickups(){const t=new be({color:"#5fe9ff",emissive:"#1b9ab5",emissiveIntensity:.8,roughness:.25}),e=new be({color:"#ffd356",emissive:"#b07c0a",emissiveIntensity:.65,roughness:.3}),i=new be({color:"#ffcf4d",emissive:"#a06b05",emissiveIntensity:.55,roughness:.22,metalness:.65}),n=new be({color:"#f4fff8",roughness:.35}),r=new he(.62,.62,.12,18);r.rotateX(Math.PI/2);const a=new Mr(.52,.06,6,18),o=new gr(.22,.45,4,8);for(const[l,c,h]of Y0){const f=this.track.getFrameAt(l),u=f.pos.clone().addScaledVector(f.left,c),d=new _e;d.position.copy(u);const m=new _e;d.add(m);let v="#7af3d5";if(h==="nitro"){const g=new it(o,t);g.position.y=.05,m.add(g);const x=new it(new he(.14,.16,.18,7),n);x.position.y=.44,m.add(x),v="#5fe9ff"}else if(h==="shield"){const g=new it(new bi(.62,1),e);m.add(g);const x=new it(new bi(.68,1),new ge({color:"#ffe7a1",wireframe:!0,transparent:!0,opacity:.35}));m.add(x),v="#ffd356"}else{const g=new it(r,i);m.add(g);const x=new it(a,i);x.position.z=0,m.add(x),v="#ffd94f"}const p=new cn(new Qi({map:Nl,color:v,transparent:!0,blending:li,depthWrite:!1,opacity:.7}));p.scale.setScalar(h==="coin"?2.2:2.7),p.position.y=.05,d.add(p),this.group.add(d),this.pickups.push({type:h,group:d,spin:m,halo:p,position:u.clone(),t:l,lat:c,active:!0,cooldown:0,baseY:1.25})}}buildRamps(){const t=new ie({color:"#a37643",flatShading:!0}),e=new ie({color:"#644426",flatShading:!0}),i=new ge({color:"#d8ff5d"}),n=new ge({color:"#ff7a48"});for(const r of this.track.rampTs){const a=this.track.getFrameAt(r),o=new _e;o.position.copy(a.pos),o.rotation.y=Math.atan2(a.tangent.x,a.tangent.z);const l=new it(new ae(10,.32,12),t);l.position.set(0,.78,0),l.rotation.x=-.23,o.add(l);const c=new it(new ae(10.4,.24,3.2),e);c.position.set(0,.32,-5.4),c.rotation.x=-.23,o.add(c);for(const h of[-1,1]){const f=new it(new ae(.2,.7,12),e);f.position.set(h*4.9,1.25,0),f.rotation.x=-.23,o.add(f);const u=new it(new he(.06,.08,3.4,5),e);u.position.set(h*4.6,1.9,4.6),o.add(u);const d=new it(new Ue(1.1,.6),i);d.position.set(h*5.2,3.2,4.6),d.rotation.y=Math.PI/2,o.add(d)}for(let h=0;h<5;h++){const f=new it(new ae(9.6,.035,.34),h%2?n:i);f.position.set(0,.96+.03,-4.2+h*1.8),f.rotation.x=-.23,o.add(f)}this.group.add(o),this.ramps.push({t:r,group:o,lateral:0,halfWidth:5.4,length:12})}}buildBuoys(){const e=new Bi(.32,7,5);e.scale(1,1.35,1);const i=new be({roughness:.45,metalness:.05}),n=new fi(e,i,92),r=new Yt,a=new xt;let o=0;for(let l=0;l<46;l++){const c=l/46,h=this.track.getFrameAt(c);for(const f of[-1,1]){const u=f*(h.width/2-1.1),d=h.pos.clone().addScaledVector(h.left,u);d.y=ai(d.x,d.z,0)+.16,r.compose(d,new Qe,new P(1,1,1)),n.setMatrixAt(o,r),a.set(l%2?"#ff8a3d":"#d8ff5d"),n.setColorAt(o,a),o++}}n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),this.group.add(n),this.buoys=n}reset(){for(const t of this.pickups)t.active=!0,t.cooldown=0,t.group.visible=!0;for(const t of this.obstacles)t.hit=!1}update(t,e){for(const i of this.pickups){if(!i.active){i.cooldown-=t,i.cooldown<=0&&(i.active=!0,i.group.visible=!0);continue}const n=ai(i.position.x,i.position.z,e)+i.baseY+Math.sin(e*2.2+i.t*17)*.16;i.group.position.set(i.position.x,n,i.position.z),i.spin.rotation.y+=t*1.6,i.spin.rotation.x=Math.sin(e*1.2+i.t*9)*.12,i.halo.material.opacity=.55+Math.sin(e*3+i.t*20)*.15}for(const i of this.obstacles)i.type==="log"?(i.group.position.y=Math.sin(e*1.25+i.phase)*.12,i.group.rotation.z=Math.sin(e*1.05+i.phase)*.035):i.type==="rock"&&(i.group.position.y=Math.sin(e*.9+i.t*30)*.05);for(const i of this.whirls)i.group.rotation.y+=t*i.speed,i.rings.forEach((n,r)=>{n.mesh.scale.setScalar(1+Math.sin(e*1.7+r+i.phase)*.06)});for(const i of this.flags)i.mesh.rotation.z=Math.sin(e*4+i.phase)*.12}collect(t,e=2.3){for(const i of this.pickups){if(!i.active)continue;const n=t.x-i.position.x,r=t.z-i.position.z;if(n*n+r*r<e*e)return i.active=!1,i.cooldown=13,i.group.visible=!1,i}return null}collide(t,e=!1){for(const i of this.obstacles){if(i.type==="rock"&&e)continue;const n=t.x-i.position.x,r=t.z-i.position.z,a=i.radius+.8;if(n*n+r*r<a*a)return i}return null}rampAt(t,e){for(const i of this.ramps)if(Math.abs((t-i.t+1.5)%1-.5)<.008&&Math.abs(e)<i.halfWidth)return i;return null}}const ns=new P;function ri(s,t,e,i,n,r){const a=2*Math.PI*n/4,o=Math.max(r-2*n,0),l=Math.PI/4;ns.copy(t),ns[i]=0,ns.normalize();const c=.5*a/(a+o),h=1-ns.angleTo(s)/l;return Math.sign(ns[e])===1?h*c:o/(a+o)+c+c*(1-h)}class Ji extends ae{constructor(t=1,e=1,i=1,n=2,r=.1){const a=n*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,h=new P(t,e,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,v=new P,p=.5/a;for(let g=0,x=0;g<f.length;g+=3,x+=2)switch(l.fromArray(f,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[g+0]=h.x*Math.sign(l.x)+c.x*r,f[g+1]=h.y*Math.sign(l.y)+c.y*r,f[g+2]=h.z*Math.sign(l.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/m)){case 0:v.set(1,0,0),d[x+0]=ri(v,c,"z","y",r,i),d[x+1]=1-ri(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),d[x+0]=1-ri(v,c,"z","y",r,i),d[x+1]=1-ri(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),d[x+0]=1-ri(v,c,"x","z",r,t),d[x+1]=ri(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),d[x+0]=1-ri(v,c,"x","z",r,t),d[x+1]=1-ri(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),d[x+0]=1-ri(v,c,"x","y",r,t),d[x+1]=1-ri(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),d[x+0]=ri(v,c,"x","y",r,t),d[x+1]=1-ri(v,c,"y","x",r,e);break}}static fromJSON(t){return new Ji(t.width,t.height,t.depth,t.segments,t.radius)}}const Fl=typeof document<"u"?ls(96):null;function Z0(){const s=[{z:-1.42,w:.46,deck:.24,mid:-.02,bottom:-.24,keel:-.34},{z:-1.1,w:.58,deck:.27,mid:-.03,bottom:-.27,keel:-.37},{z:-.55,w:.64,deck:.3,mid:-.03,bottom:-.3,keel:-.4},{z:.1,w:.63,deck:.31,mid:-.02,bottom:-.29,keel:-.39},{z:.65,w:.51,deck:.28,mid:0,bottom:-.23,keel:-.31},{z:1.08,w:.3,deck:.25,mid:.04,bottom:-.12,keel:-.16},{z:1.3,w:.08,deck:.28,mid:.15,bottom:.05,keel:.02}],t=8,e=[],i=[];for(let r=0;r<s.length;r++){const a=s[r],o=[[0,a.deck+.055],[-a.w,a.deck],[-a.w,a.mid],[-a.w*.72,a.bottom],[0,a.keel],[a.w*.72,a.bottom],[a.w,a.mid],[a.w,a.deck]];for(const[l,c]of o)e.push(l,c,a.z)}for(let r=0;r<s.length-1;r++)for(let a=0;a<t;a++){const o=r*t+a,l=r*t+(a+1)%t,c=(r+1)*t+a,h=(r+1)*t+(a+1)%t;i.push(o,c,l,l,c,h)}for(let r=1;r<t-1;r++)i.push(0,r+1,r);const n=new xe;return n.setAttribute("position",new Zt(e,3)),n.setIndex(i),n.computeVertexNormals(),n}const sa=Z0(),Ol=new Ji(.78,.3,1.25,3,.12),Bl=new Ji(.62,.32,.65,3,.1),zl=new he(.055,.075,.5,7),kl=new he(.038,.038,.9,6),Gl=new he(.05,.05,.18,6),Hl=new Ue(.72,.42),Vl=new he(.11,.16,.28,8),Wl=new Bi(1,12,8),$a=new gr(.12,.34,3,7),Jc=new he(.07,.082,1,6);function Ui(s,t,e,i){const n=new P().subVectors(t,s),r=n.length(),a=new it(e>.07?Jc:$a,i);return e>.07?a.scale.set(1,r,1):a.scale.set(e/.12,r/.58,e/.12),a.position.copy(s).addScaledVector(n,.5),a.quaternion.setFromUnitVectors(new P(0,1,0),n.normalize()),a}class Xl{constructor({c1:t="#7af3d5",c2:e="#0e7269",accent:i="#d8ff5d",trim:n="#f4fff9",rider:r=!0,riderColor:a="#ff8a3d",helmet:o="#f8f5e6"}={}){this.group=new _e,this.body=new _e,this.group.add(this.body),this.phase=Math.random()*Math.PI*2,this.speed=0,this.steer=0,this.drift=0,this.boost=0,this.airborne=!1,this.shieldOn=!1;const l=new be({color:n,roughness:.48,metalness:.08,flatShading:!0}),c=new be({color:t,roughness:.4,metalness:.1,flatShading:!0}),h=new be({color:"#172a27",roughness:.82,metalness:.02}),f=new be({color:e,roughness:.62,metalness:.02,flatShading:!0}),u=new be({color:"#9fb6b2",roughness:.3,metalness:.7}),d=new be({color:"#bfe9e0",roughness:.1,metalness:.2,transparent:!0,opacity:.34,side:oe}),m=new be({color:"#202b29",roughness:.8}),v=new be({color:"#c88154",roughness:.72}),p=new be({color:a,roughness:.65}),g=new be({color:o,roughness:.32,metalness:.08}),x=new be({color:"#142523",roughness:.1,metalness:.5});this.materials={hullMat:l,accentMat:c,darkMat:h,trimMat:f};const E=new it(sa,l);this.body.add(E);const b=new it(sa,f);b.scale.set(1.008,.72,1.002),b.position.y=-.17,this.body.add(b);for(const j of[-1,1]){const W=new it(new ae(.035,.12,2.05),c);W.position.set(j*.615,.06,.05),W.rotation.z=j*.12,this.body.add(W);const J=new it(new ae(.05,.06,1.6),h);J.position.set(j*.52,.315,-.25),this.body.add(J)}const T=new it(Ol,h);T.position.set(0,.43,-.3),this.body.add(T);const w=new it(new ae(.6,.04,.12),c);w.position.set(0,.59,-.28),this.body.add(w);const _=new it(Bl,f);_.position.set(0,.44,.38),_.rotation.x=-.13,this.body.add(_);const y=new it(new Ji(.46,.08,.34,2,.05),h);y.position.set(0,.58,.35),y.rotation.x=-.13,this.body.add(y);const D=new it(zl,u);D.position.set(0,.72,.55),D.rotation.x=.28,this.body.add(D);const C=new it(kl,u);C.rotation.z=Math.PI/2,C.position.set(0,.92,.49),this.body.add(C);for(const j of[-1,1]){const W=new it(Gl,m);W.rotation.z=Math.PI/2,W.position.set(j*.4,.92,.49),this.body.add(W)}const N=new it(Hl,d);N.position.set(0,.69,.62),N.rotation.x=-.54,this.body.add(N);const R=new it(new Ji(.68,.2,.4,2,.08),f);R.position.set(0,.45,.81),R.rotation.x=-.1,this.body.add(R);const O=new it(new ae(.28,.08,.55),c);O.position.set(0,.51,.92),O.rotation.x=-.1,this.body.add(O);const I=new it(new ae(.24,.06,.04),new ge({color:"#eaffb0"}));I.position.set(0,.38,1.13),this.body.add(I);const k=new it(Vl,u);k.rotation.x=Math.PI/2,k.position.set(0,.02,-1.48),this.body.add(k);const $=new it(new ae(.3,.06,.05),new ge({color:"#ff4a3d"}));$.position.set(0,.22,-1.42),this.body.add($);const H=new it(new Ji(.7,.055,.28,2,.03),h);if(H.position.set(0,.21,-1.28),this.body.add(H),r){this.rider=new _e;const j=.6,W=new it(new Bi(.23,8,6),p);W.scale.set(1.2,.85,1),W.position.set(0,j,-.36),this.rider.add(W);const J=new it($a,p);J.scale.set(1.6,1.35,1.2),J.position.set(0,j+.3,-.24),J.rotation.x=-.26,this.rider.add(J);const tt=new it(new ae(.42,.08,.28),new be({color:"#f8f5e6",roughness:.6}));tt.position.set(0,j+.35,-.12),tt.rotation.x=-.26,this.rider.add(tt);const wt=Ui(new P(0,j+.48,-.16),new P(0,j+.61,-.17),.06,v);this.rider.add(wt);const Dt=new it(Wl,g);Dt.scale.set(.21,.24,.22),Dt.position.set(0,j+.82,-.18),this.rider.add(Dt);const Y=new it(new ae(.27,.1,.08),x);Y.position.set(0,j+.82,-.02),Y.rotation.x=-.15,this.rider.add(Y);const pt=new P(-.24,j+.46,-.15),Mt=new P(.24,j+.46,-.15),Rt=new P(-.38,.96,.47),mt=new P(.38,.96,.47),Ut=new P(-.36,j+.3,.18),ue=new P(.36,j+.3,.18);this.rider.add(Ui(pt,Ut,.065,p),Ui(Ut,Rt,.058,v)),this.rider.add(Ui(Mt,ue,.065,p),Ui(ue,mt,.058,v));const Ct=new P(-.32,j+.04,.12),Jt=new P(.32,j+.04,.12),te=new P(-.3,.3,-.35),Ht=new P(.3,.3,-.35);this.rider.add(Ui(new P(-.17,j-.06,-.32),Ct,.09,h)),this.rider.add(Ui(new P(.17,j-.06,-.32),Jt,.09,h)),this.rider.add(Ui(Ct,te,.075,h)),this.rider.add(Ui(Jt,Ht,.075,h));const ve=new it(new Ji(.19,.14,.34,2,.05),h);ve.position.set(-.3,.26,-.43),this.rider.add(ve);const me=ve.clone();me.position.x=.3,this.rider.add(me),this.body.add(this.rider)}this.shield=new it(new bi(1.85,2),new ge({color:"#ffd356",transparent:!0,opacity:.11,blending:li,depthWrite:!1,side:oe})),this.shield.position.y=.55,this.shield.scale.set(1,.72,1.25),this.shield.visible=!1,this.group.add(this.shield),this.glow=new cn(new Qi({map:Fl,color:new xt("#65fff0"),transparent:!0,blending:li,depthWrite:!1,opacity:0})),this.glow.position.set(0,.15,-1.6),this.glow.scale.setScalar(1.9),this.group.add(this.glow),this.shadow=new it(new Ue(2.4,3.6),new ge({map:Fl,color:"#06221d",transparent:!0,opacity:.32,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=2,this.shadow.visible=!1}addTo(t){t.add(this.group),t.add(this.shadow)}setTransform(t,e,i,n,r={}){const{speed:a=0,steer:o=0,drift:l=0,boost:c=0,airborne:h=!1,shield:f=!1,stun:u=0,idle:d=!1}=r;this.speed=a,this.steer=o,this.drift=l,this.boost=c;const m=Math.sin(n*5.1+this.phase)*.045+Math.sin(n*2.3+this.phase*1.7)*.028;if(this.group.position.set(t.x,i+(h?0:.02)+m,t.z),this.group.rotation.y=e,this.group.rotation.x=h?-.12:Math.sin(n*3.4+this.phase)*.018+a/45*-.015,this.group.rotation.z=-o*.24-l*.12,this.rider&&(this.rider.rotation.z=-o*.2,this.rider.rotation.x=Math.sin(n*4.2+this.phase)*.012),this.shield.visible=f,f){const g=1+Math.sin(n*6)*.025;this.shield.scale.set(1*g,.72*g,1.25*g),this.shield.material.opacity=.1+Math.sin(n*5)*.03}const v=Math.max(0,c);this.glow.material.opacity=v>.02?.6+Math.sin(n*20)*.15:0,this.glow.scale.setScalar(1.5+v*1.1+Math.sin(n*16)*.16),this.glow.position.z=-1.6-v*.25,this.shadow.visible=!h,this.shadow.position.set(t.x,i+.06,t.z),this.shadow.rotation.z=-e;const p=h?.8:1;this.shadow.scale.setScalar(p),this.shadow.material.opacity=.3-Math.min(.14,a*.002),u>0?this.body.rotation.z=Math.sin(n*32)*.09*Math.min(1,u*2):this.body.rotation.z=0,d&&(this.group.position.y+=Math.sin(n*2.1+this.phase)*.02)}dispose(t){t.remove(this.group),t.remove(this.shadow),this.group.traverse(e=>{e.geometry&&![sa,Ol,Bl,zl,kl,Gl,Hl,Vl,Wl,$a,Jc].includes(e.geometry)&&e.geometry.dispose?.()})}}const qs=.981,ql=0;class J0{constructor(t,e){this.track=t,this.effects=e,this.position=new P,this.right=new P(1,0,0),this.forward=new P(0,0,1),this.events={},this.model=null,this.resetStats(),this.reset(3)}setModel(t){this.model=t}applyPerformance(t){this.perf=t,this.maxSpeed=38*t.speed,this.accel=13.2*t.speed,this.turnRate=1.78*t.handling,this.boostPower=10.5*t.boost}resetStats(){this.perf={speed:1,handling:1,boost:1},this.maxSpeed=38,this.accel=13.2,this.turnRate=1.78,this.boostPower=10.5,this.topSpeedSeen=0}reset(t=3){this.laps=t;const e=this.track.getFrameAt(qs);this.position.copy(e.pos).addScaledVector(e.left,ql),this.yaw=Math.atan2(e.tangent.x,e.tangent.z),this.speed=0,this.steerVisual=0,this.raceDist=(qs-1)*this.track.length,this.lastT=qs,this.prevT=qs,this.lastHint=null,this.lateral=ql,this.lap=0,this.nextGate=0,this.checkpoints=0,this.lastHint=null,this.finished=!1,this.finishTime=0,this.speed=0,this.stun=0,this.invuln=0,this.shieldTimer=0,this.nitro=12,this.boosting=!1,this.superTimer=0,this.boostVisual=0,this.driftActive=!1,this.driftAmount=0,this.driftCharge=0,this.driftDistance=0,this.airborne=!1,this.elevation=0,this.vy=0,this.jumpCooldown=0,this.jumpCount=0,this.boostCount=0,this.coins=0,this.waterY=0,this.time=0,this.trailTimer=0,this.sparkTimer=0,this.boostParticleTimer=0,this.collisionCooldown=0,this.lapStartTime=0,this.bestLap=null,this.lastLapTime=null,this.edgeTimer=0,this.active=!1}start(){this.active=!0}get displayLap(){return Gt(this.lap+1,1,this.laps)}get speedKmh(){return Math.round(this.speed*3.6)}get nitroReady(){return this.nitro>=99}get shielded(){return this.shieldTimer>0}jump(t=6.4,e=!1){return this.airborne||this.jumpCooldown>0||this.speed<4?!1:(this.airborne=!0,this.elevation=.15,this.vy=t,this.jumpCooldown=e?1.4:.9,e?(this.jumpCount++,this.events.onJump?.(!0)):this.events.onJump?.(!1),!0)}hitObstacle(t){return this.invuln>0||this.finished?"none":(this.invuln=1.35,this.shieldTimer>0?(this.shieldTimer=0,this.effects.shieldBreak(this.position.x,this.waterY,this.position.z),this.events.onShieldBreak?.(),"shield"):(this.speed*=.32,this.stun=.82,this.driftActive=!1,this.driftAmount=0,this.nitro=Math.max(0,this.nitro-8),this.effects.impact(this.position.x,this.waterY,this.position.z,1),this.events.onHit?.(t),"hit"))}givePickup(t){return t==="nitro"?(this.nitro=Gt(this.nitro+32,0,100),"nitro"):t==="shield"?(this.shieldTimer=8,"shield"):(this.coins++,"coin")}update(t,e,i,n){if(!this.active)return;this.time=i,this.jumpCooldown=Math.max(0,this.jumpCooldown-t),this.invuln=Math.max(0,this.invuln-t),this.collisionCooldown=Math.max(0,this.collisionCooldown-t),this.stun=Math.max(0,this.stun-t),this.shieldTimer=Math.max(0,this.shieldTimer-t),this.superTimer=Math.max(0,this.superTimer-t);const r=this.stun<=0&&!this.finished;let a=r?e.steer:0;this.airborne&&(a*=.55),this.steerVisual=$e(this.steerVisual,a,10,t);const o=this.speed/this.maxSpeed;let l=this.maxSpeed;const c=r&&e.nitroHeld&&this.nitro>.4&&!this.airborne&&this.speed>3;let h=!1;if(this.superTimer>0?(l+=this.boostPower*1.55,h=!0,this.nitro=Math.max(0,this.nitro-30*t)):c&&(l+=this.boostPower,h=!0,this.nitro=Math.max(0,this.nitro-19*t)),r&&e.consumeNitroTap()&&this.nitro>=99&&(this.superTimer=1.5,this.boosting&&(this.boostCount+=1),this.events.onSuperBoost?.()),h&&!this.boosting&&(this.events.onBoost?.(),this.boostCount+=1),this.boosting=h,this.boostVisual=$e(this.boostVisual,h?1:0,6,t),e.brakeHeld&&r&&!this.airborne)this.speed-=24*t,this.speed=Math.max(3,this.speed);else if(this.finished)this.speed=Math.max(0,this.speed-9*t);else if(r){const T=this.accel*(1+(1-o)*.28);this.speed+=T*t,this.speed>l&&(this.speed=$e(this.speed,l,4.5,t))}else this.speed=Math.max(0,this.speed-7*t);this.speed=Gt(this.speed,0,this.maxSpeed+this.boostPower*1.7);const f=r&&!this.airborne&&!e.brakeHeld&&Math.abs(a)>.58&&this.speed>this.maxSpeed*.4;if(this.driftAmount=$e(this.driftAmount,f?1:0,8,t),this.driftActive=f&&this.driftAmount>.35,this.driftActive){if(this.nitro=Gt(this.nitro+9.5*t,0,100),this.driftDistance+=this.speed*t,this.speed=Math.max(this.maxSpeed*.35,this.speed-this.speed*.055*t),this.driftCharge+=t,this.driftCharge>.7&&!this.wasDrifting&&this.events.onDriftStart?.(),this.wasDrifting=!0,this.sparkTimer-=t,this.sparkTimer<=0){this.sparkTimer=.035;const T=this.forward;this.right.set(T.z,0,-T.x);const w=a<0?-1:1;this.effects.driftSparks(this.position.x,this.waterY,this.position.z,this.yaw,w)}}else this.wasDrifting=!1,this.driftCharge=0;if(r&&!this.airborne){const T=.72+.28*(1-Gt(this.speed/this.maxSpeed,0,1)),w=this.driftActive?1.12:1,_=e.brakeHeld?1.25:1,y=this.turnRate*a*T*w*_;this.yaw+=y*t,this.stun>0&&(this.yaw+=Math.sin(i*30)*.02)}this.forward.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),this.right.set(this.forward.z,0,-this.forward.x),this.position.addScaledVector(this.forward,this.speed*t),this.driftActive&&this.position.addScaledVector(this.right,-Math.sign(a)*1.35*this.driftAmount*t);const u=this.lastHint,d=this.track.nearest(this.position,u);this.track.nearest(this.position,u);const m=d.t,v=.85*Gt(1-Math.abs(d.lateral)/(d.frame.width*.5),.2,1);this.position.addScaledVector(d.frame.tangent,v*t),this.position.addScaledVector(d.frame.left,Math.sin(m*Math.PI*8+i*.4)*.24*t);const p=this.track.nearest(this.position,this.lastHint);this.lastHint=p.index,this.lateral=p.lateral;const x=p.frame.width/2-1;if(Math.abs(p.lateral)>x){const T=Math.abs(p.lateral)-x,w=Math.sign(p.lateral);this.position.addScaledVector(p.frame.left,-w*Math.min(T,3)),this.speed*=1-Math.min(.9,T*.2+.07)*t*6,this.edgeTimer-=t,this.edgeTimer<=0&&this.speed>6&&(this.edgeTimer=.25,this.effects.splash(this.position.x,this.waterY,this.position.z,.4)),this.events.onEdge?.(T)}const E=this.track.deltaT(this.lastT,p.t);Math.abs(E)<.03&&(this.raceDist+=E*this.track.length),this.prevT=this.lastT,this.lastT=p.t;const b=this.lap*this.track.length;for(;this.nextGate<this.track.gateCount&&this.raceDist>=b+this.track.gateDistances[this.nextGate];)this.nextGate++,this.checkpoints++,this.onCheckpoint();if(this.raceDist>=(this.lap+1)*this.track.length&&this.lap<this.laps&&(this.nextGate>=this.track.gateCount?(this.lastLapTime=n-this.lapStartTime,this.bestLap=this.bestLap==null?this.lastLapTime:Math.min(this.bestLap,this.lastLapTime),this.lap++,this.nextGate=0,this.lapStartTime=n,this.events.onLap?.(this.lap,this.lastLapTime),this.lap>=this.laps&&(this.finished=!0,this.finishTime=n,this.active=!1,this.events.onFinish?.(n))):this.raceDist=Math.min(this.raceDist,(this.lap+1)*this.track.length-.5)),this.waterY=ai(this.position.x,this.position.z,i),this.airborne&&(this.elevation+=this.vy*t,this.vy-=21*t,this.elevation<=0)){const T=Math.abs(this.vy);this.elevation=0,this.airborne=!1,this.vy=0,this.effects.splash(this.position.x,this.waterY,this.position.z,Gt(T/8,.6,1.6)),this.events.onLand?.(T),this.nitro=Gt(this.nitro+4,0,100)}this.topSpeedSeen=Math.max(this.topSpeedSeen,this.speed),this.model&&this.model.setTransform(this.position,this.yaw,this.waterY,i,{speed:this.speed,steer:this.steerVisual,drift:this.driftAmount,boost:this.boostVisual,airborne:this.airborne,shield:this.shieldTimer>0,stun:this.stun}),this.trailTimer-=t,this.speed>3&&this.trailTimer<=0&&(this.trailTimer=.055,this.effects.emitWake(this.position.x,this.waterY,this.position.z,this.yaw,this.speed,1)),this.boostParticleTimer-=t,this.boosting&&this.boostParticleTimer<=0&&(this.boostParticleTimer=.035,this.effects.boostTrail(this.position.x,this.waterY,this.position.z,this.yaw))}onCheckpoint(){this.events.onCheckpoint?.(this.nextGate,this.track.gateCount)}}function Q0(s,t,e){const i=((t-s)%1+1)%1,n=((e-s)%1+1)%1;return n>0&&n<=i+1e-5}const Ka=[{name:"Kai",c1:"#ff8a3d",c2:"#c1401b",accent:"#ffd356",trim:"#ffeede",riderColor:"#ffd356",helmet:"#f8f5e6",base:36.7,lane:-6},{name:"Maya",c1:"#d8ff5d",c2:"#5c9a1d",accent:"#7af3d5",trim:"#f4ffe2",riderColor:"#16a58e",helmet:"#f8f5e6",base:37.4,lane:6},{name:"Nui",c1:"#ff72b6",c2:"#a22c6b",accent:"#ffe4f0",trim:"#fff4fa",riderColor:"#ff72b6",helmet:"#f8f5e6",base:36.2,lane:0},{name:"Tane",c1:"#8ca7ff",c2:"#344ba8",accent:"#c9f5ff",trim:"#eef4ff",riderColor:"#8ca7ff",helmet:"#f8f5e6",base:37,lane:-3},{name:"Lani",c1:"#ffc857",c2:"#b97a1e",accent:"#fff3c4",trim:"#fff9ec",riderColor:"#ff7a48",helmet:"#f8f5e6",base:35.7,lane:3}];class j0{constructor(t,e,i,n){this.index=t,this.profile=Ka[t%Ka.length],this.track=e,this.effects=i,this.model=n,this.position=new P,this.lane=this.profile.lane,this.targetLane=this.lane,this.time=0,this.reset(3,1,0)}reset(t,e=1,i=0){const n=[{t:.978,lat:-7.2},{t:.978,lat:7.2},{t:.969,lat:0},{t:.969,lat:-7.2},{t:.969,lat:7.2}],r=n[i%n.length];this.startT=r.t,this.raceDist=(r.t-1)*this.track.length,this.lateral=r.lat,this.targetLane=r.lat,this.lane=r.lat,this.laps=t,this.speed=0,this.baseSpeed=this.profile.base*(.965+e*.035),this.finished=!1,this.finishTime=0,this.stun=0,this.air=0,this.vy=0,this.airborne=!1,this.yaw=0,this.steerVisual=0,this.wakeTimer=Math.random()*.1,this.laneTimer=Math.random()*4,this.laneTarget=r.lat,this.bobPhase=Math.random()*6,this.jumpCheck=r.t;const a=this.track.getFrameAt(r.t);this.position.copy(a.pos).addScaledVector(a.left,r.lat),this.yaw=Math.atan2(a.tangent.x,a.tangent.z),this.model&&this.model.setTransform(this.position,this.yaw,0,0,{speed:0})}update(t,e,i,n){if(this.time=e,this.finished)this.speed=Math.max(0,this.speed-5*t),this.raceDist+=this.speed*t;else{const d=(this.raceDist/this.track.length%1+1)%1,m=this.track.getFrameAt(d),v=this.track.getFrameAt((d+.014)%1),p=Math.acos(Gt(m.tangent.dot(v.tangent),-1,1)),g=Gt(1-p*.55,.72,1),x=(i?.raceDist??0)-this.raceDist;let E=0;x>10?E=Gt(x*.025,0,3.2):x<-15&&(E=-Gt((-x-15)*.018,0,2.2));let b=this.baseSpeed*g+E;b=Gt(b,21,41),this.speed<b,this.speed=$e(this.speed,b,this.speed<b?2.2:5.5,t),this.speed=Gt(this.speed,0,42),this.raceDist+=this.speed*t,this.raceDist>=this.laps*this.track.length&&(this.finished=!0,this.finishTime=n?.time??0)}const r=(this.raceDist/this.track.length%1+1)%1,a=this.track.getFrameAt(r),o=a.width/2;if(this.laneTimer-=t,this.laneTimer<=0&&(this.laneTimer=3.4+Math.random()*3,this.laneTarget=(Math.random()-.5)*(o*1.15)),n?.objects){const d=n.objects.obstacles;for(const m of d){const v=(r-m.t+1)%1;if(v>.002&&v<.018&&Math.abs(m.lat-this.lateral)<5.2){this.laneTarget=Gt(m.lat+(m.lat>this.lateral?-5.5:5.5),-o+2,o-2);break}}}this.laneTarget=Gt(this.laneTarget,-o+2,o-2);const l=this.lateral;this.lateral=$e(this.lateral,this.laneTarget,.85,t);const c=(this.lateral-l)/Math.max(t,1e-4);this.steerVisual=$e(this.steerVisual,Gt(c*.15,-.45,.45),5,t);const h=a.pos.clone().addScaledVector(a.left,this.lateral);if(this.position.copy(h),this.yaw=Math.atan2(a.tangent.x,a.tangent.z),n?.objects&&!this.airborne&&this.index%2===0){for(const d of n.objects.ramps)if(Q0(this.jumpCheck,r,d.t)&&Math.abs(this.lateral)<d.halfWidth){this.airborne=!0,this.vy=5.6+Math.random()*1.4,this.air=.2;break}}this.jumpCheck=r;let f=0;this.airborne&&(this.air+=this.vy*t,this.vy-=20*t,f=Math.max(0,this.air),this.air<=0&&(this.airborne=!1,this.effects.splash(this.position.x,ai(this.position.x,this.position.z,e),this.position.z,.8)));const u=ai(this.position.x,this.position.z,e);this.model&&this.model.setTransform(this.position,this.yaw,u,e,{speed:this.speed,steer:this.steerVisual,drift:0,boost:0,airborne:this.airborne,shield:!1,stun:0}),this.model&&(this.model.group.position.y+=f,this.model.shadow.visible=!this.airborne),this.wakeTimer-=t,this.wakeTimer<=0&&!this.finished&&this.speed>4&&(this.wakeTimer=.16+Math.random()*.08,i&&this.position.distanceToSquared(i.position)<22500&&this.effects.emitWake(this.position.x,u,this.position.z,this.yaw,this.speed,.72))}get displayLap(){return Gt(Math.floor(this.raceDist/this.track.length)+1,1,this.laps)}}const tg=`
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  uniform float uScale;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(aSize * uScale / max(1.0, -mv.z), 1.0, 90.0);
  }
`,eg=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = length(p);
    if (d > 0.5) discard;
    float soft = smoothstep(0.5, 0.12, d);
    gl_FragColor = vec4(vColor, vAlpha * soft);
  }
`;class Yl{constructor(t,e,i){this.capacity=e,this.scene=t,this.cursor=0;const n=new xe;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.gravity=new Float32Array(e),this.drag=new Float32Array(e),this.grow=new Float32Array(e),this.baseAlpha=new Float32Array(e),this.baseSize=new Float32Array(e);for(let r=0;r<e;r++)this.alpha[r]=0;n.setAttribute("position",new ke(this.pos,3).setUsage(rs)),n.setAttribute("aColor",new ke(this.col,3).setUsage(rs)),n.setAttribute("aSize",new ke(this.size,1).setUsage(rs)),n.setAttribute("aAlpha",new ke(this.alpha,1).setUsage(rs)),this.geometry=n,this.material=new _i({vertexShader:tg,fragmentShader:eg,transparent:!0,depthWrite:!1,blending:i,uniforms:{uScale:{value:110}}}),this.points=new du(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=4,t.add(this.points)}spawn(t,e,i,n,r,a,o,l,c,h=0,f=.6,u=.4,d=.8){const m=this.cursor;this.cursor=(this.cursor+1)%this.capacity;const v=m*3;this.pos[v]=t,this.pos[v+1]=e,this.pos[v+2]=i,this.vel[v]=n,this.vel[v+1]=r,this.vel[v+2]=a,this.col[v]=o.r,this.col[v+1]=o.g,this.col[v+2]=o.b,this.size[m]=l,this.baseSize[m]=l,this.alpha[m]=d,this.baseAlpha[m]=d,this.life[m]=c,this.maxLife[m]=c,this.gravity[m]=h,this.drag[m]=f,this.grow[m]=u}update(t){for(let e=0;e<this.capacity;e++){if(this.life[e]<=0){this.alpha[e]!==0&&(this.alpha[e]=0);continue}this.life[e]-=t;const i=e*3,n=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=n*this.baseAlpha[e];const r=Math.exp(-this.drag[e]*t);this.vel[i]*=r,this.vel[i+2]*=r,this.vel[i+1]=this.vel[i+1]*r-this.gravity[e]*t,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t,this.size[e]=this.baseSize[e]*(1+(1-n)*this.grow[e]),this.life[e]<=0&&(this.alpha[e]=0)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aColor.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0}}const $l=new P,De=new P;class ig{constructor(t){this.scene=t,this.foam=new Yl(t,420,Nn),this.spark=new Yl(t,340,li),this.colors={foam:new xt("#e7f8e3"),foamDeep:new xt("#b7ddc9"),spark:new xt("#ffcf5e"),sparkHot:new xt("#ff7a48"),nitro:new xt("#6ffbe8"),shield:new xt("#ffd356"),coin:new xt("#ffd94f"),blue:new xt("#65cfff")},this.trailTimer=0,this.aiTimer=0}emitWake(t,e,i,n,r,a=1){De.set(Math.sin(n),0,Math.cos(n));const o=$l.set(De.z,0,-De.x),l=t-De.x*1.45,c=i-De.z*1.45,h=Math.min(1,r/28);for(const f of[-1,1]){const u=l+o.x*f*.52,d=c+o.z*f*.52;this.foam.spawn(u,e+.1,d,(Math.random()-.5)*1.2+o.x*f*(.5+h),.4+Math.random()*.8,(Math.random()-.5)*1.2+o.z*f*(.5+h),this.colors.foam,(.5+Math.random()*.7)*a,.55+Math.random()*.45,.3,1.2,2.4,.36+h*.2)}if(r>8){const f=1+Math.floor(h*3);for(let u=0;u<f;u++){const d=Math.random()<.5?-1:1;this.foam.spawn(l+o.x*d*.7,e+.2,c+o.z*d*.7,o.x*d*(1.2+Math.random()*2.2)-De.x*1.5,1.5+Math.random()*2.2,o.z*d*(1.2+Math.random()*2.2)-De.z*1.5,this.colors.foam,.18+Math.random()*.2,.4+Math.random()*.25,7.5,.8,-.4,.8)}}}driftSparks(t,e,i,n,r){De.set(Math.sin(n),0,Math.cos(n));const a=$l.set(De.z,0,-De.x);for(let o=0;o<2;o++){const l=Math.random()<.55?this.colors.spark:this.colors.sparkHot;this.spark.spawn(t+a.x*r*.58-De.x*.9,e+.25,i+a.z*r*.58-De.z*.9,a.x*r*(1+Math.random()*2)+(Math.random()-.5)*1.4,1.2+Math.random()*2.6,a.z*r*(1+Math.random()*2)+(Math.random()-.5)*1.4,l,.13+Math.random()*.12,.25+Math.random()*.3,8,.5,.4,1)}}boostTrail(t,e,i,n){De.set(Math.sin(n),0,Math.cos(n));for(let r=0;r<3;r++)this.spark.spawn(t-De.x*1.7+(Math.random()-.5)*.5,e+.15+(Math.random()-.5)*.3,i-De.z*1.7+(Math.random()-.5)*.5,-De.x*(4+Math.random()*4)+(Math.random()-.5)*2,.4+Math.random()*1.6,-De.z*(4+Math.random()*4)+(Math.random()-.5)*2,Math.random()<.5?this.colors.nitro:this.colors.blue,.2+Math.random()*.28,.35+Math.random()*.3,0,1.2,.8,.9)}splash(t,e,i,n=1){const r=Math.floor(22+n*34);for(let a=0;a<r;a++){const o=Math.random()*Math.PI*2,l=1.5+Math.random()*3.5;this.foam.spawn(t+Math.cos(o)*Math.random()*1.2,e+.15,i+Math.sin(o)*Math.random()*1.2,Math.cos(o)*l,2.5+Math.random()*(4.2*n),Math.sin(o)*l,Math.random()<.3?this.colors.foamDeep:this.colors.foam,.32+Math.random()*.55,.55+Math.random()*.5,9.5,.55,.5,.9)}for(let a=0;a<16;a++){const o=Math.random()*Math.PI*2;this.spark.spawn(t,e+.5,i,Math.cos(o)*(2+Math.random()*4),3+Math.random()*5,Math.sin(o)*(2+Math.random()*4),this.colors.foam,.15+Math.random()*.2,.5+Math.random()*.3,10,.7,.4,.55)}}pickupBurst(t,e,i,n){const r=n==="nitro"?this.colors.nitro:n==="shield"?this.colors.shield:this.colors.coin;for(let a=0;a<20;a++){const o=Math.random()*Math.PI*2,l=2.5+Math.random()*4.5;this.spark.spawn(t,e,i,Math.cos(o)*l,1+Math.random()*3.5,Math.sin(o)*l,r,.12+Math.random()*.18,.45+Math.random()*.35,2,1.6,.2,1)}}impact(t,e,i,n=1){for(let r=0;r<28;r++){const a=Math.random()*Math.PI*2,o=3+Math.random()*6;this.spark.spawn(t,e+.4,i,Math.cos(a)*o,1.5+Math.random()*4,Math.sin(a)*o,Math.random()<.4?this.colors.sparkHot:this.colors.spark,.16+Math.random()*.2,.35+Math.random()*.3,9,1.2,.3,.9*n)}this.splash(t,e,i,n*1.2)}shieldBreak(t,e,i){for(let n=0;n<32;n++){const r=Math.random()*Math.PI*2,a=Math.random()*Math.PI-Math.PI/2,o=3+Math.random()*4;this.spark.spawn(t,e+.7,i,Math.cos(r)*Math.cos(a)*o,Math.sin(a)*o+1.5,Math.sin(r)*Math.cos(a)*o,this.colors.shield,.16+Math.random()*.22,.5+Math.random()*.3,3,.8,.3,1)}}update(t){this.foam.update(t),this.spark.update(t)}clear(){for(const t of[this.foam,this.spark])t.life.fill(0),t.alpha.fill(0),t.geometry.attributes.aAlpha.needsUpdate=!0}setPixelScale(t){this.foam.material.uniforms.uScale.value=t,this.spark.material.uniforms.uScale.value=t}}const Kl=343;class ng{constructor(t){this.progress=t,this.ctx=null,this.ready=!1,this.muted=!t.settings.sound,this.paused=!1,this.noiseBuffer=null,this.birdTimer=6,this.boostAmount=0,this.lastSplash=0,this.buildWhenReady=!1}async unlock(){if(this.ctx)return this.ctx.state==="suspended"&&await this.ctx.resume().catch(()=>{}),!0;const t=window.AudioContext||window.webkitAudioContext;return t?(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.5,this.master.connect(this.ctx.destination),this.makeNoise(),this.buildEngine(),this.buildAmbience(),this.buildOpponent(),this.buildBoost(),this.ready=!0,await this.ctx.resume().catch(()=>{}),!0):!1}makeNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=e.getChannelData(0);for(let n=0;n<t;n++)i[n]=Math.random()*2-1;this.noiseBuffer=e}makeLoopNoise(){const t=this.ctx.createBufferSource();return t.buffer=this.noiseBuffer,t.loop=!0,t}buildEngine(){const t=this.ctx;this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.engineFilter=t.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=420,this.engineFilter.Q.value=2.5,this.engineGain.connect(this.engineFilter),this.engineFilter.connect(this.master),this.engineOsc=t.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=52,this.engineOsc.connect(this.engineGain),this.engineSub=t.createOscillator(),this.engineSub.type="square",this.engineSub.frequency.value=26;const e=t.createGain();e.gain.value=.35,this.engineSub.connect(e),e.connect(this.engineGain),this.engineTone=t.createOscillator(),this.engineTone.type="triangle",this.engineTone.frequency.value=104;const i=t.createGain();i.gain.value=.18,this.engineTone.connect(i),i.connect(this.engineGain),this.engineOsc.start(),this.engineSub.start(),this.engineTone.start();const n=this.makeLoopNoise();this.waterFilter=t.createBiquadFilter(),this.waterFilter.type="bandpass",this.waterFilter.frequency.value=620,this.waterFilter.Q.value=.6,this.waterGain=t.createGain(),this.waterGain.gain.value=.05,n.connect(this.waterFilter),this.waterFilter.connect(this.waterGain),this.waterGain.connect(this.master),n.start()}buildAmbience(){const t=this.ctx.createOscillator();t.type="sine",t.frequency.value=92;const e=this.ctx.createOscillator();e.type="sine",e.frequency.value=138.5,this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.value=.022;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=220,t.connect(i),e.connect(i),i.connect(this.ambientGain),this.ambientGain.connect(this.master),t.start(),e.start()}buildOpponent(){const t=this.ctx;this.oppGain=t.createGain(),this.oppGain.gain.value=0,this.oppPan=t.createStereoPanner?t.createStereoPanner():null,this.oppOsc=t.createOscillator(),this.oppOsc.type="sawtooth",this.oppOsc.frequency.value=58;const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=500,this.oppOsc.connect(e),this.oppPan?(e.connect(this.oppGain),this.oppGain.connect(this.oppPan),this.oppPan.connect(this.master)):(e.connect(this.oppGain),this.oppGain.connect(this.master)),this.oppOsc.start()}buildBoost(){const t=this.ctx;this.boostNoise=this.makeLoopNoise();const e=t.createBiquadFilter();e.type="bandpass",e.frequency.value=1200,e.Q.value=.9,this.boostGain=t.createGain(),this.boostGain.gain.value=0,this.boostNoise.connect(e),e.connect(this.boostGain),this.boostGain.connect(this.master),this.boostNoise.start(),this.boostFilter=e}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.5,this.ctx.currentTime,.15)}setPaused(t){if(this.paused=t,this.ready){const e=this.ctx.currentTime;this.engineGain.gain.setTargetAtTime(t?.02:.12,e,.2),this.waterGain.gain.setTargetAtTime(t?.01:.05,e,.2)}}update(t,e){if(!this.ready||!this.ctx)return;const{speed:i=0,maxSpeed:n=38,boosting:r=!1,active:a=!1,opponents:o,player:l,camera:c}=e,h=Gt(i/n,0,1.2),f=r?1:0;this.boostAmount=On(this.boostAmount,f,1-Math.exp(-6*t));const u=this.ctx.currentTime,d=a&&!this.paused?.1+h*.12:0;this.engineGain.gain.setTargetAtTime(d,u,.09),this.engineFilter.frequency.setTargetAtTime(340+h*1350+this.boostAmount*500,u,.09);const m=48+h*140+this.boostAmount*30;if(this.engineOsc.frequency.setTargetAtTime(m,u,.09),this.engineSub.frequency.setTargetAtTime(m*.5,u,.1),this.engineTone.frequency.setTargetAtTime(m*2.02,u,.09),this.waterGain.gain.setTargetAtTime(a&&!this.paused?.05+h*.055:.045,u,.25),this.waterFilter.frequency.setTargetAtTime(470+h*900,u,.2),this.boostGain.gain.setTargetAtTime(a&&!this.paused?this.boostAmount*.085:0,u,.08),this.boostFilter.frequency.setTargetAtTime(900+h*1200,u,.1),o&&l){let v=null,p=1/0;for(const g of o){if(g.finished)continue;const x=g.position.distanceToSquared(l.position);x<p&&(p=x,v=g)}if(v&&a&&!this.paused){const g=Math.sqrt(p),x=Gt(1-g/70,0,1)*.055;this.oppGain.gain.setTargetAtTime(x,u,.15);const E=v.position.x-l.position.x,b=v.position.z-l.position.z,T=Gt((E*Math.cos(l.yaw)-b*Math.sin(l.yaw))/Math.max(1,g),-1,1);this.oppPan?.pan.setTargetAtTime(T*.8,u,.15);const w=v.speed-l.speed,_=Gt(Kl/(Kl-Gt(w,-20,20)),.88,1.14);this.oppOsc.frequency.setTargetAtTime((55+Gt(v.speed/40,0,1)*105)*_,u,.1)}else this.oppGain.gain.setTargetAtTime(0,u,.2)}else this.oppGain?.gain.setTargetAtTime(0,u,.2);this.birdTimer-=t,this.birdTimer<=0&&a&&!this.paused&&(this.birdTimer=7+Math.random()*12,this.chirp())}tone(t,e,i="sine",n=.12,r=null,a=0){if(!this.ready||this.muted)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator();l.type=i,l.frequency.setValueAtTime(t,o),r&&l.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+e);const c=this.ctx.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(n,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+e+.03)}noiseBurst(t=.3,e=900,i=.15,n=.8){if(!this.ready||this.muted)return;const r=this.ctx,a=r.currentTime,o=r.createBufferSource();o.buffer=this.noiseBuffer;const l=r.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=n;const c=r.createGain();c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(i,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(c),c.connect(this.master),o.start(a),o.stop(a+t+.05)}chirp(){if(!this.ready||this.muted)return;const t=1300+Math.random()*900;this.tone(t,.09,"sine",.018,t*1.4),this.tone(t*1.2,.12,"sine",.012,t*.8,.1)}countdown(t){t>0?(this.tone(440,.16,"sine",.1,440),this.tone(880,.08,"triangle",.03)):(this.tone(880,.35,"sawtooth",.09,1320),this.tone(660,.5,"sine",.08))}splash(t=1){this.noiseBurst(.35+t*.25,650,.045+t*.06,.6)}hit(){this.noiseBurst(.28,220,.22,.9),this.tone(90,.25,"sine",.18,42)}coin(){this.tone(1180,.09,"triangle",.06),this.tone(1760,.12,"triangle",.045,null,.06)}pickup(t){t==="nitro"?(this.tone(560,.16,"sawtooth",.04,980),this.tone(840,.2,"sine",.035,1200,.04)):t==="shield"?(this.tone(520,.2,"triangle",.05,760),this.tone(780,.3,"sine",.035,1040,.08)):this.coin()}boost(){this.noiseBurst(.7,1600,.08,1.2),this.tone(130,.55,"sawtooth",.06,280)}jump(){this.tone(240,.25,"triangle",.05,460),this.noiseBurst(.18,900,.03,.7)}land(t=1){this.noiseBurst(.5,500,.07+t*.04,.8),this.tone(70,.2,"sine",.1,45)}lap(){this.tone(660,.12,"triangle",.06),this.tone(880,.12,"triangle",.06,null,.11),this.tone(1100,.22,"sine",.05,null,.22)}finish(t=!1){(t?[523,659,784,1046]:[440,554,659,880]).forEach((i,n)=>this.tone(i,.5,n===3?"sine":"triangle",.06,null,n*.13))}shieldBreak(){this.noiseBurst(.35,1400,.08,1.2),this.tone(900,.3,"triangle",.05,300)}ui(){this.tone(780,.06,"sine",.035)}splashIfReady(t){const e=performance.now();e-this.lastSplash>220&&(this.lastSplash=e,this.splash(t))}}class sg{constructor({onPause:t}={}){this.onPause=t,this.steer=0,this.steerTarget=0,this.nitroHeld=!1,this.brakeHeld=!1,this.jumpQueued=!1,this.nitroTapQueued=!1,this.controlScheme="joystick",this.joystickActive=!1,this.pointerId=null,this.keys=new Set,this.tiltRaw=0,this.tiltCenter=null,this.tiltSamples=[],this.tiltReady=!1,this.tiltPermission="unknown",this.tiltHandler=null,this.swipe=null,this.enabled=!1,this.joystickRadius=48,this.knobEl=null,this.joystickEl=null,this.bind()}bind(){this.joystickEl=document.getElementById("joystickZone"),this.knobEl=document.getElementById("joystickKnob"),this.nitroBtn=document.getElementById("nitroBtn"),this.brakeBtn=document.getElementById("brakeBtn"),this.bindJoystick(),this.bindHoldButton(this.nitroBtn,"nitro"),this.bindHoldButton(this.brakeBtn,"brake"),this.bindSwipe(),this.bindKeyboard(),window.addEventListener("blur",()=>this.reset()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()})}bindJoystick(){const t=this.joystickEl;if(!t)return;const e=n=>{const r=t.getBoundingClientRect(),a=r.left+r.width/2,o=r.top+r.height*.42;let l=n.clientX-a,c=n.clientY-o;const h=Math.min(r.width*.38,52),f=Math.hypot(l,c);f>h&&(l=l/f*h,c=c/f*h),this.steerTarget=Gt(l/h,-1,1),this.knobEl&&(this.knobEl.style.transform=`translate(${l}px, ${c}px)`)};t.addEventListener("pointerdown",n=>{!this.enabled||this.controlScheme!=="joystick"||(n.preventDefault(),this.joystickActive=!0,this.pointerId=n.pointerId,t.setPointerCapture(n.pointerId),e(n))}),t.addEventListener("pointermove",n=>{!this.joystickActive||n.pointerId!==this.pointerId||(n.preventDefault(),e(n))});const i=n=>{n.pointerId===this.pointerId&&(this.joystickActive=!1,this.pointerId=null,this.steerTarget=0,this.knobEl&&(this.knobEl.style.transform="translate(0px, 0px)"))};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("lostpointercapture",i)}bindHoldButton(t,e){if(!t)return;const i=r=>{this.enabled&&(r.preventDefault(),t.setPointerCapture?.(r.pointerId),t.classList.add("held"),e==="nitro"?(this.nitroHeld=!0,this.nitroTapQueued=!0):this.brakeHeld=!0)},n=r=>{r.preventDefault(),t.classList.remove("held"),e==="nitro"?this.nitroHeld=!1:this.brakeHeld=!1};t.addEventListener("pointerdown",i),t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("lostpointercapture",n),t.addEventListener("contextmenu",r=>r.preventDefault())}bindSwipe(){const t=document.getElementById("game-canvas");t&&(t.addEventListener("pointerdown",e=>{this.enabled&&(this.swipe={id:e.pointerId,x:e.clientX,y:e.clientY,time:performance.now()})}),t.addEventListener("pointerup",e=>{if(!this.enabled||!this.swipe||e.pointerId!==this.swipe.id)return;const i=e.clientY-this.swipe.y,n=e.clientX-this.swipe.x;performance.now()-this.swipe.time<650&&i<-54&&Math.abs(n)<95&&(this.jumpQueued=!0),this.swipe=null}),t.addEventListener("pointercancel",()=>{this.swipe=null}),t.addEventListener("contextmenu",e=>e.preventDefault()))}bindKeyboard(){window.addEventListener("keydown",t=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].includes(t.code)&&t.preventDefault(),this.keys.add(t.code),this.enabled&&((t.code==="Escape"||t.code==="KeyP")&&this.onPause?.(),t.code==="Space"&&(this.jumpQueued=!0),(t.code==="KeyN"||t.code==="ShiftLeft"||t.code==="ShiftRight")&&(this.nitroHeld=!0,this.nitroTapQueued=!0),(t.code==="KeyB"||t.code==="KeyS")&&(this.brakeHeld=!0))}),window.addEventListener("keyup",t=>{this.keys.delete(t.code),(t.code==="KeyN"||t.code==="ShiftLeft"||t.code==="ShiftRight")&&(this.nitroHeld=!1),(t.code==="KeyB"||t.code==="KeyS")&&(this.brakeHeld=!1)})}setEnabled(t){this.enabled=t,t||this.reset()}setControlScheme(t){this.controlScheme=t,t==="tilt"&&this.enableTilt()}async enableTilt(){if(this.tiltHandler)return!0;try{if(typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"){const t=await DeviceOrientationEvent.requestPermission();if(this.tiltPermission=t,t!=="granted")return!1}return this.tiltHandler=t=>{const e=screen.orientation&&screen.orientation.angle||window.orientation||0;let i=0;Math.abs(e)===90?i=t.beta??0:i=t.gamma??0,(e===-90||e===270)&&(i=-i),this.tiltRaw=i,this.tiltCenter==null&&(this.tiltSamples.push(i),this.tiltSamples.length>8&&(this.tiltCenter=this.tiltSamples.reduce((n,r)=>n+r,0)/this.tiltSamples.length,this.tiltReady=!0))},window.addEventListener("deviceorientation",this.tiltHandler,!0),this.tiltPermission="granted",!0}catch{return this.tiltPermission="denied",!1}}calibrateTilt(){this.tiltCenter=null,this.tiltSamples=[]}update(t){let e=0;if(this.controlScheme==="joystick")e=this.steerTarget,(this.keys.has("ArrowLeft")||this.keys.has("KeyA"))&&(e-=1),(this.keys.has("ArrowRight")||this.keys.has("KeyD"))&&(e+=1),e=Gt(e,-1,1);else{if(this.tiltReady){const i=this.tiltRaw-this.tiltCenter,n=1.8,r=Math.sign(i);e=Math.abs(i)<n?0:Gt((i-r*n)/16,-1,1)}(this.keys.has("ArrowLeft")||this.keys.has("KeyA"))&&(e-=1),(this.keys.has("ArrowRight")||this.keys.has("KeyD"))&&(e+=1),e=Gt(e,-1,1)}this.enabled||(e=0),this.steer=$e(this.steer,e,13,t)}consumeJump(){return this.jumpQueued?(this.jumpQueued=!1,!0):!1}consumeNitroTap(){return this.nitroTapQueued?(this.nitroTapQueued=!1,!0):!1}reset(){this.steer=0,this.steerTarget=0,this.nitroHeld=!1,this.brakeHeld=!1,this.jumpQueued=!1,this.nitroTapQueued=!1,this.joystickActive=!1,this.pointerId=null,this.keys.clear(),this.nitroBtn?.classList.remove("held"),this.brakeBtn?.classList.remove("held"),this.knobEl&&(this.knobEl.style.transform="translate(0px, 0px)")}}const dr=[{id:"reef",name:"Reef Runner",tag:"Balanced starter",price:0,speed:68,handling:72,boost:64,c1:"#7af3d5",c2:"#0e7269",accent:"#d8ff5d",trim:"#f4fff9",copy:"Light, forgiving and born for the shallows."},{id:"mango",name:"Mango Dart",tag:"Flickable",price:900,speed:65,handling:86,boost:68,c1:"#ffb03a",c2:"#c4491f",accent:"#ffe58a",trim:"#fff2dc",copy:"Razor turn-in. Slides through jungle chicanes."},{id:"storm",name:"Storm Ski",tag:"Top speed",price:1800,speed:83,handling:64,boost:77,c1:"#68c6ff",c2:"#203f91",accent:"#8ff5ff",trim:"#eef9ff",copy:"A straight-line weapon with a storm in its wake."},{id:"tiki",name:"Tiki Fury",tag:"Boost monster",price:2800,speed:76,handling:74,boost:91,c1:"#b6ff5a",c2:"#28752c",accent:"#ffd356",trim:"#f4ffe0",copy:"A carved river idol. Nitro is its heartbeat."},{id:"volcano",name:"Volcano",tag:"Endgame",price:4200,speed:91,handling:67,boost:84,c1:"#ff7a48",c2:"#7c1d24",accent:"#ffd356",trim:"#fff0e4",copy:"Lava-forged hull. Built to leave the pack behind."}],tr=[{id:"mangrove",name:"Mangrove Sprint",circuit:"Emerald Bend",desc:"Warm-up run through the palms. Find your line.",palette:"morning",laps:3,rivals:5,prize:260,unlockAfter:null,tag:"ROUND 01"},{id:"rapids",name:"Jungle Rapids",circuit:"The Narrows",desc:"Tight water, hidden logs and a low wooden bridge.",palette:"noon",laps:3,rivals:5,prize:420,unlockAfter:"mangrove",tag:"ROUND 02"},{id:"regatta",name:"Village Regatta",circuit:"Stilt Town",desc:"The whole village turns out. Don’t clip the docks.",palette:"sunset",laps:3,rivals:5,prize:620,unlockAfter:"rapids",tag:"ROUND 03"},{id:"storm",name:"Storm Run",circuit:"Thunder Chute",desc:"The final. Choppy water, low light, no excuses.",palette:"storm",laps:3,rivals:5,prize:950,unlockAfter:"regatta",tag:"FINAL"}],rg=[{type:"coins",name:"River loot",desc:"Collect {target} coins",target:25,reward:120,icon:"●"},{type:"drift",name:"Hold the carve",desc:"Drift for {target} m",target:700,reward:140,icon:"≈"},{type:"boost",name:"Blue flame",desc:"Trigger {target} nitro boosts",target:6,reward:130,icon:"▲"},{type:"jump",name:"Send it",desc:"Launch off {target} ramps",target:4,reward:110,icon:"↑"},{type:"races",name:"One more run",desc:"Finish {target} races",target:2,reward:150,icon:"⚑"},{type:"top3",name:"Podium chaser",desc:"Finish top 3 in {target} races",target:1,reward:160,icon:"★"},{type:"checkpoint",name:"Clean lines",desc:"Pass {target} checkpoints",target:24,reward:120,icon:"✓"}],ag=[100,150,200,250,300,400,600],Zl=[200,340,520,760,1080],og=()=>({control:"joystick",quality:"auto",sound:!0,haptics:!0}),Jl=()=>({version:1,coins:450,owned:["reef"],selected:"reef",upgrades:{reef:{speed:0,handling:0,boost:0}},career:{},bestTimes:{},daily:{lastClaim:null,streak:0},missions:null,stats:{races:0,wins:0,distance:0,bestLap:null},settings:og()}),ra=()=>{const s=new Date;return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`},Ql=()=>{const s=new Date;return s.setDate(s.getDate()-1),`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`};class lg{constructor(){this.save=this.load(),this.ensureMissions()}load(){const t=Jl();try{const e=localStorage.getItem("riverRush.save.v1");if(!e)return t;const i=JSON.parse(e),n={...t,...i,settings:{...t.settings,...i.settings||{}},daily:{...t.daily,...i.daily||{}},stats:{...t.stats,...i.stats||{}},upgrades:{...t.upgrades,...i.upgrades||{}}};return(!Array.isArray(n.owned)||!n.owned.length)&&(n.owned=["reef"]),n.owned.includes("reef")||n.owned.unshift("reef"),n.owned.includes(n.selected)||(n.selected=n.owned[0]),n}catch{return t}}persist(){try{localStorage.setItem("riverRush.save.v1",JSON.stringify(this.save))}catch{}}get settings(){return this.save.settings}get coins(){return this.save.coins}updateSettings(t){this.save.settings={...this.save.settings,...t},this.persist()}addCoins(t){this.save.coins=Math.max(0,Math.round(this.save.coins+t)),this.persist()}jetSki(t){return dr.find(e=>e.id===t)||dr[0]}selectedJetSki(){return this.jetSki(this.save.selected)}isOwned(t){return this.save.owned.includes(t)}buyJetSki(t){const e=this.jetSki(t);return!e||this.isOwned(t)||this.save.coins<e.price?!1:(this.save.coins-=e.price,this.save.owned.push(t),this.save.selected=t,this.save.upgrades[t]||(this.save.upgrades[t]={speed:0,handling:0,boost:0}),this.persist(),!0)}selectJetSki(t){return this.isOwned(t)?(this.save.selected=t,this.persist(),!0):!1}upgradesFor(t=this.save.selected){return this.save.upgrades[t]||{speed:0,handling:0,boost:0}}upgradeCost(t,e){const i=this.upgradesFor(t)[e]||0;return i>=5?null:Zl[i]}upgrade(t,e){if(!this.isOwned(t))return!1;const i=this.upgradesFor(t),n=i[e]||0;if(n>=5)return!1;const r=Zl[n];return this.save.coins<r?!1:(this.save.coins-=r,this.save.upgrades[t]={...i,[e]:n+1},this.persist(),!0)}effectiveStats(t=this.save.selected){const e=this.jetSki(t),i=this.upgradesFor(t);return{speed:Gt(e.speed+i.speed*2.3,0,100),handling:Gt(e.handling+i.handling*2.3,0,100),boost:Gt(e.boost+i.boost*2.3,0,100)}}performance(t=this.save.selected){const e=this.effectiveStats(t);return{speed:.94+(e.speed-60)*.0042,handling:.9+(e.handling-60)*.0052,boost:.9+(e.boost-60)*.005}}isCareerUnlocked(t){if(!t.unlockAfter)return!0;const e=this.save.career[t.unlockAfter];return!!(e&&e.place<=3)}careerUnlockedCount(){return tr.filter(t=>this.isCareerUnlocked(t)).length}recordCareer(t,e){const i=this.save.career[t]||{},n=i.place?Math.min(i.place,e.place):e.place,r=i.time?Math.min(i.time,e.time):e.time;this.save.career[t]={place:n,time:r,bestLap:i.bestLap?Math.min(i.bestLap,e.bestLap):e.bestLap,races:(i.races||0)+1},this.persist()}dailyAvailable(){return this.save.daily.lastClaim!==ra()}dailyDayIndex(){return this.dailyAvailable()?this.save.daily.lastClaim===Ql()?Gt((this.save.daily.streak||0)+1,1,7):1:Gt(this.save.daily.streak||1,1,7)}claimDaily(){if(!this.dailyAvailable())return null;const e=this.save.daily.lastClaim===Ql()?Math.min(7,(this.save.daily.streak||0)+1):1,i=ag[e-1];return this.save.daily.lastClaim=ra(),this.save.daily.streak=e,this.addCoins(i),{amount:i,day:e}}ensureMissions(){const t=ra();if(!this.save.missions||this.save.missions.date!==t){const e=Number(t.replace(/-/g,""))%997,i=[],n=[...rg];for(let r=0;r<3;r++){const a=(e*(r+3)+r*7)%n.length;i.push(n.splice(a,1)[0])}this.save.missions={date:t,list:i.map((r,a)=>({...r,id:`${t}-${a}`,claimed:!1,progress:0}))},this.persist()}return this.save.missions.list}get missions(){return this.ensureMissions()}missionReady(){return!!this.missions.find(e=>!e.claimed&&e.progress>=e.target)||this.dailyAvailable()}claimMission(t){const e=this.missions.find(i=>i.id===t);return!e||e.claimed||e.progress<e.target?null:(e.claimed=!0,this.addCoins(e.reward),e.reward)}recordRace({place:t,time:e,bestLap:i,topSpeed:n,coinsCollected:r,drift:a,boosts:o,jumps:l,checkpoints:c,mode:h,eventId:f}){if(this.save.stats.races=(this.save.stats.races||0)+1,t===1&&(this.save.stats.wins=(this.save.stats.wins||0)+1),i&&(!this.save.stats.bestLap||i<this.save.stats.bestLap)&&(this.save.stats.bestLap=i),h==="career"&&f)this.recordCareer(f,{place:t,time:e,bestLap:i});else if(h==="time"){const d=this.save.bestTimes.timeTrial;(!d||e<d)&&(this.save.bestTimes.timeTrial=e)}if(h==="quick"){const d=this.save.bestTimes.quick;(!d||e<d)&&(this.save.bestTimes.quick=e)}const u=this.ensureMissions();for(const d of u)d.claimed||(d.type==="coins"?d.progress+=r:d.type==="drift"?d.progress+=Math.round(a):d.type==="boost"?d.progress+=o:d.type==="jump"?d.progress+=l:d.type==="races"?d.progress+=1:d.type==="top3"?d.progress+=t<=3?1:0:d.type==="checkpoint"&&(d.progress+=c),d.progress=Math.min(d.progress,d.target));this.persist()}reset(){this.save=Jl(),this.persist()}}const ft=s=>document.getElementById(s),cg={speed:"Top speed",handling:"Handling",boost:"Nitro power"};function hg(s){return`
  <svg class="ski-svg" viewBox="0 0 340 180" aria-hidden="true">
    <ellipse cx="170" cy="146" rx="118" ry="13" fill="rgba(4,24,20,.32)"/>
    <path d="M44 112 L62 96 L128 84 L232 82 L282 96 L302 112 L282 128 L92 132 Z" fill="#0b2b27" opacity=".55"/>
    <path d="M48 104 L72 88 L142 77 L235 80 L284 94 L300 110 L278 123 L96 126 L56 118 Z" fill="var(--trim)"/>
    <path d="M58 108 L92 123 L252 120 L286 107 L276 98 L234 88 L137 85 L77 93 Z" fill="var(--c1)"/>
    <path d="M70 104 L148 90 L256 93 L270 101 L252 106 L104 110 Z" fill="rgba(255,255,255,.22)"/>
    <path d="M154 84 L195 66 L235 72 L220 88 Z" fill="#132a26"/>
    <path d="M177 77 L200 58 L246 58 L246 70 L208 82 Z" fill="var(--c2)"/>
    <path d="M190 63 Q208 50 226 59 Q232 68 222 78 L196 78 Q186 72 190 63 Z" fill="#132a26"/>
    <path d="M206 72 L246 58" stroke="#9fb6b2" stroke-width="5" stroke-linecap="round"/>
    <circle cx="247" cy="58" r="6" fill="#233a35"/>
    <path d="M160 86 L172 56 L192 55 L187 87 Z" fill="var(--trim)" opacity=".6"/>
    <path d="M124 96 L104 126" stroke="var(--c2)" stroke-width="3" opacity=".45"/>
    <path d="M264 101 L290 108" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="290" cy="109" r="4" fill="#eaffb0"/>
    <circle cx="122" cy="128" r="3" fill="#ff6b4a"/>
    <g opacity=".9">
      <path d="M180 54 Q184 32 200 32 Q214 32 215 49 Q214 60 200 60 Q185 60 180 54 Z" fill="#f8f5e6"/>
      <path d="M184 43 Q196 37 210 43 L210 49 Q197 44 184 48 Z" fill="#122723"/>
      <path d="M198 60 Q202 70 200 80 L214 82 Q216 66 210 60 Z" fill="var(--rider, #ff8a3d)"/>
      <path d="M202 62 L228 60" stroke="var(--rider, #ff8a3d)" stroke-width="9" stroke-linecap="round"/>
      <path d="M228 60 L246 58" stroke="#c88154" stroke-width="7" stroke-linecap="round"/>
    </g>
    <g fill="var(--accent)">
      <circle cx="94" cy="111" r="2.4"/><circle cx="108" cy="108" r="1.6"/><circle cx="268" cy="104" r="2"/>
    </g>
  </svg>`}class ug{constructor(t){this.game=t,this.progress=t.progress,this.hudAccum=0,this.messageTimer=null,this.toastTimer=null,this.swipeHintTimer=null,this.panelOpen=!1,this.activePanel=null,this.garagePreview=this.progress.save.selected,this.bind(),this.cacheMinimap(),this.refreshMenu()}bind(){const t=(e,i)=>ft(e)?.addEventListener("click",n=>{this.game.audio?.ui?.(),i(n)});t("quickRaceBtn",()=>this.game.startRace({mode:"quick"})),t("careerBtn",()=>this.openCareer()),t("timeTrialBtn",()=>this.game.startRace({mode:"time"})),t("garageBtn",()=>this.openGarage()),t("dailyBtn",()=>this.openDaily()),t("menuDailyBtn",()=>this.openDaily()),t("settingsBtn",()=>this.openSettings()),t("pauseBtn",()=>this.game.pause()),t("resumeBtn",()=>this.game.resume()),t("restartBtn",()=>this.game.restartRace()),t("pauseSettingsBtn",()=>this.openSettings(!0)),t("quitBtn",()=>this.game.quitToMenu()),t("againBtn",()=>this.game.restartRace()),t("resultsMenuBtn",()=>this.game.quitToMenu()),ft("panelLayer")?.addEventListener("pointerdown",e=>{e.target===ft("panelLayer")&&this.closePanel()}),ft("panelCard")?.addEventListener("click",e=>this.onPanelClick(e)),window.addEventListener("keydown",e=>{e.code==="Escape"&&this.panelOpen&&this.closePanel()}),document.addEventListener("pointerdown",()=>this.game.audio?.unlock?.(),{once:!0,capture:!0}),window.addEventListener("orientationchange",()=>setTimeout(()=>this.cacheMinimap(),250)),window.addEventListener("resize",()=>this.cacheMinimap())}refreshMenu(){ft("menuCoins").textContent=Ii(this.progress.coins);const t=this.progress.careerUnlockedCount();ft("careerBadge").textContent=`${t}/${tr.length}`;const e=this.progress.dailyAvailable()||this.progress.missions.some(i=>!i.claimed&&i.progress>=i.target);ft("dailyDot").classList.toggle("hidden",!this.progress.dailyAvailable()),ft("dailyBadge").classList.toggle("hidden",!e)}showMenu(){ft("menu").classList.remove("hidden"),ft("hud").classList.add("hidden"),ft("pause").classList.add("hidden"),ft("results").classList.add("hidden"),ft("countdown").classList.add("hidden"),ft("boostOverlay").classList.remove("active"),ft("slowmoOverlay").classList.remove("active"),this.closePanel(),this.refreshMenu()}showRaceHUD(t,e,i,n){ft("menu").classList.add("hidden"),ft("hud").classList.remove("hidden"),ft("hud").classList.toggle("tilt-mode",n==="tilt"),ft("modeChip").textContent=t==="career"?"CAREER":t==="time"?"TIME TRIAL":"QUICK RACE",ft("hudLap").nextElementSibling.textContent=`/${e}`,ft("hudPos").parentElement.querySelector("i").textContent=`/${i+1}`,ft("raceMessage").classList.remove("show"),ft("checkpointToast").classList.remove("show"),ft("swipeHint").classList.remove("hide"),clearTimeout(this.swipeHintTimer),this.swipeHintTimer=setTimeout(()=>ft("swipeHint").classList.add("hide"),8e3)}showCountdown(){ft("countdown").classList.remove("hidden"),ft("countdownValue").classList.remove("go")}updateCountdown(t,e){const i=ft("countdownValue");i.textContent=t,ft("countdownSub").textContent=e||"",i.classList.toggle("go",t==="GO!"),i.style.animation="none",i.offsetHeight,i.style.animation="",document.querySelectorAll(".start-lights i").forEach((r,a)=>r.classList.toggle("on",t!=="GO!"&&a<3-(Number(t)-1||0)))}hideCountdown(){ft("countdown").classList.add("hidden"),ft("countdownValue").classList.remove("go")}showRaceMessage(t,e="",i=1300,n=!1){const r=ft("raceMessage");r.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,r.classList.toggle("big",n),r.classList.add("show"),clearTimeout(this.messageTimer),i>0&&(this.messageTimer=setTimeout(()=>r.classList.remove("show"),i))}hideRaceMessage(){clearTimeout(this.messageTimer),ft("raceMessage").classList.remove("show")}checkpointToast(t){const e=ft("checkpointToast");e.textContent=t,e.classList.add("show"),clearTimeout(this.checkpointTimer),this.checkpointTimer=setTimeout(()=>e.classList.remove("show"),1700)}updateHUD(t){const{player:e,position:i,racers:n,time:r,lapTime:a,mode:o,boost:l,slowmo:c}=t,h=ft("hudPos");h.textContent=i,ft("hudLap").textContent=e.displayLap,ft("hudTimer").textContent=os(r),ft("hudLapTime").textContent=`LAP ${os(a)}`,ft("speedVal").textContent=e.speedKmh;const f=Gt(e.speed/(e.maxSpeed+e.boostPower),0,1),u=ft("speedArc");u.style.strokeDasharray=`${f*240} 321`;const d=Math.round(e.nitro);ft("nitroFill").style.width=`${d}%`,ft("nitroPct").textContent=`${d}%`,ft("nitroFill").closest(".nitro-wrap").classList.toggle("full",d>=99),ft("nitroBtn").classList.toggle("ready",d>=99),ft("driftTag").classList.toggle("hidden",!e.driftActive),ft("shieldTag").classList.toggle("hidden",e.shieldTimer<=0),e.shieldTimer>0&&(ft("shieldTime").textContent=`${Math.ceil(e.shieldTimer)}s`),ft("coinTag").classList.toggle("hidden",e.coins<=0),ft("raceCoins").textContent=e.coins,ft("boostOverlay").classList.toggle("active",l>.25),ft("slowmoOverlay").classList.toggle("active",c),ft("hud").classList.toggle("tilt-mode",this.game.controlScheme==="tilt"),this.hudAccum+=1,this.hudAccum%2===0&&this.drawMinimap(n,e,i)}cacheMinimap(){const t=this.game.track;if(!t)return;const e=[];for(let o=0;o<=240;o++){const l=t.getFrameAt(o/240);e.push({x:l.pos.x,z:l.pos.z})}let i=1/0,n=-1/0,r=1/0,a=-1/0;for(const o of e)i=Math.min(i,o.x),n=Math.max(n,o.x),r=Math.min(r,o.z),a=Math.max(a,o.z);this.mapBounds={minX:i,maxX:n,minZ:r,maxZ:a},this.mapPoints=e}mapXY(t,e){const r=this.mapBounds,a=r.maxX-r.minX,o=r.maxZ-r.minZ,l=156/Math.max(a,o),c=(r.minX+r.maxX)/2,h=(r.minZ+r.maxZ)/2;return{x:220/2+(t-c)*l,y:220/2+(e-h)*l}}drawMinimap(t,e,i){const n=ft("minimap");if(!n||!this.mapPoints)return;const r=n.getContext("2d"),a=220;r.clearRect(0,0,a,a),r.save(),r.beginPath(),r.arc(a/2,a/2,a/2-1,0,Math.PI*2),r.clip(),r.fillStyle="rgba(4,30,26,.42)",r.fillRect(0,0,a,a);const o=r.createRadialGradient(a/2,a/2,10,a/2,a/2,a/2);o.addColorStop(0,"rgba(58,125,88,.18)"),o.addColorStop(1,"rgba(10,48,38,.05)"),r.fillStyle=o,r.fillRect(0,0,a,a);const l=(u,d)=>{r.beginPath(),this.mapPoints.forEach((m,v)=>{const p=this.mapXY(m.x,m.z);v===0?r.moveTo(p.x,p.y):r.lineTo(p.x,p.y)}),r.closePath(),r.lineWidth=u,r.lineJoin="round",r.lineCap="round",r.strokeStyle=d,r.stroke()};l(17,"rgba(2,22,18,.55)"),l(12,"#2f6b5b"),l(7,"#72bda5"),l(2.5,"rgba(210,255,232,.5)");const c=this.game.track;c&&(r.fillStyle="rgba(216,255,93,.65)",c.gateFractions.forEach(u=>{const d=c.getFrameAt(u),m=this.mapXY(d.pos.x,d.pos.z);r.beginPath(),r.arc(m.x,m.y,2,0,Math.PI*2),r.fill()}));for(const u of t){if(u===e)continue;const d=this.mapXY(u.position.x,u.position.z);r.beginPath(),r.arc(d.x,d.y,3.6,0,Math.PI*2),r.fillStyle=u.profile?.c1||"#ff8a3d",r.fill(),r.strokeStyle="rgba(4,28,24,.8)",r.lineWidth=1.5,r.stroke()}const h=this.mapXY(i.x,i.z);r.save(),r.translate(h.x,h.y);const f=this.mapBounds;f.maxX-f.minX,f.maxZ-f.minZ,r.rotate(Math.atan2(Math.sin(e.yaw),Math.cos(e.yaw))),r.beginPath(),r.moveTo(0,-7.5),r.lineTo(5,5.5),r.lineTo(0,2.6),r.lineTo(-5,5.5),r.closePath(),r.fillStyle="#d8ff5d",r.shadowColor="rgba(216,255,93,.9)",r.shadowBlur=8,r.fill(),r.restore(),r.restore(),r.beginPath(),r.arc(a/2,a/2,a/2-1,0,Math.PI*2),r.strokeStyle="rgba(216,255,93,.18)",r.lineWidth=2,r.stroke()}showPause(){ft("pause").classList.remove("hidden")}hidePause(){ft("pause").classList.add("hidden")}showResults(t){const e=Dl(t.place);ft("resultKicker").textContent=t.kicker||"RACE COMPLETE",ft("resultOrdinal").textContent=e,ft("resultPlaceLabel").textContent=t.place===1?"CHAMPION":"PLACE",ft("resultTitle").textContent=t.title,ft("resultSub").textContent=t.sub,ft("resultTime").textContent=os(t.time),ft("resultBestLap").textContent=os(t.bestLap||0),ft("resultSpeed").textContent=Math.round(t.topSpeed),ft("rewardPrize").textContent=`+${Ii(t.prize)}`,ft("rewardCoins").textContent=`+${Ii(t.coins)}`,ft("rewardMissions").textContent=t.missionProgress??"—",ft("rewardTotal").textContent=Ii(t.total),ft("resultNew").classList.toggle("hidden",!t.newBest),ft("results").classList.remove("hidden"),ft("hud").classList.add("hidden"),ft("boostOverlay").classList.remove("active"),ft("slowmoOverlay").classList.remove("active"),this.refreshMenu()}hideResults(){ft("results").classList.add("hidden")}toast(t,e=1900){const i=ft("toast");i.textContent=t,i.classList.remove("hidden"),i.style.animation="none",i.offsetHeight,i.style.animation="",clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>i.classList.add("hidden"),e)}openPanel(t,e){this.panelOpen=!0,this.activePanel=e,ft("panelCard").innerHTML=t,ft("panelLayer").classList.remove("hidden")}closePanel(){this.panelOpen&&(this.panelOpen=!1,this.activePanel=null,ft("panelLayer").classList.add("hidden"),this.refreshMenu())}panelShell(t,e,i){return`
      <div class="panel-head">
        <div class="panel-head-left"><span class="panel-kicker">${t}</span><h2>${e}</h2></div>
        <div class="panel-head-right">
          <div class="pill-btn coin-pill"><span class="coin-glyph">●</span><span>${Ii(this.progress.coins)}</span></div>
          <button class="panel-close" data-close aria-label="Close">×</button>
        </div>
      </div>
      <div class="panel-body">${i}</div>`}onPanelClick(t){const e=t.target.closest("[data-action], [data-select], [data-buy], [data-upgrade], [data-event], [data-claim], [data-claim-mission], [data-close], [data-setting], [data-quality], [data-toggle], [data-calibrate], [data-reset]");if(!e)return;if(this.game.audio?.ui?.(),e.hasAttribute("data-close")){this.closePanel();return}const i=e.getAttribute("data-action");if(i==="open-career")return this.openCareer();if(i==="open-garage")return this.openGarage();if(i==="open-daily")return this.openDaily();if(i==="equip"){const n=e.getAttribute("data-select");this.progress.selectJetSki(n)&&(this.garagePreview=n,this.game.onJetSkiChanged(),this.game.audio.pickup("nitro"),this.toast(`${this.progress.jetSki(n).name} equipped`),this.openGarage());return}if(i==="claim-daily"){const n=this.progress.claimDaily();n&&(this.game.audio.pickup("coin"),this.toast(`Day ${n.day} gift claimed · +${n.amount} coins`),this.openDaily());return}if(e.hasAttribute("data-select")){this.garagePreview=e.getAttribute("data-select"),this.openGarage();return}if(e.hasAttribute("data-buy")){const n=e.getAttribute("data-buy");this.progress.buyJetSki(n)?(this.garagePreview=n,this.game.onJetSkiChanged(),this.game.audio.pickup("nitro"),this.toast(`${this.progress.jetSki(n).name} is yours`),this.openGarage()):this.toast("Not enough coins — win some races");return}if(e.hasAttribute("data-upgrade")){const n=e.getAttribute("data-upgrade");this.progress.upgrade(this.garagePreview,n)?(this.game.onJetSkiChanged(),this.game.audio.pickup("shield"),this.openGarage()):this.toast("Not enough coins for that upgrade");return}if(e.hasAttribute("data-event")){const n=e.getAttribute("data-event"),r=tr.find(a=>a.id===n);r&&this.progress.isCareerUnlocked(r)?(this.closePanel(),this.game.startRace({mode:"career",event:r})):this.toast("Finish the previous cup in the top 3 to unlock");return}if(e.hasAttribute("data-claim-mission")){const n=e.getAttribute("data-claim-mission"),r=this.progress.claimMission(n);r&&(this.game.audio.pickup("coin"),this.toast(`Mission complete · +${r} coins`),this.openDaily());return}if(e.hasAttribute("data-setting")){const n=e.getAttribute("data-setting");this.game.setControlScheme(n).then(r=>{r||this.toast("Tilt needs motion permission on this device"),this.openSettings(this.activePanel==="settings-pause")});return}if(e.hasAttribute("data-quality")){this.progress.updateSettings({quality:e.getAttribute("data-quality")}),this.game.setQuality(this.progress.settings.quality),this.openSettings(this.activePanel==="settings-pause");return}if(e.hasAttribute("data-toggle")){const n=e.getAttribute("data-toggle"),r=!this.progress.settings[n];this.progress.updateSettings({[n]:r}),n==="sound"&&this.game.audio.setMuted(!r),n==="haptics"&&r&&navigator.vibrate&&navigator.vibrate(30),this.openSettings(this.activePanel==="settings-pause");return}if(e.hasAttribute("data-calibrate")){this.game.input.calibrateTilt(),this.toast("Tilt centre calibrated — hold still");return}if(e.hasAttribute("data-reset")){window.confirm("Reset all coins, rides, upgrades and progress?")&&(this.progress.reset(),this.game.onJetSkiChanged(),this.closePanel(),this.refreshMenu(),this.toast("Progress reset"));return}}openCareer(){const t=tr.map(e=>{const i=this.progress.isCareerUnlocked(e),n=this.progress.save.career[e.id],r=hn[e.palette]||hn.morning,a=`linear-gradient(150deg, ${r.skyMid}, ${r.waterDeep} 70%, #082f28)`;return`
        <div class="career-row ${i?"":"locked"}">
          <div class="career-thumb" style="--thumb:${a}">
            <b>${e.tag.split(" ")[1]||e.tag}</b>
          </div>
          <div class="career-info">
            <h3>${e.name}</h3>
            <p>${e.desc}</p>
            <div class="career-tags">
              <span>${e.laps} LAPS</span><span>${e.rivals} RIVALS</span>
              <span class="gold">${Ii(e.prize)} COINS</span>
              ${n?`<span>BEST ${Dl(n.place)}</span>`:""}
            </div>
          </div>
          <div class="career-action">
            ${i?`<button class="btn btn-primary" data-event="${e.id}">RACE</button><small>${e.circuit}</small>`:'<span class="career-lock">🔒 TOP 3 PREVIOUS</span>'}
          </div>
        </div>`}).join("");this.openPanel(this.panelShell("CAREER MODE","River Cups",`
      <p class="panel-copy">Four legs down the wild river. Finish in the top three to open the next cup. Faster rides and smarter lines will be rewarded.</p>
      <div class="career-list">${t}</div>
      <p class="garage-note">Career prizes are paid out on every finish. Your best placement is kept.</p>
    `),"career")}openGarage(){const t=this.progress;dr.some(f=>f.id===this.garagePreview)||(this.garagePreview=t.save.selected);const e=t.jetSki(this.garagePreview),i=t.isOwned(e.id),n=t.save.selected===e.id,r=t.effectiveStats(e.id),a=t.upgradesFor(e.id),o=dr.map(f=>{const u=t.isOwned(f.id),d=t.save.selected===f.id;return`
        <button class="ski-item ${this.garagePreview===f.id?"active":""}" data-select="${f.id}" style="--c1:${f.c1};--c2:${f.c2}">
          <span class="ski-swatch" style="--c1:${f.c1};--c2:${f.c2}"></span>
          <span class="ski-item-text"><b>${f.name}</b><span>${f.tag}</span></span>
          ${u?d?'<span class="equipped">EQUIPPED</span>':"":`<span class="lock-price">● ${Ii(f.price)}</span>`}
        </button>`}).join(""),l=["speed","handling","boost"].map(f=>`
      <div class="stat-line">
        <span>${f==="boost"?"BOOST":f.toUpperCase()}</span>
        <div class="stat-track"><i style="width:${Math.round(r[f])}%"></i></div>
        <b>${Math.round(r[f])}</b>
      </div>`).join(""),c=["speed","handling","boost"].map(f=>{const u=a[f]||0,d=t.upgradeCost(e.id,f),m=Array.from({length:5},(v,p)=>`<i class="${p<u?"on":""}"></i>`).join("");return`
        <div class="upgrade-row">
          <div class="upgrade-info">
            <b>${cg[f]}</b>
            <div class="upgrade-pips">${m}</div>
            <small>Level ${u}/5 · +2.3 stat</small>
          </div>
          ${i?d==null?'<button class="upgrade-btn maxed" disabled>MAXED</button>':`<button class="upgrade-btn" data-upgrade="${f}" ${t.coins<d?"disabled":""}>● ${Ii(d)}</button>`:""}
        </div>`}).join(""),h=i?n?'<div class="buy-row"><button class="btn btn-glass" disabled>EQUIPPED</button></div>':`<div class="buy-row"><button class="btn btn-primary" data-select="${e.id}" data-action="equip"><span>EQUIP THIS RIDE</span></button></div>`:`<div class="buy-row">
           <button class="btn btn-primary" data-buy="${e.id}" ${t.coins<e.price?"disabled":""}><span>BUY · ${Ii(e.price)} COINS</span></button>
         </div>`;this.openPanel(this.panelShell("GARAGE","Pick your ride",`
      <div class="garage-layout">
        <div>
          <p class="section-label">Jetski fleet</p>
          <div class="ski-list">${o}</div>
          <p class="garage-note">Every hull has its own soul. Upgrades are permanent and carry into every mode.</p>
        </div>
        <div class="garage-detail">
          <div class="ski-preview" style="--c1:${e.c1};--c2:${e.c2};--accent:${e.accent};--trim:${e.trim};--rider:${e.c1}">
            ${hg()}
            <div class="preview-badge">${i?"OWNED":"LOCKED"}</div>
            <div class="preview-name">${e.name}</div>
          </div>
          <p class="panel-copy" style="margin-bottom:10px !important">${e.copy}</p>
          <div class="stat-grid">${l}</div>
          <p class="section-label">Upgrades</p>
          ${c}
          ${h}
        </div>
      </div>
    `),"garage")}openDaily(){const t=this.progress,e=t.dailyDayIndex(),i=t.dailyAvailable(),n=t.save.daily.streak||0,r=[100,150,200,250,300,400,600],a=r.map((l,c)=>{const h=i?c+1<e:c+1<=n;return`
        <div class="day-card ${c+1===e&&i?"today":""} ${h?"claimed":""}">
          <span>DAY ${c+1}</span>
          <span class="coin-glyph">●</span>
          <b>${l}</b>
        </div>`}).join(""),o=t.missions.map(l=>{const c=l.progress>=l.target,h=Math.min(100,Math.round(l.progress/l.target*100));return`
        <div class="mission-item">
          <div class="mission-icon">${l.icon}</div>
          <div class="mission-text">
            <b>${l.name}</b>
            <div class="mission-progress"><i style="width:${h}%"></i></div>
            <small>${l.desc.replace("{target}",l.target)} · ${Math.min(l.progress,l.target)}/${l.target}</small>
          </div>
          <div class="mission-reward">
            <span>+${l.reward}</span>
            ${l.claimed?"<button disabled>CLAIMED</button>":`<button data-claim-mission="${l.id}" ${c?"":"disabled"}>${c?"CLAIM":"LOCKED"}</button>`}
          </div>
        </div>`}).join("");this.openPanel(this.panelShell("DAILY CURRENT","River rewards",`
      <p class="panel-copy">The river pays its regulars. Claim your daily chest, then chase today’s three objectives in any race mode.</p>
      <div class="daily-rewards">${a}</div>
      <div class="daily-cta">
        <div class="daily-cta-info">
          <b>${i?`Day ${e} chest is ready`:"Chest claimed today"}</b>
          <span>${i?"Come back tomorrow to keep the streak alive.":`${n}-day streak · resets only if you miss a day.`}</span>
        </div>
        ${i?`<button class="btn btn-primary" data-action="claim-daily" style="min-height:42px;padding:0 16px;font-size:10px"><span>CLAIM +${r[e-1]}</span></button>`:'<button class="btn btn-glass" disabled style="min-height:42px;padding:0 16px;font-size:10px">CLAIMED</button>'}
      </div>
      <p class="section-label">Today’s missions</p>
      <div class="mission-list">${o}</div>
    `),"daily")}openSettings(t=!1){const e=this.progress.settings,i=(n,r,a)=>a.map(o=>`<button data-${n}="${o.value}" class="${e[r]===o.value?"active":""}">${o.label}</button>`).join("");this.openPanel(this.panelShell("SETTINGS","Tune the ride",`
      <div class="settings-grid">
        <div class="setting-row">
          <div class="setting-label"><b>Steering</b><span>Tilt uses your gyroscope. Joystick is thumb-first.</span></div>
          <div class="segmented">${i("setting","control",[{value:"joystick",label:"JOYSTICK"},{value:"tilt",label:"TILT"}])}</div>
        </div>
        <div class="setting-row">
          <div class="setting-label"><b>Quality</b><span>Auto adapts resolution to hold 60 FPS.</span></div>
          <div class="segmented">${i("quality","quality",[{value:"auto",label:"AUTO"},{value:"high",label:"HIGH"},{value:"low",label:"LOW"}])}</div>
        </div>
        <div class="setting-row">
          <div class="setting-label"><b>Sound</b><span>Engine, water and tropical ambience.</span></div>
          <button class="toggle ${e.sound?"on":""}" data-toggle="sound" aria-label="Toggle sound"></button>
        </div>
        <div class="setting-row">
          <div class="setting-label"><b>Haptics</b><span>Impact and boost vibration (supported devices).</span></div>
          <button class="toggle ${e.haptics?"on":""}" data-toggle="haptics" aria-label="Toggle haptics"></button>
        </div>
        <div class="setting-row">
          <div class="setting-label"><b>Tilt calibration</b><span>Hold your phone naturally, then tap.</span></div>
          <button class="upgrade-btn" data-calibrate style="min-height:34px">CALIBRATE</button>
        </div>
      </div>
      <p class="settings-note">Desktop: A / D or arrows to steer, Shift or N for nitro, Space to jump, S to brake. P or Esc pauses.</p>
      <button class="danger-link" data-reset>Reset all progress</button>
    `),t?"settings-pause":"settings")}}const jl=new P,tc=new P;function dg(s,t,e){const i=((t-s)%1+1)%1,n=((e-s)%1+1)%1;return n>0&&n<=i+1e-5}class fg{constructor(){this.canvas=document.getElementById("game-canvas"),this.progress=new lg,this.state="boot",this.mode="quick",this.careerEvent=null,this.laps=3,this.rivals=5,this.currentRace=null,this.controlScheme=this.progress.settings.control,this.quality=this.progress.settings.quality,this.worldTime=0,this.menuTime=0,this.raceTime=0,this.lapStart=0,this.lapTimes=[],this.timeScale=1,this.slowmoTimer=0,this.shake=0,this.resultDelay=0,this.pendingResult=null,this.playerPlace=1,this.hudTimer=0,this.menuLook=new P,this.cameraLook=new P,this.fpsAccum=0,this.fpsFrames=0,this.fps=60,this.pixelRatio=1,this.qualityScale=1,this.startingRace=!1,this.finishOrbit=0,this.setupRenderer(),this.setupWorld(),this.setupRacers(),this.setupServices(),this.setupCamera(),this.setupEvents(),this.enterMenu(!0),this.setQuality(this.quality),this.resize(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.state==="racing"||this.state==="countdown")&&this.pause()}),this.clock=new Tu,this.startLoop();const t=document.getElementById("loadingBar");t&&(t.style.width="100%"),setTimeout(()=>{document.getElementById("loading")?.classList.add("hidden"),this.ui.showMenu(),this.ui.hideResults()},550),window.__riverRush=this}setupRenderer(){this.renderer=new S0({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1,alpha:!1}),this.renderer.outputColorSpace=Ie,this.renderer.toneMapping=Qa,this.renderer.toneMappingExposure=1.04,this.renderer.setClearColor("#0a2c27"),this.scene=new tu,this.scene.fog=new oo("#b9dfc6",.00165),this.camera=new pi(62,1,.1,2400)}setupWorld(){this.track=new A0,this.effects=new ig(this.scene),this.water=new P0(this.track),this.scene.add(this.water.group),this.environment=new V0(this.scene,this.track),this.objects=new K0(this.scene,this.track),this.applyPalette("morning")}playerModel(){const t=this.progress.selectedJetSki();return new Xl({c1:t.c1,c2:t.c2,accent:t.accent,trim:t.trim,rider:!0,riderColor:t.c1,helmet:"#f8f5e6"})}setupRacers(){this.player=new J0(this.track,this.effects),this.player.applyPerformance(this.progress.performance()),this.player.setModel(this.playerModel()),this.player.model.addTo(this.scene),this.player.reset(this.laps),this.opponents=[];for(let t=0;t<5;t++){const e=Ka[t],i=new Xl({c1:e.c1,c2:e.c2,accent:e.accent,trim:e.trim,rider:!0,riderColor:e.riderColor,helmet:e.helmet});i.addTo(this.scene),i.group.visible=!1,i.shadow.visible=!1;const n=new j0(t,this.track,this.effects,i);n.reset(this.laps,1,t),this.opponents.push(n)}}setupServices(){this.input=new sg({onPause:()=>this.pause()}),this.audio=new ng(this.progress),this.ui=new ug(this),this.player.events={onCheckpoint:(t,e)=>{this.audio.ui(),this.ui.checkpointToast(`CHECKPOINT ${t}/${e}`),this.haptic(10)},onLap:(t,e)=>{t>=this.laps||(this.lapTimes.push(e),this.audio.lap(),this.ui.showRaceMessage(`LAP ${t+1}`,`LAP TIME ${os(e)}`,1500))},onFinish:t=>this.finishRace(t),onHit:()=>{this.shake=Math.max(this.shake,.7),this.haptic([40,30,70]),this.audio.hit(),this.ui.showRaceMessage("WIPEOUT","SHAKE IT OFF",900)},onShieldBreak:()=>{this.shake=Math.max(this.shake,.35),this.haptic([20,25,20]),this.audio.shieldBreak(),this.ui.showRaceMessage("SHIELD SAVED","ONE HIT ABSORBED",1e3)},onBoost:()=>{this.audio.boost(),this.haptic(35)},onSuperBoost:()=>{this.audio.boost(),this.haptic([20,20,50]),this.ui.showRaceMessage("SUPER BOOST","FULL TANK UNLEASHED",900,!0)},onJump:t=>{this.audio.jump(),t&&(this.shake=Math.max(this.shake,.3),this.ui.showRaceMessage("BIG AIR","SLOW MOTION",1100,!0))},onLand:t=>{this.audio.land(Gt(t/8,.4,1.4)),this.haptic(20),this.shake=Math.max(this.shake,Gt(t*.035,.1,.45))},onDriftStart:()=>{this.ui.toast("DRIFT · NITRO CHARGING",1100)},onEdge:()=>{this.haptic(8)}}}setupCamera(){this.cameraLook.set(0,0,0),this.fovTarget=62,this.camera.position.set(0,8,15)}setupEvents(){const t=()=>this.audio.unlock();window.addEventListener("pointerdown",t,{once:!0,capture:!0})}async startRace({mode:t="quick",event:e=null}={}){if(this.startingRace)return;this.startingRace=!0,this.audio.unlock(),this.ui.closePanel(),this.ui.hideResults(),this.ui.hidePause(),this.ui.hideRaceMessage(),this.mode=t,this.careerEvent=t==="career"?e:null,this.currentRace={mode:t,event:this.careerEvent},this.laps=3,this.rivals=t==="time"?0:5,this.controlScheme==="tilt"&&(await this.input.enableTilt()||(this.controlScheme="joystick",this.progress.updateSettings({control:"joystick"}),this.input.setControlScheme("joystick"),this.ui.toast("Motion unavailable — joystick enabled")));const i=t==="career"&&e?e.palette:t==="time"?"sunset":"morning";this.applyPalette(i),this.effects.clear?.(),this.objects.reset(),this.lapTimes=[],this.raceTime=0,this.lapStart=0,this.lapTimes=[],this.slowmoTimer=0,this.timeScale=1,this.shake=0,this.pendingResult=null,this.finishOrbit=0,this.player.applyPerformance(this.progress.performance()),this.player.reset(this.laps),this.player.model.group.visible=!0,this.player.model.shadow.visible=!0,this.player.model.setTransform(this.player.position,this.player.yaw,ai(this.player.position.x,this.player.position.z,this.worldTime),this.worldTime,{speed:0,idle:!0});const n=t==="career"&&e?1.35+e.palette.length*.05:1;for(let r=0;r<this.opponents.length;r++){const a=this.opponents[r];a.reset(this.laps,n,r);const o=r<this.rivals;a.model.group.visible=o,a.model.shadow.visible=o,o&&(this.track.getFrameAt(a.startT),a.model.setTransform(a.position,a.yaw,ai(a.position.x,a.position.z,this.worldTime),this.worldTime,{speed:0,idle:!0}))}this.ui.showRaceHUD(t,this.laps,this.rivals,this.controlScheme),this.ui.showCountdown(),this.ui.updateHUD(this.buildHUDState()),this.ui.updateCountdown(3,"HOLD THE LINE"),this.environment.setStartLights(3),this.input.setControlScheme(this.controlScheme),this.input.setEnabled(!1),this.state="countdown",this.countdown=3.55,this.countdownStage=3,this.goShown=!1,this.audio.setPaused(!1),this.snapCountdownCamera(),this.startingRace=!1}beginRace(){this.state==="countdown"&&(this.state="racing",this.raceTime=0,this.player.active=!0,this.player.lapStartTime=0,this.input.reset(),this.input.setEnabled(!0),this.environment.setStartLights(0),this.ui.updateCountdown("GO!","SEND IT"),this.audio.countdown(0),this.haptic([18,25,45]),this.ui.showRaceMessage("GO!","",850,!0),clearTimeout(this.goTimer),this.goTimer=setTimeout(()=>this.ui.hideCountdown(),820))}pause(){this.state!=="racing"&&this.state!=="countdown"||(this.pausedFrom=this.state,this.state="paused",this.input.setEnabled(!1),this.audio.setPaused(!0),this.ui.showPause())}resume(){this.state==="paused"&&(this.state=this.pausedFrom||"racing",this.ui.hidePause(),this.ui.closePanel(),this.input.setEnabled(this.state==="racing"),this.audio.setPaused(!1),this.clock.getDelta())}restartRace(){const t=this.currentRace;this.ui.hidePause(),this.ui.hideResults(),t&&this.startRace(t)}quitToMenu(){clearTimeout(this.goTimer),this.state="menu",this.player.active=!1,this.player.reset(this.laps),this.player.model.group.visible=!0,this.player.model.shadow.visible=!0,this.input.setEnabled(!1),this.input.reset(),this.ui.hidePause(),this.ui.hideResults(),this.ui.hideCountdown(),this.ui.hideRaceMessage(),this.ui.showMenu(),this.ui.closePanel(),this.ui.hideRaceMessage(),this.audio.setPaused(!1);for(const t of this.opponents)t.model.group.visible=!1,t.model.shadow.visible=!1;this.environment.setStartLights(0),this.applyPalette("morning"),this.ui.refreshMenu(),this.menuTime=0,this.scene.fog.density=.00165}enterMenu(t=!1){this.state="menu",this.input?.setEnabled(!1),this.player.active=!1,this.player.reset(this.laps),this.player.model.group.visible=!0,this.player.model.shadow.visible=!0;for(const e of this.opponents)e.model.group.visible=!1,e.model.shadow.visible=!1;this.ui?.showMenu(),this.applyPalette("morning"),t&&(this.menuTime=0,this.snapMenuCamera())}async setControlScheme(t){return t==="tilt"&&!await this.input.enableTilt()?(this.progress.updateSettings({control:"joystick"}),this.controlScheme="joystick",this.input.setControlScheme("joystick"),this.ui.toast("Motion access was not granted — joystick stays on"),!1):(this.controlScheme=t,this.input.setControlScheme(t),this.progress.updateSettings({control:t}),this.ui.refreshMenu(),!0)}setQuality(t){this.quality=t,this.qualityScale=1,this.applyQuality()}applyQuality(){let t=Math.min(window.devicePixelRatio||1,1.75);this.quality==="high"&&(t=Math.min(window.devicePixelRatio||1,2)),this.quality==="low"&&(t=1),this.maxDpr=t,this.pixelRatio=Math.max(.85,t*this.qualityScale),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.effects.setPixelScale(105*Math.min(this.pixelRatio,1.8)),this.environment.cloudMesh.count=this.quality==="low"?16:46,this.scene.fog.density=this.quality==="low"?.0022:.00165,this.quality==="high"&&(this.scene.fog.density=.0015)}resize(){this.isPortrait=window.innerHeight>window.innerWidth*1.02,this.camera.aspect=window.innerWidth/window.innerHeight,this.baseFov=this.isPortrait?70:62,this.camera.updateProjectionMatrix(),this.applyQuality(),this.ui?.cacheMinimap()}applyPalette(t){const e=hn[t]||hn.morning;this.paletteName=t,this.palette=e,this.water.applyPalette(e),this.environment.applyPalette(t),this.scene.fog.color.set(e.fog),this.scene.fog.density=this.quality==="low"?.0022:.00165,this.renderer.toneMappingExposure=t==="sunset"?1.11:t==="storm"?.94:1.04}onJetSkiChanged(){this.player.model&&this.player.model.dispose(this.scene);const t=this.playerModel();t.addTo(this.scene),t.group.visible=!0,t.shadow.visible=!0,this.player.setModel(t),this.player.applyPerformance(this.progress.performance()),this.player.model.setTransform(this.player.position,this.player.yaw,this.player.waterY,this.worldTime,{speed:0,idle:this.state==="menu"}),this.ui.refreshMenu()}getStandings(){const t=[this.player,...this.opponents];return t.sort((e,i)=>{const n=e.finished,r=i.finished;return n&&r?e.finishTime-i.finishTime:n?-1:r?1:i.raceDist-e.raceDist}),t}buildHUDState(){const t=this.getStandings();return this.playerPlace=t.indexOf(this.player)+1,{player:this.player,position:this.playerPlace,racers:t,time:this.raceTime,lapTime:Math.max(0,this.raceTime-this.player.lapStartTime),mode:this.mode,boost:this.player.boostVisual,slowmo:this.timeScale<.8}}startLoop(){const t=()=>{this.raf=requestAnimationFrame(t);const e=Math.min(this.clock.getDelta(),.05);this.tick(e),this.renderer.render(this.scene,this.camera)};t()}tick(t){this.menuTime+=t,this.fpsAccum+=t,this.fpsFrames++,this.fpsAccum>2.4&&(this.fps=this.fpsFrames/this.fpsAccum,this.fpsAccum=0,this.fpsFrames=0,this.quality==="auto"&&this.state==="racing"&&(this.fps<48&&this.qualityScale>.82?(this.qualityScale=Math.max(.82,this.qualityScale-.06),this.applyQuality()):this.fps>57&&this.qualityScale<1&&(this.qualityScale=Math.min(1,this.qualityScale+.04),this.applyQuality()))),this.timeScale=this.slowmoTimer>0?$e(this.timeScale,.42,7,t):$e(this.timeScale,1,4,t),this.slowmoTimer=Math.max(0,this.slowmoTimer-t);const e=t*this.timeScale;this.worldTime+=t*(this.slowmoTimer>0?.6:1),this.shake=Math.max(0,this.shake-t*1.8),this.input.update(t),this.state==="menu"?this.updateMenu(t):this.state==="countdown"?(this.updateCountdown(t),this.updateWorldIdle(t),this.updateCamera(t),this.ui.updateHUD(this.buildHUDState()),this.hudTimer=0,this.audio.update(t,{speed:0,maxSpeed:this.player.maxSpeed,active:!1,opponents:this.opponents,player:this.player})):this.state==="racing"?this.updateRace(e,t):this.state==="finished"?this.updateFinished(t):this.state==="results"?this.updateResults(t):this.state==="paused"&&this.water.update(this.worldTime),this.effects.update(this.state==="paused"?0:e)}updateMenu(t){this.water.update(this.worldTime),this.environment.update(this.worldTime,t),this.objects.update(t,this.worldTime);const e=ai(this.player.position.x,this.player.position.z,this.worldTime);this.player.waterY=e,this.player.model.setTransform(this.player.position,this.player.yaw,e,this.worldTime,{speed:0,steer:0,drift:0,boost:0,airborne:!1,shield:!1,stun:0,idle:!0}),this.updateMenuCamera(t),this.audio.update(t,{speed:0,maxSpeed:this.player.maxSpeed,active:!1,opponents:[],player:this.player})}updateCountdown(t){this.countdown-=t;const e=this.countdown;let i=3;e<=2.55&&(i=2),e<=1.55&&(i=1),e<=.55&&(i=0),i!==this.countdownStage&&(this.countdownStage=i,i>0?(this.ui.updateCountdown(i,i===1?"HOLD THE LINE":"READY"),this.environment.setStartLights(i),this.audio.countdown(i),this.ui.haptic?.()):this.beginRace()),i>0&&this.environment.setStartLights(i),this.water.update(this.worldTime),this.environment.update(this.worldTime,t),this.objects.update(t,this.worldTime),this.updateWorldIdle(t);for(let n=0;n<this.rivals;n++){const r=this.opponents[n];if(!r.model.group.visible)continue;const a=ai(r.position.x,r.position.z,this.worldTime);r.model.setTransform(r.position,r.yaw,a,this.worldTime,{speed:0,idle:!0})}}updateWorldIdle(t){this.player.model.setTransform(this.player.position,this.player.yaw,ai(this.player.position.x,this.player.position.z,this.worldTime),this.worldTime,{speed:0,steer:0,drift:0,boost:0,airborne:!1,shield:!1,stun:0,idle:!0})}updateRace(t,e){if(this.raceTime+=e,this.water.update(this.worldTime),this.environment.update(this.worldTime,e),this.objects.update(t,this.worldTime),this.player.update(t,this.input,this.worldTime,this.raceTime),this.player.speed>10&&!this.player.airborne){for(const r of this.objects.ramps)if(dg(this.player.prevT,this.player.lastT,r.t)&&Math.abs(this.player.lateral)<r.halfWidth){this.player.jump(7.6,!0)&&(this.slowmoTimer=.8,this.shake=Math.max(this.shake,.25),this.audio.jump(),this.haptic(30));break}}if(this.input.consumeJump()&&!this.player.airborne&&this.player.jump(6.2,!1),!this.player.airborne||this.player.elevation<1.5){const r=this.objects.collide(this.player.position,this.player.airborne&&this.player.elevation>1.5);r&&this.player.invuln<=0&&(this.player.hitObstacle(r),r.type==="whirlpool"&&(this.player.stun=Math.min(this.player.stun,.4)))}const i=this.objects.collect(this.player.position,2.6);if(i){const r=this.player.givePickup(i.type);this.effects.pickupBurst(i.position.x,ai(i.position.x,i.position.z,this.worldTime)+1.1,i.position.z,i.type),this.audio.pickup(r),this.haptic(r==="shield"?[15,20,30]:18),r==="nitro"?this.ui.toast("NITRO +32",1e3):r==="shield"&&(this.ui.toast("SHIELD · 8 SECONDS",1200),this.haptic(20))}for(let r=0;r<this.rivals;r++)this.opponents[r].update(t,this.worldTime,this.player,{time:this.raceTime,objects:this.objects});const n=this.player.nitro>=99;n&&!this.nitroWasFull&&(this.audio.tone?.(880,.2,"sine",.05,1200),this.ui.toast("NITRO READY · TAP TO UNLEASH",1300)),this.nitroWasFull=n,this.updateCamera(e),this.hudTimer-=e,this.hudTimer<=0&&(this.hudTimer=1/15,this.ui.updateHUD(this.buildHUDState())),this.audio.update(e,{speed:this.player.speed,maxSpeed:this.player.maxSpeed,boosting:this.player.boosting,active:!0,opponents:this.opponents,player:this.player}),this.player.finished&&this.state==="racing"&&this.finishRace(this.player.finishTime)}updateFinished(t){this.resultDelay-=t,this.water.update(this.worldTime),this.environment.update(this.worldTime,t),this.objects.update(t,this.worldTime),this.finishOrbit+=t*.28,this.updateOrbitCamera(this.finishOrbit,!1),this.audio.update(t,{speed:0,maxSpeed:this.player.maxSpeed,active:!1,opponents:this.opponents,player:this.player}),this.resultDelay<=0&&this.state==="finished"&&(this.state="results",this.ui.showResults(this.pendingResult))}updateResults(t){this.water.update(this.worldTime),this.environment.update(this.worldTime,t),this.objects.update(t,this.worldTime),this.finishOrbit+=t*.18,this.updateOrbitCamera(this.finishOrbit,!0),this.audio.update(t,{speed:0,maxSpeed:this.player.maxSpeed,active:!1,opponents:this.opponents,player:this.player})}finishRace(t){if(this.state==="finished"||this.state==="results")return;this.state="finished",this.player.active=!1,this.input.setEnabled(!1),this.ui.hideRaceMessage(),this.ui.showRaceMessage("FINISH","",1200,!0),this.resultDelay=1.75,this.slowmoTimer=.5,this.finishOrbit=0;let i=this.getStandings().indexOf(this.player)+1;this.mode==="time"&&(i=1);const n=t||this.raceTime,r=this.player.bestLap||0,a=this.player.topSpeedSeen||0,o=this.player.coins,l=this.player.driftDistance,c=Math.round(this.player.boostCount),h=this.player.jumpCount,f=this.player.checkpoints;let u=0;if(this.mode==="career"&&this.careerEvent){const y=[0,1,.62,.42,.28,.18,.12][i]??.1;u=Math.round(this.careerEvent.prize*y)}else this.mode==="time"?u=150:u=[0,240,170,120,90,65,45][i]??40;const d=u+o,m=this.mode==="time"?this.progress.save.bestTimes.timeTrial:this.mode==="quick"?this.progress.save.bestTimes.quick:this.progress.save.career[this.careerEvent?.id]?.time,v=!m||n<m,p=this.progress.careerUnlockedCount(),g=this.progress.missions.map(y=>y.progress);this.progress.recordRace({place:i,time:n,bestLap:r,topSpeed:a,coinsCollected:o,drift:l,boosts:c,jumps:h,checkpoints:f,mode:this.mode,eventId:this.careerEvent?.id}),this.progress.addCoins(d);const x=this.progress.careerUnlockedCount(),E=this.progress.missions,b=E.filter((y,D)=>y.progress>g[D]).length,T=E.filter(y=>!y.claimed&&y.progress>=y.target).length;let w="River champion",_="Untouchable. The current is yours.";i===2?(w="So close",_="One better line. One more boost."):i===3?(w="On the podium",_="The pack sees your spray now."):i>3&&(w="Keep carving",_="Study the current. Come back sharper."),this.mode==="time"&&(w=v?"New river record":"Time logged",_=v?"Your name is written in the current.":"Chase that ghost a little further."),x>p&&(_+=" Next cup unlocked."),this.pendingResult={kicker:this.mode==="career"&&this.careerEvent?this.careerEvent.name.toUpperCase():this.mode==="time"?"TIME TRIAL":"QUICK RACE",place:i,title:w,sub:_,time:n,bestLap:r,topSpeed:a,prize:d,coins:o,missionProgress:T>0?`${T} READY`:`${b} TRACKED`,total:d,newBest:v},this.ui.refreshMenu(),this.audio.finish(i===1),this.haptic(i===1?[25,40,25,40,70]:30),this.raceResult=this.pendingResult}haptic(t){this.progress.settings.haptics&&navigator.vibrate&&navigator.vibrate(t)}menuCameraPose(){const t=this.track.getFrameAt(.985),e=this.menuTime,i=t.pos.clone().addScaledVector(t.tangent,-8.5-Math.sin(e*.12)*1.1).addScaledVector(t.left,8.6+Math.sin(e*.09)*1.3);i.y=4.15+Math.sin(e*.16)*.25;const n=t.pos.clone().addScaledVector(t.tangent,16).addScaledVector(t.left,this.isPortrait?8.5:5);return n.y=1.4,{pos:i,look:n}}snapMenuCamera(){const t=this.menuCameraPose();this.camera.position.copy(t.pos),this.cameraLook.copy(t.look),this.camera.lookAt(this.cameraLook),this.camera.fov=this.baseFov||62,this.camera.updateProjectionMatrix()}updateMenuCamera(t){const e=this.menuCameraPose(),i=1-Math.exp(-2.6*t);this.camera.position.lerp(e.pos,i),this.cameraLook.lerp(e.look,i),this.camera.lookAt(this.cameraLook),this.camera.fov=$e(this.camera.fov,(this.baseFov||62)+1.5,2,t),this.camera.updateProjectionMatrix()}countdownCameraPose(){const t=this.player,e=jl.set(Math.sin(t.yaw),0,Math.cos(t.yaw)),i=tc.set(e.z,0,-e.x),n=this.isPortrait,r=(n?.5:.75)+Math.sin(this.menuTime*.24)*(n?.07:.18),a=n?5:7.4,o=n?7.8:7,l=t.position.clone().addScaledVector(i,Math.sin(r)*a).addScaledVector(e,-Math.cos(r)*o);l.y=(t.waterY||0)+(n?3.9:3.35);const c=t.position.clone().addScaledVector(e,n?6.5:5.5);return c.y=(t.waterY||0)+1.05,{pos:l,look:c}}snapCountdownCamera(){const t=this.countdownCameraPose();this.camera.position.copy(t.pos),this.cameraLook.copy(t.look),this.camera.lookAt(this.cameraLook),this.camera.fov=(this.baseFov||62)-3,this.camera.updateProjectionMatrix()}updateCamera(t){if(this.state==="countdown"){const m=this.countdownCameraPose(),v=1-Math.exp(-3.2*t);this.camera.position.lerp(m.pos,v),this.cameraLook.lerp(m.look,v),this.camera.lookAt(this.cameraLook),this.camera.fov=$e(this.camera.fov,(this.baseFov||62)-2,2,t),this.camera.updateProjectionMatrix();return}if(this.state!=="racing")return;const e=this.player,i=Gt(e.speed/40,0,1.1),n=jl.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),r=tc.set(n.z,0,-n.x),a=this.isPortrait,o=(a?10.2:8.7)+i*1.4,l=(a?4.65:3.95)+i*.45,c=e.airborne?e.elevation*.55:0,h=e.position.clone().addScaledVector(n,-o).addScaledVector(r,-e.steerVisual*.55);h.y=(e.waterY||0)+l+c;const f=e.position.clone().addScaledVector(n,10+i*7).addScaledVector(r,e.steerVisual*.6);f.y=(e.waterY||0)+1.15+(e.airborne?e.elevation*.4:0);const u=1-Math.exp(-6.2*t);if(this.camera.position.lerp(h,u),this.cameraLook.lerp(f,1-Math.exp(-7.5*t)),this.shake>.001){const m=this.shake*.55;this.camera.position.x+=(Math.random()-.5)*m,this.camera.position.y+=(Math.random()-.5)*m*.6,this.camera.position.z+=(Math.random()-.5)*m,this.cameraLook.y+=(Math.random()-.5)*m*.25}this.camera.lookAt(this.cameraLook);const d=(this.baseFov||62)+i*4+e.boostVisual*7;this.camera.fov=$e(this.camera.fov,d,4,t),this.camera.updateProjectionMatrix()}updateOrbitCamera(t,e){const i=this.player,n=i.position.clone();n.x+=Math.sin(t)*(e?8.2:9.4),n.z+=Math.cos(t)*(e?8.2:9.4),n.y=(i.waterY||0)+(e?4.1:3.6),this.camera.position.lerp(n,.06);const r=i.position.clone();r.y=(i.waterY||0)+1,this.cameraLook.lerp(r,.12),this.camera.lookAt(this.cameraLook),this.camera.fov=$e(this.camera.fov,(this.baseFov||62)+2,2,1/60),this.camera.updateProjectionMatrix()}}function pg(s){console.error("[River Rush] failed to start",s);const t=document.getElementById("loading");if(!t)return;t.classList.remove("hidden");const e=t.querySelector(".loading-tip");e&&(e.innerHTML="The current stalled. Reload to try again.",e.style.color="#ffb3a1");const i=document.getElementById("loadingBar");i&&(i.style.width="100%",i.style.background="#ff7a48")}function ec(){try{const s=new fg;window.riverRush=s}catch(s){pg(s)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ec,{once:!0}):ec();
