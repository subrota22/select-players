
//-------> add click event listener for each player start from here <--------//

document.getElementById("selectPlayer").addEventListener("click" , function() {
    getPlayerNameAndSelectButton("#nameOfPlayer" ,  "#orderList" ,  "selectPlayer") ;
})

document.getElementById("selectPlayer2").addEventListener("click" , function() {
    getPlayerNameAndSelectButton("#nameOfPlayer2" ,  "#orderList" ,  "selectPlayer2") ;
})

document.getElementById("selectPlayer3").addEventListener("click" , function() {
    getPlayerNameAndSelectButton("#nameOfPlayer3" ,  "#orderList" ,  "selectPlayer3") ;
})


document.getElementById("selectPlayer4").addEventListener("click" , function() {
    getPlayerNameAndSelectButton("#nameOfPlayer4" ,  "#orderList" ,  "selectPlayer4") ;
})

document.getElementById("selectPlayer5").addEventListener("click" , function() {
    getPlayerNameAndSelectButton("#nameOfPlayer5" ,  "#orderList" ,  "selectPlayer5") ; ;
})

document.getElementById("selectPlayer6").addEventListener("click" , function() {
getPlayerNameAndSelectButton("#nameOfPlayer6" ,  "#orderList" ,  "selectPlayer6") ;
})

document.getElementById("selectPlayer7").addEventListener("click" , function() {
getPlayerNameAndSelectButton("#nameOfPlayer7" ,  "#orderList" ,  "selectPlayer7") ;
})

document.getElementById("selectPlayer8").addEventListener("click" , function() {
getPlayerNameAndSelectButton("#nameOfPlayer8" ,  "#orderList" ,  "selectPlayer8") ;
})

document.getElementById("selectPlayer9").addEventListener("click" , function() {
getPlayerNameAndSelectButton("#nameOfPlayer9" ,  "#orderList" ,  "selectPlayer9") ;
})
//-------> add click event listener for each player end from here <--------// 

//----------------> calculate player expense start from here <---------------------//
document.getElementById("calculatePlayerExpense").addEventListener("click" , function() {
    calculatePlayerCoast("orderList" , "perPlayerExpense" , "playerExpense") ;
})

//-------------> calculat total expense for playing  start from here <---------------//

document.getElementById("calculateTotal").addEventListener("click" , function() {   
  const totalExpense = document.getElementById("totalExpense");

    const playerExpense = document.getElementById("playerExpense");
    const playerExpenseString = playerExpense.innerText ;
    const playerExpenseNumber = parseInt(playerExpenseString);

    const managerExpense = document.getElementById("managerExpense");
    const managerExpenseString = managerExpense.value ;
    const managerExpenseNumber = parseInt(managerExpenseString) ;
        
    const coachExpense = document.getElementById("coachExpense");
    const coachExpenseString = coachExpense.value ;
    const coachExpenseNumber = parseInt(coachExpenseString) ;

    if(isNaN(managerExpenseString) || isNaN(coachExpenseString) ||  managerExpenseString=="" || coachExpenseString==""){
        alert("Please enter only number to calculate. This feild not take any string or empty type of feild.") ;
        return ;
    }
   const totalCoastForPlaying = (playerExpenseNumber+ managerExpenseNumber + coachExpenseNumber) ;

   totalExpense.innerText = totalCoastForPlaying.toFixed(2) ;

})
//-------------> calculat total expense for playing  end from here <---------------//

