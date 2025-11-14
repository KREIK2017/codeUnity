(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wf="178",bo={ROTATE:0,DOLLY:1,PAN:2},go={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},F0=0,Xd=1,B0=2,Xf=1,cg=2,mr=3,Ar=0,Wn=1,Zi=2,qr=0,wo=1,Yd=2,jd=3,qd=4,k0=5,Ms=100,z0=101,V0=102,H0=103,G0=104,W0=200,X0=201,Y0=202,j0=203,yu=204,Mu=205,q0=206,K0=207,Z0=208,$0=209,J0=210,Q0=211,ev=212,tv=213,nv=214,Su=0,Eu=1,Tu=2,Fo=3,bu=4,wu=5,Au=6,Cu=7,Kc=0,iv=1,rv=2,Kr=0,sv=1,ov=2,av=3,hg=4,lv=5,cv=6,hv=7,Kd="attached",uv="detached",ug=300,Bo=301,ko=302,Ac=303,Ru=304,Zc=306,Qr=1e3,Ji=1001,Cc=1002,Xn=1003,fg=1004,pa=1005,ui=1006,uc=1007,Mr=1008,rr=1009,dg=1010,pg=1011,Va=1012,Yf=1013,Ds=1014,Gi=1015,hl=1016,jf=1017,qf=1018,Ha=1020,mg=35902,gg=1021,_g=1022,wi=1023,Ga=1026,Wa=1027,Kf=1028,Zf=1029,vg=1030,$f=1031,Jf=1033,fc=33776,dc=33777,pc=33778,mc=33779,Pu=35840,Lu=35841,Iu=35842,Du=35843,Uu=36196,Nu=37492,Ou=37496,Fu=37808,Bu=37809,ku=37810,zu=37811,Vu=37812,Hu=37813,Gu=37814,Wu=37815,Xu=37816,Yu=37817,ju=37818,qu=37819,Ku=37820,Zu=37821,gc=36492,$u=36494,Ju=36495,xg=36283,Qu=36284,ef=36285,tf=36286,fv=2200,nf=2201,dv=2202,Xa=2300,Ya=2301,ch=2302,_o=2400,vo=2401,Rc=2402,Qf=2500,pv=2501,mv=0,yg=1,rf=2,gv=3200,_v=3201,$c=0,vv=1,Hr="",ft="srgb",Pn="srgb-linear",Pc="linear",Et="srgb",Ys=7680,Zd=519,xv=512,yv=513,Mv=514,Mg=515,Sv=516,Ev=517,Tv=518,bv=519,sf=35044,$d="300 es",Sr=2e3,Lc=2001;class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jd=1234567;const Ta=Math.PI/180,zo=180/Math.PI;function Wi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function nt(s,e,t){return Math.max(e,Math.min(t,s))}function ed(s,e){return(s%e+e)%e}function wv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Av(s,e,t){return s!==e?(t-s)/(e-s):0}function ba(s,e,t){return(1-t)*s+t*e}function Cv(s,e,t,n){return ba(s,e,1-Math.exp(-t*n))}function Rv(s,e=1){return e-Math.abs(ed(s,e*2)-e)}function Pv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Lv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Iv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Dv(s,e){return s+Math.random()*(e-s)}function Uv(s){return s*(.5-Math.random())}function Nv(s){s!==void 0&&(Jd=s);let e=Jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ov(s){return s*Ta}function Fv(s){return s*zo}function Bv(s){return(s&s-1)===0&&s!==0}function kv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vv(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vt={DEG2RAD:Ta,RAD2DEG:zo,generateUUID:Wi,clamp:nt,euclideanModulo:ed,mapLinear:wv,inverseLerp:Av,lerp:ba,damp:Cv,pingpong:Rv,smoothstep:Pv,smootherstep:Lv,randInt:Iv,randFloat:Dv,randFloatSpread:Uv,seededRandom:Nv,degToRad:Ov,radToDeg:Fv,isPowerOfTwo:Bv,ceilPowerOfTwo:kv,floorPowerOfTwo:zv,setQuaternionFromProperEuler:Vv,normalize:Mt,denormalize:Vi};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==m){let g=1-a;const p=l*f+c*d+h*m+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,p*y);g=Math.sin(g*w)/A,a=Math.sin(a*w)/A}const v=a*y;if(l=l*g+f*v,c=c*g+d*v,h=h*g+m*v,u=u*g+_*v,g===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new R,Qd=new Ft;class Qe{constructor(e,t,n,i,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],y=i[1],x=i[4],v=i[7],A=i[2],w=i[5],b=i[8];return r[0]=o*_+a*y+l*A,r[3]=o*g+a*x+l*w,r[6]=o*p+a*v+l*b,r[1]=c*_+h*y+u*A,r[4]=c*g+h*x+u*w,r[7]=c*p+h*v+u*b,r[2]=f*_+d*y+m*A,r[5]=f*g+d*x+m*w,r[8]=f*p+d*v+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uh.makeScale(e,t)),this}rotate(e){return this.premultiply(uh.makeRotation(-e)),this}translate(e,t){return this.premultiply(uh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new Qe;function Sg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ja(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hv(){const s=ja("canvas");return s.style.display="block",s}const ep={};function Ao(s){s in ep||(ep[s]=!0,console.warn(s))}function Gv(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Wv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tp=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),np=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yv(){const s={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(i.r=br(i.r),i.g=br(i.g),i.b=br(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(i.r=Co(i.r),i.g=Co(i.g),i.b=Co(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hr?Pc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ao("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ao("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pn]:{primaries:e,whitePoint:n,transfer:Pc,toXYZ:tp,fromXYZ:np,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:tp,fromXYZ:np,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),s}const Ze=Yv();function br(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Co(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let js;class jv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{js===void 0&&(js=ja("canvas")),js.width=e.width,js.height=e.height;const i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=br(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(br(t[n]/255)*255):t[n]=br(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qv=0;class td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fh(i[o].image)):r.push(fh(i[o]))}else r=fh(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function fh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kv=0;const dh=new R;class hn extends rs{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Ji,i=Ji,r=ui,o=Mr,a=wi,l=rr,c=hn.DEFAULT_ANISOTROPY,h=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Wi(),this.name="",this.source=new td(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=ug;hn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,A=(p+1)/2,w=(h+f)/4,b=(u+_)/4,C=(m+g)/4;return x>v&&x>A?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=b/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=b/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zv extends rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new hn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new td(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends Zv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Eg extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $v extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ni):Ni.fromBufferAttribute(r,o),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xl.copy(n.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),yl.subVectors(this.max,na),qs.subVectors(e.a,na),Ks.subVectors(e.b,na),Zs.subVectors(e.c,na),Ir.subVectors(Ks,qs),Dr.subVectors(Zs,Ks),as.subVectors(qs,Zs);let t=[0,-Ir.z,Ir.y,0,-Dr.z,Dr.y,0,-as.z,as.y,Ir.z,0,-Ir.x,Dr.z,0,-Dr.x,as.z,0,-as.x,-Ir.y,Ir.x,0,-Dr.y,Dr.x,0,-as.y,as.x,0];return!ph(t,qs,Ks,Zs,yl)||(t=[1,0,0,0,1,0,0,0,1],!ph(t,qs,Ks,Zs,yl))?!1:(Ml.crossVectors(Ir,Dr),t=[Ml.x,Ml.y,Ml.z],ph(t,qs,Ks,Zs,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new R,new R,new R,new R,new R,new R,new R,new R],Ni=new R,xl=new Di,qs=new R,Ks=new R,Zs=new R,Ir=new R,Dr=new R,as=new R,na=new R,yl=new R,Ml=new R,ls=new R;function ph(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ls.fromArray(s,r);const a=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Jv=new Di,ia=new R,mh=new R;class ar{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(mh)),this.expandByPoint(ia.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hr=new R,gh=new R,Sl=new R,Ur=new R,_h=new R,El=new R,vh=new R;class $o{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gh.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(gh);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Sl),a=Ur.dot(this.direction),l=-Ur.dot(Sl),c=Ur.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(gh).addScaledVector(Sl,f),d}intersectSphere(e,t){hr.subVectors(e.center,this.origin);const n=hr.dot(this.direction),i=hr.dot(hr)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,n,i,r){_h.subVectors(t,e),El.subVectors(n,e),vh.crossVectors(_h,El);let o=this.direction.dot(vh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ur.subVectors(this.origin,e);const l=a*this.direction.dot(El.crossVectors(Ur,El));if(l<0)return null;const c=a*this.direction.dot(_h.cross(Ur));if(c<0||l+c>o)return null;const h=-a*Ur.dot(vh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,m,_,g){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,_,g)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qv,e,ex)}lookAt(e,t,n){const i=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Nr.crossVectors(n,ii),Nr.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Nr.crossVectors(n,ii)),Nr.normalize(),Tl.crossVectors(ii,Nr),i[0]=Nr.x,i[4]=Tl.x,i[8]=ii.x,i[1]=Nr.y,i[5]=Tl.y,i[9]=ii.y,i[2]=Nr.z,i[6]=Tl.z,i[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],x=n[7],v=n[11],A=n[15],w=i[0],b=i[4],C=i[8],S=i[12],M=i[1],L=i[5],N=i[9],B=i[13],W=i[2],K=i[6],H=i[10],j=i[14],z=i[3],ee=i[7],I=i[11],le=i[15];return r[0]=o*w+a*M+l*W+c*z,r[4]=o*b+a*L+l*K+c*ee,r[8]=o*C+a*N+l*H+c*I,r[12]=o*S+a*B+l*j+c*le,r[1]=h*w+u*M+f*W+d*z,r[5]=h*b+u*L+f*K+d*ee,r[9]=h*C+u*N+f*H+d*I,r[13]=h*S+u*B+f*j+d*le,r[2]=m*w+_*M+g*W+p*z,r[6]=m*b+_*L+g*K+p*ee,r[10]=m*C+_*N+g*H+p*I,r[14]=m*S+_*B+g*j+p*le,r[3]=y*w+x*M+v*W+A*z,r[7]=y*b+x*L+v*K+A*ee,r[11]=y*C+x*N+v*H+A*I,r[15]=y*S+x*B+v*j+A*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],y=u*g*c-_*f*c+_*l*d-a*g*d-u*l*p+a*f*p,x=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,v=h*_*c-m*u*c+m*a*d-o*_*d-h*a*p+o*u*p,A=m*u*l-h*_*l-m*a*f+o*_*f+h*a*g-o*u*g,w=t*y+n*x+i*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=y*b,e[1]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*p-n*f*p)*b,e[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*p+n*l*p)*b,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*b,e[4]=x*b,e[5]=(h*g*r-m*f*r+m*i*d-t*g*d-h*i*p+t*f*p)*b,e[6]=(m*l*r-o*g*r-m*i*c+t*g*c+o*i*p-t*l*p)*b,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*b,e[8]=v*b,e[9]=(m*u*r-h*_*r-m*n*d+t*_*d+h*n*p-t*u*p)*b,e[10]=(o*_*r-m*a*r+m*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*b,e[12]=A*b,e[13]=(h*_*i-m*u*i+m*n*f-t*_*f-h*n*g+t*u*g)*b,e[14]=(m*a*i-o*_*i-m*n*l+t*_*l+o*n*g-t*a*g)*b,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,_=o*h,g=o*u,p=a*u,y=l*c,x=l*h,v=l*u,A=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*A,i[1]=(d+v)*A,i[2]=(m-x)*A,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(m+x)*b,i[9]=(g-y)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=$s.set(i[0],i[1],i[2]).length();const o=$s.set(i[4],i[5],i[6]).length(),a=$s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Oi.copy(this);const c=1/r,h=1/o,u=1/a;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=u,Oi.elements[9]*=u,Oi.elements[10]*=u,t.setFromRotationMatrix(Oi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Sr){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,m;if(a===Sr)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Lc)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Sr){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,d=(n+i)*h;let m,_;if(a===Sr)m=(o+r)*u,_=-2*u;else if(a===Lc)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $s=new R,Oi=new Ce,Qv=new R(0,0,0),ex=new R(1,1,1),Nr=new R,Tl=new R,ii=new R,ip=new Ce,rp=new Ft;class tn{constructor(e=0,t=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ip,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tx=0;const sp=new R,Js=new Ft,ur=new Ce,bl=new R,ra=new R,nx=new R,ix=new Ft,op=new R(1,0,0),ap=new R(0,1,0),lp=new R(0,0,1),cp={type:"added"},rx={type:"removed"},Qs={type:"childadded",child:null},xh={type:"childremoved",child:null};class bt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new R,t=new tn,n=new Ft,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Qe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(ap,e)}rotateZ(e){return this.rotateOnAxis(lp,e)}translateOnAxis(e,t){return sp.copy(e).applyQuaternion(this.quaternion),this.position.add(sp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(ap,e)}translateZ(e){return this.translateOnAxis(lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bl.copy(e):bl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(ra,bl,this.up):ur.lookAt(bl,ra,this.up),this.quaternion.setFromRotationMatrix(ur),i&&(ur.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(ur),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cp),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rx),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cp),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,nx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,ix,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new R(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new R,fr=new R,yh=new R,dr=new R,eo=new R,to=new R,hp=new R,Mh=new R,Sh=new R,Eh=new R,Th=new ut,bh=new ut,wh=new ut;class Hi{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fi.subVectors(e,t),i.cross(Fi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Fi.subVectors(i,t),fr.subVectors(n,t),yh.subVectors(e,t);const o=Fi.dot(Fi),a=Fi.dot(fr),l=Fi.dot(yh),c=fr.dot(fr),h=fr.dot(yh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dr.x),l.addScaledVector(o,dr.y),l.addScaledVector(a,dr.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Th.setScalar(0),bh.setScalar(0),wh.setScalar(0),Th.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,n),wh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Th,r.x),o.addScaledVector(bh,r.y),o.addScaledVector(wh,r.z),o}static isFrontFacing(e,t,n,i){return Fi.subVectors(n,t),fr.subVectors(e,t),Fi.cross(fr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Fi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Hi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;eo.subVectors(i,n),to.subVectors(r,n),Mh.subVectors(e,n);const l=eo.dot(Mh),c=to.dot(Mh);if(l<=0&&c<=0)return t.copy(n);Sh.subVectors(e,i);const h=eo.dot(Sh),u=to.dot(Sh);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(eo,o);Eh.subVectors(e,r);const d=eo.dot(Eh),m=to.dot(Eh);if(m>=0&&d<=m)return t.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(to,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return hp.subVectors(r,i),a=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(hp,a);const p=1/(g+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(eo,o).addScaledVector(to,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},wl={h:0,s:0,l:0};function Ah(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=ed(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ah(o,r,e+1/3),this.g=Ah(o,r,e),this.b=Ah(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const n=Tg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Ze.workingToColorSpace(Sn.copy(this),e),Math.round(nt(Sn.r*255,0,255))*65536+Math.round(nt(Sn.g*255,0,255))*256+Math.round(nt(Sn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Sn.copy(this),t);const n=Sn.r,i=Sn.g,r=Sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ft){Ze.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,i=Sn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(wl);const n=ba(Or.h,wl.h,t),i=ba(Or.s,wl.s,t),r=ba(Or.l,wl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Pe;Pe.NAMES=Tg;let sx=0;class Li extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=wo,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=Mu,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(n.blending=this.blending),this.side!==Ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yu&&(n.blendSrc=this.blendSrc),this.blendDst!==Mu&&(n.blendDst=this.blendDst),this.blendEquation!==Ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ai extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new R,Al=new Te;let ox=0;class xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ox++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sf,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sf&&(e.usage=this.usage),e}}class id extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bg extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ax=0;const xi=new Ce,Ch=new bt,no=new R,ri=new Di,sa=new Di,dn=new R;class Cn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sg(e)?bg:id)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(ri.min,sa.min),ri.expandByPoint(dn),dn.addVectors(ri.max,sa.max),ri.expandByPoint(dn)):(ri.expandByPoint(sa.min),ri.expandByPoint(sa.max))}ri.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(no.fromBufferAttribute(e,c),dn.add(no)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new R,l[C]=new R;const c=new R,h=new R,u=new R,f=new Te,d=new Te,m=new Te,_=new R,g=new R;function p(C,S,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[C].add(_),a[S].add(_),a[M].add(_),l[C].add(g),l[S].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){const M=y[C],L=M.start,N=M.count;for(let B=L,W=L+N;B<W;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new R,v=new R,A=new R,w=new R;function b(C){A.fromBufferAttribute(i,C),w.copy(A);const S=a[C];x.copy(S),x.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(w,S);const L=v.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,S=y.length;C<S;++C){const M=y[C],L=M.start,N=M.count;for(let B=L,W=L+N;B<W;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new xn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new Ce,cs=new $o,Cl=new ar,fp=new R,Rl=new R,Pl=new R,Ll=new R,Rh=new R,Il=new R,dp=new R,Dl=new R;class kt extends bt{constructor(e=new Cn,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Il.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Rh.fromBufferAttribute(u,e),o?Il.addScaledVector(Rh,h):Il.addScaledVector(Rh.sub(t),h))}t.add(Il)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Cl.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Cl,fp)===null||cs.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(up.copy(r).invert(),cs.copy(e.ray).applyMatrix4(up),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,A=x;v<A;v+=3){const w=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);i=Ul(this,p,e,n,c,h,u,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const y=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);i=Ul(this,o,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,A=x;v<A;v+=3){const w=v,b=v+1,C=v+2;i=Ul(this,p,e,n,c,h,u,w,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const y=g,x=g+1,v=g+2;i=Ul(this,o,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function lx(s,e,t,n,i,r,o,a){let l;if(e.side===Wn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ar,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Dl);return c<t.near||c>t.far?null:{distance:c,point:Dl.clone(),object:s}}function Ul(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Rl),s.getVertexPosition(l,Pl),s.getVertexPosition(c,Ll);const h=lx(s,e,t,n,Rl,Pl,Ll,dp);if(h){const u=new R;Hi.getBarycoord(dp,Rl,Pl,Ll,u),i&&(h.uv=Hi.getInterpolatedAttribute(i,a,l,c,u,new Te)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,a,l,c,u,new Te)),o&&(h.normal=Hi.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};Hi.getNormal(Rl,Pl,Ll,f.normal),h.face=f,h.barycoord=u}return h}class Hs extends Cn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(u,2));function m(_,g,p,y,x,v,A,w,b,C,S){const M=v/b,L=A/C,N=v/2,B=A/2,W=w/2,K=b+1,H=C+1;let j=0,z=0;const ee=new R;for(let I=0;I<H;I++){const le=I*L-B;for(let Oe=0;Oe<K;Oe++){const Ye=Oe*M-N;ee[_]=Ye*y,ee[g]=le*x,ee[p]=W,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[g]=0,ee[p]=w>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(Oe/b),u.push(1-I/C),j+=1}}for(let I=0;I<C;I++)for(let le=0;le<b;le++){const Oe=f+le+K*I,Ye=f+le+K*(I+1),Y=f+(le+1)+K*(I+1),te=f+(le+1)+K*I;l.push(Oe,Ye,te),l.push(Ye,Y,te),z+=6}a.addGroup(d,z,S),d+=z,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const n=Vo(s[t]);for(const i in n)e[i]=n[i]}return e}function cx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Ag={clone:Vo,merge:On};var hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vo(e.uniforms),this.uniformsGroups=cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cg extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new R,pp=new Te,mp=new Te;class bn extends Cg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,t){return this.getViewBounds(e,pp,mp),t.subVectors(mp,pp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const io=-90,ro=1;class fx extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bn(io,ro,e,t);i.layers=this.layers,this.add(i);const r=new bn(io,ro,e,t);r.layers=this.layers,this.add(r);const o=new bn(io,ro,e,t);o.layers=this.layers,this.add(o);const a=new bn(io,ro,e,t);a.layers=this.layers,this.add(a);const l=new bn(io,ro,e,t);l.layers=this.layers,this.add(l);const c=new bn(io,ro,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Rg extends hn{constructor(e=[],t=Bo,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dx extends Us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Rg(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hs(5,5,5),r=new Cr({name:"CubemapFromEquirect",uniforms:Vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:qr});r.uniforms.tEquirect.value=t;const o=new kt(i,r),a=t.minFilter;return t.minFilter===Mr&&(t.minFilter=ui),new fx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Qi extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const px={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(px)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class mx extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sf,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new R;class rd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gp=new R,_p=new ut,vp=new ut,_x=new R,xp=new Ce,Nl=new R,Lh=new ar,yp=new Ce,Ih=new $o;class Pg extends kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kd,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Di),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nl),this.boundingBox.expandByPoint(Nl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ar),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nl),this.boundingSphere.expandByPoint(Nl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lh.copy(this.boundingSphere),Lh.applyMatrix4(i),e.ray.intersectsSphere(Lh)!==!1&&(yp.copy(i).invert(),Ih.copy(e.ray).applyMatrix4(yp),!(this.boundingBox!==null&&Ih.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ih)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;_p.fromBufferAttribute(i.attributes.skinIndex,e),vp.fromBufferAttribute(i.attributes.skinWeight,e),gp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=vp.getComponent(r);if(o!==0){const a=_p.getComponent(r);xp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_x.copy(gp).applyMatrix4(xp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ic extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Lg extends hn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Xn,h=Xn,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mp=new Ce,vx=new Ce;class Jc{constructor(e=[],t=[]){this.uuid=Wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:vx;Mp.multiplyMatrices(a,t[r]),Mp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Lg(t,e,e,wi,Gi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ic),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class of extends xn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new Ce,Sp=new Ce,Ol=[],Ep=new Di,xx=new Ce,oa=new kt,aa=new ar;class yx extends kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new of(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),Ep.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Ep)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),aa.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(n),e.ray.intersectsSphere(aa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,so),Sp.multiplyMatrices(n,so),oa.matrixWorld=Sp,oa.raycast(e,Ol);for(let o=0,a=Ol.length;o<a;o++){const l=Ol[o];l.instanceId=r,l.object=this,t.push(l)}Ol.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new of(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lg(new Float32Array(i*this.count),i,this.count,Kf,Gi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dh=new R,Mx=new R,Sx=new Qe;class Vr{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Dh.subVectors(n,t).cross(Mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Dh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sx.getNormalMatrix(e),i=this.coplanarPoint(Dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new ar,Ex=new Te(.5,.5),Fl=new R;class sd{constructor(e=new Vr,t=new Vr,n=new Vr,i=new Vr,r=new Vr,o=new Vr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sr){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],_=i[10],g=i[11],p=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,g-d,v-p).normalize(),n[1].setComponents(l+r,f+c,g+d,v+p).normalize(),n[2].setComponents(l+o,f+h,g+m,v+y).normalize(),n[3].setComponents(l-o,f-h,g-m,v-y).normalize(),n[4].setComponents(l-a,f-u,g-_,v-x).normalize(),t===Sr)n[5].setComponents(l+a,f+u,g+_,v+x).normalize();else if(t===Lc)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=Ex.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fl.x=i.normal.x>0?e.max.x:e.min.x,Fl.y=i.normal.y>0?e.max.y:e.min.y,Fl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qc extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dc=new R,Uc=new R,Tp=new Ce,la=new $o,Bl=new ar,Uh=new R,bp=new R;class ul extends bt{constructor(e=new Cn,t=new Qc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Dc.fromBufferAttribute(t,i-1),Uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Dc.distanceTo(Uc);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(i),Bl.radius+=r,e.ray.intersectsSphere(Bl)===!1)return;Tp.copy(i).invert(),la.copy(e.ray).applyMatrix4(Tp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=h.getX(_),y=h.getX(_+1),x=kl(this,e,la,l,p,y,_);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(d),p=kl(this,e,la,l,_,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=kl(this,e,la,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=kl(this,e,la,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kl(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Dc.fromBufferAttribute(a,i),Uc.fromBufferAttribute(a,r),t.distanceSqToSegment(Dc,Uc,Uh,bp)>n)return;Uh.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Uh);if(!(c<e.near||c>e.far))return{distance:c,point:bp.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const wp=new R,Ap=new R;class Tx extends ul{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)wp.fromBufferAttribute(t,i),Ap.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wp.distanceTo(Ap);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bx extends ul{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ig extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cp=new Ce,af=new $o,zl=new ar,Vl=new R;class wx extends bt{constructor(e=new Cn,t=new Ig){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zl.copy(n.boundingSphere),zl.applyMatrix4(i),zl.radius+=r,e.ray.intersectsSphere(zl)===!1)return;Cp.copy(i).invert(),af.copy(e.ray).applyMatrix4(Cp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=c.getX(m);Vl.fromBufferAttribute(u,g),Rp(Vl,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Vl.fromBufferAttribute(u,m),Rp(Vl,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Rp(s,e,t,n,i,r,o){const a=af.distanceSqToPoint(s);if(a<t){const l=new R;af.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Dg extends hn{constructor(e,t,n=Ds,i,r,o,a=Xn,l=Xn,c,h=Ga,u=1){if(h!==Ga&&h!==Wa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new td(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Te:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,i=[],r=[],o=[],a=new R,l=new Ce;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(nt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(nt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ug extends Xi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Te){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ax extends Ug{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function od(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Hl=new R,Nh=new od,Oh=new od,Fh=new od;class Cx extends Xi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Hl.subVectors(i[0],i[1]).add(i[0]),c=Hl);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Hl.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Hl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Nh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,g),Oh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,g),Fh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Nh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Oh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Fh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Nh.calc(l),Oh.calc(l),Fh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pp(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Rx(s,e){const t=1-s;return t*t*e}function Px(s,e){return 2*(1-s)*s*e}function Lx(s,e){return s*s*e}function wa(s,e,t,n){return Rx(s,e)+Px(s,t)+Lx(s,n)}function Ix(s,e){const t=1-s;return t*t*t*e}function Dx(s,e){const t=1-s;return 3*t*t*s*e}function Ux(s,e){return 3*(1-s)*s*s*e}function Nx(s,e){return s*s*s*e}function Aa(s,e,t,n,i){return Ix(s,e)+Dx(s,t)+Ux(s,n)+Nx(s,i)}class Ox extends Xi{constructor(e=new Te,t=new Te,n=new Te,i=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Te){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Aa(e,i.x,r.x,o.x,a.x),Aa(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ad extends Xi{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Aa(e,i.x,r.x,o.x,a.x),Aa(e,i.y,r.y,o.y,a.y),Aa(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fx extends Xi{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bx extends Xi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kx extends Xi{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(wa(e,i.x,r.x,o.x),wa(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zx extends Xi{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(wa(e,i.x,r.x,o.x),wa(e,i.y,r.y,o.y),wa(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vx extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Pp(a,l.x,c.x,h.x,u.x),Pp(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Te().fromArray(i))}return this}}var Lp=Object.freeze({__proto__:null,ArcCurve:Ax,CatmullRomCurve3:Cx,CubicBezierCurve:Ox,CubicBezierCurve3:ad,EllipseCurve:Ug,LineCurve:Fx,LineCurve3:Bx,QuadraticBezierCurve:kx,QuadraticBezierCurve3:zx,SplineCurve:Vx});class Hx extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lp[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Lp[i.type]().fromJSON(i))}return this}}function Gx(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Ng(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=qx(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<i;f+=t){const d=s[f],m=s[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return qa(r,o,t,a,l,c,0),o}function Ng(s,e,t,n,i){let r;if(i===sy(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ip(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ip(o/n|0,s[o],s[o+1],r);return r&&Ho(r,r.next)&&(Za(r),r=r.next),r}function Ns(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ho(t,t.next)||Gt(t.prev,t,t.next)===0)){if(Za(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qa(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Qx(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Xx(s,n,i,r):Wx(s)){e.push(l.i,s.i,c.i),Za(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Yx(Ns(s),e),qa(s,e,t,n,i,r,2)):o===2&&jx(s,e,t,n,i,r):qa(Ns(s),e,t,n,i,r,1);break}}}function Wx(s){const e=s.prev,t=s,n=s.next;if(Gt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&ma(i,a,r,l,o,c,m.x,m.y)&&Gt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xx(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Gt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),_=Math.max(a,l,c),g=Math.max(h,u,f),p=lf(d,m,e,t,n),y=lf(_,g,e,t,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&ma(a,h,l,u,c,f,x.x,x.y)&&Gt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&ma(a,h,l,u,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&ma(a,h,l,u,c,f,x.x,x.y)&&Gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&ma(a,h,l,u,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Yx(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Ho(n,i)&&Fg(n,t,t.next,i)&&Ka(n,i)&&Ka(i,n)&&(e.push(n.i,t.i,i.i),Za(t),Za(t.next),t=s=i),t=t.next}while(t!==s);return Ns(t)}function jx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ny(o,a)){let l=Bg(o,a);o=Ns(o,o.next),l=Ns(l,l.next),qa(o,e,t,n,i,r,0),qa(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function qx(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Ng(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(ty(c))}i.sort(Kx);for(let r=0;r<i.length;r++)t=Zx(i[r],t);return t}function Kx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Zx(s,e){const t=$x(s,e);if(!t)return e;const n=Bg(t,s);return Ns(n,n.next),Ns(t,t.next)}function $x(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Ho(s,t))return t;do{if(Ho(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Og(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Ka(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Jx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Jx(s,e){return Gt(s.prev,s,e.prev)<0&&Gt(e.next,s,s.next)<0}function Qx(s,e,t,n){let i=s;do i.z===0&&(i.z=lf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ey(i)}function ey(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function lf(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ty(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Og(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function ma(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Og(s,e,t,n,i,r,o,a)}function ny(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!iy(s,e)&&(Ka(s,e)&&Ka(e,s)&&ry(s,e)&&(Gt(s.prev,s,e.prev)||Gt(s,e.prev,e))||Ho(s,e)&&Gt(s.prev,s,s.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ho(s,e){return s.x===e.x&&s.y===e.y}function Fg(s,e,t,n){const i=Wl(Gt(s,e,t)),r=Wl(Gt(s,e,n)),o=Wl(Gt(t,n,s)),a=Wl(Gt(t,n,e));return!!(i!==r&&o!==a||i===0&&Gl(s,t,e)||r===0&&Gl(s,n,e)||o===0&&Gl(t,s,n)||a===0&&Gl(t,e,n))}function Gl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Wl(s){return s>0?1:s<0?-1:0}function iy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Fg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ka(s,e){return Gt(s.prev,s,s.next)<0?Gt(s,e,s.next)>=0&&Gt(s,s.prev,e)>=0:Gt(s,e,s.prev)<0||Gt(s,s.next,e)<0}function ry(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Bg(s,e){const t=cf(s.i,s.x,s.y),n=cf(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ip(s,e,t,n){const i=cf(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Za(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function cf(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class oy{static triangulate(e,t,n=2){return Gx(e,t,n)}}class ld{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ld.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Dp(e),Up(n,e);let o=e.length;t.forEach(Dp);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Up(n,t[l]);const a=oy.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Dp(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Up(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Gs extends Cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const y=p*f-o;for(let x=0;x<c;x++){const v=x*u-r;m.push(v,-y,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+c*p,v=y+c*(p+1),A=y+1+c*(p+1),w=y+1+c*p;d.push(x,v,w),d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}class $a extends Cn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,f=new R,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(w+v,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=h[p][y+1],v=h[p][y],A=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&d.push(x,v,w),(p!==n-1||l<Math.PI)&&d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fl extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lr extends fl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xo extends Li{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ay extends Li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ly extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Xl(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function hy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function uy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Np(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function kg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class dl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fy extends dl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_o,endingEnd:_o}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case vo:r=e,a=2*t-n;break;case Rc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vo:o=e,l=2*n-t;break;case Rc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,y=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,x=(-1-d)*g+(1.5+d)*_+.5*m,v=d*g-d*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+y*o[c+A]+x*o[l+A]+v*o[u+A];return r}}class zg extends dl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}}class dy extends dl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xl(t,this.TimeBufferType),this.values=Xl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xl(e.times,Array),values:Xl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xa:t=this.InterpolantFactoryMethodDiscrete;break;case Ya:t=this.InterpolantFactoryMethodLinear;break;case ch:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xa;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&hy(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ch,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Yi.prototype.ValueTypeName="";Yi.prototype.TimeBufferType=Float32Array;Yi.prototype.ValueBufferType=Float32Array;Yi.prototype.DefaultInterpolation=Ya;class Jo extends Yi{constructor(e,t,n){super(e,t,n)}}Jo.prototype.ValueTypeName="bool";Jo.prototype.ValueBufferType=Array;Jo.prototype.DefaultInterpolation=Xa;Jo.prototype.InterpolantFactoryMethodLinear=void 0;Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class Vg extends Yi{constructor(e,t,n,i){super(e,t,n,i)}}Vg.prototype.ValueTypeName="color";class Os extends Yi{constructor(e,t,n,i){super(e,t,n,i)}}Os.prototype.ValueTypeName="number";class py extends dl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Ft.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Rr extends Yi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new py(this.times,this.values,this.getValueSize(),e)}}Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qo extends Yi{constructor(e,t,n){super(e,t,n)}}Qo.prototype.ValueTypeName="string";Qo.prototype.ValueBufferType=Array;Qo.prototype.DefaultInterpolation=Xa;Qo.prototype.InterpolantFactoryMethodLinear=void 0;Qo.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends Yi{constructor(e,t,n,i){super(e,t,n,i)}}Fs.prototype.ValueTypeName="vector";class Go{constructor(e="",t=-1,n=[],i=Qf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(gy(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Yi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=uy(l);l=Np(l,1,h),c=Np(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Os(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,_){if(d.length!==0){const g=[],p=[];kg(d,g,p,m),g.length!==0&&_.push(new u(f,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let y=0;y!==f[m].morphTargets.length;++y){const x=f[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Os(".morphTargetInfluence["+_+"]",g,p))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(Fs,d+".position",f,"pos",i),n(Rr,d+".quaternion",f,"rot",i),n(Fs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function my(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Os;case"vector":case"vector2":case"vector3":case"vector4":return Fs;case"color":return Vg;case"quaternion":return Rr;case"bool":case"boolean":return Jo;case"string":return Qo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function gy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=my(s.type);if(s.times===void 0){const t=[],n=[];kg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Er={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Hg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const _y=new Hg;class sr{constructor(e){this.manager=e!==void 0?e:_y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sr.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr={};class vy extends Error{constructor(e,t){super(e),this.response=t}}class Ja extends sr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Er.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pr[e]!==void 0){pr[e].push({onLoad:t,onProgress:n,onError:i});return}pr[e]=[],pr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=pr[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let w=0,b=h.length;w<b;w++){const C=h[w];C.onProgress&&C.onProgress(A)}p.enqueue(v),y()}},x=>{p.error(x)})}}});return new Response(g)}else throw new vy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Er.add(`file:${e}`,c);const h=pr[e];delete pr[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=pr[e];if(h===void 0)throw this.manager.itemError(e),c;delete pr[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const oo=new WeakMap;class xy extends sr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Er.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=oo.get(o);u===void 0&&(u=[],oo.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=ja("img");function l(){h(),t&&t(this);const u=oo.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}oo.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Er.remove(`image:${e}`);const f=oo.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(u)}oo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Er.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class cd extends sr{constructor(e){super(e)}load(e,t,n,i){const r=new hn,o=new xy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class pl extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yy extends pl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bh=new Ce,Op=new R,Fp=new R;class hd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=rr,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sd,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Op.setFromMatrixPosition(e.matrixWorld),t.position.copy(Op),Fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fp),t.updateMatrixWorld(),Bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class My extends hd{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=zo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gg extends pl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new My}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bp=new Ce,ca=new R,kh=new R;class Sy extends hd{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),n.position.copy(ca),kh.copy(n.position),kh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kh),n.updateMatrixWorld(),i.makeTranslation(-ca.x,-ca.y,-ca.z),Bp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bp)}}class Nc extends pl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ud extends Cg{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ey extends hd{constructor(){super(new ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fd extends pl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Ey}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wg extends pl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ro{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const zh=new WeakMap;class Ty extends sr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Er.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(zh.has(o)===!0)i&&i(zh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Er.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),zh.set(l,c),Er.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Er.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}}class by extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Ay{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Ft.multiplyQuaternionsFlat(e,o,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const dd="\\[\\]\\.:\\/",Cy=new RegExp("["+dd+"]","g"),pd="[^"+dd+"]",Ry="[^"+dd.replace("\\.","")+"]",Py=/((?:WC+[\/:])*)/.source.replace("WC",pd),Ly=/(WCOD+)?/.source.replace("WCOD",Ry),Iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pd),Dy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pd),Uy=new RegExp("^"+Py+Ly+Iy+Dy+"$"),Ny=["material","materials","bones","map"];class Oy{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cy,"")}static parseTrackName(e){const t=Uy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ny.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Oy;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:_o,endingEnd:_o};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=nf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case pv:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Qf:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===dv;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===fv){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=vo,i.endingEnd=vo):(e?i.endingStart=this.zeroSlopeAtStart?vo:_o:i.endingStart=Rc,t?i.endingEnd=this.zeroSlopeAtEnd?vo:_o:i.endingEnd=Rc)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const By=new Float32Array(1);class Vh extends rs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=i[u],d=f.name;let m=h[d];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new Ay(pt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new zg(new Float32Array(2),new Float32Array(2),1,By),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Go.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Qf),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Fy(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Go.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const kp=new Ce;class Xg{constructor(e,t,n=0,i=1/0){this.ray=new $o(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new nd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kp),this}intersectObject(e,t=!0,n=[]){return hf(e,this,n,t),n.sort(zp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)hf(e[i],this,n,t);return n.sort(zp),n}}function zp(s,e){return s.distance-e.distance}function hf(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)hf(r[o],e,t,!0)}}class Vp{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ky extends rs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Hp(s,e,t,n){const i=zy(n);switch(t){case gg:return s*e;case Kf:return s*e/i.components*i.byteLength;case Zf:return s*e/i.components*i.byteLength;case vg:return s*e*2/i.components*i.byteLength;case $f:return s*e*2/i.components*i.byteLength;case _g:return s*e*3/i.components*i.byteLength;case wi:return s*e*4/i.components*i.byteLength;case Jf:return s*e*4/i.components*i.byteLength;case fc:case dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lu:case Du:return Math.max(s,16)*Math.max(e,8)/4;case Pu:case Iu:return Math.max(s,8)*Math.max(e,8)/2;case Uu:case Nu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ou:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ku:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ju:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case gc:case $u:case Ju:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xg:case Qu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zy(s){switch(s){case rr:case dg:return{byteLength:1,components:1};case Va:case pg:case hl:return{byteLength:2,components:1};case jf:case qf:return{byteLength:2,components:4};case Ds:case Yf:case Gi:return{byteLength:4,components:1};case mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vy(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gy=`#ifdef USE_ALPHAHASH
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
#endif`,Wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qy=`#ifdef USE_AOMAP
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
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zy=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tM=`#ifdef USE_IRIDESCENCE
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
#endif`,nM=`#ifdef USE_BUMPMAP
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uM=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RM=`#ifdef USE_GRADIENTMAP
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
}`,PM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,UM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,zM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VM=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$M=`#if defined( USE_POINTS_UV )
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
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iS=`#ifdef USE_MORPHTARGETS
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
#endif`,rS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hS=`#ifdef USE_NORMALMAP
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
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,bS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,wS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,AS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CS=`#ifdef USE_SKINNING
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
#endif`,RS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,LS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,US=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NS=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HS=`uniform sampler2D t2D;
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`#include <common>
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
}`,qS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KS=`#define DISTANCE
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
}`,ZS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`uniform float scale;
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
}`,eE=`uniform vec3 diffuse;
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
}`,tE=`#include <common>
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
}`,nE=`uniform vec3 diffuse;
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
}`,iE=`#define LAMBERT
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
}`,rE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sE=`#define MATCAP
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
}`,oE=`#define MATCAP
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
}`,aE=`#define NORMAL
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
}`,lE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cE=`#define PHONG
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
}`,hE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,uE=`#define STANDARD
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
}`,fE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,dE=`#define TOON
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
}`,pE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,mE=`uniform float size;
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
}`,gE=`uniform vec3 diffuse;
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
}`,_E=`#include <common>
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
}`,vE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xE=`uniform float rotation;
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
}`,yE=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Hy,alphahash_pars_fragment:Gy,alphamap_fragment:Wy,alphamap_pars_fragment:Xy,alphatest_fragment:Yy,alphatest_pars_fragment:jy,aomap_fragment:qy,aomap_pars_fragment:Ky,batching_pars_vertex:Zy,batching_vertex:$y,begin_vertex:Jy,beginnormal_vertex:Qy,bsdfs:eM,iridescence_fragment:tM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:rM,clipping_planes_pars_vertex:sM,clipping_planes_vertex:oM,color_fragment:aM,color_pars_fragment:lM,color_pars_vertex:cM,color_vertex:hM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:dM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:gM,emissivemap_pars_fragment:_M,colorspace_fragment:vM,colorspace_pars_fragment:xM,envmap_fragment:yM,envmap_common_pars_fragment:MM,envmap_pars_fragment:SM,envmap_pars_vertex:EM,envmap_physical_pars_fragment:UM,envmap_vertex:TM,fog_vertex:bM,fog_pars_vertex:wM,fog_fragment:AM,fog_pars_fragment:CM,gradientmap_pars_fragment:RM,lightmap_pars_fragment:PM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:IM,lights_pars_begin:DM,lights_toon_fragment:NM,lights_toon_pars_fragment:OM,lights_phong_fragment:FM,lights_phong_pars_fragment:BM,lights_physical_fragment:kM,lights_physical_pars_fragment:zM,lights_fragment_begin:VM,lights_fragment_maps:HM,lights_fragment_end:GM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:XM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:jM,map_fragment:qM,map_pars_fragment:KM,map_particle_fragment:ZM,map_particle_pars_fragment:$M,metalnessmap_fragment:JM,metalnessmap_pars_fragment:QM,morphinstance_vertex:eS,morphcolor_vertex:tS,morphnormal_vertex:nS,morphtarget_pars_vertex:iS,morphtarget_vertex:rS,normal_fragment_begin:sS,normal_fragment_maps:oS,normal_pars_fragment:aS,normal_pars_vertex:lS,normal_vertex:cS,normalmap_pars_fragment:hS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:fS,clearcoat_pars_fragment:dS,iridescence_pars_fragment:pS,opaque_fragment:mS,packing:gS,premultiplied_alpha_fragment:_S,project_vertex:vS,dithering_fragment:xS,dithering_pars_fragment:yS,roughnessmap_fragment:MS,roughnessmap_pars_fragment:SS,shadowmap_pars_fragment:ES,shadowmap_pars_vertex:TS,shadowmap_vertex:bS,shadowmask_pars_fragment:wS,skinbase_vertex:AS,skinning_pars_vertex:CS,skinning_vertex:RS,skinnormal_vertex:PS,specularmap_fragment:LS,specularmap_pars_fragment:IS,tonemapping_fragment:DS,tonemapping_pars_fragment:US,transmission_fragment:NS,transmission_pars_fragment:OS,uv_pars_fragment:FS,uv_pars_vertex:BS,uv_vertex:kS,worldpos_vertex:zS,background_vert:VS,background_frag:HS,backgroundCube_vert:GS,backgroundCube_frag:WS,cube_vert:XS,cube_frag:YS,depth_vert:jS,depth_frag:qS,distanceRGBA_vert:KS,distanceRGBA_frag:ZS,equirect_vert:$S,equirect_frag:JS,linedashed_vert:QS,linedashed_frag:eE,meshbasic_vert:tE,meshbasic_frag:nE,meshlambert_vert:iE,meshlambert_frag:rE,meshmatcap_vert:sE,meshmatcap_frag:oE,meshnormal_vert:aE,meshnormal_frag:lE,meshphong_vert:cE,meshphong_frag:hE,meshphysical_vert:uE,meshphysical_frag:fE,meshtoon_vert:dE,meshtoon_frag:pE,points_vert:mE,points_frag:gE,shadow_vert:_E,shadow_frag:vE,sprite_vert:xE,sprite_frag:yE},ge={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ki={basic:{uniforms:On([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:On([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:On([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:On([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:On([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:On([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:On([ge.points,ge.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:On([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:On([ge.common,ge.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:On([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:On([ge.sprite,ge.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:On([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:On([ge.lights,ge.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ki.physical={uniforms:On([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Yl={r:0,b:0,g:0},us=new tn,ME=new Ce;function SE(s,e,t,n,i,r,o){const a=new Pe(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const A=m(x);A===null?p(a,l):A&&A.isColor&&(p(A,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,v){const A=m(v);A&&(A.isCubeTexture||A.mapping===Zc)?(h===void 0&&(h=new kt(new Hs(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:Vo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),us.copy(v.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ME.makeRotationFromEuler(us)),h.material.toneMapped=Ze.getTransfer(A.colorSpace)!==Et,(u!==A||f!==A.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new kt(new Gs(2,2),new Cr({name:"BackgroundMaterial",uniforms:Vo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(A.colorSpace)!==Et,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Yl,wg(s)),n.buffers.color.setClear(Yl.r,Yl.g,Yl.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:g,dispose:y}}function EE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,L,N,B,W){let K=!1;const H=u(B,N,L);r!==H&&(r=H,c(r.object)),K=d(M,B,N,W),K&&m(M,B,N,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(M,L,N,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,N){const B=N.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let K=W[L.id];K===void 0&&(K={},W[L.id]=K);let H=K[B];return H===void 0&&(H=f(l()),K[B]=H),H}function f(M){const L=[],N=[],B=[];for(let W=0;W<t;W++)L[W]=0,N[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:B,object:M,attributes:{},index:null}}function d(M,L,N,B){const W=r.attributes,K=L.attributes;let H=0;const j=N.getAttributes();for(const z in j)if(j[z].location>=0){const I=W[z];let le=K[z];if(le===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),I===void 0||I.attribute!==le||le&&I.data!==le.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function m(M,L,N,B){const W={},K=L.attributes;let H=0;const j=N.getAttributes();for(const z in j)if(j[z].location>=0){let I=K[z];I===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(I=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(I=M.instanceColor));const le={};le.attribute=I,I&&I.data&&(le.data=I.data),W[z]=le,H++}r.attributes=W,r.attributesNum=H,r.index=B}function _(){const M=r.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){const N=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;N[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),W[M]!==L&&(s.vertexAttribDivisor(M,L),W[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let N=0,B=L.length;N<B;N++)L[N]!==M[N]&&(s.disableVertexAttribArray(N),L[N]=0)}function x(M,L,N,B,W,K,H){H===!0?s.vertexAttribIPointer(M,L,N,W,K):s.vertexAttribPointer(M,L,N,B,W,K)}function v(M,L,N,B){_();const W=B.attributes,K=N.getAttributes(),H=L.defaultAttributeValues;for(const j in K){const z=K[j];if(z.location>=0){let ee=W[j];if(ee===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const I=ee.normalized,le=ee.itemSize,Oe=e.get(ee);if(Oe===void 0)continue;const Ye=Oe.buffer,Y=Oe.type,te=Oe.bytesPerElement,ue=Y===s.INT||Y===s.UNSIGNED_INT||ee.gpuType===Yf;if(ee.isInterleavedBufferAttribute){const se=ee.data,_e=se.stride,He=ee.offset;if(se.isInstancedInterleavedBuffer){for(let Ue=0;Ue<z.locationSize;Ue++)p(z.location+Ue,se.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ue=0;Ue<z.locationSize;Ue++)g(z.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let Ue=0;Ue<z.locationSize;Ue++)x(z.location+Ue,le/z.locationSize,Y,I,_e*te,(He+le/z.locationSize*Ue)*te,ue)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)p(z.location+se,ee.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<z.locationSize;se++)g(z.location+se);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let se=0;se<z.locationSize;se++)x(z.location+se,le/z.locationSize,Y,I,le*te,le/z.locationSize*se*te,ue)}}else if(H!==void 0){const I=H[j];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(z.location,I);break;case 3:s.vertexAttrib3fv(z.location,I);break;case 4:s.vertexAttrib4fv(z.location,I);break;default:s.vertexAttrib1fv(z.location,I)}}}}y()}function A(){C();for(const M in n){const L=n[M];for(const N in L){const B=L[N];for(const W in B)h(B[W].object),delete B[W];delete L[N]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const N in L){const B=L[N];for(const W in B)h(B[W].object),delete B[W];delete L[N]}delete n[M.id]}function b(M){for(const L in n){const N=n[L];if(N[M.id]===void 0)continue;const B=N[M.id];for(const W in B)h(B[W].object),delete B[W];delete N[M.id]}}function C(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function TE(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bE(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==wi&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===hl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==rr&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Gi&&!C)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function wE(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Vr,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=h(m,f,x,d);for(let A=0;A!==x;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function AE(s){let e=new WeakMap;function t(o,a){return a===Ac?o.mapping=Bo:a===Ru&&(o.mapping=ko),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ac||a===Ru)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dx(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const yo=4,Gp=[.125,.215,.35,.446,.526,.582],Ss=20,Hh=new ud,Wp=new Pe;let Gh=null,Wh=0,Xh=0,Yh=!1;const gs=(1+Math.sqrt(5))/2,ao=1/gs,Xp=[new R(-gs,ao,0),new R(gs,ao,0),new R(-ao,0,gs),new R(ao,0,gs),new R(0,gs,-ao),new R(0,gs,ao),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],CE=new R;class Yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=CE}=r;Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Wh,Xh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bo||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:hl,format:wi,colorSpace:Pn,depthBuffer:!1},i=jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RE(r)),this._blurMaterial=PE(r,e,t)}return i}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Hh)}_sceneToCubeUV(e,t,n,i,r){const l=new bn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Wp),u.toneMapping=Kr,u.autoClear=!1;const m=new Ai({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),_=new kt(new Hs,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Wp),g=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const v=this._cubeSize;jl(i,x*v,y>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bo||e.mapping===ko;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qp());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;jl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Hh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xp[(i-r-1)%Xp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new kt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ss-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Ss;g>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ss}`);const p=[];let y=0;for(let b=0;b<Ss;++b){const C=b/_,S=Math.exp(-C*C/2);p.push(S),b===0?y+=S:b<g&&(y+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;const v=this._sizeLods[i],A=3*v*(i>x-yo?i-x+yo:0),w=4*(this._cubeSize-v);jl(t,A,w,3*v,2*v),l.setRenderTarget(t),l.render(u,Hh)}}function RE(s){const e=[],t=[],n=[];let i=s;const r=s-yo+1+Gp.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-yo?l=Gp[o-s+yo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*d),x=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,C=w>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(S,_*m*w),x.set(f,g*m*w);const M=[w,w,w,w,w,w];v.set(M,p*m*w)}const A=new Cn;A.setAttribute("position",new xn(y,_)),A.setAttribute("uv",new xn(x,g)),A.setAttribute("faceIndex",new xn(v,p)),e.push(A),i>yo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jp(s,e,t){const n=new Us(s,e,t);return n.texture.mapping=Zc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function PE(s,e,t){const n=new Float32Array(Ss),i=new R(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function qp(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Kp(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LE(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ac||l===Ru,h=l===Bo||l===ko;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Yp(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Yp(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function IE(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ao("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function DE(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){const A=y[x+0],w=y[x+1],b=y[x+2];f.push(A,w,w,b,b,A)}}else if(m!==void 0){const y=m.array;_=m.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const A=x+0,w=x+1,b=x+2;f.push(A,w,w,b,b,A)}}else return;const g=new(Sg(f)?bg:id)(f,1);g.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function UE(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function NE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function OE(s,e,t){const n=new WeakMap,i=new ut;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*A*4*u),b=new Eg(w,v,A,u);b.type=Gi,b.needsUpdate=!0;const C=x*4;for(let M=0;M<u;M++){const L=g[M],N=p[M],B=y[M],W=v*A*4*M;for(let K=0;K<L.count;K++){const H=K*C;d===!0&&(i.fromBufferAttribute(L,K),w[W+H+0]=i.x,w[W+H+1]=i.y,w[W+H+2]=i.z,w[W+H+3]=0),m===!0&&(i.fromBufferAttribute(N,K),w[W+H+4]=i.x,w[W+H+5]=i.y,w[W+H+6]=i.z,w[W+H+7]=0),_===!0&&(i.fromBufferAttribute(B,K),w[W+H+8]=i.x,w[W+H+9]=i.y,w[W+H+10]=i.z,w[W+H+11]=B.itemSize===4?i.w:1)}}f={count:u,texture:b,size:new Te(v,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function FE(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const jg=new hn,Zp=new Dg(1,1),qg=new Eg,Kg=new $v,Zg=new Rg,$p=[],Jp=[],Qp=new Float32Array(16),em=new Float32Array(9),tm=new Float32Array(4);function ea(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=$p[i];if(r===void 0&&(r=new Float32Array(i),$p[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function fn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function eh(s,e){let t=Jp[e];t===void 0&&(t=new Int32Array(e),Jp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function BE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function kE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),fn(t,e)}}function zE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),fn(t,e)}}function VE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),fn(t,e)}}function HE(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;tm.set(n),s.uniformMatrix2fv(this.addr,!1,tm),fn(t,n)}}function GE(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;em.set(n),s.uniformMatrix3fv(this.addr,!1,em),fn(t,n)}}function WE(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;Qp.set(n),s.uniformMatrix4fv(this.addr,!1,Qp),fn(t,n)}}function XE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function YE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),fn(t,e)}}function jE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),fn(t,e)}}function qE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),fn(t,e)}}function KE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ZE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),fn(t,e)}}function $E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),fn(t,e)}}function JE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),fn(t,e)}}function QE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zp.compareFunction=Mg,r=Zp):r=jg,t.setTexture2D(e||r,i)}function eT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kg,i)}function tT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zg,i)}function nT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qg,i)}function iT(s){switch(s){case 5126:return BE;case 35664:return kE;case 35665:return zE;case 35666:return VE;case 35674:return HE;case 35675:return GE;case 35676:return WE;case 5124:case 35670:return XE;case 35667:case 35671:return YE;case 35668:case 35672:return jE;case 35669:case 35673:return qE;case 5125:return KE;case 36294:return ZE;case 36295:return $E;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}function rT(s,e){s.uniform1fv(this.addr,e)}function sT(s,e){const t=ea(e,this.size,2);s.uniform2fv(this.addr,t)}function oT(s,e){const t=ea(e,this.size,3);s.uniform3fv(this.addr,t)}function aT(s,e){const t=ea(e,this.size,4);s.uniform4fv(this.addr,t)}function lT(s,e){const t=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function cT(s,e){const t=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hT(s,e){const t=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function uT(s,e){s.uniform1iv(this.addr,e)}function fT(s,e){s.uniform2iv(this.addr,e)}function dT(s,e){s.uniform3iv(this.addr,e)}function pT(s,e){s.uniform4iv(this.addr,e)}function mT(s,e){s.uniform1uiv(this.addr,e)}function gT(s,e){s.uniform2uiv(this.addr,e)}function _T(s,e){s.uniform3uiv(this.addr,e)}function vT(s,e){s.uniform4uiv(this.addr,e)}function xT(s,e,t){const n=this.cache,i=e.length,r=eh(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||jg,r[o])}function yT(s,e,t){const n=this.cache,i=e.length,r=eh(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Kg,r[o])}function MT(s,e,t){const n=this.cache,i=e.length,r=eh(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Zg,r[o])}function ST(s,e,t){const n=this.cache,i=e.length,r=eh(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||qg,r[o])}function ET(s){switch(s){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return cT;case 35676:return hT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return _T;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ST}}class TT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iT(t.type)}}class bT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ET(t.type)}}class wT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function nm(s,e){s.seq.push(e),s.map[e.id]=e}function AT(s,e,t){const n=s.name,i=n.length;for(jh.lastIndex=0;;){const r=jh.exec(n),o=jh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){nm(t,c===void 0?new TT(a,s,e):new bT(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new wT(a),nm(t,u)),t=u}}}class _c{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);AT(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function im(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const CT=37297;let RT=0;function PT(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const rm=new Qe;function LT(s){Ze._getMatrix(rm,Ze.workingColorSpace,s);const e=`mat3( ${rm.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case Pc:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function sm(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+PT(s.getShaderSource(e),o)}else return i}function IT(s,e){const t=LT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function DT(s,e){let t;switch(e){case sv:t="Linear";break;case ov:t="Reinhard";break;case av:t="Cineon";break;case hg:t="ACESFilmic";break;case cv:t="AgX";break;case hv:t="Neutral";break;case lv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new R;function UT(){Ze.getLuminanceCoefficients(ql);const s=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function OT(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FT(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ga(s){return s!==""}function om(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function am(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(s){return s.replace(BT,zT)}const kT=new Map;function zT(s,e){let t=it[e];if(t===void 0){const n=kT.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uf(t)}const VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lm(s){return s.replace(VT,HT)}function HT(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cm(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function WT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bo:case ko:e="ENVMAP_TYPE_CUBE";break;case Zc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ko:e="ENVMAP_MODE_REFRACTION";break}return e}function YT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kc:e="ENVMAP_BLENDING_MULTIPLY";break;case iv:e="ENVMAP_BLENDING_MIX";break;case rv:e="ENVMAP_BLENDING_ADD";break}return e}function jT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qT(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=GT(t),c=WT(t),h=XT(t),u=YT(t),f=jT(t),d=NT(t),m=OT(r),_=i.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ga).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ga).join(`
`),p.length>0&&(p+=`
`)):(g=[cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kr?"#define TONE_MAPPING":"",t.toneMapping!==Kr?it.tonemapping_pars_fragment:"",t.toneMapping!==Kr?DT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,IT("linearToOutputTexel",t.outputColorSpace),UT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),o=uf(o),o=om(o,t),o=am(o,t),a=uf(a),a=om(a,t),a=am(a,t),o=lm(o),a=lm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===$d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+g+o,v=y+p+a,A=im(i,i.VERTEX_SHADER,x),w=im(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(L){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(w).trim();let K=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,w);else{const j=sm(i,A,"vertex"),z=sm(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+j+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||W==="")&&(H=!1);H&&(L.diagnostics={runnable:K,programLog:N,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(A),i.deleteShader(w),C=new _c(i,_),S=FT(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,CT)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let KT=0;class ZT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $T(e),t.set(e,n)),n}}class $T{constructor(e){this.id=KT++,this.code=e,this.usedTimes=0}}function JT(s,e,t,n,i,r,o){const a=new nd,l=new ZT,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,L,N,B){const W=N.fog,K=B.geometry,H=S.isMeshStandardMaterial?N.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),z=j&&j.mapping===Zc?j.image.height:null,ee=m[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const I=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,le=I!==void 0?I.length:0;let Oe=0;K.morphAttributes.position!==void 0&&(Oe=1),K.morphAttributes.normal!==void 0&&(Oe=2),K.morphAttributes.color!==void 0&&(Oe=3);let Ye,Y,te,ue;if(ee){const ve=Ki[ee];Ye=ve.vertexShader,Y=ve.fragmentShader}else Ye=S.vertexShader,Y=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const se=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),He=B.isInstancedMesh===!0,Ue=B.isBatchedMesh===!0,$e=!!S.map,et=!!S.matcap,Se=!!j,U=!!S.aoMap,_t=!!S.lightMap,qe=!!S.bumpMap,V=!!S.normalMap,xe=!!S.displacementMap,Je=!!S.emissiveMap,Ie=!!S.metalnessMap,Re=!!S.roughnessMap,yt=S.anisotropy>0,P=S.clearcoat>0,E=S.dispersion>0,k=S.iridescence>0,$=S.sheen>0,Z=S.transmission>0,q=yt&&!!S.anisotropyMap,Me=P&&!!S.clearcoatMap,oe=P&&!!S.clearcoatNormalMap,be=P&&!!S.clearcoatRoughnessMap,he=k&&!!S.iridescenceMap,ne=k&&!!S.iridescenceThicknessMap,pe=$&&!!S.sheenColorMap,ke=$&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,ae=!!S.specularColorMap,Ve=!!S.specularIntensityMap,D=Z&&!!S.transmissionMap,ce=Z&&!!S.thicknessMap,Q=!!S.gradientMap,me=!!S.alphaMap,ie=S.alphaTest>0,J=!!S.alphaHash,Ee=!!S.extensions;let ze=Kr;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ze=s.toneMapping);const gt={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:Y,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Pn,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:et,envMap:Se,envMapMode:Se&&j.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:_t,bumpMap:qe,normalMap:V,displacementMap:f&&xe,emissiveMap:Je,normalMapObjectSpace:V&&S.normalMapType===vv,normalMapTangentSpace:V&&S.normalMapType===$c,metalnessMap:Ie,roughnessMap:Re,anisotropy:yt,anisotropyMap:q,clearcoat:P,clearcoatMap:Me,clearcoatNormalMap:oe,clearcoatRoughnessMap:be,dispersion:E,iridescence:k,iridescenceMap:he,iridescenceThicknessMap:ne,sheen:$,sheenColorMap:pe,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:ae,specularIntensityMap:Ve,transmission:Z,transmissionMap:D,thicknessMap:ce,gradientMap:Q,opaque:S.transparent===!1&&S.blending===wo&&S.alphaToCoverage===!1,alphaMap:me,alphaTest:ie,alphaHash:J,combine:S.combine,mapUv:$e&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:_t&&_(S.lightMap.channel),bumpMapUv:qe&&_(S.bumpMap.channel),normalMapUv:V&&_(S.normalMap.channel),displacementMapUv:xe&&_(S.displacementMap.channel),emissiveMapUv:Je&&_(S.emissiveMap.channel),metalnessMapUv:Ie&&_(S.metalnessMap.channel),roughnessMapUv:Re&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:Me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(S.sheenRoughnessMap.channel),specularMapUv:Fe&&_(S.specularMap.channel),specularColorMapUv:ae&&_(S.specularColorMap.channel),specularIntensityMapUv:Ve&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:ce&&_(S.thicknessMap.channel),alphaMapUv:me&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(V||yt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&($e||me),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===Et,decodeVideoTextureEmissive:Je&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===Et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zi,flipSided:S.side===Wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=m[S.type];let L;if(M){const N=Ki[M];L=Ag.clone(N.uniforms)}else L=S.uniforms;return L}function A(S,M){let L;for(let N=0,B=h.length;N<B;N++){const W=h[N];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new qT(s,M,S,r),h.push(L)),L}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:C}}function QT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function eb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function um(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,m,_,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,f,d,m,_,g){const p=o(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,m,_,g){const p=o(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||eb),n.length>1&&n.sort(f||hm),i.length>1&&i.sort(f||hm)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function tb(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new um,s.set(n,[o])):i>=r.length?(o=new um,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function nb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Pe};break;case"SpotLight":t={position:new R,direction:new R,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function ib(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let rb=0;function sb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ob(s){const e=new nb,t=ib(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new Ce,o=new Ce;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,y=0,x=0,v=0,A=0,w=0,b=0;c.sort(sb);for(let S=0,M=c.length;S<M;S++){const L=c[S],N=L.color,B=L.intensity,W=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*B,u+=N.g*B,f+=N.b*B;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],B);b++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,z=t.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=H,d++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(N).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const j=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,j.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=j.matrix,L.castShadow){const z=t.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=K,v++}_++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(N).multiplyScalar(B),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=H,g++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const j=L.shadow,z=t.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=L.shadow.matrix,x++}n.point[m]=H,m++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(B),H.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=H,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==m||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=d,C.pointLength=m,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=b,n.version=rb++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function fm(s){const e=new ob(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ab(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new fm(s),e.set(i,[a])):r>=o.length?(a=new fm(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hb(s,e,t){let n=new sd;const i=new Te,r=new Te,o=new ut,a=new ly({depthPacking:_v}),l=new cy,c={},h=t.maxTextureSize,u={[Ar]:Wn,[Wn]:Ar,[Zi]:Zi},f=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:lb,fragmentShader:cb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Cn;m.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let p=this.type;this.render=function(w,b,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(qr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==mr&&this.type===mr,W=p===mr&&this.type!==mr;for(let K=0,H=w.length;K<H;K++){const j=w[K],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ee=z.getFrameExtents();if(i.multiply(ee),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,z.mapSize.y=r.y)),z.map===null||B===!0||W===!0){const le=this.type!==mr?{minFilter:Xn,magFilter:Xn}:{};z.map!==null&&z.map.dispose(),z.map=new Us(i.x,i.y,le),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const I=z.getViewportCount();for(let le=0;le<I;le++){const Oe=z.getViewport(le);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),N.viewport(o),z.updateMatrices(j,le),n=z.getFrustum(),v(b,C,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===mr&&y(z,C),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,M,L)};function y(w,b){const C=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Us(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,C,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,C,d,_,null)}function x(w,b,C,S){let M=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const N=M.uuid,B=b.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let K=W[B];K===void 0&&(K=M.clone(),W[B]=K,b.addEventListener("dispose",A)),M=K}if(M.visible=b.visible,M.wireframe=b.wireframe,S===mr?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=s.properties.get(M);N.light=C}return M}function v(w,b,C,S,M){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===mr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=e.update(w),W=w.material;if(Array.isArray(W)){const K=B.groups;for(let H=0,j=K.length;H<j;H++){const z=K[H],ee=W[z.materialIndex];if(ee&&ee.visible){const I=x(w,ee,S,M);w.onBeforeShadow(s,w,b,C,B,I,z),s.renderBufferDirect(C,null,B,I,w,z),w.onAfterShadow(s,w,b,C,B,I,z)}}}else if(W.visible){const K=x(w,W,S,M);w.onBeforeShadow(s,w,b,C,B,K,null),s.renderBufferDirect(C,null,B,K,w,null),w.onAfterShadow(s,w,b,C,B,K,null)}}const N=w.children;for(let B=0,W=N.length;B<W;B++)v(N[B],b,C,S,M)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const S=c[C],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const ub={[Su]:Eu,[Tu]:Au,[bu]:Cu,[Fo]:wu,[Eu]:Su,[Au]:Tu,[Cu]:bu,[wu]:Fo};function fb(s,e){function t(){let D=!1;const ce=new ut;let Q=null;const me=new ut(0,0,0,0);return{setMask:function(ie){Q!==ie&&!D&&(s.colorMask(ie,ie,ie,ie),Q=ie)},setLocked:function(ie){D=ie},setClear:function(ie,J,Ee,ze,gt){gt===!0&&(ie*=ze,J*=ze,Ee*=ze),ce.set(ie,J,Ee,ze),me.equals(ce)===!1&&(s.clearColor(ie,J,Ee,ze),me.copy(ce))},reset:function(){D=!1,Q=null,me.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,Q=null,me=null,ie=null;return{setReversed:function(J){if(ce!==J){const Ee=e.get("EXT_clip_control");J?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ce=J;const ze=ie;ie=null,this.setClear(ze)}},getReversed:function(){return ce},setTest:function(J){J?se(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(J){Q!==J&&!D&&(s.depthMask(J),Q=J)},setFunc:function(J){if(ce&&(J=ub[J]),me!==J){switch(J){case Su:s.depthFunc(s.NEVER);break;case Eu:s.depthFunc(s.ALWAYS);break;case Tu:s.depthFunc(s.LESS);break;case Fo:s.depthFunc(s.LEQUAL);break;case bu:s.depthFunc(s.EQUAL);break;case wu:s.depthFunc(s.GEQUAL);break;case Au:s.depthFunc(s.GREATER);break;case Cu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=J}},setLocked:function(J){D=J},setClear:function(J){ie!==J&&(ce&&(J=1-J),s.clearDepth(J),ie=J)},reset:function(){D=!1,Q=null,me=null,ie=null,ce=!1}}}function i(){let D=!1,ce=null,Q=null,me=null,ie=null,J=null,Ee=null,ze=null,gt=null;return{setTest:function(ve){D||(ve?se(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(ve){ce!==ve&&!D&&(s.stencilMask(ve),ce=ve)},setFunc:function(ve,Le,tt){(Q!==ve||me!==Le||ie!==tt)&&(s.stencilFunc(ve,Le,tt),Q=ve,me=Le,ie=tt)},setOp:function(ve,Le,tt){(J!==ve||Ee!==Le||ze!==tt)&&(s.stencilOp(ve,Le,tt),J=ve,Ee=Le,ze=tt)},setLocked:function(ve){D=ve},setClear:function(ve){gt!==ve&&(s.clearStencil(ve),gt=ve)},reset:function(){D=!1,ce=null,Q=null,me=null,ie=null,J=null,Ee=null,ze=null,gt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,y=null,x=null,v=null,A=null,w=null,b=new Pe(0,0,0),C=0,S=!1,M=null,L=null,N=null,B=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=j>=2);let ee=null,I={};const le=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),Ye=new ut().fromArray(le),Y=new ut().fromArray(Oe);function te(D,ce,Q,me){const ie=new Uint8Array(4),J=s.createTexture();s.bindTexture(D,J),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ee=0;Ee<Q;Ee++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(ce+Ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return J}const ue={};ue[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(s.DEPTH_TEST),o.setFunc(Fo),qe(!1),V(Xd),se(s.CULL_FACE),U(qr);function se(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function _e(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function He(D,ce){return u[D]!==ce?(s.bindFramebuffer(D,ce),u[D]=ce,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ce),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ue(D,ce){let Q=d,me=!1;if(D){Q=f.get(ce),Q===void 0&&(Q=[],f.set(ce,Q));const ie=D.textures;if(Q.length!==ie.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let J=0,Ee=ie.length;J<Ee;J++)Q[J]=s.COLOR_ATTACHMENT0+J;Q.length=ie.length,me=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,me=!0);me&&s.drawBuffers(Q)}function $e(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const et={[Ms]:s.FUNC_ADD,[z0]:s.FUNC_SUBTRACT,[V0]:s.FUNC_REVERSE_SUBTRACT};et[H0]=s.MIN,et[G0]=s.MAX;const Se={[W0]:s.ZERO,[X0]:s.ONE,[Y0]:s.SRC_COLOR,[yu]:s.SRC_ALPHA,[J0]:s.SRC_ALPHA_SATURATE,[Z0]:s.DST_COLOR,[q0]:s.DST_ALPHA,[j0]:s.ONE_MINUS_SRC_COLOR,[Mu]:s.ONE_MINUS_SRC_ALPHA,[$0]:s.ONE_MINUS_DST_COLOR,[K0]:s.ONE_MINUS_DST_ALPHA,[Q0]:s.CONSTANT_COLOR,[ev]:s.ONE_MINUS_CONSTANT_COLOR,[tv]:s.CONSTANT_ALPHA,[nv]:s.ONE_MINUS_CONSTANT_ALPHA};function U(D,ce,Q,me,ie,J,Ee,ze,gt,ve){if(D===qr){_===!0&&(_e(s.BLEND),_=!1);return}if(_===!1&&(se(s.BLEND),_=!0),D!==k0){if(D!==g||ve!==S){if((p!==Ms||v!==Ms)&&(s.blendEquation(s.FUNC_ADD),p=Ms,v=Ms),ve)switch(D){case wo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yd:s.blendFunc(s.ONE,s.ONE);break;case jd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case wo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,A=null,w=null,b.set(0,0,0),C=0,g=D,S=ve}return}ie=ie||ce,J=J||Q,Ee=Ee||me,(ce!==p||ie!==v)&&(s.blendEquationSeparate(et[ce],et[ie]),p=ce,v=ie),(Q!==y||me!==x||J!==A||Ee!==w)&&(s.blendFuncSeparate(Se[Q],Se[me],Se[J],Se[Ee]),y=Q,x=me,A=J,w=Ee),(ze.equals(b)===!1||gt!==C)&&(s.blendColor(ze.r,ze.g,ze.b,gt),b.copy(ze),C=gt),g=D,S=!1}function _t(D,ce){D.side===Zi?_e(s.CULL_FACE):se(s.CULL_FACE);let Q=D.side===Wn;ce&&(Q=!Q),qe(Q),D.blending===wo&&D.transparent===!1?U(qr):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const me=D.stencilWrite;a.setTest(me),me&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Je(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function V(D){D!==F0?(se(s.CULL_FACE),D!==L&&(D===Xd?s.cullFace(s.BACK):D===B0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),L=D}function xe(D){D!==N&&(H&&s.lineWidth(D),N=D)}function Je(D,ce,Q){D?(se(s.POLYGON_OFFSET_FILL),(B!==ce||W!==Q)&&(s.polygonOffset(ce,Q),B=ce,W=Q)):_e(s.POLYGON_OFFSET_FILL)}function Ie(D){D?se(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Re(D){D===void 0&&(D=s.TEXTURE0+K-1),ee!==D&&(s.activeTexture(D),ee=D)}function yt(D,ce,Q){Q===void 0&&(ee===null?Q=s.TEXTURE0+K-1:Q=ee);let me=I[Q];me===void 0&&(me={type:void 0,texture:void 0},I[Q]=me),(me.type!==D||me.texture!==ce)&&(ee!==Q&&(s.activeTexture(Q),ee=Q),s.bindTexture(D,ce||ue[D]),me.type=D,me.texture=ce)}function P(){const D=I[ee];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){Ye.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function ke(D){Y.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Fe(D,ce){let Q=c.get(ce);Q===void 0&&(Q=new WeakMap,c.set(ce,Q));let me=Q.get(D);me===void 0&&(me=s.getUniformBlockIndex(ce,D.name),Q.set(D,me))}function ae(D,ce){const me=c.get(ce).get(D);l.get(ce)!==me&&(s.uniformBlockBinding(ce,me,D.__bindingPointIndex),l.set(ce,me))}function Ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,I={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,y=null,x=null,v=null,A=null,w=null,b=new Pe(0,0,0),C=0,S=!1,M=null,L=null,N=null,B=null,W=null,Ye.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:_e,bindFramebuffer:He,drawBuffers:Ue,useProgram:$e,setBlending:U,setMaterial:_t,setFlipSided:qe,setCullFace:V,setLineWidth:xe,setPolygonOffset:Je,setScissorTest:Ie,activeTexture:Re,bindTexture:yt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:he,texImage3D:ne,updateUBOMapping:Fe,uniformBlockBinding:ae,texStorage2D:oe,texStorage3D:be,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:Me,scissor:pe,viewport:ke,reset:Ve}}function db(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return d?new OffscreenCanvas(P,E):ja("canvas")}function _(P,E,k){let $=1;const Z=yt(P);if((Z.width>k||Z.height>k)&&($=k/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor($*Z.width),Me=Math.floor($*Z.height);u===void 0&&(u=m(q,Me));const oe=E?m(q,Me):u;return oe.width=q,oe.height=Me,oe.getContext("2d").drawImage(P,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+Me+")."),oe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(P,E,k,$,Z=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=E;if(E===s.RED&&(k===s.FLOAT&&(q=s.R32F),k===s.HALF_FLOAT&&(q=s.R16F),k===s.UNSIGNED_BYTE&&(q=s.R8)),E===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.R8UI),k===s.UNSIGNED_SHORT&&(q=s.R16UI),k===s.UNSIGNED_INT&&(q=s.R32UI),k===s.BYTE&&(q=s.R8I),k===s.SHORT&&(q=s.R16I),k===s.INT&&(q=s.R32I)),E===s.RG&&(k===s.FLOAT&&(q=s.RG32F),k===s.HALF_FLOAT&&(q=s.RG16F),k===s.UNSIGNED_BYTE&&(q=s.RG8)),E===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RG8UI),k===s.UNSIGNED_SHORT&&(q=s.RG16UI),k===s.UNSIGNED_INT&&(q=s.RG32UI),k===s.BYTE&&(q=s.RG8I),k===s.SHORT&&(q=s.RG16I),k===s.INT&&(q=s.RG32I)),E===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(q=s.RGB16UI),k===s.UNSIGNED_INT&&(q=s.RGB32UI),k===s.BYTE&&(q=s.RGB8I),k===s.SHORT&&(q=s.RGB16I),k===s.INT&&(q=s.RGB32I)),E===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),k===s.UNSIGNED_INT&&(q=s.RGBA32UI),k===s.BYTE&&(q=s.RGBA8I),k===s.SHORT&&(q=s.RGBA16I),k===s.INT&&(q=s.RGBA32I)),E===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),E===s.RGBA){const Me=Z?Pc:Ze.getTransfer($);k===s.FLOAT&&(q=s.RGBA32F),k===s.HALF_FLOAT&&(q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(q=Me===Et?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(P,E){let k;return P?E===null||E===Ds||E===Ha?k=s.DEPTH24_STENCIL8:E===Gi?k=s.DEPTH32F_STENCIL8:E===Va&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ds||E===Ha?k=s.DEPTH_COMPONENT24:E===Gi?k=s.DEPTH_COMPONENT32F:E===Va&&(k=s.DEPTH_COMPONENT16),k}function A(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xn&&P.minFilter!==ui?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&h.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),M(E)}function C(P){const E=n.get(P);if(E.__webglInit===void 0)return;const k=P.source,$=f.get(k);if($){const Z=$[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(P),Object.keys($).length===0&&f.delete(k)}n.remove(P)}function S(P){const E=n.get(P);s.deleteTexture(E.__webglTexture);const k=P.source,$=f.get(k);delete $[E.__cacheKey],o.memory.textures--}function M(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let Z=0;Z<E.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)s.deleteFramebuffer(E.__webglFramebuffer[$]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=P.textures;for(let $=0,Z=k.length;$<Z;$++){const q=n.get(k[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(P)}let L=0;function N(){L=0}function B(){const P=L;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function W(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function K(P,E){const k=n.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(k,P,E);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+E)}function H(P,E){const k=n.get(P);if(P.version>0&&k.__version!==P.version){ue(k,P,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+E)}function j(P,E){const k=n.get(P);if(P.version>0&&k.__version!==P.version){ue(k,P,E);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+E)}function z(P,E){const k=n.get(P);if(P.version>0&&k.__version!==P.version){se(k,P,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+E)}const ee={[Qr]:s.REPEAT,[Ji]:s.CLAMP_TO_EDGE,[Cc]:s.MIRRORED_REPEAT},I={[Xn]:s.NEAREST,[fg]:s.NEAREST_MIPMAP_NEAREST,[pa]:s.NEAREST_MIPMAP_LINEAR,[ui]:s.LINEAR,[uc]:s.LINEAR_MIPMAP_NEAREST,[Mr]:s.LINEAR_MIPMAP_LINEAR},le={[xv]:s.NEVER,[bv]:s.ALWAYS,[yv]:s.LESS,[Mg]:s.LEQUAL,[Mv]:s.EQUAL,[Tv]:s.GEQUAL,[Sv]:s.GREATER,[Ev]:s.NOTEQUAL};function Oe(P,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ui||E.magFilter===uc||E.magFilter===pa||E.magFilter===Mr||E.minFilter===ui||E.minFilter===uc||E.minFilter===pa||E.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ee[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ee[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ee[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,I[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xn||E.minFilter!==pa&&E.minFilter!==Mr||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ye(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const $=E.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const q=W(E);if(q!==P.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[q].usedTimes++;const Me=Z[P.__cacheKey];Me!==void 0&&(Z[P.__cacheKey].usedTimes--,Me.usedTimes===0&&S(E)),P.__cacheKey=q,P.__webglTexture=Z[q].texture}return k}function Y(P,E,k){return Math.floor(Math.floor(P/k)/E)}function te(P,E,k,$){const q=P.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,k,$,E.data);else{q.sort((ne,pe)=>ne.start-pe.start);let Me=0;for(let ne=1;ne<q.length;ne++){const pe=q[Me],ke=q[ne],Fe=pe.start+pe.count,ae=Y(ke.start,E.width,4),Ve=Y(pe.start,E.width,4);ke.start<=Fe+1&&ae===Ve&&Y(ke.start+ke.count-1,E.width,4)===ae?pe.count=Math.max(pe.count,ke.start+ke.count-pe.start):(++Me,q[Me]=ke)}q.length=Me+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),be=s.getParameter(s.UNPACK_SKIP_PIXELS),he=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ne=0,pe=q.length;ne<pe;ne++){const ke=q[ne],Fe=Math.floor(ke.start/4),ae=Math.ceil(ke.count/4),Ve=Fe%E.width,D=Math.floor(Fe/E.width),ce=ae,Q=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Ve,D,ce,Q,k,$,E.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,be),s.pixelStorei(s.UNPACK_SKIP_ROWS,he)}}function ue(P,E,k){let $=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=s.TEXTURE_3D);const Z=Ye(P,E),q=E.source;t.bindTexture($,P.__webglTexture,s.TEXTURE0+k);const Me=n.get(q);if(q.version!==Me.__version||Z===!0){t.activeTexture(s.TEXTURE0+k);const oe=Ze.getPrimaries(Ze.workingColorSpace),be=E.colorSpace===Hr?null:Ze.getPrimaries(E.colorSpace),he=E.colorSpace===Hr||oe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ne=_(E.image,!1,i.maxTextureSize);ne=Re(E,ne);const pe=r.convert(E.format,E.colorSpace),ke=r.convert(E.type);let Fe=x(E.internalFormat,pe,ke,E.colorSpace,E.isVideoTexture);Oe($,E);let ae;const Ve=E.mipmaps,D=E.isVideoTexture!==!0,ce=Me.__version===void 0||Z===!0,Q=q.dataReady,me=A(E,ne);if(E.isDepthTexture)Fe=v(E.format===Wa,E.type),ce&&(D?t.texStorage2D(s.TEXTURE_2D,1,Fe,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ne.width,ne.height,0,pe,ke,null));else if(E.isDataTexture)if(Ve.length>0){D&&ce&&t.texStorage2D(s.TEXTURE_2D,me,Fe,Ve[0].width,Ve[0].height);for(let ie=0,J=Ve.length;ie<J;ie++)ae=Ve[ie],D?Q&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ae.width,ae.height,pe,ke,ae.data):t.texImage2D(s.TEXTURE_2D,ie,Fe,ae.width,ae.height,0,pe,ke,ae.data);E.generateMipmaps=!1}else D?(ce&&t.texStorage2D(s.TEXTURE_2D,me,Fe,ne.width,ne.height),Q&&te(E,ne,pe,ke)):t.texImage2D(s.TEXTURE_2D,0,Fe,ne.width,ne.height,0,pe,ke,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){D&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Fe,Ve[0].width,Ve[0].height,ne.depth);for(let ie=0,J=Ve.length;ie<J;ie++)if(ae=Ve[ie],E.format!==wi)if(pe!==null)if(D){if(Q)if(E.layerUpdates.size>0){const Ee=Hp(ae.width,ae.height,E.format,E.type);for(const ze of E.layerUpdates){const gt=ae.data.subarray(ze*Ee/ae.data.BYTES_PER_ELEMENT,(ze+1)*Ee/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,ze,ae.width,ae.height,1,pe,gt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ae.width,ae.height,ne.depth,pe,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Fe,ae.width,ae.height,ne.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?Q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ae.width,ae.height,ne.depth,pe,ke,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Fe,ae.width,ae.height,ne.depth,0,pe,ke,ae.data)}else{D&&ce&&t.texStorage2D(s.TEXTURE_2D,me,Fe,Ve[0].width,Ve[0].height);for(let ie=0,J=Ve.length;ie<J;ie++)ae=Ve[ie],E.format!==wi?pe!==null?D?Q&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ae.width,ae.height,pe,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?Q&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ae.width,ae.height,pe,ke,ae.data):t.texImage2D(s.TEXTURE_2D,ie,Fe,ae.width,ae.height,0,pe,ke,ae.data)}else if(E.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Fe,ne.width,ne.height,ne.depth),Q)if(E.layerUpdates.size>0){const ie=Hp(ne.width,ne.height,E.format,E.type);for(const J of E.layerUpdates){const Ee=ne.data.subarray(J*ie/ne.data.BYTES_PER_ELEMENT,(J+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,pe,ke,Ee)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,ke,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ne.width,ne.height,ne.depth,0,pe,ke,ne.data);else if(E.isData3DTexture)D?(ce&&t.texStorage3D(s.TEXTURE_3D,me,Fe,ne.width,ne.height,ne.depth),Q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,ke,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ne.width,ne.height,ne.depth,0,pe,ke,ne.data);else if(E.isFramebufferTexture){if(ce)if(D)t.texStorage2D(s.TEXTURE_2D,me,Fe,ne.width,ne.height);else{let ie=ne.width,J=ne.height;for(let Ee=0;Ee<me;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,Fe,ie,J,0,pe,ke,null),ie>>=1,J>>=1}}else if(Ve.length>0){if(D&&ce){const ie=yt(Ve[0]);t.texStorage2D(s.TEXTURE_2D,me,Fe,ie.width,ie.height)}for(let ie=0,J=Ve.length;ie<J;ie++)ae=Ve[ie],D?Q&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,pe,ke,ae):t.texImage2D(s.TEXTURE_2D,ie,Fe,pe,ke,ae);E.generateMipmaps=!1}else if(D){if(ce){const ie=yt(ne);t.texStorage2D(s.TEXTURE_2D,me,Fe,ie.width,ie.height)}Q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,ke,ne)}else t.texImage2D(s.TEXTURE_2D,0,Fe,pe,ke,ne);g(E)&&p($),Me.__version=q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function se(P,E,k){if(E.image.length!==6)return;const $=Ye(P,E),Z=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+k);const q=n.get(Z);if(Z.version!==q.__version||$===!0){t.activeTexture(s.TEXTURE0+k);const Me=Ze.getPrimaries(Ze.workingColorSpace),oe=E.colorSpace===Hr?null:Ze.getPrimaries(E.colorSpace),be=E.colorSpace===Hr||Me===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const he=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let J=0;J<6;J++)!he&&!ne?pe[J]=_(E.image[J],!0,i.maxCubemapSize):pe[J]=ne?E.image[J].image:E.image[J],pe[J]=Re(E,pe[J]);const ke=pe[0],Fe=r.convert(E.format,E.colorSpace),ae=r.convert(E.type),Ve=x(E.internalFormat,Fe,ae,E.colorSpace),D=E.isVideoTexture!==!0,ce=q.__version===void 0||$===!0,Q=Z.dataReady;let me=A(E,ke);Oe(s.TEXTURE_CUBE_MAP,E);let ie;if(he){D&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Ve,ke.width,ke.height);for(let J=0;J<6;J++){ie=pe[J].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){const ze=ie[Ee];E.format!==wi?Fe!==null?D?Q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,ze.width,ze.height,Fe,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,Ve,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,ze.width,ze.height,Fe,ae,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,Ve,ze.width,ze.height,0,Fe,ae,ze.data)}}}else{if(ie=E.mipmaps,D&&ce){ie.length>0&&me++;const J=yt(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(ne){D?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe[J].width,pe[J].height,Fe,ae,pe[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,pe[J].width,pe[J].height,0,Fe,ae,pe[J].data);for(let Ee=0;Ee<ie.length;Ee++){const gt=ie[Ee].image[J].image;D?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,gt.width,gt.height,Fe,ae,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,Ve,gt.width,gt.height,0,Fe,ae,gt.data)}}else{D?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Fe,ae,pe[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,Fe,ae,pe[J]);for(let Ee=0;Ee<ie.length;Ee++){const ze=ie[Ee];D?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,Fe,ae,ze.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,Ve,Fe,ae,ze.image[J])}}}g(E)&&p(s.TEXTURE_CUBE_MAP),q.__version=Z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _e(P,E,k,$,Z,q){const Me=r.convert(k.format,k.colorSpace),oe=r.convert(k.type),be=x(k.internalFormat,Me,oe,k.colorSpace),he=n.get(E),ne=n.get(k);if(ne.__renderTarget=E,!he.__hasExternalTextures){const pe=Math.max(1,E.width>>q),ke=Math.max(1,E.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,be,pe,ke,E.depth,0,Me,oe,null):t.texImage2D(Z,q,be,pe,ke,0,Me,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Je(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,ne.__webglTexture,0,xe(E)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,ne.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(P,E,k){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const $=E.depthTexture,Z=$&&$.isDepthTexture?$.type:null,q=v(E.stencilBuffer,Z),Me=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=xe(E);Je(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,q,E.width,E.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,q,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,q,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,P)}else{const $=E.textures;for(let Z=0;Z<$.length;Z++){const q=$[Z],Me=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),be=x(q.internalFormat,Me,oe,q.colorSpace),he=xe(E);k&&Je(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,be,E.width,E.height):Je(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,be,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,be,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const Z=$.__webglTexture,q=xe(E);if(E.depthTexture.format===Ga)Je(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(E.depthTexture.format===Wa)Je(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function $e(P){const E=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=$}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const $=P.texture.mipmaps;$&&$.length>0?Ue(E.__webglFramebuffer[0],P):Ue(E.__webglFramebuffer,P)}else if(k){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=s.createRenderbuffer(),He(E.__webglDepthbuffer[$],P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else{const $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),He(E.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(P,E,k){const $=n.get(P);E!==void 0&&_e($.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&$e(P)}function Se(P){const E=P.texture,k=n.get(P),$=n.get(E);P.addEventListener("dispose",b);const Z=P.textures,q=P.isWebGLCubeRenderTarget===!0,Me=Z.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=E.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let be=0;be<E.mipmaps.length;be++)k.__webglFramebuffer[oe][be]=s.createFramebuffer()}else k.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)k.__webglFramebuffer[oe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Me)for(let oe=0,be=Z.length;oe<be;oe++){const he=n.get(Z[oe]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&Je(P)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const be=Z[oe];k.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const he=r.convert(be.format,be.colorSpace),ne=r.convert(be.type),pe=x(be.internalFormat,he,ne,be.colorSpace,P.isXRRenderTarget===!0),ke=xe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,pe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),He(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)_e(k.__webglFramebuffer[oe][be],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be);else _e(k.__webglFramebuffer[oe],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let oe=0,be=Z.length;oe<be;oe++){const he=Z[oe],ne=n.get(he);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),Oe(s.TEXTURE_2D,he),_e(k.__webglFramebuffer,P,he,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),g(he)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),Oe(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)_e(k.__webglFramebuffer[be],P,E,s.COLOR_ATTACHMENT0,oe,be);else _e(k.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,oe,0);g(E)&&p(oe),t.unbindTexture()}P.depthBuffer&&$e(P)}function U(P){const E=P.textures;for(let k=0,$=E.length;k<$;k++){const Z=E[k];if(g(Z)){const q=y(P),Me=n.get(Z).__webglTexture;t.bindTexture(q,Me),p(q),t.unbindTexture()}}}const _t=[],qe=[];function V(P){if(P.samples>0){if(Je(P)===!1){const E=P.textures,k=P.width,$=P.height;let Z=s.COLOR_BUFFER_BIT;const q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(P),oe=E.length>1;if(oe)for(let he=0;he<E.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const be=P.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let he=0;he<E.length;he++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[he]);const ne=n.get(E[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,Z,s.NEAREST),l===!0&&(_t.length=0,qe.length=0,_t.push(s.COLOR_ATTACHMENT0+he),P.depthBuffer&&P.resolveDepthBuffer===!1&&(_t.push(q),qe.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<E.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,Me.__webglColorRenderbuffer[he]);const ne=n.get(E[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function xe(P){return Math.min(i.maxSamples,P.samples)}function Je(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ie(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Re(P,E){const k=P.colorSpace,$=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Pn&&k!==Hr&&(Ze.getTransfer(k)===Et?($!==wi||Z!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=et,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Je}function pb(s,e){function t(n,i=Hr){let r;const o=Ze.getTransfer(i);if(n===rr)return s.UNSIGNED_BYTE;if(n===jf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===mg)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dg)return s.BYTE;if(n===pg)return s.SHORT;if(n===Va)return s.UNSIGNED_SHORT;if(n===Yf)return s.INT;if(n===Ds)return s.UNSIGNED_INT;if(n===Gi)return s.FLOAT;if(n===hl)return s.HALF_FLOAT;if(n===gg)return s.ALPHA;if(n===_g)return s.RGB;if(n===wi)return s.RGBA;if(n===Ga)return s.DEPTH_COMPONENT;if(n===Wa)return s.DEPTH_STENCIL;if(n===Kf)return s.RED;if(n===Zf)return s.RED_INTEGER;if(n===vg)return s.RG;if(n===$f)return s.RG_INTEGER;if(n===Jf)return s.RGBA_INTEGER;if(n===fc||n===dc||n===pc||n===mc)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pu||n===Lu||n===Iu||n===Du)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Iu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Du)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uu||n===Nu||n===Ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uu||n===Nu)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ou)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fu||n===Bu||n===ku||n===zu||n===Vu||n===Hu||n===Gu||n===Wu||n===Xu||n===Yu||n===ju||n===qu||n===Ku||n===Zu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ku)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ju)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ku)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zu)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gc||n===$u||n===Ju)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gc)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ju)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xg||n===Qu||n===ef||n===tf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ef)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ha?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
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

}`;class _b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new hn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cr({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vb extends rs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const _=new _b,g=t.getContextAttributes();let p=null,y=null;const x=[],v=[],A=new Te;let w=null;const b=new bn;b.viewport=new ut;const C=new bn;C.viewport=new ut;const S=[b,C],M=new by;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=x[Y];return te===void 0&&(te=new Ph,x[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=x[Y];return te===void 0&&(te=new Ph,x[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=x[Y];return te===void 0&&(te=new Ph,x[Y]=te),te.getHandSpace()};function B(Y){const te=v.indexOf(Y.inputSource);if(te===-1)return;const ue=x[te];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||o),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let Y=0;Y<x.length;Y++){const te=v[Y];te!==null&&(v[Y]=null,x[Y].disconnect(te))}L=null,N=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,y=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,se=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=g.stencil?Wa:Ga,se=g.stencil?Ha:Ds);const He={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(He),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Us(f.textureWidth,f.textureHeight,{format:wi,type:rr,depthTexture:new Dg(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Us(d.framebufferWidth,d.framebufferHeight,{format:wi,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Y){for(let te=0;te<Y.removed.length;te++){const ue=Y.removed[te],se=v.indexOf(ue);se>=0&&(v[se]=null,x[se].disconnect(ue))}for(let te=0;te<Y.added.length;te++){const ue=Y.added[te];let se=v.indexOf(ue);if(se===-1){for(let He=0;He<x.length;He++)if(He>=v.length){v.push(ue),se=He;break}else if(v[He]===null){v[He]=ue,se=He;break}if(se===-1)break}const _e=x[se];_e&&_e.connect(ue)}}const H=new R,j=new R;function z(Y,te,ue){H.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ue.matrixWorld);const se=H.distanceTo(j),_e=te.projectionMatrix.elements,He=ue.projectionMatrix.elements,Ue=_e[14]/(_e[10]-1),$e=_e[14]/(_e[10]+1),et=(_e[9]+1)/_e[5],Se=(_e[9]-1)/_e[5],U=(_e[8]-1)/_e[0],_t=(He[8]+1)/He[0],qe=Ue*U,V=Ue*_t,xe=se/(-U+_t),Je=xe*-U;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Je),Y.translateZ(xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ie=Ue+xe,Re=$e+xe,yt=qe-Je,P=V+(se-Je),E=et*$e/Re*Ie,k=Se*$e/Re*Ie;Y.projectionMatrix.makePerspective(yt,P,E,k,Ie,Re),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ee(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let te=Y.near,ue=Y.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),M.near=C.near=b.near=te,M.far=C.far=b.far=ue,(L!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,N=M.far),b.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,M.layers.mask=b.layers.mask|C.layers.mask;const se=Y.parent,_e=M.cameras;ee(M,se);for(let He=0;He<_e.length;He++)ee(_e[He],se);_e.length===2?z(M,b,C):M.projectionMatrix.copy(b.projectionMatrix),I(Y,M,se)};function I(Y,te,ue){ue===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=zo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let le=null;function Oe(Y,te){if(h=te.getViewerPose(c||o),m=te,h!==null){const ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let se=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Ue=0;Ue<ue.length;Ue++){const $e=ue[Ue];let et=null;if(d!==null)et=d.getViewport($e);else{const U=u.getViewSubImage(f,$e);et=U.viewport,Ue===0&&(e.setRenderTargetTextures(y,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(y))}let Se=S[Ue];Se===void 0&&(Se=new bn,Se.layers.enable(Ue),Se.viewport=new ut,S[Ue]=Se),Se.matrix.fromArray($e.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray($e.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(et.x,et.y,et.width,et.height),Ue===0&&(M.matrix.copy(Se.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(Se)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Ue=u.getDepthInformation(ue[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,i.renderState)}}for(let ue=0;ue<x.length;ue++){const se=v[ue],_e=x[ue];se!==null&&_e!==void 0&&_e.update(se,te,c||o)}le&&le(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}const Ye=new Yg;Ye.setAnimationLoop(Oe),this.setAnimationLoop=function(Y){le=Y},this.dispose=function(){}}}const fs=new tn,xb=new Ce;function yb(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,wg(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Wn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Wn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,v=y.envMapRotation;x&&(g.envMap.value=x,fs.copy(v),fs.x*=-1,fs.y*=-1,fs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),g.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(fs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mb(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(m(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",g));const A=x.program;n.updateUBOMapping(y,A);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function h(y){const x=u();y.__bindingPointIndex=x;const v=s.createBuffer(),A=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],v=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=C.length;S<M;S++){const L=C[S];if(d(L,w,S,A)===!0){const N=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let K=0;K<B.length;K++){const H=B[K],j=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+W,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,v,A){const w=y.value,b=x+"_"+v;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const C=A[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function m(y){const x=y.uniforms;let v=0;const A=16;for(let b=0,C=x.length;b<C;b++){const S=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,L=S.length;M<L;M++){const N=S[M],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,K=B.length;W<K;W++){const H=B[W],j=_(H),z=v%A,ee=z%j.boundary,I=z+ee;v+=ee,I!==0&&A-I<j.storage&&(v+=A-I),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=j.storage}}}const w=v%A;return w>0&&(v+=A-w),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Sb{constructor(e={}){const{canvas:t=Hv(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=ft;let w=0,b=0,C=null,S=-1,M=null;const L=new ut,N=new ut;let B=null;const W=new Pe(0);let K=0,H=t.width,j=t.height,z=1,ee=null,I=null;const le=new ut(0,0,H,j),Oe=new ut(0,0,H,j);let Ye=!1;const Y=new sd;let te=!1,ue=!1;const se=new Ce,_e=new Ce,He=new R,Ue=new ut,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Se(){return C===null?z:1}let U=n;function _t(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wf}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",J,!1),U===null){const F="webgl2";if(U=_t(F,T),U===null)throw _t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let qe,V,xe,Je,Ie,Re,yt,P,E,k,$,Z,q,Me,oe,be,he,ne,pe,ke,Fe,ae,Ve,D;function ce(){qe=new IE(U),qe.init(),ae=new pb(U,qe),V=new bE(U,qe,e,ae),xe=new fb(U,qe),V.reverseDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),Je=new NE(U),Ie=new QT,Re=new db(U,qe,xe,Ie,V,ae,Je),yt=new AE(v),P=new LE(v),E=new Vy(U),Ve=new EE(U,E),k=new DE(U,E,Je,Ve),$=new FE(U,k,E,Je),pe=new OE(U,V,Re),be=new wE(Ie),Z=new JT(v,yt,P,qe,V,Ve,be),q=new yb(v,Ie),Me=new tb,oe=new ab(qe),ne=new SE(v,yt,P,xe,$,d,l),he=new hb(v,$,V),D=new Mb(U,Je,V,xe),ke=new TE(U,qe,Je),Fe=new UE(U,qe,Je),Je.programs=Z.programs,v.capabilities=V,v.extensions=qe,v.properties=Ie,v.renderLists=Me,v.shadowMap=he,v.state=xe,v.info=Je}ce();const Q=new vb(v,U);this.xr=Q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=qe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=qe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(H,j,!1))},this.getSize=function(T){return T.set(H,j)},this.setSize=function(T,F,X=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,j=F,t.width=Math.floor(T*z),t.height=Math.floor(F*z),X===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(H*z,j*z).floor()},this.setDrawingBufferSize=function(T,F,X){H=T,j=F,z=X,t.width=Math.floor(T*X),t.height=Math.floor(F*X),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(le)},this.setViewport=function(T,F,X,G){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,F,X,G),xe.viewport(L.copy(le).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(Oe)},this.setScissor=function(T,F,X,G){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,F,X,G),xe.scissor(N.copy(Oe).multiplyScalar(z).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(T){xe.setScissorTest(Ye=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,X=!0){let G=0;if(T){let O=!1;if(C!==null){const re=C.texture.format;O=re===Jf||re===$f||re===Zf}if(O){const re=C.texture.type,de=re===rr||re===Ds||re===Va||re===Ha||re===jf||re===qf,Ae=ne.getClearColor(),ye=ne.getClearAlpha(),Be=Ae.r,Ge=Ae.g,Ne=Ae.b;de?(m[0]=Be,m[1]=Ge,m[2]=Ne,m[3]=ye,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Be,_[1]=Ge,_[2]=Ne,_[3]=ye,U.clearBufferiv(U.COLOR,0,_))}else G|=U.COLOR_BUFFER_BIT}F&&(G|=U.DEPTH_BUFFER_BIT),X&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ne.dispose(),Me.dispose(),oe.dispose(),Ie.dispose(),yt.dispose(),P.dispose(),$.dispose(),Ve.dispose(),D.dispose(),Z.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",fe),Q.removeEventListener("sessionend",je),De.stop()};function me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Je.autoReset,F=he.enabled,X=he.autoUpdate,G=he.needsUpdate,O=he.type;ce(),Je.autoReset=T,he.enabled=F,he.autoUpdate=X,he.needsUpdate=G,he.type=O}function J(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ee(T){const F=T.target;F.removeEventListener("dispose",Ee),ze(F)}function ze(T){gt(T),Ie.remove(T)}function gt(T){const F=Ie.get(T).programs;F!==void 0&&(F.forEach(function(X){Z.releaseProgram(X)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,X,G,O,re){F===null&&(F=$e);const de=O.isMesh&&O.matrixWorld.determinant()<0,Ae=ei(T,F,X,G,O);xe.setMaterial(G,de);let ye=X.index,Be=1;if(G.wireframe===!0){if(ye=k.getWireframeAttribute(X),ye===void 0)return;Be=2}const Ge=X.drawRange,Ne=X.attributes.position;let Ke=Ge.start*Be,St=(Ge.start+Ge.count)*Be;re!==null&&(Ke=Math.max(Ke,re.start*Be),St=Math.min(St,(re.start+re.count)*Be)),ye!==null?(Ke=Math.max(Ke,0),St=Math.min(St,ye.count)):Ne!=null&&(Ke=Math.max(Ke,0),St=Math.min(St,Ne.count));const Xt=St-Ke;if(Xt<0||Xt===1/0)return;Ve.setup(O,G,Ae,X,ye);let Ut,Ct=ke;if(ye!==null&&(Ut=E.get(ye),Ct=Fe,Ct.setIndex(Ut)),O.isMesh)G.wireframe===!0?(xe.setLineWidth(G.wireframeLinewidth*Se()),Ct.setMode(U.LINES)):Ct.setMode(U.TRIANGLES);else if(O.isLine){let We=G.linewidth;We===void 0&&(We=1),xe.setLineWidth(We*Se()),O.isLineSegments?Ct.setMode(U.LINES):O.isLineLoop?Ct.setMode(U.LINE_LOOP):Ct.setMode(U.LINE_STRIP)}else O.isPoints?Ct.setMode(U.POINTS):O.isSprite&&Ct.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ao("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))Ct.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const We=O._multiDrawStarts,zt=O._multiDrawCounts,mt=O._multiDrawCount,ti=ye?E.get(ye).bytesPerElement:1,Xs=Ie.get(G).currentProgram.getUniforms();for(let ni=0;ni<mt;ni++)Xs.setValue(U,"_gl_DrawID",ni),Ct.render(We[ni]/ti,zt[ni])}else if(O.isInstancedMesh)Ct.renderInstances(Ke,Xt,O.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,zt=Math.min(X.instanceCount,We);Ct.renderInstances(Ke,Xt,zt)}else Ct.render(Ke,Xt)};function ve(T,F,X){T.transparent===!0&&T.side===Zi&&T.forceSinglePass===!1?(T.side=Wn,T.needsUpdate=!0,wt(T,F,X),T.side=Ar,T.needsUpdate=!0,wt(T,F,X),T.side=Zi):wt(T,F,X)}this.compile=function(T,F,X=null){X===null&&(X=T),p=oe.get(X),p.init(F),x.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==X&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const re=O.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const Ae=re[de];ve(Ae,X,O),G.add(Ae)}else ve(re,X,O),G.add(re)}),p=x.pop(),G},this.compileAsync=function(T,F,X=null){const G=this.compile(T,F,X);return new Promise(O=>{function re(){if(G.forEach(function(de){Ie.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){O(T);return}setTimeout(re,10)}qe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Le=null;function tt(T){Le&&Le(T)}function fe(){De.stop()}function je(){De.start()}const De=new Yg;De.setAnimationLoop(tt),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(T){Le=T,Q.setAnimationLoop(T),T===null?De.stop():De.start()},Q.addEventListener("sessionstart",fe),Q.addEventListener("sessionend",je),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,C),p=oe.get(T,x.length),p.init(F),x.push(p),_e.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(_e),ue=this.localClippingEnabled,te=be.init(this.clippingPlanes,ue),g=Me.get(T,y.length),g.init(),y.push(g),Q.enabled===!0&&Q.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Xe(re,F,-1/0,v.sortObjects)}Xe(T,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ee,I),et=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,et&&ne.addToRenderList(g,T),this.info.render.frame++,te===!0&&be.beginShadows();const X=p.state.shadowsArray;he.render(X,T,F),te===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){const re=F.cameras;if(O.length>0)for(let de=0,Ae=re.length;de<Ae;de++){const ye=re[de];ot(G,O,T,ye)}et&&ne.render(T);for(let de=0,Ae=re.length;de<Ae;de++){const ye=re[de];jt(g,T,ye,ye.viewport)}}else O.length>0&&ot(G,O,T,F),et&&ne.render(T),jt(g,T,F);C!==null&&b===0&&(Re.updateMultisampleRenderTarget(C),Re.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,F),Ve.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],te===!0&&be.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Xe(T,F,X,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){G&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_e);const de=$.update(T),Ae=T.material;Ae.visible&&g.push(T,de,Ae,X,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const de=$.update(T),Ae=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ue.copy(de.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(_e)),Array.isArray(Ae)){const ye=de.groups;for(let Be=0,Ge=ye.length;Be<Ge;Be++){const Ne=ye[Be],Ke=Ae[Ne.materialIndex];Ke&&Ke.visible&&g.push(T,de,Ke,X,Ue.z,Ne)}}else Ae.visible&&g.push(T,de,Ae,X,Ue.z,null)}}const re=T.children;for(let de=0,Ae=re.length;de<Ae;de++)Xe(re[de],F,X,G)}function jt(T,F,X,G){const O=T.opaque,re=T.transmissive,de=T.transparent;p.setupLightsView(X),te===!0&&be.setGlobalState(v.clippingPlanes,X),G&&xe.viewport(L.copy(G)),O.length>0&&Lt(O,F,X),re.length>0&&Lt(re,F,X),de.length>0&&Lt(de,F,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ot(T,F,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Us(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?hl:rr,minFilter:Mr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const re=p.state.transmissionRenderTarget[G.id],de=G.viewport||L;re.setSize(de.z*v.transmissionResolutionScale,de.w*v.transmissionResolutionScale);const Ae=v.getRenderTarget(),ye=v.getActiveCubeFace(),Be=v.getActiveMipmapLevel();v.setRenderTarget(re),v.getClearColor(W),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),et&&ne.render(X);const Ge=v.toneMapping;v.toneMapping=Kr;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),te===!0&&be.setGlobalState(v.clippingPlanes,G),Lt(T,X,G),Re.updateMultisampleRenderTarget(re),Re.updateRenderTargetMipmap(re),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let St=0,Xt=F.length;St<Xt;St++){const Ut=F[St],Ct=Ut.object,We=Ut.geometry,zt=Ut.material,mt=Ut.group;if(zt.side===Zi&&Ct.layers.test(G.layers)){const ti=zt.side;zt.side=Wn,zt.needsUpdate=!0,rn(Ct,X,G,We,zt,mt),zt.side=ti,zt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Re.updateMultisampleRenderTarget(re),Re.updateRenderTargetMipmap(re))}v.setRenderTarget(Ae,ye,Be),v.setClearColor(W,K),Ne!==void 0&&(G.viewport=Ne),v.toneMapping=Ge}function Lt(T,F,X){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,re=T.length;O<re;O++){const de=T[O],Ae=de.object,ye=de.geometry,Be=de.group;let Ge=de.material;Ge.allowOverride===!0&&G!==null&&(Ge=G),Ae.layers.test(X.layers)&&rn(Ae,F,X,ye,Ge,Be)}}function rn(T,F,X,G,O,re){T.onBeforeRender(v,F,X,G,O,re),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,F,X,G,T,re),O.transparent===!0&&O.side===Zi&&O.forceSinglePass===!1?(O.side=Wn,O.needsUpdate=!0,v.renderBufferDirect(X,F,G,O,T,re),O.side=Ar,O.needsUpdate=!0,v.renderBufferDirect(X,F,G,O,T,re),O.side=Zi):v.renderBufferDirect(X,F,G,O,T,re),T.onAfterRender(v,F,X,G,O,re)}function wt(T,F,X){F.isScene!==!0&&(F=$e);const G=Ie.get(T),O=p.state.lights,re=p.state.shadowsArray,de=O.state.version,Ae=Z.getParameters(T,O.state,re,F,X),ye=Z.getProgramCacheKey(Ae);let Be=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?P:yt).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",Ee),Be=new Map,G.programs=Be);let Ge=Be.get(ye);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===de)return vt(T,Ae),Ge}else Ae.uniforms=Z.getUniforms(T),T.onBeforeCompile(Ae,v),Ge=Z.acquireProgram(Ae,ye),Be.set(ye,Ge),G.uniforms=Ae.uniforms;const Ne=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=be.uniform),vt(T,Ae),G.needsLights=Ln(T),G.lightsStateVersion=de,G.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ge,G.uniformsList=null,Ge}function At(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=_c.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function vt(T,F){const X=Ie.get(T);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function ei(T,F,X,G,O){F.isScene!==!0&&(F=$e),Re.resetTextureUnits();const re=F.fog,de=G.isMeshStandardMaterial?F.environment:null,Ae=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pn,ye=(G.isMeshStandardMaterial?P:yt).get(G.envMap||de),Be=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!X.morphAttributes.position,Ke=!!X.morphAttributes.normal,St=!!X.morphAttributes.color;let Xt=Kr;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Xt=v.toneMapping);const Ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,We=Ie.get(G),zt=p.state.lights;if(te===!0&&(ue===!0||T!==M)){const In=T===M&&G.id===S;be.setState(G,T,In)}let mt=!1;G.version===We.__version?(We.needsLights&&We.lightsStateVersion!==zt.state.version||We.outputColorSpace!==Ae||O.isBatchedMesh&&We.batching===!1||!O.isBatchedMesh&&We.batching===!0||O.isBatchedMesh&&We.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&We.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&We.instancing===!1||!O.isInstancedMesh&&We.instancing===!0||O.isSkinnedMesh&&We.skinning===!1||!O.isSkinnedMesh&&We.skinning===!0||O.isInstancedMesh&&We.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&We.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&We.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&We.instancingMorph===!1&&O.morphTexture!==null||We.envMap!==ye||G.fog===!0&&We.fog!==re||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==be.numPlanes||We.numIntersection!==be.numIntersection)||We.vertexAlphas!==Be||We.vertexTangents!==Ge||We.morphTargets!==Ne||We.morphNormals!==Ke||We.morphColors!==St||We.toneMapping!==Xt||We.morphTargetsCount!==Ct)&&(mt=!0):(mt=!0,We.__version=G.version);let ti=We.currentProgram;mt===!0&&(ti=wt(G,F,O));let Xs=!1,ni=!1,ta=!1;const Ot=ti.getUniforms(),_i=We.uniforms;if(xe.useProgram(ti.program)&&(Xs=!0,ni=!0,ta=!0),G.id!==S&&(S=G.id,ni=!0),Xs||M!==T){xe.buffers.depth.getReversed()?(se.copy(T.projectionMatrix),Wv(se),Xv(se),Ot.setValue(U,"projectionMatrix",se)):Ot.setValue(U,"projectionMatrix",T.projectionMatrix),Ot.setValue(U,"viewMatrix",T.matrixWorldInverse);const Yn=Ot.map.cameraPosition;Yn!==void 0&&Yn.setValue(U,He.setFromMatrixPosition(T.matrixWorld)),V.logarithmicDepthBuffer&&Ot.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ot.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,ni=!0,ta=!0)}if(O.isSkinnedMesh){Ot.setOptional(U,O,"bindMatrix"),Ot.setOptional(U,O,"bindMatrixInverse");const In=O.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Ot.setValue(U,"boneTexture",In.boneTexture,Re))}O.isBatchedMesh&&(Ot.setOptional(U,O,"batchingTexture"),Ot.setValue(U,"batchingTexture",O._matricesTexture,Re),Ot.setOptional(U,O,"batchingIdTexture"),Ot.setValue(U,"batchingIdTexture",O._indirectTexture,Re),Ot.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&Ot.setValue(U,"batchingColorTexture",O._colorsTexture,Re));const vi=X.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&pe.update(O,X,ti),(ni||We.receiveShadow!==O.receiveShadow)&&(We.receiveShadow=O.receiveShadow,Ot.setValue(U,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(_i.envMap.value=ye,_i.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(_i.envMapIntensity.value=F.environmentIntensity),ni&&(Ot.setValue(U,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Dt(_i,ta),re&&G.fog===!0&&q.refreshFogUniforms(_i,re),q.refreshMaterialUniforms(_i,G,z,j,p.state.transmissionRenderTarget[T.id]),_c.upload(U,At(We),_i,Re)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_c.upload(U,At(We),_i,Re),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ot.setValue(U,"center",O.center),Ot.setValue(U,"modelViewMatrix",O.modelViewMatrix),Ot.setValue(U,"normalMatrix",O.normalMatrix),Ot.setValue(U,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const In=G.uniformsGroups;for(let Yn=0,lh=In.length;Yn<lh;Yn++){const os=In[Yn];D.update(os,ti),D.bind(os,ti)}}return ti}function Dt(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Ln(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,X){const G=Ie.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ie.get(T.texture).__webglTexture=F,Ie.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const X=Ie.get(T);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const gi=U.createFramebuffer();this.setRenderTarget=function(T,F=0,X=0){C=T,w=F,b=X;let G=!0,O=null,re=!1,de=!1;if(T){const ye=Ie.get(T);if(ye.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(ye.__webglFramebuffer===void 0)Re.setupRenderTarget(T);else if(ye.__hasExternalTextures)Re.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ne=T.depthTexture;if(ye.__boundDepthTexture!==Ne){if(Ne!==null&&Ie.has(Ne)&&(T.width!==Ne.image.width||T.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Re.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(de=!0);const Ge=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?O=Ge[F][X]:O=Ge[F],re=!0):T.samples>0&&Re.useMultisampledRTT(T)===!1?O=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?O=Ge[X]:O=Ge,L.copy(T.viewport),N.copy(T.scissor),B=T.scissorTest}else L.copy(le).multiplyScalar(z).floor(),N.copy(Oe).multiplyScalar(z).floor(),B=Ye;if(X!==0&&(O=gi),xe.bindFramebuffer(U.FRAMEBUFFER,O)&&G&&xe.drawBuffers(T,O),xe.viewport(L),xe.scissor(N),xe.setScissorTest(B),re){const ye=Ie.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,X)}else if(de){const ye=Ie.get(T.texture),Be=F;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.__webglTexture,X,Be)}else if(T!==null&&X!==0){const ye=Ie.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ye.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(T,F,X,G,O,re,de,Ae=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){xe.bindFramebuffer(U.FRAMEBUFFER,ye);try{const Be=T.textures[Ae],Ge=Be.format,Ne=Be.type;if(!V.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&X>=0&&X<=T.height-O&&(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae),U.readPixels(F,X,G,O,ae.convert(Ge),ae.convert(Ne),re))}finally{const Be=C!==null?Ie.get(C).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,F,X,G,O,re,de,Ae=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye)if(F>=0&&F<=T.width-G&&X>=0&&X<=T.height-O){xe.bindFramebuffer(U.FRAMEBUFFER,ye);const Be=T.textures[Ae],Ge=Be.format,Ne=Be.type;if(!V.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae),U.readPixels(F,X,G,O,ae.convert(Ge),ae.convert(Ne),0);const St=C!==null?Ie.get(C).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,St);const Xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gv(U,Xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Ke),U.deleteSync(Xt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,X=0){const G=Math.pow(2,-X),O=Math.floor(T.image.width*G),re=Math.floor(T.image.height*G),de=F!==null?F.x:0,Ae=F!==null?F.y:0;Re.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,de,Ae,O,re),xe.unbindTexture()};const sn=U.createFramebuffer(),on=U.createFramebuffer();this.copyTextureToTexture=function(T,F,X=null,G=null,O=0,re=null){re===null&&(O!==0?(Ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let de,Ae,ye,Be,Ge,Ne,Ke,St,Xt;const Ut=T.isCompressedTexture?T.mipmaps[re]:T.image;if(X!==null)de=X.max.x-X.min.x,Ae=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,Ge=X.min.y,Ne=X.isBox3?X.min.z:0;else{const vi=Math.pow(2,-O);de=Math.floor(Ut.width*vi),Ae=Math.floor(Ut.height*vi),T.isDataArrayTexture?ye=Ut.depth:T.isData3DTexture?ye=Math.floor(Ut.depth*vi):ye=1,Be=0,Ge=0,Ne=0}G!==null?(Ke=G.x,St=G.y,Xt=G.z):(Ke=0,St=0,Xt=0);const Ct=ae.convert(F.format),We=ae.convert(F.type);let zt;F.isData3DTexture?(Re.setTexture3D(F,0),zt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Re.setTexture2DArray(F,0),zt=U.TEXTURE_2D_ARRAY):(Re.setTexture2D(F,0),zt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const mt=U.getParameter(U.UNPACK_ROW_LENGTH),ti=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xs=U.getParameter(U.UNPACK_SKIP_PIXELS),ni=U.getParameter(U.UNPACK_SKIP_ROWS),ta=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ne);const Ot=T.isDataArrayTexture||T.isData3DTexture,_i=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const vi=Ie.get(T),In=Ie.get(F),Yn=Ie.get(vi.__renderTarget),lh=Ie.get(In.__renderTarget);xe.bindFramebuffer(U.READ_FRAMEBUFFER,Yn.__webglFramebuffer),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,lh.__webglFramebuffer);for(let os=0;os<ye;os++)Ot&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(T).__webglTexture,O,Ne+os),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(F).__webglTexture,re,Xt+os)),U.blitFramebuffer(Be,Ge,de,Ae,Ke,St,de,Ae,U.DEPTH_BUFFER_BIT,U.NEAREST);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(O!==0||T.isRenderTargetTexture||Ie.has(T)){const vi=Ie.get(T),In=Ie.get(F);xe.bindFramebuffer(U.READ_FRAMEBUFFER,sn),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,on);for(let Yn=0;Yn<ye;Yn++)Ot?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vi.__webglTexture,O,Ne+Yn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vi.__webglTexture,O),_i?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,In.__webglTexture,re,Xt+Yn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,In.__webglTexture,re),O!==0?U.blitFramebuffer(Be,Ge,de,Ae,Ke,St,de,Ae,U.COLOR_BUFFER_BIT,U.NEAREST):_i?U.copyTexSubImage3D(zt,re,Ke,St,Xt+Yn,Be,Ge,de,Ae):U.copyTexSubImage2D(zt,re,Ke,St,Be,Ge,de,Ae);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _i?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(zt,re,Ke,St,Xt,de,Ae,ye,Ct,We,Ut.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(zt,re,Ke,St,Xt,de,Ae,ye,Ct,Ut.data):U.texSubImage3D(zt,re,Ke,St,Xt,de,Ae,ye,Ct,We,Ut):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,re,Ke,St,de,Ae,Ct,We,Ut.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,re,Ke,St,Ut.width,Ut.height,Ct,Ut.data):U.texSubImage2D(U.TEXTURE_2D,re,Ke,St,de,Ae,Ct,We,Ut);U.pixelStorei(U.UNPACK_ROW_LENGTH,mt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ti),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xs),U.pixelStorei(U.UNPACK_SKIP_ROWS,ni),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ta),re===0&&F.generateMipmaps&&U.generateMipmap(zt),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,F,X=null,G=null,O=0){return Ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,X,G,O)},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&Re.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Re.setTextureCube(T,0):T.isData3DTexture?Re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Re.setTexture2DArray(T,0):Re.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,xe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const dm={type:"change"},gd={type:"start"},$g={type:"end"},Kl=new $o,pm=new Vr,Eb=Math.cos(70*Vt.DEG2RAD),an=new R,jn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qh=1e-6;class Tb extends ky{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bo.ROTATE,MIDDLE:bo.DOLLY,RIGHT:bo.PAN},this.touches={ONE:go.ROTATE,TWO:go.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Ft,this._lastTargetPosition=new R,this._quat=new Ft().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vp,this._sphericalDelta=new Vp,this._scale=1,this._panOffset=new R,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new R,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wb.bind(this),this._onPointerDown=bb.bind(this),this._onPointerUp=Ab.bind(this),this._onContextMenu=Ub.bind(this),this._onMouseWheel=Pb.bind(this),this._onKeyDown=Lb.bind(this),this._onTouchStart=Ib.bind(this),this._onTouchMove=Db.bind(this),this._onMouseDown=Cb.bind(this),this._onMouseMove=Rb.bind(this),this._interceptControlDown=Nb.bind(this),this._interceptControlUp=Ob.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dm),this.update(),this.state=Tt.NONE}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=jn:n>Math.PI&&(n-=jn),i<-Math.PI?i+=jn:i>Math.PI&&(i-=jn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=an.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Kl.origin.copy(this.object.position),Kl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kl.direction))<Eb?this.object.lookAt(this.target):(pm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kl.intersectPlane(pm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qh||this._lastTargetPosition.distanceToSquared(this.target)>qh?(this.dispatchEvent(dm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;an.copy(i).sub(this.target);let r=an.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function bb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function wb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Ab(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($g),this.state=Tt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Cb(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case bo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Tt.DOLLY;break;case bo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Tt.ROTATE}break;case bo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(gd)}function Rb(s){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Pb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(s.preventDefault(),this.dispatchEvent(gd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent($g))}function Lb(s){this.enabled!==!1&&this._handleKeyDown(s)}function Ib(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case go.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Tt.TOUCH_ROTATE;break;case go.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case go.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Tt.TOUCH_DOLLY_PAN;break;case go.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(gd)}function Db(s){switch(this._trackPointer(s),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Tt.NONE}}function Ub(s){this.enabled!==!1&&s.preventDefault()}function Nb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ob(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Jg(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},_d,yn,Bt,Ci=1e8,Pt=1/Ci,ff=Math.PI*2,Fb=ff/4,Bb=0,Qg=Math.sqrt,kb=Math.cos,zb=Math.sin,_n=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},Pr=function(e){return typeof e=="number"},vd=function(e){return typeof e>"u"},or=function(e){return typeof e=="object"},Kn=function(e){return e!==!1},xd=function(){return typeof window<"u"},Zl=function(e){return Yt(e)||_n(e)},e_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rn=Array.isArray,df=/(?:-?\.?\d|\.)+/gi,t_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Kh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,n_=/[+-]=-?[.\d]+/,i_=/[^,'"\[\]\s]+/gi,Vb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,ji,pf,yd,pi={},Oc={},r_,s_=function(e){return(Oc=Xo(e,pi))&&Qn},Md=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qa=function(e,t){return!t&&console.warn(e)},o_=function(e,t){return e&&(pi[e]=t)&&Oc&&(Oc[e]=t)||pi},el=function(){return 0},Hb={suppressEvents:!0,isStart:!0,kill:!1},vc={suppressEvents:!0,kill:!1},Gb={suppressEvents:!0},Sd={},Zr=[],mf={},a_,ai={},Zh={},mm=30,xc=[],Ed="",Td=function(e){var t=e[0],n,i;if(or(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=xc.length;i--&&!xc[i].targetTest(t););n=xc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new L_(e[i],n)))||e.splice(i,1);return e},ws=function(e){return e._gsap||Td(Ri(e))[0]._gsap},l_=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():vd(n)&&e.getAttribute&&e.getAttribute(t)||n},Zn=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},en=function(e){return Math.round(e*1e7)/1e7||0},Po=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Wb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Fc=function(){var e=Zr.length,t=Zr.slice(0),n,i;for(mf={},Zr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bd=function(e){return!!(e._initted||e._startAt||e.add)},c_=function(e,t,n,i){Zr.length&&!yn&&Fc(),e.render(t,n,!!(yn&&t<0&&bd(e))),Zr.length&&!yn&&Fc()},h_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(i_).length<2?t:_n(e)?e.trim():e},u_=function(e){return e},mi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Xb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Xo=function(e,t){for(var n in t)e[n]=t[n];return e},gm=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=or(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Bc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ca=function(e){var t=e.parent||Ht,n=e.keyframes?Xb(Rn(e.keyframes)):mi;if(Kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Yb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},f_=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},th=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},es=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},As=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},jb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},gf=function(e,t,n,i){return e._startAt&&(yn?e._startAt.revert(vc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},qb=function s(e){return!e||e._ts&&s(e.parent)},_m=function(e){return e._repeat?Yo(e._tTime,e=e.duration()+e._rDelay)*e:0},Yo=function(e,t){var n=Math.floor(e=en(e/t));return e&&n===e?n-1:n},kc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},nh=function(e){return e._end=en(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},ih=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=en(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),nh(e),n._dirty||As(n,e)),e},d_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=kc(e.rawTime(),t),(!t._dur||ml(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),As(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},$i=function(e,t,n,i){return t.parent&&es(t),t._start=en((Pr(n)?n:n||e!==Ht?Mi(e,n,t):e._time)+t._delay),t._end=en(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),f_(e,t,"_first","_last",e._sort?"_start":0),_f(t)||(e._recent=t),i||d_(e,t),e._ts<0&&ih(e,e._tTime),e},p_=function(e,t){return(pi.ScrollTrigger||Md("scrollTrigger",t))&&pi.ScrollTrigger.create(t,e)},m_=function(e,t,n,i,r){if(Ad(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&a_!==ci.frame)return Zr.push(e),e._lazy=[r,i],1},Kb=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},_f=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Zb=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Kb(e)&&!(!e._initted&&_f(e))||(e._ts<0||e._dp._ts<0)&&!_f(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=ml(0,e._tDur,t),h=Yo(l,a),e._yoyo&&h&1&&(o=1-o),h!==Yo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||yn||i||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&m_(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&gf(e,t,n,!0),e._onUpdate&&!n&&fi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&fi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&es(e,1),!n&&!yn&&(fi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$b=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},jo=function(e,t,n,i){var r=e._repeat,o=en(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:en(o*(r+1)+e._rDelay*r):o,a>0&&!i&&ih(e,e._tTime=e._tDur*a),e.parent&&nh(e),n||As(e.parent,e),e},vm=function(e){return e instanceof Hn?As(e):jo(e,e._dur)},Jb={_start:0,endTime:el,totalDuration:el},Mi=function s(e,t,n){var i=e.labels,r=e._recent||Jb,o=e.duration()>=Ci?r.endTime(!1):e._dur,a,l,c;return _n(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Rn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ra=function(e,t,n){var i=Pr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;o.immediateRender=Kn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Qt(t[0],o,t[r+1])},ss=function(e,t){return e||e===0?t(e):t},ml=function(e,t,n){return n<e?e:n>t?t:n},wn=function(e,t){return!_n(e)||!(t=Vb.exec(e))?"":t[1]},Qb=function(e,t,n){return ss(n,function(i){return ml(e,t,i)})},vf=[].slice,g_=function(e,t){return e&&or(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&or(e[0]))&&!e.nodeType&&e!==ji},ew=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return _n(i)&&!t||g_(i,1)?(r=n).push.apply(r,Ri(i)):n.push(i)})||n},Ri=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):_n(e)&&!n&&(pf||!qo())?vf.call((t||yd).querySelectorAll(e),0):Rn(e)?ew(e,n):g_(e)?vf.call(e,0):e?[e]:[]},xf=function(e){return e=Ri(e)[0]||Qa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ri(t,n.querySelectorAll?n:n===e?Qa("Invalid scope")||yd.createElement("div"):e)}},__=function(e){return e.sort(function(){return .5-Math.random()})},v_=function(e){if(Yt(e))return e;var t=or(e)?e:{each:e},n=Cs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return _n(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,m){var _=(m||t).length,g=o[_],p,y,x,v,A,w,b,C,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,Ci])[1],!S){for(b=-Ci;b<(b=m[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(g=o[_]=[],p=l?Math.min(S,_)*h-.5:i%S,y=S===Ci?0:l?_*u/S-.5:i/S|0,b=0,C=Ci,w=0;w<_;w++)x=w%S-p,v=y-(w/S|0),g[w]=A=c?Math.abs(c==="y"?v:x):Qg(x*x+v*v),A>b&&(b=A),A<C&&(C=A);i==="random"&&__(g),g.max=b-C,g.min=C,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),g.b=_<0?r-_:r,g.u=wn(t.amount||t.each)||0,n=n&&_<0?C_(n):n}return _=(g[f]-g.min)/g.max||0,en(g.b+(n?n(_):_)*g.v)+g.u}},yf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=en(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Pr(n)?0:wn(n))}},x_=function(e,t){var n=Rn(e),i,r;return!n&&or(e)&&(i=n=e.radius||Ci,e.values?(e=Ri(e.values),(r=!Pr(e[0]))&&(i*=i)):e=yf(e.increment)),ss(t,n?Yt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Ci,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,r||h===o||Pr(o)?h:h+wn(o)}:yf(e))},y_=function(e,t,n,i){return ss(Rn(e)?!t:n===!0?!!(n=0):!i,function(){return Rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},tw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},nw=function(e,t){return function(n){return e(parseFloat(n))+(t||wn(n))}},iw=function(e,t,n){return S_(e,t,0,1,n)},M_=function(e,t,n){return ss(n,function(i){return e[~~t(i)]})},rw=function s(e,t,n){var i=t-e;return Rn(e)?M_(e,s(0,e.length),t):ss(n,function(r){return(i+(r-e)%i)%i+e})},sw=function s(e,t,n){var i=t-e,r=i*2;return Rn(e)?M_(e,s(0,e.length-1),t):ss(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},tl=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?i_:df),n+=e.substr(t,i-t)+y_(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},S_=function(e,t,n,i,r){var o=t-e,a=i-n;return ss(r,function(l){return n+((l-e)/o*a||0)})},ow=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=_n(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Rn(e)&&!Rn(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(m){m*=u;var _=Math.min(f,~~m);return h[_](m-_)},n=t}else i||(e=Xo(Rn(e)?[]:{},e));if(!h){for(l in t)wd.call(a,e,l,"get",t[l]);r=function(m){return Pd(m,a)||(o?e.p:e)}}}return ss(n,r)},xm=function(e,t,n){var i=e.labels,r=Ci,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},fi=function(e,t,n){var i=e.vars,r=i[t],o=Bt,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Zr.length&&Fc(),a&&(Bt=a),h=l?r.apply(c,l):r.call(c),Bt=o,h},_a=function(e){return es(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&fi(e,"onInterrupt"),e},So,E_=[],T_=function(e){if(e)if(e=!e.name&&e.default||e,xd()||e.headless){var t=e.name,n=Yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:el,render:Pd,add:wd,kill:Sw,modifier:Mw,rawVars:0},o={targetTest:0,get:0,getSetter:Rd,aliases:{},register:0};if(qo(),e!==i){if(ai[t])return;mi(i,mi(Bc(e,r),o)),Xo(i.prototype,Xo(r,Bc(e,o))),ai[i.prop=t]=i,e.targetTest&&(xc.push(i),Sd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}o_(t,i),e.register&&e.register(Qn,i,$n)}else E_.push(e)},Rt=255,va={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},$h=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rt+.5|0},b_=function(e,t,n){var i=e?Pr(e)?[e>>16,e>>8&Rt,e&Rt]:0:va.black,r,o,a,l,c,h,u,f,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),va[e])i=va[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Rt,i&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(df),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=$h(l+1/3,r,o),i[1]=$h(l,r,o),i[2]=$h(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(t_),n&&i.length<4&&(i[3]=1),i}else i=e.match(df)||va.transparent;i=i.map(Number)}return t&&!m&&(r=i[0]/Rt,o=i[1]/Rt,a=i[2]/Rt,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},w_=function(e){var t=[],n=[],i=-1;return e.split($r).forEach(function(r){var o=r.match(Mo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ym=function(e,t,n){var i="",r=(e+i).match($r),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=b_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=w_(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace($r,"1").split(Mo),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split($r),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},$r=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in va)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),aw=/hsl[a]?\(/,A_=function(e){var t=e.join(" "),n;if($r.lastIndex=0,$r.test(t))return n=aw.test(t),e[1]=ym(e[1],n),e[0]=ym(e[0],n,w_(e[1])),!0},nl,ci=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,f,d,m=function _(g){var p=s()-i,y=g===!0,x,v,A,w;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,x=A-o,(x>0||y)&&(w=++u.frame,f=A-u.time*1e3,u.time=A=A/1e3,o+=x+(x>=r?4:r-x),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](A,f,w,g)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){r_&&(!pf&&xd()&&(ji=pf=window,yd=ji.document||{},pi.gsap=Qn,(ji.gsapVersions||(ji.gsapVersions=[])).push(Qn.version),s_(Oc||ji.GreenSockGlobals||!ji.gsap&&ji||{}),E_.forEach(T_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(g){return setTimeout(g,o-u.time*1e3+1|0)},nl=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),nl=0,c=el},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){r=1e3/(g||240),o=u.time*1e3+r},add:function(g,p,y){var x=p?function(v,A,w,b){g(v,A,w,b),u.remove(x)}:g;return u.remove(g),a[y?"unshift":"push"](x),qo(),x},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u})(),qo=function(){return!nl&&ci.wake()},dt={},lw=/^[\d.\-M][\d.\-,\s]/,cw=/["']/g,hw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(cw,"").trim():+c,i=l.substr(a+1).trim();return t},uw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},fw=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hw(t[1])]:uw(e).split(",").map(h_)):dt._CE&&lw.test(e)?dt._CE("",e):n},C_=function(e){return function(t){return 1-e(1-t)}},R_=function s(e,t){for(var n=e._first,i;n;)n instanceof Hn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Cs=function(e,t){return e&&(Yt(e)?e:dt[e]||fw(e))||t},Ws=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Zn(e,function(a){dt[a]=pi[a]=r,dt[o=a.toLowerCase()]=n;for(var l in r)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=r[l]}),r},P_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Jh=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/ff*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*zb((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:P_(a);return r=ff/r,l.config=function(c,h){return s(e,c,h)},l},Qh=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:P_(n);return i.config=function(r){return s(e,r)},i};Zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ws(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;Ws("Elastic",Jh("in"),Jh("out"),Jh());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ws("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ws("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ws("Circ",function(s){return-(Qg(1-s*s)-1)});Ws("Sine",function(s){return s===1?1:-kb(s*Fb)+1});Ws("Back",Qh("in"),Qh("out"),Qh());dt.SteppedEase=dt.steps=pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Pt;return function(a){return((i*ml(0,o,a)|0)+r)*n}}};Wo.ease=dt["quad.out"];Zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ed+=s+","+s+"Params,"});var L_=function(e,t){this.id=Bb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:l_,this.set=t?t.getSetter:Rd},il=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,jo(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),nl||ci.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,jo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(qo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ih(this,n),!r._dp||r.parent||d_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),c_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_m(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_m(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Yo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?kc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime(ml(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),nh(this),jb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$i(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Gb);var i=yn;return yn=n,bd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Mi(this,n),Kn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-Pt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Pt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Yt(n)?n:u_,a=function(){var c=i.then;i.then=null,Yt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){_a(this)},s})();mi(il.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Hn=(function(s){Jg(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Kn(n.sortChildren),Ht&&$i(n.parent||Ht,gr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&p_(gr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Ra(0,arguments,this),this},t.from=function(i,r,o){return Ra(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Ra(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Ca(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Qt(i,r,Mi(this,o),1),this},t.call=function(i,r,o){return $i(this,Qt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Qt(i,o,Mi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Ca(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,Ca(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:en(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,m,_,g,p,y,x,v,A,w,b;if(this!==Ht&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,x=this._ts,p=!x,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(f=en(h%g),h===l?(_=this._repeat,f=c):(A=en(h/g),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=Yo(this._tTime,g),!a&&this._tTime&&A!==_&&this._tTime-A*g-this._dur<=0&&(A=_),w&&_&1&&(f=c-f,b=1),_!==A&&!this._lock){var C=w&&A&1,S=C===(w&&_&1);if(_<A&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(b?0:en(_*g)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&fi(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;R_(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=$b(this,en(a),en(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!A&&(fi(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){y=0,m&&(h+=this._zTime=-Pt);break}}d=m}else{d=this._last;for(var M=i<0?i:f;d;){if(m=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,r,o||yn&&bd(d)),f!==this._time||!this._ts&&!p){y=0,m&&(h+=this._zTime=M?-Pt:Pt);break}}d=m}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-Pt)._zTime=f>=a?1:-1,this._ts))return this._start=v,nh(this),this.render(i,r,o);this._onUpdate&&!r&&fi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&es(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(fi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Pr(r)||(r=Mi(this,r,i)),!(i instanceof il)){if(Rn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(_n(i))return this.addLabel(i,r);if(Yt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?$i(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ci);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return _n(i)?this.removeLabel(i):Yt(i)?this.killTweensOf(i):(i.parent===this&&th(this,i),i===this._recent&&(this._recent=this._last),As(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(ci.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Mi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Qt.delayedCall(0,r||el,o);return a.data="isPause",this._hasPause=1,$i(this,a,Mi(this,i))},t.removePause=function(i){var r=this._first;for(i=Mi(this,i);r;)r._start===i&&r.data==="isPause"&&es(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Gr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Ri(i),l=this._first,c=Pr(r),h;l;)l instanceof Qt?Wb(l._targets,a)&&(c?(!Gr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Mi(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,m=Qt.to(o,mi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!d){var g=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&jo(m,g,0,1).render(m._time,!0,!0),d=1}h&&h.apply(m,u||[])}},r));return f?m.render(0):m},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,mi({startAt:{time:Mi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),xm(this,Mi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),xm(this,Mi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return As(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),As(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Ci,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$i(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;jo(o,o===Ht&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ht._ts&&(c_(Ht,kc(i,Ht)),a_=ci.frame),ci.frame>=mm){mm+=di.autoSleep||120;var r=Ht._first;if((!r||!r._ts)&&di.autoSleep&&ci._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ci.sleep()}}},e})(il);mi(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var dw=function(e,t,n,i,r,o,a){var l=new $n(this._pt,e,t,0,1,F_,null,r),c=0,h=0,u,f,d,m,_,g,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=tl(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(Kh)||[];u=Kh.exec(i);)m=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==f[h++]&&(g=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:m.charAt(1)==="="?Po(g,m)-g:parseFloat(m)-g,m:d&&d<4?Math.round:0},c=Kh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(n_.test(i)||p)&&(l.e=0),this._pt=l,l},wd=function(e,t,n,i,r,o,a,l,c,h){Yt(i)&&(i=i(r||0,e,o));var u=e[t],f=n!=="get"?n:Yt(u)?c?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Yt(u)?c?vw:N_:Cd,m;if(_n(i)&&(~i.indexOf("random(")&&(i=tl(i)),i.charAt(1)==="="&&(m=Po(f,i)+(wn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||Mf)return!isNaN(f*i)&&i!==""?(m=new $n(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?yw:O_,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!u&&!(t in e)&&Md(t,i),dw.call(this,e,t,f,i,d,l||di.stringFilter,c))},pw=function(e,t,n,i,r){if(Yt(e)&&(e=Pa(e,r,t,n,i)),!or(e)||e.style&&e.nodeType||Rn(e)||e_(e))return _n(e)?Pa(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Pa(e[a],r,t,n,i);return o},I_=function(e,t,n,i,r,o){var a,l,c,h;if(ai[e]&&(a=new ai[e]).init(r,a.rawVars?t[e]:pw(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new $n(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==So))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Gr,Mf,Ad=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:g,x=e._overwrite==="auto"&&!_d,v=e.timeline,A,w,b,C,S,M,L,N,B,W,K,H,j;if(v&&(!f||!r)&&(r="none"),e._ease=Cs(r,Wo.ease),e._yEase=u?C_(Cs(u===!0?r:u,Wo.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(N=g[0]?ws(g[0]).harness:0,H=N&&i[N.prop],A=Bc(i,Sd),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&m?vc:Hb),_._lazy=0),o){if(es(e._startAt=Qt.set(g,mi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return fi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!d)&&e._startAt.revert(vc),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(a=!1),b=mi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Kn(l),immediateRender:a,stagger:0,parent:p},A),H&&(b[N.prop]=H),es(e._startAt=Qt.set(g,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(vc):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Kn(l)||l&&!m,w=0;w<g.length;w++){if(S=g[w],L=S._gsap||Td(g)[w]._gsap,e._ptLookup[w]=W={},mf[L.id]&&Zr.length&&Fc(),K=y===g?w:y.indexOf(S),N&&(B=new N).init(S,H||A,e,K,y)!==!1&&(e._pt=C=new $n(e._pt,S,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(z){W[z]=C}),B.priority&&(M=1)),!N||H)for(b in A)ai[b]&&(B=I_(b,A,e,K,S,y))?B.priority&&(M=1):W[b]=C=wd.call(e,S,b,"get",A[b],K,y,0,i.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),x&&e._pt&&(Gr=e,Ht.killTweensOf(S,W,e.globalTime(t)),j=!e.parent,Gr=0),e._pt&&l&&(mf[L.id]=1)}M&&B_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&v.render(Ci,!0,!0)},mw=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Mf=1,e.vars[t]="+=0",Ad(e,a),Mf=0,l?Qa(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Kt(n)+wn(u.e)),u.b&&(u.b=h.s+wn(u.b))},gw=function(e,t){var n=e[0]?ws(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Xo({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},_w=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Rn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Pa=function(e,t,n,i,r){return Yt(e)?e.call(t,n,i,r):_n(e)&&~e.indexOf("random(")?tl(e):e},D_=Ed+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",U_={};Zn(D_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return U_[s]=1});var Qt=(function(s){Jg(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ca(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Ht,x=(Rn(n)||e_(n)?Pr(n[0]):"length"in i)?[n]:Ri(n),v,A,w,b,C,S,M,L;if(a._targets=x.length?Td(x):Qa("GSAP target "+n+" not found. https://gsap.com",!di.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||Zl(c)||Zl(h)){if(i=a.vars,v=a.timeline=new Hn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=gr(a),v._start=0,f||Zl(c)||Zl(h)){if(b=x.length,M=f&&v_(f),or(f))for(C in f)~D_.indexOf(C)&&(L||(L={}),L[C]=f[C]);for(A=0;A<b;A++)w=Bc(i,U_),w.stagger=0,p&&(w.yoyoEase=p),L&&Xo(w,L),S=x[A],w.duration=+Pa(c,gr(a),A,S,x),w.delay=(+Pa(h,gr(a),A,S,x)||0)-a._delay,!f&&b===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),v.to(S,w,M?M(A,S,x):0),v._ease=dt.none;v.duration()?c=h=0:a.timeline=0}else if(m){Ca(mi(v.vars.defaults,{ease:"none"})),v._ease=Cs(m.ease||i.ease||"none");var N=0,B,W,K;if(Rn(m))m.forEach(function(H){return v.to(x,H,">")}),v.duration();else{w={};for(C in m)C==="ease"||C==="easeEach"||_w(C,m[C],w,m.easeEach);for(C in w)for(B=w[C].sort(function(H,j){return H.t-j.t}),N=0,A=0;A<B.length;A++)W=B[A],K={ease:W.e,duration:(W.t-(A?B[A-1].t:0))/100*c},K[C]=W.v,v.to(x,K,N),N+=K.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!_d&&(Gr=gr(a),Ht.killTweensOf(x),Gr=0),$i(y,gr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!m&&a._start===en(y._time)&&Kn(u)&&qb(gr(a))&&y.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-h)||0)),g&&p_(gr(a),g),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Pt&&!h?l:i<Pt?0:i,f,d,m,_,g,p,y,x,v;if(!c)Zb(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=en(u%_),u===l?(m=this._repeat,f=c):(g=en(u/_),m=~~g,m&&m===g?(f=c,m--):f>c&&(f=c)),p=this._yoyo&&m&1,p&&(v=this._yEase,f=c-f),g=Yo(this._tTime,_),f===a&&!o&&this._initted&&m===g)return this._tTime=u,this;m!==g&&(x&&this._yEase&&R_(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(en(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(m_(this,h?i:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!a&&u&&!r&&!g&&(fi(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&gf(this,i,r,o),fi(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!r&&this.parent&&fi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&gf(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&es(this,1),!r&&!(h&&!a)&&(u||a||p)&&(fi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){nl||ci.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ad(this,c),h=this._ease(c/this._dur),mw(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(ih(this,0),this.parent||f_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?_a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Gr&&Gr.vars.overwrite!==!0)._first||_a(this),this.parent&&o!==this.timeline.totalDuration()&&jo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ri(i):a,c=this._ptLookup,h=this._pt,u,f,d,m,_,g,p;if((!r||r==="all")&&Yb(a,l))return r==="all"&&(this._pt=0),_a(this);for(u=this._op=this._op||[],r!=="all"&&(_n(r)&&(_={},Zn(r,function(y){return _[y]=1}),r=_),r=gw(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(u[p]=r,m=f,d={}):(d=u[p]=u[p]||{},m=r);for(_ in m)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&th(this,g,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&_a(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ra(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Ra(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Ht.killTweensOf(i,r,o)},e})(il);mi(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zn("staggerTo,staggerFrom,staggerFromTo",function(s){Qt[s]=function(){var e=new Hn,t=vf.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Cd=function(e,t,n){return e[t]=n},N_=function(e,t,n){return e[t](n)},vw=function(e,t,n,i){return e[t](i.fp,n)},xw=function(e,t,n){return e.setAttribute(t,n)},Rd=function(e,t){return Yt(e[t])?N_:vd(e[t])&&e.setAttribute?xw:Cd},O_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},F_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Pd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Mw=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},Sw=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?th(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ew=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},B_=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},$n=(function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||O_,this.d=l||this,this.set=c||Cd,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ew,this.m=n,this.mt=r,this.tween=i},s})();Zn(Ed+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Sd[s]=1});pi.TweenMax=pi.TweenLite=Qt;pi.TimelineLite=pi.TimelineMax=Hn;Ht=new Hn({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});di.stringFilter=A_;var Rs=[],yc={},Tw=[],Mm=0,bw=0,eu=function(e){return(yc[e]||Tw).map(function(t){return t()})},Sf=function(){var e=Date.now(),t=[];e-Mm>2&&(eu("matchMediaInit"),Rs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=ji.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),eu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mm=e,eu("matchMedia"))},k_=(function(){function s(t,n){this.selector=n&&xf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=bw++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Yt(n)&&(r=i,i=n,n=Yt);var o=this,a=function(){var c=Bt,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=xf(r)),Bt=o,u=i.apply(o,arguments),Yt(u)&&o._r.push(u),Bt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Yt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Rs.length;o--;)Rs[o].id===this.id&&Rs.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),ww=(function(){function s(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){or(n)||(n={matches:n});var o=new k_(0,r||this.scope),a=o.conditions={},l,c,h;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=ji.matchMedia(n[c]),l&&(Rs.indexOf(o)<0&&Rs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Sf):l.addEventListener("change",Sf)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),zc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return T_(i)})},timeline:function(e){return new Hn(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){_n(e)&&(e=Ri(e)[0]);var r=ws(e||{}).get,o=n?u_:h_;return n==="native"&&(n=""),e&&(t?o((ai[t]&&ai[t].get||r)(e,t,n,i)):function(a,l,c){return o((ai[a]&&ai[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ri(e),e.length>1){var i=e.map(function(h){return Qn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=ai[t],a=ws(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;So._pt=0,u.init(e,n?h+n:h,So,0,[e]),u.render(1,u),So._pt&&Pd(1,So)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=Qn.to(e,mi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cs(e.ease,Wo.ease)),gm(Wo,e||{})},config:function(e){return gm(di,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ai[a]&&!pi[a]&&Qa(t+" effect requires "+a+" plugin.")}),Zh[t]=function(a,l,c){return n(Ri(a),mi(l||{},r),c)},o&&(Hn.prototype[t]=function(a,l,c){return this.add(Zh[t](a,or(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=Cs(t)},parseEase:function(e,t){return arguments.length?Cs(e,t):dt},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Hn(e),i,r;for(n.smoothChildTiming=Kn(e.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,i=Ht._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&$i(n,i,i._start-i._delay),i=r;return $i(Ht,n,0),n},context:function(e,t){return e?new k_(e,t):Bt},matchMedia:function(e){return new ww(e)},matchMediaRefresh:function(){return Rs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sf()},addEventListener:function(e,t){var n=yc[e]||(yc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=yc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:rw,wrapYoyo:sw,distribute:v_,random:y_,snap:x_,normalize:iw,getUnit:wn,clamp:Qb,splitColor:b_,toArray:Ri,selector:xf,mapRange:S_,pipe:tw,unitize:nw,interpolate:ow,shuffle:__},install:s_,effects:Zh,ticker:ci,updateRoot:Hn.updateRoot,plugins:ai,globalTimeline:Ht,core:{PropTween:$n,globals:o_,Tween:Qt,Timeline:Hn,Animation:il,getCache:ws,_removeLinkedListItem:th,reverting:function(){return yn},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return _d=e}}};Zn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return zc[s]=Qt[s]});ci.add(Hn.updateRoot);So=zc.to({},{duration:0});var Aw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Cw=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Aw(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},tu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(_n(r)&&(l={},Zn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Cw(a,r)}}}},Qn=zc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},tu("roundProps",yf),tu("modifiers"),tu("snap",x_))||zc;Qt.version=Hn.version=Qn.version="3.13.0";r_=1;xd()&&qo();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sm,Wr,Lo,Ld,Es,Em,Id,Rw=function(){return typeof window<"u"},Lr={},_s=180/Math.PI,Io=Math.PI/180,lo=Math.atan2,Tm=1e8,Dd=/([A-Z])/g,Pw=/(left|right|width|margin|padding|x)/i,Lw=/[\s,\(]\S/,er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ef=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Iw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Dw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Uw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},z_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},V_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Nw=function(e,t,n){return e.style[t]=n},Ow=function(e,t,n){return e.style.setProperty(t,n)},Fw=function(e,t,n){return e._gsap[t]=n},Bw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},kw=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},zw=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Wt="transform",Jn=Wt+"Origin",Vw=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Lr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=vr(i,a)}):this.tfm[e]=o.x?o[e]:vr(i,e),e===Jn&&(this.tfm.zOrigin=o.zOrigin);else return er.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Wt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jn,t,"")),e=Wt}(r||t)&&this.props.push(e,t,r[e])},H_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Hw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Dd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Id(),(!r||!r.isStart)&&!n[Wt]&&(H_(n),i.zOrigin&&n[Jn]&&(n[Jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},G_=function(e,t){var n={target:e,props:[],revert:Hw,save:Vw};return e._gsap||Qn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},W_,Tf=function(e,t){var n=Wr.createElementNS?Wr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wr.createElement(e);return n&&n.style?n:Wr.createElement(e)},Pi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Dd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ko(t)||t,1)||""},bm="O,Moz,ms,Ms,Webkit".split(","),Ko=function(e,t,n){var i=t||Es,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(bm[o]+e in r););return o<0?null:(o===3?"ms":o>=0?bm[o]:"")+e},bf=function(){Rw()&&window.document&&(Sm=window,Wr=Sm.document,Lo=Wr.documentElement,Es=Tf("div")||{style:{}},Tf("div"),Wt=Ko(Wt),Jn=Wt+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",W_=!!Ko("perspective"),Id=Qn.core.reverting,Ld=1)},wm=function(e){var t=e.ownerSVGElement,n=Tf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Lo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Lo.removeChild(n),r},Am=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},X_=function(e){var t,n;try{t=e.getBBox()}catch{t=wm(e),n=1}return t&&(t.width||t.height)||n||(t=wm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Am(e,["x","cx","x1"])||0,y:+Am(e,["y","cy","y1"])||0,width:0,height:0}:t},Y_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&X_(e))},Bs=function(e,t){if(t){var n=e.style,i;t in Lr&&t!==Jn&&(t=Wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Dd,"-$1").toLowerCase())):n.removeAttribute(t)}},Xr=function(e,t,n,i,r,o){var a=new $n(e._pt,t,n,0,1,o?V_:z_);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Cm={deg:1,rad:1,turn:1},Gw={grid:1,flex:1},ts=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Es.style,l=Pw.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",m,_,g,p;if(i===o||!r||Cm[i]||Cm[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&Y_(e),(d||o==="%")&&(Lr[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[h],Kt(d?r/m*u:r/100*m);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Wr||!_.appendChild)&&(_=Wr.body),g=_._gsap,g&&d&&g.width&&l&&g.time===ci.time&&!g.uncache)return Kt(r/g.width*u);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+i,m=e[h],y?e.style[t]=y:Bs(e,t)}else(d||o==="%")&&!Gw[Pi(_,"display")]&&(a.position=Pi(e,"position")),_===e&&(a.position="static"),_.appendChild(Es),m=Es[h],_.removeChild(Es),a.position="absolute";return l&&d&&(g=ws(_),g.time=ci.time,g.width=_[h]),Kt(f?m*r/u:m&&r?u/m*r:0)},vr=function(e,t,n,i){var r;return Ld||bf(),t in er&&t!=="transform"&&(t=er[t],~t.indexOf(",")&&(t=t.split(",")[0])),Lr[t]&&t!=="transform"?(r=sl(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Hc(Pi(e,Jn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Vc[t]&&Vc[t](e,t,n)||Pi(e,t)||l_(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ts(e,t,r,n)+n:r},Ww=function(e,t,n,i){if(!n||n==="none"){var r=Ko(t,e,1),o=r&&Pi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Pi(e,"borderTopColor"))}var a=new $n(this._pt,e.style,t,0,1,F_),l=0,c=0,h,u,f,d,m,_,g,p,y,x,v,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Pi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Pi(e,t)||i,_?e.style[t]=_:Bs(e,t)),h=[n,i],A_(h),n=h[0],i=h[1],f=n.match(Mo)||[],A=i.match(Mo)||[],A.length){for(;u=Mo.exec(i);)g=u[0],y=i.substring(l,u.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),g!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),g.charAt(1)==="="&&(g=Po(d,g)+v),p=parseFloat(g),x=g.substr((p+"").length),l=Mo.lastIndex-x.length,x||(x=x||di.units[t]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(d=ts(e,t,_,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?V_:z_;return n_.test(i)&&(a.e=0),this._pt=a,a},Rm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Rm[n]||n,t[1]=Rm[i]||i,t.join(" ")},Yw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Lr[a]&&(l=1,a=a==="transformOrigin"?Jn:Wt),Bs(n,a);l&&(Bs(n,Wt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",sl(n,1),o.uncache=1,H_(i)))}},Vc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new $n(e._pt,t,n,0,0,Yw);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},rl=[1,0,0,1,0,0],j_={},q_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Pm=function(e){var t=Pi(e,Wt);return q_(t)?rl:t.substr(7).match(t_).map(Kt)},Ud=function(e,t){var n=e._gsap||ws(e),i=e.style,r=Pm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?rl:r):(r===rl&&!e.offsetParent&&e!==Lo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Lo.appendChild(e)),r=Pm(e),l?i.display=l:Bs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Lo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},wf=function(e,t,n,i,r,o){var a=e._gsap,l=r||Ud(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],_=l[2],g=l[3],p=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,b,C,S;n?l!==rl&&(b=d*g-m*_)&&(C=v*(g/b)+A*(-_/b)+(_*y-g*p)/b,S=v*(-m/b)+A*(d/b)-(d*y-m*p)/b,v=C,A=S):(w=X_(e),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(p=v-c,y=A-h,a.xOffset=u+(p*d+y*_)-p,a.yOffset=f+(p*m+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Jn]="0px 0px",o&&(Xr(o,a,"xOrigin",c,v),Xr(o,a,"yOrigin",h,A),Xr(o,a,"xOffset",u,a.xOffset),Xr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},sl=function(e,t){var n=e._gsap||new L_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Pi(e,Jn)||"0",h,u,f,d,m,_,g,p,y,x,v,A,w,b,C,S,M,L,N,B,W,K,H,j,z,ee,I,le,Oe,Ye,Y,te;return h=u=f=_=g=p=y=x=v=0,d=m=1,n.svg=!!(e.getCTM&&Y_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Wt]!=="none"?l[Wt]:"")),i.scale=i.rotate=i.translate="none"),b=Ud(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),wf(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==rl&&(L=b[0],N=b[1],B=b[2],W=b[3],h=K=b[4],u=H=b[5],b.length===6?(d=Math.sqrt(L*L+N*N),m=Math.sqrt(W*W+B*B),_=L||N?lo(N,L)*_s:0,y=B||W?lo(B,W)*_s+_:0,y&&(m*=Math.abs(Math.cos(y*Io))),n.svg&&(h-=A-(A*L+w*B),u-=w-(A*N+w*W))):(te=b[6],Ye=b[7],I=b[8],le=b[9],Oe=b[10],Y=b[11],h=b[12],u=b[13],f=b[14],C=lo(te,Oe),g=C*_s,C&&(S=Math.cos(-C),M=Math.sin(-C),j=K*S+I*M,z=H*S+le*M,ee=te*S+Oe*M,I=K*-M+I*S,le=H*-M+le*S,Oe=te*-M+Oe*S,Y=Ye*-M+Y*S,K=j,H=z,te=ee),C=lo(-B,Oe),p=C*_s,C&&(S=Math.cos(-C),M=Math.sin(-C),j=L*S-I*M,z=N*S-le*M,ee=B*S-Oe*M,Y=W*M+Y*S,L=j,N=z,B=ee),C=lo(N,L),_=C*_s,C&&(S=Math.cos(C),M=Math.sin(C),j=L*S+N*M,z=K*S+H*M,N=N*S-L*M,H=H*S-K*M,L=j,K=z),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),d=Kt(Math.sqrt(L*L+N*N+B*B)),m=Kt(Math.sqrt(H*H+te*te)),C=lo(K,H),y=Math.abs(C)>2e-4?C*_s:0,v=Y?1/(Y<0?-Y:Y):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!q_(Pi(e,Wt)),j&&e.setAttribute("transform",j))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Kt(d),n.scaleY=Kt(m),n.rotation=Kt(_)+a,n.rotationX=Kt(g)+a,n.rotationY=Kt(p)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Jn]=Hc(c)),n.xOffset=n.yOffset=0,n.force3D=di.force3D,n.renderTransform=n.svg?qw:W_?K_:jw,n.uncache=0,n},Hc=function(e){return(e=e.split(" "))[0]+" "+e[1]},nu=function(e,t,n){var i=wn(t);return Kt(parseFloat(t)+parseFloat(ts(e,"x",n+"px",i)))+i},jw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,K_(e,t)},ds="0deg",ha="0px",ps=") ",K_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,v="",A=p==="auto"&&e&&e!==1||p===!0;if(x&&(u!==ds||h!==ds)){var w=parseFloat(h)*Io,b=Math.sin(w),C=Math.cos(w),S;w=parseFloat(u)*Io,S=Math.cos(w),o=nu(y,o,b*S*-x),a=nu(y,a,-Math.sin(w)*-x),l=nu(y,l,C*S*-x+x)}g!==ha&&(v+="perspective("+g+ps),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(A||o!==ha||a!==ha||l!==ha)&&(v+=l!==ha||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ps),c!==ds&&(v+="rotate("+c+ps),h!==ds&&(v+="rotateY("+h+ps),u!==ds&&(v+="rotateX("+u+ps),(f!==ds||d!==ds)&&(v+="skew("+f+", "+d+ps),(m!==1||_!==1)&&(v+="scale("+m+", "+_+ps),y.style[Wt]=v||"translate(0, 0)"},qw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(o),v=parseFloat(a),A,w,b,C,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Io,c*=Io,A=Math.cos(l)*u,w=Math.sin(l)*u,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=Io,S=Math.tan(c-h),S=Math.sqrt(1+S*S),b*=S,C*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),A*=S,w*=S)),A=Kt(A),w=Kt(w),b=Kt(b),C=Kt(C)):(A=u,C=f,w=b=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=ts(d,"x",o,"px"),v=ts(d,"y",a,"px")),(m||_||g||p)&&(x=Kt(x+m-(m*A+_*b)+g),v=Kt(v+_-(m*w+_*C)+p)),(i||r)&&(S=d.getBBox(),x=Kt(x+i/100*S.width),v=Kt(v+r/100*S.height)),S="matrix("+A+","+w+","+b+","+C+","+x+","+v+")",d.setAttribute("transform",S),y&&(d.style[Wt]=S)},Kw=function(e,t,n,i,r){var o=360,a=_n(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?_s:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Tm)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Tm)%o-~~(c/o)*o)),e._pt=f=new $n(e._pt,t,n,i,c,Iw),f.e=h,f.u="deg",e._props.push(n),f},Lm=function(e,t){for(var n in t)e[n]=t[n];return e},Zw=function(e,t,n){var i=Lm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Wt]=t,a=sl(n,1),Bs(n,Wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Wt],o[Wt]=t,a=sl(n,1),o[Wt]=c);for(l in Lr)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=wn(c),m=wn(h),u=d!==m?ts(n,l,c,m):parseFloat(c),f=parseFloat(h),e._pt=new $n(e._pt,a,l,u,f-u,Ef),e._pt.u=m||0,e._props.push(l));Lm(a,i)};Zn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Vc[e>1?"border"+s:s]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(m){return vr(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(m,_){return d[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var Z_={name:"css",register:bf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,m,_,g,p,y,x,v,A,w,b,C;Ld||bf(),this.styles=this.styles||G_(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(ai[_]&&I_(_,t,n,i,e,r)))){if(d=typeof h,m=Vc[_],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=tl(h)),m)m(this,e,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",$r.lastIndex=0,$r.test(c)||(g=wn(c),p=wn(h)),p?g!==p&&(c=ts(e,_,c,p)+p):g&&(h+=g),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],_n(c)&&~c.indexOf("random(")&&(c=tl(c)),wn(c+"")||c==="auto"||(c+=di.units[_]||wn(vr(e,_))||""),(c+"").charAt(1)==="="&&(c=vr(e,_))):c=vr(e,_),f=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),_ in er&&(_==="autoAlpha"&&(f===1&&vr(e,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,a.visibility),Xr(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=er[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Lr,x){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=Pi(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),v||(A=e._gsap,A.renderTransform&&!t.parseTransform||sl(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new $n(this._pt,a,Wt,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new $n(this._pt,A,"scaleY",A.scaleY,(y?Po(A.scaleY,y+u):u)-A.scaleY||0,Ef),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Jn,0,a[Jn]),h=Xw(h),A.svg?wf(e,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&Xr(this,A,"zOrigin",A.zOrigin,p),Xr(this,a,_,Hc(c),Hc(h)));continue}else if(_==="svgOrigin"){wf(e,h,1,w,0,this);continue}else if(_ in j_){Kw(this,A,_,f,y?Po(f,y+h):h);continue}else if(_==="smoothOrigin"){Xr(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){Zw(this,h,e);continue}}else _ in a||(_=Ko(_)||_);if(x||(u||u===0)&&(f||f===0)&&!Lw.test(h)&&_ in a)g=(c+"").substr((f+"").length),u||(u=0),p=wn(h)||(_ in di.units?di.units[_]:g),g!==p&&(f=ts(e,_,c,p)),this._pt=new $n(this._pt,x?A:a,_,f,(y?Po(f,y+u):u)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Uw:Ef),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Dw);else if(_ in a)Ww.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,i,r);else if(_!=="parseTransform"){Md(_,h);continue}x||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}b&&B_(this)},render:function(e,t){if(t.tween._time||!Id())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vr,aliases:er,getSetter:function(e,t,n){var i=er[t];return i&&i.indexOf(",")<0&&(t=i),t in Lr&&t!==Jn&&(e._gsap.x||vr(e,"x"))?n&&Em===n?t==="scale"?Bw:Fw:(Em=n||{})&&(t==="scale"?kw:zw):e.style&&!vd(e.style[t])?Nw:~t.indexOf("-")?Ow:Rd(e,t)},core:{_removeProperty:Bs,_getMatrix:Ud}};Qn.utils.checkPrefix=Ko;Qn.core.getStyleSaver=G_;(function(s,e,t,n){var i=Zn(s+","+e+","+t,function(r){Lr[r]=1});Zn(e,function(r){di.units[r]="deg",j_[r]=1}),er[i[13]]=s+","+e,Zn(n,function(r){var o=r.split(":");er[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){di.units[s]="px"});Qn.registerPlugin(Z_);var rh=Qn.registerPlugin(Z_)||Qn;rh.core.Tween;function $w(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Jw(s,e,t){return e&&$w(s.prototype,e),s}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn,Mc,hi,Yr,jr,Do,$_,vs,La,J_,Tr,ki,Q_,e0=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},t0=1,Eo=[],lt=[],nr=[],Ia=Date.now,Af=function(e,t){return t},Qw=function(){var e=La.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,nr),lt=n,nr=i,Af=function(o,a){return t[o](a)}},Jr=function(e,t){return~nr.indexOf(e)&&nr[nr.indexOf(e)+1][t]},Da=function(e){return!!~J_.indexOf(e)},Nn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},$l="scrollLeft",Jl="scrollTop",Cf=function(){return Tr&&Tr.isPressed||lt.cache++},Gc=function(e,t){var n=function i(r){if(r||r===0){t0&&(hi.history.scrollRestoration="manual");var o=Tr&&Tr.isPressed;r=i.v=Math.round(r)||(Tr&&Tr.iOS?1:0),e(r),i.cacheID=lt.cache,o&&Af("ss",r)}else(t||lt.cache!==i.cacheID||Af("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Gn={s:$l,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Gc(function(s){return arguments.length?hi.scrollTo(s,cn.sc()):hi.pageXOffset||Yr[$l]||jr[$l]||Do[$l]||0})},cn={s:Jl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gn,sc:Gc(function(s){return arguments.length?hi.scrollTo(Gn.sc(),s):hi.pageYOffset||Yr[Jl]||jr[Jl]||Do[Jl]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},eA=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ns=function(e,t){var n=t.s,i=t.sc;Da(e)&&(e=Yr.scrollingElement||jr);var r=lt.indexOf(e),o=i===cn.sc?1:2;!~r&&(r=lt.push(e)-1),lt[r+o]||Nn(e,"scroll",Cf);var a=lt[r+o],l=a||(lt[r+o]=Gc(Jr(e,n),!0)||(Da(e)?i:Gc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},Rf=function(e,t,n){var i=e,r=e,o=Ia(),a=o,l=t||50,c=Math.max(500,l*3),h=function(m,_){var g=Ia();_||g-o>l?(r=i,i=m,a=o,o=g):n?i+=m:i=r+(m-r)/(g-a)*(o-a)},u=function(){r=i=n?0:i,a=o=0},f=function(m){var _=a,g=r,p=Ia();return(m||m===0)&&m!==i&&h(m),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-_)*1e3};return{update:h,reset:u,getVelocity:f}},ua=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Im=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},n0=function(){La=vn.core.globals().ScrollTrigger,La&&La.core&&Qw()},i0=function(e){return vn=e||e0(),!Mc&&vn&&typeof document<"u"&&document.body&&(hi=window,Yr=document,jr=Yr.documentElement,Do=Yr.body,J_=[hi,Yr,jr,Do],vn.utils.clamp,Q_=vn.core.context||function(){},vs="onpointerenter"in Do?"pointer":"mouse",$_=Zt.isTouch=hi.matchMedia&&hi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in hi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ki=Zt.eventTypes=("ontouchstart"in jr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in jr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return t0=0},500),n0(),Mc=1),Mc};Gn.op=cn;lt.cache=0;var Zt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Mc||i0(vn)||console.warn("Please gsap.registerPlugin(Observer)"),La||n0();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,_=n.event,g=n.onDragStart,p=n.onDragEnd,y=n.onDrag,x=n.onPress,v=n.onRelease,A=n.onRight,w=n.onLeft,b=n.onUp,C=n.onDown,S=n.onChangeX,M=n.onChangeY,L=n.onChange,N=n.onToggleX,B=n.onToggleY,W=n.onHover,K=n.onHoverEnd,H=n.onMove,j=n.ignoreCheck,z=n.isNormalizer,ee=n.onGestureStart,I=n.onGestureEnd,le=n.onWheel,Oe=n.onEnable,Ye=n.onDisable,Y=n.onClick,te=n.scrollSpeed,ue=n.capture,se=n.allowClicks,_e=n.lockAxis,He=n.onLockAxis;this.target=a=qn(a)||jr,this.vars=n,d&&(d=vn.utils.toArray(d)),i=i||1e-9,r=r||0,m=m||1,te=te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(hi.getComputedStyle(Do).lineHeight)||22);var Ue,$e,et,Se,U,_t,qe,V=this,xe=0,Je=0,Ie=n.passive||!h&&n.passive!==!1,Re=ns(a,Gn),yt=ns(a,cn),P=Re(),E=yt(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ki[0]==="pointerdown",$=Da(a),Z=a.ownerDocument||Yr,q=[0,0,0],Me=[0,0,0],oe=0,be=function(){return oe=Ia()},he=function(Le,tt){return(V.event=Le)&&d&&eA(Le.target,d)||tt&&k&&Le.pointerType!=="touch"||j&&j(Le,tt)},ne=function(){V._vx.reset(),V._vy.reset(),$e.pause(),u&&u(V)},pe=function(){var Le=V.deltaX=Im(q),tt=V.deltaY=Im(Me),fe=Math.abs(Le)>=i,je=Math.abs(tt)>=i;L&&(fe||je)&&L(V,Le,tt,q,Me),fe&&(A&&V.deltaX>0&&A(V),w&&V.deltaX<0&&w(V),S&&S(V),N&&V.deltaX<0!=xe<0&&N(V),xe=V.deltaX,q[0]=q[1]=q[2]=0),je&&(C&&V.deltaY>0&&C(V),b&&V.deltaY<0&&b(V),M&&M(V),B&&V.deltaY<0!=Je<0&&B(V),Je=V.deltaY,Me[0]=Me[1]=Me[2]=0),(Se||et)&&(H&&H(V),et&&(g&&et===1&&g(V),y&&y(V),et=0),Se=!1),_t&&!(_t=!1)&&He&&He(V),U&&(le(V),U=!1),Ue=0},ke=function(Le,tt,fe){q[fe]+=Le,Me[fe]+=tt,V._vx.update(Le),V._vy.update(tt),c?Ue||(Ue=requestAnimationFrame(pe)):pe()},Fe=function(Le,tt){_e&&!qe&&(V.axis=qe=Math.abs(Le)>Math.abs(tt)?"x":"y",_t=!0),qe!=="y"&&(q[2]+=Le,V._vx.update(Le,!0)),qe!=="x"&&(Me[2]+=tt,V._vy.update(tt,!0)),c?Ue||(Ue=requestAnimationFrame(pe)):pe()},ae=function(Le){if(!he(Le,1)){Le=ua(Le,h);var tt=Le.clientX,fe=Le.clientY,je=tt-V.x,De=fe-V.y,Xe=V.isDragging;V.x=tt,V.y=fe,(Xe||(je||De)&&(Math.abs(V.startX-tt)>=r||Math.abs(V.startY-fe)>=r))&&(et=Xe?2:1,Xe||(V.isDragging=!0),Fe(je,De))}},Ve=V.onPress=function(ve){he(ve,1)||ve&&ve.button||(V.axis=qe=null,$e.pause(),V.isPressed=!0,ve=ua(ve),xe=Je=0,V.startX=V.x=ve.clientX,V.startY=V.y=ve.clientY,V._vx.reset(),V._vy.reset(),Nn(z?a:Z,ki[1],ae,Ie,!0),V.deltaX=V.deltaY=0,x&&x(V))},D=V.onRelease=function(ve){if(!he(ve,1)){Un(z?a:Z,ki[1],ae,!0);var Le=!isNaN(V.y-V.startY),tt=V.isDragging,fe=tt&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),je=ua(ve);!fe&&Le&&(V._vx.reset(),V._vy.reset(),h&&se&&vn.delayedCall(.08,function(){if(Ia()-oe>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(Z.createEvent){var De=Z.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,hi,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(De)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,u&&tt&&!z&&$e.restart(!0),et&&pe(),p&&tt&&p(V),v&&v(V,fe)}},ce=function(Le){return Le.touches&&Le.touches.length>1&&(V.isGesturing=!0)&&ee(Le,V.isDragging)},Q=function(){return(V.isGesturing=!1)||I(V)},me=function(Le){if(!he(Le)){var tt=Re(),fe=yt();ke((tt-P)*te,(fe-E)*te,1),P=tt,E=fe,u&&$e.restart(!0)}},ie=function(Le){if(!he(Le)){Le=ua(Le,h),le&&(U=!0);var tt=(Le.deltaMode===1?l:Le.deltaMode===2?hi.innerHeight:1)*m;ke(Le.deltaX*tt,Le.deltaY*tt,0),u&&!z&&$e.restart(!0)}},J=function(Le){if(!he(Le)){var tt=Le.clientX,fe=Le.clientY,je=tt-V.x,De=fe-V.y;V.x=tt,V.y=fe,Se=!0,u&&$e.restart(!0),(je||De)&&Fe(je,De)}},Ee=function(Le){V.event=Le,W(V)},ze=function(Le){V.event=Le,K(V)},gt=function(Le){return he(Le)||ua(Le,h)&&Y(V)};$e=V._dc=vn.delayedCall(f||.25,ne).pause(),V.deltaX=V.deltaY=0,V._vx=Rf(0,50,!0),V._vy=Rf(0,50,!0),V.scrollX=Re,V.scrollY=yt,V.isDragging=V.isGesturing=V.isPressed=!1,Q_(this),V.enable=function(ve){return V.isEnabled||(Nn($?Z:a,"scroll",Cf),o.indexOf("scroll")>=0&&Nn($?Z:a,"scroll",me,Ie,ue),o.indexOf("wheel")>=0&&Nn(a,"wheel",ie,Ie,ue),(o.indexOf("touch")>=0&&$_||o.indexOf("pointer")>=0)&&(Nn(a,ki[0],Ve,Ie,ue),Nn(Z,ki[2],D),Nn(Z,ki[3],D),se&&Nn(a,"click",be,!0,!0),Y&&Nn(a,"click",gt),ee&&Nn(Z,"gesturestart",ce),I&&Nn(Z,"gestureend",Q),W&&Nn(a,vs+"enter",Ee),K&&Nn(a,vs+"leave",ze),H&&Nn(a,vs+"move",J)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Se=et=!1,V._vx.reset(),V._vy.reset(),P=Re(),E=yt(),ve&&ve.type&&Ve(ve),Oe&&Oe(V)),V},V.disable=function(){V.isEnabled&&(Eo.filter(function(ve){return ve!==V&&Da(ve.target)}).length||Un($?Z:a,"scroll",Cf),V.isPressed&&(V._vx.reset(),V._vy.reset(),Un(z?a:Z,ki[1],ae,!0)),Un($?Z:a,"scroll",me,ue),Un(a,"wheel",ie,ue),Un(a,ki[0],Ve,ue),Un(Z,ki[2],D),Un(Z,ki[3],D),Un(a,"click",be,!0),Un(a,"click",gt),Un(Z,"gesturestart",ce),Un(Z,"gestureend",Q),Un(a,vs+"enter",Ee),Un(a,vs+"leave",ze),Un(a,vs+"move",J),V.isEnabled=V.isPressed=V.isDragging=!1,Ye&&Ye(V))},V.kill=V.revert=function(){V.disable();var ve=Eo.indexOf(V);ve>=0&&Eo.splice(ve,1),Tr===V&&(Tr=0)},Eo.push(V),z&&Da(a)&&(Tr=V),V.enable(_)},Jw(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Zt.version="3.13.0";Zt.create=function(s){return new Zt(s)};Zt.register=i0;Zt.getAll=function(){return Eo.slice()};Zt.getById=function(s){return Eo.filter(function(e){return e.vars.id===s})[0]};e0()&&vn.registerPlugin(Zt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,po,at,It,li,xt,Nd,Wc,ol,Ua,xa,Ql,En,sh,Pf,kn,Dm,Um,mo,r0,iu,s0,Bn,Lf,o0,a0,zr,If,Od,Uo,Fd,Xc,Df,ru,ec=1,Tn=Date.now,su=Tn(),Ii=0,ya=0,Nm=function(e,t,n){var i=oi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Om=function(e,t){return t&&(!oi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},tA=function s(){return ya&&requestAnimationFrame(s)},Fm=function(){return sh=1},Bm=function(){return sh=0},qi=function(e){return e},Ma=function(e){return Math.round(e*1e5)/1e5||0},l0=function(){return typeof window<"u"},c0=function(){return we||l0()&&(we=window.gsap)&&we.registerPlugin&&we},ks=function(e){return!!~Nd.indexOf(e)},h0=function(e){return(e==="Height"?Fd:at["inner"+e])||li["client"+e]||xt["client"+e]},u0=function(e){return Jr(e,"getBoundingClientRect")||(ks(e)?function(){return wc.width=at.innerWidth,wc.height=Fd,wc}:function(){return yr(e)})},nA=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Jr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?h0(r):e["client"+r])||0}},iA=function(e,t){return!t||~nr.indexOf(e)?u0(e):function(){return wc}},tr=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Jr(e,n))?o()-u0(e)()[r]:ks(e)?(li[n]||xt[n])-h0(i):e[n]-e["offset"+i])},tc=function(e,t){for(var n=0;n<mo.length;n+=3)(!t||~t.indexOf(mo[n+1]))&&e(mo[n],mo[n+1],mo[n+2])},oi=function(e){return typeof e=="string"},An=function(e){return typeof e=="function"},Sa=function(e){return typeof e=="number"},xs=function(e){return typeof e=="object"},fa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ou=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},co=Math.abs,f0="left",d0="top",Bd="right",kd="bottom",Ps="width",Ls="height",Na="Right",Oa="Left",Fa="Top",Ba="Bottom",Jt="padding",Ei="margin",Zo="Width",zd="Height",ln="px",Ti=function(e){return at.getComputedStyle(e)},rA=function(e){var t=Ti(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},km=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yr=function(e,t){var n=t&&Ti(e)[Pf]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Yc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},p0=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},sA=function(e){return function(t){return we.utils.snap(p0(e),t)}},Vd=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},oA=function(e){return function(t,n){return Vd(p0(e))(t,n.direction)}},nc=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},mn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},pn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ic=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},zm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rc={toggleActions:"play",anticipatePin:0},jc={top:0,left:0,center:.5,bottom:1,right:1},Sc=function(e,t){if(oi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in jc?jc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},sc=function(e,t,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,u=r.fontSize,f=r.indent,d=r.fontWeight,m=It.createElement("div"),_=ks(n)||Jr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?xt:n,y=e.indexOf("start")!==-1,x=y?c:h,v="border-color:"+x+";font-size:"+u+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(v+=(i===cn?Bd:kd)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],Ec(m,0,i,y),m},Ec=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Zo]=1,r["border"+a+Zo]=0,r[n.p]=t+"px",we.set(e,r)},rt=[],Uf={},al,Vm=function(){return Tn()-Ii>34&&(al||(al=requestAnimationFrame(wr)))},ho=function(){(!Bn||!Bn.isPressed||Bn.startX>xt.clientWidth)&&(lt.cache++,Bn?al||(al=requestAnimationFrame(wr)):wr(),Ii||Vs("scrollStart"),Ii=Tn())},au=function(){a0=at.innerWidth,o0=at.innerHeight},Ea=function(e){lt.cache++,(e===!0||!En&&!s0&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!Lf||a0!==at.innerWidth||Math.abs(at.innerHeight-o0)>at.innerHeight*.25))&&Wc.restart(!0)},zs={},aA=[],m0=function s(){return pn(ct,"scrollEnd",s)||Ts(!0)},Vs=function(e){return zs[e]&&zs[e].map(function(t){return t()})||aA},si=[],g0=function(e){for(var t=0;t<si.length;t+=5)(!e||si[t+4]&&si[t+4].query===e)&&(si[t].style.cssText=si[t+1],si[t].getBBox&&si[t].setAttribute("transform",si[t+2]||""),si[t+3].uncache=1)},Hd=function(e,t){var n;for(kn=0;kn<rt.length;kn++)n=rt[kn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Xc=!0,t&&g0(t),t||Vs("revert")},_0=function(e,t){lt.cache++,(t||!zn)&&lt.forEach(function(n){return An(n)&&n.cacheID++&&(n.rec=0)}),oi(e)&&(at.history.scrollRestoration=Od=e)},zn,Is=0,Hm,lA=function(){if(Hm!==Is){var e=Hm=Is;requestAnimationFrame(function(){return e===Is&&Ts(!0)})}},v0=function(){xt.appendChild(Uo),Fd=!Bn&&Uo.offsetHeight||at.innerHeight,xt.removeChild(Uo)},Gm=function(e){return ol(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ts=function(e,t){if(li=It.documentElement,xt=It.body,Nd=[at,It,li,xt],Ii&&!e&&!Xc){mn(ct,"scrollEnd",m0);return}v0(),zn=ct.isRefreshing=!0,lt.forEach(function(i){return An(i)&&++i.cacheID&&(i.rec=i())});var n=Vs("refreshInit");r0&&ct.sort(),t||Hd(),lt.forEach(function(i){An(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),Xc=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Df=1,Gm(!0),rt.forEach(function(i){var r=tr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Gm(!1),Df=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){An(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),_0(Od,1),Wc.pause(),Is++,zn=2,wr(2),rt.forEach(function(i){return An(i.vars.onRefresh)&&i.vars.onRefresh(i)}),zn=ct.isRefreshing=!1,Vs("refresh")},Nf=0,Tc=1,ka,wr=function(e){if(e===2||!zn&&!Xc){ct.isUpdating=!0,ka&&ka.update(0);var t=rt.length,n=Tn(),i=n-su>=50,r=t&&rt[0].scroll();if(Tc=Nf>r?-1:1,zn||(Nf=r),i&&(Ii&&!sh&&n-Ii>200&&(Ii=0,Vs("scrollEnd")),xa=su,su=n),Tc<0){for(kn=t;kn-- >0;)rt[kn]&&rt[kn].update(0,i);Tc=1}else for(kn=0;kn<t;kn++)rt[kn]&&rt[kn].update(0,i);ct.isUpdating=!1}al=0},Of=[f0,d0,kd,Bd,Ei+Ba,Ei+Na,Ei+Fa,Ei+Oa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],bc=Of.concat([Ps,Ls,"boxSizing","max"+Zo,"max"+zd,"position",Ei,Jt,Jt+Fa,Jt+Na,Jt+Ba,Jt+Oa]),cA=function(e,t,n){No(n);var i=e._gsap;if(i.spacerIsNative)No(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},lu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Of.length,o=t.style,a=e.style,l;r--;)l=Of[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[kd]=a[Bd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ps]=Yc(e,Gn)+ln,o[Ls]=Yc(e,cn)+ln,o[Jt]=a[Ei]=a[d0]=a[f0]="0",No(i),a[Ps]=a["max"+Zo]=n[Ps],a[Ls]=a["max"+zd]=n[Ls],a[Jt]=n[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},hA=/([A-Z])/g,No=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(hA,"-$1").toLowerCase())}},oc=function(e){for(var t=bc.length,n=e.style,i=[],r=0;r<t;r++)i.push(bc[r],n[bc[r]]);return i.t=e,i},uA=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},wc={left:0,top:0},Wm=function(e,t,n,i,r,o,a,l,c,h,u,f,d,m){An(e)&&(e=e(l)),oi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Sc("0"+e.substr(3),n):0));var _=d?d.time():0,g,p,y;if(d&&d.seek(0),isNaN(e)||(e=+e),Sa(e))d&&(e=we.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Ec(a,n,i,!0);else{An(t)&&(t=t(l));var x=(e||"0").split(" "),v,A,w,b;y=qn(t,l)||xt,v=yr(y)||{},(!v||!v.left&&!v.top)&&Ti(y).display==="none"&&(b=y.style.display,y.style.display="block",v=yr(y),b?y.style.display=b:y.style.removeProperty("display")),A=Sc(x[0],v[i.d]),w=Sc(x[1]||"0",n),e=v[i.p]-c[i.p]-h+A+r-w,a&&Ec(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;g="scroll"+i.d2,Ec(o,C,i,S&&C>20||!S&&(u?Math.max(xt[g],li[g]):o.parentNode[g])<=C+1),u&&(c=yr(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+ln))}return d&&y&&(g=yr(y),d.seek(f),p=yr(y),d._caScrollDist=g[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},fA=/(webkit|moz|length|cssText|inset)/i,Xm=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===xt){e._stOrig=r.cssText,a=Ti(e);for(o in a)!+o&&!fA.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},x0=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},ac=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},Ym=function(e,t){var n=ns(e,t),i="_scroll"+t.p2,r=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,m={};c=c||n();var _=x0(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&wr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=we.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},mn(e,"wheel",n.wheelHandler),ct.isTouch&&mn(e,"touchmove",n.wheelHandler),r},ct=(function(){function s(t,n){po||s.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),If(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ya){this.update=this.refresh=this.kill=qi;return}n=km(oi(n)||Sa(n)||n.nodeType?{trigger:n}:n,rc);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,u=r.scrub,f=r.trigger,d=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,g=r.anticipatePin,p=r.onScrubComplete,y=r.onSnapComplete,x=r.once,v=r.snap,A=r.pinReparent,w=r.pinSpacer,b=r.containerAnimation,C=r.fastScrollEnd,S=r.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Gn:cn,L=!u&&u!==0,N=qn(n.scroller||at),B=we.core.getCache(N),W=ks(N),K=("pinType"in n?n.pinType:Jr(N,"pinType")||W&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],j=L&&n.toggleActions.split(" "),z="markers"in n?n.markers:rc.markers,ee=W?0:parseFloat(Ti(N)["border"+M.p2+Zo])||0,I=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Oe=nA(N,W,M),Ye=iA(N,W),Y=0,te=0,ue=0,se=ns(N,M),_e,He,Ue,$e,et,Se,U,_t,qe,V,xe,Je,Ie,Re,yt,P,E,k,$,Z,q,Me,oe,be,he,ne,pe,ke,Fe,ae,Ve,D,ce,Q,me,ie,J,Ee,ze;if(I._startClamp=I._endClamp=!1,I._dir=M,g*=45,I.scroller=N,I.scroll=b?b.time.bind(b):se,$e=se(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(r0=1,n.refreshPriority===-9999&&(ka=I)),B.tweenScroll=B.tweenScroll||{top:Ym(N,cn),left:Ym(N,Gn)},I.tweenTo=_e=B.tweenScroll[M.p],I.scrubDuration=function(fe){ce=Sa(fe)&&fe,ce?D?D.duration(fe):D=we.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ce,paused:!0,onComplete:function(){return p&&p(I)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(u),ae=0,l||(l=i.vars.id)),v&&((!xs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in xt.style&&we.set(W?[xt,li]:N,{scrollBehavior:"auto"}),lt.forEach(function(fe){return An(fe)&&fe.target===(W?It.scrollingElement||li:N)&&(fe.smooth=!1)}),Ue=An(v.snapTo)?v.snapTo:v.snapTo==="labels"?sA(i):v.snapTo==="labelsDirectional"?oA(i):v.directional!==!1?function(fe,je){return Vd(v.snapTo)(fe,Tn()-te<500?0:je.direction)}:we.utils.snap(v.snapTo),Q=v.duration||{min:.1,max:2},Q=xs(Q)?Ua(Q.min,Q.max):Ua(Q,Q),me=we.delayedCall(v.delay||ce/2||.1,function(){var fe=se(),je=Tn()-te<500,De=_e.tween;if((je||Math.abs(I.getVelocity())<10)&&!De&&!sh&&Y!==fe){var Xe=(fe-Se)/Re,jt=i&&!L?i.totalProgress():Xe,ot=je?0:(jt-Ve)/(Tn()-xa)*1e3||0,Lt=we.utils.clamp(-Xe,1-Xe,co(ot/2)*ot/.185),rn=Xe+(v.inertia===!1?0:Lt),wt,At,vt=v,ei=vt.onStart,Dt=vt.onInterrupt,Ln=vt.onComplete;if(wt=Ue(rn,I),Sa(wt)||(wt=rn),At=Math.max(0,Math.round(Se+wt*Re)),fe<=U&&fe>=Se&&At!==fe){if(De&&!De._initted&&De.data<=co(At-fe))return;v.inertia===!1&&(Lt=wt-Xe),_e(At,{duration:Q(co(Math.max(co(rn-jt),co(wt-jt))*.185/ot/.05||0)),ease:v.ease||"power3",data:co(At-fe),onInterrupt:function(){return me.restart(!0)&&Dt&&Dt(I)},onComplete:function(){I.update(),Y=se(),i&&!L&&(D?D.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),ae=Ve=i&&!L?i.totalProgress():I.progress,y&&y(I),Ln&&Ln(I)}},fe,Lt*Re,At-fe-Lt*Re),ei&&ei(I,_e.tween)}}else I.isActive&&Y!==fe&&me.restart(!0)}).pause()),l&&(Uf[l]=I),f=I.trigger=qn(f||d!==!0&&d),ze=f&&f._gsap&&f._gsap.stRevert,ze&&(ze=ze(I)),d=d===!0?f:qn(d),oi(a)&&(a={targets:f,className:a}),d&&(m===!1||m===Ei||(m=!m&&d.parentNode&&d.parentNode.style&&Ti(d.parentNode).display==="flex"?!1:Jt),I.pin=d,He=we.core.getCache(d),He.spacer?yt=He.pinState:(w&&(w=qn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),He.spacerIsNative=!!w,w&&(He.spacerState=oc(w))),He.spacer=k=w||It.createElement("div"),k.classList.add("pin-spacer"),l&&k.classList.add("pin-spacer-"+l),He.pinState=yt=oc(d)),n.force3D!==!1&&we.set(d,{force3D:!0}),I.spacer=k=He.spacer,Fe=Ti(d),be=Fe[m+M.os2],Z=we.getProperty(d),q=we.quickSetter(d,M.a,ln),lu(d,k,Fe),E=oc(d)),z){Je=xs(z)?km(z,zm):zm,V=sc("scroller-start",l,N,M,Je,0),xe=sc("scroller-end",l,N,M,Je,0,V),$=V["offset"+M.op.d2];var gt=qn(Jr(N,"content")||N);_t=this.markerStart=sc("start",l,gt,M,Je,$,0,b),qe=this.markerEnd=sc("end",l,gt,M,Je,$,0,b),b&&(Ee=we.quickSetter([_t,qe],M.a,ln)),!K&&!(nr.length&&Jr(N,"fixedMarkers")===!0)&&(rA(W?xt:N),we.set([V,xe],{force3D:!0}),ne=we.quickSetter(V,M.a,ln),ke=we.quickSetter(xe,M.a,ln))}if(b){var ve=b.vars.onUpdate,Le=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){I.update(0,0,1),ve&&ve.apply(b,Le||[])})}if(I.previous=function(){return rt[rt.indexOf(I)-1]},I.next=function(){return rt[rt.indexOf(I)+1]},I.revert=function(fe,je){if(!je)return I.kill(!0);var De=fe!==!1||!I.enabled,Xe=En;De!==I.isReverted&&(De&&(ie=Math.max(se(),I.scroll.rec||0),ue=I.progress,J=i&&i.progress()),_t&&[_t,qe,V,xe].forEach(function(jt){return jt.style.display=De?"none":"block"}),De&&(En=I,I.update(De)),d&&(!A||!I.isActive)&&(De?cA(d,k,yt):lu(d,k,Ti(d),he)),De||I.update(De),En=Xe,I.isReverted=De)},I.refresh=function(fe,je,De,Xe){if(!((En||!I.enabled)&&!je)){if(d&&fe&&Ii){mn(s,"scrollEnd",m0);return}!zn&&le&&le(I),En=I,_e.tween&&!De&&(_e.tween.kill(),_e.tween=0),D&&D.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(Ke){return Ke.vars.immediateRender&&Ke.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var jt=Oe(),ot=Ye(),Lt=b?b.duration():tr(N,M),rn=Re<=.01||!Re,wt=0,At=Xe||0,vt=xs(De)?De.end:n.end,ei=n.endTrigger||f,Dt=xs(De)?De.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Ln=I.pinnedContainer=n.pinnedContainer&&qn(n.pinnedContainer,I),gi=f&&Math.max(0,rt.indexOf(I))||0,sn=gi,on,T,F,X,G,O,re,de,Ae,ye,Be,Ge,Ne;for(z&&xs(De)&&(Ge=we.getProperty(V,M.p),Ne=we.getProperty(xe,M.p));sn-- >0;)O=rt[sn],O.end||O.refresh(0,1)||(En=I),re=O.pin,re&&(re===f||re===d||re===Ln)&&!O.isReverted&&(ye||(ye=[]),ye.unshift(O),O.revert(!0,!0)),O!==rt[sn]&&(gi--,sn--);for(An(Dt)&&(Dt=Dt(I)),Dt=Nm(Dt,"start",I),Se=Wm(Dt,f,jt,M,se(),_t,V,I,ot,ee,K,Lt,b,I._startClamp&&"_startClamp")||(d?-.001:0),An(vt)&&(vt=vt(I)),oi(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(oi(Dt)?Dt.split(" ")[0]:"")+vt:(wt=Sc(vt.substr(2),jt),vt=oi(Dt)?Dt:(b?we.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Se):Se)+wt,ei=f)),vt=Nm(vt,"end",I),U=Math.max(Se,Wm(vt||(ei?"100% 0":Lt),ei,jt,M,se()+wt,qe,xe,I,ot,ee,K,Lt,b,I._endClamp&&"_endClamp"))||-.001,wt=0,sn=gi;sn--;)O=rt[sn],re=O.pin,re&&O.start-O._pinPush<=Se&&!b&&O.end>0&&(on=O.end-(I._startClamp?Math.max(0,O.start):O.start),(re===f&&O.start-O._pinPush<Se||re===Ln)&&isNaN(Dt)&&(wt+=on*(1-O.progress)),re===d&&(At+=on));if(Se+=wt,U+=wt,I._startClamp&&(I._startClamp+=wt),I._endClamp&&!zn&&(I._endClamp=U||-.001,U=Math.min(U,tr(N,M))),Re=U-Se||(Se-=.01)&&.001,rn&&(ue=we.utils.clamp(0,1,we.utils.normalize(Se,U,ie))),I._pinPush=At,_t&&wt&&(on={},on[M.a]="+="+wt,Ln&&(on[M.p]="-="+se()),we.set([_t,qe],on)),d&&!(Df&&I.end>=tr(N,M)))on=Ti(d),X=M===cn,F=se(),Me=parseFloat(Z(M.a))+At,!Lt&&U>1&&(Be=(W?It.scrollingElement||li:N).style,Be={style:Be,value:Be["overflow"+M.a.toUpperCase()]},W&&Ti(xt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Be.style["overflow"+M.a.toUpperCase()]="scroll")),lu(d,k,on),E=oc(d),T=yr(d,!0),de=K&&ns(N,X?Gn:cn)(),m?(he=[m+M.os2,Re+At+ln],he.t=k,sn=m===Jt?Yc(d,M)+Re+At:0,sn&&(he.push(M.d,sn+ln),k.style.flexBasis!=="auto"&&(k.style.flexBasis=sn+ln)),No(he),Ln&&rt.forEach(function(Ke){Ke.pin===Ln&&Ke.vars.pinSpacing!==!1&&(Ke._subPinOffset=!0)}),K&&se(ie)):(sn=Yc(d,M),sn&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=sn+ln)),K&&(G={top:T.top+(X?F-Se:de)+ln,left:T.left+(X?de:F-Se)+ln,boxSizing:"border-box",position:"fixed"},G[Ps]=G["max"+Zo]=Math.ceil(T.width)+ln,G[Ls]=G["max"+zd]=Math.ceil(T.height)+ln,G[Ei]=G[Ei+Fa]=G[Ei+Na]=G[Ei+Ba]=G[Ei+Oa]="0",G[Jt]=on[Jt],G[Jt+Fa]=on[Jt+Fa],G[Jt+Na]=on[Jt+Na],G[Jt+Ba]=on[Jt+Ba],G[Jt+Oa]=on[Jt+Oa],P=uA(yt,G,A),zn&&se(0)),i?(Ae=i._initted,iu(1),i.render(i.duration(),!0,!0),oe=Z(M.a)-Me+Re+At,pe=Math.abs(Re-oe)>1,K&&pe&&P.splice(P.length-2,2),i.render(0,!0,!0),Ae||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),iu(0)):oe=Re,Be&&(Be.value?Be.style["overflow"+M.a.toUpperCase()]=Be.value:Be.style.removeProperty("overflow-"+M.a));else if(f&&se()&&!b)for(T=f.parentNode;T&&T!==xt;)T._pinOffset&&(Se-=T._pinOffset,U-=T._pinOffset),T=T.parentNode;ye&&ye.forEach(function(Ke){return Ke.revert(!1,!0)}),I.start=Se,I.end=U,$e=et=zn?ie:se(),!b&&!zn&&($e<ie&&se(ie),I.scroll.rec=0),I.revert(!1,!0),te=Tn(),me&&(Y=-1,me.restart(!0)),En=0,i&&L&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(rn||ue!==I.progress||b||_||i&&!i._initted)&&(i&&!L&&(i._initted||ue||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Se<-.001&&!ue?we.utils.normalize(Se,U,0):ue,!0),I.progress=rn||($e-Se)/Re===ue?0:ue),d&&m&&(k._pinOffset=Math.round(I.progress*oe)),D&&D.invalidate(),isNaN(Ge)||(Ge-=we.getProperty(V,M.p),Ne-=we.getProperty(xe,M.p),ac(V,M,Ge),ac(_t,M,Ge-(Xe||0)),ac(xe,M,Ne),ac(qe,M,Ne-(Xe||0))),rn&&!zn&&I.update(),h&&!zn&&!Ie&&(Ie=!0,h(I),Ie=!1)}},I.getVelocity=function(){return(se()-et)/(Tn()-xa)*1e3||0},I.endAnimation=function(){fa(I.callbackAnimation),i&&(D?D.progress(1):i.paused()?L||fa(i,I.direction<0,1):fa(i,i.reversed()))},I.labelToScroll=function(fe){return i&&i.labels&&(Se||I.refresh()||Se)+i.labels[fe]/i.duration()*Re||0},I.getTrailing=function(fe){var je=rt.indexOf(I),De=I.direction>0?rt.slice(0,je).reverse():rt.slice(je+1);return(oi(fe)?De.filter(function(Xe){return Xe.vars.preventOverlaps===fe}):De).filter(function(Xe){return I.direction>0?Xe.end<=Se:Xe.start>=U})},I.update=function(fe,je,De){if(!(b&&!De&&!fe)){var Xe=zn===!0?ie:I.scroll(),jt=fe?0:(Xe-Se)/Re,ot=jt<0?0:jt>1?1:jt||0,Lt=I.progress,rn,wt,At,vt,ei,Dt,Ln,gi;if(je&&(et=$e,$e=b?se():Xe,v&&(Ve=ae,ae=i&&!L?i.totalProgress():ot)),g&&d&&!En&&!ec&&Ii&&(!ot&&Se<Xe+(Xe-et)/(Tn()-xa)*g?ot=1e-4:ot===1&&U>Xe+(Xe-et)/(Tn()-xa)*g&&(ot=.9999)),ot!==Lt&&I.enabled){if(rn=I.isActive=!!ot&&ot<1,wt=!!Lt&&Lt<1,Dt=rn!==wt,ei=Dt||!!ot!=!!Lt,I.direction=ot>Lt?1:-1,I.progress=ot,ei&&!En&&(At=ot&&!Lt?0:ot===1?1:Lt===1?2:3,L&&(vt=!Dt&&j[At+1]!=="none"&&j[At+1]||j[At],gi=i&&(vt==="complete"||vt==="reset"||vt in i))),S&&(Dt||gi)&&(gi||u||!i)&&(An(S)?S(I):I.getTrailing(S).forEach(function(F){return F.endAnimation()})),L||(D&&!En&&!ec?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",ot,i._tTime/i._tDur):(D.vars.totalProgress=ot,D.invalidate().restart())):i&&i.totalProgress(ot,!!(En&&(te||fe)))),d){if(fe&&m&&(k.style[m+M.os2]=be),!K)q(Ma(Me+oe*ot));else if(ei){if(Ln=!fe&&ot>Lt&&U+1>Xe&&Xe+1>=tr(N,M),A)if(!fe&&(rn||Ln)){var sn=yr(d,!0),on=Xe-Se;Xm(d,xt,sn.top+(M===cn?on:0)+ln,sn.left+(M===cn?0:on)+ln)}else Xm(d,k);No(rn||Ln?P:E),pe&&ot<1&&rn||q(Me+(ot===1&&!Ln?oe:0))}}v&&!_e.tween&&!En&&!ec&&me.restart(!0),a&&(Dt||x&&ot&&(ot<1||!ru))&&ol(a.targets).forEach(function(F){return F.classList[rn||x?"add":"remove"](a.className)}),o&&!L&&!fe&&o(I),ei&&!En?(L&&(gi&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(I)),(Dt||!ru)&&(c&&Dt&&ou(I,c),H[At]&&ou(I,H[At]),x&&(ot===1?I.kill(!1,1):H[At]=0),Dt||(At=ot===1?1:3,H[At]&&ou(I,H[At]))),C&&!rn&&Math.abs(I.getVelocity())>(Sa(C)?C:2500)&&(fa(I.callbackAnimation),D?D.progress(1):fa(i,vt==="reverse"?1:!ot,1))):L&&o&&!En&&o(I)}if(ke){var T=b?Xe/b.duration()*(b._caScrollDist||0):Xe;ne(T+(V._isFlipped?1:0)),ke(T)}Ee&&Ee(-Xe/b.duration()*(b._caScrollDist||0))}},I.enable=function(fe,je){I.enabled||(I.enabled=!0,mn(N,"resize",Ea),W||mn(N,"scroll",ho),le&&mn(s,"refreshInit",le),fe!==!1&&(I.progress=ue=0,$e=et=Y=se()),je!==!1&&I.refresh())},I.getTween=function(fe){return fe&&_e?_e.tween:D},I.setPositions=function(fe,je,De,Xe){if(b){var jt=b.scrollTrigger,ot=b.duration(),Lt=jt.end-jt.start;fe=jt.start+Lt*fe/ot,je=jt.start+Lt*je/ot}I.refresh(!1,!1,{start:Om(fe,De&&!!I._startClamp),end:Om(je,De&&!!I._endClamp)},Xe),I.update()},I.adjustPinSpacing=function(fe){if(he&&fe){var je=he.indexOf(M.d)+1;he[je]=parseFloat(he[je])+fe+ln,he[1]=parseFloat(he[1])+fe+ln,No(he)}},I.disable=function(fe,je){if(I.enabled&&(fe!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,je||D&&D.pause(),ie=0,He&&(He.uncache=1),le&&pn(s,"refreshInit",le),me&&(me.pause(),_e.tween&&_e.tween.kill()&&(_e.tween=0)),!W)){for(var De=rt.length;De--;)if(rt[De].scroller===N&&rt[De]!==I)return;pn(N,"resize",Ea),W||pn(N,"scroll",ho)}},I.kill=function(fe,je){I.disable(fe,je),D&&!je&&D.kill(),l&&delete Uf[l];var De=rt.indexOf(I);De>=0&&rt.splice(De,1),De===kn&&Tc>0&&kn--,De=0,rt.forEach(function(Xe){return Xe.scroller===I.scroller&&(De=1)}),De||zn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,fe&&i.revert({kill:!1}),je||i.kill()),_t&&[_t,qe,V,xe].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),ka===I&&(ka=0),d&&(He&&(He.uncache=1),De=0,rt.forEach(function(Xe){return Xe.pin===d&&De++}),De||(He.spacer=0)),n.onKill&&n.onKill(I)},rt.push(I),I.enable(!1,!1),ze&&ze(I),i&&i.add&&!Re){var tt=I.update;I.update=function(){I.update=tt,lt.cache++,Se||U||I.refresh()},we.delayedCall(.01,I.update),Re=.01,Se=U=0}else I.refresh();d&&lA()},s.register=function(n){return po||(we=n||c0(),l0()&&window.document&&s.enable(),po=ya),po},s.defaults=function(n){if(n)for(var i in n)rc[i]=n[i];return rc},s.disable=function(n,i){ya=0,rt.forEach(function(o){return o[i?"kill":"disable"](n)}),pn(at,"wheel",ho),pn(It,"scroll",ho),clearInterval(Ql),pn(It,"touchcancel",qi),pn(xt,"touchstart",qi),nc(pn,It,"pointerdown,touchstart,mousedown",Fm),nc(pn,It,"pointerup,touchend,mouseup",Bm),Wc.kill(),tc(pn);for(var r=0;r<lt.length;r+=3)ic(pn,lt[r],lt[r+1]),ic(pn,lt[r],lt[r+2])},s.enable=function(){if(at=window,It=document,li=It.documentElement,xt=It.body,we&&(ol=we.utils.toArray,Ua=we.utils.clamp,If=we.core.context||qi,iu=we.core.suppressOverwrites||qi,Od=at.history.scrollRestoration||"auto",Nf=at.pageYOffset||0,we.core.globals("ScrollTrigger",s),xt)){ya=1,Uo=document.createElement("div"),Uo.style.height="100vh",Uo.style.position="absolute",v0(),tA(),Zt.register(we),s.isTouch=Zt.isTouch,zr=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Lf=Zt.isTouch===1,mn(at,"wheel",ho),Nd=[at,It,li,xt],we.matchMedia?(s.matchMedia=function(c){var h=we.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},we.addEventListener("matchMediaInit",function(){return Hd()}),we.addEventListener("matchMediaRevert",function(){return g0()}),we.addEventListener("matchMedia",function(){Ts(0,1),Vs("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return au(),au})):console.warn("Requires GSAP 3.11.0 or later"),au(),mn(It,"scroll",ho);var n=xt.hasAttribute("style"),i=xt.style,r=i.borderTopStyle,o=we.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=yr(xt),cn.m=Math.round(a.top+cn.sc())||0,Gn.m=Math.round(a.left+Gn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),Ql=setInterval(Vm,250),we.delayedCall(.5,function(){return ec=0}),mn(It,"touchcancel",qi),mn(xt,"touchstart",qi),nc(mn,It,"pointerdown,touchstart,mousedown",Fm),nc(mn,It,"pointerup,touchend,mouseup",Bm),Pf=we.utils.checkPrefix("transform"),bc.push(Pf),po=Tn(),Wc=we.delayedCall(.2,Ts).pause(),mo=[It,"visibilitychange",function(){var c=at.innerWidth,h=at.innerHeight;It.hidden?(Dm=c,Um=h):(Dm!==c||Um!==h)&&Ea()},It,"DOMContentLoaded",Ts,at,"load",Ts,at,"resize",Ea],tc(mn),rt.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)ic(pn,lt[l],lt[l+1]),ic(pn,lt[l],lt[l+2])}},s.config=function(n){"limitCallbacks"in n&&(ru=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ql)||(Ql=i)&&setInterval(Vm,i),"ignoreMobileResize"in n&&(Lf=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tc(pn)||tc(mn,n.autoRefreshEvents||"none"),s0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=qn(n),o=lt.indexOf(r),a=ks(r);~o&&lt.splice(o,a?6:2),i&&(a?nr.unshift(at,i,xt,i,li,i):nr.unshift(r,i))},s.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(oi(n)?qn(n):n).getBoundingClientRect(),a=o[r?Ps:Ls]*i||0;return r?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},s.positionInViewport=function(n,i,r){oi(n)&&(n=qn(n));var o=n.getBoundingClientRect(),a=o[r?Ps:Ls],l=i==null?a/2:i in jc?jc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},s.killAll=function(n){if(rt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=zs.killAll||[];zs={},i.forEach(function(r){return r()})}},s})();ct.version="3.13.0";ct.saveStyles=function(s){return s?ol(s).forEach(function(e){if(e&&e.style){var t=si.indexOf(e);t>=0&&si.splice(t,5),si.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),If())}}):si};ct.revert=function(s,e){return Hd(!s,e)};ct.create=function(s,e){return new ct(s,e)};ct.refresh=function(s){return s?Ea(!0):(po||ct.register())&&Ts(!0)};ct.update=function(s){return++lt.cache&&wr(s===!0?2:0)};ct.clearScrollMemory=_0;ct.maxScroll=function(s,e){return tr(s,e?Gn:cn)};ct.getScrollFunc=function(s,e){return ns(qn(s),e?Gn:cn)};ct.getById=function(s){return Uf[s]};ct.getAll=function(){return rt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!Ii};ct.snapDirectional=Vd;ct.addEventListener=function(s,e){var t=zs[s]||(zs[s]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(s,e){var t=zs[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ct.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var u=[],f=[],d=we.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(m){u.length||d.restart(!0),u.push(m.trigger),f.push(m),r<=u.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&An(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return An(r)&&(r=r(),mn(ct,"refresh",function(){return r=e.batchMax()})),ol(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ct.create(c))}),t};var jm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},cu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===li&&s(xt,t)},lc={auto:1,scroll:1},dA=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||we.core.getCache(r),a=Tn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(lc[(l=Ti(r)).overflowY]||lc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!ks(r)&&(lc[(l=Ti(r)).overflowY]||lc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},y0=function(e,t,n,i){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&dA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&mn(It,Zt.eventTypes[0],Km,!1,!0)},onDisable:function(){return pn(It,Zt.eventTypes[0],Km,!0)}})},pA=/(input|label|select|textarea)/i,qm,Km=function(e){var t=pA.test(e.target.tagName);(t||qm)&&(e._gsapAllow=!0,qm=t)},mA=function(e){xs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=qn(e.target)||li,h=we.core.globals().ScrollSmoother,u=h&&h.get(),f=zr&&(e.content&&qn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),d=ns(c,cn),m=ns(c,Gn),_=1,g=(Zt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,y=An(i)?function(){return i(a)}:function(){return i||2.8},x,v,A=y0(c,e.type,!0,r),w=function(){return v=!1},b=qi,C=qi,S=function(){l=tr(c,cn),C=Ua(zr?1:0,l),n&&(b=Ua(0,tr(c,Gn))),x=Is},M=function(){f._gsap.y=Ma(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(w);var z=Ma(a.deltaY/2),ee=C(d.v-z);if(f&&ee!==d.v+d.offset){d.offset=ee-d.v;var I=Ma((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=lt.cache,wr()}return!0}d.offset&&M(),v=!0},N,B,W,K,H=function(){S(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(j){return zr&&j.type==="touchmove"&&L()||_>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){v=!1;var j=_;_=Ma((at.visualViewport&&at.visualViewport.scale||1)/g),N.pause(),j!==_&&cu(c,_>1.01?!0:n?!1:"x"),B=m(),W=d(),S(),x=Is},e.onRelease=e.onGestureStart=function(j,z){if(d.offset&&M(),!z)K.restart(!0);else{lt.cache++;var ee=y(),I,le;n&&(I=m(),le=I+ee*.05*-j.velocityX/.227,ee*=jm(m,I,le,tr(c,Gn)),N.vars.scrollX=b(le)),I=d(),le=I+ee*.05*-j.velocityY/.227,ee*=jm(d,I,le,tr(c,cn)),N.vars.scrollY=C(le),N.invalidate().duration(ee).play(.01),(zr&&N.vars.scrollY>=l||I>=l-1)&&we.to({},{onUpdate:H,duration:ee})}o&&o(j)},e.onWheel=function(){N._ts&&N.pause(),Tn()-p>1e3&&(x=0,p=Tn())},e.onChange=function(j,z,ee,I,le){if(Is!==x&&S(),z&&n&&m(b(I[2]===z?B+(j.startX-j.x):m()+z-I[1])),ee){d.offset&&M();var Oe=le[2]===ee,Ye=Oe?W+j.startY-j.y:d()+ee-le[1],Y=C(Ye);Oe&&Ye!==Y&&(W+=Y-Ye),d(Y)}(ee||z)&&wr()},e.onEnable=function(){cu(c,n?!1:"x"),ct.addEventListener("refresh",H),mn(at,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),A.enable()},e.onDisable=function(){cu(c,!0),pn(at,"resize",H),ct.removeEventListener("refresh",H),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=zr,zr&&!d()&&d(1),zr&&we.ticker.add(qi),K=a._dc,N=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:x0(d,d(),function(){return N.pause()})},onUpdate:wr,onComplete:K.vars.onComplete}),a};ct.sort=function(s){if(An(s))return rt.sort(s);var e=at.pageYOffset||0;return ct.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),rt.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ct.observe=function(s){return new Zt(s)};ct.normalizeScroll=function(s){if(typeof s>"u")return Bn;if(s===!0&&Bn)return Bn.enable();if(s===!1){Bn&&Bn.kill(),Bn=s;return}var e=s instanceof Zt?s:mA(s);return Bn&&Bn.target===e.target&&Bn.kill(),ks(e.target)&&(Bn=e),e};ct.core={_getVelocityProp:Rf,_inputObserver:y0,_scrollers:lt,_proxies:nr,bridge:{ss:function(){Ii||Vs("scrollStart"),Ii=Tn()},ref:function(){return En}}};c0()&&we.registerPlugin(ct);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class ir{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),ir.nextNameID=ir.nextNameID||0,this.$name.id=`lil-gui-name-${++ir.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class gA extends ir{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ff(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const _A={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Ff,toHexString:Ff},ll={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},vA={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=ll.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return ll.toHexString(i)}},xA={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=ll.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return ll.toHexString(i)}},yA=[_A,ll,vA,xA];function MA(s){return yA.find(e=>e.match(s))}class SA extends ir{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=MA(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ff(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class hu extends ir{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class EA extends ir{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+y),this.$input.value=this.getValue())},i=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let o=!1,a,l,c,h,u;const f=5,d=y=>{a=y.clientX,l=c=y.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=y=>{if(o){const x=y.clientX-a,v=y.clientY-l;Math.abs(v)>f?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>f&&_()}if(!o){const x=y.clientY-c;u-=x*this._step*this._arrowKeyMultiplier(y),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=y.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,y,x,v,A)=>(p-y)/(x-y)*(A-v)+v,t=p=>{const y=this.$slider.getBoundingClientRect();let x=e(p,y.left,y.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=p=>{if(o){const y=p.touches[0].clientX-a,x=p.touches[0].clientY-l;Math.abs(y)>Math.abs(x)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else p.preventDefault(),t(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),m=400;let _;const g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(d,m)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class TA extends ir{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class bA extends ir{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var wA=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function AA(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Zm=!1;class Gd{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Zm&&a&&(AA(wA),Zm=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,r){if(Object(n)===n)return new TA(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new EA(this,e,t,n,i,r);case"boolean":return new gA(this,e,t);case"string":return new bA(this,e,t);case"function":return new hu(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new SA(this,e,t,n)}addFolder(e){const t=new Gd({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof hu||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof hu)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const xr={DEBUG:!0,CUBE_SLIDE_DISTANCE:1.2,CUBE_SLIDE_DURATION:.1,CUBE_FALL_DISTANCE:36,CUBE_FALL_X_OFFSET:5,CUBE_ROTATION_X:Math.PI*2,CUBE_ROTATION_Z:0,CAMERA_FOLLOW_SPEED:.05,CAMERA_OFFSET:new R(-5,2.5,2.5)};class CA{constructor(e,t,n,i,r,o){this.scene=e,this.gui=t,this.camera=n,this.controls=i,this.fallingCube=r,this.popupManager=o,this.currentPointIndex=0,this.isMoving=!1,this.cameraOrbitAngle=0,this.config={segments:[{p0:new R(-10,1.35,5),h0:new R(-3.5,4,6),h1:new R(-4.6,2,11.64),p1:new R(1,4,11.5)},{p0:new R(1,4,11.5),h0:new R(12,4,12.5),h1:new R(5.5,3.5,10.12),p1:new R(7,3.3,3)},{p0:new R(7,3.3,3),h0:new R(6.8,3.1,1.96),h1:new R(5.8,3.3,-.36),p1:new R(5.44,3.3,-.96)},{p0:new R(5.44,3.3,-.96),h0:new R(5.2,3.3,-4),h1:new R(4.7,3.1,-5),p1:new R(3.5,3.3,-7)},{p0:new R(3.5,3.3,-7),h0:new R(1,3.2,-8.7),h1:new R(-1.5,3.5,-6.7),p1:new R(-4,4.1,-9)},{p0:new R(-4,4.1,-9),h0:new R(-10.8,5.3,-9.5),h1:new R(-10,2.58,1.9),p1:new R(-10,1.35,5)}],visuals:[],curvePath:null,curveLine:null}}createVisuals(){const e=new $a(.25,16,16),t=new $a(.15,16,16);this.config.visuals.forEach(n=>{Object.values(n).forEach(i=>this.scene.remove(i))}),this.config.visuals=[],this.config.segments.forEach((n,i)=>{const r={};r.p0=new kt(e,new Ai({color:65280,visible:!1})),r.p1=new kt(e,new Ai({color:65280,visible:!1})),r.h0=new kt(t,new Ai({color:16711680,visible:!1})),r.h1=new kt(t,new Ai({color:16711680,visible:!1})),r.p0.position.copy(n.p0),r.p1.position.copy(n.p1),r.h0.position.copy(n.h0),r.h1.position.copy(n.h1),Object.values(r).forEach(o=>this.scene.add(o)),this.config.visuals.push(r)}),console.log("this.config.visuals after population:",this.config.visuals),this._updateCurve()}setupGUI(){const e=this.gui.addFolder("Curve Editor");this.config.segments.forEach((t,n)=>{const i=e.addFolder(`Segment ${n+1}`),r=i.addFolder("Start Point (Green)");r.add(t.p0,"x",-20,20).onChange(()=>this._updateCurve()),r.add(t.p0,"y",-10,10).onChange(()=>this._updateCurve()),r.add(t.p0,"z",-20,20).onChange(()=>this._updateCurve());const o=i.addFolder("Handle 1 (Red)");o.add(t.h0,"x",-20,20).onChange(()=>this._updateCurve()),o.add(t.h0,"y",-10,10).onChange(()=>this._updateCurve()),o.add(t.h0,"z",-20,20).onChange(()=>this._updateCurve());const a=i.addFolder("Handle 2 (Red)");a.add(t.h1,"x",-20,20).onChange(()=>this._updateCurve()),a.add(t.h1,"y",-10,10).onChange(()=>this._updateCurve()),a.add(t.h1,"z",-20,20).onChange(()=>this._updateCurve());const l=i.addFolder("End Point (Green)");l.add(t.p1,"x",-20,20).onChange(()=>this._updateCurve()),l.add(t.p1,"y",-10,10).onChange(()=>this._updateCurve()),l.add(t.p1,"z",-20,20).onChange(()=>this._updateCurve())}),e.open()}_updateCurve(){this.config.curvePath?this.config.curvePath.curves=[]:this.config.curvePath=new Hx,this.config.segments.forEach(n=>{const i=new ad(n.p0,n.h0,n.h1,n.p1);this.config.curvePath.add(i)});const e=this.config.curvePath.getPoints(50*this.config.segments.length),t=new Cn().setFromPoints(e);if(this.config.curveLine)this.config.curveLine.geometry.dispose(),this.config.curveLine.geometry=t;else{const n=new Qc({color:16776960,visible:!1});this.config.curveLine=new ul(t,n),this.scene.add(this.config.curveLine)}}move(e){if(!this.config.curvePath||this.isMoving)return;this.isMoving=!0,this.controls.enabled=!1;const t=this.config.segments.length,n=this.currentPointIndex;e==="forward"?this.currentPointIndex=(this.currentPointIndex+1)%t:this.currentPointIndex=(this.currentPointIndex-1+t)%t;const i=e==="forward"?n:this.currentPointIndex,r=this.config.curvePath.curves[i],o=Math.PI/3,a=e==="forward"?this.cameraOrbitAngle+o:this.cameraOrbitAngle-o,l={progress:e==="forward"?0:1,currentCameraOrbitAngle:this.cameraOrbitAngle},c=e==="forward"?1:0;rh.to(l,{progress:c,currentCameraOrbitAngle:a,duration:2,ease:"power1.inOut",onUpdate:()=>{const h=r.getPointAt(l.progress),u=r.getTangentAt(l.progress),f=new R().addVectors(h,u);if(this.fallingCube.position.copy(h),e==="forward")this.fallingCube.lookAt(f);else{const y=new R().subVectors(h,u);this.fallingCube.lookAt(y)}const d=8,m=5,_=h.x+Math.sin(l.currentCameraOrbitAngle)*d,g=h.z+Math.cos(l.currentCameraOrbitAngle)*d,p=h.y+m;this.camera.position.lerp(new R(_,p,g),.1),this.camera.lookAt(h)},onComplete:()=>{this.isMoving=!1,this.controls.enabled=!0,this.cameraOrbitAngle=l.currentCameraOrbitAngle,this.popupManager&&this.popupManager.showPopup(this.currentPointIndex)}})}updateVisualsInLoop(){this.config.visuals.length>0&&this.config.segments.forEach((e,t)=>{const n=this.config.visuals[t];n&&(n.p0.position.copy(e.p0),n.p1.position.copy(e.p1),n.h0.position.copy(e.h0),n.h1.position.copy(e.h1))})}}class RA{constructor(e){this.scene=e,this.textureLoader=new cd,this.logos=[]}addLogo(e,t){this.textureLoader.load(t,n=>{n.colorSpace=ft;const i=new fl({map:n,transparent:!0,alphaTest:.5,emissive:16777215,emissiveMap:n,emissiveIntensity:1}),r=new Gs(1,1),o=new kt(r,i),a=new Di().setFromObject(e),l=a.getCenter(new R),c=a.getSize(new R);o.position.set(l.x,a.max.y+2,l.z);const h=Math.max(c.x,c.z)*.5;o.scale.set(h,h,h),this.scene.add(o),this.logos.push(o)})}update(e){this.logos.forEach(t=>{const n=e.quaternion.clone(),i=new tn;i.setFromQuaternion(n,"YXZ"),t.rotation.y=i.y})}}class oh extends kt{constructor(){const e=oh.SkyShader,t=new Cr({name:e.name,uniforms:Ag.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Wn,depthWrite:!1});super(new Hs(1,1,1),t),this.isSky=!0}}oh.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class PA{constructor(e,t,n,i,r){this.scene=e,this.renderer=t,this.camera=n,this.gui=i,this.isMobile=r,this.sky=new oh,this.sun=new R,this.directionalLight=null,this.effectController={turbidity:10,rayleigh:.165,mieCoefficient:.009,mieDirectionalG:1,elevation:60,azimuth:60,exposure:.8},this.initSky(),this.initLights(),this.setupGUI(),this.guiChanged()}initSky(){this.sky.scale.setScalar(45e4),this.scene.add(this.sky)}initLights(){const e=new Wg(16777215,.8);this.scene.add(e);const t=new yy(11657727,12155424,.7);this.scene.add(t),this.directionalLight=new fd(16777215,3),this.directionalLight.position.copy(this.sun).multiplyScalar(50),this.directionalLight.target.position.set(0,0,0),this.scene.add(this.directionalLight.target),this.directionalLight.castShadow=!0;const n=this.isMobile?1024:2048;this.directionalLight.shadow.mapSize.set(n,n),this.directionalLight.shadow.camera.left=-50,this.directionalLight.shadow.camera.right=50,this.directionalLight.shadow.camera.top=50,this.directionalLight.shadow.camera.bottom=-50,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=200,this.directionalLight.shadow.bias=-.002,this.directionalLight.shadow.normalBias=.05,this.scene.add(this.directionalLight);const i=new Nc(16777215,1,100);i.position.set(0,5,0),this.scene.add(i)}guiChanged(){const e=this.sky.material.uniforms;e.turbidity.value=this.effectController.turbidity,e.rayleigh.value=this.effectController.rayleigh,e.mieCoefficient.value=this.effectController.mieCoefficient,e.mieDirectionalG.value=this.effectController.mieDirectionalG;const t=Vt.degToRad(90-this.effectController.elevation),n=Vt.degToRad(this.effectController.azimuth);this.sun.setFromSphericalCoords(1,t,n),e.sunPosition.value.copy(this.sun),this.directionalLight&&this.directionalLight.position.copy(this.sun).multiplyScalar(50),this.renderer&&(this.renderer.toneMappingExposure=this.effectController.exposure)}setupGUI(){if(this.gui){const e=this.gui.addFolder("Sky");e.add(this.effectController,"turbidity",0,20,.1).onChange(()=>this.guiChanged()),e.add(this.effectController,"rayleigh",0,4,.001).onChange(()=>this.guiChanged()),e.add(this.effectController,"mieCoefficient",0,.1,.001).onChange(()=>this.guiChanged()),e.add(this.effectController,"mieDirectionalG",0,1,.001).onChange(()=>this.guiChanged()),e.add(this.effectController,"elevation",0,90,.1).onChange(()=>this.guiChanged()),e.add(this.effectController,"azimuth",0,360,.1).onChange(()=>this.guiChanged()),e.add(this.effectController,"exposure",0,1,1e-4).onChange(()=>this.guiChanged()),e.open()}}}class LA{constructor(e,t,n){this.scene=e,this.camera=t,this.renderer=n,this.mixers=[],this.gsapTimelines=[],this.clock=new wy,console.log("AnimationManager initialized.")}addGSAPTimeline(e){this.gsapTimelines.push(e)}killAllGSAPTimelines(){this.gsapTimelines.forEach(e=>e.kill()),this.gsapTimelines=[]}update(){const e=this.clock.getDelta();for(const t of this.mixers)t.update(e)}addMixer(e){this.mixers.push(e)}setupInitialCubeAnimation(e,t,n){const i=rh.timeline({scrollTrigger:{trigger:"#scroll-container",start:"top top",end:"bottom bottom",scrub:1,onToggle:r=>{this.renderer.domElement.style.pointerEvents="none",n&&(n.enabled=!r.isActive)}}});i.to(e.position,{x:`+=${t.CUBE_SLIDE_DISTANCE}`,ease:"power1.in",duration:t.CUBE_SLIDE_DURATION}),i.to(e.position,{x:`+=${t.CUBE_FALL_X_OFFSET}`,ease:"none"},">"),i.to(e.position,{y:`-=${t.CUBE_FALL_DISTANCE}`,ease:"power1.in"},"<"),i.to(e.rotation,{x:t.CUBE_ROTATION_X,z:t.CUBE_ROTATION_Z,ease:"power1.inOut"},"<"),this.addGSAPTimeline(i)}}const bs={info:(...s)=>{xr.DEBUG&&console.log("[INFO]",...s)},debug:(...s)=>{xr.DEBUG&&console.debug("[DEBUG]",...s)},warn:(...s)=>{xr.DEBUG&&console.warn("[WARN]",...s)},error:(...s)=>{xr.DEBUG&&console.error("[ERROR]",...s)},assetLoad:(s,...e)=>{xr.DEBUG&&console.log(`[ASSET_LOAD] ${s}`,...e)},collision:(s,...e)=>{xr.DEBUG&&console.log(`[COLLISION] ${s}`,...e)}},IA={0:{title:"Точка 1: Старт",content:"Вирушайте у подорож! Це початкова точка нашої кривої.",image:"textures/logos/React.png",features:["Feature A","Feature B","Feature C"]},1:{title:"Точка 2: Перший поворот",content:"Ви успішно досягли першого вигину. Продовжуйте рух!",image:"textures/logos/HTML5_logo_and_wordmark.svg.png",features:["Discovered Turn 1","Speed Boost","New Scenery"]},2:{title:"Точка 3: Другий поворот",content:"Ще один поворот позаду. Попереду нові виклики.",image:"textures/logos/CSS3_logo_and_wordmark.svg.png",features:["Sharp Curve","Mountain View","Next Stop: W-Path"]},3:{title:"Точка 4: W-форма",content:"Ви входите в складну ділянку у формі літери W.",image:"textures/logos/python-emblem.png",features:["Complex Path","Requires Precision","Good Luck!"]},4:{title:"Точка 5: Середина W",content:"Ви в центрі W-подібної кривої.",image:"textures/logos/Shopify-Logo-PNG-HD.png",features:["Midpoint Reached","Halfway Through","Keep Going"]},5:{title:"Точка 6: Кінець W",content:"Ви пройшли W-подібну ділянку. Майже у мети!",image:"textures/logos/blue-wordpress-logo-hd-picture-3.png",features:["W-Path Conquered","Final Stretch","Almost Home"]}};class DA{constructor(){if(this.container=document.getElementById("info-popup-container"),this.titleElement=document.getElementById("info-popup-title"),this.contentElement=document.getElementById("info-popup-content-text"),this.closeButton=document.getElementById("info-popup-close"),this.imageElement=document.getElementById("info-popup-image"),this.featuresList=document.getElementById("info-popup-features"),!this.container||!this.titleElement||!this.contentElement||!this.closeButton||!this.imageElement||!this.featuresList){bs.error("PopupManager: One or more required HTML elements are missing.");return}this.closeButton.addEventListener("click",()=>this.hidePopup()),bs.info("PopupManager initialized.")}showPopup(e){const t=IA[e];t?(this.titleElement.textContent=t.title,this.contentElement.textContent=t.content,this.imageElement.src=t.image,this.featuresList.innerHTML="",t.features.forEach(n=>{const i=document.createElement("li");i.textContent=n,this.featuresList.appendChild(i)}),this.container.style.display="flex",bs.info(`Showing popup for point ${e}`),document.dispatchEvent(new Event("popup-opened"))):bs.warn(`No popup data found for point index ${e}`)}hidePopup(){this.container.style.display="none",document.dispatchEvent(new Event("popup-closed"))}}function $m(s,e){if(e===mv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===rf||e===yg){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===rf)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class UA extends sr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kA(t)}),this.register(function(t){return new zA(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new BA(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new OA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new QA(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ro.extractUrlBase(e);o=Ro.resolveURL(c,this.path)}else o=Ro.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ja(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===M0){try{o[ht.KHR_BINARY_GLTF]=new e1(e)}catch(u){i&&i(u);return}r=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new d1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ht.KHR_MATERIALS_UNLIT:o[u]=new FA;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[u]=new t1(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[u]=new n1;break;case ht.KHR_MESH_QUANTIZATION:o[u]=new i1;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function NA(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class OA{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Pn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fd(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Nc(h),c.distance=u;break;case"spot":c=new Gg(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_r(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class FA{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Ai}extendParams(e,t,n){const i=[];e.color=new Pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(i)}}class BA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class kA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(r)}}class zA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class VA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class HA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class GA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class WA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],Pn),Promise.all(r)}}class XA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class YA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],Pn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ft)),Promise.all(r)}}class jA{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class qA{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class KA{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ZA{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class $A{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class JA{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class QA{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Si.TRIANGLES&&c.mode!==Si.TRIANGLE_STRIP&&c.mode!==Si.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const m of u){const _=new Ce,g=new R,p=new Ft,y=new R(1,1,1),x=new yx(m.geometry,m.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(g,p,y));for(const v in l)if(v==="_COLOR_0"){const A=l[v];x.instanceColor=new of(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,l[v]);bt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const M0="glTF",da=12,Jm={JSON:1313821514,BIN:5130562};class e1{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==M0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-da,r=new DataView(e,da);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Jm.JSON){const c=new Uint8Array(e,da+o,a);this.content=n.decode(c)}else if(l===Jm.BIN){const c=da+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class t1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Bf[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Bf[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Oo[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const m in d.attributes){const _=d.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}u(d)},a,c,Pn,f)})})}}class n1{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class i1{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class S0 extends dl{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,_=m-c,g=-2*d+3*f,p=d-f,y=1-g,x=p-f+u;for(let v=0;v!==a;v++){const A=o[_+v+a],w=o[_+v+l]*h,b=o[m+v+a],C=o[m+v]*h;r[v]=y*A+x*w+g*b+p*C}return r}}const r1=new Ft;class s1 extends S0{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return r1.fromArray(r).normalize().toArray(r),r}}const Si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Oo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qm={9728:Xn,9729:ui,9984:fg,9985:uc,9986:pa,9987:Mr},eg={33071:Ji,33648:Cc,10497:Qr},uu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Br={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},o1={CUBICSPLINE:void 0,LINEAR:Ya,STEP:Xa},fu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function a1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new fl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ar})),s.DefaultMaterial}function ms(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _r(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function l1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function c1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function h1(s){let e;const t=s.extensions&&s.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+du(t.attributes):e=s.indices+":"+du(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+du(s.targets[n]);return e}function du(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function kf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function u1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const f1=new Ce;class d1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new NA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new cd(this.options.manager):this.textureLoader=new Ty(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ja(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ms(r,a,i),_r(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ro.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=uu[i.type],a=Oo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new xn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=uu[i.type],c=Oo[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(d&&d!==u){const p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(_=new c(a,p*d,i.count*d/h),x=new gx(_,d/h),t.cache.add(y,x)),g=new rd(x,l,f%d/h,m)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),g=new xn(_,l,m);if(i.sparse!==void 0){const p=uu.SCALAR,y=Oo[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,A=new y(o[1],x,i.sparse.count*p),w=new c(o[2],v,i.sparse.count*l);a!==null&&(g=new xn(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let b=0,C=A.length;b<C;b++){const S=A[b];if(g.setX(S,w[b*l]),l>=2&&g.setY(S,w[b*l+1]),l>=3&&g.setZ(S,w[b*l+2]),l>=4&&g.setW(S,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Qm[f.magFilter]||ui,h.minFilter=Qm[f.minFilter]||Mr,h.wrapS=eg[f.wrapS]||Qr,h.wrapT=eg[f.wrapT]||Qr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xn&&h.minFilter!==ui,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(_){const g=new hn(_);g.needsUpdate=!0,f(g)}),t.load(Ro.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),_r(u,o),u.userData.mimeType=o.mimeType||u1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ig,Li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Qc,Li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const u=i[ht.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Pn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ft)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Zi);const h=r.alphaMode||fu.OPAQUE;if(h===fu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===fu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ai&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ai&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ai){const u=r.emissiveFactor;a.emissive=new Pe().setRGB(u[0],u[1],u[2],Pn)}return r.emissiveTexture!==void 0&&o!==Ai&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ft)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),_r(u,r),t.associations.set(u,{materials:e}),r.extensions&&ms(i,u,r),u})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return tg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=h1(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=tg(new Cn,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?a1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){const _=h[d],g=o[d];let p;const y=c[d];if(g.mode===Si.TRIANGLES||g.mode===Si.TRIANGLE_STRIP||g.mode===Si.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Pg(_,y):new kt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Si.TRIANGLE_STRIP?p.geometry=$m(p.geometry,yg):g.mode===Si.TRIANGLE_FAN&&(p.geometry=$m(p.geometry,rf));else if(g.mode===Si.LINES)p=new Tx(_,y);else if(g.mode===Si.LINE_STRIP)p=new ul(_,y);else if(g.mode===Si.LINE_LOOP)p=new bx(_,y);else if(g.mode===Si.POINTS)p=new wx(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&c1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),_r(p,r),g.extensions&&ms(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ms(i,u[0],r),u[0];const f=new Qi;r.extensions&&ms(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bn(Vt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ud(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_r(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new Ce;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Jc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],m=i.samplers[d.sampler],_=d.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let y=0,x=f.length;y<x;y++){const v=f[y],A=d[y],w=m[y],b=_[y],C=g[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,A,w,b,C);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new Go(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,f1)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ic:c.length>1?h=new Qi:c.length===1?h=c[0]:h=new bt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),_r(h,r),r.extensions&&ms(n,h,r),r.matrix!==void 0){const u=new Ce;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Qi;n.name&&(r.name=i.createUniqueName(n.name)),_r(r,n),n.extensions&&ms(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Li||f instanceof hn)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Br[r.path]===Br.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Br[r.path]){case Br.weights:c=Os;break;case Br.rotation:c=Rr;break;case Br.translation:case Br.scale:c=Fs;break;default:switch(n.itemSize){case 1:c=Os;break;case 2:case 3:default:c=Fs;break}break}const h=i.interpolation!==void 0?o1[i.interpolation]:Ya,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const m=new c(l[f]+"."+Br[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=kf(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Rr?s1:S0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function p1(s,e,t){const n=e.attributes,i=new Di;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){const h=kf(Oo[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,l=new R;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const _=kf(Oo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ar;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function tg(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Bf[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),_r(s,e),p1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?l1(s,e.targets,t):s})}const pu=new WeakMap;class m1 extends sr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Ja(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,ft,n).catch(n)}decodeDracoFile(e,t,n,i,r=Pn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(pu.has(e)){const l=pu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),pu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Cn;e.index&&t.setIndex(new xn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new xn(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==ft)return;const n=new Pe;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Ze.colorSpaceToWorking(n,ft),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ja(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=g1.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function g1(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,f=new u.Decoder;try{const d=t(u,f,new Int8Array(l),c),m=d.attributes.map(_=>_.array.buffer);d.index&&m.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},m)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{u.destroy(f)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let f,d;const m=a.GetEncodedGeometryType(l);if(m===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(m===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const g in h){const p=self[u[g]];let y,x;if(c.useUniqueIDs)x=h[g],y=a.GetAttributeByUniqueId(f,x);else{if(x=a.GetAttributeId(f,o[h[g]]),x===-1)continue;y=a.GetAttribute(f,x)}const v=i(o,a,f,g,p,y);g==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return m===o.TRIANGULAR_MESH&&(_.index=n(o,a,f)),o.destroy(f),_}function n(o,a,l){const h=l.num_faces()*3,u=h*4,f=o._malloc(u);a.GetTrianglesUInt32Array(l,u,f);const d=new Uint32Array(o.HEAPF32.buffer,f,h).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,h,u){const f=u.num_components(),m=l.num_points()*f,_=m*h.BYTES_PER_ELEMENT,g=r(o,h),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,g,_,p);const y=new h(o.HEAPF32.buffer,p,m).slice();return o._free(p),{name:c,array:y,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var bi=Uint8Array,To=Uint16Array,_1=Int32Array,E0=new bi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),T0=new bi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),v1=new bi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),b0=function(s,e){for(var t=new To(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new _1(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},w0=b0(E0,2),A0=w0.b,x1=w0.r;A0[28]=258,x1[258]=28;var y1=b0(T0,0),M1=y1.b,zf=new To(32768);for(var Nt=0;Nt<32768;++Nt){var kr=(Nt&43690)>>1|(Nt&21845)<<1;kr=(kr&52428)>>2|(kr&13107)<<2,kr=(kr&61680)>>4|(kr&3855)<<4,zf[Nt]=((kr&65280)>>8|(kr&255)<<8)>>1}var za=(function(s,e,t){for(var n=s.length,i=0,r=new To(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new To(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new To(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],u=o[s[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[zf[u]>>l]=c}else for(a=new To(n),i=0;i<n;++i)s[i]&&(a[i]=zf[o[s[i]-1]++]>>15-s[i]);return a}),gl=new bi(288);for(var Nt=0;Nt<144;++Nt)gl[Nt]=8;for(var Nt=144;Nt<256;++Nt)gl[Nt]=9;for(var Nt=256;Nt<280;++Nt)gl[Nt]=7;for(var Nt=280;Nt<288;++Nt)gl[Nt]=8;var C0=new bi(32);for(var Nt=0;Nt<32;++Nt)C0[Nt]=5;var S1=za(gl,9,1),E1=za(C0,5,1),mu=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Bi=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},gu=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},T1=function(s){return(s+7)/8|0},b1=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new bi(s.subarray(e,t))},w1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],zi=function(s,e,t){var n=new Error(e||w1[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,zi),!t)throw n;return n},A1=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new bi(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new bi(i*3));var c=function($e){var et=t.length;if($e>et){var Se=new bi(Math.max(et*2,$e));Se.set(t),t=Se}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,m=e.d,_=e.m,g=e.n,p=i*8;do{if(!d){h=Bi(s,u,1);var y=Bi(s,u+1,3);if(u+=3,y)if(y==1)d=S1,m=E1,_=9,g=5;else if(y==2){var w=Bi(s,u,31)+257,b=Bi(s,u+10,15)+4,C=w+Bi(s,u+5,31)+1;u+=14;for(var S=new bi(C),M=new bi(19),L=0;L<b;++L)M[v1[L]]=Bi(s,u+L*3,7);u+=b*3;for(var N=mu(M),B=(1<<N)-1,W=za(M,N,1),L=0;L<C;){var K=W[Bi(s,u,B)];u+=K&15;var x=K>>4;if(x<16)S[L++]=x;else{var H=0,j=0;for(x==16?(j=3+Bi(s,u,3),u+=2,H=S[L-1]):x==17?(j=3+Bi(s,u,7),u+=3):x==18&&(j=11+Bi(s,u,127),u+=7);j--;)S[L++]=H}}var z=S.subarray(0,w),ee=S.subarray(w);_=mu(z),g=mu(ee),d=za(z,_,1),m=za(ee,g,1)}else zi(1);else{var x=T1(u)+4,v=s[x-4]|s[x-3]<<8,A=x+v;if(A>i){l&&zi(0);break}a&&c(f+v),t.set(s.subarray(x,A),f),e.b=f+=v,e.p=u=A*8,e.f=h;continue}if(u>p){l&&zi(0);break}}a&&c(f+131072);for(var I=(1<<_)-1,le=(1<<g)-1,Oe=u;;Oe=u){var H=d[gu(s,u)&I],Ye=H>>4;if(u+=H&15,u>p){l&&zi(0);break}if(H||zi(2),Ye<256)t[f++]=Ye;else if(Ye==256){Oe=u,d=null;break}else{var Y=Ye-254;if(Ye>264){var L=Ye-257,te=E0[L];Y=Bi(s,u,(1<<te)-1)+A0[L],u+=te}var ue=m[gu(s,u)&le],se=ue>>4;ue||zi(3),u+=ue&15;var ee=M1[se];if(se>3){var te=T0[se];ee+=gu(s,u)&(1<<te)-1,u+=te}if(u>p){l&&zi(0);break}a&&c(f+131072);var _e=f+Y;if(f<ee){var He=r-ee,Ue=Math.min(ee,_e);for(He+f<0&&zi(3);f<Ue;++f)t[f]=n[He+f]}for(;f<_e;++f)t[f]=t[f-ee]}}e.l=d,e.p=Oe,e.b=f,e.f=h,d&&(h=1,e.m=_,e.d=m,e.n=g)}while(!h);return f!=t.length&&o?b1(t,0,f):t.subarray(0,f)},C1=new bi(0),R1=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&zi(6,"invalid zlib data"),(s[1]>>5&1)==1&&zi(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function P1(s,e){return A1(s.subarray(R1(s),-4),{i:2},e,e)}var L1=typeof TextDecoder<"u"&&new TextDecoder,I1=0;try{L1.decode(C1,{stream:!0}),I1=1}catch{}function R0(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function D1(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const h=o[c+1],u=r[a-c],f=i[c]/(h+u);i[c]=l+h*f,l=u*f}i[a]=l}return i}function U1(s,e,t,n){const i=R0(s,n,e),r=D1(i,n,s,e),o=new ut(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function N1(s,e,t,n,i){const r=[];for(let u=0;u<=t;++u)r[u]=0;const o=[];for(let u=0;u<=n;++u)o[u]=r.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[s+1-u],c[u]=i[s+u]-e;let f=0;for(let d=0;d<u;++d){const m=c[d+1],_=l[u-d];a[u][d]=m+_;const g=a[d][u-1]/a[u][d];a[d][u]=f+m*g,f=_*g}a[u][u]=f}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let f=0,d=1;const m=[];for(let _=0;_<=t;++_)m[_]=r.slice(0);m[0][0]=1;for(let _=1;_<=n;++_){let g=0;const p=u-_,y=t-_;u>=_&&(m[d][0]=m[f][0]/a[y+1][p],g=m[d][0]*a[p][y]);const x=p>=-1?1:-p,v=u-1<=y?_-1:t-u;for(let w=x;w<=v;++w)m[d][w]=(m[f][w]-m[f][w-1])/a[y+1][p+w],g+=m[d][w]*a[p+w][y];u<=y&&(m[d][_]=-m[f][_-1]/a[y+1][u],g+=m[d][_]*a[u][y]),o[_][u]=g;const A=f;f=d,d=A}}let h=t;for(let u=1;u<=n;++u){for(let f=0;f<=t;++f)o[u][f]*=h;h*=t-u}return o}function O1(s,e,t,n,i){const r=i<s?i:s,o=[],a=R0(s,n,e),l=N1(a,n,s,r,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,c[h]=u}for(let h=0;h<=r;++h){const u=c[a-s].clone().multiplyScalar(l[h][0]);for(let f=1;f<=s;++f)u.add(c[a-s+f].clone().multiplyScalar(l[h][f]));o[h]=u}for(let h=r+1;h<=i+1;++h)o[h]=new ut(0,0,0);return o}function F1(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function B1(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new R(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(F1(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function k1(s,e,t,n,i){const r=O1(s,e,t,n,i);return B1(r)}class z1 extends Xi{constructor(e,t,n,i,r){super();const o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new ut(c.x,c.y,c.z,c.w)}}getPoint(e,t=new R){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=U1(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new R){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=k1(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new ut(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let st,qt,Fn;class V1 extends sr{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?Ro.extractUrlBase(e):r.path,a=new Ja(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(j1(e))st=new Y1().parse(e);else{const i=I0(e);if(!q1(i))throw new Error("THREE.FBXLoader: Unknown format.");if(ig(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+ig(i));st=new X1().parse(i)}const n=new cd(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new H1(n,this.manager).parse(st)}}class H1{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){qt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new G1().parse(i);return this.parseScene(i,r,n),Fn}parseConnections(){const e=new Map;return"Connections"in st&&st.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in st.Objects){const n=st.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;case"webp":r="image/webp";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in st.Objects){const n=st.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?Qr:Ji,n.wrapT=a===0?Qr:Ji,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=e.FileName.split(".").pop().toLowerCase();let i=this.manager.getHandler(`.${n}`);i===null&&(i=this.textureLoader);const r=i.path;r||i.setPath(this.textureLoader.path);const o=qt.get(e.id).children;let a;if(o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(a=t[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&i.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new hn;const l=i.load(a);return i.setPath(r),l}parseMaterials(e){const t=new Map;if("Material"in st.Objects){const n=st.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!qt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new xo;break;case"lambert":a=new ay;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new xo;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Ze.colorSpaceToWorking(new Pe().fromArray(e.Diffuse.value),ft):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Ze.colorSpaceToWorking(new Pe().fromArray(e.DiffuseColor.value),ft)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Ze.colorSpaceToWorking(new Pe().fromArray(e.Emissive.value),ft):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Ze.colorSpaceToWorking(new Pe().fromArray(e.EmissiveColor.value),ft)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Ze.colorSpaceToWorking(new Pe().fromArray(e.Specular.value),ft):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Ze.colorSpaceToWorking(new Pe().fromArray(e.SpecularColor.value),ft));const r=this;return qt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=ft);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=ft);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Ac,i.envMap.colorSpace=ft);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=ft);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in st.Objects&&t in st.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=qt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in st.Objects){const n=st.Objects.Deformer;for(const i in n){const r=n[i],o=qt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ce().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=qt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Fn=new Qi;const i=this.parseModels(e.skeletons,t,n),r=st.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),qt.get(l.ID).parents.forEach(function(u){const f=i.get(u.ID);f!==void 0&&f.add(l)}),l.parent===null&&Fn.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),Fn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=L0(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new W1().parse();Fn.children.length===1&&Fn.children[0].isGroup&&(Fn.children[0].animations=a,Fn=Fn.children[0]),Fn.animations=a}parseModels(e,t,n){const i=new Map,r=st.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=qt.get(a);let h=this.buildSkeleton(c,e,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new Ic;break;case"Null":default:h=new Qi;break}h.name=l.attrName?pt.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=a}this.getTransformData(h,l),i.set(a,h)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){const u=r;r=new Ic,r.matrixWorld.copy(c.transformLink),r.name=i?pt.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[h]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=st.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new bt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new bn(h,c,r,o),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new bt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new bt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=st.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new bt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Ze.colorSpaceToWorking(new Pe().fromArray(n.Color.value),ft));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Nc(r,o,a,l);break;case 1:t=new fd(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Vt.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=Vt.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new Gg(r,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Nc(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new xo({name:sr.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,h=r.groups.length;c<h;c++){const u=r.groups[c];(u.materialIndex<0||u.materialIndex>=a.length)&&(u.materialIndex=a.length,l=!0)}if(l){const c=new xo;a.push(c)}}return r.FBX_Deformer?(i=new Pg(r,o),i.normalizeSkinWeights()):i=new kt(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new Qc({name:sr.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new ul(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=cl(t.RotationOrder.value):n.eulerOrder=cl(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&qt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=st.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Fn.add(e.target)):e.lookAt(new R().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];qt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;qt.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new Jc(o.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in st.Objects){const t=st.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Ce().fromArray(r.Matrix.a)}):e[i.Node]=new Ce().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in st){if("AmbientColor"in st.GlobalSettings){const e=st.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Pe().setRGB(t,n,i,ft);Fn.add(new Wg(r,1))}}"UnitScaleFactor"in st.GlobalSettings&&(Fn.userData.unitScaleFactor=st.GlobalSettings.UnitScaleFactor.value)}}}class G1{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in st.Objects){const n=st.Objects.Geometry;for(const i in n){const r=qt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(u){return st.Objects.Model[u.ID]});if(o.length===0)return;const a=e.children.reduce(function(u,f){return i[f.ID]!==void 0&&(u=i[f.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=cl(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=L0(c);return this.genGeometry(t,a,r,h)}genGeometry(e,t,n,i){const r=new Cn;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new nn(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new nn(a.colors,3)),t&&(r.setAttribute("skinIndex",new id(a.weightsIndices,4)),r.setAttribute("skinWeight",new nn(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new Qe().getNormalMatrix(i),h=new nn(a.normal,3);h.applyNormalMatrix(c),r.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;r.setAttribute(u,new nn(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,f){u!==c&&(r.addGroup(h,f-h,c),c=u,h=f)}),r.groups.length>0){const u=r.groups[r.groups.length-1],f=u.start+u.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor.Color&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],h=[],u=[];const f=this;return e.vertexIndices.forEach(function(d,m){let _,g=!1;d<0&&(d=d^-1,g=!0);let p=[],y=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const x=cc(m,n,d,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(x){y.push(x.weight),p.push(x.id)}),y.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const x=[0,0,0,0],v=[0,0,0,0];y.forEach(function(A,w){let b=A,C=p[w];v.forEach(function(S,M,L){if(b>S){L[M]=b,b=S;const N=x[M];x[M]=C,C=N}})}),p=x,y=v}for(;y.length<4;)y.push(0),p.push(0);for(let x=0;x<4;++x)h.push(y[x]),u.push(p[x])}if(e.normal){const x=cc(m,n,d,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=cc(m,n,d,e.material)[0],_<0&&(f.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(x,v){const A=cc(m,n,d,x);c[v]===void 0&&(c[v]=[]),c[v].push(A[0]),c[v].push(A[1])}),i++,g&&(f.genFace(t,e,o,_,a,l,c,h,u,i),n++,i=0,o=[],a=[],l=[],c=[],h=[],u=[])}),t}getNormalNewell(e){const t=new R(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new R(0,1,0):new R(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new Te(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,h){let u;if(h>3){const f=[],d=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<n.length;p+=3)f.push(new R(d[n[p]],d[n[p+1]],d[n[p+2]]));const{tangent:m,bitangent:_}=this.getNormalTangentAndBitangent(f),g=[];for(const p of f)g.push(this.flattenVertex(p,m,_));u=ld.triangulateShape(g,[])}else u=[[0,1,2]];for(const[f,d,m]of u)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[m*3]]),e.vertex.push(t.vertexPositions[n[m*3+1]]),e.vertex.push(t.vertexPositions[n[m*3+2]]),t.skeleton&&(e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[m*3]),e.colors.push(o[m*3+1]),e.colors.push(o[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[m*3]),e.normal.push(r[m*3+1]),e.normal.push(r[m*3+2])),t.uv&&t.uv.forEach(function(_,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(a[g][f*2]),e.uvs[g].push(a[g][f*2+1]),e.uvs[g].push(a[g][d*2]),e.uvs[g].push(a[g][d*2+1]),e.uvs[g].push(a[g][m*2]),e.uvs[g].push(a[g][m*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=st.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],h=e.attributes.position.count*3,u=new Float32Array(h);for(let _=0;_<c.length;_++){const g=c[_]*3;u[g]=l[_*3],u[g+1]=l[_*3+1],u[g+2]=l[_*3+2]}const f={vertexIndices:a,vertexPositions:u,baseVertexPositions:o},d=this.genBuffers(f),m=new nn(d.vertex,3);m.name=r||n.attrName,m.applyMatrix4(i),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new Pe;o<i.length;o+=4)a.fromArray(i,o),Ze.colorSpaceToWorking(a,ft),a.toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Cn;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let u=0,f=o.length;u<f;u+=4)r.push(new ut().fromArray(o,u));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)r.push(r[u])}const h=new z1(n,i,r,a,l).getPoints(r.length*12);return new Cn().setFromPoints(h)}}class W1{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(st.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=st.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=st.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(K1),values:t[n].KeyValueFloat.a},r=qt.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=st.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=qt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(r[c]===void 0){const u=qt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){const f=st.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?pt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Fn.traverse(function(m){m.ID===f.id&&(d.transform=m.matrix,m.userData.transformData&&(d.eulerOrder=m.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Ce),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[c]=d}}r[c]&&(r[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(r[c]===void 0){const u=qt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=qt.get(u).parents[0].ID,d=qt.get(f).parents[0].ID,m=qt.get(d).parents[0].ID,_=st.Objects.Model[m],g={modelName:_.attrName?pt.sanitizeNodeName(_.attrName):"",morphName:st.Objects.Deformer[u].attrName};r[c]=g}r[c][h.attr]=h}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=st.Objects.AnimationStack,n={};for(const i in t){const r=qt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Go(e.name,-1,t)}generateTracks(e){const t=[];let n=new R,i=new R;if(e.transform&&e.transform.decompose(n,new Ft,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Fs(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const f=this.interpolateRotations(t.x,t.y,t.z,r);o=f[0],a=f[1]}const l=cl(0);n!==void 0&&(n=n.map(Vt.degToRad),n.push(l),n=new tn().fromArray(n),n=new Ft().setFromEuler(n)),i!==void 0&&(i=i.map(Vt.degToRad),i.push(l),i=new tn().fromArray(i),i=new Ft().setFromEuler(i).invert());const c=new Ft,h=new tn,u=[];if(!a||!o)return new Rr(e+".quaternion",[0],[0]);for(let f=0;f<a.length;f+=3)h.set(a[f],a[f+1],a[f+2],r),c.setFromEuler(h),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),f>2&&new Ft().fromArray(u,(f-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,f/3*4);return new Rr(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Fn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Os(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const h=t.x.values[o];r.push(h),i[0]=h}else r.push(i[0]);if(a!==-1){const h=t.y.values[a];r.push(h),i[1]=h}else r.push(i[1]);if(l!==-1){const h=t.z.values[l];r.push(h),i[2]=h}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(Vt.degToRad(e.values[0])),o.push(Vt.degToRad(t.values[0])),o.push(Vt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Vt.degToRad),h=[e.values[a],t.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const u=h.map(Vt.degToRad),f=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const _=Math.max(...d)/180,g=new tn(...c,i),p=new tn(...u,i),y=new Ft().setFromEuler(g),x=new Ft().setFromEuler(p);y.dot(x)&&x.set(-x.x,-x.y,-x.z,-x.w);const v=e.times[a-1],A=e.times[a]-v,w=new Ft,b=new tn;for(let C=0;C<1;C+=1/_)w.copy(y.clone().slerp(x.clone(),C)),r.push(v+C*A),b.setFromQuaternion(w,i),o.push(b.x),o.push(b.y),o.push(b.z)}else r.push(e.times[a]),o.push(Vt.degToRad(e.values[a])),o.push(Vt.degToRad(t.values[a])),o.push(Vt.degToRad(n.values[a]))}return[r,o]}}class X1{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new P0,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=r.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[c,h],$1(r,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=vu(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=vu(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=vu(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class Y1{parse(e){const t=new ng(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new P0;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=P1(new Uint8Array(e.getArrayBuffer(o))),l=new ng(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class ng{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class P0{add(e,t){this[e]=t}}function j1(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===I0(s,0,e.length)}function q1(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function ig(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function K1(s){return s/46186158e3}const Z1=[];function cc(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return J1(Z1,n.buffer,r,o)}const _u=new tn,uo=new R;function L0(s){const e=new Ce,t=new Ce,n=new Ce,i=new Ce,r=new Ce,o=new Ce,a=new Ce,l=new Ce,c=new Ce,h=new Ce,u=new Ce,f=new Ce,d=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(uo.fromArray(s.translation));const m=cl(0);if(s.preRotation){const L=s.preRotation.map(Vt.degToRad);L.push(m),t.makeRotationFromEuler(_u.fromArray(L))}if(s.rotation){const L=s.rotation.map(Vt.degToRad);L.push(s.eulerOrder||m),n.makeRotationFromEuler(_u.fromArray(L))}if(s.postRotation){const L=s.postRotation.map(Vt.degToRad);L.push(m),i.makeRotationFromEuler(_u.fromArray(L)),i.invert()}s.scale&&r.scale(uo.fromArray(s.scale)),s.scalingOffset&&a.setPosition(uo.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(uo.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(uo.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(uo.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),h.copy(s.parentMatrixWorld));const _=t.clone().multiply(n).multiply(i),g=new Ce;g.extractRotation(h);const p=new Ce;p.copyPosition(h);const y=p.clone().invert().multiply(h),x=g.clone().invert().multiply(y),v=r,A=new Ce;if(d===0)A.copy(g).multiply(_).multiply(x).multiply(v);else if(d===1)A.copy(g).multiply(x).multiply(_).multiply(v);else{const N=new Ce().scale(new R().setFromMatrixScale(u)).clone().invert(),B=x.clone().multiply(N);A.copy(g).multiply(_).multiply(B).multiply(v)}const w=c.clone().invert(),b=o.clone().invert();let C=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(w).multiply(a).multiply(o).multiply(r).multiply(b);const S=new Ce().copyPosition(C),M=h.clone().multiply(S);return f.copyPosition(M),C=f.clone().multiply(A),C.premultiply(h.invert()),C}function cl(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function vu(s){return s.split(",").map(function(t){return parseFloat(t)})}function I0(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function $1(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function J1(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}class Q1{constructor(e){this.waves=[],this.deepColor=new Pe("#00a1d6"),this.midColor=new Pe("#0080b3"),this.shallowColor=new Pe("#00bfff");const t=new Gs(1e3,1e3,500,500);t.rotateX(-Math.PI/2);const n=t.attributes.position,i=n.count,r=[];for(let g=0;g<i;g++)r.push(this.shallowColor.r,this.shallowColor.g,this.shallowColor.b);t.setAttribute("color",new nn(r,3));for(let g=0;g<i;g++){const p=n.getY(g);this.waves.push({y:p,ang:Math.random()*Math.PI*2,amp:.3,speed:Math.random()*.02})}const o=new xo({vertexColors:!0,flatShading:!0,transparent:!0,opacity:.7}),a=new kt(t,o);a.receiveShadow=!0,a.renderOrder=1;const l=50,c=new Hs(1e3,l,1e3,1,1,1);c.translate(0,-l/2-5,0);const h=this.midColor,u=new Pe("#001a26"),f=[],d=c.attributes.position;for(let g=0;g<d.count;g++){const y=(d.getY(g)+l/2)/l,x=u.clone().lerp(h,y);f.push(x.r,x.g,x.b)}c.setAttribute("color",new nn(f,3));const m=new xo({vertexColors:!0,flatShading:!0,transparent:!0,opacity:.9}),_=new kt(c,m);_.receiveShadow=!0,_.renderOrder=0,this.mesh=new Qi,this.mesh.add(a),this.mesh.add(_),this.surfaceMesh=a,this.volumeMesh=_,this.surfacePositionAttribute=t.attributes.position,this.surfaceColorAttribute=t.attributes.color,this.mesh.updateMatrixWorld(!0),e.updateMatrixWorld(!0),this._createIslandMask(e)}_createIslandMask(e){this.isUnderIsland=new Array(this.surfaceMesh.geometry.attributes.position.count).fill(!1);const t=new Xg,n=new R(0,-1,0),i=new R,r=this.surfaceMesh.geometry.attributes.position,o=r.count;for(let a=0;a<o;a++)i.fromBufferAttribute(r,a),i.applyMatrix4(this.surfaceMesh.matrixWorld),t.set(i,n),t.intersectObject(e,!0).length>0&&(this.isUnderIsland[a]=!0)}update(){const e=this.surfacePositionAttribute,t=this.surfaceColorAttribute,n=e.count;for(let i=0;i<n;i++){if(this.isUnderIsland[i])continue;const r=this.waves[i];r.ang+=r.speed;const o=Math.sin(r.ang),a=r.y+o*r.amp;e.setY(i,a);const l=(o+1)/2;let c;l<.5?c=this.deepColor.clone().lerp(this.midColor,l*2):c=this.midColor.clone().lerp(this.shallowColor,(l-.5)*2),t.setXYZ(i,c.r,c.g,c.b)}e.needsUpdate=!0,t.needsUpdate=!0}getHeightAt(e,t){const n=new R(e,0,t);this.mesh.worldToLocal(n);const i=n.x,r=n.z,o=1e3,a=500,l=o/2,c=o/a,h=a+1,u=Math.floor((i+l)/c),f=Math.floor((r+l)/c);if(u<0||u>=a||f<0||f>=a)return this.mesh.position.y;const d=(i+l)/c-u,m=(r+l)/c-f,_=u+f*h,g=u+1+f*h,p=u+(f+1)*h,y=u+1+(f+1)*h,x=this.surfacePositionAttribute.getY(_),v=this.surfacePositionAttribute.getY(g),A=this.surfacePositionAttribute.getY(p),w=this.surfacePositionAttribute.getY(y),b=Vt.lerp(x,v,d),C=Vt.lerp(A,w,d);return Vt.lerp(b,C,m)+this.mesh.position.y}}const eC=""+new URL("UnityCode_Island-CrurjRX4.glb",import.meta.url).href,tC=""+new URL("R01_Animate_S-DrxtR_Cn.fbx",import.meta.url).href,nC=""+new URL("blue-wordpress-logo-hd-picture-3-BVXcnbdL.png",import.meta.url).href,iC=""+new URL("CSS3_logo_and_wordmark.svg-B_ODZ6qU.png",import.meta.url).href,rC=""+new URL("HTML5_logo_and_wordmark.svg-yxmTMxAZ.png",import.meta.url).href,sC=""+new URL("Shopify-Logo-PNG-HD-DKbvO8G4.png",import.meta.url).href,oC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDMgNzkuOTY5MGE4NywgMjAyNS8wMy8wNi0xOToxMjowMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI3LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0xMS0wNFQxMzoyNTowMCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMTEtMDZUMTA6MDk6NTMrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMTEtMDZUMTA6MDk6NTMrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzZjUxODkwLWE5MjYtOTY0Yi05ZDhlLTk4YTMyNzEyYjAwOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4M2Y1MTg5MC1hOTI2LTk2NGItOWQ4ZS05OGEzMjcxMmIwMDkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4M2Y1MTg5MC1hOTI2LTk2NGItOWQ4ZS05OGEzMjcxMmIwMDkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzZjUxODkwLWE5MjYtOTY0Yi05ZDhlLTk4YTMyNzEyYjAwOSIgc3RFdnQ6d2hlbj0iMjAyNS0xMS0wNFQxMzoyNTowMCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI3LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkYUlaMAAApgSURBVHja7Z1pbFzVFYC/OzPe40wcO07sOLGNM9lwVpMYhyyllEVlE9CwBFEBKlVbSqGtoC1SBYiKSi0C1JZKpZUIVVugYREECpSktIlJnAQnIQlZ7TjxnvEWr+Nt5vTHvJm8ceyxs42fx/dII73lvnOXb+5y7jv3PiUiaLGO2HQRaCBaNBANRIsGooFo0UA0EC0RFoeVEqOUigPuAFYC+4BiETlwkePIN/QvBIqBt0WkxzKFICKW+AGPAjLIrxhYcBH0LzB0DRbHo5YpB4vAeHiIggpCuQhxFA8Txw+sUBZqtOeylFJ2oD9wnrsohbkr0nGf6KD04xp/UfnldhF59zzjuA/4q/8ECm6YTnrOBA5vc1PxZYs5qF1EfKNaHhYAsgb4L0B2/iTufW4xNuUfa2xeX872t08GgtYaTVezUsoGTANygETAaYRpBbqAE0C9iPiUUgXALj8KuGptNld/Ow8An/j425N7qTxwOhDHGhHZMt479RWBg6x5ziAMgDXrcjn8uZuWeg9AJvCMUmoZUDhC2DuMkaQCmHZZMmvWXXZmiKlsZM11moGsALaM92FvceDg+J5mMDUYjlgbN3xvtjnsD0cKw5BCYBmAPcbGzT+eh82hztz1QcXe5kHTMm5riIhsVUp1A/F1Ze3s+6yOhddkBO/nFaQyb2U6h4rd5n8+E1JicU6NJybOTlyiHYCeLi99PV5aT3XT0dKLuTlesy6XqTkTQuLe9WE1dWXtgVOPiGgghjwC/Blg06tluJankpAcG7x5/UMuRITs/ElkuJxMzZlATFz4yt3f66O+ooO6o22cdnsoun1GyP3m6k7+81q5+dL3LWGLWeGNoVJqIfBPYA7A4mszuelHcy9drfT5eO1ne6g+3Bq4tBt4QET2jfupE6XUCuCDAAyAykOn8bT3XrI4W+o8dLX1mS8tBTYqpYrGdQ0xhryfAHGBvmHF2mxW35WNPdZ+SePu6/Gx9Y0Ktr9dae5rPMANozn0HTUgSqkrgE0BGyIu0cFtT8xnVkFaRNNxbFcT7/72AL0eb7ACAdeJyBfjDcgu4AqAhOQY7nlmMZmu5FFJS82xVt54ah+e9mAz9oWILBs3fYhS6ucBGI5YG3f+cuGowQCY7nKy9sl8HLHB4rhCKfXTcVFDjKZqV+D8xkfmsuS6zCHDb3vrJEdKGpicmcg3vuMiaWLMOcXX2dbHpr8co7m2i7lFUyi6I3vIsKUfVfPRH4+aLxWIyO5ot0P+EDhwLUsLC+PEvuagrVBzpI24RMdAy31Y2fr34+z/rD6oI3OOk+z8SYOGLbg+i6MljZTvDlrvLwNFUdtkKaVmBaY+bA7FtQ/mhQ3f3tQ74Pzc3yO1NoY+097QHbY0rntoNjZ7cHrlSqVUTjT3IUFr+PJVU5mclRQ2cO7SFJInxxGYiyr45vRzjnDB1dNQNn8BT85IwLU8NWz41KxE5l2VPmoWfET7EKVUFZAF8ODzBWTOcQ77jKezn9rDraRlJeGcGn9e8TbVdNHq7mb6PCdx8cPbN9WHWln/RGnQThWR7KjrQ5RScwMwJqXHk+lyjui5hCQHeQWpFxR36vREUqcnjjh81hwnzinxtPqbt5lKKZeIHIu2JmtlsClaPNna/i42yFmUMmjaowlI0NDKcE3E6pI5O8QuWh6NQGYFDiZnJlgeSEpGSBrzotEOKQa+DrBtw0lKP6qxNJCejv5ReZN40UZZSqlYo61dCnQbrjt7TfenAXWMTUkXkQZTXhYbeY0HSo289mEFR7lhHNBqgDtNYV8cxjfKir8XTem/C7/3y6Vz6LtAGKuAhhFk6k1g0RiEEfgtAjaMINwpYNWFlKnjApqoCcB6IC3ggJazIIVpecl4+3yUfdEUcN8BuBP/ewbA/4o20Rlj6Taqq7WPvZ/Wmq31b5k7/FkFqdhjbNSXt3Nif0vAoS8deFUptUhEOiPahyilHgd+AxA/wcHaXywge+GZsbu3Xyh+s4Ktb5w469nvvlxI+swkSwNxV3byysM7zrq++p5cVt2djbLZTJOgLbz16/10nxkIPC4iz0d62Bt8X3DzY/NDYADYHYo1915G/temES2y4OpprF6XGwIDIGdhCrc8Nt986ScRtUOUUi5gqt+mSGRO4dCvXQtvmxE1QK68deaQ92YXppltlwylVF4ka0jw75A2I/wc0ZSZiVEDJDU7YZi8hjTD+ZEEEvRis8eEV+Fw2KMGyHB5GVAWsXpJG3qNoRYNRAPRooFoIFo0EC0aiAaiRQPRQLRoIBqIFg1EA9GigWjRQKIVSNBLz9cf3mtluPtjSbznlte+SAI5al4ME06aqruiBkhTbfi8NFaHuGIdjhgQETkINAM0VnUO3JWN0B13qqIGSOkH1UPeq9jbbP7zNYrI4Uj3Ib8PHLz3wlecKu8YUH9hx/tV7P6kNnqAfFzDro1nQ6kvb+O9Fw4y2EpjIui5OBX4EsM/y2ZXzCmawvTZE+n1eDm2q9G8FxXAV8DlMCY9F4NpB8iYlYxrWRqxCXZqjrRxpKQBnzdYjvXAIhFxE8n1ISJyythc8l+Aw+cVDhW7QzYaM8nnwKQxXkE+B64CqCtrH/hnC0gvcN/5wrjgYa+IfIp/qVrJEEE8wP0isnKsN1dGHh7Av/ZlMCkBCkVkE6O5gspYlFOklMrAv4ilEGjHv4hlczTZCCKyHlivlLrGyGuyAaJYROqx0pI2EanDv4Ziw1BBgv2Pz/qFPyCNMiCvm4HNY91SPxU46GjttTyQjtMhW3LUE4VTJ8GFk0e2uS0P5PD2hlFZ9BlJIO8EDnb/u5bje5ssC+P4nmb2hNpP70TrXiclgd2A7A4by2+dwfzV6UxMi8euzmxwbI+1hd0GVnxCT6c3bFxxSfbgpjMMseeit/dMR+EVob3Bw4H/udm5sco8L1UiIkXRCmQJ8CGQES7c6nW5rL4n95yXm3EOy+a2vF7Bln9UDJfkWuBG8/LuqJp+F5E9wE3AzjEwyt0B3BRJGKOyo5yxZV6hsV/v3cZ4fgZgB1LOQ+XAmc3z1eEFKo0O/HURKWE8bTUuItuAbabm7GngqfNQVSsi+YaOA+cJ5Hci8jT6jaEWDUQD0aKBaCBaNBAN5JJL70jdbbz9vkGfw+R6I33D6OgL0dGjgZwtXwUOGk52hA3YeDLE3ebAYMfuyvA63EPr0EAYMMVdVtpEY1XHkM5oO9+vGmpqPHi88/2qIWuau7KT8tImS32dzXJARKQJ//wRvn7hzWf301AZugdYT7eX9148OPDLaq+YdPwJ4513XVk7G186SJ+n/ywYG57dZ/YSKRGRFquUgyU+CjZgNjj4eQibQ5G3NJW0GUl42no5trOJztC3jfeLyGsDdNwPvBo4T3LG4lqeRsLEGBqr/DXDBANgSaQnEMfE16JN+zjeOsJ9EH8VRsdzI9Rxi+Xyb7UEGQW6xPDmGKwQj4ykIA2wR4bQsR1YbMW8W6rJGqQJS8E/PT8PaDTcbY6eo445ho5U4JCho8WyebYyEG0YatFAtGggGogWDUQD0aKBaCBaLr38H5vV8xcdpFZ/AAAAAElFTkSuQmCC",aC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJhElEQVR4nO1dZ6wVVRD+7uMJNrCLXQERS1BsgKJgR8WeaIwPGwrGgr1XBFExFkAxqKgIGkuMPVjASAQboqAgMfoEBAVBUWnKo62ZZDa52dydOefcrdf9kvnz3p7ZOXPunp0zbYECBQoUKFCgQIECBQpkFFsDuBjAaABTAPzE9AX/7SK+pkDM2BnAKABNADyF6JqnAOyUttC1iosALDNYiCAtBXBB2sLXGh5wWIgg3Z/2JGoFd0SwGD7dnvZk8o7uANZGuCDrAByd9qTyio0BzDFQ8goAM5hWGFw/F8AmaU+uFt8bvwA4B0CLsjEt+G+/KGOJdwEL7AtgjaDQGco5YxsAM4Xxa/geBQxQB+AzQZnLAbQz4LM7XxvG5zO+VwEFlyrbzTUWvK5TeNG9CgjYDsCfggK/AbCBBb96AF8rh8YdUeMgC+YsAMMAvAdgKvuYxrEr404A5wM4kreV8pfyS4LyyPw92EGezmzuhvGle/rYEEB7AEexjHeyzON4DlN5TkN5jpm21rbnRTAxPYO0UPklewCGVyHbowrvaQB+c5B7BS8OPdmZQm8AfzlMyJT+ArBtFfK1BvB3jPLRNtuAjOC+GCfqBUxVMmWfB3ADgLMBHA+gC4AOTF35b2fzNS/wGMmEjpIG15KfyasRSs1fdiyA9RlQgJcxIp2ckPRikDXys4FwZBnN5mtXZ0BZniM18RxmGzo75wSsx9hxpSLQAg6xbl42hk7FOwA4hE1GOrS9mwFlewEaCeBaAGfyO2mHwIme5tSXLUOJz+VJLojkJ5ppYRF9LPBZHaPSpa22v6HsZOp+pxxiE0F7QYiVANoY8jlNUdrBbDldAmAsgG8dF2k1jx3Dv2zieZPydG9kOIe2AP4ReNH/Y8e5ggAPGvIg98f3Ap8PQsY1B7A3gJ4A+rBiB3B4luguADfyKbsnX1vJ1bKVokjaskzxsMCnIW1TlyJ8UTj9uiN+PCncfzG78E1whMDnViSABwUByDeloSOAfwUebyEZ7ApglSDHG4Z89kg7seIeQYADlbEt+GUXNn4NgD2RHIYrTypZiibOy7DxAxOYA/oJApA57LrfegAeQrKgbekPQZ7lbARIuEoYT7lksUP6RZAZ67KQHqeCboLkcaHBIU+KmUwSxh6UxASaAfhdsO9pbw7iFOWEu45jEGmgxFadp5ytyDILYjfhTLM4yRDxE4LwNweu7aaYmB57jNPEdgbxkM8BtAqMu0U58SeGHoIgdAjzcZJBwOoTy7BsnM5SzU81I3DwnSFcSzpK9DGfKwjTkfdm7WT9a8ay0/sp8npsBNDZYz/hmnlpZLRIiWySj8enZTyprOERA9lX8ZMd9v8haQjeyUDwMPonwzm2JeUUb0Kkm1Rg8iRU+nVRmDXLKFWxKKST1HCbpbDL+OWZB5QADHJYENJJamhnISiZlQcgf+hjWELnk0maa2y/IC3fyaev+BCVVxzEngSTuT6ZhoVV4oOPiYCvJh1fjglbGiTz+TSSdZQI6EYjLB5h8vXUAlpbJtuNSuJJsV0MnyiPN+941mHeT8e5KHW86p4DhYVk84J9lITtxJ8UYviMo0Aee0S1uEKW8VwVc/dYd5EuyjCDm36qpPVQlngesYvik7uC567pZ2hSARyP/TqtlNSehRxLyRsGKGUMdTx3ybflE2XDVB0nWKrcZDKAlnx9MyXFlLykeUJJOX9QdqOPlkr00GMrjay12LaqSWWL4eNW4XrilyccqoR2g0/8psq27XFegRM2Up6OySxAEB2UUGieMFCYC21llbAp60YqPqJkdWucLDCdr+TvzhGsrcyVfwn4XNAB5WOFYVuleQFFUiOtjLpMGSu5VU5Hflp7rA2Zww8G4/sLOrjXRaBXBIZat7YzhLF3Ix/oXGUCQ2th/MsuAk0QLAUNbQVh3kQ+0FeYA7nkTRDWSWK8i0DjQpit5YJ8CXVC6s8s5ANDhAUxievUC+6Wd1wEkvxW9DhrmB4ydkWSrukqMEaYf3llWBi6COOpGUGkZWvkxdTwojDeNNU/TYwXipJMMFqYP+UDW2MvgSGZr72U8UOF8UlmuEdt8lIumYaTlLI55/lPE5g2cTedeodDFRVTZh1TQ2SnStww1PORQIrBE19nNAiMfWrkTItgcP96YQyVm2Ud00NkJ99WEO1YB40G+qIuE84oGXoxfZrC9Xk7KWmZTifVhBHWRG0R/39H7t01xUI/k6IwaOhMscTiph6be/OE/5NbJusYJ2zVEx0iiEuizLw5zLGrtFQqpp1l0gTJ9nqE813KZRmR4kDDtq2m1MRpl2N5gdojHdRx0veV7NKYaZkYp9HsOBMEt+DkuLjaHc3iWvO44+8UxziGC48WxzSX1Rz/MTlERvKVgkERPzFeGa3nTJVeEScHbMmNBUwa51TzRAxMq+6lxM1khhk0Y3Gl6QBOrFLOzbi5mEv7QRNawAfhrllyCzXjws2nHKwyE5rI3gMb1HFXHqn02ZWWcB7vUXlI3mjO6TFRK2EVdwol/ho6GCQduNIVhjJkCm2ECTVy21WtOtcLoS8Um743OwFdeC/jw3Bj2l1+okZzwcFGNj64+rYHhzRnWyqOkgVODdyT+D1myWcdP0nUEGf/MiPitZDr1+c5mz+s9vvLCteWABzO5QtrLZRJivRj4G9bLMQiDieHWUNTFNdJLhHmMSWLTMIefEgzbbI50uJ9QeeOqw1ScRYIxUe5xZvCL9vkpdhNaSdouzWNqNCNoRI2EHxVeckJqAiplsTU0dace3RV05L2V8s01l0FXo8jx5B6gZDD0gZnKt8Dkc4vtm3Ku6XdJS6N/oymqTTl2Fvp1RikVxwtoj4Cz/OQY3QVJkZeXlscYxiV86nRsS5+bM7Dz6FoKRS7NFkcsLbmKibX98gYi2/jthHc701Z/2ZINRmQfisnculr747FVbzQyz8p0U9x/rViszaMx/uoATQYbCvHV3Czd1EW05UmVEj0q2MZGuNMUMgKyKb/0UBR87lF7GscqLJR8jQlZakSzeJ7vW3w3UOPjYksh52tcFxMn7ZYyQGneqYbqnAqSrSeDYqawuCIlfRBiFHQlvf6KO+VlxIKK5SU9FIvwpezbwwsiuB+j9fyByhLnGjc5LhtPGdhvoJbu4523C5XcSDqf4EO3FvdNNnsE3bNu6KbUohZTus4XiPVENYs2vFHtD4KxE7+5OzzIQb95G3QiXlOCsTZ6d4fsp8qtQZkBZCdDJECBQoUKFCgQIECiBH/AbLd/uVXuh0oAAAAAElFTkSuQmCC";class lC{constructor(e,t,n){this.scene=e,this.loadingManager=t,this.logoManager=n,this.assets={},this.gltfLoader=new UA(this.loadingManager),this.fbxLoader=new V1(this.loadingManager);const i=new m1;i.setDecoderPath("./libs/draco/gltf/"),this.gltfLoader.setDRACOLoader(i)}loadAll(){const e=[this.loadFallingCube(),this.loadIsland()];return Promise.all(e).then(()=>this.assets)}loadFallingCube(){return new Promise((e,t)=>{this.fbxLoader.load(tC,n=>{const i=n;if(window.fallingCube=i,i.scale.set(.06,.06,.06),i.rotation.y=Math.PI/2,i.position.set(-16.2,37,5),i.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0),r.name.startsWith("nurbsCircle")&&!this.hasMesh(r)&&(r.visible=!1)}),this.scene.add(i),this.assets.fallingCube=i,i.animations&&i.animations.length>0){const r=new Vh(i);r.clipAction(i.animations[0]).play(),this.assets.mixer=r}e()},void 0,n=>{console.error("An error happened while loading the FBX model:",n),t(n)})})}loadIsland(){return new Promise((e,t)=>{this.gltfLoader.load(eC,n=>{const i=n.scene;window.model=i,i.rotation.y=2;const r=[];let o,a;if(i.traverse(c=>{c.name==="Plane005"&&(o=c),c.name==="Boat"&&(a=c),(c.name==="wheel"||c.name.startsWith("car_baked001"))&&r.push(c),c.name==="Cube_Cube001"&&this.logoManager.addLogo(c,nC),c.name==="Cube"&&this.logoManager.addLogo(c,iC),c.name==="Downtown_Center_City1456"&&this.logoManager.addLogo(c,rC),c.name==="Mesh011"&&this.logoManager.addLogo(c,sC),c.name==="MainBridge"&&this.logoManager.addLogo(c,oC),c.name==="BackBridge"&&this.logoManager.addLogo(c,aC)}),this.scene.add(i),this.assets.model=i,this.assets.landingPlane=o,this.assets.boat=a,this.assets.landingPlane&&(this.assets.landingPlane.receiveShadow=!0),r.length>0){const c=new Vh(i),h=[];r.forEach(d=>{const m=new R(0,1,0),_=new Ft().setFromAxisAngle(m,0),g=new Ft().setFromAxisAngle(m,Math.PI),p=new Ft().setFromAxisAngle(m,2*Math.PI),y=[0,4,8],x=[..._.toArray(),...g.toArray(),...p.toArray()],v=new Rr(d.name+".quaternion",y,x);h.push(v)});const u=new Go("WheelAnimation",-1,h),f=c.clipAction(u);f.setLoop(nf),f.play(),this.assets.islandMixer=c}if(n.animations&&n.animations.length>0){const c=Go.findByName(n.animations,"ferris_wheel_armature|ferris_wheel_armature|ferriss_wheel_acti");if(c){const h=new Vh(i),u=h.clipAction(c);u.setLoop(nf),u.play(),this.assets.ferrisWheelMixer=h,this.assets.ferrisWheelAction=u}}const l=new Q1(i);l.mesh.position.y=.7,this.scene.add(l.mesh),this.assets.water=l,e()},void 0,n=>{console.error("An error happened while loading the GLTF model:",n),t(n)})})}hasMesh(e){if(e.isMesh||e.isSkinnedMesh)return!0;for(const t of e.children)if(this.hasMesh(t))return!0;return!1}}rh.registerPlugin(ct);let gn,yi,_l=!0;const rg=new Xg,Vf=new Te,qc=new Te;let hc=null;const fo=document.getElementById("tooltip"),is=new mx,Hf=new RA(is),cC=document.getElementById("popup-container"),D0=document.getElementById("popup-button"),sg=document.getElementById("popup-preloader"),U0=new Hg;U0.onLoad=function(){bs.assetLoad("All models loaded via LoadingManager"),sg&&(sg.style.display="none"),D0.disabled=!1};D0.addEventListener("click",()=>{cC.style.display="none",ct.refresh()});const hC=new $a(.3,16,16),uC=new Ai({color:65280,visible:!1}),N0=new kt(hC,uC);N0.position.set(-10,1.75,5);is.add(N0);const Gf=xr.CAMERA_OFFSET,Vn=new bn(75,window.innerWidth/window.innerHeight,.1,1e3),fC=new Gs(2,2),dC=new fl({color:13421772}),ah=new kt(fC,dC);ah.rotation.x=-Math.PI/2;ah.position.set(-16.2,36.9,5);ah.receiveShadow=!0;is.add(ah);const Wd=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),Ui=new Sb({antialias:!Wd,logarithmicDepthBuffer:!1,powerPreference:"high-performance"});Ui.setSize(window.innerWidth,window.innerHeight);Ui.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Ui.shadowMap.enabled=!0;Ui.shadowMap.type=Wd?Xf:cg;Ui.toneMapping=hg;document.body.appendChild(Ui.domElement);Ui.outputColorSpace=ft;const vl=new Tb(Vn,Ui.domElement);vl.enabled=!1;const O0=new Gd;new PA(is,Ui,Vn,O0,Wd);const ys=new LA(is,Vn,Ui),pC=new DA;let xu=!1;const og=new Di,ag=new Di,lg=document.querySelector(".navigation-arrows"),mC=document.getElementById("left-arrow"),gC=document.getElementById("right-arrow");document.addEventListener("popup-opened",()=>{_l=!1,vl.enabled=!1});document.addEventListener("popup-closed",()=>{_l=!0,vl.enabled=!0});gC.addEventListener("click",()=>{_l&&gn&&gn.move("forward")});mC.addEventListener("click",()=>{_l&&gn&&gn.move("backward")});window.addEventListener("keydown",s=>{_l&&(s.key==="ArrowLeft"?gn&&gn.move("backward"):s.key==="ArrowRight"&&gn&&gn.move("forward"))});window.addEventListener("resize",()=>{Vn.aspect=window.innerWidth/window.innerHeight,Vn.updateProjectionMatrix(),Ui.setSize(window.innerWidth,window.innerHeight)});window.addEventListener("mousemove",s=>{Vf.x=s.clientX/window.innerWidth*2-1,Vf.y=-(s.clientY/window.innerHeight)*2+1,qc.x=s.clientX,qc.y=s.clientY});const _C=new lC(is,U0,Hf);_C.loadAll().then(s=>{bs.assetLoad("All assets loaded via AssetLoader!",s),yi=s.fallingCube;const e=new R;s.fallingCube.getWorldPosition(e),Vn.position.copy(e.clone().add(Gf)),Vn.lookAt(e),ys.setupInitialCubeAnimation(s.fallingCube,xr,vl),vC(s)});function vC(s){const e=s.landingPlane;s.mixer&&ys.addMixer(s.mixer),s.islandMixer&&ys.addMixer(s.islandMixer),s.ferrisWheelMixer&&ys.addMixer(s.ferrisWheelMixer);function t(){if(requestAnimationFrame(t),s.model){rg.setFromCamera(Vf,Vn);const n=rg.intersectObject(s.model,!0);if(n.length>0){let i=n[0].object,r="";for(;i&&!r;)i.name&&i.name.trim()!==""&&i.name.trim()!=="Scene"&&(r=i.name),i=i.parent;r?(hc=n[0].object,fo.style.display="block",fo.textContent=r,fo.style.left=qc.x+10+"px",fo.style.top=qc.y+10+"px"):(fo.style.display="none",hc=null)}else hc&&(fo.style.display="none"),hc=null}if(gn&&gn.updateVisualsInLoop(),ys.update(),Hf&&Hf.update(Vn),s.water&&(s.water.update(ys.clock.getElapsedTime()),s.boat)){const n=new R;s.boat.getWorldPosition(n);const r=s.water.getHeightAt(n.x,n.z)+.1;s.boat.position.y=Vt.lerp(s.boat.position.y,r,.1)}if(e&&yi&&!xu&&(og.setFromObject(yi),ag.setFromObject(e),og.intersectsBox(ag))){bs.collision("Куб торкнувся Plane005! Керування стрілками активовано."),xu=!0,ys.killAllGSAPTimelines(),lg&&(lg.style.display="flex"),gn=new CA(is,O0,Vn,vl,yi,pC);const n=gn.config.segments[0].p0;yi.position.copy(n);const r=new ad(gn.config.segments[0].p0,gn.config.segments[0].h0,gn.config.segments[0].h1,gn.config.segments[0].p1).getTangentAt(0),o=new R().addVectors(n,r);yi.rotation.set(0,0,0),yi.lookAt(o),yi.rotation.y+=Math.PI/2,gn.createVisuals(),gn.setupGUI();const a=yi.position.clone().add(Gf);Vn.position.copy(a),Vn.lookAt(yi.position)}if(!xu&&yi){const n=new R;yi.getWorldPosition(n);const i=n.clone().add(Gf);Vn.position.lerp(i,xr.CAMERA_FOLLOW_SPEED),Vn.lookAt(n)}Ui.render(is,Vn)}t()}
