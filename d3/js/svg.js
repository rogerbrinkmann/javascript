const svg1 = d3.select("svg#svg1")
d3.select("body")
    .style("margin", 0);
    
resizeCanvas = ()=>{
    svg1.attr("width", window.innerWidth);
    svg1.attr("height", window.innerHeight);
}
    
window.onresize = resizeCanvas;
window.onload = resizeCanvas;

svg1.style("background", "#eeeeee");
