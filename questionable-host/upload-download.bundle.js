(new TextEncoder).encode("0123456789abcdef");async function e(e,t){const n=[];let o=0;for(const r of e){t&&t(o/e.length);const a=await fetch(`https://assets.scratch.mit.edu//internalapi/asset/${r}.wav/get/`);if(!a.ok)throw new Error(`HTTP error ${a.status} for ${a.url}`);if(!a.body)throw new Error("No response body");const s=a.headers.get("Content-Length");if(null===s)throw new Error("Content-Length header wasn't given");const d=+s,c=a.body.getReader();let h=0;for(;;){const r=await c.read();if(r.done)break;n.push(r.value),t&&(h+=r.value.length,t((o+h/d)/e.length))}o++}return t&&t(1),new Blob(n)}export{e as downloadOld};
