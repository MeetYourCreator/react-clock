import React, { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { getAllTimeZones, showWorldTime } from '../../services/time.js'
import WorldClock from '../../Components/WorldClock/WorldClock.jsx'
import "./WorldClocksContainer.css"

const WorldClocksContainer = () => {
  
  const [allTimeZones, setAllTimeZones] = useState([])
  const [worldtime, setWorldTime] = useState()
  // console.log(`WorldClocks(allTimeZones): ${allTimeZones}`)
  
  //  useEffect(() => {
  //    setTimeout(() => setWorldTime(worldtime), 1000)
  //  })
  console.log('1-before useEffect')
  useEffect(() => {
    console.log('3-inside useEffect')
    setTimeout(fetchTimeZones, 1000)
    console.log("4-after setTimeout")
  }) 
  console.log('2-after useEffect')
 
  const fetchTimeZones = async () => {
    //getAllTimeZones from services/time.js
    const timezones = await getAllTimeZones();
    console.log('6-data recieved')
    //setAllTimeZones with the value of the timezones that were just received
    setAllTimeZones(timezones)
  }
   
  return (
    <>
      {allTimeZones.map((worldclock) => (
        
        <WorldClock
          key={uuid4()}
          id={uuid4()}
          className="world-clock-container"
          unix={worldclock.timestamp}
          gmtoffset={worldclock.gmtOffset}
          zonename={worldclock.zoneName}
          />
    
      ))}
    </>
  )
}


export default WorldClocksContainer;

