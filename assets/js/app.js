var simCard = document.getElementsByClassName('simCard')[0]
console.log(simCard);

function carAnim(){
  simCard.style.top = "-5.904vw";
  simCard.style.opacity = "1";
  simCard.style.transform = 'rotate(0deg)';
}





// elements by ID
// elements by ID
// elements by ID
  //pla boxes
var basicPlan = document.getElementById('basicPlan');
var premiumPlan = document.getElementById('premiumPlan');
var platinumPlan = document.getElementById('platinumPlan');

  //plan checkboxes
var lockedCheckContainer = document.getElementById('lockedCheckContainer');
var checkedYesID = document.getElementById('checkedYesID');
var checkedNoID = document.getElementById('checkedNoID');
var checkedNotSureID = document.getElementById('checkedNotSureID');
  //simcar size
var selectSimSize = document.getElementById('selectSimSize');
var simFullSize = document.getElementById('simFullSize');
var simMicro = document.getElementById('simMicro');
var nanoSim = document.getElementById('nanoSim');

// plan big box click
// plan big box click
// plan big box click
basicPlan.addEventListener('click',()=>{
  planObject.plan = 'basicPlan'
  lockedCheckContainer.style.height = '27vw';
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);
});

premiumPlan.addEventListener('click',()=>{
  lockedCheckContainer.style.height = '27vw';
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);
  planObject.plan = 'premiumPlan'
});

platinumPlan.addEventListener('click',()=>{
  lockedCheckContainer.style.height = '27vw';
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);
  planObject.plan = 'platinumPlan'
});

// unlockCheck functions
// unlockCheck functions
// unlockCheck functions
checkedYesID.addEventListener('click',()=>{
  selectSimSize.style.height = '24vw';
});





// store object
var planObject = {
  plan:''
}




window.onload = function(){
  carAnim();
}
