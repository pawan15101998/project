let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".imgs",
      pin: true,   
      start: "top top", 
      scrub: 1,
      // stagger:true
      markers:true 
    }
  });

tl
.addLabel("red")
.to('.center',{
  width:"100%",
  height:"100%",
  duration:.1,
},"red")

  .to('#l1',{
    x:'-130%',
    opacity: 0
  },'red')

  .to('#l2',{
    x:'-130%',
    opacity: 0
  },'red')

  .to('#r1',{
    right:'-130%',
    opacity: 0
  },'red')

  .to('#r2',{
    right:'-130%',
    opacity: 0  
  },'red')
  


$('.tlt').textillate({
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    autoStart: true,
    inEffects: ['fadeInUp'],
  
    in: {
        effect: 'fadeInUp',
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: false,
        reverse: false,
        callback: function () {}
    },
      type: 'word'
  })

  
  function secondamination(){
    $('.second').textillate({
      selector: '.texts',
      loop: false,
      minDisplayTime: 2000,
      initialDelay: 0,
      autoStart: true,
      inEffects: ['fadeInUp'],
    
      in: {
          effect: 'fadeInUp',
          delayScale: .5,
          delay: 50,
          sync: false,
          shuffle: false,
          reverse: false,
          callback: function () {}
      },
        type: 'word'
    })
    $('.selected').textillate({
      selector: '.texts',
      loop: false,
      minDisplayTime: 2000,
      initialDelay: 0,
      autoStart: true,
      inEffects: ['fadeInDown'],
    
      in: {
          effect: 'fadeInUp',
          delayScale: 2,
          delay: 50,
          sync: false,
          shuffle: false,
          reverse: false,
          callback: function () {}
      },
        type: 'char'
    })
    
  var tl2 = gsap.timeline()
  tl2
  .from('.line',{
  width:"2%",
  ase:Expo.easeInOut
  })
.to(".shape",{
  width:"250px",
  height:"320px"
})
.to(".shape img",{
  scale:".5"
})
    
  }
  secondamination()

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      // pin: true,   
      start: "top top", 
      // scrub: 1,
      // stagger:true
      markers:true 
    }
  });


  
  
  

  
  
  
  
  
  // textillate 
  // animate . css
  // cdn from codepan in css
  // jquary cdn
  // textlate js
  // textlate js codepan => pen setting css => cdn
  // character Map
  // add lable to animate together