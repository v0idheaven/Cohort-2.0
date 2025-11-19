let arr = [
    {
        team: 'Royal Challangers Banglore',
        captain: 'Captain : Rajat Patidar',
        trophies: 'Trophies : 01',
        followers: 'Followers : 21.4 M',
        img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://assets.designhill.com/design-blog/wp-content/uploads/2025/03/Untitled-4.jpg',
        backgroundcolor: '#DA1E28'
    },
    {
        team: 'Mumbai Indians',
        captain: 'Captain : Hardik Pandya',
        trophies: 'Trophies : 05',
        followers: 'Followers : 18.4 M',
        img: 'https://i.pinimg.com/736x/e8/87/a8/e887a81959a66337b7ccc7835c38470e.jpg',
        backgroundcolor: '#004B8D'
    },
    {
        team: 'Chennai Super Kings',
        captain: 'Captain : Ruturaj Gaikwad',
        trophies: 'Trophies : 05',
        followers: 'Followers : 20.1 M',
        img: 'https://i.pinimg.com/736x/4e/e7/ac/4ee7ac144c048d64edcb30d3129a895f.jpg',
        backgroundcolor: '#FAD02E'
    },
    {
        team: 'Kolkata Knight Riders',
        captain: 'Captain : Ajinkya Rahane',
        trophies: 'Trophies : 03',
        followers: 'Followers : 6.9 M',
        img: 'https://i.pinimg.com/1200x/c8/e9/e6/c8e9e65d1d2f9d2472dd64a875c5c238.jpg',
        backgroundcolor: '#3A225D'
    },
    {
        team: 'Delhi Capitals',
        captain: 'Captain : Axar Patel',
        trophies: 'Trophies : 00',
        followers: 'Followers : 4.6 M',
        img: 'https://i.pinimg.com/736x/5d/a6/04/5da6045278a7a7dba53540a9226ac1c7.jpg',
        backgroundcolor: '#2561AE'
    },
    {
        team: 'Sunrisers Hyderabad',
        captain: 'Captain : Pat Cummins',
        trophies: 'Trophies : 01',
        followers: 'Followers : 5.2 M',
        img: 'https://i.pinimg.com/736x/e3/51/42/e3514291459535563cf7445b19d5dea4.jpg',
        backgroundcolor: '#EE7429'
    },
    {
        team: 'Rajasthan Royals',
        captain: 'Captain : Sanju Samson',
        trophies: 'Trophies : 01',
        followers: 'Followers : 5.2 M',
        img: 'https://i.pinimg.com/736x/14/8b/8a/148b8a386f4002fadcfe4441b45214e9.jpg',
        backgroundcolor: '#E60693'
    },
    {
        team: 'Gujarat Titans',
        captain: 'Captain : Shubman Gill',
        trophies: 'Trophies : 01',
        followers: 'Followers : 4.8 M',
        img: 'https://i.pinimg.com/1200x/dc/43/7e/dc437ebc71fc8541ae9fbb711fc44931.jpg',
        backgroundcolor: '#003057'
    },
    {
        team: 'Lucknow Super Giants',
        captain: 'Captain : Rishabh Pant',
        trophies: 'Trophies : 00',
        followers: 'Followers : 3.5 M',
        img: 'https://i.pinimg.com/736x/42/92/9f/42929f323d5f435c7838c8d7ab26f40b.jpg',
        backgroundcolor: '#0057E2'
    }
];


let h1 = document.querySelector('h1')
let box = document.querySelector('#box')
let h3_captain = document.querySelector('#captain')
let h3_trophies = document.querySelector('#trophies')
let h3_followers = document.querySelector('#followers')
let img = document.querySelector('img')
let btn = document.querySelector('button')
let body = document.querySelector('body')

btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*arr.length)

    h1.innerHTML = arr[num].team
    h3_captain.innerHTML = arr[num].captain
    h3_trophies.innerHTML = arr[num].trophies
    h3_followers.innerHTML = arr[num].followers
    img.src = arr[num].img
    body.style.backgroundColor = arr[num].backgroundcolor;
})