var bill= document.querySelector('#bill');
var payment= document.querySelector('#payment');
var enterButton= document.querySelector('#enter-btn');
var checkButton= document.querySelector('#check-btn')
var section2= document.querySelector('.section2');
var section3= document.querySelector('.section3');
var invalid= document.querySelector('.invalid');

const denoval=[2000, 500, 100, 50, 10, 5, 1];
const denoclass=[".two-thousand",".five-hundred",".hundred",".fifty",".ten",".five",".one"];

bill.addEventListener('keyup',(e) => {
    const val=e.target.value;
    enterButton.disabled=false;
    if (val === "")
        enterButton.disabled=true;
});

function enter(){
    section2.style.display="block";

    payment.addEventListener('keyup',(e) => {
        const val=e.target.value;
        checkButton.disabled=false;
        if (val === "")
            checkButton.disabled=true;
    });
}

function check(){
    var diffrence=(parseInt(payment.value) - parseInt(bill.value));
    if (diffrence < 0)
    {
        invalid.style.display="block";
    }
    else
    {
        
        for(i=0;i<7;i++){
            noOfNote=parseInt(diffrence / denoval[i]);
            diffrence=diffrence-(noOfNote*denoval[i]);
            document.querySelector(denoclass[i]).innerHTML=noOfNote;
        }

        section3.style.display="block";
    }
}
