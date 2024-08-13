const tclNum=[... document.querySelectorAll('.num')];
const tclOp=[... document.querySelectorAll('.op')];
const tclRes=document.querySelector('.res');
const display =document.querySelector('.display');
const tOn =document.querySelector('#ton');
const tLimpar =document.querySelector('#tlimpar');
const tigual =document.querySelector('#tigual');


let sinal=false
decimal=false

console.log(tclNum)
console.log(tclOp)
console.log(tclRes)

tclNum.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        sinal=false
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0,"
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

tclOp.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

tLimpar.addEventListener('click',()=>{
    sinal=false
    decimal=false
    display.innerHTML=0
})

tigual.addEventListener('click',(evt)=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})