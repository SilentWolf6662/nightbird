'use client';
import React, { useState, useEffect } from 'react';

const EventTimer = ({ eventDate }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = () => {
        // Check if eventDate is defined before attempting to split it
        if (!eventDate) {
            // Handle the case where eventDate is undefined, perhaps by setting a default value or logging an error
            console.error('eventDate is undefined');
            return;
        }

        // Parse the eventDate and eventTime to create a valid Date object
        const [datePart, timePart] = eventDate.split('T');
        const [day, month, year] = datePart.split('.');
        const formattedDateString = `${year}-${month}-${day} ${timePart}`;

        // Create a valid Date object with the properly formatted string
        const tempDeadline = new Date(formattedDateString);
        let offset = tempDeadline.getTimezoneOffset();
        let deadline = new Date(tempDeadline.getTime() - (offset * 60 * 1000));

        // Calculate the time difference between the current date and the event date
        const timeRemaining = deadline - Date.now();

        // Update the state variables with the correct calculations for days, hours, minutes, and seconds
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutesRemaining = Math.floor((timeRemaining / 1000 / 60) % 60);
        const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);

        setDays(daysRemaining >= 0 ? daysRemaining : 0);
        setHours(hoursRemaining >= 0 ? hoursRemaining : 0);
        setMinutes(minutesRemaining >= 0 ? minutesRemaining : 0);
        setSeconds(secondsRemaining >= 0 ? secondsRemaining : 0);
    };

    useEffect(() => {
        getTime(); // Call getTime initially to set the state
        const eventTimerInterval = setInterval(() => getTime(), 1000);

        return () => clearInterval(eventTimerInterval);
    }, []);

    return (
        <>
            <div id="timer" className='flex gap-6 md:gap-16 mt-5 text-center'>
                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                    <p className='font-greatVibes font-semibold' id='event1-cd-days'>
                        {days < 10 ? `0${days}` : days}
                    </p>
                    <p className='font-arial'>
                        Days
                    </p>
                </div>
                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                    <p className='font-greatVibes font-semibold' id='event1-cd-hours'>
                        {hours < 10 ? `0${hours}` : hours}
                    </p>
                    <p className='font-arial'>
                        Hours
                    </p>
                </div>
                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                    <p className='font-greatVibes font-semibold' id='event1-cd-mins'>
                        {minutes < 10 ? `0${minutes}` : minutes}
                    </p>
                    <p className='font-arial'>
                        Mins
                    </p>
                </div>
                <div className='rounded-full text-accent bg-primary h-16 w-16 flex flex-col justify-center items-center'>
                    <p className='font-greatVibes font-semibold' id='event1-cd-secs'>
                        {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                    <p className='font-arial'>
                        Secs
                    </p>
                </div>
            </div>
        </>
    );
};

export default EventTimer;


'26 Oct 2017 00:00:00'
// eller
'01.12.2017 00:00:00'