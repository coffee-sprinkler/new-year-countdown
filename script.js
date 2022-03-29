const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;
const days = document.querySelector('#days'),
  hours = document.querySelector('#hours'),
  minutes = document.querySelector('#minutes'),
  seconds = document.querySelector('#seconds');

const displayTime = () => {
  const newYear = new Date(`${new Date().getFullYear() + 1}/01/01`);
  const dateToday = new Date();

  const diff = Math.abs(newYear - dateToday);

  const daysLeftTillNewYear = Math.floor(diff / MILLISECONDS_IN_A_DAY);
  let hoursLeftTillNewYear = Math.floor(
    ((diff % MILLISECONDS_IN_A_DAY) / (1000 * 60 * 60)) % 24
  );
  let minutesLeftTillNewYear = Math.floor(
    ((diff % MILLISECONDS_IN_A_DAY) / (1000 * 60)) % 60
  );
  let secondsLeftTillNewYear = Math.floor(
    ((diff % MILLISECONDS_IN_A_DAY) / 1000) % 60
  );

  hoursLeftTillNewYear =
    hoursLeftTillNewYear < 10
      ? `0${hoursLeftTillNewYear}`
      : hoursLeftTillNewYear;

  minutesLeftTillNewYear =
    minutesLeftTillNewYear < 10
      ? `0${minutesLeftTillNewYear}`
      : minutesLeftTillNewYear;

  secondsLeftTillNewYear =
    secondsLeftTillNewYear < 10
      ? `0${secondsLeftTillNewYear}`
      : secondsLeftTillNewYear;

  days.textContent = daysLeftTillNewYear;
  hours.textContent = hoursLeftTillNewYear;
  minutes.textContent = minutesLeftTillNewYear;
  seconds.textContent = secondsLeftTillNewYear;
};

displayTime();
setInterval(displayTime, 1000);
