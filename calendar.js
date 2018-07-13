class Calendar {
  constructor(month, year){
    this.month = (isNaN(month) || month == null) ? new Date().getMonth() : month
    this.year  = (isNaN(year) || year == null) ? new Date().getFullYear() : year
    this.html = ''
    this.calDayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    this.calMonthsLabels = ['January', 'February', 'March', 'April',
                              'May', 'June', 'July', 'August', 'September',
                              'October', 'November', 'December']
    this.calDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  }

  generateHTML(){
    // get first day of month
    let firstDay = new Date(this.year, this.month, 1)
    let startingDay = firstDay.getDay()

    // find number of days in month
    let monthLength = this.calDaysInMonths[this.month]

    // compensate for leap year
    if (this.month == 1 && this.isLeapYear()) {monthLength = 29}

    // do the header
    let monthName = this.calMonthsLabels[this.month]
    let html = '<div class=container>'
    html += '<p class="calendar-header-month-year">'
    html +=  monthName + "&nbsp;" + this.year
    html += '</p>'
    html += '<button class="calButton" onclick="calendar.prevMonth()"><span><<</span></button>'
    html += '<div class="calendar-table-container">'
    html += '<table class="calendar-table">'
    html += '<tr class="calendar-header-days">'
    this.calDayLabels.forEach((calDay) => {
      html += '<td class="calendar-header-day">'
      html += calDay
      html += '</td>'
    })
    html += '</tr><tr class="week">'

    // fill in the days
    let day = 1

    // calculate number of rows
    let numberOfRows = Math.ceil((monthLength + startingDay) / 7)

    // this loop is for is weeks (rows)
    for (let i = 0; i < numberOfRows; i++) {
      // this loop is for weekdays (cells)
      for (let j = 0; j <= 6; j++) {
        html += '<td class="calendar-day">'
        if (day <= monthLength && (i > 0 || j >= startingDay)) {
          html += day
          day++
        }
        html += '</td>'
      }
      // stop making rows if we've run out of days
      if (day > monthLength) {
        break
      }
      else {
        html += '</tr><tr class="week">'
      }
    }
    html += '</tr></table>'
    html += '</div>'
    html += '<button class="calButton" onclick="calendar.nextMonth()"><span>>></span></button>'
    html += '</div>'
    this.html = html
  }

  isLeapYear() {
    return (this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0
  }

  getHTML() {
    return this.html
  }

  prevMonth() {
    this.month = (this.month != 0) ? this.month - 1 : 11
    this.year  = (this.month != 11) ? this.year : this.year - 1
    this.clearHTML()
    this.generateHTML()
    document.body.innerHTML = this.getHTML()
  }

  nextMonth() {
    this.month = (this.month != 11) ? this.month + 1 : 0
    this.year  = (this.month != 0) ? this.year : this.year + 1
    this.clearHTML()
    this.generateHTML()
    document.body.innerHTML = this.getHTML()
  }

  clearHTML() {
    this.html = ''
    return document.body.innerHTML = ''
  }

}

module.exports = Calendar
