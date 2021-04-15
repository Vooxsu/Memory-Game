var x = 0;
var m = 0;
var l;
var dalej = true;
var kolory = [];
for (let o = 1; o <= 8; o++) {
    for (let i = 1; i <= 2; i++) {
        kolory[m] = o;
        m++;
    }
}
m = 0;

var llll = kolory.length;
var pola = [];

function start() {
    document.getElementById("back").style.display = "block";
    document.getElementById("start").style.display = "none";
    if (x < 16) {
        var r = Math.floor(Math.random() * kolory.length);
        var c = kolory[r];
        var kolor = "";

        if (c == 1) {
            kolor = "red";
        }
        if (c == 2) {
            kolor = "green";
        }
        if (c == 3) {
            kolor = "blue";
        }
        if (c == 4) {
            kolor = "violet";
        }
        if (c == 5) {
            kolor = "purple";
        }
        if (c == 6) {
            kolor = "aqua";
        }
        if (c == 7) {
            kolor = "orange";
        }
        if (c == 8) {
            kolor = "yellow";
        }

        pola[x] = kolor;

        kolory.splice(kolory.indexOf(c), 1);
        document.getElementById("c" + x).style.display = "inline-block";
        timmer();
    }
}

function timmer() {
    setTimeout(function () {
        start();
    }, 75);

    x++;
}

var click = [];
var clicktime = 0;
var p = 0;
var pp = 0;
var pkt = 0;
var ruchy = 0;
var l = 0;

function zagraj(id) {
    document.getElementById(id).removeAttribute("onclick");
    ruchy++;
    document.getElementById("clk").innerHTML = ruchy;
    document.getElementById("clk").animate(
        [
            {
                transform: "rotateY(0deg)"
            }, {
                transform: "rotateY(360deg)"
            }
    ], {
            duration: 350,
            iterations: 1
        }
    );

    if ((pp == 1) && (p == 1) && (clicktime == 0)) {
        document.getElementById("c" + click[1]).animate(
        [
                {
                    backgroundColor: pola[click[1]],
                    transform: "rotateX(360deg)"
            }, {
                    backgroundColor: "goldenrod",
                    transform: "rotateX(0deg)"
            }
    ], {
                duration: 500,
                iterations: 1
            }
        );
        document.getElementById("c" + click[2]).animate(
        [
                {
                    backgroundColor: pola[click[2]],
                    transform: "rotateX(360deg)"
            }, {
                    backgroundColor: "black",
                    transform: "rotateX(0deg)"
            }
    ], {
                duration: 500,
                iterations: 1
            }
        );

        document.getElementById("c" + click[1]).style.backgroundColor = "SlateGray";
        document.getElementById("c" + click[2]).style.backgroundColor = "SlateGray";
        document.getElementById("c" + click[1]).setAttribute("onclick", "zagraj(this.id)");
        document.getElementById("c" + click[2]).setAttribute("onclick", "zagraj(this.id)");

    }


    pp = 0;
    p = 1;
    clicktime++;
    for (var z = 0; z < pola.length; z++) {
        if (id == "c" + z) {
            click[clicktime] = z;
            break;
        }
    }

    document.getElementById(id).animate(
        [
            {
                backgroundColor: "black",
                transform: "rotateX(0deg)"
            }, {
                backgroundColor: pola[z],
                transform: "rotateX(360deg)"
            }
    ], {
            duration: 350,
            iterations: 1
        }
    );

    document.getElementById(id).style.backgroundColor = pola[z];

    if (clicktime == 2) {
        clicktime = 0;

        if (pola[click[1]] == pola[click[2]]) {
            document.getElementById("c" + click[1]).removeAttribute("onclick");
            document.getElementById("c" + click[2]).removeAttribute("onclick");
            document.getElementById("z" + l).style.backgroundColor = pola[click[1]];
            document.getElementById("z" + l).style.display = "inline-block";
            document.getElementById("c" + click[1]).style.border = "0";
            document.getElementById("c" + click[2]).style.border = "0";
            l++;
            pkt++;
            document.getElementById("pkt").innerHTML = pkt;
            document.getElementById("pkt").animate([
                {
                    transform: "rotateY(0deg)"
                },
                {
                    transform: "rotateY(360deg)"
                }], {
                duration: 350,
                iterations: 1
            });

            if (pkt == 8) {
                document.getElementById("Wygrana").style.display = "block";
                document.getElementById("Wygrana").innerHTML = "Gratulacje";
                document.getElementById("renew").style.display = "block";
                dalej = false;
            }
            return 0;
        } else pp = 1;

    }
}

function renew() {
    location.reload();
}



var sec = 0;
var min = 0;
var hour = 0;
var secc = "";
var minn = "";

function zegar() {
    if (dalej == false) {
        return;
    }
    setTimeout(function () {
        if (sec <= 9) {
            secc = "0" + sec;
        }
        if (min <= 9) {
            minn = "0" + min;
        }

        if ((sec <= 9) && (min <= 9)) {
            document.getElementById("timmer").innerHTML = hour + ":" + minn + ":" + secc;
        }
        if ((min <= 9) && (sec > 9)) {
            document.getElementById("timmer").innerHTML = hour + ":" + minn + ":" + sec;
        }
        if ((sec <= 9) && (min > 9)) {
            document.getElementById("timmer").innerHTML = hour + ":" + min + ":" + secc;
        }
        if ((sec > 9) && (min > 9)) {
            document.getElementById("timmer").innerHTML = hour + ":" + min + ":" + sec;
        }

        sec++;
        if (sec >= 60) {
            min++;
            sec = 0;
        }
        if (min >= 60) {
            hour++;
            min = 0;
        }
        zegar();
    }, 1000);
}

document.getElementById("back").addEventListener("click", function () {
    window.location.href = "../index.html";
});
