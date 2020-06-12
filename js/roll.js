var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();


tl.from('video', 1, {opacity: 0.1});
tl.from('#descri', 1, {opacity: 0.1});
tl2.from('#button2', 1, {opacity: 0.1});


const scene = new ScrollMagic.Scene({
    triggerElement: ".regular-wrapper",
    triggerHook: 0.80,
    duration: "100%"    
})
    .setClassToggle("#reveal1", "visible")
    .setTween(tl)
    .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
        triggerElement: ".regular-wrapper",
        triggerHook: 0.85,
        duration: "100%"    
    })
        
        .setTween(tl2)
        .addTo(controller);

    function updatePercentage() {
        tl.progress();
        console.log(tl.progress());
    }