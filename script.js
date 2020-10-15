const secondHand=document.querySelector('.second');
const minuteHand=document.querySelector('.minute');
const hourHand=document.querySelector('.hour');

function setDate(){
    const now=new Date();
    const minute=now.getMinutes();
    const second=now.getSeconds();
    let hour=now.getHours();
    if(hour>12){
        hour=hour-12;
    }
    // set degree for second hand
    const secondsDegree = ((second/60)*360)+90;
    secondHand.style.transform= `rotate(${secondsDegree}deg)`;
    
      // set degree for minute hand
    const minuteDegree= ((minute/60)*360)+90;
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`;
    

    // set degree for hour hand
    const hourDegree= ((hour/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegree}deg)`;

    
};


setInterval(setDate,1000);

