(function(){
	this.scrollBtn=function(){
		this.btn=null;

		var defaults={
			className: 'btn_position',
			el_tag: 'body',
			text: 'back to top',
			durinTime: 550
		}
		if(arguments[0] && typeof arguments[0] === 'object'){
			this.options=extendDefaults(defaults, arguments[0]);
		}
		appendToEl.call(this);
	};
	function appendToEl(){
		docFrag=document.createDocumentFragment();
		this.btn=document.createElement('a');
		this.btn.className='backtop ' + this.options.className;
		this.btn.href='#';
		this.btn.innerHTML=this.options.text;
		docFrag.appendChild(this.btn);
		document.getElementsByTagName(this.options.el_tag).appendChild(docFrag);
	}
	function extendDefaults(source, properties){
		var property;
		for(property in properties){
			if(properties.hasOwnProperty(property)){
				source[property] = properties[property];
			}
		}
		return source;
	}
})(window, document);

var wraper = document.getElementById('top');

var topbtn = new scrollBtn({
  el_tag: wraper,
  text: '回到上層'
});


// triggerButton.addEventListener('click', function() {
//   topbtn.open();
// });