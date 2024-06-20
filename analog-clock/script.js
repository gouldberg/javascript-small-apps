// setInterval() メソッドは Window および Worker メソッドで提供され、一定の遅延間隔を置いて関数やコードスニペットを繰り返し呼び出します。
setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
