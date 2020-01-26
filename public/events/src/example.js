var moment = require('moment');
// moment().format();



const today = moment().format();
const todayDate = moment().format("YYYY-MM-DD")

import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    defaultDate: today,
    navLinks: true, // can click day/week names to navigate views
    editable: false,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'Lost Planet',
        start: todayDate
      },
      {
        title: 'lost plaemnt',
        start: '2020-01-20',
        end: '2018-01-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2020-01-20'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2020-01-20'
      },
      {
        title: 'Conference',
        start: '2018-01-11',
        end: '2020-01-20'
      },
      {
        title: 'Meeting',
        start: '2018-01-12T10:30:00',
        end: '2018-01-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2020-01-20'
      },
      {
        title: 'Meeting',
        start: '2020-01-20'
      },
      {
        title: 'Happy Hour',
        start: '2018-01-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2018-01-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: todayDate,
        textColor: 'black',
        color: 'yellow',
        id: 'a'
      },
      {
        title: 'motherfucking day',
        url: 'http://google.com/',
        start: '2020-01-12'
      }
      
    ]

   
    });


    // color: 'yellow', 
    // textColor: 'black'


 
 
  calendar.render();
});
