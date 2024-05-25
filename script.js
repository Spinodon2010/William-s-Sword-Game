// screen changing equipment
let animation = {
  x: 0,
  y: 0,
}

let animationDiv = document.getElementById('animationDiv');
animationDiv.style.transform = 'translate(' + animation.x + 'px, ' + animation.y + 'px)';
function animate() {
  animation.y += 16;
  animationDiv.style.transform = 'translate(' + animation.x + 'px, ' + animation.y + 'px)';
  window.requestAnimationFrame(animate)
}

animate()

let spinSwordAngle = 45
let spinSword = document.getElementById('animatedSwordSelect')
spinSword.style.transform = "translate(276px, 0px) rotate(" + spinSwordAngle + "deg)"
function spinSwordAnimation() {
  spinSwordAngle += 1.4
  spinSword.style.transform = "translate(276px, 0px) rotate(" + spinSwordAngle + "deg)"
  window.requestAnimationFrame(spinSwordAnimation)
}
spinSwordAnimation()
document.getElementById("creditsMenu").style.display = "none";
document.getElementById("selectSwords").style.display = "none";
document.getElementById("menu1").style.display = "block";
document.getElementById("unlockScreen").style.display = "none";
document.getElementById("levelSelectScreen").style.display = "none";
document.getElementById("endOfLevelScreen").style.display = "none";
document.getElementById("endOfLevelScreenOneLife").style.display = "none";




function creditsScreen() {
  animation.y = -800
  setTimeout(() => {
    document.getElementById("creditsMenu").style.display = "block";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById("endOfLevelScreenOneLife").style.display = "none";
  }, 800);
}



function mainMenuScreen() {
  animation.y = -800
  setTimeout(() => {
    onplaying = false
    document.getElementById('gameScreen').style.backgroundImage = "url('main/assets/mainBg.png')";
    document.getElementById("endOfLevelScreen").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("menu1").style.display = "block";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById("endOfLevelScreenOneLife").style.display = "none";
  }, 800);
  //enemies delete
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].delete()
  }
  //platforms delete
  for (let i = 0; i < currentPlatforms.length; i++) {
    currentPlatforms[i].delete()
  }
  //spikes delete
  for (let i = 0; i < currentSpikes.length; i++) {
    currentSpikes[i].delete()
  }
  //portals delete
  for (let i = 0; i < currentPortal.length; i++) {
    currentPortal[i].delete()
  }
  for (let i = 0; i < swords.length; i++) {
    swords[i].delete()
  }
  for (let i = 0; i < bolts.length; i++) {
    bolts[i].remove()
  }
  // to hide the player we simply do...
  PLAYEROBJ.inGame = false;
}

function swordsScreen() {
  animation.y = -800
  setTimeout(() => {
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "block";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById("endOfLevelScreenOneLife").style.display = "none";
  }, 800);
}
function unlockScreen() {
  animation.y = -800
  setTimeout(() => {
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "block";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById("endOfLevelScreenOneLife").style.display = "none";
  }, 800);
}
function playLevelsScreen() {
  if (swordType !== "Select Sword" && swordType !== "Select Sword") {
    animation.y = -800
    setTimeout(() => {
      document.getElementById("creditsMenu").style.display = "none";
      document.getElementById("menu1").style.display = "none";
      document.getElementById("selectSwords").style.display = "none";
      document.getElementById("unlockScreen").style.display = "none";
      document.getElementById("levelSelectScreen").style.display = "block";
      document.getElementById("endOfLevelScreenOneLife").style.display = "none";
    }, 800);
  } else {
    alert('Select a sword before playing!')
  }
}



