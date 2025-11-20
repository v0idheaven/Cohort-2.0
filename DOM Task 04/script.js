let btn = document.querySelector('button')
let h2 = document.querySelector('h2')
let inner = document.querySelector('.inner')

let a = 0;

btn.addEventListener('click',function(){
    let num = 50 + Math.floor(Math.random()*50)

    btn.style.pointerEvents = 'none'

    let time = setInterval(function(){
        a++;
        h2.innerHTML = a + '%';
        inner.style.width = a + '%';
    }, 50);

    setTimeout(function(){
        clearInterval(time)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = '0.5'
        console.log(`Downloaded in ${num/10} sec`)
    },5000);
});