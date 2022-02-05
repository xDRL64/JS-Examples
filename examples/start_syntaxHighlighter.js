
(function(){

    let SYNTAX_HIGHLIGHTER_NAME = "PRISM";


    /////////////////////////////////////

    let rootPath = document.getElementById("elem_ROOT_BACK_PATH").textContent;

    if(SYNTAX_HIGHLIGHTER_NAME === "PRISM"){
        let s = document.createElement("script");
        document.head.appendChild(s);
        s.src = rootPath + '/importLib/importPrismjs.js';
    }

})();