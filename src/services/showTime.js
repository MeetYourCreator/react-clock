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

  let currentTime = hour + ':' + minute + ':' + second + am_pm

  return currentTime

}


