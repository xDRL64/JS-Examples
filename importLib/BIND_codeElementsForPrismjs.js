console.log('BIND_codeElementsForPrismjs');

(function(){

    let CODE_CLASSNAME = "code";

    let JS_CODE_QUERY_SELECTOR = "script."+CODE_CLASSNAME;
    let PRISM_JS_CLASS = "language-javascript";

    let CSS_CODE_QUERY_SELECTOR = "style."+CODE_CLASSNAME;
    let PRISM_CSS_CLASS = "language-css";

    let HTML_CODE_QUERY_SELECTOR = "iframe."+CODE_CLASSNAME;
    let PRISM_HTML_CLASS = "language-html";

    let elem = document.createElement("span");
    elem.style.display = "none";
    elem.id = "elem_CODE_QUERY_SELECTORS_BINDER";

    elem.process = function(){
        console.log('process');

        // js code
        let jsCodeElems = document.querySelectorAll(JS_CODE_QUERY_SELECTOR);
        for(let jsCodeElem of [...jsCodeElems]){
            let newElem = document.createElement("code");
            newElem.style.display = "block";
            newElem.style.whiteSpace = "pre";
            newElem.classList = CODE_CLASSNAME + ' ' + PRISM_JS_CLASS;
            newElem.textContent = jsCodeElem.text;
            document.body.replaceChild(newElem, jsCodeElem);
        }

        // css code
        let cssCodeElems = document.querySelectorAll(CSS_CODE_QUERY_SELECTOR);
        for(let cssCodeElem of [...cssCodeElems]){
            let newElem = document.createElement("code");
            newElem.style.display = "block";
            newElem.style.whiteSpace = "pre";
            newElem.classList = CODE_CLASSNAME + ' ' + PRISM_CSS_CLASS;
            newElem.textContent = cssCodeElem.textContent;
            document.body.replaceChild(newElem, cssCodeElem);
        }

        // html code
        let htmlCodeElems = document.querySelectorAll(HTML_CODE_QUERY_SELECTOR);
        for(let htmlCodeElem of [...htmlCodeElems]){
            let newElem = document.createElement("code");
            newElem.style.display = "block";
            newElem.style.whiteSpace = "pre";
            newElem.classList = CODE_CLASSNAME + ' ' + PRISM_HTML_CLASS;
            newElem.textContent = htmlCodeElem.textContent;
            document.body.replaceChild(newElem, htmlCodeElem);
        }

        Prism.highlightAll();
    };


    document.head.appendChild(elem);


    document.addEventListener("readystatechange", function(){
        console.log('in readystatechange');
        elem.process();
    });


})();