/* MENU MAIN IDs */
const btnMenuMain = document.getElementById('btnMenuMain');
const openMenuMain = document.getElementById('openMenuMain');
const showMenuMain = document.getElementById('showMenuMain');
const btnOverlayMenuMain = document.getElementById('btnOverlayMenuMain');


/* BTN ABRIR > MENU MAIN */
btnMenuMain.addEventListener('click', () => {
    openMenuMain.classList.toggle('showMenuMain');
});


/* FECHAR AO CLICK > MENU MAIN */
btnOverlayMenuMain.addEventListener('click', () => {
    openMenuMain.classList.remove('showMenuMain');
});


let duration = 20;
let spins    = 5; // 3, 8, 15
let theWheel = new Winwheel({
    'canvasId': 'winWheelFoxGeeks',
    'numSegments': 16,
    'fillStyle': '#ffd700',
    'textFontSize': 22,
    'textFontFamily': 'Montserrat',
    'textFontWeight': '700',
    'textFillStyle': '#FFFFFF',
    'textMargin': 60,
    'textAlignment': 'center', // inner, outer, center
    'textOrientation': 'curved',
    'strokeStyle': 0,
    // 'textStrokeStyle': '#FFFFFF',
    // 'lineWidth': 0,
    // 'drawMode': 'image', 
    // 'imageOverlay': true,
    'rotationAngle': 0, 
    'responsive': false,  // This wheel is responsive!
    'segments':
        [
            {'fillStyle' : '#ffd700', 'text' : '0%'},
            {'fillStyle' : '#f1c40f', 'text' : '5%'},
            {'fillStyle' : '#ffd700', 'text' : '2%'},
            {'fillStyle' : '#f1c40f', 'text' : '8%'},
            {'fillStyle' : '#ffd700', 'text' : '1%'},
            {'fillStyle' : '#f1c40f', 'text' : '4%'},
            {'fillStyle' : '#ffd700', 'text' : '3%'},
            {'fillStyle' : '#f1c40f', 'text' : '6%'},
            {'fillStyle' : '#ffd700', 'text' : '9%'},
            {'fillStyle' : '#f1c40f', 'text' : '0%'},
            {'fillStyle' : '#ffd700', 'text' : '3%'},
            {'fillStyle' : '#f1c40f', 'text' : '1%'},
            {'fillStyle' : '#ffd700', 'text' : '6%'},
            {'fillStyle' : '#f1c40f', 'text' : '12%'},
            {'fillStyle' : '#ffd700', 'text' : '5%'},
            {'fillStyle' : '#f1c40f', 'text' : '0%'},
        ],
    'pins' :
    {
        'outerRadius': 0,
        'responsive' : false, // This must be set to true if pin size is to be responsive, if not just location is.
    },
    'animation':           // Specify the animation to use.
    {
        'type'      : 'spinToStop', // spinOngoing (continuous), spinToStop, spinAndBack, custom.
        // 'easing'    : 'power3.easeOut',
        'duration'     : duration,     // Duration in seconds.
        'spins'        : spins,    // Number of complete spins.
        'callbackSound': playSound,
        'soundTrigger' : 'pin',
        'callbackFinished' : alertDiscount,
        'direction'    : 'clockwise', // 'clockwise' or 'anti-clockwise'
        'repeat'       : 0,
        'yoyo'         : true
    }
});

// Include Sound
let audio = new Audio('tick.mp3');
function playSound() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

// Called by the onClick of the canvas, starts the spinning.
function startSpin() {
    // Reset the rotation angle to less than or equal to 360 so spinning again
    // works as expected. Setting to modulus (%) 360 keeps the current position.
    theWheel.rotationAngle = theWheel.rotationAngle % 360;

    // Start animation.
    theWheel.startAnimation();
}

// Result Alert Discount
function alertDiscount(valueDiscount) {
    alert("PARABÉNS, você ganhou desconto de: " + valueDiscount.text);
}