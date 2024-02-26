document.onclick = (event) => {
    let clickX = event.clientX;
    let clickY = event.clientY;
    let clickTimestamp = new Date().toLocaleString();
    let clickOnScreen = document.querySelector("#clickOnScreen");
    clickOnScreen.style.left = clickX + "px";
    clickOnScreen.style.top = clickY + "px";
    clickOnScreen.innerHTML = "Clicked at: X (" + clickX + ",  Y "  + clickY + ")<br>Time: " + clickTimestamp;
    clickOnScreen.style.display = "block"; 
    setTimeout(function(){ clickOnScreen.style.display = "none"; }, 3000); 
};