function getTime() {
  let date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hrs = updateTime(hrs);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
  let t = setTimeout(function () {
    getTime();
  }, 1000);
}

function updateTime(time) {
  if (time < 10) {
    return 0 + time;
  } else {
    return time;
  }
}
// NEXT: fix seconds / other times not having zero
// get button to work: when you click it shows the time, button changes to hide time
// styling

getTime();
// document.getElementById("showTimeButton").onclick = setTimeout(getTime(), 1000);
