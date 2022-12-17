const notaText=document.getElementsByClassName("txtEvent");
const dateEvent=document.querySelector("#dateEvent");
const form=document.getElementById("form");
const valToday=setToday();

const events=[];



form.addEventListener('submit',e=>{
    e.preventDefault();
    if (notaText[0].value!=''){
        createEvent(notaText[0].value,dateEvent.value,valToday);
        notaText[0].value="";
        renderEvents();
    }
    
});

function setToday(){
    var today = new Date();
    var dd = today.getDate()+1;
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
    dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }     
    today = yyyy + '-' + mm + '-' + dd;
    dateEvent.setAttribute("min",today);
    return today;
}

function renderEvents(){

    const html=events.map(event =>{
        return `
        <div class="event-container" id="event-container ${event.id}">
            <div class="event-data">
                <div class="daysLeft">${event.diffDays} <br>días</div>
                <div class="eventText">${event.content}</div>
                <div class="dateEvent">${event.date}</div> 
                <button class="delete-event-button" data-id="${event.id}">Eliminar</button>
            </div>
        </div>
    `});
    
    const eventsContainer=document.querySelector(".all-event-container");
    eventsContainer.innerHTML=html.join('');

    const deleteButton=document.querySelectorAll('.delete-event-button');

    deleteButton.forEach(button =>{
        button.addEventListener('click',()=>{
            const id=button.getAttribute('data-id');
            const eventIndex=events.findIndex(ev=>ev.id===id);
            events.splice(eventIndex,1);
            document.getElementById("event-container "+id).remove();
        });
    });
}

function createEvent(value,myDate,actualDate){
    const date1 = new Date(myDate);
    const date2 = new Date(actualDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    const newEvent={
        id:(Math.random()*100).toString(36).slice(3),
        content:value,
        date:myDate,
        diffDays:diffDays
    };
    events.push(newEvent);
}