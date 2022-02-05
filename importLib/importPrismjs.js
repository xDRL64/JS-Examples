
// import Prism.js

(function(){

console.log(document.currentScript)

    let scriptList = [
        '/externalLibraries/Prismjs/prism.js',
        '/importLib/BIND_codeElementsForPrismjs.js'
    ];

    let cssList = [
        '/externalLibraries/Prismjs/prism-monokai.css'
    ];

    //////////////////////////////////////////////////////////////////////////

    let rootPath = document.getElementById("elem_ROOT_BACK_PATH").textContent;

    let path, s, l;

    for(path of scriptList){
        s = document.createElement("script");
        document.head.appendChild(s);
        s.src = rootPath + path;
    }

    for(path of cssList){
        l = document.createElement("link");
        document.head.appendChild(l);
        l.rel = "stylesheet";
        l.href = rootPath + path;
    }

})();