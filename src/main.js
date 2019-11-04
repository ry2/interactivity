import "./styles/main.styl";

function greet (firstName, lastName, somethingElse) {
    return `Hello ${firstName} ${lastName} you are ${somethingElse}!!`;
  }
  console.log(greet("Javier", "Rebolledo","awesome"));

  const controller = new ScrollMagic.Controller({globalSceneOptions:{triggerHook: "onLeave", duration:"100%"}});

  const about = new ScrollMagic.Scene({triggerElement: "#hook1"});
  about.setTween("#sidescroll", {ease: Power4.easeOut, y: "-100vh"});
  //about.addIndicators();
  about.addTo(controller);

  const controllerAbout = new ScrollMagic.Controller({globalSceneOptions:{triggerHook: "onLeave", duration:"100%"}});

  const aboutMask = new ScrollMagic.Scene({triggerElement: "#hook1"});
  aboutMask.setTween("#aboutContent", {ease: Power4.easeOut, y: "80vh"});
  aboutMask.addTo(controllerAbout);

  const p1 = new ScrollMagic.Scene({triggerElement: "#hook2"});
  p1.setTween("#p1", {ease: Power2.easeInOut, x: "-100.1vw"});
  //p1.addIndicators();
  p1.addTo(controller);

  const p2 = new ScrollMagic.Scene({triggerElement: "#hook3"});
  p2.setTween("#p2", {ease: Power2.easeInOut, x: "-100.1vw"});
  //p2.addIndicators();
  p2.addTo(controller);

  const p3 = new ScrollMagic.Scene({triggerElement: "#hook4"});
  p3.setTween("#p3", {ease: Power2.easeInOut, x: "-100.1vw"});
  //p3.addIndicators();
  p3.addTo(controller);


  const controller2 = new ScrollMagic.Controller();

  const tl = new TimelineMax();
  tl.to("#sidescroll", 1 , {y: "-200vh"}, 0)
  .to("#about", 1, {y:"-100vh"},0)
  .to("#contact", .1, {opacity: 1},0)
  .to("#p1", 1 , {y: "-100vh"},0)
  .to("#p2", 1 , {y: "-100vh"},0)
  .to("#p3", 1 , {y: "-100vh"}),0;

  const aboutScene = new ScrollMagic.Scene({triggerElement: "#hook5", duration: "200%"});
  aboutScene.setTween(tl);
  //aboutScene.addIndicators();
  aboutScene.addTo(controller2);

  //Marquee moves
  const controller3 = new ScrollMagic.Controller({globalSceneOptions:{triggerHook: "onLeave", duration:"1000%"}});
  
  const mRight = new ScrollMagic.Scene({triggerElement: "#hook1"});
  mRight.setTween("#mRight", {x: "-300vw", ease: Linear.easeNone});
  //mRight.addIndicators();
  mRight.addTo(controller3);

  const mLeft = new ScrollMagic.Scene({triggerElement: "#hook1"});
  mLeft.setTween("#mLeft", {x: "300vw", ease: Linear.easeNone});
  //mLeft.addIndicators();
  mLeft.addTo(controller3);


//Mouse Movement

  window.addEventListener("mousemove", onMouseMove);

  function mapHue(x,y) {
    const percentageX = x / window.innerWidth;
    const percentageY = y / window.innerHeight;
    return (percentageX+percentageY) / 2 * 360;
  }

  function mapHueTwo(x) {
    return x / window.innerWidth *360;
  }

  function mapLum(y) {
    return y / window.innerHeight * 100;
  }

  function mapLumTwo(y) {
    return (y / window.innerHeight) * 8 +20;
  }

  function onMouseMove(event) {
    TweenMax.to("#color", 0.1, {
      backgroundColor: `hsl(${mapHueTwo(event.clientX)}, 100, ${mapLumTwo(event.clientY)})`,
      ease: Sine.easeOut
    });

    TweenMax.to("#color2", 0.1, {
      backgroundColor: `hsl(${mapHueTwo(event.clientX)}, 100, ${mapLumTwo(event.clientY)})`,
      ease: Sine.easeOut
    });

    TweenMax.to("#color3", 0.1, {
      backgroundColor: `hsl(${mapHueTwo(event.clientX)}, 100, ${mapLumTwo(event.clientY)})`,
      ease: Sine.easeOut
    });

    TweenMax.to("#color4", 0.1, {
      backgroundColor: `hsl(${mapHueTwo(event.clientX)}, 100, ${mapLumTwo(event.clientY)})`,
      ease: Sine.easeOut
    });

    TweenMax.to("#linkColor", 0.1, {
      color: `hsl(${mapHueTwo(event.clientX)}, 100, 50)`,
      ease: Sine.easeOut
    });
  }