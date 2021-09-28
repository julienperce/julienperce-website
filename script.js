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

function giveAge() {
    var born = new Date(2004, 04, 06, 0, 30, 0, 0);
    var day = new Date();

    var dif = day.getTime() - born.getTime();

    var bornSeconds = dif / 1000;
    var absSeconds = Math.abs(bornSeconds);
    var absHours = absSeconds / 3600;
    var absDays = absSeconds / 24;
    var absYears = absSeconds / 31556952;
    return absYears;
}

function writeAge() {
    years = giveAge();
    document.getElementById("ageyears").innerHTML = `- ${years} years old`;
    setTimeout(writeAge, 100)
}