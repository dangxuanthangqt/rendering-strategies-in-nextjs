import React from 'react'
import TimeCard from './TimeCard'
import axios from 'axios';

interface SSRProps {
    timeStamp: string
}

function SSR({timeStamp}: SSRProps) {
  return (
    <div>
        <TimeCard title="Server Side Rendering" timestamp={timeStamp} description="This time generates inside the server."/>
    </div>
  )
}
export default SSR

export async function getServerSideProps() {
    const res = await axios.get('https://worldtimeapi.org/api/ip');
    const data = await res.data.datetime;
    return {
      props: {
        timeStamp: data,
      },
    };
  }
