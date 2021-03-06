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

    TweenMax.set($(".bg-image-02"), {alpha:0});
    TweenMax.set($(".pricing"), {display:'none'});
    TweenMax.set($("#red-gradient"), {autoAlpha:0.5, rotation:50, x:-214, y: -310, transformOrigin:"50% 50%", zIndex:110, scale:0.7}); // rotation:35, autoAlpha:1, x:-214, y:-300,

    TweenMax.set($("#text-base-shape"), {rotation:-29, autoAlpha:1, x:146, y:-226, scaleX:0.8, scaleY:0.8, transformOrigin:"50% 50%"});
    TweenMax.set($("#white-shape-small"), {x:137, y:106, scaleX:0.8, scaleY:1, rotation:0});

    TweenMax.set(".euro-europe-line", {attr:{y1:140}});
    TweenMax.set(".euro-europe", {alpha:0});

    TweenMax.set("#africa-line2", {attr:{y1:233}});
    TweenMax.set(".dollar-africa", {alpha:0});
    TweenMax.set(".dollar-africa2", {alpha:0});

    TweenMax.set("#russia-line", {attr:{y1:122.49}});
    TweenMax.set(".russia-currency", {alpha:0});

    TweenMax.set(".yen-line", {attr:{y1:216.24}});

    TweenMax.set("#frame1", {marginTop:'30px'});

    $('#frame1').html('Sending money overseas?');
    $('#frame2').html('Earn 1 Qantas Point per A$5<br>transferred with TorFX*');
    $('#frame3').html('Plus enjoy competitive exchange<br>rates and fast, free transfers');
    $('#endMesasge').html('Be rewarded on money transfers');
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



var percentFill = 80, /* in %, ie. this is 10% */
    duration    = 1.5;

