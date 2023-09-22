import React from 'react'
import TimeCard from './TimeCard'
async function getDateTime() {
  const res = await fetch(`https://worldtimeapi.org/api/ip`)
  return res.json()
}
 
export default async function SSG() {
  const result = await getDateTime()
  const dateTime = result.datetime
  return (
    <div>
      <TimeCard title="Static Site Generation" timestamp={dateTime} description="This time generates inside the build."/>
    </div>
  )
}