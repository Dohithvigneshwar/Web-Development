function fun(){
    const num = document.getElementById("diceInput").value;
    const resultNum = document.getElementById("resultNum");
    const resultImg = document.getElementById("resultImg");
    let value = [];
    let img = [];
    for(let i=0;i<num;i++){
        let ran = Math.floor(Math.random()*6)+1;
        value.push(ran);
        img.push(`<img src = "images/${ran}.png"/>`);
    }   
    resultNum.textContent = "Dice Values :  "+value.join(" , ");
    resultImg.innerHTML = img.join('');
}