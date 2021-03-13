//Display current day in the header
var currentDate = moment().format("MMMM Do, YYYY");
$('#currentDay').text(currentDate);

//Creating a variable for current time
var currentTime = moment().hour()
console.log(typeof currentTime)

//Creating an iteration with condition to compare times in order to change colors
$('.time-block').each(function(){
    var hourBlock = parseInt($(this).attr('id'))
    console.log(typeof hourBlock)
    
    if(hourBlock < currentTime) {
        $(this).addClass('past')
        $(this).removeClass('present')
        $(this).removeClass('future')
    } else if(hourBlock === currentTime){
        $(this).removeClass('past')
        $(this).addClass('present')
        $(this).removeClass('future')
    } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }
 });

 