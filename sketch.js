var cat
var mouse
var bgImg;
var cat1, cat2, cat3, cat4;
var mouse1, mouse2, mouse3, mouse4;
var cat
var mouse
function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("images/garden.png")
    cat1 = loadImage("images/cat1.png")
    cat2 = loadImage("images/cat2.png")
    cat3 = loadImage("images/cat3.png")
    cat4 = loadImage("images/cat4.png") 
    mouse1 = loadImage("images/mouse1.png")
    mouse1 =  loadImage("images/mouse1.png")
    mouse1 =  loadImage("images/mouse1.png")
    mouse2 =  loadImage("images/mouse2.png")
    mouse3 = loadImage("images/mouse3.png")
    mouse4 =  loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(windowWidth,800);
    //crie os sprites de gato e rato aqui
    cat = createSprite(900,650)
    cat.addAnimation("catParado",cat1)
    cat.scale = 0.2
    cat.setCollider("circle",0,0,40)

    mouse = createSprite(100,650)
    mouse.addAnimation("mousePresente",mouse1)
    mouse.scale = 0.2

}

function draw() {
    background(bgImg)
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(cat.x - mouse.x > (cat.width - mouse.width)/2){
    
        cat.addAnimation("gatofeliz",cat4)
        cat.changeAnimation("gatofeliz")
        cat.x = 300
        cat.scale= 0.2

    }
    
    drawSprites();
}


function keyPressed(){
  //Para mover e alterar a animação, escreva o código aqui
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseProv",mouse2)
        mouse.changeAnimation("mouseProv")              
        mouse.frameDelay = 25

        cat.velocityX= -5
    }   

}
