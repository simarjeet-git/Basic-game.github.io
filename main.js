  let btnpress1 = document.getElementById("btn1");
  btnpress1.addEventListener("click", function(){
    gamecode( 0, getComputerChoice() );
  });

  let btnpress2 = document.getElementById("btn2");
  btnpress2.addEventListener("click", function(){
    gamecode( 0, getComputerChoice() );
  });
  
  let btnpress3 = document.getElementById("btn3");
  btnpress3.addEventListener("click", function(){
    gamecode( 0, getComputerChoice() );
  });
  
  function printresult(results){
    let result =  document.getElementById("item4")

    let displayresult =  document.createElement("h3")
    displayresult.textContent = results
    result.appendChild(displayresult)
  
  }
  
 function gamecode(u, c )
{ 
     
      if (u===c){
         printresult("WOW TOUGH COMPETITON")

    }
    else if (u===0&&c===2){
       printresult("YAHOO YOU WON")
    }
    else if (u===2&&c===1){
      printresult("YAHOO YOU WON")
    }
    else if (u===1&&c===0){
      printresult("YAHOO YOU WON")
        

    }
    else{
      printresult("SORRY YOU LOST")   
    }
 }
 function computerchoose(computerresult){
let computerC = document.getElementById("item3")
let computerdisplay = document.createElement("h3")
computerdisplay.textContent =  computerresult
computerC.appendChild(computerdisplay)
 }
  function getComputerChoice() {
  
    const months = ["0", "1", "2" ];

    const random = Math.floor(Math.random() * months.length);
    
     if (random===0){
       computerchoose("ROCK")
     }
     else if (random===1){
      computerchoose("PAPER")
     }
     else if(random===2) {
      computerchoose("SCISSOR")
     }
     return(random)
      }
      let gameclear =  document.getElementById("item2").addEventListener('click',()=>{location.reload()})