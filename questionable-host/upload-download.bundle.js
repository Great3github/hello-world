const t=(new TextEncoder).encode("0123456789abcdef");function e(e){return(new TextDecoder).decode(function(e){const n=new Uint8Array(2*e.length);for(let s=0;s<n.length;s++){const r=e[s];n[2*s]=t[r>>4],n[2*s+1]=t[15&r]}return n}(e))}class n{#a;#b;#c;#d;#block;#pos;#n0;#n1;constructor(){this.#a=1732584193,this.#b=4023233417,this.#c=2562383102,this.#d=271733878,this.#block=new Uint8Array(64),this.#pos=0,this.#n0=0,this.#n1=0}addLength(t){let e=this.#n0;e+=t,e>4294967295&&(this.#n1+=1),this.#n0=e>>>0}hash(t){let e=this.#a,n=this.#b,s=this.#c,r=this.#d;const i=e=>t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24,o=(t,e)=>t<<e|t>>>32-e,a=i(0),h=i(4),c=i(8),l=i(12),d=i(16),f=i(20),w=i(24),g=i(28),u=i(32),y=i(36),b=i(40),p=i(44),U=i(48),m=i(52),A=i(56),k=i(60);e=n+o(((s^r)&n^r)+e+a+3614090360,7),r=e+o(((n^s)&e^s)+r+h+3905402710,12),s=r+o(((e^n)&r^n)+s+c+606105819,17),n=s+o(((r^e)&s^e)+n+l+3250441966,22),e=n+o(((s^r)&n^r)+e+d+4118548399,7),r=e+o(((n^s)&e^s)+r+f+1200080426,12),s=r+o(((e^n)&r^n)+s+w+2821735955,17),n=s+o(((r^e)&s^e)+n+g+4249261313,22),e=n+o(((s^r)&n^r)+e+u+1770035416,7),r=e+o(((n^s)&e^s)+r+y+2336552879,12),s=r+o(((e^n)&r^n)+s+b+4294925233,17),n=s+o(((r^e)&s^e)+n+p+2304563134,22),e=n+o(((s^r)&n^r)+e+U+1804603682,7),r=e+o(((n^s)&e^s)+r+m+4254626195,12),s=r+o(((e^n)&r^n)+s+A+2792965006,17),n=s+o(((r^e)&s^e)+n+k+1236535329,22),e=n+o(((n^s)&r^s)+e+h+4129170786,5),r=e+o(((e^n)&s^n)+r+w+3225465664,9),s=r+o(((r^e)&n^e)+s+p+643717713,14),n=s+o(((s^r)&e^r)+n+a+3921069994,20),e=n+o(((n^s)&r^s)+e+f+3593408605,5),r=e+o(((e^n)&s^n)+r+b+38016083,9),s=r+o(((r^e)&n^e)+s+k+3634488961,14),n=s+o(((s^r)&e^r)+n+d+3889429448,20),e=n+o(((n^s)&r^s)+e+y+568446438,5),r=e+o(((e^n)&s^n)+r+A+3275163606,9),s=r+o(((r^e)&n^e)+s+l+4107603335,14),n=s+o(((s^r)&e^r)+n+u+1163531501,20),e=n+o(((n^s)&r^s)+e+m+2850285829,5),r=e+o(((e^n)&s^n)+r+c+4243563512,9),s=r+o(((r^e)&n^e)+s+g+1735328473,14),n=s+o(((s^r)&e^r)+n+U+2368359562,20),e=n+o((n^s^r)+e+f+4294588738,4),r=e+o((e^n^s)+r+u+2272392833,11),s=r+o((r^e^n)+s+p+1839030562,16),n=s+o((s^r^e)+n+A+4259657740,23),e=n+o((n^s^r)+e+h+2763975236,4),r=e+o((e^n^s)+r+d+1272893353,11),s=r+o((r^e^n)+s+g+4139469664,16),n=s+o((s^r^e)+n+b+3200236656,23),e=n+o((n^s^r)+e+m+681279174,4),r=e+o((e^n^s)+r+a+3936430074,11),s=r+o((r^e^n)+s+l+3572445317,16),n=s+o((s^r^e)+n+w+76029189,23),e=n+o((n^s^r)+e+y+3654602809,4),r=e+o((e^n^s)+r+U+3873151461,11),s=r+o((r^e^n)+s+k+530742520,16),n=s+o((s^r^e)+n+c+3299628645,23),e=n+o((s^(n|~r))+e+a+4096336452,6),r=e+o((n^(e|~s))+r+g+1126891415,10),s=r+o((e^(r|~n))+s+A+2878612391,15),n=s+o((r^(s|~e))+n+f+4237533241,21),e=n+o((s^(n|~r))+e+U+1700485571,6),r=e+o((n^(e|~s))+r+l+2399980690,10),s=r+o((e^(r|~n))+s+b+4293915773,15),n=s+o((r^(s|~e))+n+h+2240044497,21),e=n+o((s^(n|~r))+e+u+1873313359,6),r=e+o((n^(e|~s))+r+k+4264355552,10),s=r+o((e^(r|~n))+s+w+2734768916,15),n=s+o((r^(s|~e))+n+m+1309151649,21),e=n+o((s^(n|~r))+e+d+4149444226,6),r=e+o((n^(e|~s))+r+p+3174756917,10),s=r+o((e^(r|~n))+s+c+718787259,15),n=s+o((r^(s|~e))+n+y+3951481745,21),this.#a=this.#a+e>>>0,this.#b=this.#b+n>>>0,this.#c=this.#c+s>>>0,this.#d=this.#d+r>>>0}update(t){let e;if("string"==typeof t)e=(new TextEncoder).encode(t);else{if("object"!=typeof t)throw new TypeError("md5: `data` is invalid type");if(!(t instanceof ArrayBuffer||ArrayBuffer.isView(t)))throw new TypeError("md5: `data` is invalid type");e=new Uint8Array(t)}let n=this.#pos;const s=64-n;if(e.length<s)this.#block.set(e,n),n+=e.length;else{this.#block.set(e.slice(0,s),n),this.hash(this.#block);let t=s;for(;t+64<=e.length;)this.hash(e.slice(t,t+64)),t+=64;this.#block.fill(0).set(e.slice(t),0),n=e.length-t}return this.#pos=n,this.addLength(e.length),this}digest(){let t=64-this.#pos;t<9&&(t+=64);const e=new Uint8Array(t);e[0]=128;const n=this.#n0<<3,s=this.#n1<<3|this.#n0>>>29;e[e.length-8]=255&n,e[e.length-7]=n>>>8&255,e[e.length-6]=n>>>16&255,e[e.length-5]=n>>>24&255,e[e.length-4]=255&s,e[e.length-3]=s>>>8&255,e[e.length-2]=s>>>16&255,e[e.length-1]=s>>>24&255,this.update(e.buffer);const r=new ArrayBuffer(16),i=new DataView(r);return i.setUint32(0,this.#a,!0),i.setUint32(4,this.#b,!0),i.setUint32(8,this.#c,!0),i.setUint32(12,this.#d,!0),r}toString(t="hex"){const n=this.digest();switch(t){case"hex":return e(new Uint8Array(n));case"base64":{const t=new Uint8Array(n);let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return btoa(e)}default:throw new Error("md5: invalid format")}}}class s extends Error{name=this.constructor.name;static async from(t){return new s(`HTTP error ${t.status} for ${t.url}. ${await t.text().catch((()=>"Could not get response text."))}`)}}const r="https://assets.scratch.mit.edu/";async function i(t,i,o){const a=Math.ceil(t.size/9999975);let h=new ArrayBuffer(16);for(let c=a-1;c>=0;c--){o&&o((a-1-c)/a);const l=9999975*c,d=new DataView(new ArrayBuffer(8));d.setBigUint64(0,BigInt(t.size-l));const f=new Blob([h,d,t.slice(l,l+9999975)]);h=(new n).update(await f.arrayBuffer()).digest();const w=e(new Uint8Array(h)),g=await fetch(r+w+".wav",{method:"POST",credentials:"include",headers:i?{cookie:`scratchsessionsid=${i}`}:{},body:f});if(!g.ok)throw await s.from(g)}return o&&o(1),e(new Uint8Array(h))}async function o(t,n,i){n&&n(0);const o=[];let a,h=0,c=t;for(;c;){const t=await fetch(`${r}internalapi/asset/${c}.wav/get/`);if(!t.ok)throw await s.from(t);if(!t.body)throw new Error("No response body");const i=t.body.getReader(),l=new Uint8Array(24);let d=0;for(;;){const t=await i.read();if(t.done)break;let s=t.value;if(d<l.length){const t=l.length-d;if(l.set(s.slice(0,t),d),d+=s.length,d>=16&&(c=e(l.slice(0,16))),d>=l.length){const t=new DataView(l.buffer),e=Number(t.getBigUint64(16));a||(a=e),e<=9999975&&(c=null)}if(!(d>l.length))continue;s=s.slice(t)}o.push(s),h+=s.length,n&&a&&n(h/a)}}return new Blob(o,{type:i})}async function a(t,e,n){const i=[];let o=0;for(const n of t){e&&e(o/t.length);const a=await fetch(`${r}internalapi/asset/${n}.wav/get/`);if(!a.ok)throw await s.from(a);if(!a.body)throw new Error("No response body");const h=a.headers.get("Content-Length");if(null===h)throw new Error("Content-Length header wasn't given");const c=+h,l=a.body.getReader();let d=0;for(;;){const n=await l.read();if(n.done)break;i.push(n.value),e&&(d+=n.value.length,e((o+d/c)/t.length))}o++}return e&&e(1),new Blob(i,{type:n})}export{i as upload};export{o as download};export{a as downloadOld};
