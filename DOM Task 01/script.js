let h1 = document.querySelector('h1')
let dec = document.querySelector('#dec')
let res = document.querySelector('#res')
let inc = document.querySelector('#inc')

let counter = 0;

dec.addEventListener('click', function(){
    counter--;
    h1.innerHTML = counter;
    if(counter < 0){
        h1.style.color = 'red'
    }
    else if(counter >0){
        h1.style.color = 'green'
    }
    else{
        h1.style.color = 'royalblue'
    }
})

res.addEventListener('click',function(){
    counter = 0;
    h1.innerHTML = counter;
    if (counter == 0){
        h1.style.color = 'royalblue'
    }
})

inc.addEventListener('click',function(){
    counter++;
    h1.innerHTML = counter;
    if(counter > 0){
        h1.style.color = 'green'
    }
    else if (counter < 0){
        h1.style.color = 'red'
    }
    else{
        h1.style.color = 'royalblue'
    }
})