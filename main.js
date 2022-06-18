const container =document.querySelector(".grid-container");
console.log(container);


let id =1;
let ROW=25;
let COLUMN=25;
for (let j=0;j<ROW;j++){
    const row = document.createElement('div');
    row.classList.add('row');
      for (let i=0;i<COLUMN;i++){
         const div = document.createElement('div');
         div.classList.add('grid');
         div.setAttribute('id',id)
          row.appendChild(div);
         id++;
    }
    container.appendChild(row);
}
let toggle=false;
let color="black";
let draw=false;
let rainbow=["#ff0000","#ffa500","#ffff00","#008000","#0000ff","#4b0082","#ee82ee"];
let r=0;

const get_color=()=>{
  r++
  if( r>=8) {
    r=0;
  } 
  return rainbow[r];
}
for (let n=1;n<=(ROW*COLUMN);n++){
       
       const square=document.querySelector(`.grid[id="${n}"]`);
       container.addEventListener('mousedown',(e) => {
        console.log("fsf");draw=true;});
       
        container.addEventListener('mouseup',(e) => {
            console.log("fsf");draw=false;});
        console.log(draw);
       
       
        
      
        console.log(n);
        square.addEventListener('mousemove',(e) =>{   
            if (draw){
              if (toggle){
                square.style.backgroundColor=get_color();
                
              }
              else {
             console.log(" button clicked");
             square.style.backgroundColor=color;}}
      } );
    }
let clear=document.querySelector(".clear");
let rainbowbtn=document.querySelector(".rainbow");
let logo =document.getElementById("logo");
let eraser=document.querySelector('.eraser');
console.log(logo);
rainbowbtn.addEventListener('click',() => {toggle=true;});
col=document.getElementById('colorpicker');
eraser.addEventListener('click',()=>  {toggle=false;color='white'})
clear.addEventListener('click',() => {clear_all();});
col.addEventListener('input',()=>{toggle=false;color=col.value;logo.style.color=col.value;});
col.addEventListener('click',()=>{toggle=false;color=col.value;logo.style.color=col.value;});

function clear_all() {
  for (let n=1;n<=(ROW*COLUMN);n++){
       
    const square=document.querySelector(`.grid[id="${n}"]`);
    square.style.backgroundColor="white";
}
}