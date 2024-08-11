const tclNum=[... document.querySelectorAll('.num')];
const tclOp=[... document.querySelectorAll('.op')];
const tclRes=document.querySelector('.res');
const display =document.querySelector('.display');
const tOn =document.querySelector('#ton');
const tLimpar =document.querySelector('#tlimpar');

console.log(tclNum)
console.log(tclOp)
console.log(tclRes)

tclNum.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})
tclOp.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})

tLimpar.addEventListener('click',()=>{
    display.innerHTML=0
})