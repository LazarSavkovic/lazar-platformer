const showThis = document.getElementById('showThis')
const links = document.getElementById('links')
const finish = document.getElementById('finish')
const skills = document.getElementById('skills')
const teachingStats = document.getElementById('teachingStats')
const project = document.getElementById('project')

let canvasHeight 
let canvasWidth;

if (window.innerWidth < 768) {
    canvasWidth = window.innerHeight;
    canvasHeight = window.innerWidth;
} else {
    canvasHeight = window.innerHeight;
    canvasWidth = window.innerWidth;
}


const spriteWidth = canvasHeight/12;
const spriteHeight = canvasHeight/12;

showThis.style.top = 1*spriteHeight + 'px'
links.style.top = 8*spriteHeight + 'px'
skills.style.top = 2.9*spriteHeight + 'px'
teachingStats.style.top = 2*spriteHeight + 'px'
project.style.top = 1*spriteHeight + 'px'
finish.style.top = 2*spriteHeight + 'px'


const playerImageHeight = 64;

function createBackground() {


    const backgroundCanvas = document.getElementById('backgroundCanvas')
    backgroundCanvas.height = canvasHeight;
    backgroundCanvas.width = canvasWidth;

    const bc = backgroundCanvas.getContext('2d')

    function drawBackground() {


        bc.fillStyle = 'rgb(52,124,255)';
        bc.fillRect(0, 0, canvasWidth, spriteHeight * 3)
        bc.fillStyle = 'rgb(152,130,237)';
        bc.fillRect(0, spriteHeight * 3, canvasWidth, spriteHeight)
        bc.fillStyle = 'rgb(52,124,255)';
        bc.fillRect(0, spriteHeight * 3 + 15, canvasWidth, 15)
        bc.fillStyle = 'rgb(232,135,229)';
        bc.fillRect(0, spriteHeight * 4, canvasWidth, spriteHeight * 2)
        bc.fillStyle = 'rgb(152,130,237)';
        bc.fillRect(0, spriteHeight * 4 + 15, canvasWidth, 15)
        bc.fillStyle = 'rgb(254,145,202)';
        bc.fillRect(0, spriteHeight * 5, canvasWidth, canvasHeight / 7)
        bc.fillStyle = 'rgb(232,135,229)';
        bc.fillRect(0, spriteHeight * 5 + 15, canvasWidth, 15)
        bc.fillStyle = 'rgb(81,112,159)';
        bc.fillRect(0, spriteHeight * 6, canvasWidth, spriteHeight * 6)
        bc.fillStyle = 'rgb(61,91,142)';
        bc.fillRect(0, spriteHeight * 6 + 15, canvasWidth, 15)
        bc.fillStyle = 'rgb(61,91,142)';
        bc.fillRect(0, spriteHeight * 6 + 45, canvasWidth, 8)
        bc.fillStyle = 'rgb(198,188,216)';
        bc.fillRect(0, spriteHeight * 6 + 5, canvasWidth, 8)
        bc.fillStyle = 'rgb(198,188,216)';
        bc.fillRect(0, spriteHeight * 6 + 35, canvasWidth, 4)

    }
    drawBackground();
}
createBackground()



const tiles = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
]



function createPlatforms() {
    const platforms = [];

    for (let row = 0; row < tiles.length; row++) {
        for (let cell = 0; cell < tiles[row].length; cell++) {
            if (tiles[row][cell] == 1) {
                if ((tiles[row][cell - 1]) && ((tiles[row][cell - 1]) == 1)) {
                    platforms[platforms.length - 1].width += 1;
                } else {
                    platforms.push({
                        x: cell,
                        y: row,
                        width: 1,
                    })

                }
            }
        }
    }

    for (let platform of platforms) {
        platform.x = platform.x * spriteWidth;
        platform.y = platform.y * spriteHeight;
        platform.width = platform.width * spriteWidth;
        platform.height = spriteHeight;
    }

    return platforms
}

let platforms = createPlatforms()

// Create decorations positioned on top of platforms
const decorations = [];
const tuftImg = new Image();
tuftImg.src = './graphics/tuft3.png'
const flwrImg = new Image();
flwrImg.src = './graphics/flwr.png'
const flwr2Img = new Image();
flwr2Img.src = './graphics/flwr2.png'
const flwr3Img = new Image();
flwr3Img.src = './graphics/flwr3.png'

// Helper function to check if there's a tile above this position
function isTopTile(row, col) {
    if (row === 0) return true; // Top row has no tile above
    return tiles[row - 1][col] === 0; // No tile above means it's on top
}

