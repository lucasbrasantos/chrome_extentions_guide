
document.getElementById('enviar').onclick = async function(e){
    
    console.log("click event");
    
    let msg = {
        a: document.getElementById('input1').value,
        b: document.getElementById('input2').value
    };

    let params = { active: true, currentWindow: true };
    let tabs = await chrome.tabs.query(params);
    // console.log(msg);
    
    function sendMsg(){
        chrome.tabs.sendMessage(tabs[0].id, msg, function(response){
            if (!chrome.runtime.lastError) {
                console.log(response)
            }
        });
    }
    sendMsg()
    
}


