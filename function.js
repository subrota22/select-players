//-----------> add best five players function start <-------------//
function getPlayerNameAndSelectButton(GetPlayerName, orderList , selectPlayerButton) {
    const nameOfplayer = document.querySelector(GetPlayerName);
    const parentOfList = document.querySelector(orderList);
    const selectButton  = document.getElementById(selectPlayerButton) ;
    const orderListGet = document.querySelector("#orderList");
    const listLength = orderListGet.childElementCount;
      const listNumber = parseInt(listLength) ;
         if(listNumber >=5  ) {
             //disabled all button after 5 select 
         alert("You can not select more than five players") ;
         const getButtons = document.getElementsByClassName("selectPlayer") ;
       for(let i=0; i<=getButtons.length-1 ; i++) {
      const buttonElement = getButtons[i] ;
   buttonElement.setAttribute("disabled" , true) ;
  buttonElement.style.backgroundColor ="red" ;
         }
        } else{
   selectButton.setAttribute("disabled" , true) ;
    selectButton.style.backgroundColor ="green" ;
    selectButton.innerText ="SELECTED";
    const createList = document.createElement("li") ;
    createList.innerText = nameOfplayer.innerText ;
    parentOfList.appendChild(createList) ;
      }
 }
//-----------> add best five players function start <-------------//

//-----------> calculate player expense  function start <-------------//

function calculatePlayerCoast(getOrderList , getPerPlayerExpense , getPlayerExpense) {
    const orderList = document.getElementById(getOrderList);
    const perPlayer = document.getElementById(getPerPlayerExpense);
    const playerExpense = document.getElementById(getPlayerExpense);//innner text will be active when we will use the getElementById
    const perPlayerString = perPlayer.value ;
    const perPlayerNumber = parseInt(perPlayerString) ;
    if(isNaN(perPlayerString) || perPlayerString==""){
        alert("Please enter only number to calculate. This feild not take any string or empty type of feild.") ;
        return ;
    }
    const listLength = orderList.childElementCount; //child element count => to count the all order list children//
    const listNumber = parseInt(listLength) ;
    const totalPlayerExpense = listNumber * perPlayerNumber  ;
    playerExpense.innerText = totalPlayerExpense.toFixed(2) ;
}

//-----------> calculate player expense  function start <-------------//

