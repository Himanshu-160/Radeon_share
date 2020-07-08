(function(){
	let jquery_version='3.4.1';
	let site_url='https://127.0.0.1:8000/';
	let static_url=site_url +'static/';
	let min_width=100;
	let min_height=100;
	function bookmarklet(msg){
		//here goes our bookmarklet code 
		//load CSS
		let css=jQuery('<link>');
		css.attr({
			rel: 'stylesheet',
			type:'text/css',
			href:static_url+'css/bookmarklet.css?r='+Math.floor(Math.random()*99999999999999999)
		});
		jQuery('head').append(css);
		//load HTML
	};
	//check if jquery is loded
	if (typeof window.jQuery!='undefined'){
		bookmarklet();
	}else{
		//check for conflicts
		let conflict =typeof window.$ !='undefined';
		//create the script and point to Google API
		let script=document.createElement('script');
		script.src='//ajax.googleapi.com/ajax/libs/jquery/'+jquery_version+'/jquery.min.js';
		document.head.appendChild(script);
		var attempts=15;
		(function(){
			//check again jquery is undefined
			if(typeof window.jQuery=='undefined'){
				if (--attempts>0){
					window.setTimeout(arguments.callee,250)
				}
				else{
					alert('An error occurred while loading jQuery')
				}
			}
			else{
				bookmarklet();
			}
		})()
	}

	
})();