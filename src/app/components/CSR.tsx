'use client'; // Disable server-side rendering with this statement in the component file
import React from 'react'
import TimeCard from './TimeCard'
import axios from 'axios';
import { useState, useEffect } from 'react'
export default function CSR() {
    const [dateTime, setDateTime] = useState('');
    useEffect(() => {
        axios
            .get('https://worldtimeapi.org/api/timezone/Europe') // Make a request for take the date and time from the API
            .then((res) => {
                setDateTime(res.data.datetime); // Set the date and time
            })
            .catch((error) => console.error(error)); // Catch the error
    }, [dateTime]); 

    return (
        <div>
            <TimeCard title="Client Side Rendering" timestamp={dateTime} description="This time generates inside the client." />
        </div>
    )
}