// Add decorations only to top tiles (tiles that don't have another tile above them)
for (let row = 0; row < tiles.length; row++) {
    for (let col = 0; col < tiles[row].length; col++) {
        if (tiles[row][col] === 1 && isTopTile(row, col)) {
            if (Math.random() > 0.6) { // 40% chance to add a decoration
                // Randomly assign decoration type once when created
                const decorationType = Math.random();
                let type;
                if (decorationType < 0.7) {
                    type = 'tuft'; // 70% - tufts are much more common
                } else if (decorationType < 0.833) {
                    type = 'flwr'; // ~13.3%
                } else if (decorationType < 0.916) {
                    type = 'flwr2'; // ~8.3%
                } else {
                    type = 'flwr3'; // ~8.3%
                }
                decorations.push({
                    x: col * spriteWidth,
                    y: row * spriteHeight,
                    type: type
                });
            }
        }
    }
}

const playerSpritesheet = new Image();
playerSpritesheet.src = './graphics/spritesheet.png'
const playerSpritesheetFlipped = new Image();
playerSpritesheetFlipped.src = './graphics/spritesheetLeft.png'

let currentFrame = 0;
const numFrames = 8;



const cloudImg = new Image();
cloudImg.src = './graphics/clouds/1.png'
const cloudImg2 = new Image();
cloudImg2.src = './graphics/clouds/2.png'
const cloudImg3 = new Image();
cloudImg3.src = './graphics/clouds/3.png'


const cloudImgs = [cloudImg, cloudImg2, cloudImg3, cloudImg, cloudImg2, cloudImg3]


const canvas = document.getElementById('canvas')
canvas.height = spriteHeight * 12;
canvas.width = canvasWidth;


const c = canvas.getContext('2d')



const MOVE_SPEED = canvasWidth / 300;
const GRAVITY = canvasHeight / 1080;
const JUMP_SPEED = GRAVITY * 25;
const startingPosition = canvasWidth * 1/6;
let scroll = 0;


const animationFrameLimit = 1;
let animationFrameCurrent = 0;

const player = {
    x: startingPosition,
    y: canvasHeight * 1/2,
    height: spriteHeight * 2,
    width: spriteWidth * 2,
    vy: 0,
    isJumping: false,
    lookingRight: true
}

const clouds = [
    {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight / 2
    },
    {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight / 2
    },
    {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight / 2
    },
    {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight / 2
    },
    {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight / 2
    },
    {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight / 2
    },
]

let cloudDrift = 0;





function drawPlatforms() {

    for (let platform of platforms) {
        c.fillStyle = 'rgb(44,127,0)';
        c.fillRect(platform.x - scroll, platform.y, platform.width, platform.height)
        c.fillStyle = 'rgb(85,181,0)';
        c.fillRect(platform.x - scroll, platform.y, platform.width, 6)
        c.fillStyle = 'rgb(134,218,37)';
        c.fillRect(platform.x - scroll, platform.y, platform.width, 3)
        c.fillStyle = 'rgb(36,97,1)';
        c.fillRect(platform.x - scroll, platform.y + platform.height - 3, platform.width, 3)
    }



}

function drawDecorations() {
    const decorationSize = spriteHeight * 0.5; // Decoration size
    
    for (let decoration of decorations) {
        // Use the stored decoration type
        let img;
        
        if (decoration.type === 'tuft') {
            img = tuftImg;
        } else if (decoration.type === 'flwr') {
            img = flwrImg;
        } else if (decoration.type === 'flwr2') {
            img = flwr2Img;
        } else {
            img = flwr3Img;
        }
        
        c.drawImage(
            img,
            decoration.x - scroll,
            decoration.y - decorationSize, // Place decoration on top of platform
            decorationSize,
            decorationSize
        )
    }
}


function drawClouds() {

    cloudDrift += 0.3;

    for (let i = 0; i < clouds.length; i++) {
        c.drawImage(cloudImgs[i], clouds[i].x + cloudDrift, clouds[i].y, cloudImgs[i].width * 2 * (canvasWidth / 1920), cloudImgs[i].height * 2 * (canvasHeight/950))
    }




}

function drawPlayer() {
    if (player.lookingRight) {
        c.drawImage(
            playerSpritesheet,
            currentFrame * playerImageHeight,
            0,
            playerImageHeight,
            playerImageHeight,
            player.x - scroll,
            player.y,
            player.width,
            player.height

        )
    } else {
        c.drawImage(
            playerSpritesheetFlipped,
            currentFrame * playerImageHeight,
            0,
            playerImageHeight,
            playerImageHeight,
            player.x - scroll,
            player.y,
            player.width,
            player.height

        )
    }
}


