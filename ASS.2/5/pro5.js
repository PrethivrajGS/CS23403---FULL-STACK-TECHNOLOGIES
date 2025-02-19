let x=3.7;

document.addEventListener("DOMContentLoaded", () => {

document.getElementById("gsp").textContent=`round of x is:${Math.round(3.7)}`;
document.getElementById("gsp1").textContent=`floor of x is:${Math.floor(3.7)}`;
document.getElementById("gsp2").textContent=`ceil of x is:${Math.ceil(3.7)}`;
document.getElementById("gsp3").textContent=`sign of x is:${Math.sign(3.7)}`;
document.getElementById("gsp4").textContent=`truncate of x is:${Math.trunc(3.7)}`;
document.getElementById("gsp5").textContent=`power of x is:${Math.pow(3.7,2).toFixed(2)}`;
document.getElementById("gsp6").textContent=`sqrt of x is:${Math.sqrt(3.7).toFixed(2)}`;
document.getElementById("gsp7").textContent=`sine of x is:${Math.sin(3.7*(Math.PI)/180).toFixed(2)}`;
});