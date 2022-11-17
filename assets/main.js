// Methods
const firstInput = document.getElementsByName("first-input")[0];
const secondInput = document.getElementsByName("second-input")[0];
const exchangeRate = document.querySelector(".exchange-rate");
const exchangeRate1 = document.querySelector(".exchange-rate1");
const currency = document.querySelectorAll(".currency");
const currency1 = document.querySelectorAll(".currency1");
const one = document.getElementsByName("one");
const two = document.getElementsByName("two");
const rubl = document.getElementById("rubl");
const dollar = document.getElementById("dollar");
const euro = document.getElementById("euro");
const fs = document.getElementById("fs");
const rubl1 = document.getElementById("rubl1");
const dollar1 = document.getElementById("dollar1");
const euro1 = document.getElementById("euro1");
const fs1 = document.getElementById("fs1");
const media = document.querySelector(".media");
const list = document.querySelector(".list");
const heading = document.querySelector("h1");
// Functions
let first;
let second;
function changeOfCurrencies(e) {
    if (e.target.className == "currency" || e.target.className == "currency1") {
        const changes = [...e.target.parentElement.children];
        changes.forEach(item => {
            if (item.classList.contains("change")) {
                item.classList.remove("change");
            };
        });
        e.target.classList.add("change");
    };
};
function firstCalculation() {
    one.forEach(item => {
        if (item.classList.contains("change")) {
            first = item.innerText;
        };
    })
    two.forEach(item => {
        if (item.classList.contains("change")) {
            second = item.innerText;
        };
    })
    fetch(`https://api.exchangerate.host/latest?base=${first}&symbols=${second}`)
        .then(r => r.json())
        .then((data) => {
            secondInput.value = Number(firstInput.value) * data.rates[second];
            exchangeRate.innerText = `1 ${first} = ${data.rates[second]} ${second}`;
            exchangeRate1.innerText = `1 ${second} = ${1 / data.rates[second]} ${first}`;
        })
        .catch(error => {
            alert("Intenet bağlantınızı yoxlayın")
            console.log("Intenet bağlantınızı yoxlayın")
        }
        )
};
function secondCalculation() {
    one.forEach(item => {
        if (item.classList.contains("change")) {
            first = item.innerText;
        };
    })
    two.forEach(item => {
        if (item.classList.contains("change")) {
            second = item.innerText;
        };
    })
    fetch(`https://api.exchangerate.host/latest?base=${second}&symbols=${first}`)
        .then(r => r.json())
        .then((data) => {
            firstInput.value = Number(secondInput.value) * data.rates[first];
            exchangeRate.innerText = `1 ${first} = ${1 / data.rates[first]} ${second}`;
            exchangeRate1.innerText = `1 ${second} = ${data.rates[first]} ${first}`;
        })
        .catch(error => {
            alert("Intenet bağlantınızı yoxlayın")
            console.log("Intenet bağlantınızı yoxlayın")
        }
        )
};
function navigationMenu() {
    list.classList.toggle("show");
}

rubl.addEventListener("click", changeOfCurrencies);
dollar.addEventListener("click", changeOfCurrencies);
euro.addEventListener("click", changeOfCurrencies);
fs.addEventListener("click", changeOfCurrencies);

rubl1.addEventListener("click", changeOfCurrencies);
dollar1.addEventListener("click", changeOfCurrencies);
euro1.addEventListener("click", changeOfCurrencies);
fs1.addEventListener("click", changeOfCurrencies);

firstInput.addEventListener("keypress", firstCalculation);
secondInput.addEventListener("keypress", secondCalculation);

media.addEventListener("click", navigationMenu);