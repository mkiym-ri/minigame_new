// This is a JavaScript file
// ---- エンティティ関連の関数 ---------------------------------------------

//プレイヤーエンティティ用
function creatPlayer(){
  return{
    x: 200,
    y: 300,
    vx: 0,
    vy: 0
  };
}

function drawPlayer(){
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY,20,20);
}

//enemyエンティティ用

function updatePositionEnemy(entity){

  entity.x = entity.x + entity.vx * xdirection;
  entity.y = entity.y + entity.vy * ydirection;
  //形状が画面の境界を超えているかどうかをテストします
   //ある場合は、-1を掛けて方向を逆にします
  if (entity.x > width - 20 || entity.x < rad - 30) {
    xdirection *= -1;
  }
  if (entity.y > height - 20 || entity.y < rad - 30) {
    ydirection *= -1;
}
}

function creatEnemy(vx,vy){
  return {
    x: width/2,
    y: height/2,
    vx ,
    vy 
  };
}

function drawEnemy(entity){
  noStroke();
  fill(255,0,0)
  ellipse(entity.x, entity.y, rad, rad);
} 

function addEnemy(){
  let vy = radom(1.0,10.0);
  let vx = random(1.0,10.0);
    enemies.push(creatEnemy(vx,vy));
}

// ---- ゲーム全体に関わる部分 ---------------------------------------------

//プレイヤー用
let player;

//敵用
//敵のエンティティの配列
let enemies;
let rad = 60; // Width of the shape
let xpos=0, ypos=0; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

// ---- setup/draw 他 --------------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  //プレイヤー作成
  pleyer = creatPlayer();

  //敵を作成
  enemies = [];
}

function draw() {
  //ブロックの追加
  if (frameCount % 120 === 1) addEnemy(enemies); // 一定間隔で追加

  //全エンティティの位置を更新
  for (let enemy of enemies) updatePositionEnemy(enemy);

  background(0);
  //ぜんエンティティを線画
  drawPlayer(player);
  for (let enemy of enemies) drawEnemy(enemy);
  drawEnemy(enemies);
}

function mousePressed() {
  // （ここにマウスボタンを押したときの処理が入る）
}
