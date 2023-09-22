import React from 'react'
import TimeCard from './TimeCard'

async function getDateTime() {
  const res = await fetch(`https://worldtimeapi.org/api/ip`, { cache: 'no-store' })
  return res.json()
}

export default async function SSR() {
  const result = await getDateTime()
  const dateTime: string = result.datetime
  console.log(result.datetime)
  return (
    <div>
      <TimeCard title="Server Side Rendering" timestamp={dateTime} description="This time generates inside the server."/>
    </div>
  )
}