const hours = document.getElementById('hours');
const dayHeight = document.getElementById('sunset').offsetTop;
const heightToNight = document.getElementById('soir').offsetTop;
const afternoonHeight = heightToNight - dayHeight;
/*const nightHeight = document.body.offsetHeight - dayHeight - afternoonHeight;*/
hours.innerHTML="9h00";
window.addEventListener('scroll', (e) => 
{
  let y = window.scrollY;
  if (y <= dayHeight) {
    heightHour = dayHeight / 6;
    time = Math.trunc(y / heightHour) + 9;
    hours.innerHTML = time + "h00";
    console.log(time);
  } 

  else /*if(y>=dayHeight && y<=heightToNight)*/ {
    heightHour = afternoonHeight/6;
    time = Math.trunc(y / heightHour) + 14;
    if (time > 23 ) { time = time - 24};
    hours.innerHTML = time + "h00";
  console.log(time);
  }

/*  else  
  {
    heightHour = nightHeight / 12;
    time = Math.trunc(y / heightHour) + 6;
    if (time > 23 ) { time = time - 24};
    hours.innerHTML = time + "h00";
  console.log(time);
  }*/
});
