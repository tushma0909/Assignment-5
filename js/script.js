// heart icon functionalities
const heartIcons = document.getElementsByClassName("heart-icon");

  for (i=0; i< heartIcons.length; i++) {
    const icon = heartIcons[i]
    icon.addEventListener("click", function() {

    const totalHeartIcons = parseInt(document.getElementById("available-hearts").innerText);
     const newHeartCount= totalHeartIcons + 1;
document.getElementById("available-hearts").innerText = newHeartCount;

})
  }

  
  // call button functionalities
 let callBtn = document.getElementsByClassName('call-btn')

 for(let button of callBtn){
button.addEventListener('click',function(){
 let availableCoins = document.getElementById('available-coins')
 let totalCoins = parseInt(availableCoins.innerText)

 if(totalCoins >= 20){
  totalCoins-= 20;
  availableCoins.innerText = totalCoins;
 }
else{

  alert('you do not have sufficient coins to make a call')
    return;
  }

  
const service = button.parentElement.parentElement;
const serviceName = service.querySelector('.service-name').innerText;
const helpLineNumber = service.querySelector('.helpline-number').innerText;
alert(`Calling ${serviceName} at ${helpLineNumber}`)

const currentCallTime = new Date().toLocaleTimeString();

const callHistoryContainer = document.getElementById('call-history-container');
const callHistory = document.createElement('div')
callHistory.classList.add('pb-2','border-[1px]', 'border-gray-100', 'shadow-lg','rounded-lg', 'flex','justify-between', 'items-center', 'p-2');
callHistory.innerHTML = 
         `<div>
           <p class="font-medium">
            ${serviceName}
           </p>
           <p class="font-medium">
             ${helpLineNumber}
           </p>
         </div>

         <p class="text-xs text-gray-400">${currentCallTime}</p>`;
         callHistoryContainer.appendChild(callHistory);



 });

}

const callHistoryContainer = document.getElementById('call-history-container');
// clear button functionalities
const clearBtn = document.getElementById('clear-btn').addEventListener('click', function(){
  callHistoryContainer.innerHTML = '';
  
})


// functionality for copy button

const copyButtons = document.getElementsByClassName('copy-btn');
const copyCountNumber = document.getElementById('copy-count');

let copyCount = 0;

for (const copyButton of copyButtons){
   copyButton.addEventListener('click',function(){
    copyCount++;
    copyCountNumber.innerText= copyCount;


    const copyCard = copyButton.parentElement.parentElement;
    const copyCardNumber= copyCard.querySelector('.helpline-number').innerText;
    navigator.clipboard.writeText(copyCardNumber);
    
    
    alert(`The number has been copied: ${copyCardNumber}`);
   })
}
