const input = document.querySelector("#form__input");
const check_button = document.querySelector("#check__button");
const notification = document.querySelector("#notification");
const x_button_all = document.querySelectorAll(".x_button");
const x_button = document.querySelector("#hidden");
let x = 0;
let r = 0;

function showTime() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    document.getElementById("timezone").innerHTML = `${date}, ${time}`;
    setTimeout(showTime, 1000);
}

showTime();

input.addEventListener('keyup', () => {
    input.value <= -3 || input.value >= 5 || !/^[0-9 | . | -]+$/i.test(input.value)
        ? input.style.border = "2px solid red"
        : input.style.border = "1px solid rgb(197 194 194)";
});

function takeX(number){
    let btn = document.getElementById("hidden");
    btn.value = number;
    x = number;
    console.log(x,'x')
    let button = document.getElementById("x" + number);
    console.log(button, 'button')
    if (!button.classList.contains("selected")) {
        x = number;
        let oldSelectedButton = document.querySelector(".selected");
        if (oldSelectedButton !== null)
            oldSelectedButton.classList.remove("selected");
        button.classList.add("selected");
    } else {
        x = undefined;
        button.classList.remove("selected");
    }
}

function getSelectedValue(){
    let btn = document.getElementById("hiddenR");
    let selector = document.getElementById("form__selector");
    let selectedValue = selector.options[selector.selectedIndex].value;
    btn.value = selectedValue;
    r = selectedValue;
}

function validateData() {
    if(input.value === "" || input.value <= -3 || input.value >= 5 || !/^[0-9 | . | -]+$/i.test(input.value)) {
        notification.innerHTML = 'Введите корректное число Y';
        check_button.disabled = true;
    }
    else if(x_button.value === "") {
        notification.innerHTML = 'Выберите число X';
        check_button.disabled = true;
    } 
    else  {
        notification.innerHTML = ''
        check_button.disabled = false;
    }
}

setInterval(validateData,100);


