import React from 'react'
import TimeCard from './TimeCard'
import axios from 'axios';


function SSG() {
  return (
    <div>
      {/* <TimeCard title="Static Site Generation" timestamp={timeStamp} description="This time generates inside the server in build time."/> */}
    </div>
  )
}
export default SSG

// export async function generateStaticParams(){
//   const res = await axios.get('https://worldtimeapi.org/api/ip');

//   return {
//     props: { 
//       timeStamp: res.data.datetime 
//     },
//   };
// };