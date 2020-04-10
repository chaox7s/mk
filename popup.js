


var page = 1 ;


function refresh(){
	var url = 'http://m.mtime.cn/Service/callback.mi/News/NewsList.api?t=2016111411552184109&pageIndex=' + page ;

	 $.getJSON(url , function(data , status , xhr){
		
	 }) ;
	
}




(function(){
	var btn_refresh = document.getElementById('btn_refresh') ;
	btn_refresh.addEventListener("click" , function(event){
		
		refresh() ;
		
		
	}) ;
	
})() ;



