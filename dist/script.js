let pts, nPts = gsap.utils.random(7,11,1)

const nPoly = 25,
      radius = 180

for (let i=1; i<=nPoly; i++){ //make + animate empty polygon elements
  let p = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  stage.appendChild(p);  
  
  gsap.set(p, {
    attr:{ class:'p p'+i },
    scale:0,
    x:250,
    y:250,
    fill:'none',
    // fill:()=>(i%2==0)?'#fff':'#000',
    stroke:'#fff',
    strokeWidth:1+Math.random()
  });
  
  gsap
    .timeline({ repeat:-1 })
    .to(p, {
      duration:4+i/nPoly*3,
      scale:1,
      ease:'expo'
    })
    .seek(9)
}

function setPts(){
  pts = [];  
  for (let i=0; i<nPts; i++){
    const angle = (i/nPts * Math.PI *2)- Math.PI/2;
    const x = Math.cos(angle)*radius+gsap.utils.random(-radius/8,radius/8);
    const y = Math.sin(angle)*radius+gsap.utils.random(-radius/8,radius/8);
    pts.push( x.toFixed(2) + ',' + y.toFixed(2) + ' ');
  }
  gsap.to('.p', {attr:{points:pts}, duration:1.5, ease:'none'});
}

gsap.to(window, {duration:1.5, repeat:-1, onStart:setPts, onRepeat:setPts});