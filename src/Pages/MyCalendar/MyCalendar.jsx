import React, { useState } from 'react';
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {

    const [value, onChange] = useState(new Date());

    return (
        <div className='container  min-h-[20rem]'>
            <h2 className="text-center text-base md:text-xl my-4 md:my-6 font-semibold">Calender</h2>
            <div className='flex justify-center'>
                <Calendar locale onChange={onChange} value={value} className='mb-16' />
            </div>
        </div>
    );
};

export default MyCalendar;