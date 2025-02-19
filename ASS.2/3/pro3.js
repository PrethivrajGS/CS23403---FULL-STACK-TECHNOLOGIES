let radius;
let Area;
let C;
document.getElementById("btn").onclick=function(){
    const PI=3.1415;
     radius=document.getElementById("inputr").value;
     let A=PI*radius*radius;
     C=2*PI*radius;
     A=A.toFixed(2)
     C=C.toFixed(2)
    document.getElementById("area").textContent=`Area= ${A}`;
    document.getElementById("cir").innerHTML=`Circumferance= ${C}`;
}
