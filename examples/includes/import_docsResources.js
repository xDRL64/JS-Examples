(function(){

	const scriptList = [
		'/resources/js/consoleLog_paragraph.js',
		'/resources/js/indexTable_link.js',
		'/resources/js/docsToolbar_panel.js',
	];

	const cssList = [
		'/resources/css/styles.css',
	];

	//////////////////////////////////////////////////////////////////////////

	const rootPath = document.getElementById("elem_ROOT_BACK_PATH").textContent;

	let path, s, l;

	for(path of scriptList){
		s = document.createElement("script");
		s.setAttribute("defer", false);
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