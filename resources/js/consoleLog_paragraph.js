 // use it for log containing html symbol like < >

 (()=>{
    document.querySelectorAll('script.log').forEach(s=>{
        const p = document.createElement('p');
        p.className = 'console';
        p.textContent = s.logtxt;
        s.parentElement.replaceChild(p,s);
    });
 })();