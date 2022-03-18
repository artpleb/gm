

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  colorMode(HSB);
}


let squares = 1

let words = ['gm', 'Gm', 'gm', 'wagmi', 'GM'];

let palettes = new Array();
palettes[0] = new Array("Bitcoin",25,35,90,100,90,100)
palettes[1] = new Array("Blues",180,240,80,100,80,100)

/*
let bitcoin_h_min = 25
let bitcoin_h_max = 35

let blues_h_min = 180
let blues_h_max = 240

let s_min = 80
let s_max = 95
let b_min = 80
let b_max = 100
*/

count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

function keyPressed() {
  clear();
  if (keyCode === LEFT_ARROW) {
    squares --;
    loop();
  } else if (keyCode === RIGHT_ARROW) {
    squares ++;
    loop();
  } else if (keyCode === UP_ARROW) {
    squares = random(count);
    loop();
  }
  }

function draw() {
  let buffer = 5
  let startx = buffer
  let starty = buffer
  let size = ((400 - ((squares + 1) * buffer)) / squares)
  let row = 0
  let palette = random(palettes)
  let h_min = palette[1]
  let h_max = palette[2]
  let s_min = palette[3]
  let s_max = palette[4]
  let b_min = palette[5]
  let b_max = palette[6]
  
  while (row < squares){
      
    for (let j = 0; j < squares; j++) {
      let word = random(words);
      let hue_rand = random(h_min,h_max);
      let sat_rand = random(s_min,s_max);
      let bri_rand = random(b_min,b_max);
      
      fill(hue_rand,sat_rand,bri_rand)
      
      rect(startx + (j * (buffer + size)), starty + row * (buffer + size), size, size)
      
      fill(180,0,100)

      text(word,(startx + (size / 2)) + (j * (buffer + size)), starty + (size / 2) + row * (buffer + size))
      
      }
      
      row ++
        
    }  
noLoop();
}

