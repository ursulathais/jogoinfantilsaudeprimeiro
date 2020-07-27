var tela=1
var largura=550
var altura=80
var xMenu=20
var yMenu1=40
var yMenu2=145
var yMenu3=245
var yMenu4=345
var img

var xs=140
var xn=350
var y=235
var alt=100
var larg=100
var imgs
var imgn
var xo=0
var yo=350

var questao=1
var animacaoAcertou=false
var animacaoErrou=false

var pontos=0


function preload(){
    img = loadImage("lua.JPG");
    imgs = loadImage("curti.jpg");
    imgn = loadImage("Ncurti.jpg");
  img1 = loadImage("img1.jpg");
  img2 = loadImage("img2.jpg");
  img3 = loadImage("img3.jpg");
  img4 = loadImage("img4.jpg");
  img5 = loadImage("img5.jpg");
  img6 = loadImage("img6.jpg");
  img7 = loadImage("img7.jpg");
  img8 = loadImage("img8.jpg");
  img9 = loadImage("img9.jpg");
  img10 = loadImage("img10.jpg");
  img11 = loadImage("img11.jpg");
  img12 = loadImage("img12.jpg");
  img13 = loadImage("img13.jpg");
}

function setup() {
  createCanvas(600, 500);
}

function draw() {
  textStyle(NORMAL)
  //Tela de Menu
  if(tela==1) {
    background(020);
    //Menu com quatro opções de tela
    //Começar o jogo
    textAlign(CENTER)
    textSize(50)
    
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu1 && mouseY<yMenu1+altura){
    stroke(200)
    fill(100)
    rect(xMenu, yMenu1, largura, altura, 40)
       if(mouseIsPressed){
        tela=2
      }
    }
    fill('blue')
    noStroke()    
    text("COMEÇAR",280,100)
    
    //Como Jogar
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu2 && mouseY<yMenu2+altura){
    stroke(200)
    fill(100)
    rect(xMenu, yMenu2, largura, altura, 15)
      if(mouseIsPressed){
        tela=3
      }
    }
    fill(240)
    noStroke()
    text("Entendendo o joguinho",300,200)
    
    //Instruções Educacionais
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu3 && mouseY<yMenu3+altura){
    stroke(200)
    fill(100)
    rect(xMenu, yMenu3, largura, altura, 15)
      if(mouseIsPressed){
        tela=4
      }
    }
    fill(240)
    noStroke()
    text("Instruções Educacionais",300,300)
           
    //Créditos 
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu4 && mouseY<yMenu4+altura){
    stroke(200)
    fill(100)
    rect(xMenu, yMenu4, largura, altura, 5)
      if(mouseIsPressed){
        tela=5
      }
    }
    fill(240)
    noStroke()
    text("Professor criador",300,400)
  
}
//jogo em ação
else if(tela==2){
  background(10);
  {
    if(questao==1){
    image(img1,50,10,180,180)
     text("Mãos sujas",250,50);}
  if(questao==2) {
     image(img2,50,10,180,180)
     text("Apertos de\n mãos",250,50);}
  if(questao==3) {
     image(img3,50,10,180,180)
     text("Depois das\n brincadeiras",250,50);}
  if(questao==4) {
     image(img4,50,10,180,180)
     text("Depois de\n usar o banheiro",250,50);}
  if(questao==5) {
     image(img5,50,10,180,180)
     text("Antes de\n dormir",250,50);}
  if(questao==6) {
     image(img6,50,10,180,180)
     text("Depois que\n acordar",250,50);}
  if(questao==7) {
     image(img7,50,10,180,180)
     text("Antes das\n refeições",250,50);}
  if(questao==8) {
     image(img8,50,10,180,180)
     text("Antes de tocar\n nos alimentos",250,50);}
  if(questao==9) {
     image(img9,50,10,180,180)
     text("Depois de cuidar\n de pessoas\n doentes",250,50);}
  if(questao==10) {
     image(img10,50,10,180,180)
     text("Depois dos\n esportes",250,50);}
    if(questao==11) {
      tela=6}
}
  
  if(mouseX>xs && mouseX<xs+larg && mouseY>y && mouseY<y+alt){
    stroke(200)
    fill(50)
    if(mouseIsPressed){
      (animacaoAcertou=true)
      }
  }
  else{
    fill(140)
  }
  rect(xs,y,larg,alt)
  if(mouseX>xn && mouseX<xn+larg && mouseY>y && mouseY<y+alt){
    stroke(200)
    fill(50)
    if(mouseIsPressed){
    (animacaoErrou=true)
      }
  }
  else{
    fill(140)
  }
  rect(xn,y,larg,alt)
  fill(240)
  textSize(45)
  noStroke()
  textAlign(LEFT)
  text("SIM",150,300)
  text("NÃO",350,300)
}
 if(animacaoAcertou==true){
   image(imgs,xo,yo,100,100)
      xo=xo+4
    if(xo>600){
      pontos=pontos+1
      questao=questao+1
      xo=0
    animacaoAcertou=false}
 }
  if(animacaoErrou==true){
   image(imgn,xo,yo,100,100)
      xo=xo+4
    if(xo>600){
      questao=questao+1
      xo=0
    animacaoErrou=false}
 }
  //Resultado final
else if(tela==6){
  background(10);
    if(pontos<=5){
      image(img11,200,200,200,200)
     text("OPA! VOCÊ PERDEU.\n O VIRUS TE PEGOU.", 50,100)}
  if(pontos>5 && pontos<=8) {
     image(img12,200,250,200,200)
     text("CUIDADO!\n O VIRUS ESTÁ TE\n PROCURANDO!!\n TENTE OUTRA VEZ",50,50);}
  if(pontos>=9) {
     image(img13,200,200,200,200)
     text("PARABÉNS!!!\n VOCÊ VENCEU!!!",50,100);}
}
//Aprendendo a jogar
else if(tela==3){
  background(10)
  fill(240)
  textSize(30)
  noStroke()
  textAlign(LEFT)
  text("VAMOS APRENDER A JOGAR", 50,50)
  text(" Você sabia que lavar as mãos e beber\n água são amigos da saúde? ", 50,120)
  text("Então responda, se nas imagens que\n você vê e lê é importante\n lavar as mãos (higienizar) e/ou\n beber água (hidratar).\n Quanto mais pontos você ganhar\n mais saúde terá para brincar!", 50,250)
}
//Informações do jogo
else if(tela==4){
  background(10)
  fill(240)
  textSize(20)
  noStroke()
  textAlign(LEFT)
  text("INSTRUÇÕES", 50,50)
  text(" Ano: Primeiro ano do fundamental1\n Matéria: LIV-Laboratório Inteligência de Vida", 50,100)
  text("A problemática deste jogo é mostrar a criânça a\n importância da Higienização relacionado à saúde,\n não só para o cenário atual de pandemia\n mas também para a vida.", 50,200)
  text("Habilidades: Leitura, Memorização e Técnologia\n Aprendizado: higienização, hidratação e hábitos saudáveis.",50,350)
}
//Créditos
else if(tela==5){
  background(10)
  image(img,150,200,300,300)
  fill(240)
  textSize(30)
  noStroke()
  textAlign(LEFT)
  text("CRÉDITOS", 50,50)
  text(" Professor Educador & Programador:\n Úrsula Thaís de Paula Medeiros", 50,120)
} 
}
