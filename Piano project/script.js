var aud1 = new Audio('./sounds/1.mp3')
var aud2 = new Audio('./sounds/2.mp3')
var aud3 = new Audio('./sounds/3.mp3')
var aud4 = new Audio('./sounds/4.mp3')
var aud5 = new Audio('./sounds/5.mp3')
var aud6 = new Audio('./sounds/6.mp3')
var aud7 = new Audio('./sounds/7.mp3')
var aud8 = new Audio('./sounds/8.mp3')
var aud9 = new Audio('./sounds/9.mp3')
var aud10 = new Audio('./sounds/10.mp3')
var aud11 = new Audio('./sounds/11.mp3')
var aud12 = new Audio('./sounds/12.mp3')
var aud13 = new Audio('./sounds/13.mp3')
var aud14 = new Audio('./sounds/14.mp3')
var aud15 = new Audio('./sounds/15.mp3')
var aud16 = new Audio('./sounds/16.mp3')
var aud17 = new Audio('./sounds/17.mp3')
var aud18 = new Audio('./sounds/18.mp3')
var aud19 = new Audio('./sounds/19.mp3')
var aud20 = new Audio('./sounds/20.mp3')
var aud21 = new Audio('./sounds/21.mp3')
var aud22 = new Audio('./sounds/22.mp3')

var h1 = document.querySelector('h1')

document.body.addEventListener('keydown',function(dets){
    if (dets.code == 'KeyA'){
        aud1.currentTime = 0;
        aud1.play()
    }
    if (dets.code == 'KeyS'){
        aud2.currentTime = 0;
        aud2.play()
    }
    if (dets.code == 'KeyD'){
        aud3.currentTime = 0;
        aud3.play()
    }
    if (dets.code == 'KeyF'){
        aud4.currentTime = 0;
        aud4.play()
    }
    if (dets.code == 'KeyG'){
        aud5.currentTime = 0;
        aud5.play()
    }
    if (dets.code == 'KeyG'){
        aud6.currentTime = 0;
        aud6.play()
    }
    if (dets.code == 'KeyH'){
        aud7.currentTime = 0;
        aud7.play()
    }
    if (dets.code == 'KeyJ'){
        aud8.currentTime = 0;
        aud8.play()
    }
    if (dets.code == 'KeyK'){
        aud9.currentTime = 0;
        aud9.play()
    }
    if (dets.code == 'KeyL'){
        aud10.currentTime = 0;
        aud10.play()
    }
    if (dets.code == 'KeyZ'){
        aud11.currentTime = 0;
        aud11.play()
    }
    if (dets.code == 'KeyX'){
        aud12.currentTime = 0;
        aud12.play()
    }
    if (dets.code == 'KeyC'){
        aud13.currentTime = 0;
        aud13.play()
    }
    if (dets.code == 'KeyV'){
        aud14.currentTime = 0;
        aud14.play()
    }
    if (dets.code == 'KeyB'){
        aud15.currentTime = 0;
        aud15.play()
    }
    if (dets.code == 'KeyW'){
        aud16.currentTime = 0;
        aud16.play()
    }
    if (dets.code == 'KeyE'){
        aud17.currentTime = 0;
        aud17.play()
    }
    if (dets.code == 'KeyT'){
        aud18.currentTime = 0;
        aud18.play()
    }
    if (dets.code == 'KeyY'){
        aud19.currentTime = 0;
        aud19.play()
    }
    if (dets.code == 'KeyU'){
        aud20.currentTime = 0;
        aud20.play()
    }
    if (dets.code == 'KeyO'){
        aud21.currentTime = 0;
        aud21.play()
    }
    if (dets.code == 'KeyP'){
        aud22.currentTime = 0;
        aud22.play()
    }
})


document.body.addEventListener('keydown', function(e) {
    const keyDiv = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!keyDiv) return;
    keyDiv.classList.add('active');
});

document.body.addEventListener('keyup', function(e) {
    const keyDiv = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!keyDiv) return;
    keyDiv.classList.remove('active');
});