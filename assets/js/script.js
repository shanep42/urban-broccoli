// TODO: dayjs().format('LL') should give day without time
var dayDisplay = $("#currentDay");
var textAreas = $("textarea")
var currentHour = dayjs().hour();
var saveButtons = document.querySelectorAll(".saveBtn")
console.log(saveButtons)

function timeUpdate(){
    dayDisplay.text(dayjs())
}

// Loads any local storage previously saved to text area
for (let i = 0; i < textAreas.length; i++){
    if (localStorage.getItem(i) != undefined){
        textAreas[i].value = localStorage.getItem(i);
    }
// Compares index to current hour (index 0 is hour 9)
    if (i + 9 < currentHour){
        textAreas[i].classList.remove('present');
        textAreas[i].classList.remove('future');
        textAreas[i].classList.add('past');
        
    } else if (i + 9 === currentHour){
        textAreas[i].classList.remove('past');
        textAreas[i].classList.remove('future');
        textAreas[i].classList.add('present');
    } else {
        textAreas[i].classList.remove('present');
        textAreas[i].classList.remove('past');
        textAreas[i].classList.add('future');
    }
}

function testFunction () {
    console.log("Clicked!")
}

// Event listener for buttons
// Saves any text content to local storage using the button index as a key
for (let i = 0; i < saveButtons.length; i++){
    saveButtons[i].addEventListener('click', function() {
        localStorage.setItem(i, textAreas[i].value)
    })
}

// Live update the date/time display at top of page (once a second)
setInterval(timeUpdate, 1000)