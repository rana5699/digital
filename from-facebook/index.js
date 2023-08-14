
const alhamdulillahDisplayValue = document.getElementById('display-value-alhamdulillah');

let sumAlhamdulillah = 0;

document.getElementById('alhamdulillah-increase-btn').addEventListener('click', function(){
    if (sumAlhamdulillah === 33) {
        alert('Tasnim Tomar Alhamdulillah Complete');
        return;
   }
    sumAlhamdulillah = sumAlhamdulillah + 1;
    alhamdulillahDisplayValue.innerText = sumAlhamdulillah;

    
});

document.getElementById('alhamdulillah-deccrease-btn').addEventListener('click', function(){
    if (sumAlhamdulillah > 0) {
        sumAlhamdulillah = sumAlhamdulillah - 1;
        alhamdulillahDisplayValue.innerText = sumAlhamdulillah;
    }
});


const subhanallahDisplayValue = document.getElementById('display-value-subhanallah');

let sumsubhanallah = 0;

document.getElementById('subhanallah-increase-btn').addEventListener('click', function(){
    if (sumsubhanallah === 33) {
        alert('Tasnim Tomar subhanallah Complete');
        return;
   }
    sumsubhanallah = sumsubhanallah + 1;
    subhanallahDisplayValue.innerText = sumsubhanallah;

    
});

document.getElementById('subhanallah-deccrease-btn').addEventListener('click', function(){
    if (sumsubhanallah > 0) {
        sumsubhanallah = sumsubhanallah - 1;
        subhanallahDisplayValue.innerText = sumsubhanallah;
    }
});


const allahuakbarDisplayValue = document.getElementById('display-value-allahuakbar');

let sumallahuakbar = 0;

document.getElementById('allahuakbar-increase-btn').addEventListener('click', function(){
    if (sumallahuakbar === 33) {
        alert('Tasnim Tomar allahuakbar Complete');
        return;
   }
    sumallahuakbar = sumallahuakbar + 1;
    allahuakbarDisplayValue.innerText = sumallahuakbar;

    
});

document.getElementById('allahuakbar-deccrease-btn').addEventListener('click', function(){
    if (sumallahuakbar > 0) {
        sumallahuakbar = sumallahuakbar - 1;
        allahuakbarDisplayValue.innerText = sumallahuakbar;
    }
});

document.getElementById('all-reset-btn').addEventListener('click', function(){
    alhamdulillahDisplayValue.innerText = 0;
    subhanallahDisplayValue.innerText = 0;
    allahuakbarDisplayValue.innerText = 0;
    sumAlhamdulillah = 0;  // Reset the count back to 0
    sumsubhanallah = 0;    // Reset the count back to 0
    sumallahuakbar = 0;    // Reset the count back to 0
    
});

