var mouseEvent="empty";
canvas=document.getElementById("my_canvas");
 var ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
var color=document.getElementById("color").value;
var width_of_line=document.getElementById("wi_of_li").value;
var radius=document.getElementById("radi").value;
mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
var current_position_of_mouse_x=e.clientX=canvas.offsetLeft;
var current_position_of_mouse_y=e.clientY=canvas.offsetTop;
if (mouseEvent=="mousedown"){

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last position of x and y");
console.log("x="+lastposition_of_x+"y="+lastposition_of_y);
ctx.moveTo(lastposition_of_x,lastposition_of_y);
console.log("current position of x and y");
console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
}

}
lastposition_of_x=current_positionof_mouse_x;
lastposition_of_y=current_positionof_mouse_y;
