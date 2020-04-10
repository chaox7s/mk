



chrome.browserAction.onClicked.addListener(
	function(tab) {
		chrome.tabs.sendMessage(tab.id , {'type' : 'f' , 'value' : 'testing'}) ;
	}
);




chrome.contextMenus.create({
	title: 'Testing' ,
	contexts: ['all'] ,
	onclick: menuHandler
}) ;



function menuHandler(data){
	/*chrome.tabs.query({"active" : true , "currentWindow" : true} , function(tabs){
		chrome.tabs.executeScript(null , {'file' : 'ten.js'}) ;
	}) ;*/
	
	/*$.get('https://movie.douban.com/celebrity/1009405/photo/1180022176/' , function(data , status , xhr){
		console.log(data , status , xhr) ;
	})*/
	
	
	
	//chrome.tabs.sendMessage(tab_music.id , {'type' : 'f' , 'value' : command}) ;
	
	
}




var lists = [{'match' : 'xiami.com/play' ,  'file' : 'xiami.js'} , {'match' : '163.com' , 'file' : 'netease.js'}] ;

function getUnder(url){
	for(var i = 0 ; i < lists.length ; i ++){
		if(url.indexOf(lists[i].match) > -1){
			return i ;
		}
	}

	return -1 ;
}




chrome.tabs.onUpdated.addListener(tabHandler) ;
function tabHandler(id , state , tab){
	if(state.status == "complete"){
		var sub = getUnder(tab.url) ;
		if(sub > -1){
			chrome.tabs.executeScript(null , {'file' : lists[sub].file}) ;
		}
	
		
	}
}




chrome.commands.onCommand.addListener(function(command) {
    switch(command){
		default :
		wanna(command) ;
	}
	
	
}) ;



function wanna(command){

	chrome.tabs.query({} , function(tabs){
		for(var i = 0 ; i < tabs.length ; i ++){
			var tab_music = tabs[i] ;
			
			if(getUnder(tab_music.url) > -1){
			
				if(command == 'active'){
					
					chrome.windows.get(tab_music.windowId , function(container){
					
						if(container.focused && tab_music.active){
							chrome.windows.update(container.id , {'focused' : false}) ;
						}else{
							chrome.windows.update(container.id , {'focused' : true}) ;
							chrome.tabs.update(tab_music.id , {'active' : true}) ;
						}
					
						
					}) ;
					
					
					
					
				}else{
					chrome.tabs.sendMessage(tab_music.id , {'type' : 'f' , 'value' : command}) ;
				}
				
				
				
				break ;
				
			}
		
		}
		
		
	}) ;
	
	
	
}



chrome.runtime.onMessage.addListener(
	function (request, sender){
		switch(request['type']){
			
			case 'log' :
				console.log(request['value']) ;
				break ;
				
				
			case 'translate' :
				translate(request['value']) ;
				
				break ;	
		}
		
		
	}
) ;





function translate(message){
	
	chrome.tabs.getSelected(null , function(tab){
			chrome.tabs.create({
				'url': 'http://www.iciba.com/' + message , 'active' : true , 'index' : tab.index + 1 , 'openerTabId' : tab.id
			}) ;
	}) ;
	
	
	
	
	
	
}


/*
chrome.tabs.onActiveChanged.addListener(function(id , win){
	console.log(id , win) ;
}) ;*/























