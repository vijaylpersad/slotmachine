const slot1 = document.getElementById('slotOne')
const slot2 = document.getElementById('slotTwo')
const slot3 = document.getElementById('slotThree')
const spin = document.querySelector('button')

//clarify why other formats of selecting spin don't work
spin.addEventListener('click', ()=>{
    //generate random numbers between 1 - 5
    slot1.innerText = Math.floor(Math.random()*5+1)
    slot2.innerText = Math.floor(Math.random()*5+1)
    slot3.innerText = Math.floor(Math.random()*5+1)
    checkWinner()
})

const checkWinner = () => {
    if (slot1.innerText === slot2.innerText && slot1.innerText === slot3.innerText){
        console.log('winner')
    } else console.log('try again')
}

console.log('hello world')
