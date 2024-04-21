
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



    // 1. remove 1st and last char (which should be 'line return' chars)
    const format_codeContent = (codeContent)=>{
        // return line : (?>\r\n|\n|\x0b|\f|\r|\x85) or (?:\r\n|\r|\n)
        // \R not available in js regexp
		const regex = /^(?:\r\n|\r|\n)(.*)(?:\r\n|\r|\n)$/gs; // startpat : '⏎'      // endpat : '⏎' 
		const result = [...codeContent.matchAll(regex)][0]; // [fullsample, capture] size 2
		return (result?.length === 2) ? result[1] : codeContent;
	};

    // 1. remove main anonymous scope (if it is present)
    // 2. then remove 1st and last char (which should be 'line return' chars)
    const format_jsContent = (codeContent)=>{
        codeContent = format_codeContent(codeContent);
		const regex = /^{{(?:\r\n|\r|\n)(.*)(?:\r\n|\r|\n)}}$/gs; // startpat : '{⏎'      // endpat : '⏎}' 
		const result = [...codeContent.matchAll(regex)][0]; // [fullsample, capture] size 2
		return (result?.length === 2) ? result[1] : codeContent;
	};

    

    elem.process = function(){

        // js code
        let jsCodeElems = document.querySelectorAll(JS_CODE_QUERY_SELECTOR);
        for(let jsCodeElem of [...jsCodeElems]){
            let newElem = document.createElement("code");
            newElem.style.display = "block";
            newElem.style.whiteSpace = "pre";
            newElem.classList = CODE_CLASSNAME + ' ' + PRISM_JS_CLASS;
            newElem.textContent = format_jsContent(jsCodeElem.text);
            document.body.replaceChild(newElem, jsCodeElem);
        }

        // css code
        let cssCodeElems = document.querySelectorAll(CSS_CODE_QUERY_SELECTOR);
        for(let cssCodeElem of [...cssCodeElems]){
            let newElem = document.createElement("code");
            newElem.style.display = "block";
            newElem.style.whiteSpace = "pre";
            newElem.classList = CODE_CLASSNAME + ' ' + PRISM_CSS_CLASS;
            newElem.textContent = format_codeContent(cssCodeElem.textContent);
            document.body.replaceChild(newElem, cssCodeElem);
        }

        // html code
        let htmlCodeElems = document.querySelectorAll(HTML_CODE_QUERY_SELECTOR);
        for(let htmlCodeElem of [...htmlCodeElems]){
            let newElem = document.createElement("code");
            newElem.style.display = "block";
            newElem.style.whiteSpace = "pre";
            newElem.classList = CODE_CLASSNAME + ' ' + PRISM_HTML_CLASS;
            newElem.textContent = format_codeContent(htmlCodeElem.textContent);
            document.body.replaceChild(newElem, htmlCodeElem);
        }

        Prism.highlightAll();
    };


    document.head.appendChild(elem);


    document.addEventListener("readystatechange", function(){
        elem.process();
    });


})();