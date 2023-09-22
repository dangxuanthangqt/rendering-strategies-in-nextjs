import React from 'react'
import TimeCard from './TimeCard'

async function getDateTime() {
  const res = await fetch(`https://worldtimeapi.org/api/ip`, { next: { revalidate: 20 } })
  return res.json()
}

export default async function ISR() {
  const result = await getDateTime()
  const dateTime = result.datetime
  return (
    <div>
      <TimeCard title="Incremenral Static Regeneration" timestamp={dateTime} description="This time generates inside the server and it regenerates this component in each 10 seconds. Refresh the page in each 10 seconds for see the change"/>
    </div>
  )
}