function startAnimation() {

    $(".container").show();
    $(".loader").hide();

    var bannerWidth = $(".container").width();
    var bannerHeight = $(".container").height();


    tl = new TimelineLite();

    //FRAME 01/INTRO ------------------------------------------------


    tl.from(".bg-image-01", 1, {alpha: 0, ease: Power1.easeIn}, "0");

    //Base Gradient
    tl.to("#red-grad-values", 4, {attr:{cx:364, cy:45, r:450}, ease:Power2.easeInOut}, ".5");
    tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, ".2");
    tl.to("#base-grad-stop-02", 2, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".4");

    tl.to("#red-gradient", 1.5, {rotation:35, autoAlpha:1, x:-214, y:-300, scale:1, ease: Power1.easeOut}, "1.5"); //-118
    tl.to("#red-grad-stop-02", 2, {stopOpacity:1, ease:Power1.easeIn}, ".5");
    tl.to("#red-grad-stop-03", 1.5, {stopOpacity:1, ease:Power1.easeInOut}, ".5");

    tl.to("#text-base-shape", 2.5, {x:-360, autoAlpha:0, ease: Power1.easeOut}, "0");
    tl.to("#text-base-shape2", 0.1, { autoAlpha:1, ease: Power1.easeOut}, "0");
    tl.to("#text-base-grad-stop-01", 1.5, {stopOpacity:1, ease:Power1.easeInOut}, ".7");
    tl.to("#text-base-grad-stop-02", 1.5, {stopOpacity:1, ease:Power1.easeIn}, ".7");
    tl.to("#text-base-grad-stop-03", 1.5, {stopOpacity:1, ease:Power1.easeInOut}, ".7");

    //Shape Reveal Intro
    tl.to(".shapes", 2, {alpha:1, rotation: -20, transformOrigin: "50% 50%"}, "0");
    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1, scaleY: 1, x: -2140, y: -1315,  ease: Power1.easeInOut}, "0");
    tl.to("#blue-shape-small", 1, {alpha:1, rotation: 90, scaleX: 0.2, scaleY: 0.2, x: 251, y: 35, ease: Power1.easeInOut}, ".3");
    tl.to("#blue-shape", 1, {alpha:1, rotation: -90, scaleX: 1.3, scaleY: 1.3, x: -45, y: 100, ease: Power1.easeInOut}, ".3");

    tl.to("#mask-shape", 1, {rotation: 0, scaleX: 3.65, scaleY: 3.65, x: -1756, y: -1315, ease: Power3.easeInOut}, "1.1");
    tl.to("#blue-shape", 0.4, {rotation: -180, scaleX: 1.3, scaleY: 1.3, x: -290, y: 280, ease: Power2.easeIn}, "1.3");

    tl.from("#frame1", 2, {alpha: 0, y:0, ease: Power1.easeInOut}, "1.6");

    tl.from("#white-shape-small", 2.5, {autoAlpha:1, x:-70, ease: Power1.easeOut}, "0");
    tl.to("#white-grad-small-stop-01", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "0");
    tl.to("#white-grad-small-stop-02", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, ".3");
    tl.to("#white-grad-small-stop-03", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, ".7");

    //tl.from("#logos-container", 1.5, {alpha:0, x:-15, ease: Power1.easeOut}, "1.2");

    tl.to("#logos-container", 1.5, {y:20, alpha:1, ease:Power2.easeInOut}, "1.2");
    tl.from(".partner-logo", 1.5, {autoAlpha:0, ease:Power2.easeInOut}, "1.2");


    //FRAME 02  ------------------------------------------------
    tl.add("frame02", 5);

    tl.to(".bg-image-01", 1, {x: 0, y:116, scale:1.5, ease: Power1.easeInOut}, "frame02+=0.5");
    tl.to("#motionBlur", 0.25, {attr:{stdDeviation:"5 0"}, ease: Power1.easeIn}, "frame02+=0.5");
    tl.to("#motionBlur", 0.25, {attr:{stdDeviation:'0 0'}, ease: Power1.easeOut, onComplete:function(){

      TweenMax.to(".yen-line", 0.5, {attr:{y1:176.54}, ease: Power1.easeInOut, delay:0.5})
      TweenMax.to(".yen", 0.5, {ease: Power1.easeInOut, alpha:1, delay:0.65})

    }}, "frame02+=1");







    //FRAME 03  ------------------------------------------------
    tl.add("frame03", 7);

    tl.to("#frame1", 0.8, {alpha: 0, y: -20, ease: Power1.easeIn, onComplete:function(){
        $("#frame1").css("display", "none");
    }}, "frame02");
    tl.from("#frame2", 1.5, {alpha: 0, y: 20, ease: Power2.easeInOut}, "frame03");

    //tl.to(".bg-image", 2, {autoAlpha:0, ease: Power1.easeInOut},"frame03+=.7");


    //FADE TO FULL RED BASE
    tl.to("#red-grad-values", 2, {attr:{cx:364, cy:45, r:120}, ease:Power2.easeInOut}, "frame03-=.5");
    tl.to("#base-grad-stop-01", 4, {stopOpacity:0.8, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03-=.5");
    tl.to("#base-grad-stop-02", 3.5, {stopOpacity:0.5, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03-=.5");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:1, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03-=.5");

    tl.to("#base-red", 1, {autoAlpha:0, ease:Power1.easeInOut}, "frame03-=.5");
    tl.to("#red-gradient", 2, {rotation:35, autoAlpha:1, x:-280, y:-280, scale:0.8, ease: Power1.easeInOut}, "frame03");


    //FRAME 04   ------------------------------------------------
    tl.add("frame04", 12);
    tl.to("#frame2", 0.8, {alpha: 0, y: -20, ease: Power1.easeIn, onComplete:function(){
        $("#frame2").css("display", "none");
    }}, "frame04");
    tl.to(".bg-image-01", 1, {x: 125, y:73, scale: 0.7, ease: Power1.easeInOut}, "frame04+=0.5");
    tl.to("#motionBlur", 0.25, {attr:{stdDeviation:"0 1"}, ease: Power1.easeIn}, "frame04+=0.5");
    tl.to("#motionBlur", 0.25, {attr:{stdDeviation:'0 0'}, ease: Power1.easeOut, onComplete:function(){
      TweenMax.to(".dollar-africa", 0.5, {ease: Power1.easeInOut, alpha:1, delay:0.25})

      TweenMax.to(".euro-europe-line", 0.25, {attr:{y1:85.92}, ease: Power1.easeInOut})
      TweenMax.to(".euro-europe", 0.35, {ease: Power1.easeInOut, alpha:1, delay:0.25})

      TweenMax.to("#africa-line2", 0.25, {attr:{y1:153.04}, ease: Power1.easeInOut, delay:0.3})
      TweenMax.to(".dollar-africa2", 0.35, {ease: Power1.easeInOut, alpha:1, delay:0.45})

      TweenMax.to("#russia-line", 0.25, {attr:{y1:72.49}, ease: Power1.easeInOut, delay:0.5})
      TweenMax.to(".russia-currency", 0.35, {ease: Power1.easeInOut, alpha:1, delay:0.65})
    }}, "frame04+=1");

    tl.from("#frame3", 1.5, {alpha: 0, y: 20, ease: Power1.easeInOut}, "frame04+=0.5");


    //END FRAME  ------------------------------------------------

    tl.add("endFrame", 20);
    tl.to(".bg-image-01", 1, {autoAlpha:0, ease: Power1.easeInOut}, "endFrame+=0.25");
    tl.to("#frame3", 0.8, {alpha: 0, y: -20, ease: Power1.easeIn}, "endFrame+=.3");

    tl.from("#messaging-end-frame", 2, {alpha: 0, y: 20, ease: Power1.easeInOut}, "endFrame+=1.4");

    tl.from("#price-left-copy", 2, {alpha: 0, ease: Power2.easeInOut}, "endFrame+=.4");
    tl.from(".price-inner-content", 2, {y: 48, ease: Power2.easeInOut}, "endFrame+=.2");
    tl.from("#price-right-copy", 2, {alpha: 0, y: 5, ease: Power2.easeInOut}, "endFrame+=.8");
    tl.from("#cta-button", 2, {alpha: 0, y: 10, ease: Power2.easeOut}, "endFrame+=1.6");

    tl.to("#white-shape-small", 2, {rotation:0, ease:Power2.easeInOut}, "endFrame+=.3");
    // tl.to("#logos-container", 2, {y:20, ease:Power2.easeInOut}, "endFrame+=.3");
    // tl.from(".partner-logo", 2, {autoAlpha:0, ease:Power2.easeInOut}, "endFrame+=.4");

    tl.to("#red-grad-values", 3, {attr:{cx:364, cy:45, r:170}, ease:Power2.easeInOut}, "endFrame-=1");
    tl.fromTo(".terms", 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, "endFrame+=1.4");



    // TESTING - go to specific time of animation
    // ------------------------------------------
    // tl.seek(10);
    // tl.pause(3);

}
