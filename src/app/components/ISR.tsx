import React from 'react'
import TimeCard from './TimeCard'
import axios from 'axios';

interface ISRProps {
    timeStamp: string
}

function ISR({timeStamp}: ISRProps) {
  return (
    <div>
        <TimeCard title="Incremental Static Regeneration" timestamp={timeStamp} description="This time generates inside the server and it regenerates this component in each 10 seconds. Refresh the page in each 10 seconds for see the change"/>
    </div>
  )
}
export default ISR

export async function getStaticProps(){ 
    const res = await axios.get('https://worldtimeapi.org/api/ip'); // Make a request for take the date and time from the API
   
    return {
      props: { 
        timestamp: res.data.datetime 
    },
      revalidate: 10, // Revalidate every 10 seconds
    };
  };