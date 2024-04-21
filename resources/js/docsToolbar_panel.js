
// Purpose :

// Automatic generator of docs toolbar for features such as :
//   copy to clipboard
//   run in live exec
//   download

// Using :

// Place the following tag just below an element containg displayed text / code / etc..
// <div class="DOCS_TOOLBAR"></div>

// Write feature name between some []
// Example : <div class="DOCS_TOOLBAR">[name] [name] [etc..]</div>

// Available feature names : 
// [copy]
// [exec]
// [download]

// Precise the code lang between a paire of ()
// Example : <div class="DOCS_TOOLBAR">[name] [name] (lang)</div>

// Concret full example :
/*
	<pre>Some text or code</pre>
	<div class="DOCS_TOOLBAR">[copy] [exec] [download] (js)</div>
*/

(()=>{
	const list = document.querySelectorAll('div.DOCS_TOOLBAR');

	const get_code = (elem)=>elem.previousElementSibling.textContent;

	const mime = 'text/plain';

	const add_button = (parent, text, onclick)=>{
		const b = document.createElement('div');
		b.textContent = text;
		b.onclick = onclick;
		b.onmouseenter = ()=>b.style.backgroundColor = 'lightblue';
		b.onmouseleave = ()=>b.style.backgroundColor = '';
		b.style.cursor = 'pointer';
		parent.appendChild(b);
		return b;
	};

	list.forEach(elem=>{

		const btn = {copy:false, exec:false, download:false, lang:''};
		// gets feature names (button list)
		let result = [...elem.textContent.matchAll( /\[(\w*)\]/g )]; // motif : [word]
		if(result.length > 0){
			result.forEach(r=>btn[r[1]]=true); // r [ 0:full , 1:group ]
		}
		// gets code language (html/css/js)
		result = [...elem.textContent.matchAll( /\((\w*)\)/g )]; // motif : (word)
		if(result.length > 0)
			btn.lang = result.shift()[1]; // r [ 0:full , 1:group ]
		
		const extType = btn.lang || 'txt';

		// config toolbar
		elem.style.display = 'flex';
		elem.style.width = 'fit-content';
		elem.style.gap = '12px';
		elem.style.userSelect = 'none';
		elem.innerHTML = '';
		
		// adds buttons
		//

		if(btn.copy){
			const onclick = ()=>{
				const code = get_code(elem);
				navigator.clipboard.writeText(code);
			};
			add_button(elem, '[copy]', onclick);
		}

		if(btn.exec){
			const onclick = (event)=>{
				// Display a JSFiddle from POST (docs) :
				// https://docs.jsfiddle.net/api/display-a-fiddle-from-post
				const code = get_code(elem);
				const form = document.createElement('form');
				form.method = 'post';
				form.action = 'http://jsfiddle.net/api/post/mootools/1.3/dependencies/more/';
				form.target = event.shiftKey ? 'jsfiddle' : '_blank';
				const txtarea = document.createElement('textarea');
				txtarea.textContent = code;
				txtarea.name = btn.lang || 'html';
				form.appendChild(txtarea);
				// send req
				elem.appendChild(form);
				form.submit();
				elem.removeChild(form);
			};
			let b = add_button(elem, '[exec]', onclick);
			b.title = 'Click : always new win/tab\nShift+Click : target same win/tab';
		}

		if(btn.download){
			const onclick = ()=>{
				const code = get_code(elem);
				const blob = new Blob([code], {type:mime});
				const url = URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.download = document.title+'.'+extType;
				link.href = url;
				link.click();
				URL.revokeObjectURL(url); 
			};
			add_button(elem, '[download]', onclick);
		}

	});

})()