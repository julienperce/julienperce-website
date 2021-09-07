function showDesc(stop) {
    eltCnt = document.getElementsByClassName("lfcDescWindow").length;// elt count per class
    for (i = 0; i < eltCnt; i++)
    {
        document.getElementsByClassName("lfcDescWindow")[i].style.visibility = "visible";
    }
}

function hideDesc(stop) {
    eltCnt = document.getElementsByClassName("lfcDescWindow").length;// elt count per class
    for (i = 0; i < eltCnt; i++)
    {
        document.getElementsByClassName("lfcDescWindow")[i].style.visibility = "hidden";
    }
}