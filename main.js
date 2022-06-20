const container =document.querySelector(".grid-container");
console.log(container);

let secret=document.querySelector('.secret-link')
let clear=document.querySelector(".clear");
let rainbowbtn=document.querySelector(".rainbow");
let logo =document.getElementById("logo");
let eraser=document.querySelector('.eraser');
let colorbtn=document.querySelector('.color-btn')

let id =1;
let ROW=25;
let COLUMN=25;
for (let j=0;j<ROW;j++){
    const row = document.createElement('div');
    row.setAttribute('draggable','false')
    row.classList.add('row');
      for (let i=0;i<COLUMN;i++){
         const div = document.createElement('div');
         div.setAttribute('draggable', 'false');
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
             
             square.style.backgroundColor=color;}}
      } );
    }
select(colorbtn);    

rainbowbtn.addEventListener('click',() => {toggle=true;select(rainbowbtn);});
col=document.getElementById('colorpicker');
eraser.addEventListener('click',()=>  {toggle=false;color='white';select(eraser)})
clear.addEventListener('click',() => {clear_all();select(clear)});
col.addEventListener('input',()=>{toggle=false;color=col.value;logo.style.color=col.value;select(colorbtn)});
col.addEventListener('click',()=>{toggle=false;color=col.value;logo.style.color=col.value;select(colorbtn)});
colorbtn.addEventListener('click',() => {toggle=false;color=col.value;select(colorbtn);})
secret.addEventListener('click',()=>{secret.setAttribute("href","https://www.youtube.com/watch?v=dQw4w9WgXcQ")});


function clear_all() {
  for (let n=1;n<=(ROW*COLUMN);n++){
       
    const square=document.querySelector(`.grid[id="${n}"]`);
    square.style.backgroundColor="white";
}
}

function select(obj){
  let buttons=document.querySelectorAll('#btn');
  console.log(buttons);
  buttons.forEach(e=>{e.className=".buttons button"})
  if (obj.innerText==="CLEAR") {
      return;
  }
  obj.className="btn";
}