


chrome.runtime.onMessage.addListener(
	function (request, sender){
		switch(request['type']){
			case 'f' :
				var f = eval('player.' + request['value']) ;
				if(f != 'undefined'){
					f.call() ;
				}
				
				break ;
		}
		
		
	}
) ;



var player = {} ;


player.testing = function(){

	
	
}




/*
var bd = document.body ;

//alert(bd) ;
*/


/*
bd.addEventListener("keyup" , function(event){
	
	switch(event.code){
		case 'KeyF' :
			var text = window.getSelection().toString() ;
			if(text){
				chrome.runtime.sendMessage({'type' : 'translate' , 'value' : text}) ;
			}
			
			
		break ;
	}

}) ;



bd.addEventListener("mousemove" , function(event){
	if(event.altKey){
		findtext(event.target) ;
	}
		
}) ;


function findtext(target){
	var list = target.childNodes ;
	
	for(var i = 0 ; i < list.length ; i ++){
		var node = list[i] ;
		
		if(node.constructor === Text){
			console.log(node.data) ;
		}
		
		
		
	}
	
	
	
}*/
















