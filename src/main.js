import "./styles/main.styl";

function greet (firstName, lastName, somethingElse) {
    return `Hello ${firstName} ${lastName} you are ${somethingElse}!!`;
  }
  console.log(greet("Javier", "Rebolledo","awesome"));

  const controller = new ScrollMagic.Controller({globalSceneOptions:{triggerHook: "onLeave", duration:"100%"}});

  const about = new ScrollMagic.Scene({triggerElement: "#hook1"});
  about.setTween("#sidescroll", {y: "-100vh"});
  about.addIndicators();
  about.addTo(controller);

  const p1 = new ScrollMagic.Scene({triggerElement: "#hook2"});
  p1.setTween("#p1", {x: "-100.1vw"});
  p1.addIndicators();
  p1.addTo(controller);

  const p2 = new ScrollMagic.Scene({triggerElement: "#hook3"});
  p2.setTween("#p2", {x: "-100.1vw"});
  p2.addIndicators();
  p2.addTo(controller);

  const p3 = new ScrollMagic.Scene({triggerElement: "#hook4"});
  p3.setTween("#p3", {x: "-100.1vw"});
  p3.addIndicators();
  p3.addTo(controller);


  const controller2 = new ScrollMagic.Controller();

  const tl = new TimelineMax();
  tl.to("#sidescroll", 1 , {y: "-200vh"}, 0)
  .to("#about", 1, {y:"-100vh"},0)
  .to("#contact", .1, {opacity: 1},0)
  .to("#p1", 1 , {y: "-100vh"},0)
  .to("#p2", 1 , {y: "-100vh"},0)
  .to("#p3", 1 , {y: "-100vh"}),0;

  const aboutScene = new ScrollMagic.Scene({triggerElement: "#hook5", duration: "100%"});
  aboutScene.setTween(tl);
  aboutScene.addIndicators();
  aboutScene.addTo(controller2);