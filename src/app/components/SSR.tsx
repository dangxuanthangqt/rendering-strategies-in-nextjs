import React from 'react'
import TimeCard from './TimeCard'

async function getDateTime() {
  const res = await fetch(`https://worldtimeapi.org/api/timezone/Europe`, { cache: 'no-store' })
  return res.json()
}

export default async function SSR() {
  const result = await getDateTime()
  const dateTime = result.datetime
  return (
    <div>
      <TimeCard title="Server Side Rendering" timestamp={dateTime} description="This time generates inside the server."/>
    </div>
  )
}