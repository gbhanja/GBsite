const container=document.getElementById("particles");

for(let i=0;i<80;i++){

const dot=document.createElement("div");

dot.style.position="absolute";
dot.style.width="3px";
dot.style.height="3px";
dot.style.borderRadius="50%";
dot.style.background="white";

dot.style.left=Math.random()*100+"%";
dot.style.top=Math.random()*100+"%";

dot.style.opacity=Math.random();

dot.animate(
[
{transform:"translateY(0px)"},
{transform:"translateY(-100px)"}
],
{
duration:3000+Math.random()*5000,
iterations:Infinity
}
);

container.appendChild(dot);
}

const toggle=document.getElementById("themeToggle");

toggle?.addEventListener("click",()=>{
document.body.classList.toggle("light");
});
