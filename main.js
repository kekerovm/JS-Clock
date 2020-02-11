$(document).ready(function() {
  function showTime() {
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var session = "AM"

    var broncosclock = document.getElementById("ScreenClock")

    if (h == 0) {
      h = 12
    }

    if (h > 12) {
      h = h - 12
      session = "PM"
    }

    // if (m < 10) {
    //   h = "0" + m
    // }

    // if (s < 10) {
    //   h = "0" + s
    // }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    broncosclock.textContent = h + ":" + m + ":" + s + " " + session
  }
  showTime()
  setInterval(showTime, 1000)
})
