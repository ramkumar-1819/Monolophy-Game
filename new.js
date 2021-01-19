//getting all boxes using css selector
var x=document.querySelectorAll(".box");
//inilialize empty array for storing collection of objects
var arr_box=[];
for(i=0;i<x.length;i++){
  if(i==5 || i==6 || i==9 ||i==10){
    continue;
  }
  else{
      arr_box.push(x[i])
  }
}
//initialize array of board values
let board=[10,20,30,40,50,60,80,90,100,110,120];
var res=document.getElementById("result");//result element
class Monolopy{
  constructor(name,position,money){
    this.name=name;
    this.position=position;
    this.money=money;
  }
  rolldice(value){
    let newpos=Math.ceil(Math.random()*6);
    this.updateposition(newpos,value)
  }
  updateposition(newpos,value){
    if(value===0){//player_1's Chance
    var $img1=document.getElementsByClassName("one")[0];
    $img1.remove();//removing image in previous position
    this.position+=newpos;//newposition
    if(this.position>board.length){
        this.position=this.position%=board.length;//change position of player_1 when position>board length
    }
    var template='<img class="one" src="https://www.vhv.rs/dpng/d/407-4072334_red-dice-png-transparent-images-find-the-probability.png">'
    arr_box[this.position].innerHTML+=template;//adding image to the newposition
    }
    else if(value===1){//player_2's Chance
        var $img2=document.getElementsByClassName("two")[0];
        $img2.remove()//removing image in previous position
        this.position+=newpos;//newposition
        if(this.position>board.length){
        this.position=this.position%=board.length;//change position of player2 when position>board length
    }
        var template='<img class="two" src="https://www.a-zdarts.com/mm5/graphics/00000001/die-533.jpg">'
        arr_box[this.position].innerHTML+=template;//adding image to the newposition
    }
    this.updatemoney(this.position,value);
  }
   updatemoney(position,value){
     this.money-=board[position-1];
     if(value===0){
    document.getElementsByClassName("amt1")[0].innerHTML=this.money;//money updation of Player1
    if(Number(document.getElementsByClassName("amt1")[0].innerHTML)<=0){//checking remaining amount
        res.innerHTML="Player_2 Wins";//display the result
        res.style.backgroundColor="#960b12";
        per_1=null;//Stop the working of buttons
        per_2=null;
    }
   }
   else{
     document.getElementsByClassName("amt2")[0].innerHTML=this.money;//money updation of Player2
     if(Number(document.getElementsByClassName("amt2")[0].innerHTML)<=0){//checking remaining amount
        res.innerHTML="Player_1 Wins"//display the result
        res.style.backgroundColor="#057521";
        per_1=null;//Stop the working of buttons
        per_2=null;
        
   }
   }
   
}
}
var Buttons=document.querySelectorAll("button");
var per_1=new Monolopy("Ram",0,1000);
var per_2=new Monolopy("Kumar",0,1000);
Buttons[0].addEventListener("click",function(){
  per_1.rolldice(0)
});
Buttons[1].addEventListener("click",function(){
  per_2.rolldice(1)
})