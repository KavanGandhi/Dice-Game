var a =Math.random();
a=Math.floor(a*6)+1;
var ran_no="dice"+ a + ".png";
var dno = "./images/"+ran_no;
var b = document.querySelectorAll("img")[0].setAttribute("src",dno);

var c =Math.random();
c=Math.floor(c*6)+1;
var rann_no="dice"+ c + ".png";
var dnoo = "./images/"+rann_no;
var d = document.querySelectorAll("img")[1].setAttribute("src",dnoo);

if(a>c){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(a<c)
{
    document.querySelector("h1").textContent="Player 2 wins";
}
else{
    document.querySelector("h1").textContent="Draw";
}