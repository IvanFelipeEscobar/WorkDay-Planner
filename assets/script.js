//
var saveBtn = $(`.saveBtn`);
var currentDay = moment().format('dddd MMMM Do YYYY')


$(`#currentDay`).text(currentDay);

function colorCode() {
    var hour = moment().hours();

    $(`.time-block`).each(function() {
        var currHour = parseInt($(this).attr(`id`));

        if (currHour > hour) {
            $(this).addClass(`future`);
        }//adds .future class to hour blocks in the future
        
        else if (currHour === hour) {
            $(this).addClass(`present`);
        } //sets .present class to hour block of current hour
        
        else {
            $(this).addClass(`past`);
        }// sets past class to hour blocks in the past
    })
};

saveBtn.on(`click`, function() {

    var time = $(this).siblings(`.hour`).text();//key
    var plan = $(this).siblings(`.plan`).val();//value
   // save event to local storage

    localStorage.setItem(time, plan);
});


function init() {

    $(`.hour`).each(
        function() {
        var currHour = $(this).text();
        console.log(currHour)
        var currPlan = localStorage.getItem(currHour);
        if(currPlan !== null) {
            $(this).siblings(`.plan`).val(currPlan);
        }
    }
    )
}

//color code func changes the color of time blocks depending on time
//init func pulls saved events from local storage at start up
colorCode();
init();
