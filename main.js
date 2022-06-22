const container =document.querySelector(".grid-container");


let secret=document.querySelector('.secret-link')
let clear=document.querySelector(".clear");
let rainbowbtn=document.querySelector(".rainbow");
let logo =document.getElementById("logo");
let eraser=document.querySelector('.eraser');
let colorbtn=document.querySelector('.color-btn')
let small=document.querySelector('.grid-size.small');
let medium=document.querySelector('.grid-size.medium');
let large=document.querySelector('.grid-size.large');


console.log(small,medium,large);

let ROW=25;
let COLUMN=25;
 lastSize='grid-small'
function createGrid(row,column,size="small"){
let id =1;
ROW=row;
COLUMN=column;

  for (let j=0;j<ROW;j++){
    let row = document.createElement('div');
    row.setAttribute('draggable','false')
    row.classList.add('row');
    row.setAttribute('id',`${j+1}`)
      for (let i=0;i<COLUMN;i++){
         const div = document.createElement('div');
         div.setAttribute('draggable', 'false');
         div.classList.add(`grid`);
         div.classList.remove(lastSize)
         div.classList.add(`grid-${size}`);
         div.setAttribute('id',id)
          row.appendChild(div);
         id++;
         lastSize='grid-'+size;
    }
    container.appendChild(row);
}}

createGrid(ROW,COLUMN);
let toggle=false;
let color="black";
let draw=false;
let rainbow=["rgb(205, 0, 0)","rgb(255, 128, 0)","rgb(255, 255, 0)","rgb(128, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 128)","rgb(127, 0, 255)","rgb(255, 51, 153)"];

let r=0;
  
const get_color=()=>{
  r++
  if( r>=9) {
    r=0;
  } 
  return rainbow[r];

}

function events(){
for (let n=1;n<=(ROW*COLUMN);n++){
       console.log(ROW,COLUMN);
       let square=document.querySelector(`.grid.${lastSize}[id="${n}"]`);
       container.addEventListener('mousedown',(e) => {
       draw=true;});
       
        container.addEventListener('mouseup',(e) => {
          draw=false;});
        console.log(draw);
       
       
        
      
       
        square.addEventListener('mousemove',(e) =>{  console.log(lastSize);  
            if (draw){
              
              if (toggle   ){
                if (!(rainbow.includes(square.style.backgroundColor))) {
               
                console.log(square.style.backgroundColor);
                square.style.backgroundColor=get_color();}
                else {
                   void(0);
                }
                
              }
              else {
             
             square.style.backgroundColor=color;}}

      } );
    }}
events();
select(colorbtn);    

rainbowbtn.addEventListener('click',() => {toggle=true;select(rainbowbtn);});
col=document.getElementById('colorpicker');
eraser.addEventListener('click',()=>  {toggle=false;color='white';select(eraser)})
clear.addEventListener('click',() => {clear_all();select(clear)});
col.addEventListener('input',()=>{toggle=false;color=col.value;logo.style.color=col.value;select(colorbtn)});
col.addEventListener('click',()=>{toggle=false;color=col.value;logo.style.color=col.value;select(colorbtn)});
colorbtn.addEventListener('click',() => {toggle=false;color=col.value;select(colorbtn);})
secret.addEventListener('click',()=>{secret.setAttribute("href","https://www.youtube.com/watch?v=dQw4w9WgXcQ")});
small.addEventListener('click',()=>{clearGrid();createGrid(25,25,'small');events()})
medium.addEventListener('click',()=>{clearGrid(); createGrid(35,35,'medium');events();})
large.addEventListener("click",()=>{clearGrid(); createGrid(45,45,'large');events();})

function clear_all() {
  for (let n=1;n<=(ROW*COLUMN);n++){
       
    const square=document.querySelector(`.grid[id="${n}"]`);
    square.style.backgroundColor="white";
}
}

function clearGrid() {
  for (let n=1;n<=(ROW);n++){
    const row=document.querySelector(`.row[id="${n}"]`);
    container.removeChild(row);
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