chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse){
    console.log(msg);
    imgs(msg.a, msg.b)
    sendResponse('eae '+JSON.stringify("request"));
}

function imgs(a, b) {
	
	// const urls = [
	// 	'https://cdn.discordapp.com/attachments/947664222676987914/984236843396628520/b.jpeg',
	// 	'https://cdn.discordapp.com/attachments/947664222676987914/984236843681861642/a.jpeg',
	// ];

    const urls = [
       	a,
       	b,
    ];

	var url = urls[Math.floor(Math.random() * urls.length)];
	var	imgs = document.getElementsByTagName("img");

	for (var i = 0; i < imgs.length; i++) {
		url = urls[Math.floor(Math.random() * urls.length)];

		if (imgs[i].src !== urls[0] && imgs[i].src !== urls[1]){
			imgs[i].src = url;
            imgs[i].srcset = url;
		}
		
	}

}
