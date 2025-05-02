const incre = document.getElementById("incre");
const decre = document.getElementById("decre");
const result = document.getElementById("p");
let count = 0;
incre.onclick = function(){
    count++;
    result.textContent = count;
}
decre.onclick = function(){
    count--;
    result.textContent = count;
}
document.getElementById("reset").onclick = function(){
    count = 0;
    result.textContent = count;
}