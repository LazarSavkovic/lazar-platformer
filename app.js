const spriteWidth = 64;
const spriteHeight = 64;

function createBackground() {


    const backgroundCanvas = document.getElementById('backgroundCanvas')
    backgroundCanvas.height = spriteHeight * 12;
    backgroundCanvas.width = window.innerWidth;

    const bc = backgroundCanvas.getContext('2d')

    function drawBackground() {


        bc.fillStyle = 'rgb(52,124,255)';
        bc.fillRect(0, 0, window.innerWidth, spriteHeight * 3)
        bc.fillStyle = 'rgb(152,130,237)';
        bc.fillRect(0, spriteHeight * 3, window.innerWidth, spriteHeight)
        bc.fillStyle = 'rgb(52,124,255)';
        bc.fillRect(0, spriteHeight * 3 + 15, window.innerWidth, 15)
        bc.fillStyle = 'rgb(232,135,229)';
        bc.fillRect(0, spriteHeight * 4, window.innerWidth, spriteHeight * 2)
        bc.fillStyle = 'rgb(152,130,237)';
        bc.fillRect(0, spriteHeight * 4 + 15, window.innerWidth, 15)
        bc.fillStyle = 'rgb(254,145,202)';
        bc.fillRect(0, spriteHeight * 5, window.innerWidth, window.innerHeight / 7)
        bc.fillStyle = 'rgb(232,135,229)';
        bc.fillRect(0, spriteHeight * 5 + 15, window.innerWidth, 15)
        bc.fillStyle = 'rgb(81,112,159)';
        bc.fillRect(0, spriteHeight * 6, window.innerWidth, spriteHeight * 6)
        bc.fillStyle = 'rgb(61,91,142)';
        bc.fillRect(0, spriteHeight * 6 + 15, window.innerWidth, 15)
        bc.fillStyle = 'rgb(61,91,142)';
        bc.fillRect(0, spriteHeight * 6 + 45, window.innerWidth, 8)
        bc.fillStyle = 'rgb(198,188,216)';
        bc.fillRect(0, spriteHeight * 6 + 5, window.innerWidth, 8)
        bc.fillStyle = 'rgb(198,188,216)';
        bc.fillRect(0, spriteHeight * 6 + 35, window.innerWidth, 4)

    }
    drawBackground();
}
createBackground()

const tiles = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, 15, -1, -1, -1, 12, 13, 13, 13, 13, 13, 13, 14, -1, -1, -1, -1, 15, -1, -1, -1, -1, 15, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, 15, -1, -1, -1, -1, 15, -1, -1, -1, -1, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 1, 2, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, 3, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 5, 5, 6, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 12, 13, 13, 13, 14, -1, -1, -1, -1, 12, 13, 13, 13, 14, -1, -1, -1, -1, 0, 2, -1, -1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, -1, -1, -1, -1, 7, -1, -1, -1, 7, -1, -1, -1, -1, 7, -1, -1, -1, -1, 0, 1, 1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 1],
    [-1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, -1, -1, 4, 5, 5, 6, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, 7, -1, -1, -1, 7, -1, -1, -1, -1, 7, -1, -1, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 0, 1, 1, 2, -1, -1, -1, -1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5],
    [-1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, 4, 5, 5, 6, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, 7, -1, -1, -1, 7, -1, -1, -1, -1, 7, -1, -1, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5],
    [-1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, 4, 5, 5, 6, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, 7, -1, -1, -1, 7, -1, -1, -1, -1, 7, -1, -1, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 4, 5, 5, 6, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 5, 5, 5, 5, 5, 5, 5]
]



function createPlatforms() {
    const platforms = [];

    for (let row = 0; row < tiles.length; row++) {
        for (let cell = 0; cell < tiles[row].length; cell++) {
            if (tiles[row][cell] !== -1) {
                if ((tiles[row][cell - 1]) && ((tiles[row][cell - 1]) !== -1)) {
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
canvas.width = window.innerWidth;


const c = canvas.getContext('2d')


const JUMP_SPEED = 22;
const MOVE_SPEED = 5;
const GRAVITY = 1;
const startingPosition = 250;
let scroll = 0;


const animationFrameLimit = 1;
let animationFrameCurrent = 0;

const player = {
    x: startingPosition,
    y: 350,
    height: spriteHeight * 2,
    width: spriteWidth * 2,
    vy: 0,
    isJumping: false,
    lookingRight: true
}

const clouds = [
    {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 2
    },
    {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 2
    },
    {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 2
    },
    {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 2
    },
    {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 2
    },
    {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 2
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


function drawClouds() {

    cloudDrift += 0.3;

    for (let i = 0; i < clouds.length; i++) {
        c.drawImage(cloudImgs[i], clouds[i].x + cloudDrift, clouds[i].y, cloudImgs[i].width * 2, cloudImgs[i].height * 2)
    }




}

function drawPlayer() {
    if (player.lookingRight) {
        c.drawImage(
            playerSpritesheet,
            currentFrame * spriteWidth,
            0,
            spriteWidth,
            spriteHeight,
            player.x - scroll,
            player.y,
            player.width,
            player.height

        )
    } else {
        c.drawImage(
            playerSpritesheetFlipped,
            currentFrame * spriteWidth,
            0,
            spriteWidth,
            spriteHeight,
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
    if (keyState['ArrowRight']) {
        player.x += MOVE_SPEED
        detectHorizontalCollision()
        animate()
    }
    if (keyState['ArrowLeft']) {
        player.x -= MOVE_SPEED
        detectHorizontalCollision()
        animate()
    }
    requestAnimationFrame(continuousMovement)
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

    c.clearRect(0, 0, window.innerWidth, window.innerHeight)


    player.y += player.vy;
    player.vy += GRAVITY;

    detectVerticalCollision()

    // drawBackground()
    drawClouds()

    drawPlayer()
    drawPlatforms()


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
            player.x + 30 < rect.x + rect.width &&
            player.x + player.width - 30 > rect.x &&
            player.y + player.height > rect.y &&
            player.y + 35 < rect.y + rect.height
        ) {

            if (player.lookingRight) {
                player.x = rect.x - (player.width - 30)
            }
            else {
                player.x = rect.x + rect.width - 30

            }


        }
    }
}
function detectVerticalCollision() {


    for (let rect of platforms) {

        if (
            player.x + 30 < rect.x + rect.width &&
            player.x + player.width - 30 > rect.x &&
            player.y + player.height > rect.y &&
            player.y + 35 < rect.y + rect.height
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
