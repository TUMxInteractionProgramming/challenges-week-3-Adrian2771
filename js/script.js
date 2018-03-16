/*challenge 6*/
console.log('app is alive');

function switchChannel(channelName){
	console.log('Tuning into channel ' + channelName);
	var test = channelName;
	document.getElementById('actual-channel').textContent = test;
}

var channelCollection = document.querySelectorAll('#channels ul li');

console.log(channelCollection);

for(let i = 0; i < channelCollection.length; i++){
	channelCollection[i].addEventListener('click', function(){
		var tmp = this.textContent;
		tmp = tmp.replace(/\s+>?/g, '');
		//console.log(tmp);
		switchChannel(tmp);
	}); 
}


//switchChannel();