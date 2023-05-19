// fetch data
fetch('data.json')
.then((response) => response.json())
.then((data) => info.push(...data));

// create an array
let info = []
console.log(info)

// store the timeframes
let week = document.querySelector(".week")
let day = document.querySelector(".day")
let month = document.querySelector(".month")

// get the card elements
let currentTime = document.querySelectorAll(".current-time")
let previousTime = document.querySelectorAll(".previous-time")


// functions when the button is clicked
week.addEventListener("click", weeklyFunction)
day.addEventListener("click", daylyFunction)
month.addEventListener("click", monthlyFunction)

// weekly function
function weeklyFunction(){
    week.classList.add("active")
    day.classList.remove("active")
    month.classList.remove("active")

    // change the cards
    currentTime[0].innerHTML = info[0].timeframes.weekly.current + "hrs";
    previousTime[0].innerHTML = "Previous - " + info[0].timeframes.weekly.previous + "hrs";

    currentTime[1].innerHTML = info[1].timeframes.weekly.current + "hrs";
    previousTime[1].innerHTML = "Previous - " + info[1].timeframes.weekly.previous + "hrs";

    currentTime[2].innerHTML = info[2].timeframes.weekly.current + "hrs";
    previousTime[2].innerHTML = "Previous - " + info[2].timeframes.weekly.previous + "hrs";

    currentTime[3].innerHTML = info[3].timeframes.weekly.current + "hrs";
    previousTime[3].innerHTML = "Previous - " + info[3].timeframes.weekly.previous + "hrs";

    currentTime[4].innerHTML = info[4].timeframes.weekly.current + "hrs";
    previousTime[4].innerHTML = "Previous - " + info[4].timeframes.weekly.previous + "hrs";

    currentTime[5].innerHTML = info[5].timeframes.weekly.current + "hrs";
    previousTime[5].innerHTML = "Previous - " + info[5].timeframes.weekly.previous + "hrs";
}


// daily function
function daylyFunction(){
    week.classList.remove("active")
    day.classList.add("active")
    month.classList.remove("active")

    // change the cards
    currentTime[0].innerHTML = info[0].timeframes.daily.current + "hrs";
    previousTime[0].innerHTML = "Previous - " + info[0].timeframes.daily.previous + "hrs";

    currentTime[1].innerHTML = info[1].timeframes.daily.current + "hrs";
    previousTime[1].innerHTML = "Previous - " + info[1].timeframes.daily.previous + "hrs";

    currentTime[2].innerHTML = info[2].timeframes.daily.current + "hrs";
    previousTime[2].innerHTML = "Previous - " + info[2].timeframes.daily.previous + "hrs";

    currentTime[3].innerHTML = info[3].timeframes.daily.current + "hrs";
    previousTime[3].innerHTML = "Previous - " + info[3].timeframes.daily.previous + "hrs";

    currentTime[4].innerHTML = info[4].timeframes.daily.current + "hrs";
    previousTime[4].innerHTML = "Previous - " + info[4].timeframes.daily.previous + "hrs";

    currentTime[5].innerHTML = info[5].timeframes.daily.current + "hrs";
    previousTime[5].innerHTML = "Previous - " + info[5].timeframes.daily.previous + "hrs";
}

// monthly function
function monthlyFunction(){
    week.classList.remove("active")
    day.classList.remove("active")
    month.classList.add("active")

    // change the cards
    currentTime[0].innerHTML = info[0].timeframes.monthly.current + "hrs";
    previousTime[0].innerHTML = "Previous - " + info[0].timeframes.monthly.previous + "hrs";

    currentTime[1].innerHTML = info[1].timeframes.monthly.current + "hrs";
    previousTime[1].innerHTML = "Previous - " + info[1].timeframes.monthly.previous + "hrs";

    currentTime[2].innerHTML = info[2].timeframes.monthly.current + "hrs";
    previousTime[2].innerHTML = "Previous - " + info[2].timeframes.monthly.previous + "hrs";

    currentTime[3].innerHTML = info[3].timeframes.monthly.current + "hrs";
    previousTime[3].innerHTML = "Previous - " + info[3].timeframes.monthly.previous + "hrs";

    currentTime[4].innerHTML = info[4].timeframes.monthly.current + "hrs";
    previousTime[4].innerHTML = "Previous - " + info[4].timeframes.monthly.previous + "hrs";

    currentTime[5].innerHTML = info[5].timeframes.monthly.current + "hrs";
    previousTime[5].innerHTML = "Previous - " + info[5].timeframes.monthly.previous + "hrs";
}

window.onload = () => {
    weeklyFunction()
}