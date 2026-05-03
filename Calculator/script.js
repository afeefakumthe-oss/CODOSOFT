let dispaly =
document.getElementById('display');
function append(value) {
    dispaly.value += value;
}
function clearDisplay() {
    dispaly.value= "";
}
function deleteLast() {
    dispaly.value = dispaly.value.slice(0,-1);
}
function calculate() {
    try {
        dispaly.value = eval(dispaly.value);
    }
    catch{
        dispaly.value = "Error";
    }
}