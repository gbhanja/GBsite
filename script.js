const words=[

"Quantum Information Theory",

"Open Quantum Systems",

"Quantum Thermodynamics",

"Quantum Batteries"

];

let i=0;

let j=0;

let current="";

let erase=false;

const typing=document.getElementById("typing");

function type(){

if(!erase){

current=words[i].substring(0,j++);

typing.innerHTML=current;

if(j>words[i].length){

erase=true;

setTimeout(type,1200);

return;

}

}else{

current=words[i].substring(0,j--);

typing.innerHTML=current;

if(j===0){

erase=false;

i=(i+1)%words.length;

}

}

setTimeout(type,erase?35:80);

}

type();

window.addEventListener("scroll",()=>{

const h=document.documentElement;

const sc=(h.scrollTop)/(h.scrollHeight-h.clientHeight);

document.getElementById("progress").style.width=(sc*100)+"%";

});
