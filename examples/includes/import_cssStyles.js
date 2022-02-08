
(function(){

    let cssList = [
        '/examples/css/styles.css'
    ];

    //////////////////////////////////////////////////////////////////////////

    let rootPath = document.getElementById("elem_ROOT_BACK_PATH").textContent;

    let path, l;

    for(path of cssList){
        l = document.createElement("link");
        document.head.appendChild(l);
        l.rel = "stylesheet";
        l.href = rootPath + path;
    }
})();