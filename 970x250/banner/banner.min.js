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
    TweenMax.set($("#red-gradient"), {rotation:-30, x:50, y: -350, scale:1.5});

    TweenMax.set($("#white-shape-small"), {rotation:-25, x:0, y: 0, scale:0.7});

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
    adjustCopyLayout();
}

//------------------------------- MAIN ANIMATION -------------------------------

function adjustCopyLayout() {
    // var frame;
    for (var i = 0; i < 3; i++) {
        frame = i + 1;

        var numberOfLines = $("#frame" + frame).outerHeight() / parseFloat($("#frame" + frame).css("line-height"));

        if(numberOfLines === 2) {

            $("#frame" + frame).css("bottom", "26px");
        }

        if(numberOfLines >= 3) {

            $("#frame" + frame).css("bottom", "46px");
        }

    }

}

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
    tl.to("#red-grad-values", 2.5, {attr:{cx:200, cy:300, r:500}, ease:Power2.easeInOut}, "0");
    tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, "0");
    tl.to("#base-grad-stop-02", 1.5, {stopOpacity:0, ease:Power2.easeInOut}, ".2");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".3");
    tl.to("#red-gradient", 3, {rotation:30, autoAlpha:0, x:430, y:-300, scale:1, ease: Power2.easeInOut, onComplete:function(){TweenMax.set($("#red-gradient"), {rotation:40, x:650, y: 0});} }, "0");

    //Shape Reveal Intro
    tl.to(".shapes", 2, {alpha:1, rotation: -20, transformOrigin: "50% 50%"}, "0");
    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1.1, scaleY: 1.1, x: -2140, y: -1315,  ease: Sine.easeInOut}, "0");
    tl.to("#blue-shape-small", 1, {autoAlpha:0, rotation: 90, scaleX: 0.2, scaleY: 0.2, x: 200, y: 15, ease: Sine.easeInOut}, ".3");
    tl.to("#blue-shape", 1, {rotation: -90, scaleX: 1.2, scaleY: 1.2, x: 5, y: 130, ease: Sine.easeInOut}, ".3");

    tl.to("#mask-shape", 0.6, {rotation: 10, scale: 5, x: -1590, y: -1210, ease: Power2.easeIn}, "1.1");
    tl.to("#blue-shape", 0.5, {rotation: -180, autoAlpha:0, scaleX: 1.3, scaleY: 1.3, x: -170, y: 415, ease: Power2.easeIn}, "1.2");


    tl.from("#frame1", 2, {alpha: 0, y: 0, ease: Power1.easeInOut}, "1.4");

    tl.to("#white-grad-small-stop-03", 2, {stopOpacity:0.8, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "2");
    tl.to("#white-grad-small-stop-02", 2, {stopOpacity:0.3, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "1");

    tl.from("#white-shape-small", 2.5, {rotation:-60, x:70, scaleY:1, ease: Power2.easeOut}, "1.1");
    tl.from("#logos-container", 2, {alpha:0, y:-15, ease: Power1.easeInOut}, "1.4");


    //FRAME 02  ------------------------------------------------
    tl.add("frame02", 4);
    tl.to("#frame1", 0.8, {alpha: 0, y: 0, ease: Power1.easeOut, onComplete:function(){
        $("#frame1").css("display", "none");
    }}, "frame02");
    tl.from("#frame2", 2, {alpha: 0, y: 0, ease: Power1.easeInOut}, "frame02+=.5");

    tl.to(".bg-image-02", 2, {alpha:1, ease: Power1.easeInOut},"frame02-=.3");

    //FRAME 03  ------------------------------------------------
    tl.add("frame03", 8);
    tl.to(".bg-image", 4, {alpha:0, ease: Power1.easeInOut},"frame03+=.2");

    tl.to("#frame2", 0.8, {alpha: 0, y: 0, ease: Power1.easeOut, onComplete:function(){
        $("#frame2").css("display", "none");
    }}, "frame03+=.5");
    tl.from("#frame3", 2, {alpha: 0, y: 20, ease: Power1.easeInOut}, "frame03+=1");

    tl.to("#logos-container", 2.5, {y:-88, ease: Power1.easeInOut}, "frame03+=.6");

    //WHITE SHAPE TRANSITIONS TO SOLID WHITE
    tl.to("#white-grad-small-stop-03", 3, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "frame03+=.6");
    tl.to("#white-grad-small-stop-02", 3, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "frame03+=.6");
    tl.to("#white-grad-small-stop-01", 3, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "frame03+=.6");
    tl.to("#white-shape-small", 3, {rotation:-82, x:70, y:-110, scale:1.1, ease: Power1.easeInOut}, "frame03+=.6");



    //FADE TO FULL RED BASE
    tl.to("#red-grad-values", 2, {attr:{cx:495, cy:125, r:350}, ease:Power2.easeInOut}, "frame03+=.6");
    tl.to("#base-grad-stop-01", 4, {stopOpacity:0.8, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03+=.6");
    tl.to("#base-grad-stop-02", 3.5, {stopOpacity:0.5, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03+=.6");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:1, stopColor:"#D20000", ease:Power1.easeInOut}, "frame03+=.6");

    tl.to("#red-gradient", 3, {autoAlpha:1, rotation:50, x:85, y: -230, scale:1.2, ease: Power1.easeInOut}, "frame03+=1.2");
    tl.to("#base-red", 1, {autoAlpha:0, ease:Power1.easeInOut}, "frame03+=.6");


    //END FRAME  ------------------------------------------------
    tl.add("endFrame", 12);
    tl.to("#frame3", 0.8, {alpha: 0, y: -20, ease: Power1.easeInOut}, "endFrame+=1.8");
    tl.from("#messaging-end-frame", 2, {alpha: 0, y: 50, ease: Power1.easeOut}, "endFrame+=2.2");

    tl.from("#price-left-copy", 2, {alpha: 0, ease: Power1.easeInOut}, "endFrame+=2");
    tl.from(".price-inner-content", 2, {y: 65, ease: Power1.easeInOut}, "endFrame+=2");
    tl.from("#price-right-copy", 2, {alpha: 0, y: 5, ease: Power1.easeInOut}, "endFrame+=2.6");
    tl.from("#cta-button", 2, {alpha: 0, y: 10, ease: Power1.easeOut}, "endFrame+=3.2");

    tl.to(".qantas-logo-colour", 2, {scale:1.03, x:-5, y:-3, ease:Power1.easeInOut}, "endFrame+=2.2");
    tl.from(".partner-logo", 2, {alpha:0, ease: Power1.easeInOut}, "endFrame+=2.2");
    tl.to("#logos-container", 2, {y: -45, ease: Power2.easeInOut}, "endFrame+=1.7");

    tl.to("#white-shape-small", 1.4, {x:101, y:-132, alpha:0, ease:Power1.easeInOut}, "endFrame+=2.1");
    tl.from("#white-shape-big", 1.4, {autoAlpha:0, y:-25, x:-20, ease:Power1.easeInOut}, "endFrame+=2.1");

    tl.fromTo(".terms", 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, "endFrame+=2.3");

    //TESTING - goto specific time of animation
  //  tl.seek(10);
}
