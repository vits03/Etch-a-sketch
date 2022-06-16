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

let draw=0;
for (let n=1;n<=(ROW*COLUMN);n++){
       
       const square=document.querySelector(`.grid[id="${n}"]`);
       container.addEventListener('mousedown',(e) => {
        console.log("fsf");draw=1;});
       
        container.addEventListener('mouseup',(e) => {
            console.log("fsf");draw=0;});
        console.log(draw);
       
       
        
      
        console.log(n);
        square.addEventListener('mousemove',(e) =>{
             if (draw==1){
             console.log(" button clicked");
             square.style.backgroundColor="red";}
      } );
    }

