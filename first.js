function drag1(e) {
   e.dataTransfer.setData("img",e.target.id);
   console.log(e);
}
function drop1(e) {
    e.preventDefault();
    e.dataTransfer.getData("img",e.target.id);
    e.target.appendChild(document.getElementById("image1"));
 
}
function dragover1(e) {
   e.preventDefault();
}


function drag2(e) {
   e.dataTransfer.setData("img",e.target.id);
   
   
}
function dragover2(e) {
   e.preventDefault();
   
}
function drop2(e) {
   e.preventDefault();
   e.dataTransfer.setData("img",e.target.id);
   e.target.appendChild(document.getElementById("image2"));

   
}
function drag3(e) {
   e.dataTransfer.setData("img",e.target.id);
   
   
}
function dragover3(e) {
   e.preventDefault();
   
}
function drop3(e) {
   e.preventDefault();
   e.dataTransfer.setData("img",e.target.id);
   e.target.appendChild(document.getElementById("image2"));
   

   
}
function drop3(e) {
   e.preventDefault();
   e.dataTransfer.setData("img",e.target.id);
   e.target.appendChild(document.getElementById("image1"));

   
}