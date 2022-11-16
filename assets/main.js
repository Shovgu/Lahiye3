function changeOfCurrencies(e){
    const firstInput=document.getElementsByName("first-input")[0];
    const secondInput=document.getElementsByName("second-input")[0];
    const currencyChange=document.querySelector(".currency");
    const currencyChange1=document.querySelector(".currency1");
    
    if(e.target.className=="currency" || e.target.className=="currency1"){
        const changes=[...e.target.parentElement.children];
        changes.forEach(item=>{
            if(item.classList.contains("change")){
                item.classList.remove("change");
            }
        })
        e.target.classList.add("change");
    };
    if(rubl.classList.contains("change") && rubl1.classList.contains("change")){
        secondInput.value=Number(firstInput.value);
    };
    if(currencyChange.classList.contains("change") && currencyChange1.classList.contains("change")){
        fetch(`https://api.exchangerate.host/latest?base=${currencyChange.innerText}&symbols=${currencyChange1.innerText}`)
        .then(r=>r.json())
        .then((data)=>{
            // secondInput.value=Number(firstInput.value)*data.rates.currencyChange1.innerText
            console.log(currencyChange.innerHTML)
        })
    };
};
const rubl=document.getElementById("rubl");
const dollar=document.getElementById("dollar");
const euro=document.getElementById("euro");
const fs=document.getElementById("fs");

rubl.addEventListener("click",changeOfCurrencies);
dollar.addEventListener("click",changeOfCurrencies);
euro.addEventListener("click",changeOfCurrencies);
fs.addEventListener("click",changeOfCurrencies);

const rubl1=document.getElementById("rubl1");
const dollar1=document.getElementById("dollar1");
const euro1=document.getElementById("euro1");
const fs1=document.getElementById("fs1");

rubl1.addEventListener("click",changeOfCurrencies);
dollar1.addEventListener("click",changeOfCurrencies);
euro1.addEventListener("click",changeOfCurrencies);
fs1.addEventListener("click",changeOfCurrencies);