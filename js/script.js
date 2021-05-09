// declaration
let title = document.getElementById("title"),
    eventName = document.getElementById("event_Name"),
    eventDate = document.getElementById("event_Time"),
    startButton = document.getElementById("start_btn"),
    timer = document.getElementById("timer"),
    countDownTimer;

// Make An Event at the button
startButton.addEventListener('click',() => {
     countDownTimer = setInterval(() => countFunc() ,1000)
})

let countFunc = () => {
    if(eventName.value == "" || eventDate.value == ""){
        timer.innerHTML = "Enter Event's information";
    }else{
        // today's date & Time
        let todayDate = new Date().getTime(),
            // input date and time
            countDown = new Date(eventDate.value).getTime(),
            // differnce between today's date & countdown Date
            output = countDown - todayDate,
            // calculate days,hours,minutes and seconds
            days = Math.floor(output / (1000 * 60 * 60 * 24)),
            hours = Math.floor((output % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60)),
            minutes = Math.floor((output % (1000 * 60 * 60 )) / (1000 * 60 )),
            seconds = Math.floor((output % (1000 * 60 )) / (1000));
        
        // displaying the timer
        timer.innerHTML=` The Remaining Time Of ${eventName.value} Event Is: 
         ${days} Days: ${hours} Hours: ${minutes} Minutes:${seconds} Seconds
          `;
        
        if(output>0){
            output--;
        }else{
            clearInterval(countDownTimer);
            timer.innerHTML="Your Event Is Now"
        }

    }
}
