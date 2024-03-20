
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  

}
function loaderAnimation(){
    var tl = gsap.timeline()

tl.from(".line h1",{
y:150,
stagger:0.3,
duration:0.5,
scrub:1
})
tl.from("#line4",{
    opacity:0,
    duration:0.3
})

tl.from('.line-part1, .line h2',{
    opacity: 0,
    duration:3,
    onStart:function(){
        var timer = document.querySelector(".line-part1 h5");
        var grow = 0
        setInterval(()=>{
        if(grow< 100){
            timer.innerHTML = grow++
        }
        else{
            timer.innerHTML = grow
        }
        },30)
    }
})

tl.to('#line2',{
    opacity:0,
    duration:0.5,
    delay:0,
    scrub:5
})
tl.to('#line3 h1',{
    opacity:0,
    duration:0.5,
    delay:0.1,
    scrub:5
})


tl.to('#loader, #line3 h2',{
    opacity:0,
    duration:0.5,
    delay: 0.1,
    scrub:5
})
tl.to('#loader',{
   opacity:0,
   duration:0.2,
})
tl.from('#page1',{
    y:1200,
    opacity:0,
    ease:Power4,
})

tl.to('#loader',{
    display:'none'
})
tl.from('#nav',{
   opacity:0
})
tl.from('.hero h1, .hero h2, .hero h3',{
    y:120,
    stagger:0.2
})
}
loaderAnimation()

function crsrAnimation(){
    Shery.mouseFollower({
        skew: true,
        // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
      Shery.makeMagnet("#nav-2 h4");
     
}

crsrAnimation()
locomotiveAnimation()
function videoAnimation(){
    let videoContainer = document.querySelector(".video_container")
    let video = document.querySelector(".video_container video")
    let icon = document.querySelector("#video-cursor")
    videoContainer.addEventListener("mouseenter",()=>{
      videoContainer.addEventListener("mousemove",(dets)=>{
          gsap.to(".mousefollower",{
              opacity:0
          })
          gsap.to("#video-cursor",{
              left:dets.x - 400,
              y:dets.y - 200
          })
      })
    })
    videoContainer.addEventListener('mouseleave',()=>{
      gsap.to(".mousefollower",{
          opacity:1
      });
      gsap.to("#video-cursor",{
          left:"70%",
          y:"-15%"
      })
    });
    let flag = 0
    videoContainer.addEventListener("click",()=>{
        if (flag == 0){
      icon.innerHTML = `<i class="ri-pause-fill"></i>`
      video.play();
      video.style.opacity = 1

      gsap.to("#video-cursor",{
          scale:"0.5"
      })
      flag = 1
  }else{
      video.pause();
      video.style.opacity = 0
      
      gsap.to("#video-cursor",{
          scale:"1"
      })
      icon.innerHTML = ` <i class="ri-play-fill"></i>`
      flag = 0
  }
    })
}
videoAnimation()
function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7297342310094596},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.53,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}},
        gooey:true
    })
    Shery.imageEffect(".image-div-big",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7297342310094596},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.53,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}},
        gooey:true,
    })
}
sheryAnimation()

function flagAnimation(){
    document.addEventListener("mousemove",(dets)=>{
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y,
        })
    })
    document.querySelector("#hero3").addEventListener("mouseenter",()=>{
        gsap.to("#flag",{
            opacity:1
        })
        gsap.to(".mousefollower",{
            opacity:0
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave",()=>{
        gsap.to("#flag",{
            opacity:0
        })
        gsap.to(".mousefollower",{
            opacity:1
        })
    })
}

flagAnimation()

function textAnimation(){
   
  var clutter = ""
  var clutter2 = ""
  document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  document.querySelector("#footer h1").innerHTML = clutter
  document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
    clutter2 += `<span>${elem}</span>`
  })
  document.querySelector("#footer h2").innerHTML = clutter2


  document.querySelector("#footer-text").addEventListener("mouseenter", function () {
    gsap.to("#footer h1 span", {
      opacity: 0,
      stagger: 0.05
    })
    gsap.to("#footer h2 span", {
      delay: 0.35,
      opacity: 1,
      stagger: 0.1
    })
  })
  document.querySelector("#footer-text").addEventListener("mouseleave", function () {
    gsap.to("#footer h1 span", {
      opacity: 1,
      stagger: 0.1,
      delay: 0.35,

    })
    gsap.to("#footer h2 span", {
      opacity: 0,
      stagger: 0.05
    })
  })

}

textAnimation()
