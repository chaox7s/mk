

player.play = function(){
	var btns = document.getElementsByClassName('btns')[0] ;
	var btn = btns.children[1] ;
	btn.click() ;
}

player.prev = function(){
	var btns = document.getElementsByClassName('btns')[0] ;
	var btn = btns.children[0] ;
	btn.click() ;
}


player.next = function(){
	var btns = document.getElementsByClassName('btns')[0] ;
	var btn = btns.children[2] ;
	btn.click() ;
}


/*
var script = document.createElement('script') ;
var src = "chrome-extension://naihplhpaabjmgifhpegpelkmblibjen/ten.js" ;
script.setAttribute('src' , src) ;
document.body.appendChild(script) ;
*/
