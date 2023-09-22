import React from 'react'
import TimeCard from './TimeCard'
import axios from 'axios';

interface SSGProps {
  timeStamp: string
}
function SSG({timeStamp}:SSGProps) {
  return (
    <div>
      <TimeCard title="Static Site Generation" timestamp={timeStamp} description="This time generates inside the server in build time."/>
    </div>
  )
}
export default SSG

export async function getStaticProps(){
  const res = await axios.get('https://worldtimeapi.org/api/ip');

  return {
    props: { 
      timeStamp: res.data.datetime 
    },
  };
};