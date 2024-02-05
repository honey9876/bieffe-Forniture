function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco();


function loader(){
var tl = gsap.timeline();

tl.to(".loader #first-h1",{
  opacity : 0,
  duration : .5,
})
.to(".loader #second-h1",{
  opacity : 1,
  duration : .5,

})
.to(".loader #second-h1",{
  opacity : 0,
  duration : .5,
})
.to(".loader",{
  opacity : 0,
})
.to(".loader",{
  display : "none",
})
.from(".page-1 .inner-page",{
  transform :"translateX(110%)",
  stagger: .1,
})
.from(".page-1 .inner-page",{
  width : "100%",
  height : "100%",
  duration : .5,
})
}
loader();


function page2(){
var p = document.querySelector(".page-2 p");

var splittedP = p.innerHTML.split("");

var clutter = "";
splittedP.forEach(function(e){
    clutter += `<span>${e}</span>`;
    p.innerHTML = clutter;
});

gsap.to(".page-2 p span",{
     color : "black",
     stagger : .5,
     scrollTrigger:{
         trigger: ".page-2",
        scroller : ".main",
        start: "top 0",
        end: "top -100",
        scrub : 2,
        pin : true,
     },
    })
}
page2();
function page3(){
    gsap.from(".page-4-part2 img",{
        top : "0%",
        width :"100vw",
        scrollTrigger:{
            trigger: ".page-4",
            scroller : ".main",
            start: "top 0",
            end: "top -100",
            scrub : 5,
            pin : true,
        }
    })
}
page3();

function page5(){
gsap.to(".inner-page5 .inner-part2 .line .line-box",{
  transform: "translateX(-7%) rotate(-45deg) scale(1)",
  opacity : 1,
  scrollTrigger:{
    trigger: ".page-5",
    scroller : ".main",
    start: "top 0",
    end: "top -100",
    scrub : 1,
  }
})  
gsap.to(".inner-page5 .inner-part2 .line",{
  width : "100%", 
  duration : 5,
  scrollTrigger:{
    trigger: ".page-5",
    scroller : ".main",
    start: "top 0",
    end: "bottom top",
    scrub : 1,
  }
})  
}

page5();
function page6(){
  gsap.to(".page-6 #first",{
  y : "400",
  duration : 1,
    scrollTrigger:{
      trigger: ".page-6",
      scroller : ".main",
      start: "top 0",
      end: "top -200",
      scrub : 1,
    }
  })  
  gsap.to(".page-6 #second",{
  y : "-390",
  duration : 1,
    scrollTrigger:{
      trigger: ".page-6",
      scroller : ".main",
      start: "top 0",
      end: "top -200",
      scrub : 1,
    }
  })  

}

page6();

function page7(){
  gsap.to(".page-7 #img2",{
  rotate :360,
    scrollTrigger:{
      trigger: ".page-7",
      scroller : ".main",
      start: "top 0",
      end: "bottom -100",
      scrub : 1,
    }
  })  

}

page7();
function page8(){
  gsap.to(".page-8 .page-8-top img",{
  rotate : -360,
    scrollTrigger:{
      trigger: ".page-8",
      scroller : ".main",
      start: "top 0",
      end: "bottom -100",
      scrub : 1,
    }
  })  

}

page8();
function page10(){
  gsap.to(".page-10 img",{
  width: "100%",
  height: "100%",
    scrollTrigger:{
      trigger: ".page-10",
      scroller : ".main",
      start: "-100 0",
      end: "top -100",
      scrub : 5,
    }
  })  

}

page10();