const keyState = {

}


window.addEventListener('keydown', (e) => {

    e.preventDefault()

    keyState[e.key] = true;


    if (e.key === 'ArrowRight') {
        player.x += MOVE_SPEED
        detectHorizontalCollision()
        player.lookingRight = true;
    }
    if (e.key === 'ArrowLeft') {
        player.x -= MOVE_SPEED
        detectHorizontalCollision()
        player.lookingRight = false;
    }
    if (e.key === ' ' && !player.isJumping) {
        player.vy -= JUMP_SPEED;
        console.log(player.vy)
        player.isJumping = true

    }
})


window.addEventListener('keyup', (e) => {
    keyState[e.key] = false
})

function continuousMovement() {
    // If either arrow key is pressed, move and animate.
    if (keyState['ArrowRight'] || keyState['ArrowLeft']) {
        if (keyState['ArrowRight']) {
            player.x += MOVE_SPEED;
            detectHorizontalCollision();
            player.lookingRight = true;
        }
        if (keyState['ArrowLeft']) {
            player.x -= MOVE_SPEED;
            detectHorizontalCollision();
            player.lookingRight = false;
        }
        animate();
    } else {
        // No horizontal input: reset the sprite frame to the idle frame.
        currentFrame = player.lookingRight ?  0 : 7; // Change this value if your idle frame should be different.
    }
    requestAnimationFrame(continuousMovement);
}


continuousMovement()

function animate() {


    animationFrameCurrent += 1;


    if (animationFrameCurrent == animationFrameLimit) {
        currentFrame = (currentFrame + 1) % numFrames;
        animationFrameCurrent = 0;
    }

}


function gameLoop() {

    scroll = player.x - startingPosition;

    if (checkYDeath()) {
        console.log('game over')
        showGameOver();
        return;
    };

    c.clearRect(0, 0, canvasWidth, canvasHeight)


    player.y += player.vy;
    player.vy += GRAVITY;

    detectVerticalCollision()

    // drawBackground()
    drawClouds()

    drawPlayer()
    drawPlatforms()
    drawDecorations()
    showThis.style.left =  9*spriteWidth -scroll + 'px'
    links.style.left =  16*spriteWidth -scroll + 'px'
    skills.style.left =  36*spriteWidth -scroll + 'px'
    teachingStats.style.left =  70*spriteWidth -scroll + 'px'
    project.style.left =  125*spriteWidth -scroll + 'px'
    project.style.top = 1*spriteHeight + 'px'
    finish.style.left =  155*spriteWidth -scroll + 'px'

    requestAnimationFrame(gameLoop)
}


function checkYDeath() {
    if (player.y > 2000) {
        return true
    }
}

function showGameOver() {
    const gameOverDiv = document.createElement('div');
    gameOverDiv.className = 'gameOverDiv'
    gameOverDiv.innerHTML = `<h2 class='gameOverHeading'>GAME OVER</h2><button id='restartBtn'>restart</button>`
    const restartBtn = gameOverDiv.querySelector('#restartBtn')
    setTimeout(() => {

        restartBtn.onclick = () => {
            location.reload()
        }
        document.addEventListener('keydown', (e) => {
            if ((e.key === ' ') || (e.key === 'Enter')) {
                location.reload()
            }
        })
    }, 400)



    document.body.append(gameOverDiv)
}


function detectHorizontalCollision() {


    for (let rect of platforms) {

        if (
            player.x + (spriteWidth / 2) < rect.x + rect.width &&
            player.x + player.width - (spriteWidth / 2) > rect.x &&
            player.y + player.height > rect.y &&
            player.y + (spriteWidth / 2) < rect.y + rect.height
        ) {

            if (player.lookingRight) {
                player.x = rect.x - (player.width - (spriteWidth / 2))
            }
            else {
                player.x = rect.x + rect.width - (spriteWidth / 2)

            }


        }
    }
}
function detectVerticalCollision() {


    for (let rect of platforms) {

        if (
            player.x + (spriteWidth / 2) < rect.x + rect.width &&
            player.x + player.width - (spriteWidth / 2) > rect.x &&
            player.y + player.height > rect.y &&
            player.y + (spriteWidth / 2) < rect.y + rect.height
        ) {

            if (player.vy > 0) {
                player.y = rect.y - player.height;
                player.vy = 0;
                player.isJumping = false;
            }
            else if (player.vy < 0) {
                player.y = rect.y + rect.height;
                player.vy = 0;

            }


        }
    }
}



gameLoop()
