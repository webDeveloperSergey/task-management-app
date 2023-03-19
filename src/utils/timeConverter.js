export const timeConverter = (UNIX_timestamp) => {
  const a = new Date(UNIX_timestamp)
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const year = a.getFullYear()
  const month = months[a.getMonth()]
  const date = a.getDate()
  const time = date + '-' + month + '-' + year
  return time
}


// let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// let hour = a.getHours();
// let min = a.getMinutes();
// let sec = a.getSeconds();
// let time = date + '-' + month + '-' + year + ' ' + hour + ':' + min + ':' + sec;