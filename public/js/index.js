window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}

var countDate = new Date("October 30, 2021 09:00:00").getTime()

const oasysDay = () => {
  var now = new Date().getTime()
  var gap = countDate - now

  var second = 1000
  var minute = second * 60
  var hour = minute * 60
  var day = hour * 24

  var d = Math.floor(gap / (day))
  var h = Math.floor((gap % (day)) / hour)
  var m = Math.floor((gap % (hour) / minute))
  var s = Math.floor((gap % minute) / second)

  document.getElementById("days").innerText = d
  document.getElementById("hours").innerText = h
  document.getElementById("mins").innerText = m
  document.getElementById("secs").innerText = s

}

setInterval(() => {
  oasysDay();
},1000)