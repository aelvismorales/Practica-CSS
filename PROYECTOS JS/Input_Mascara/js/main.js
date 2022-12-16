const inputCard=document.getElementById("inputCard");
const inputExpDate=document.getElementById("inputExpDate");
const inputCVV=document.getElementById("inputCVV");

const maskNumber='####-####-####-####';
const maskDate='##/##';
const maskCVV='###';

let current='';
let cardNumber=[];
let cardExpDate=[];
let cardCVV=[];

inputCard.addEventListener("keydown",(e)=>{
    if(e.key==='Tab'){
        return;
    }

    e.preventDefault();
    
    handleInput(maskNumber,e.key,cardNumber);
    console.log(cardNumber);
    inputCard.value=cardNumber.join("");
})

inputExpDate.addEventListener("keydown",(e)=>{
    if(e.key==='Tab'){
        return;
    }

    e.preventDefault();
    
    handleInput(maskDate,e.key,cardExpDate);
    console.log(cardExpDate);
    validateMonth(cardExpDate);
    inputExpDate.value=cardExpDate.join("");
})

inputCVV.addEventListener("keydown",(e)=>{
    if(e.key==='Tab'){
        return;
    }

    e.preventDefault();
    
    handleInput(maskCVV,e.key,cardCVV);
    console.log(cardCVV);
    inputCVV.value=cardCVV.join("");
})

function handleInput(mask,key,arr){
    let numbers=["0","1","2","3","4","5","6","7","8","9"];
    if(key==='Backspace' && arr.length>0){
        arr.pop();
        return;
    }
    if(numbers.includes(key) && arr.length+1<=mask.length){
        if(mask[arr.length] === '-' || mask[arr.length] === '/'){
            arr.push(mask[arr.length],key);
        }else{
            arr.push(key);
        }
    }
}

function validateMonth(arr){
    if(arr.length>2){
        let month=[]
        month.push(arr[0],arr[1]);
        if (Number(month.join(""))>12){
            console.log("Error en Exp Date")
        }
        else{
            console.log("Excellent");
        }
    }
}