let selectSwordsInput = document.getElementById('select')
let swordType = selectSwordsInput.value
function updateWeapon() {
  swordType = selectSwordsInput.value
  if (swordType == "Mechanical Level 1") {
    swordType = selectSwordsInput.value
    swordsEquiped = {
      m1: true,
      m2: false,
      m3: false,
      s1: false,
      s2: false,
      s3: false,
      f1: false,
      f2: false,
      f3: false,
      i1: false,
      i2: false,
      i3: false
    }
    alert('You have equiped the ' + swordType + ' sword.')
  }

  if (swordType == "Mechanical Level 2") {
    if (swordsInInventory.m2 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: true,
        m3: false,
        s1: false,
        s2: false,
        s3: false,
        f1: false,
        f2: false,
        f3: false,
        i1: false,
        i2: false,
        i3: false
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }

  if (swordType == "Mechanical Level 3") {
    if (swordsInInventory.m3 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: false,
        m3: true,
        s1: false,
        s2: false,
        s3: false,
        f1: false,
        f2: false,
        f3: false,
        i1: false,
        i2: false,
        i3: false
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }

  if (swordType == "Solar Level 1") {
    if (swordsInInventory.s1 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: false,
        m3: false,
        s1: true,
        s2: false,
        s3: false,
        f1: false,
        f2: false,
        f3: false,
        i1: false,
        i2: false,
        i3: false
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }

  if (swordType == "Solar Level 2") {
    if (swordsInInventory.s2 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: false,
        m3: false,
        s1: false,
        s2: true,
        s3: false,
        f1: false,
        f2: false,
        f3: false,
        i1: false,
        i2: false,
        i3: false
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }

  if (swordType == "Solar Level 3") {
    if (swordsInInventory.s3 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: false,
        m3: false,
        s1: false,
        s2: false,
        s3: true,
        f1: false,
        f2: false,
        f3: false,
        i1: false,
        i2: false,
        i3: false
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }

  if (swordType == "Fire Level 1") {
    if (swordsInInventory.f1 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: false,
        m3: false,
        s1: false,
        s2: false,
        s3: false,
        f1: true,
        f2: false,
        f3: false,
        i1: false,
        i2: false,
        i3: false
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }

  if (swordType == "Fire Level 2") {
    if (swordsInInventory.f2 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: false,
        m3: false,
        s1: false,
        s2: false,
        s3: false,
        f1: false,
        f2: true,
        f3: false,
        i1: false,
        i2: false,
        i3: false
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }

  if (swordType == "Fire Level 3") {
    if (swordsInInventory.f3 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: false,
        m3: false,
        s1: false,
        s2: false,
        s3: false,
        f1: false,
        f2: false,
        f3: true,
        i1: false,
        i2: false,
        i3: false
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }

  if (swordType == "Ice Level 1") {
    if (swordsInInventory.i1 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: false,
        m3: false,
        s1: false,
        s2: false,
        s3: false,
        f1: false,
        f2: false,
        f3: false,
        i1: true,
        i2: false,
        i3: false
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }

  if (swordType == "Ice Level 2") {
    if (swordsInInventory.i2 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: false,
        m3: false,
        s1: false,
        s2: false,
        s3: false,
        f1: false,
        f2: false,
        f3: false,
        i1: false,
        i2: true,
        i3: false
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }

  if (swordType == "Ice Level 3") {
    if (swordsInInventory.i3 == true) {
      swordType = selectSwordsInput.value
      swordsEquiped = {
        m1: false,
        m2: false,
        m3: false,
        s1: false,
        s2: false,
        s3: false,
        f1: false,
        f2: false,
        f3: false,
        i1: false,
        i2: false,
        i3: true
      }
      alert('You have equiped the ' + swordType + ' sword.')
    } else {
      swordType = "Mechanical Level 1"
      selectSwordsInput.value = "Mechanical Level 1"
      alert('You do not own this sword.')
    }
  }
}

let starDust = 0
let starDustCounter = document.getElementById('starDustText')
starDustCounter.textContent = "Star Dust: " + "" + starDust + ""
function updateStarDust() {
  starDustCounter.textContent = "Star Dust: " + "" + starDust + ""
  window.requestAnimationFrame(updateStarDust)
}
updateStarDust()
let newSword = "None"

let swordsEquiped = {
  m1: true,
  m2: false,
  m3: false,
  s1: false,
  s2: false,
  s3: false,
  f1: false,
  f2: false,
  f3: false,
  i1: false,
  i2: false,
  i3: false
}
let swordsInInventory = {
  m1: true,
  m2: false,
  m3: false,
  s1: false,
  s2: false,
  s3: false,
  f1: false,
  f2: false,
  f3: false,
  i1: false,
  i2: false,
  i3: false
}

function newWeapon() {
  if (starDust > 999) {
    starDust -= 1000
    for (let i = Math.floor(Math.random() * 11 + 1); i > 0;) {
      if (i == 1) {
        newSword = "Mechanical Level 1"
        swordsInInventory.m1 = true
      } else if (i == 2) {
        newSword = "Mechanical Level 2"
        swordsInInventory.m2 = true
      } else if (i == 3) {
        newSword = "Mechanical Level 3"
        swordsInInventory.m3 = true
      } else if (i == 4) {
        newSword = "Solar Level 1"
        swordsInInventory.s1 = true
      } else if (i == 5) {
        newSword = "Solar Level 2"
        swordsInInventory.s2 = true
      } else if (i == 6) {
        newSword = "Solar Level 3"
        swordsInInventory.s3 = true
      } else if (i == 7) {
        newSword = "Fire Level 1"
        swordsInInventory.f1 = true
      } else if (i == 8) {
        newSword = "Fire Level 2"
        swordsInInventory.f2 = true
      } else if (i == 9) {
        newSword = "Fire Level 3"
        swordsInInventory.f3 = true
      } else if (i == 10) {
        newSword = "Ice Level 1"
        swordsInInventory.i1 = true
      } else if (i == 11) {
        newSword = "Ice Level 2"
        swordsInInventory.i2 = true
      } else if (i == 12) {
        newSword = "Ice Level 3"
        swordsInInventory.i3 = true
      }
      i -= i
    }
    alert("You Earned The " + newSword + " Sword!! Good Job!")
  } else {
    alert("You don't have enough Star Dust! Earn more by completing levels!")
  }
}

/////////////////////
/////////////////////
/////////////////////
/////////////////////
//NEW SECTION: PLAYING LEVELS;

//MAKING PLAYER
let player = document.createElement('img')
player.src = './assets/animationsForPlayer/standing.png'
player.id = 'player'
player.style.position = "absolute"
player.style.transform = "scaleX(-1)"
player.style.display = "none"
player.style.width = "50px"
player.style.height = "75px"
document.getElementById('gameScreen').appendChild(player)

//PLAYEROBJ
let PLAYEROBJ = {
  x: 120,
  y: 0,
  startX: 120,
  startY: 0,
  yke: 0,
  inGame: false,
  time: 0,
  frame: 1,
  dir: -1,
  cooldown: true,
  health: 75
}

let onPlatform = false

////////
//Setting up a health bar

let healthBar = document.getElementById('playerHealth')
healthBar.style.width = "" + PLAYEROBJ.health + "px"


///Lev 1
function playLevel1() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 100;
    PLAYEROBJ.startY = 100;
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    enemies.push(new enemy(document.createElement('img'), 300, 100, 300, 100, "upDown", 1, 'regular'))
    // currentPlatforms.push(new platform(100, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    // currentPlatforms.push(new platform(150, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    // currentPlatforms.push(new platform(200, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    // currentPlatforms.push(new platform(50, 300, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(0, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(150, 350, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(50, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(100, 350, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(200, 300, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(250, 300, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 300, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(650, 300, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(850, 200, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(900, 200, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(950, 200, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(i * 50, 550, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
      currentSpikes.push(new spike(i * 50, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    }
    currentPortal.push(new portal(950, 100, document.createElement('img'), './assets/portal.png'))



    PLAYEROBJ.inGame = true
    player.style.display = "block"
    // enemies.push(new enemy(document.createElement('img'), 300, 100, 100, 100, "upDown", 1, 'regular'))
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/rockBg.png')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}
///Lev 2
function playLevel2() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 25;
    PLAYEROBJ.startY = 100;
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    currentPlatforms.push(new platform(0, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(50, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(150, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(200, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(350, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(400, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(700, 200, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(700, 200, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(i * 50, 550, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
      currentSpikes.push(new spike(i * 50, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    }
    currentPortal.push(new portal(950, 100, document.createElement('img'), './assets/portal.png'))
    currentPlatforms.push(new platform(950, 150, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    //type, x, y, sx, sy, path, dir, form
    enemies.push(new enemy(document.createElement('img'), 500, 100, 500, 100, "upDown", 1, 'regular'))
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/rockBg.png')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 3
function playLevel3() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 25;
    PLAYEROBJ.startY = 100;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    currentPlatforms.push(new platform(0, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(50, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(250, 450, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(300, 450, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(550, 300, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(600, 300, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(650, 300, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    enemies.push(new enemy(document.createElement('img'), 250, 450, 250, 450, "upDown", 1, 'regular'))
    enemies.push(new enemy(document.createElement('img'), 550, 200, 550, 200, "leftRight", 1, 'regular'))
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(i * 50, 550, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
      currentSpikes.push(new spike(i * 50, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    }
    currentPortal.push(new portal(950, 100, document.createElement('img'), './assets/portal.png'))
    currentPlatforms.push(new platform(950, 150, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/rockBg.png')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 4
function playLevel4() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 200;
    PLAYEROBJ.startY = 150;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    currentPlatforms.push(new platform(0, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))

    enemies.push(new enemy(document.createElement('img'), 450, 150, 450, 150, "leftRight", 1, 'regular'))
    enemies.push(new enemy(document.createElement('img'), 250, 150, 250, 150, "leftRight", 1, 'regular'))
    enemies.push(new enemy(document.createElement('img'), 450, 325, 450, 325, "leftRight", 1, 'regular'))
    enemies.push(new enemy(document.createElement('img'), 250, 325, 250, 325, "leftRight", 1, 'regular'))
    enemies.push(new enemy(document.createElement('img'), 800, 200, 800, 200, "upDown", 1, 'regular'))

    for (let i = 0; i < 15; i++) {
      currentPlatforms.push(new platform(i * 50, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
      currentPlatforms.push(new platform(i * 50, 50, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    }
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(i * 50, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
      currentPlatforms.push(new platform(i * 50, 550, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
      currentSpikes.push(new spike(i * 50, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    }
    currentPortal.push(new portal(25, 325, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/rockBg.png')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 5
function playLevel5() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 0;
    PLAYEROBJ.startY = 300;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 300, 400, 300, 400, "leftRight", 1, 'regular'))
    enemies.push(new enemy(document.createElement('img'), 550, 400, 550, 400, "leftRight", 1, 'regular'))
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(i * 50, 550, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    }
    currentSpikes.push(new spike(55, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(105, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(155, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(305, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(355, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(405, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(555, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(605, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(655, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(925, 500, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/rockBg.png')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}


//// Play Level 6
function playLevel6() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 60;
    PLAYEROBJ.startY = 150;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 300, 400, 300, 400, "leftRight", 1, 'regular'))
    enemies.push(new enemy(document.createElement('img'), 50, 400, 50, 400, "leftRight", 1, 'regular'))
    enemies.push(new enemy(document.createElement('img'), 600, 400, 600, 400, "leftRight", 1, 'regular'))
    currentPlatforms.push(new platform(0, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(0, 200, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(0, 150, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(0, 100, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(0, 50, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(0, 0, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(50, 250, document.createElement('img'), './assets/platforms/metal.png', 40, 50))
    currentPlatforms.push(new platform(160, 250, document.createElement('img'), './assets/platforms/metal.png', 40, 50))
    currentPlatforms.push(new platform(200, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(200, 200, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(200, 150, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(200, 100, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(200, 50, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(200, 0, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(200, 500, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 525, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(600, 425, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    //// Upper curve section and rotated spikes
    currentPlatforms.push(new platform(700, 100, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(650, 50, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentSpikes.push(new spike(650, 100, document.createElement('img'), './assets/platforms/spike.png', 180))
    currentPlatforms.push(new platform(750, 50, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentSpikes.push(new spike(750, 100, document.createElement('img'), './assets/platforms/spike.png', 180))
    currentPlatforms.push(new platform(600, 0, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentSpikes.push(new spike(600, 50, document.createElement('img'), './assets/platforms/spike.png', 180))
    currentPlatforms.push(new platform(800, 0, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentSpikes.push(new spike(800, 50, document.createElement('img'), './assets/platforms/spike.png', 180))
    currentSpikes.push(new spike(850, 0, document.createElement('img'), './assets/platforms/spike.png', 90))
    currentSpikes.push(new spike(550, 0, document.createElement('img'), './assets/platforms/spike.png', -90))
    currentPortal.push(new portal(700, 150, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/rockBg.png')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 7
function playLevel7() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 50;
    PLAYEROBJ.startY = 150;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 325, 400, 325, 400, "upDown", 1, 'regular'))
    currentPlatforms.push(new platform(0, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(50, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(100, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(250, 200, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(250, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(250, 300, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(250, 350, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(250, 400, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(250, 450, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(250, 500, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(250, 550, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPlatforms.push(new platform(450, 0, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 50, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 100, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 150, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 200, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 250, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 450, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 500, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(450, 550, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPortal.push(new portal(700, 150, document.createElement('img'), './assets/portal.png'))
    currentPlatforms.push(new platform(700, 350, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(750, 350, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    currentPlatforms.push(new platform(650, 350, document.createElement('img'), './assets/platforms/metal.png', 50, 50))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/rockBg.png')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 8
function playLevel8() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 850;
    PLAYEROBJ.startY = 150;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 450, 50, 450, 50, "stationary", 1, 'sniper'))
    currentPlatforms.push(new platform(450, 108, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(850, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(850, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(850, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(800, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(750, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(700, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(600, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(600, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(550, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(500, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(300, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(250, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(200, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))

    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(100, 200, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/iceBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 9
function playLevel9() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 850;
    PLAYEROBJ.startY = 150;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 450, 50, 450, 50, "stationary", 1, 'sniper'))
    currentPlatforms.push(new platform(450, 108, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(850, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(i * 50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    }
    for (let i = 0; i < 40; i++) {
      var randomX = Math.floor(Math.random() * 20)
      var randomY = Math.floor(Math.random() * -5)
      currentPlatforms.push(new platform(randomX * 50, randomY * 50 + 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    }

    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(100, 200, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/iceBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 10
function playLevel10() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 850;
    PLAYEROBJ.startY = 150;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 417, 500, 417, 50, "stationary", 1, 'sniper'))
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(i * 50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    }
    currentPlatforms.push(new platform(350, 500, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(350, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(350, 200, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(600, 400, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(600, 250, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(600, 100, document.createElement('img'), './assets/platforms/ice.png', 50, 50))


    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(475, 100, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/iceBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 11
function playLevel11() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 625;
    PLAYEROBJ.startY = 475;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 50, 50, 50, 50, "stationary", 1, 'sniper'))
    currentPlatforms.push(new platform(50, 100, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(50, 150, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(50, 200, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(50, 250, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(50, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(50, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(50, 400, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(50, 450, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(50, 500, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(i * 50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    }

    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(475, 500, document.createElement('img'), './assets/portal.png'))
    currentPlatforms.push(new platform(400, 400, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(400, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(400, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(400, 250, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(400, 200, document.createElement('img'), './assets/platforms/ice.png', 50, 50))

    currentPlatforms.push(new platform(550, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(550, 500, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(550, 450, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(550, 400, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(550, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(550, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(550, 250, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(550, 200, document.createElement('img'), './assets/platforms/ice.png', 50, 50))

    currentPlatforms.push(new platform(500, 200, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(450, 200, document.createElement('img'), './assets/platforms/ice.png', 50, 50))

    currentPlatforms.push(new platform(600, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(650, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(700, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(750, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(800, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(950, 500, document.createElement('img'), './assets/platforms/ice.png', 50, 50))

    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/iceBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 12
function playLevel12() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 450;
    PLAYEROBJ.startY = -25;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 150, 500, 50, 50, "stationary", 1, 'sniper'))
    enemies.push(new enemy(document.createElement('img'), 750, 500, 50, 50, "stationary", 1, 'sniper'))

    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(i * 50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    }

    for (let i = 0; i < 9; i++) {
      currentPlatforms.push(new platform(450, i * 50 + 100, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    }

    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(50, 500, document.createElement('img'), './assets/portal.png'))
    currentPlatforms.push(new platform(900, 500, document.createElement('img'), './assets/portal.png', 50, 50))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/iceBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 13
function playLevel13() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 450;
    PLAYEROBJ.startY = -25;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 150, 500, 50, 50, "stationary", 1, 'sniper'))
    enemies.push(new enemy(document.createElement('img'), 750, 500, 50, 50, "stationary", 1, 'sniper'))

    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(i * 50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    }

    for (let i = 0; i < 9; i++) {
      currentPlatforms.push(new platform(450, i * 50 + 100, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    }

    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(900, 500, document.createElement('img'), './assets/portal.png'))
    currentPlatforms.push(new platform(50, 500, document.createElement('img'), './assets/portal.png', 50, 50))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/iceBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 14
function playLevel14() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 50;
    PLAYEROBJ.startY = 200;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    currentPlatforms.push(new platform(50, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(550, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(600, 350, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(600, 300, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(600, 250, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(600, 200, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    currentPlatforms.push(new platform(550, 200, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    enemies.push(new enemy(document.createElement('img'), 400, 50, 400, 50, "leftRight", 1, 'sniper'))
    enemies.push(new enemy(document.createElement('img'), 400, 500, 400, 500, "leftRight", 1, 'sniper'))

    // for (let i = 0; i < 20; i++) {
    //   currentPlatforms.push(new platform(i*50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    // }

    for (let i = 0; i < 4; i++) {
      currentPlatforms.push(new platform(450, i * 50, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    }
    for (let i = 0; i < 5; i++) {
      currentPlatforms.push(new platform(450, 550 - (i * 50), document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    }

    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(900, 250, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/iceBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 15
function playLevel15() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 50;
    PLAYEROBJ.startY = 200;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    currentPlatforms.push(new platform(50, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(200, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(350, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(500, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(650, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(800, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(950, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    enemies.push(new enemy(document.createElement('img'), 200, 100, 200, 100, "upDown", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 500, 100, 600, 100, "upDown", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 800, 100, 800, 100, "upDown", 1, 'electric'))
    // enemies.push(new enemy(document.createElement('img'), 400, 500, 400, 500, "leftRight", 1, 'sniper'))

    // for (let i = 0; i < 20; i++) {
    //   currentPlatforms.push(new platform(i*50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    // }


    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(900, 250, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/solarBg.jpg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 16
function playLevel16() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 50;
    PLAYEROBJ.startY = 200;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = "" + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    currentPlatforms.push(new platform(50, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(200, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(350, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(500, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(650, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(800, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(950, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    enemies.push(new enemy(document.createElement('img'), 200, 250, 200, 250, "leftRight", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 800, 250, 800, 250, "leftRight", 1, 'electric'))
    // enemies.push(new enemy(document.createElement('img'), 400, 500, 400, 500, "leftRight", 1, 'sniper'))

    // for (let i = 0; i < 20; i++) {
    //   currentPlatforms.push(new platform(i*50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    // }


    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(900, 250, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/solarBg.jpg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 17
function playLevel17() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 50;
    PLAYEROBJ.startY = 200;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    }
    for (let i = 0; i < 5; i++) {
      currentPlatforms.push(new platform(300, 550 - i * 50, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    }
    for (let i = 0; i < 7; i++) {
      currentSpikes.push(new spike(350 + i * 50, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    }
    currentPlatforms.push(new platform(200, 500, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(700, 500, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(700, 450, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(700, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    enemies.push(new enemy(document.createElement('img'), 200, 250, 200, 250, "leftRight", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 800, 250, 800, 250, "leftRight", 1, 'electric'))
    // enemies.push(new enemy(document.createElement('img'), 400, 500, 400, 500, "leftRight", 1, 'sniper'))

    // for (let i = 0; i < 20; i++) {
    //   currentPlatforms.push(new platform(i*50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    // }


    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(900, 250, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/solarBg.jpg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 18
function playLevel18() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 50;
    PLAYEROBJ.startY = 200;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
      currentSpikes.push(new spike(i * 50, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    }
    currentPlatforms.push(new platform(0, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(50, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(100, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(400, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(450, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(500, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))

    currentPlatforms.push(new platform(650, 250, document.createElement('img'), './assets/platforms/invis.png', 50, 50))
    currentPlatforms.push(new platform(650, 300, document.createElement('img'), './assets/platforms/invis.png', 50, 50))
    currentPlatforms.push(new platform(650, 200, document.createElement('img'), './assets/platforms/invis.png', 50, 50))

    currentPlatforms.push(new platform(800, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(800, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(850, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(900, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    enemies.push(new enemy(document.createElement('img'), 200, 250, 200, 250, "leftRight", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 800, 250, 800, 250, "leftRight", 1, 'electric'))
    // enemies.push(new enemy(document.createElement('img'), 400, 500, 400, 500, "leftRight", 1, 'sniper'))

    // for (let i = 0; i < 20; i++) {
    //   currentPlatforms.push(new platform(i*50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    // }


    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(900, 250, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/solarBg.jpg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 19
function playLevel19() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 50;
    PLAYEROBJ.startY = 200;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
      if (i < 19) {
        currentPlatforms.push(new platform(50 + 50 * i, 400, document.createElement('img'), './assets/platforms/invis.png', 50, 50))
      }
      currentSpikes.push(new spike(i * 50, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    }
    currentPlatforms.push(new platform(50, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))


    enemies.push(new enemy(document.createElement('img'), -100, 300, -100, 300, "stationary", 1, 'sniper'))
    currentPlatforms.push(new platform(-100, 360, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(-50, 360, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    enemies.push(new enemy(document.createElement('img'), 300, 250, 300, 250, "upDown", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 800, 250, 800, 250, "upDown", 1, 'electric'))
    // enemies.push(new enemy(document.createElement('img'), 400, 500, 400, 500, "leftRight", 1, 'sniper'))

    // for (let i = 0; i < 20; i++) {
    //   currentPlatforms.push(new platform(i*50, 550, document.createElement('img'), './assets/platforms/ice.png', 50, 50))
    // }


    // currentSpikes.push(new spike(250, 150, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentPortal.push(new portal(900, 250, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/solarBg.jpg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 20
function playLevel20() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 50;
    PLAYEROBJ.startY = 50;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    currentPlatforms.push(new platform(50, 200, document.createElement('img'), './assets/platforms/solar.png', 50, 50))


    enemies.push(new enemy(document.createElement('img'), 333, 300, 333, 300, "leftRight", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 666, 300, 666, 300, "leftRight", 1, 'electric'))


    currentPlatforms.push(new platform(50, 550, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(250, 550, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(350, 550, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(550, 550, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(750, 550, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(900, 550, document.createElement('img'), './assets/platforms/solar.png', 50, 50))

    currentPlatforms.push(new platform(50, 200, document.createElement('img'), './assets/platforms/invis.png', 50, 50))
    currentPlatforms.push(new platform(250, 200, document.createElement('img'), './assets/platforms/invis.png', 50, 50))
    currentPlatforms.push(new platform(350, 200, document.createElement('img'), './assets/platforms/invis.png', 50, 50))
    currentPlatforms.push(new platform(550, 200, document.createElement('img'), './assets/platforms/invis.png', 50, 50))
    currentPlatforms.push(new platform(750, 200, document.createElement('img'), './assets/platforms/invis.png', 50, 50))


    currentSpikes.push(new spike(50, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(250, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(350, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(550, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(750, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
    currentSpikes.push(new spike(900, 500, document.createElement('img'), './assets/platforms/spike.png', 0))

    currentPortal.push(new portal(900, 250, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"

    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/solarBg.jpg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 21
function playLevel21() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 250;
    PLAYEROBJ.startY = 450;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 75, 490, 75, 490, "stationary", 1, 'sniper'))
    enemies.push(new enemy(document.createElement('img'), 700, 460, 700, 460, "stationary", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 700, 260, 700, 460, "stationary", 1, 'electric'))
    currentPortal.push(new portal(900, 50, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    }
    for (let i = 0; i < 17; i++) {
      currentPlatforms.push(new platform(950 - 50 * i, 150, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    }
    currentPlatforms.push(new platform(0, 500, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(0, 450, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(0, 400, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(950, 500, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    currentPlatforms.push(new platform(0, 300, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    for (let i = 0; i < 17; i++) {
      currentPlatforms.push(new platform(50 * i, 350, document.createElement('img'), './assets/platforms/solar.png', 50, 50))
    }
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/solarBg.jpg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 22
function playLevel22() {
  canShoot = true
  oneLife = false
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 250;
    PLAYEROBJ.startY = 450;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 700, 460, 700, 460, "stationary", 1, 'rapidFire'))
    enemies.push(new enemy(document.createElement('img'), 700, 260, 700, 460, "stationary", 1, 'electric'))
    currentPortal.push(new portal(900, 50, document.createElement('img'), './assets/portal.png'))
    enemies.push(new enemy(document.createElement('img'), 700, 50, 700, 50, "stationary", 1, 'rapidFire'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    for (let i = 0; i < 17; i++) {
      currentPlatforms.push(new platform(950 - 50 * i, 150, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    currentPlatforms.push(new platform(0, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(0, 450, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(0, 400, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(950, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(0, 300, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    for (let i = 0; i < 17; i++) {
      currentPlatforms.push(new platform(50 * i, 350, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/fireBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 23
function playLevel23() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 475;
    PLAYEROBJ.startY = 425;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 460, 180, 460, 180, "stationary", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 100, 485, 100, 485, "stationary", 1, 'rapidFire'))
    enemies.push(new enemy(document.createElement('img'), 850, 485, 850, 485, "stationary", 1, 'rapidFire'))
    currentPortal.push(new portal(475, 50, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    currentPlatforms.push(new platform(475, 350, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(350, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(600, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(600, 200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(350,200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/fireBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 24
function playLevel24() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 25;
    PLAYEROBJ.startY = 400;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    // enemies.push(new enemy(document.createElement('img'), 460, 180, 460, 180, "stationary", 1, 'electric'))
    // enemies.push(new enemy(document.createElement('img'), 100, 485, 100, 485, "stationary", 1, 'rapidFire'))
    enemies.push(new enemy(document.createElement('img'), 13, 45, 13, 45, "stationary", 1, 'rapidFire'))
    enemies.push(new enemy(document.createElement('img'), 890, 45, 890, 45, "stationary", 1, 'rapidFire'))
    currentPortal.push(new portal(925, 425, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    currentPlatforms.push(new platform(100, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(150, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(250, 450, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(300, 450, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(400, 400, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(450, 400, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(550, 350, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(600, 350, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(600, 350, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(700, 350, document.createElement('img'), './assets/platforms/lava.png', 200, 200))
    currentPlatforms.push(new platform(0, 100, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(0, 100, document.createElement('img'), './assets/platforms/lava.png', 75, 50))
    currentPlatforms.push(new platform(925, 100, document.createElement('img'), './assets/platforms/lava.png', 75, 50))
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/fireBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 25
function playLevel25() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 50;
    PLAYEROBJ.startY = 200;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 200, 240, 200, 240, "stationary", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 450, 475, 450, 475, "leftRight", 1, 'rapidFire'))
    enemies.push(new enemy(document.createElement('img'), 675, 140, 675, 140, "stationary", 1, 'electric'))
    currentPortal.push(new portal(850, 450, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    for (let i = 0; i < 7; i++) {
      currentPlatforms.push(new platform(700, 500-i*50, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    currentPlatforms.push(new platform(0, 400, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(50, 400, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(200, 300, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(250, 300, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(400, 200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    currentPlatforms.push(new platform(450, 200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(350, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(600, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(600, 200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(350,200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/fireBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 26
function playLevel26() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 475;
    PLAYEROBJ.startY = 425;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    // enemies.push(new enemy(document.createElement('img'), 460, 180, 460, 180, "stationary", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 75, 340, 75, 340, "stationary", 1, 'rapidFire'))
    enemies.push(new enemy(document.createElement('img'), 825, 340, 825, 340, "stationary", 1, 'rapidFire'))
    currentPortal.push(new portal(725, 450, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    for (let i = 0; i < 20; i++) {
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    for (let i = 0; i < 15; i++) {
      var randX = Math.floor(Math.random()*19)
      var randY = Math.floor(Math.random()*6)
      currentPlatforms.push(new platform(randX*50, randY*50, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    currentPlatforms.push(new platform(50, 400, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    currentPlatforms.push(new platform(300, 400, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    currentPlatforms.push(new platform(550, 400, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    currentPlatforms.push(new platform(800, 400, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    // currentPlatforms.push(new platform(350, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(600, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(600, 200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(350,200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/fireBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}

//// Play Level 27
function playLevel27() {
  oneLife = false
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 75;
    PLAYEROBJ.startY = 100;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 260, 340, 260, 340, "stationary", 1, 'electric'))
    enemies.push(new enemy(document.createElement('img'), 575, 150, 575, 150, "stationary", 1, 'rapidFire'))
    // enemies.push(new enemy(document.createElement('img'), 850, 485, 850, 485, "stationary", 1, 'rapidFire'))
    currentPortal.push(new portal(850, 325, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    for (let i = 0; i < 20; i++) {
      currentSpikes.push(new spike(i * 50, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    currentPlatforms.push(new platform(50, 300, document.createElement('img'), './assets/platforms/lava.png', 100, 100))
    currentPlatforms.push(new platform(250, 400, document.createElement('img'), './assets/platforms/lava.png', 100, 100))
    currentPlatforms.push(new platform(250, 50, document.createElement('img'), './assets/platforms/lava.png', 100, 100))
    currentPlatforms.push(new platform(550, 200, document.createElement('img'), './assets/platforms/lava.png', 100, 100))
    currentPlatforms.push(new platform(450, 300, document.createElement('img'), './assets/platforms/lava.png', 100, 100))
    currentPlatforms.push(new platform(650, 300, document.createElement('img'), './assets/platforms/lava.png', 100, 100))
    // currentPlatforms.push(new platform(350, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(600, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(600, 200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(350,200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/fireBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}
// One Life Functions & Vars
let oneLife = false
//// Play Level 28
function playLevel28() {
  oneLife = true
  canShoot = true
  animation.y = -800
  setTimeout(() => {
    PLAYEROBJ.startX = 75;
    PLAYEROBJ.startY = 300;
    PLAYEROBJ.yke = 0
    PLAYEROBJ.time = 0
    PLAYEROBJ.x = PLAYEROBJ.startX;
    PLAYEROBJ.y = PLAYEROBJ.startY;
    document.getElementById("endOfLevelScreen").style.display = "none";
    PLAYEROBJ.health = 75
    healthBar.style.width = " " + PLAYEROBJ.health + "px"
    healthBar.style.left = "-10000px"
    enemies.push(new enemy(document.createElement('img'), 460, 180, 460, 180, "stationary", 1, 'boss'))
    currentPortal.push(new portal(900, 250, document.createElement('img'), './assets/portal.png'))
    PLAYEROBJ.inGame = true
    onplaying = true
    player.style.display = "block"
    for (let i = 0; i < 20; i++) {
      currentSpikes.push(new spike(i * 50, 500, document.createElement('img'), './assets/platforms/spike.png', 0))
      currentPlatforms.push(new platform(50 * i, 550, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    }
    currentPlatforms.push(new platform(25, 0, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    currentPlatforms.push(new platform(25, 400, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    currentPlatforms.push(new platform(275, 0, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    currentPlatforms.push(new platform(275, 400, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    currentPlatforms.push(new platform(525, 0, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    currentPlatforms.push(new platform(525, 400, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    currentPlatforms.push(new platform(775, 0, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    currentPlatforms.push(new platform(775, 400, document.createElement('img'), './assets/platforms/lava.png', 150, 150))
    // currentPlatforms.push(new platform(350, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(600, 500, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(600, 200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    // currentPlatforms.push(new platform(350,200, document.createElement('img'), './assets/platforms/lava.png', 50, 50))
    document.getElementById("creditsMenu").style.display = "none";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("selectSwords").style.display = "none";
    document.getElementById("unlockScreen").style.display = "none";
    document.getElementById("levelSelectScreen").style.display = "none";
    document.getElementById('gameScreen').style.backgroundColor = "white";
    document.getElementById('gameScreen').style.backgroundImage = "url('./assets/fireBg.jpeg')";
    document.getElementById('gameScreen').style.backgroundSize = "cover";
  }, 800);
}


/////////////////// End of Levels
// Player functions

let keys = {
  w: false,
  a: false,
  s: false,
  d: false,
  k: false
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'w') {
    keys.w = true
  } else if (event.key === 'a') {
    keys.a = true
  } else if (event.key === 's') {
    keys.s = true
  } else if (event.key === 'd') {
    keys.d = true
  } else if (event.key === 'k') {
    keys.k = true
    setTimeout(function() {
      keys.k = false
    }, 3000)
  }
});
document.addEventListener('keyup', function (event) {
  if (event.key === '') {
  } else if (event.key === 'a') {
    keys.a = false
  } else if (event.key === '') {
  } else if (event.key === 'd') {
    keys.d = false
  }
});
let canShoot = false
var xPosMouse = null
var yPosMouse = null
var newSwordAngle = null
document.getElementById('gameScreen').addEventListener('mousemove', function (e) {
  xPosMouse = e.clientX - 175;
  yPosMouse = e.clientY;
  newSwordAngle = Math.atan2(yPosMouse - PLAYEROBJ.y, xPosMouse - PLAYEROBJ.x) / (Math.PI / 180);
  document.getElementById('text').textContent = "X: " + xPosMouse + " Y: " + yPosMouse + " New Sword Angle: " + newSwordAngle; + ""
});


//platform 
class platform {
  constructor(x, y, type, image, w, h) {
    this.x = x
    this.w = w
    this.h = h
    this.y = y
    this.type = type
    this.image = image
    this.type.style.position = "absolute"
    this.type.src = "" + this.image + ""
    this.type.style.width = this.w + "px"
    this.type.style.height = this.h + "px"
    this.type.id = "platform"
    this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px)"
    document.getElementById('gameScreen').appendChild(this.type)
  }
  delete() {
    this.type.remove()
  }
}
class spike {
  constructor(x, y, type, image, r) {
    this.x = x
    this.y = y
    this.type = type
    this.image = image
    this.r = r
    this.type.style.position = "absolute"
    this.type.src = "" + this.image + ""
    this.type.style.width = "50px"
    this.type.style.height = "50px"
    this.type.id = "spike"
    this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(" + this.r + "deg)"
    document.getElementById('gameScreen').appendChild(this.type)
  }
  delete() {
    this.type.remove()
  }
}
class portal {
  constructor(x, y, type, image) {
    this.x = x
    this.y = y
    this.type = type
    this.image = image
    this.type.style.position = "absolute"
    this.type.src = "" + this.image + ""
    this.type.style.width = "50px"
    this.type.style.height = "50px"
    this.type.id = "portal"
    this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px)"
    document.getElementById('gameScreen').appendChild(this.type)
  }
  delete() {
    this.type.remove()
    currentPortal.splice(currentPortal.indexOf(this), 1)
  }
}

let currentPortal = []
let currentSpikes = []
let currentPlatforms = []
let orbs = []

// adding seeking projectiles
class orb {
  constructor(type, spin, x, y) {
    this.type = type
    this.spin = spin
    this.x = x
    this.y = y
    this.type.style.position = "absolute"
    this.type.src = "./assets/Swords/orb.png"
    this.type.style.width = "25px"
    this.type.style.height = "25px"
    this.type.class = "orb"
    this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(" + this.spin + "deg)"
    document.getElementById('gameScreen').appendChild(this.type)
  }
  move() {
    //spin
    for (let i = 0; i < currentPlatforms.length; i++) {
      if (collisionDetection(this.type.getBoundingClientRect(), currentPlatforms[i].type.getBoundingClientRect())) {
        this.x = 1000000000
        this.y = 1000000000
        this.type.remove()
        orbs.splice(orbs.indexOf(this), 1)
      }
    }
    this.spin += 5
    this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(" + this.spin + "deg)"
    //find ratio to player
    this.y = this.y + (Math.floor(PLAYEROBJ.y - this.y) / 120)
    if (this.x > PLAYEROBJ.x) {
      this.x -= 1.5
    } else {
      this.x += 1.5
    }
  }
  delete() {
    this.x = 100000000
    this.y = 100000000
    this.type.remove()
    orbs.splice(orbs.indexOf(this), 1)
  }
}

function moveOrbs() {
  for (let i = 0; i < orbs.length; i++) {
    orbs[i].move()
  }
}
setInterval(moveOrbs, 10)

//making swords
class sword {
  constructor(x, y, type, angle, time, spin) {
    this.time = time
    this.angle = angle
    this.spin = spin
    this.x = x
    this.y = y
    this.type = type
    this.type.style.position = "absolute"
    if (swordsEquiped.m1) {
      this.type.src = "./assets/Swords/m1.png"
    }
    else if (swordsEquiped.s1) {
      this.type.src = "./assets/Swords/s1.png"
    }
    else if (swordsEquiped.l1) {
      this.type.src = "./assets/Swords/l1.png"
    }
    else if (swordsEquiped.f1) {
      this.type.src = "./assets/Swords/f1.png"
    }
    else if (swordsEquiped.i1) {
      this.type.src = "./assets/Swords/i1.png"
    }
    else if (swordsEquiped.m2) {
      this.type.src = "./assets/Swords/m2.png"
    }
    else if (swordsEquiped.s2) {
      this.type.src = "./assets/Swords/s2.png"
    }
    else if (swordsEquiped.l2) {
      this.type.src = "./assets/Swords/l2.png"
    }
    else if (swordsEquiped.f2) {
      this.type.src = "./assets/Swords/f2.png"
    }
    else if (swordsEquiped.i2) {
      this.type.src = "./assets/Swords/i2.png"
    }
    else if (swordsEquiped.m3) {
      this.type.src = "./assets/Swords/m3.png"
    }
    else if (swordsEquiped.s3) {
      this.type.src = "./assets/Swords/s3.png"
    }
    else if (swordsEquiped.l3) {
      this.type.src = "./assets/Swords/l3.png"
    }
    else if (swordsEquiped.f3) {
      this.type.src = "./assets/Swords/f3.png"
    }
    else if (swordsEquiped.i3) {
      this.type.src = "./assets/Swords/i3.png"
    }
    this.type.style.width = "40px"
    this.type.style.height = "65px"
    this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px)"
    document.getElementById('gameScreen').appendChild(this.type)
  }
  move() {
    this.spin += 2
    for (let i = 0; i < enemies.length; i++) {
      if (collisionDetection(this.type.getBoundingClientRect(), enemies[i].type.getBoundingClientRect())) {
        this.delete()
        // for (let n = 0; n < swords.length; n++) {
        //   swords[n].delete()
        // }
        if (swordsEquiped.m1) {
          enemies[i].health -= 15
        }
        else if (swordsEquiped.s1) {
          if (enemies[i].form == 'sniper') {
            enemies[i].health -= 30
          } else {
            enemies[i].health -= 15
          }
        }
        else if (swordsEquiped.l1) {
          enemies[i].health -= 15
        }
        else if (swordsEquiped.f1) {
          if (enemies[i].form == 'sniper') {
            enemies[i].health -= 25
          } else {
            enemies[i].health -= 15
          }
        }
        else if (swordsEquiped.i1) {
          if (enemies[i].form == 'rapidFire') {
            enemies[i].health -= 5
          } else {
            enemies[i].health -= 15
          }
        }
        else if (swordsEquiped.m2) {
          enemies[i].health -= 20
        }
        else if (swordsEquiped.s2) {
          if (enemies[i].form == 'sniper') {
            enemies[i].health -= 35
          } else {
            enemies[i].health -= 20
          }
        }
        else if (swordsEquiped.l2) {
          enemies[i].health -= 15
        }
        else if (swordsEquiped.f2) {
          if (enemies[i].form == 'sniper') {
            enemies[i].health -= 30
          } else {
            enemies[i].health -= 20
          }
        }
        else if (swordsEquiped.i2) {
          if (enemies[i].form == 'rapidFire') {
            enemies[i].health -= 10
          } else {
            enemies[i].health -= 20
          }
        }
        else if (swordsEquiped.m3) {
          enemies[i].health -= 25
        }
        else if (swordsEquiped.s3) {
          if (enemies[i].form == 'sniper') {
            enemies[i].health -= 40
          } else {
            enemies[i].health -= 25
          }
        }
        else if (swordsEquiped.l3) {
          enemies[i].health -= 15
        }
        else if (swordsEquiped.f3) {
          if (enemies[i].form == 'sniper') {
            enemies[i].health -= 35
          } else {
            enemies[i].health -= 25
          }
        }
        else if (swordsEquiped.i3) {
          if (enemies[i].form == 'rapidFire') {
            enemies[i].health -= 15
          } else {
            enemies[i].health -= 25
          }
        }
      }
    }
    for (let i = 0; i < currentPlatforms.length; i++) {
      if (collisionDetection(this.type.getBoundingClientRect(), currentPlatforms[i].type.getBoundingClientRect())) {
        this.x = 1000000000
        this.y = 1000000000
        this.type.remove()
        swords.splice(swords.indexOf(this), 1)
        for (let n = 0; n < swords.length; n++) {
          swords[n].delete()
        }
      }
    }

    if (this.x > 1000 - 25 || this.x < 0 + 25 || this.y > 600 - 25 || this.y < -100 + 25) {
      this.spin += 5
      this.x = 1000000000
      this.y = 1000000000
      this.type.remove()
      swords.splice(swords.indexOf(this), 1)
    }
    this.time += 0.01
    this.x += (Math.cos(this.angle * Math.PI / 180) * 4)
    this.y -= (Math.sin(this.angle * Math.PI / 180) * 4) - (this.time * this.time)
    this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px) rotate(" + this.spin + "deg)"
  }
  delete() {
    this.x = 1000000000
    this.y = 1000000000
    this.type.remove()
  }
}
let swords = []
function test() {
  for (let i = 0; i < swords.length; i++) {
    swords[i].move()
  }
}

setInterval(test, 10)

// Top Bar for upper collisions
// Shield Change

let shield = document.createElement('img')
shield.src = "./assets/animationsForPlayer/shield.png"
shield.style.width = "40px"
shield.style.height = "50px"
shield.style.zIndex = 10000000000000
shield.style.display = "none"
shield.style.position = "absolute"
document.getElementById('gameScreen').appendChild(shield)

//

function movementForPlayer() {
  if (PLAYEROBJ.inGame) {
    healthBar.style.display = "block"
    document.getElementById('behindPlayerHealth').style.display = "block"
  }
  if (PLAYEROBJ.inGame == false) {
    healthBar.style.display = "none"
    document.getElementById('behindPlayerHealth').style.display = "none"
  }
  document.getElementById('topBar').style.left = Math.floor(PLAYEROBJ.x + 5) + "px"
  document.getElementById('topBar').style.top = Math.floor(PLAYEROBJ.y - 5) + "px"
  for (let i = 0; i < currentPlatforms.length; i++) {
    if (PLAYEROBJ.inGame) {
      currentPlatforms[i].type.style.display = 'block'
    }
    if (PLAYEROBJ.inGame == false) {
      currentPlatforms[i].type.style.display = 'none'
    }
  }
  if (PLAYEROBJ.inGame) {
    healthBar.style.left = PLAYEROBJ.x - 10 + "px"
    healthBar.style.top = PLAYEROBJ.y - 25 + "px"
    if (PLAYEROBJ.health < 75) {
      PLAYEROBJ.health += 0.03
    } else {
      PLAYEROBJ.health = 75
    }
    healthBar.style.width = PLAYEROBJ.health + "px"
    document.getElementById('behindPlayerHealth').style.left = PLAYEROBJ.x - 10 + "px"
    document.getElementById('behindPlayerHealth').style.top = PLAYEROBJ.y - 25 + "px"
    if (PLAYEROBJ.health <= 0) {
      if (!oneLife) {
        PLAYEROBJ.yke = 0
        PLAYEROBJ.time = 0
        PLAYEROBJ.x = PLAYEROBJ.startX
        PLAYEROBJ.y = PLAYEROBJ.startY
        PLAYEROBJ.health = 75
        healthBar.style.width = PLAYEROBJ.health + "px"
      }
      if (oneLife) {
              // // // // // // 
      // Now we end the level with...
      //the button deletes other entities
      canShoot = false
      explo.push(new explosion((PLAYEROBJ.x + 25), (PLAYEROBJ.y + 50), 100, 1, document.createElement('div'), "red"))
      PLAYEROBJ.startX = "-10000"
      PLAYEROBJ.startY = "-10000"
      PLAYEROBJ.x = PLAYEROBJ.startX
      PLAYEROBJ.y = PLAYEROBJ.startY
      document.getElementById("endOfLevelScreenOneLife").style.display = "block";
      for (let i = 0; i < orbs.length; i++) {
        orbs[i].delete()
      }
      starDust -= 200;
      }
    }
    if (collisionBetweenPlayerAndOrbs()) {
      if (!invincible) {
        explo.push(new explosion(PLAYEROBJ.x + 10, PLAYEROBJ.y + 10, 0, 1, document.createElement('div'), 'lime'))
        PLAYEROBJ.health -= 20
      }
    }
    // END LEVEL
    if (collisionBetweenPlayerAndPortal()) {
      // // // // // // 
      // Now we end the level with...
      //the button deletes other entities
      canShoot = false
      explo.push(new explosion((currentPortal[0].x + 25), (currentPortal[0].y + 25), 100, 1, document.createElement('div'), "purple"))
      PLAYEROBJ.startX = "-10000"
      PLAYEROBJ.startY = "-10000"
      PLAYEROBJ.x = PLAYEROBJ.startX
      PLAYEROBJ.y = PLAYEROBJ.startY
      document.getElementById("endOfLevelScreen").style.display = "block";
      for (let i = 0; i < orbs.length; i++) {
        orbs[i].delete()
      }
      starDust += 200;
    }


    //SHOOTING SWORDS
    if (keys.s) {
      if (PLAYEROBJ.cooldown) {
        swords.push(new sword(PLAYEROBJ.x, PLAYEROBJ.y, document.createElement('img'), -1 * newSwordAngle, 0, 0))
        keys.s = false
        PLAYEROBJ.cooldown = false
        setTimeout(() => {
          PLAYEROBJ.cooldown = true
        }, 750)
      }
    }

    ///MOVING
    if (keys.a) {
      // for (let i = 0; i < currentPlatforms.length; i++) {
      //   currentPlatforms[i].x += 4
      //   currentPlatforms[i].type.style.transform = "translate(" + currentPlatforms[i].x + "px, " + currentPlatforms[i].y + "px)"
      // }
      PLAYEROBJ.x -= 4
      player.style.transform = "translate(" + PLAYEROBJ.x + "px, " + PLAYEROBJ.y + "px)"
      if (collisionBetweenPlayerAndPlatforms()) {
        // for (let i = 0; i < currentPlatforms.length; i++) {
        //   currentPlatforms[i].x -= 4
        //   currentPlatforms[i].type.style.transform = "translate(" + currentPlatforms[i].x + "px, " + currentPlatforms[i].y + "px)"
        // }
        PLAYEROBJ.x += 4
        player.style.transform = "translate(" + PLAYEROBJ.x + "px, " + PLAYEROBJ.y + "px)"
      }
    }
    if (keys.d) {
      // for (let i = 0; i < currentPlatforms.length; i++) {
      //   currentPlatforms[i].x -= 4
      //   currentPlatforms[i].type.style.transform = "translate(" + currentPlatforms[i].x + "px, " + currentPlatforms[i].y + "px)"
      // }
      PLAYEROBJ.x += 4
      player.style.transform = "translate(" + PLAYEROBJ.x + "px, " + PLAYEROBJ.y + "px)"
      if (collisionBetweenPlayerAndPlatforms()) {
        // for (let i = 0; i < currentPlatforms.length; i++) {
        //   currentPlatforms[i].x += 4
        //   currentPlatforms[i].type.style.transform = "translate(" + currentPlatforms[i].x + "px, " + currentPlatforms[i].y + "px)"
        // }
        PLAYEROBJ.x -= 4
        player.style.transform = "translate(" + PLAYEROBJ.x + "px, " + PLAYEROBJ.y + "px)"
      }
    }
    // Shield Coding
    if (keys.k) {
      
    }

    for (let i = 0; i < currentPlatforms.length; i++) {
      if (collisionDetection(document.getElementById('topBar').getBoundingClientRect(), currentPlatforms[i].type.getBoundingClientRect())) {
        healthBar.getBoundingClientRect().y += 25
        PLAYEROBJ.yke = 0
        PLAYEROBJ.time = 0
        PLAYEROBJ.y += 5
        player.style.transform = "translate(" + PLAYEROBJ.x + "px, " + PLAYEROBJ.y + "px)"
      }
    }

    //SPIKES
    if (collisionBetweenPlayerAndSpikes()) {
      if (oneLife) {
                // // // // // // 
      // Now we end the level with...
      //the button deletes other entities
      canShoot = false
      explo.push(new explosion((PLAYEROBJ.x + 25), (PLAYEROBJ.y + 50), 100, 1, document.createElement('div'), "red"))
      PLAYEROBJ.startX = "-10000"
      PLAYEROBJ.startY = "-10000"
      PLAYEROBJ.x = PLAYEROBJ.startX
      PLAYEROBJ.y = PLAYEROBJ.startY
      document.getElementById("endOfLevelScreenOneLife").style.display = "block";
      for (let i = 0; i < orbs.length; i++) {
        orbs[i].delete()
      }
      starDust -= 200;
      }
      PLAYEROBJ.yke = 0
      PLAYEROBJ.time = 0
      PLAYEROBJ.x = PLAYEROBJ.startX
      PLAYEROBJ.y = PLAYEROBJ.startY
      PLAYEROBJ.health = 75
      healthBar.style.width = PLAYEROBJ.health + "px"
    }



    //GRAVITY and LANDING ON PLATFORMS
    if (!(collisionBetweenPlayerAndPlatforms())) {
      PLAYEROBJ.time += 0.02
      PLAYEROBJ.yke += PLAYEROBJ.time * PLAYEROBJ.time * 0.2
      PLAYEROBJ.y += PLAYEROBJ.yke
      // if (onPlatform) {
      //   PLAYEROBJ.y -= PLAYEROBJ.yke
      //   PLAYEROBJ.yke -= PLAYEROBJ.time * PLAYEROBJ.time * 0.2
      //   PLAYEROBJ.time -= 0.02
      // }
      player.style.transform = 'translate(' + PLAYEROBJ.x + 'px, ' + PLAYEROBJ.y + 'px) scaleX(' + PLAYEROBJ.dir + ')'
    } else {
      PLAYEROBJ.yke = 0
      PLAYEROBJ.time = 0
      PLAYEROBJ.y -= 1
    }
    if (onPlatform && keys.w) {
      PLAYEROBJ.yke = -4
      setTimeout(() => {
        keys.w = false
      }, 500)
    }
    player.style.transform = 'translate(' + PLAYEROBJ.x + 'px, ' + PLAYEROBJ.y + 'px) scaleX(' + PLAYEROBJ.dir + ')'
    player.style.transform = 'translate(' + PLAYEROBJ.x + 'px, ' + PLAYEROBJ.y + 'px) scaleX(' + PLAYEROBJ.dir + ')'
    if (PLAYEROBJ.y > 600) {
      PLAYEROBJ.yke = 0
      PLAYEROBJ.time = 0
      PLAYEROBJ.x = PLAYEROBJ.startX
      PLAYEROBJ.y = PLAYEROBJ.startY
      PLAYEROBJ.health = 75
    }
  }
  window.requestAnimationFrame(movementForPlayer)
}



//COLLISION DETECTION FUNCTIONS

function collisionDetection(rect1, rect2) {
  if (((rect1.x >= rect2.x && rect1.x <= rect2.x + rect2.width) || (rect1.x + rect1.width >= rect2.x && rect1.x + rect2.width <= rect2.x + rect2.width)) && ((rect1.y >= rect2.y && rect1.y <= rect2.y + rect2.height) || (rect1.y + rect1.height >= rect2.y && rect1.y + rect2.height <= rect2.y + rect2.height))) {
    return true;
  } else {
    return false;
  }
}

function collisionBetweenPlayerAndPlatforms() {
  for (let i = 0; i < currentPlatforms.length; i += 0) {
    if (collisionDetection(document.getElementById('player').getBoundingClientRect(), currentPlatforms[i].type.getBoundingClientRect())) {
      i += currentPlatforms.length
      onPlatform = true
      return true;
    } else {
      i++
      if (i == currentPlatforms.length) {
        onPlatform = false
        return false;
      }
    }
  }
}

setInterval(collisionBetweenPlayerAndPlatforms, 10)

function collisionBetweenPlayerAndOrbs() {
  for (let i = 0; i < orbs.length; i += 0) {
    if (collisionDetection(document.getElementById('player').getBoundingClientRect(), orbs[i].type.getBoundingClientRect())) {
      orbs[i].delete()
      i += orbs.length
      return true;
    } else {
      i++
      if (i == orbs.length) {
        return false;
      }
    }
  }
}

function collisionBetweenPlayerAndEnemies() {
  for (let i = 0; i < enemies.length; i += 0) {
    if (collisionDetection(document.getElementById('player').getBoundingClientRect(), enemies[i].type.getBoundingClientRect())) {
      i += enemies.length
      return true;
    } else {
      i++
      if (i == enemies.length) {
        return false;
      }
    }
  }
}

function collisionBetweenPlayerAndSpikes() {
  for (let i = 0; i < currentSpikes.length; i += 0) {
    if (collisionDetection(document.getElementById('player').getBoundingClientRect(), currentSpikes[i].type.getBoundingClientRect())) {
      i += currentPlatforms.length
      return true;
    } else {
      i++
      if (i == currentPlatforms.length) {
        return false;
      }
    }
  }
}

function collisionBetweenPlayerAndPortal() {
  for (let i = 0; i < currentPortal.length; i += 0) {
    if (collisionDetection(document.getElementById('player').getBoundingClientRect(), currentPortal[i].type.getBoundingClientRect())) {
      i += currentPortal.length
      return true;
    } else {
      i++
      if (i == currentPortal.length) {
        return false;
      }
    }
  }
}





// ENEMIES

class enemy {
  constructor(type, x, y, sx, sy, path, dir, form) {
    this.type = type
    this.x = x
    this.y = y
    this.sx = sx
    this.sy = sy
    this.dir = dir
    this.form = form
    this.health = null
    this.path = path
    this.type.style.position = "absolute"
    this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px)"
    this.type.style.width = "100px"
    this.type.style.height = "58px"
    if (this.form == 'regular') {
      this.type.src = "./assets/enemies/regular.png"
      this.health = 75
      //75 max regularly
    } else if (this.form == 'sniper') {
      this.health = 75
      this.type.src = "./assets/enemies/sniper.png"
      this.type.style.width = "75px"
      this.type.class = "sniper"
    } else if (this.form == 'electric') {
      this.health = 75
      this.type.src = "./assets/enemies/electric.png"
      this.type.style.width = "75px"
      this.type.class = "electric"
    }
    else if (this.form == 'rapidFire') {
      this.health = 65
      this.type.src = "./assets/enemies/rapidFire.png"
      this.type.style.width = "100px"
      this.type.class = "rapidFire"
    }
    else if (this.form == 'boss') {
      this.health = 265
      this.type.src = "./assets/enemies/rapidFire.png"
      this.type.style.width = "300px"
      this.type.style.height = "200px"
      this.type.class = "rapidFire"
    }

    this.bar = document.createElement('div')
    this.bar.style.width = "" + this.health + "px"
    this.bar.style.height = "10px"
    this.bar.style.backgroundColor = "red"
    this.bar.style.position = "absolute"
    this.bar.style.transform = "translate(" + (this.x - 36 + 18) + "px, " + (this.y - 20) + "px)"

    this.bar2 = document.createElement('div')
    this.bar2.style.width = "75px"
    if (this.form == "rapidFire") {
      this.bar2.style.width = "65px"
    }
    if (this.form == "boss") {
      this.bar2.style.width = "265px"
    }
    this.bar2.style.height = "10px"
    this.bar2.style.backgroundColor = "purple"
    this.bar2.style.position = "absolute"
    this.bar2.style.transform = "translate(" + (this.x - 36 + 18) + "px, " + (this.y - 20) + "px)"
    document.getElementById('gameScreen').appendChild(this.bar2)
    document.getElementById('gameScreen').appendChild(this.bar)
    document.getElementById('gameScreen').appendChild(this.type)
  }
  move() {
    if (collisionBetweenPlayerAndEnemies()) {
      if (!invincible) {
        PLAYEROBJ.health -= 0.5 / enemies.length
        healthBar.style.width = "" + PLAYEROBJ.health + "px"
      }
    }
    if (this.health <= 0) {
      explo.push(new explosion((this.x + 50), (this.y + 29), 100, 1, document.createElement('div'), "red"))
      this.type.remove()
      this.bar.remove()
      this.bar2.remove()
      enemies.splice(enemies.indexOf(this), 1)
      this.x = 100000000000000
      this.y = 100000000000000
    }
    if (this.path == 'leftRight') {
      if (this.x > this.sx + 100) {
        this.dir = -1
      }
      if (this.x < this.sx - 100) {
        this.dir = 1
      }
      this.x += this.dir
    }
    if (this.path == 'upDown') {
      if (this.y > this.sy + 100) {
        this.dir = -1
      }
      if (this.y < this.sy - 100) {
        this.dir = 1
      }
      this.y += this.dir
    }
    this.bar.style.transform = "translate(" + (this.x - 36 + 18 + 37.5) + "px, " + (this.y - 20) + "px)"
    this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px)"
    if (this.form == 'sniper') {
      if (PLAYEROBJ.x > this.x) {
        this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(-1)"
      } else {
        this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(1)"
      }
    }
    this.bar2.style.transform = "translate(" + (this.x - 36 + 18 + 37.5) + "px, " + (this.y - 20) + "px)"
    this.bar.style.width = "" + this.health + "px"
    if (this.form == 'electric') {
      this.bar2.style.transform = "translate(" + (this.x - 36 + 18 + 37.5 - 15) + "px, " + (this.y - 20) + "px)"
      this.bar.style.width = "" + this.health + "px"
      this.bar.style.transform = "translate(" + (this.x - 36 + 18 + 37.5 - 15) + "px, " + (this.y - 20) + "px)"
    }
  }
  delete() {
    this.x = 100000000000000
    this.y = 100000000000000
    this.type.remove()
    this.bar.remove()
    this.bar2.remove()
  }
}

function shootSnipers() {
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].form == "sniper") {
      if (canShoot == true) {
        orbs.push(new orb(document.createElement('img'), 0, enemies[i].x, enemies[i].y - 50))
      }
    } else if (enemies[i].form == "boss") {
      if (canShoot == true) {
        orbs.push(new orb(document.createElement('img'), 0, enemies[i].x, enemies[i].y))
      }
    }
  }
}

// Last level rapid firing code

function rapidFire() {
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].form === "rapidFire") {
      if (canShoot == true && canRapidFire == true) {
        bolts.push(new rapidFireBolt(enemies[i].x, enemies[i].y, (Math.atan2(PLAYEROBJ.y - enemies[i].y, PLAYEROBJ.x - enemies[i].x) * 180 / Math.PI) + 90, 0, 0, enemies[i].x, enemies[i].y, document.createElement('div')))
      }
    } else if (enemies[i].form === "boss") {
      if (canShoot == true && canRapidFire == true) {
        bolts.push(new rapidFireBolt(enemies[i].x, enemies[i].y, (Math.atan2(PLAYEROBJ.y - enemies[i].y, PLAYEROBJ.x - enemies[i].x) * 180 / Math.PI) + 90, 0, 0, enemies[i].x, enemies[i].y, document.createElement('div')))
        bolts.push(new rapidFireBolt(enemies[i].x, enemies[i].y + 150, (Math.atan2(PLAYEROBJ.y - enemies[i].y, PLAYEROBJ.x - enemies[i].x) * 180 / Math.PI) + 90, 0, 0, enemies[i].x, enemies[i].y + 150, document.createElement('div')))
      }
    }
  }
}

let canRapidFire = true

class rapidFireBolt {
  constructor(sx, sy, a, time, yke, x, y, type) {
    this.a = a
    this.sy = sy
    this.sx = sx
    this.time = time
    this.yke = yke
    this.x = x
    this.y = y
    this.type = type
    this.type.style.backgroundColor = "red"
    this.type.style.width = '10px'
    this.type.style.height = '10px'
    this.type.style.borderRadius = "50%"
    this.type.style.zIndex = "10000000000000000"
    this.type.style.position = 'absolute'
    this.type.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)'
    document.getElementById('gameScreen').appendChild(this.type)
    // alert('success')
  }
  run() {
    if (this.x > 1000 || this.x < 0 || this.y > 600 || this.y < 0) {
      this.type.remove()
    }
    for (let i = 0; i < currentPlatforms.length; i++) {
      if (collisionDetection(this.type.getBoundingClientRect(), currentPlatforms[i].type.getBoundingClientRect())) {
        this.type.remove()
      }
    }
    if (collisionDetection(this.type.getBoundingClientRect(), player.getBoundingClientRect())) {
      if (!invincible) {
        PLAYEROBJ.health -= 5
      this.type.remove()
      }
    }
    this.time += 0.01
    this.x = this.sx + Math.sin(this.a * 0.0174533) * Math.floor(180 / Math.PI) * this.time * 15
    this.y = this.sy + -1 * (Math.cos(this.a * 0.0174) * Math.floor(180 / Math.PI) * this.time * 15 - Math.floor(this.time * this.time * 100))
    // this.x += 
    this.type.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)'
  }
}

let bolts = []

function runBolts() {
  if (PLAYEROBJ.inGame) {
    for (let i = 0; i < bolts.length; i++) {
      bolts[i].run()
    }
  }
}

function reset() {
  if (PLAYEROBJ.inGame) {
    for (let i = 0; i < bolts.length; i++) {
      bolts[i].type.remove()
      // bolts.splice(bolts.indexOf(this), 1)
    }
    bolts = []
    for (let i = 0; i < explo.length; i++) {
      explo[i].type.remove()
      // explo.splice(explo.indexOf(this), 1)
    }
    explo = []
    for (let i = 0; i < orbs.length; i++) {
      orbs[i].type.remove()
      // orbs.splice(orbs.indexOf(this), 1)
    }
    orbs = []
    for (let i = 0; i < swords.length; i++) {
      swords[i].type.remove()
      // orbs.splice(orbs.indexOf(this), 1)
    }
    swords = []
  }
}

setInterval(reset, 7000)

setInterval(runBolts, 10)
setInterval(rapidFire, 500)
// End of Rapid firing


function pulseElectrics() {
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].form == "electric") {
      if (canShoot == true) {
        explo.push(new explosion(enemies[i].x + 35, enemies[i].y + 25, 100, 1.5, document.createElement('div'), '#32dde3'))
        if (Math.floor(Math.abs(PLAYEROBJ.x - enemies[i].x) < 200) && Math.floor(Math.abs(PLAYEROBJ.y - enemies[i].y)) < 200) {
          if (!invincible) {
            PLAYEROBJ.health -= 30
          }
        }
      }
    } else if (enemies[i].form == "boss") {
      if (canShoot == true) {
        explo.push(new explosion(enemies[i].x + 150, enemies[i].y + 100, 100, 1.7, document.createElement('div'), '#32dde3'))
        if (Math.floor(Math.abs(PLAYEROBJ.x - enemies[i].x) < 200) && Math.floor(Math.abs(PLAYEROBJ.y - enemies[i].y)) < 200) {
          if (!invincible) {
            PLAYEROBJ.health -= 30
          }
        }
      }
    }
  }
}

setInterval(pulseElectrics, 2000)
setInterval(shootSnipers, 2000)

let enemies = []

function moveEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].move()
  }
}

setInterval(moveEnemies, 10)


// Explode Animation
class explosion {
  constructor(x, y, r, alpha, type, color) {
    this.x = x
    this.y = y
    this.r = r
    this.alpha = alpha
    this.type = type
    this.color = color
    this.type.style.width = this.r + "px"
    this.type.style.height = this.r + "px"
    this.type.style.backgroundColor = "" + this.color + ""
    this.type.style.position = "absolute"
    // this.type.style.transform = "translate(" + this.x + "px, " + this.y + "px)"
    this.type.style.borderRadius = "50%"
    this.type.style.zIndex = "10000000000000000"
    document.getElementById('gameScreen').appendChild(this.type)
    this.type.style.top = Math.floor(this.y - this.r / 2) + "px"
    this.type.style.left = Math.floor(this.x - this.r / 2) + "px"
  }
  run() {
    this.alpha -= 0.03
    this.r += 6
    this.type.style.opacity = this.alpha
    this.type.style.width = this.r + "px"
    this.type.style.height = this.r + "px"
    this.type.style.top = Math.floor(this.y - this.r / 2) + "px"
    this.type.style.left = Math.floor(this.x - this.r / 2) + "px"
    if (this.alpha <= 0) {
      this.type.remove()
      this.x = 10000000000000
      this.y = 10000000000000
      explo.splice(explo.indexOf(this), 1)
    }
  }
}

let explo = []
setInterval(run, 10)
function run() {
  for (let i = 0; i < explo.length; i++) {
    explo[i].run()
  }
}

let invincible = false


function playerAnimate() {
  if (PLAYEROBJ.inGame) {
    shield.style.left = PLAYEROBJ.x+20 + "px"
    shield.style.top = PLAYEROBJ.y+15 + "px"
    if (PLAYEROBJ.dir == -1) {
      shield.style.left = PLAYEROBJ.x-15 + "px"
      shield.style.top = PLAYEROBJ.y+15 + "px"
    }
    if (keys.w) {
      shield.style.left = PLAYEROBJ.x+20 + "px"
      shield.style.top = PLAYEROBJ.y-15 + "px"
      if (PLAYEROBJ.dir == -1) {
        shield.style.left = PLAYEROBJ.x-10 + "px"
        shield.style.top = PLAYEROBJ.y-15 + "px"
      }
    }
    if (keys.k) {
      invincible = true
      shield.style.display = "block"
      shield.style.position = "absolute"
      setTimeout(function() {
        shield.style.display = "none"
        invincible = false
      }, 2000)
      setTimeout(function() {
        keys.k = false
      }, 4000)
    }
    if (keys.w) {
      player.src = './assets/animationsForPlayer/leap.png'
    }
    if (!(keys.w || keys.a || keys.d)) {
      player.src = './assets/animationsForPlayer/standing.png'
    }
    if (keys.a) {
      PLAYEROBJ.dir = -1
      if (PLAYEROBJ.frame == 1) {
        if (!(keys.w)) {
          player.src = './assets/animationsForPlayer/run1.png'
        }
      } else if (PLAYEROBJ.frame == 2) {
        if (!(keys.w)) {
          player.src = './assets/animationsForPlayer/run2.png'
        }
      } else if (PLAYEROBJ.frame == 3) {
        if (!(keys.w)) {
          player.src = './assets/animationsForPlayer/run3.png'
        }
      }
    }
    if (keys.d) {
      PLAYEROBJ.dir = 1
      if (PLAYEROBJ.frame == 1) {
        if (!(keys.w)) {
          player.src = './assets/animationsForPlayer/run1.png'
        }
      } else if (PLAYEROBJ.frame == 2) {
        if (!(keys.w)) {
          player.src = './assets/animationsForPlayer/run2.png'
        }
      } else if (PLAYEROBJ.frame == 3) {
        if (!(keys.w)) {
          player.src = './assets/animationsForPlayer/run3.png'
        }
      }
    }
  } else {
    player.style.display = "none";
  }
  window.requestAnimationFrame(playerAnimate)
}
function changeFrame() {
  if (PLAYEROBJ.inGame) {
    PLAYEROBJ.frame += 1
  }
  if (PLAYEROBJ.frame > 3) {
    PLAYEROBJ.frame = 1
  }
}
setInterval(changeFrame, 200)

// EXPERIMENTAL CODE




//END
playerAnimate()
movementForPlayer()
swordType = "Mechanical 1"
starDust = 100000000000
