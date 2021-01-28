import axios from 'axios'
import { v4 as uuid4 } from 'uuid'

export const getAllTimeZones = async () => {
  const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=7KJHTP7QS6J7&format=json`;
  const res = await axios.get(url);
  console.log('5-inside getAllTimeZones()')
  console.log(res)
  return res.data.zones;
}

export const getUnix = async () => {
  const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=7KJHTP7QS6J7&format=json`;
  const res = await axios.get(url);
  const data = res.data.zones;
  return data.timestamp
}
export const getGmtOffset = async () => {
  const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=7KJHTP7QS6J7&format=json`;
  const res = await axios.get(url)
  const data = res.data.zones
  return data.gmtOffset
}
// export const getUtc = async () => {
//   const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=7KJHTP7QS6J7&format=json`;
//   const res = await axios.get(url)
//   const data = res.data.zones
//   return data.map(timezone => { return (timezone.timestamp - timezone.gmtOffset) })
// }

export const showLocalTime = () => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let am_pm = 'AM';

  if (hour > 12) {
    hour -= 12;
    am_pm = 'PM'
  } else {
    am_pm = 'AM'
  }

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  return hour + ':' + minute + ':' + second + am_pm
  

}


export const showWorldTime = (unix, gmt) => {
  let ms = unix -gmt
  let second = Math.floor((ms / 1000) % 60);
  let minute = Math.floor((ms / (1000 * 60)) % 60);
  let hour = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let am_pm = 'AM';

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;

  if (hour > 12) {
    hour -= 12;
    am_pm = 'PM'
  } else {
    am_pm = 'AM'
  }

  return hour + ":" + minute + ":" + second +  ":" + am_pm
}
