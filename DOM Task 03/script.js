let btn = document.querySelector('button')
let main = document.querySelector('main')

let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]

btn.addEventListener('click',function(){
    let h1 = document.createElement('h1')

    let a = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[a];
    main.appendChild(h1)

    h1.style.position = 'absolute'
    let x = Math.random()*100
    let y = Math.random()*100
    let r = Math.random()*360
    let scl = Math.random()*3

    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = r+'deg'
    h1.style.scale = scl
});