function gamecode(u, c )
{ 
      if (u===c){
        document.write("wow tough competition")

    }
    else if (u===0&&c===2){
        document.write("yahooo you won")
    }
    else if (u===2&&c===1){
        document.write("yahooo you won")
    }
    else if (u===1&&c===0){
        document.write("yahooo you won")
        

    }
    else{
        document.write("sorry you lost")
    }
 }
  function getComputerChoice() {
  
    const months = ["0", "1", "2" ];

    const random = Math.floor(Math.random() * months.length);
    
     if (random===0){
      document.write("Computer choose = Rock")
      document.write("<br>")

     }
     else if (random===1){
      document.write("Computer choose = Paper")
      document.write("<br>")
     }
     else if(random===2) {
      document.write("Computer choose = Scissor")
      document.write("<br>")
     }
     return(random)
      }