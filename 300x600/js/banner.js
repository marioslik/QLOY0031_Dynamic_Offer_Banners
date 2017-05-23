var tl;
var queue = new createjs.LoadQueue();

$(document).ready(function () {

    var manifest = [
        // "base-image-01.jpg",
        // "base-image-02.jpg",
        "close.svg",
        "logos-partners.svg",
        "qantas-logo-colour.svg",
        "shape-blue.svg",
        "shape-mask.svg",
        "shape-red.svg",
        "shape-white.svg"
    ];

    queue.on("complete", function() {
        initCSS();
    }, this);

    queue.loadManifest(manifest);
});

function initCSS() {

    //SET STARTING POSITIONS FOR ELEMENTS

    TweenMax.set($("#blue-shape"), {alpha: 1, rotation: 50, scaleX: 0.4, scaleY: 0.4, x: 60, y: 80, overwrite: "none", force3D: false});
    TweenMax.set($("#blue-shape-small"), {alpha: 1, rotation: -20, scaleX: 0.2, scaleY: 0.2, x: 140, y: 83, overwrite: "none", force3D: false});
    TweenMax.set($("#mask-shape"), {rotation: 30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1270, overwrite: "none", force3D: false});
    TweenMax.set($(".shapes"), {rotation: 160, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenMax.set($(".qantas-logo"), {scale:0.7, alpha:0});

    TweenMax.set($(".bg-image-02"), {alpha:0});
    TweenMax.set($("#red-gradient"), {rotation:0, x:-20, y: 50, scale:1});
    TweenMax.set($("#partnership-white-shape-small"), {x:-5, y:24});
    TweenMax.set($("#logos-container"), {y:25, x:-53});

    TweenMax.set($(".pricing"), {display:'none'});
    TweenMax.set($("#red-gradient"), {autoAlpha:0.5, rotation:65, x:-1, y:-210, zIndex:100, scale:1});

    TweenMax.set(".euro-europe-line", {attr:{y1:140}});
    TweenMax.set(".euro-europe", {alpha:0});

    TweenMax.set("#africa-line2", {attr:{y1:233}});
    TweenMax.set(".dollar-africa", {alpha:0});
    TweenMax.set(".dollar-africa2", {alpha:0});

    TweenMax.set("#russia-line", {attr:{y1:122.49}});
    TweenMax.set(".russia-currency", {alpha:0});

    TweenMax.set(".yen-line", {attr:{y1:216.24}});
    TweenMax.set(".yen", {alpha:0});

    $('#frame1').html('Sending money overseas?');
    $('#frame2').html('Earn 1 Qantas Point<br>per A$5 transferred<br>with TorFX*');
    $('#frame3').html('Plus enjoy competitive<br>exchange rates and<br>fast, free transfers');
    $('#endMesasge').html('Be rewarded<br>on money transfers');
    $('#cta-button').html('Learn more');



    $( ".banner" ).hover(
        function() {
            $("#cta-button").addClass('hover');
        }, function() {
            $("#cta-button").removeClass('hover');
        }
    );

    if($('.terms-txt').text().length > 0)
    {
        $('.terms').click(function(){
          $('.overlay').fadeIn();
          $('.terms').fadeOut();
      });

        $('.overlay-close').click(function(){
          $('.overlay').fadeOut();
          $('.terms').fadeIn();
      });
    }else{
        $('.terms').click(function(){
          window.open(clickTag);
      });
    }

    $('.clicktag').click(function(){
        window.open(clickTag);
    });

    startAnimation();
    adjustCopy();
}

//-------------------------------- Adjust Copy ---------------------------------
function adjustCopy() {
    var destination = $(".destination").text();
    if (destination.length > 10) {
        $(".destination").css("fontSize", "40px");
    }
}


//------------------------------- MAIN ANIMATION -------------------------------


function startAnimation() {

    $(".container").show();
    $(".loader").hide();

    bannerWidth = $(".container").width();
    bannerHeight = $(".container").height();


    tl = new TimelineLite();



    //FRAME 01/INTRO ------------------------------------------------


    tl.from(".bg-image-01", 1, {alpha: 0, ease: Power1.easeIn}, "0");

    //Base Gradient
    tl.to("#red-grad-values", 3, {attr:{cx:150, cy:500, r:463}, ease:Power2.easeInOut}, "0");
    tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, "0");
    tl.to("#base-grad-stop-02", 1.5, {stopOpacity:0, ease:Power2.easeInOut}, ".2");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".2");
    tl.to("#red-gradient", 3, {rotation:-90, autoAlpha:0.5, x:-190, y:-220, scale:1, ease: Power2.easeInOut}, "0");

    //Shape Reveal Intro
    tl.to(".shapes", 2, {alpha:1, rotation: -20, transformOrigin: "50% 50%"}, "0");
    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1.1, scaleY: 1.1, x: -2140, y: -1315,  ease: Sine.easeInOut}, "0");
    tl.to("#blue-shape-small", 1, {autoAlpha:0, rotation: 90, scaleX:0.2, scaleY: 0.2, x: 200, y: 15, ease: Sine.easeInOut}, ".3");
    tl.to("#blue-shape", 1, {rotation: -90, scaleX: 1.2, scaleY: 1.2, x: 5, y: 130, ease: Sine.easeInOut}, ".3");

    tl.to("#mask-shape", 0.6, {rotation: 0, scaleX: 3.8, scaleY: 3.8, x: -1760, y: -1355, ease: Power2.easeIn}, "1.1");
    tl.to("#blue-shape", 0.5, {rotation: -180, autoAlpha:0, scaleX: 1.3, scaleY: 1.3, x: -170, y: 415, ease: Power2.easeIn}, "1.2");

    tl.from("#frame1", 2, {alpha: 0, y: 0, ease: Power1.easeOut}, "1.4");

    tl.fromTo("#partnership-white-shape", 1.5, {x:30, y:90, rotation:20,}, {x:40, y:70, rotation:0, ease: Power2.easeInOut}, "1");

    tl.to("#white-grad-stop-01", 0.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "-=2");
    tl.to("#white-grad-stop-02", 0.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "-=2");
    tl.to("#white-grad-stop-03", 0.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "-=2");

    tl.from(".partner-logo", 1.5, {alpha:0, ease: Power1.easeInOut}, "1");
    tl.from(".logo-divider-line", 1.5, {alpha: 0, scaleY:0, transformOrigin: "50% 100%", ease: Power1.easeInOut}, "1");

    tl.to(".qantas-logo", 1.2, {alpha:1, ease: Power1.easeInOut}, "1");
    tl.from("#logos-container", 1.5, {y:-20, ease: Power1.easeInOut}, "1");

    tl.from(".qantas-logo", 1.7, {alpha:0, ease: Power1.easeOut}, "1");


    //FRAME 02  ------------------------------------------------
    tl.add("frame02", 4);
    tl.to(".bg-image-01", 1, {x: 448, y:520, scale:1.2, ease: Power1.easeInOut}, "frame02+=0.5");
    tl.to("#motionBlur", 0.25, {attr:{stdDeviation:"10 0"}, ease: Power1.easeIn}, "frame02+=0.5");
    tl.to("#motionBlur", 0.25, {attr:{stdDeviation:'0 0'}, ease: Power1.easeOut, onComplete:function(){
      TweenMax.to(".euro-europe-line", 0.25, {attr:{y1:85.92}, ease: Power1.easeInOut})
      TweenMax.to(".euro-europe", 0.5, {ease: Power1.easeInOut, alpha:1, delay:0.25})

      TweenMax.to(".dollar-africa", 0.5, {ease: Power1.easeInOut, alpha:1, delay:0.5})


    }}, "frame02+=1");



    //tl.to(".bg-image-02", 2, {alpha:1, ease: Power1.easeInOut},"frame02-=.3");


    //FRAME 03  ------------------------------------------------
    tl.add("frame03", 6);

    tl.to("#frame1", 0.8, {alpha: 0, y: 0, ease: Power1.easeOut, onComplete:function(){
        $("#frame1").css("display", "none");
    }}, "frame03");
    tl.from("#frame2", 2, {alpha: 0, y: 0, ease: Power1.easeInOut}, "frame03+=.5");


    //FADE TO FULL RED BASE
    tl.to("#red-grad-values", 2, {attr:{cx:150, cy:300, r:260}, ease:Power2.easeInOut}, "frame03+=.2");
    tl.to("#base-grad-stop-01", 4, {stopOpacity:0.8, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03+=.2");
    tl.to("#base-grad-stop-02", 3.5, {stopOpacity:0.5, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03+=.2");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:1, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03+=.2");

    tl.to("#base-red", 1, {autoAlpha:0, ease:Power1.easeInOut}, "frame03+=.2");


    //FRAME04  ------------------------------------------------
    tl.add("frame04", 12);
    tl.to("#frame2", 0.8, {alpha: 0, y: 0, ease: Power1.easeOut, onComplete:function(){
        $("#frame2").css("display", "none");
    }}, "frame04");
    tl.to(".bg-image-01", 1, {x: 417, y:230, scale: 0.46, ease: Power1.easeInOut}, "frame04+=0.5");
    tl.to("#motionBlur", 0.25, {attr:{stdDeviation:"0 5"}, ease: Power1.easeIn}, "frame04+=0.5");
    tl.to("#motionBlur", 0.25, {attr:{stdDeviation:'0 0'}, ease: Power1.easeOut, onComplete:function(){

      TweenMax.to("#africa-line2", 0.25, {attr:{y1:153.04}, ease: Power1.easeInOut, delay:0.3})
      TweenMax.to(".dollar-africa2", 0.5, {ease: Power1.easeInOut, alpha:1, delay:0.45})

      TweenMax.to("#russia-line", 0.25, {attr:{y1:72.49}, ease: Power1.easeInOut, delay:0.5})
      TweenMax.to(".russia-currency", 0.5, {ease: Power1.easeInOut, alpha:1, delay:0.65})

      TweenMax.to(".yen-line", 0.5, {attr:{y1:176.54}, ease: Power1.easeInOut, delay:0.7})
      TweenMax.to(".yen", 0.5, {ease: Power1.easeInOut, alpha:1, delay:0.85})
    }}, "frame04+=1");

    tl.from("#frame3", 2, {alpha: 0, y: -20, ease: Power1.easeInOut}, "frame04+=0.5");

    //END FRAME  ------------------------------------------------
    tl.add("endFrame", 20);
    tl.to(".bg-image-01", 1, {autoAlpha:0, ease: Power1.easeInOut}, "endFrame+=0.25");
    tl.to("#frame3", 0.8, {autoAlpha: 0, y: 0, ease: Power1.easeOut, onComplete:function(){
        $("#frame3").css("display", "none");
    }}, "endFrame+=.5");
    tl.to("#partnership-white-shape-small", 2, {autoAlpha:1, x:-100, y:-20, scaleX:2.2, ease: Power1.easeIn}, "endFrame");


    tl.fromTo("#partnership-white-shape", 3, {x:40, y:70, rotation:0}, {x:40, y:55, rotation:0, ease: Power2.easeInOut}, "endFrame-=.5");

    tl.to("#logos-container", 3, {y:'-=12', ease: Power1.easeInOut}, "endFrame-=.5");

    tl.to("#frame3", 0.8, {alpha: 0, y: 0, ease: Power1.easeOut}, "endFrame+=.3");
    tl.from("#messaging-end-frame", 2, {alpha: 0, y: 50, ease: Power1.easeInOut}, "endFrame+=.9");

    tl.from(".price-left-copy", 2, {alpha: 0, ease: Power2.easeInOut}, "endFrame+=.9");
    tl.from(".price-inner-content", 2, {y: 50, ease: Power2.easeInOut}, "endFrame+=.9");
    tl.from(".price-right-copy", 2, {alpha: 0, ease: Power2.easeInOut}, "endFrame+=.9");
    tl.from("#cta-button", 2, {alpha: 0, ease: Power2.easeInOut}, "endFrame+=1.5");
    tl.to("#red-gradient", 3.5, {autoAlpha:1, rotation:81, x:-121, y:-65, scale:1, ease: Power1.easeInOut}, "endFrame+=.5");

    tl.fromTo(".terms", 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, "endFrame+=2.3");



    //TESTING - goto specific time of animation
  //  tl.seek(9.5);
}



function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0;
    var postaction = function () {};
        arr = (typeof arr != "object") ? [arr] : arr;

    function imageloadpost() {
        loadedimages++;
        if (loadedimages == arr.length) {
            postaction(newimages); //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image();
        newimages[i].src = arr[i];
        newimages[i].onload = function () {
            imageloadpost();
        };
        newimages[i].onerror = function () {
            imageloadpost();
        };
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction; //remember user defined callback functions to be called when images load
        }
    };
}
