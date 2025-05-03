const temperature = document.getElementById("temperature");
const far = document.getElementById("fahrenheit");
const cel = document.getElementById("celsius");
const res = document.getElementById("result");
function calculate(){
    let cal = 0;
    t = temperature.value;
    t = Number(t);
    if(!far.checked && !cel.checked){
        res.textContent = "Please Select The Radio Button";
    }
    else if(far.checked){
        cal = (t * 9 / 5) + 32;
        res.textContent = `${t}°C = ${cal}°F`;
    }
    else{
        cal = (t - 32) * 5 / 9;
        res.textContent = `${t}°F = ${cal}°C`;
    }
}