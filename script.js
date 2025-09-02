let countdownInterval;

document.getElementById("startBtn").addEventListener("click",startCountdown);

function startCountdown(){
    clearInterval(countdownInterval);

    let dateValue = document.getElementById("endDate").value;
    let timeValue = document.getElementById("endTime").value;

    if(!dateValue || !timeValue){
        alert("Please Select both date and time!");
        return;
    }

// Combine date & time into one string

let targetDate = new Date(`${dateValue}T${timeValue}`).getTime();

function updateTimer(){
    let now = new Date().getTime();
    let diff = targetDate - now;

    if(diff<=0){
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        document.getElementById("message").textContent = "Time's up!";
        clearInterval(countdownInterval);
        return;
    }

    let days = Math.floor(diff/(1000 * 60 * 60 * 24 ));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    let minutes = Math.floor((diff % ( 1000 * 60 * 60))/(1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60 )) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

   // document.getElementById("timer").textContent = `${days} ${hours}  ${minutes} ${seconds}`;

}

    updateTimer();
    countdownInterval = setInterval(updateTimer,1000);
}