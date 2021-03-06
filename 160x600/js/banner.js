var tl;
var queue = new createjs.LoadQueue();



$(document).ready(function () {

    var manifest = [
        "base-image-01.jpg",
        "base-image-02.jpg",
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


    TweenMax.set($(".bg-image-02"), {alpha:0});
    TweenMax.set($("#red-gradient"), {rotation:0, x:-90, y: -100, scale:1});
    TweenMax.set($("#partnership-white-shape-small"), {scale:0.7, x:-13, y:47});
    TweenMax.set($("#partnership-white-shape"), {scale:0.8});
    TweenMax.set($("#logos-container"), {y:-30});
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
    TweenMax.set(".yen-circle", {alpha:0});

    $('#frame1').html('Sending<br>money<br>overseas?');
    $('#frame2').html('Earn 1<br>Qantas Point<br>per A$5<br>transferred<br>with TorFX*');
    $('#frame3').html('Plus enjoy<br>competitive<br>exchange rates<br>and fast, free<br>transfers');
    $('#endMesasge').html('Be rewarded<br>on money<br>transfers');
    $('#cta-button').html('Learn more');

    $( ".banner" ).hover(
        function() {
            $("#cta-button").addClass('hover');
        }, function() {
            $("#cta-button").removeClass('hover');
        }
    );


    if($('.overlay').length)
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
    tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, ".2");
    tl.to("#base-grad-stop-02", 2, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#red-gradient", 3, {rotation:-90, autoAlpha:0.5, x:-190, y:-270, scale:1, ease: Power2.easeInOut}, "0");

    //Shape Reveal Intro
    tl.to(".shapes", 2, {alpha:1, rotation: -20, transformOrigin: "50% 50%"}, "0");
    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1.1, scaleY: 1.1, x: -2140, y: -1315,  ease: Sine.easeInOut}, "0");
    tl.to("#blue-shape-small", 1, {autoAlpha:0, rotation: 90, scaleX: 0.2, scaleY: 0.2, x: 170, y: 15, ease: Sine.easeInOut}, ".3");
    tl.to("#blue-shape", 1, {rotation: -90, scaleX: 1.7, scaleY: 1.7, x: -5, y: 130, ease: Sine.easeInOut}, ".3");

    tl.to("#mask-shape", 0.6, {rotation: 0, scaleX: 3.8, scaleY: 3.8, x: -1760, y: -1355, ease: Power2.easeIn}, "1.1");
    tl.to("#blue-shape", 0.5, {rotation: -180, autoAlpha:0, scaleX: 2, scaleY: 2, x: -150, y: 295, ease: Power2.easeIn}, "1.2");

    tl.from("#frame1", 2, {alpha: 0, y: 0, ease: Power1.easeOut}, "1.4");

    tl.fromTo("#partnership-white-shape", 1.3, {x:40, y:130, rotation:-7,}, {x:5, y:60, rotation:8, ease: Power1.easeInOut}, "0.8");

    tl.to("#white-grad-stop-01", 0.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "-=2");
    tl.to("#white-grad-stop-02", 0.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "-=2");
    tl.to("#white-grad-stop-03", 0.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "-=2");

    tl.from(".partner-logo", 1.5, {alpha:0, ease: Power1.easeInOut}, "1");

    tl.from(".qantas-logo", 1.5, {alpha:0, ease: Power1.easeOut}, "1");
    tl.to("#logos-container", 1.5, {y:-15, ease: Power1.easeInOut}, "1");


    //FRAME 02  ------------------------------------------------
    tl.add("frame02", 4);
    tl.to(".bg-image-01", 1, {x: 378, y:306, scale:1.05, ease: Power1.easeInOut}, "frame02+=0.5");
    tl.to("#motionBlur", 0.25, {attr:{stdDeviation:"10 0"}, ease: Power1.easeIn}, "frame02+=0.5");
    tl.to("#motionBlur", 0.25, {attr:{stdDeviation:'0 0'}, ease: Power1.easeOut, onComplete:function(){
      TweenMax.to(".euro-europe-line", 0.25, {attr:{y1:85.92}, ease: Power1.easeInOut})
      TweenMax.to(".euro-europe", 0.5, {ease: Power1.easeInOut, alpha:1, delay:0.25});

      TweenMax.to(".dollar-africa", 0.5, {ease: Power1.easeInOut, alpha:1, delay:0.5});
      TweenMax.set(".yen-circle", {alpha:1});


    }}, "frame02+=1");


    //tl.to(".bg-image-02", 2, {alpha:1, ease: Power1.easeInOut},"frame02-=.3");


    //FRAME 03  ------------------------------------------------
    tl.add("frame03", 6);
    tl.to("#frame1", 0.8, {alpha: 0, y: 0, ease: Power1.easeOut, onComplete:function(){
        $("#frame1").css("display", "none");
    }}, "frame03");
    tl.from("#frame2", 2, {alpha: 0, y: 0, ease: Power1.easeInOut}, "frame03+=.2");
    //tl.to(".bg-image", 4, {alpha:0, ease: Power1.easeInOut},"frame03+=.2");


    //FADE TO FULL RED BASE
    tl.to("#red-grad-values", 2.7, {attr:{cx:150, cy:300, r:200}, ease:Power2.easeInOut}, "frame03+=.2");
    tl.to("#base-grad-stop-01", 4, {stopOpacity:0.8, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03+=.2");
    tl.to("#base-grad-stop-02", 3.5, {stopOpacity:0.5, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03+=.2");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:1, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03+=.2");


    tl.to("#base-red", 1, {autoAlpha:0, ease:Power1.easeInOut}, "frame03+=.2");


    //FRAME 04  ------------------------------------------------
    tl.add("frame04", 12);
    tl.to("#frame2", 0.8, {alpha: 0, y: 0, ease: Power1.easeOut, onComplete:function(){
        $("#frame2").css("display", "none");
    }}, "frame04");

    tl.to(".bg-image-01", 1, {x: 305, y:157, scale: 0.45, ease: Power1.easeInOut}, "frame04+=0.5");
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

    tl.from("#messaging-end-frame", 2, {alpha: 0, y: 50, ease: Power1.easeInOut}, "endFrame+=.9");

    tl.from(".price-left-copy", 2, {alpha: 0, ease: Power2.easeInOut}, "endFrame+=.9");
    tl.from(".price-inner-content", 2, {y: 50, ease: Power1.easeInOut}, "endFrame+=.9");
    tl.from(".price-right-copy", 2, {alpha: 0, y: 10, ease: Power2.easeInOut}, "endFrame+=1.6");
    tl.from("#cta-button", 2, {alpha: 0, y: 15, ease: Power2.easeInOut}, "endFrame+=1.6");
    tl.to("#red-gradient", 3.5, {autoAlpha:1, rotation:80, x:-114, y: -37, scale:1, ease: Power1.easeInOut}, "endFrame+=.5");

    tl.fromTo(".terms", 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, "endFrame+=1.5");



    // TESTING - go to specific time of animation
    // ------------------------------------------
    // tl.seek(10);
    // tl.pause(3);
}
