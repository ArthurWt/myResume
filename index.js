//->动态计算REM的换算比例
+function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(320);
//->音频的自动播放
+function () {
    var audioBox = document.querySelector(".audio"),
        myAudio = audioBox.getElementsByTagName("audio")[0];
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            audioBox.style.display = "block";
            audioBox.className += " audioMove";
        }, false);
    }, 1000);
    audioBox.addEventListener("click", function () {
        if (myAudio.paused) {
            myAudio.play();
            audioBox.className = "audio audioMove";
            return;
        }
        myAudio.pause();
        audioBox.className = "audio";
    }, false);
}();
//->给滑屏区域进行初始化设置
+function () {
    var step = 0, divList = null;
    var swp = new Swiper(".swiper-container", {
        loop: true,
        direction: 'vertical',
        pagination : '.swiper-pagination',
        paginationType : 'progress',
        // effect : 'cube',
        // onSlidePrevEnd: function () {
        //     step--;
        //     change();
        //     if (step === 0) {
        //         step = 5;
        //     }
        // },
        // onSlideNextEnd: function () {
        //     step++;
        //     change();
        //     if (step === 6) {
        //         step = 1;
        //     }
        // }
        onTransitionEnd:function (swiper) {
            step= swiper.activeIndex;
            change();
                if (step === 0) {
                    step = 5;
                }
                if (step === 6) {
                    step = 1;
                }
        }





    });


    function change() {
        divList = document.querySelectorAll(".swiper-slide");
        [].forEach.call(divList, function (curDiv, index) {
            curDiv.id = index === step ? curDiv.getAttribute("trueId") : null;
            if (step === 1 || step === 6) {
                $(".myResume").addClass(" animated flipInY");
                $(".hi").addClass(" animated bounceInRight");
            } else {
                $(".myResume").removeClass("animated flipInY");
                $(".hi").removeClass("animated bounceInRight");
            }
            if (step === 2) {
                $(".inFoList>li").addClass("animated rollIn");
                $(".mouse").addClass(" animated fadeInLeft");
            } else {
                $(".inFoList>li").removeClass("animated rollIn");
                $(".mouse").removeClass("animated fadeInLeft");
            }
            if (step === 3) {
                $(".box>div:not(:nth-child(5))").addClass("animated flip");
            } else {
                $(".box>div:not(:nth-child(5))").removeClass("animated flip");
            }
            if (step === 4) {
                $(".page4>div:nth-child(1)").addClass("animated flipInY");
                $(".page4>div:nth-child(3)").addClass("animated flipInY");
                $(".page4>div:nth-child(2)").addClass("animated flipInX");
                $(".page4>div:nth-child(4)").addClass("animated flipInX");
            } else {
                $(".page4>div:nth-child(1)").removeClass("animated flipInY");
                $(".page4>div:nth-child(3)").removeClass("animated flipInY");
                $(".page4>div:nth-child(2)").removeClass("animated flipInX");
                $(".page4>div:nth-child(4)").removeClass("animated flipInX");
            }
            if (step === 5 || step === 0) {
                setTimeout(
                    function () {
                        $("#page5 .flashingBar1").addClass(" bar1");
                        $("#page5 .flashingBar6").addClass(" bar1");
                        $("#page5 .flashingBar2").addClass(" bar2");
                        $("#page5 .flashingBar7").addClass(" bar2");
                        $("#page5 .flashingBar3").addClass(" bar3");
                        $("#page5 .flashingBar8").addClass(" bar3");
                        $("#page5 .flashingBar4").addClass(" bar4");
                        $("#page5 .flashingBar9").addClass(" bar4");
                        $("#page5 .flashingBar5").addClass(" bar5");
                        $("#page5 .flashingBar10").addClass(" bar5");
                    }, 2000
                )
            } else {
                $("#page1 .flashingBar1").removeClass("bar1");
                $("#page1 .flashingBar6").removeClass("bar1");
                $("#page1 .flashingBar2").removeClass("bar2");
                $("#page1 .flashingBar7").removeClass("bar2");
                $("#page1 .flashingBar3").removeClass("bar3");
                $("#page1 .flashingBar8").removeClass("bar3");
                $("#page1 .flashingBar4").removeClass("bar4");
                $("#page1 .flashingBar9").removeClass("bar4");
                $("#page1 .flashingBar5").removeClass("bar5");
                $("#page1 .flashingBar10").removeClass("bar5");
            }
        });
    }
}();

