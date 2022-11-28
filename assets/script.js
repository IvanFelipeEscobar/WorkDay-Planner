var refreshBtn = $(`.refresh`)
var saveBtn = $(`.saveBtn`);
var currentDay = moment().format('dddd MMMM Do YYYY')


$(`#currentDay`).text(currentDay);//current date displayed at top

function colorCode() {
    var hour = moment().hours(); //returns current hour in military time

    $(`.time-block`).each(function() {
        var currHour = parseInt($(this).attr(`id`)); //parse string value of each timeblock id into an integer

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

refreshBtn.on(`click`, function() {
    localStorage.clear()
    window.location.reload()}
    )

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
        var currPlan = localStorage.getItem(currHour);//check local storage for each time block 
        if(currPlan !== null) {//if something is saved in local storage it will be rendered into text area
            $(this).siblings(`.plan`).val(currPlan);
        }
    }
    )
}

//color code func changes the color of time blocks depending on time
//init func pulls saved events from local storage at start up
colorCode();
init();
