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
  //selected NO box
var selectedNo = document.getElementById('selectedNo');
  //selected not sure box
var notSure = document.getElementById('notSure');
  //callback
var requestCallback = document.getElementById('requestCallback');
var requestP = document.getElementById('requestP');

// requestCallback
// requestCallback
// requestCallback
var reqMod = 1;
requestP.addEventListener('click',()=>{
  if(reqMod % 2 === 1){
    requestCallback.className += " requestCallbackClicked";
  }else{
    requestCallback.classList.remove("requestCallbackClicked");
  }
  reqMod++;
})

// plan big box click
// plan big box click
// plan big box click
basicPlan.addEventListener('click',()=>{
  planObject.plan = 'basicPlan'
  lockedCheckContainer.style.maxHeight = '1000vw';
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);
});

premiumPlan.addEventListener('click',()=>{
  lockedCheckContainer.style.maxHeight = '1000vw';
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);
  planObject.plan = 'premiumPlan'
});

platinumPlan.addEventListener('click',()=>{
  lockedCheckContainer.style.maxHeight = '1000vw';
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);
  planObject.plan = 'platinumPlan'
});

// unlockCheck functions
// unlockCheck functions
// unlockCheck functions
function closeBoxes(){
  selectSimSize.style.maxHeight = '0vw';
  selectedNo.style.height = '0vw';
  notSure.style.height = '0vw';
}
// yes
checkedYesID.addEventListener('click',()=>{
  closeBoxes();
  selectSimSize.style.maxHeight = '1000vw';
});

// no
checkedNoID.addEventListener('click',()=>{
  closeBoxes();
  selectedNo.style.height = '16vw';
});

// not sure
checkedNotSureID.addEventListener('click',()=>{
  closeBoxes();
  notSure.style.height = '11vw';
});





// store object
var planObject = {
  plan:''
}




window.onload = function(){
  carAnim();
}
