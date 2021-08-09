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

function slideAway(page) {
    document.getElementById("greetings").style.animationName="slideout";
    document.getElementById("quickBio").style.animationName="slideout";
    document.getElementById("quickOppInfo").style.animationName="slideout";
    
    switch (page){ 
        case "about":
            sleep(1000).then(() => { window.location.href = "./about.html"});
            break;

        case "education":
            sleep(1000).then(() => { window.location.href = "./education.html"});
            break

        case "work":
            sleep(1000).then(() => { window.location.href = "./work.html"});
            break;
        
        case "volunteer":
            sleep(1000).then(() => { window.location.href = "./volunteer.html"});
            break;

        case "projects":
            sleep(1000).then(() => { window.location.href = "./projects.html"});
            break;
        
        case "fun":
            sleep(1000).then(() => { window.location.href = "./fun.html"});
            break;
    }
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

        case "PROJECTS &gt;&gt;": 
            item.innerHTML="PROJECTS";
            break;

        case "FUN &gt;&gt;":
            item.innerHTML="FUN";
            break;
    }
}

window.addEventListener('beforeunload', function (e) {
    // Cancel the event
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    console.log('refreshing');
    e.returnValue = '';
    delete e['returnValue'];
});