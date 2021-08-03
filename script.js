function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function noScroll() {
    window.scrollTo(0, 0);
}

function flashname(){
    vanishintro();
    bringMain();
    document.getElementById("body").style.backgroundColor="white";
    sleep(1000).then(() => { document.getElementById("introText").innerHTML="JULIEN PERCE"; document.getElementById("introText").style.color="black"; document.getElementById("body").style.backgroundColor="red";
    sleep(1000).then(() => { document.getElementById("introText").innerHTML="&quot;AN INVITATION&quot;"; document.getElementById("introText").style.color="white"; document.getElementById("body").style.backgroundColor="black"; }) });
}

function vanishintro(){ // make sure our intro text does not come back after fade out animation
    sleep(4750).then(() => { document.getElementById("introDiv").style.display="none"; });
}

function bringMain(){
    function bringElts() {
        document.getElementById("leftSidebar").style.display="block";
        document.getElementById("middleSidebar").style.display="block";
        document.getElementById("mainSidebar").style.display="block";
    }
    sleep(4750).then(() => { bringElts(); });
} 

function slideAway() {
    document.getElementById("greetings").style.animationName="slideout";
    document.getElementById("quickBio").style.animationName="slideout";
    document.getElementById("quickOppInfo").style.animationName="slideout";
    sleep(1000).then(() => { document.location.href = "/about.html"});
}

function hoverSlideOn(sidebarItem) {
    item = document.getElementById(sidebarItem);
    item.insertAdjacentText("beforeEnd", " >>");
    item.style.animationName="sidebarSlideOut";
}

function hoverSlideOut(sidebarItem) {
    item = document.getElementById(sidebarItem)
    switch (item.innerHTML) {
        case "ABOUT &gt;&gt;":
            item.innerHTML="ABOUT";
            break;

        case "EDUCATION &gt;&gt;":
            item.innerHTML="EDUCATION";
            break;

        case "WORK &gt;&gt;":
            item.innerHTML="WORK";
            break;

        case "VOLUNTEER &gt;&gt;":
            item.innerHTML="VOLUNTEER";
            break;

        case "PORTFOLIO &gt;&gt;": 
            item.innerHTML="PORTFOLIO";
            break;

        case "FUN &gt;&gt;":
            item.innerHTML="FUN";
            break;
    }
}