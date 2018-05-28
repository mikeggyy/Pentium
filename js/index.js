
// 瀏覽器判斷
var userAgent = navigator.userAgent;
var isOpera = userAgent.indexOf("Opera") > -1;
var isMaxthon = userAgent.indexOf("Maxthon") > -1;
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
var isFF = userAgent.indexOf("Firefox") > -1;
var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1;
var isChrome = userAgent.indexOf("Chrome") > -1;
var isIE5 = isIE55 = isIE6 = isIE7 = isIE8 = false;



window.addEventListener("load", function () {
    // safari
    if (isSafari) {
        if ($(window).width() >= 1200 && $(window).width() < 1400) {
            document.querySelector(".banner").querySelectorAll("p")[1].style.left = "31.7rem";
            document.querySelector(".banner").querySelectorAll("p")[2].style.left = "31.7rem";
            document.querySelector(".banner").querySelectorAll("p")[3].style.left = "31.7rem";
        } else if ($(window).width() >= 1400) {
            document.querySelector(".banner").querySelectorAll("p")[1].style.left = "39.1rem";
            document.querySelector(".banner").querySelectorAll("p")[2].style.left = "39.1rem";
            document.querySelector(".banner").querySelectorAll("p")[3].style.left = "39.1rem";
        }
    } else {
        if ($(window).width() >= 1200 && $(window).width() < 1400) {
            document.querySelector(".banner").querySelectorAll("p")[1].style.left = "30.5rem";
            document.querySelector(".banner").querySelectorAll("p")[2].style.left = "30.5rem";
            document.querySelector(".banner").querySelectorAll("p")[3].style.left = "30.5rem";
        } else if ($(window).width() >= 1400) {
            document.querySelector(".banner").querySelectorAll("p")[1].style.left = "38.9rem";
            document.querySelector(".banner").querySelectorAll("p")[2].style.left = "38.9rem";
            document.querySelector(".banner").querySelectorAll("p")[3].style.left = "38.9rem";
        }
    }

    //點擊MEUN上選單滑動到指定區域 
    $("#navBtn-1").click(function () {
        $("html,body").animate({
            scrollTop: $("#main-03").offset().top
        }, 400);
        return false;
    });
    $("#navBtn-2").click(function () {
        $("html,body").animate({
            scrollTop: $("#main-04").offset().top
        }, 500);
        return false;
    });
    $("#navBtn-3").click(function () {
        $("html,body").animate({
            scrollTop: $("#main-05").offset().top
        }, 700);
        return false;
    });
    $("#navBtn-4").click(function () {
        $("html,body").animate({
            scrollTop: $("#footer").offset().top
        }, 700);
        return false;
    });

    // 切換語言按鈕點擊監聽
    document.querySelector(".language").addEventListener("change", function () {
        if (document.querySelector(".language").value == "TW") {
            loadTwContent();
            if (isSafari) {
                if ($(window).width() >= 1200 && $(window).width() < 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "22.1rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "22.1rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "22.1rem";
                } else if ($(window).width() >= 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "27.7rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "27.7rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "27.7rem";
                }
            } else {
                if ($(window).width() >= 1200 && $(window).width() < 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "21.8rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "21.8rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "21.8rem";
                } else if ($(window).width() >= 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "27.5rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "27.5rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "27.5rem";
                }
            }

        } else if (document.querySelector(".language").value == "CN") {
            loadCnContent();
            if (isSafari) {
                if ($(window).width() >= 1200 && $(window).width() < 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "22.1rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "22.1rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "22.1rem";
                } else if ($(window).width() >= 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "27.7rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "27.7rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "27.7rem";
                }
            } else {
                if ($(window).width() >= 1200 && $(window).width() < 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "21.8rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "21.8rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "21.8rem";
                } else if ($(window).width() >= 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "27.5rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "27.5rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "27.5rem";
                }
            }
        } else if (document.querySelector(".language").value == "EN") {
            loadEngContent();
            if (isSafari) {
                if ($(window).width() >= 1200 && $(window).width() < 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "31.7rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "31.7rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "31.7rem";
                } else if ($(window).width() >= 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "39.1rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "39.1rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "39.1rem";
                }
            } else {
                if ($(window).width() >= 1200 && $(window).width() < 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "30.5rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "30.5rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "30.5rem";
                } else if ($(window).width() >= 1400) {
                    document.querySelector(".banner").querySelectorAll("p")[1].style.left = "38.9rem";
                    document.querySelector(".banner").querySelectorAll("p")[2].style.left = "38.9rem";
                    document.querySelector(".banner").querySelectorAll("p")[3].style.left = "38.9rem";
                }
            }
        }
    });
    // json import using ajax
    function loadEngContent() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'src/en.json', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                // json.parse將json轉換成物件 之後抓取你要的名稱
                document.getElementById("navBtn-1").innerHTML = JSON.parse(xhr.responseText).menu_1;
                document.getElementById("navBtn-2").innerHTML = JSON.parse(xhr.responseText).menu_2;
                document.getElementById("navBtn-3").innerHTML = JSON.parse(xhr.responseText).menu_3;
                document.getElementById("navBtn-4").innerHTML = JSON.parse(xhr.responseText).menu_4;
                document.querySelectorAll(".banner")[0].querySelectorAll("h2")[0].innerHTML = JSON.parse(xhr.responseText).banner_1;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).banner_2;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).banner_3;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).banner_4;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[3].innerHTML = JSON.parse(xhr.responseText).banner_5;
                document.querySelector("#main-02").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main01_h3;
                document.querySelector("#main-02").querySelectorAll("h5")[0].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_01;
                document.querySelector("#main-02").querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_01_p;
                document.querySelector("#main-02").querySelectorAll("h5")[1].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_02;
                document.querySelector("#main-02").querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_02_p;
                document.querySelector("#main-02").querySelectorAll("h5")[2].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_03;
                document.querySelector("#main-02").querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_03_p;
                document.querySelector("#main-03").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main02_h3;
                document.querySelector("#main-03").querySelectorAll("h5")[0].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_01;
                document.querySelector("#main-03").querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_01_p;
                document.querySelector("#main-03").querySelectorAll("h5")[1].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_02;
                document.querySelector("#main-03").querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_02_p;
                document.querySelector("#main-03").querySelectorAll("h5")[2].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_03;
                document.querySelector("#main-03").querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_03_p;
                document.querySelector("#main-04").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main03_h4;
                document.querySelector("#main-04").querySelector("p").innerHTML = JSON.parse(xhr.responseText).main03_h4_p;
                document.querySelector("#main-05").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main05_h4;
                document.querySelector("#main-05").querySelector("p").innerHTML = JSON.parse(xhr.responseText).main05_h4_p;
                document.querySelector("#footer").querySelector("#about").querySelector("h4").innerHTML = JSON.parse(xhr.responseText).footer_h4_01;
                document.querySelector("#footer").querySelector("#about").querySelector("p").innerHTML = JSON.parse(xhr.responseText).footer_h4_01_p;
                document.querySelector("#footer").querySelector("#contact").querySelector("h4").innerHTML = JSON.parse(xhr.responseText).footer_h4_02;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_01;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_02;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_03;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[3].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_04;
            }
        }
        xhr.send();
    }

    function loadTwContent() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'src/tw.json', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                // json.parse將json轉換成物件 之後抓取你要的名稱
                document.getElementById("navBtn-1").innerHTML = JSON.parse(xhr.responseText).menu_1;
                document.getElementById("navBtn-2").innerHTML = JSON.parse(xhr.responseText).menu_2;
                document.getElementById("navBtn-3").innerHTML = JSON.parse(xhr.responseText).menu_3;
                document.getElementById("navBtn-4").innerHTML = JSON.parse(xhr.responseText).menu_4;
                document.querySelectorAll(".banner")[0].querySelectorAll("h2")[0].innerHTML = JSON.parse(xhr.responseText).banner_1;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).banner_2;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).banner_3;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).banner_4;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[3].innerHTML = JSON.parse(xhr.responseText).banner_5;
                document.querySelector("#main-02").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main01_h3;
                document.querySelector("#main-02").querySelectorAll("h5")[0].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_01;
                document.querySelector("#main-02").querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_01_p;
                document.querySelector("#main-02").querySelectorAll("h5")[1].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_02;
                document.querySelector("#main-02").querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_02_p;
                document.querySelector("#main-02").querySelectorAll("h5")[2].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_03;
                document.querySelector("#main-02").querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_03_p;
                document.querySelector("#main-03").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main02_h3;
                document.querySelector("#main-03").querySelectorAll("h5")[0].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_01;
                document.querySelector("#main-03").querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_01_p;
                document.querySelector("#main-03").querySelectorAll("h5")[1].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_02;
                document.querySelector("#main-03").querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_02_p;
                document.querySelector("#main-03").querySelectorAll("h5")[2].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_03;
                document.querySelector("#main-03").querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_03_p;
                document.querySelector("#main-04").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main03_h4;
                document.querySelector("#main-04").querySelector("p").innerHTML = JSON.parse(xhr.responseText).main03_h4_p;
                document.querySelector("#main-05").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main05_h4;
                document.querySelector("#main-05").querySelector("p").innerHTML = JSON.parse(xhr.responseText).main05_h4_p;
                document.querySelector("#footer").querySelector("#about").querySelector("h4").innerHTML = JSON.parse(xhr.responseText).footer_h4_01;
                document.querySelector("#footer").querySelector("#about").querySelector("p").innerHTML = JSON.parse(xhr.responseText).footer_h4_01_p;
                document.querySelector("#footer").querySelector("#contact").querySelector("h4").innerHTML = JSON.parse(xhr.responseText).footer_h4_02;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_01;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_02;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_03;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[3].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_04;
            }
        }
        xhr.send();
    }

    function loadCnContent() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'src/cn.json', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                // json.parse將json轉換成物件 之後抓取你要的名稱
                document.getElementById("navBtn-1").innerHTML = JSON.parse(xhr.responseText).menu_1;
                document.getElementById("navBtn-2").innerHTML = JSON.parse(xhr.responseText).menu_2;
                document.getElementById("navBtn-3").innerHTML = JSON.parse(xhr.responseText).menu_3;
                document.getElementById("navBtn-4").innerHTML = JSON.parse(xhr.responseText).menu_4;
                document.querySelectorAll(".banner")[0].querySelectorAll("h2")[0].innerHTML = JSON.parse(xhr.responseText).banner_1;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).banner_2;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).banner_3;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).banner_4;
                document.querySelectorAll(".banner")[0].querySelectorAll("p")[3].innerHTML = JSON.parse(xhr.responseText).banner_5;
                document.querySelector("#main-02").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main01_h3;
                document.querySelector("#main-02").querySelectorAll("h5")[0].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_01;
                document.querySelector("#main-02").querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_01_p;
                document.querySelector("#main-02").querySelectorAll("h5")[1].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_02;
                document.querySelector("#main-02").querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_02_p;
                document.querySelector("#main-02").querySelectorAll("h5")[2].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_03;
                document.querySelector("#main-02").querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).main01_h3_h5_03_p;
                document.querySelector("#main-03").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main02_h3;
                document.querySelector("#main-03").querySelectorAll("h5")[0].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_01;
                document.querySelector("#main-03").querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_01_p;
                document.querySelector("#main-03").querySelectorAll("h5")[1].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_02;
                document.querySelector("#main-03").querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_02_p;
                document.querySelector("#main-03").querySelectorAll("h5")[2].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_03;
                document.querySelector("#main-03").querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).main02_h3_h4_03_p;
                document.querySelector("#main-04").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main03_h4;
                document.querySelector("#main-04").querySelector("p").innerHTML = JSON.parse(xhr.responseText).main03_h4_p;
                document.querySelector("#main-05").querySelector("h2").innerHTML = JSON.parse(xhr.responseText).main05_h4;
                document.querySelector("#main-05").querySelector("p").innerHTML = JSON.parse(xhr.responseText).main05_h4_p;
                document.querySelector("#footer").querySelector("#about").querySelector("h4").innerHTML = JSON.parse(xhr.responseText).footer_h4_01;
                document.querySelector("#footer").querySelector("#about").querySelector("p").innerHTML = JSON.parse(xhr.responseText).footer_h4_01_p;
                document.querySelector("#footer").querySelector("#contact").querySelector("h4").innerHTML = JSON.parse(xhr.responseText).footer_h4_02;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[0].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_01;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[1].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_02;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[2].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_03;
                document.querySelector("#footer").querySelector("#contact").querySelectorAll("p")[3].innerHTML = JSON.parse(xhr.responseText).footer_h4_02_p_04;
            }
        }
        xhr.send();
    }
    document.querySelector("body").classList.remove("loading");
});