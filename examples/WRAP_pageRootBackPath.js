console.log('WRAP_pageRootBackPath.js');

(function(){

    let ROOT_BACK_PATH = "..";

    //////////////////////////////////////////

    let elem = document.createElement("span");
    elem.style.display = "none";
    elem.id = "elem_ROOT_BACK_PATH";
    elem.textContent = ROOT_BACK_PATH;
    document.head.appendChild(elem);

})();