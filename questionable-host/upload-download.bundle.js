const t=(new TextEncoder).encode("0123456789abcdef");function e(e){return(new TextDecoder).decode(function(e){const n=new Uint8Array(2*e.length);for(let r=0;r<n.length;r++){const s=e[r];n[2*r]=t[s>>4],n[2*r+1]=t[15&s]}return n}(e))}class n{#a;#b;#c;#d;#block;#pos;#n0;#n1;constructor(){this.#a=1732584193,this.#b=4023233417,this.#c=2562383102,this.#d=271733878,this.#block=new Uint8Array(64),this.#pos=0,this.#n0=0,this.#n1=0}addLength(t){let e=this.#n0;e+=t,e>4294967295&&(this.#n1+=1),this.#n0=e>>>0}hash(t){let e=this.#a,n=this.#b,r=this.#c,s=this.#d;const o=e=>t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24,i=(t,e)=>t<<e|t>>>32-e,a=o(0),h=o(4),l=o(8),c=o(12),d=o(16),f=o(20),w=o(24),g=o(28),u=o(32),b=o(36),y=o(40),p=o(44),U=o(48),A=o(52),k=o(56),T=o(60);e=n+i(((r^s)&n^s)+e+a+3614090360,7),s=e+i(((n^r)&e^r)+s+h+3905402710,12),r=s+i(((e^n)&s^n)+r+l+606105819,17),n=r+i(((s^e)&r^e)+n+c+3250441966,22),e=n+i(((r^s)&n^s)+e+d+4118548399,7),s=e+i(((n^r)&e^r)+s+f+1200080426,12),r=s+i(((e^n)&s^n)+r+w+2821735955,17),n=r+i(((s^e)&r^e)+n+g+4249261313,22),e=n+i(((r^s)&n^s)+e+u+1770035416,7),s=e+i(((n^r)&e^r)+s+b+2336552879,12),r=s+i(((e^n)&s^n)+r+y+4294925233,17),n=r+i(((s^e)&r^e)+n+p+2304563134,22),e=n+i(((r^s)&n^s)+e+U+1804603682,7),s=e+i(((n^r)&e^r)+s+A+4254626195,12),r=s+i(((e^n)&s^n)+r+k+2792965006,17),n=r+i(((s^e)&r^e)+n+T+1236535329,22),e=n+i(((n^r)&s^r)+e+h+4129170786,5),s=e+i(((e^n)&r^n)+s+w+3225465664,9),r=s+i(((s^e)&n^e)+r+p+643717713,14),n=r+i(((r^s)&e^s)+n+a+3921069994,20),e=n+i(((n^r)&s^r)+e+f+3593408605,5),s=e+i(((e^n)&r^n)+s+y+38016083,9),r=s+i(((s^e)&n^e)+r+T+3634488961,14),n=r+i(((r^s)&e^s)+n+d+3889429448,20),e=n+i(((n^r)&s^r)+e+b+568446438,5),s=e+i(((e^n)&r^n)+s+k+3275163606,9),r=s+i(((s^e)&n^e)+r+c+4107603335,14),n=r+i(((r^s)&e^s)+n+u+1163531501,20),e=n+i(((n^r)&s^r)+e+A+2850285829,5),s=e+i(((e^n)&r^n)+s+l+4243563512,9),r=s+i(((s^e)&n^e)+r+g+1735328473,14),n=r+i(((r^s)&e^s)+n+U+2368359562,20),e=n+i((n^r^s)+e+f+4294588738,4),s=e+i((e^n^r)+s+u+2272392833,11),r=s+i((s^e^n)+r+p+1839030562,16),n=r+i((r^s^e)+n+k+4259657740,23),e=n+i((n^r^s)+e+h+2763975236,4),s=e+i((e^n^r)+s+d+1272893353,11),r=s+i((s^e^n)+r+g+4139469664,16),n=r+i((r^s^e)+n+y+3200236656,23),e=n+i((n^r^s)+e+A+681279174,4),s=e+i((e^n^r)+s+a+3936430074,11),r=s+i((s^e^n)+r+c+3572445317,16),n=r+i((r^s^e)+n+w+76029189,23),e=n+i((n^r^s)+e+b+3654602809,4),s=e+i((e^n^r)+s+U+3873151461,11),r=s+i((s^e^n)+r+T+530742520,16),n=r+i((r^s^e)+n+l+3299628645,23),e=n+i((r^(n|~s))+e+a+4096336452,6),s=e+i((n^(e|~r))+s+g+1126891415,10),r=s+i((e^(s|~n))+r+k+2878612391,15),n=r+i((s^(r|~e))+n+f+4237533241,21),e=n+i((r^(n|~s))+e+U+1700485571,6),s=e+i((n^(e|~r))+s+c+2399980690,10),r=s+i((e^(s|~n))+r+y+4293915773,15),n=r+i((s^(r|~e))+n+h+2240044497,21),e=n+i((r^(n|~s))+e+u+1873313359,6),s=e+i((n^(e|~r))+s+T+4264355552,10),r=s+i((e^(s|~n))+r+w+2734768916,15),n=r+i((s^(r|~e))+n+A+1309151649,21),e=n+i((r^(n|~s))+e+d+4149444226,6),s=e+i((n^(e|~r))+s+p+3174756917,10),r=s+i((e^(s|~n))+r+l+718787259,15),n=r+i((s^(r|~e))+n+b+3951481745,21),this.#a=this.#a+e>>>0,this.#b=this.#b+n>>>0,this.#c=this.#c+r>>>0,this.#d=this.#d+s>>>0}update(t){let e;if("string"==typeof t)e=(new TextEncoder).encode(t);else{if("object"!=typeof t)throw new TypeError("md5: `data` is invalid type");if(!(t instanceof ArrayBuffer||ArrayBuffer.isView(t)))throw new TypeError("md5: `data` is invalid type");e=new Uint8Array(t)}let n=this.#pos;const r=64-n;if(e.length<r)this.#block.set(e,n),n+=e.length;else{this.#block.set(e.slice(0,r),n),this.hash(this.#block);let t=r;for(;t+64<=e.length;)this.hash(e.slice(t,t+64)),t+=64;this.#block.fill(0).set(e.slice(t),0),n=e.length-t}return this.#pos=n,this.addLength(e.length),this}digest(){let t=64-this.#pos;t<9&&(t+=64);const e=new Uint8Array(t);e[0]=128;const n=this.#n0<<3,r=this.#n1<<3|this.#n0>>>29;e[e.length-8]=255&n,e[e.length-7]=n>>>8&255,e[e.length-6]=n>>>16&255,e[e.length-5]=n>>>24&255,e[e.length-4]=255&r,e[e.length-3]=r>>>8&255,e[e.length-2]=r>>>16&255,e[e.length-1]=r>>>24&255,this.update(e.buffer);const s=new ArrayBuffer(16),o=new DataView(s);return o.setUint32(0,this.#a,!0),o.setUint32(4,this.#b,!0),o.setUint32(8,this.#c,!0),o.setUint32(12,this.#d,!0),s}toString(t="hex"){const n=this.digest();switch(t){case"hex":return e(new Uint8Array(n));case"base64":{const t=new Uint8Array(n);let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return btoa(e)}default:throw new Error("md5: invalid format")}}}const r=atob("aHR0cHM6Ly9hc3NldHMuc2NyYXRjaC5taXQuZWR1Lw==");async function s(t,s){let o=new ArrayBuffer(16);for(let e=Math.ceil(t.size/9999976)-1;e>=0;e--){const i=9999976*e,a=new Blob([o,new BigUint64Array([BigInt(t.size-e)]),t.slice(i,i+9999976)]),h=(new n).update(await a.arrayBuffer()),l=h.toString("hex");o=h.digest();const c=await fetch(r+l+".wav",{method:"POST",credentials:"include",headers:s?{Cookie:`scratchsessionsid=${s}`}:{},body:a});if(!c.ok)throw new Error(`HTTP error ${c.status} for ${c.url}`)}return e(new Uint8Array(o))}async function o(t,n){n&&n(0);const s=[];let o,i=0,a=t;for(;a;){const t=await fetch(`${r}internalapi/asset/${a}.wav/get/`);if(!t.ok)throw new Error(`HTTP error ${t.status} for ${t.url}`);if(!t.body)throw new Error("No response body");const h=t.body.getReader(),l=new Uint8Array(24);let c=0;for(;;){const t=await h.read();if(t.done)break;const r=t.value;if(s.push(r),i+=r.length,c<l.length&&(l.set(r.slice(0,l.length-c),c),c+=r.length,c>=16&&(a=e(l.slice(0,16))),c>=l.length)){const t=new DataView(l.buffer),e=Number(t.getBigUint64(16));o||(o=e),e<=9999976&&(a=null)}n&&o&&n(i/o)}}return n&&n(1),new Blob(s)}async function i(t,e){const n=[];let s=0;for(const o of t){e&&e(s/t.length);const i=await fetch(`${r}internalapi/asset/${o}.wav/get/`);if(!i.ok)throw new Error(`HTTP error ${i.status} for ${i.url}`);if(!i.body)throw new Error("No response body");const a=i.headers.get("Content-Length");if(null===a)throw new Error("Content-Length header wasn't given");const h=+a,l=i.body.getReader();let c=0;for(;;){const r=await l.read();if(r.done)break;n.push(r.value),e&&(c+=r.value.length,e((s+c/h)/t.length))}s++}return e&&e(1),new Blob(n)}export{s as upload};export{o as download};export{i as downloadOld};
