// use it to add a JS Example index table link

(()=>{
	const root_backpath = document.querySelector('#elem_ROOT_BACK_PATH').textContent;
	const url = `./${root_backpath}/index.html`;
	document.querySelectorAll('a.indexTbl').forEach(a=>a.href=url);
})();