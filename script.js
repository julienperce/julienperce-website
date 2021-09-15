function showDesc(stop) {
    eltCnt = document.getElementsByClassName(stop).length;// elt count per class
    for (i = 0; i < eltCnt; i++)
    {
        document.getElementsByClassName(stop)[i].style.visibility = "visible";
    }
}

function hideDesc(stop) {
    eltCnt = document.getElementsByClassName(stop).length;// elt count per class
    for (i = 0; i < eltCnt; i++)
    {
        document.getElementsByClassName(stop)[i].style.visibility = "hidden";
    }
}