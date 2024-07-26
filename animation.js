TweenMax.from(".logo", 1,{
    opacity:0,
    x:-20,
    ease:Expo.easeinout
})

TweenMax.staggerFrom("nav ul li", 1,{
    opacity:0,
    x:-20,
    ease:Power3.easeinout
},0.08)

TweenMax.from("btn-area",1 ,{
    opacity:0,
    delay:.9,
    y:-20,
    ease:Expo.easeinout
})

TweenMax.staggerFrom(".media ul li",2,{
    opacity:0,
    delay:3.2,
    y:-20,
    ease:Expo.easeinout
    
},0.2)

TweenMax.from(".title-inner",1,{
    opacity:0,
    delay:1,
    y:-20,
    ease:Expo.easeinout
})

TweenMax.from(".banner-content .Cnt-img",1,{
    opacity:0,
    delay:.6,
    y:-20,
    ease:Expo.easeinout
})

TweenMax.from(".btn-area .btn",1 ,{
    opacity:0,
    delay:.9,
    x:-20,
    ease:Expo.easeinout
})
TweenMax.staggerFrom(".squar", 1,{
    opacity:0,
    delay:1,
    y:-20,
    ease:Expo.easeinout
})