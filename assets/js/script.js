var now = dayjs()
// TODO: dayjs().format('LL') should give day without time, but can't get that working
var dayDisplay = $("#currentDay");
var textAreas = $("textarea")
var currentHour = dayjs().hour();

dayDisplay.text(now)

console.log(dayjs().hour())
console.log(textAreas)


// Compares index to current hour (index 0 is hour 9)
for (let i = 0; i < textAreas.length; i++){
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