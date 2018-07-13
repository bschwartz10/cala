import Calendar from './calendar';

describe('Calendar', () => {
  let calendar;

  beforeEach(() => {
    calendar = new Calendar();
  })

  test('html starts empty', () => {
    expect(calendar.getHTML()).toEqual('')
  })

  test('generateHTML generates calendar html', () => {
    let julyTwentyEighteenCalendar = new Calendar(6, 2018)
    let expectedHTML = ("<div class=container><p class=\"calendar-header-month-year\">July&nbsp;2018</p><button class=\"calButton\" onclick=\"calendar.prevMonth()\"><span><<</span></button><div class=\"calendar-table-container\"><table class=\"calendar-table\"><tr class=\"calendar-header-days\"><td class=\"calendar-header-day\">S</td><td class=\"calendar-header-day\">M</td><td class=\"calendar-header-day\">T</td><td class=\"calendar-header-day\">W</td><td class=\"calendar-header-day\">T</td><td class=\"calendar-header-day\">F</td><td class=\"calendar-header-day\">S</td></tr><tr class=\"week\"><td class=\"calendar-day\">1</td><td class=\"calendar-day\">2</td><td class=\"calendar-day\">3</td><td class=\"calendar-day\">4</td><td class=\"calendar-day\">5</td><td class=\"calendar-day\">6</td><td class=\"calendar-day\">7</td></tr><tr class=\"week\"><td class=\"calendar-day\">8</td><td class=\"calendar-day\">9</td><td class=\"calendar-day\">10</td><td class=\"calendar-day\">11</td><td class=\"calendar-day\">12</td><td class=\"calendar-day\">13</td><td class=\"calendar-day\">14</td></tr><tr class=\"week\"><td class=\"calendar-day\">15</td><td class=\"calendar-day\">16</td><td class=\"calendar-day\">17</td><td class=\"calendar-day\">18</td><td class=\"calendar-day\">19</td><td class=\"calendar-day\">20</td><td class=\"calendar-day\">21</td></tr><tr class=\"week\"><td class=\"calendar-day\">22</td><td class=\"calendar-day\">23</td><td class=\"calendar-day\">24</td><td class=\"calendar-day\">25</td><td class=\"calendar-day\">26</td><td class=\"calendar-day\">27</td><td class=\"calendar-day\">28</td></tr><tr class=\"week\"><td class=\"calendar-day\">29</td><td class=\"calendar-day\">30</td><td class=\"calendar-day\">31</td><td class=\"calendar-day\"></td><td class=\"calendar-day\"></td><td class=\"calendar-day\"></td><td class=\"calendar-day\"></td></tr></table></div><button class=\"calButton\" onclick=\"calendar.nextMonth()\"><span>>></span></button></div>")
    julyTwentyEighteenCalendar.generateHTML()
    expect(julyTwentyEighteenCalendar.getHTML()).toEqual(expectedHTML)
  })

  test('clearHTML clears current calendar html', () => {
    calendar.generateHTML()
    calendar.clearHTML()
    expect(calendar.getHTML()).toEqual('')
  })

  test('prev button changes html to previous month', () => {
    let julyTwentyEighteenCalendar = new Calendar(6, 2018)
    julyTwentyEighteenCalendar.prevMonth()
    const expected = 'June'
    expect(julyTwentyEighteenCalendar.getHTML()).toEqual(expect.stringContaining(expected))
  })

  test('prev button changes html to previous year if month is January', () => {
    let julyTwentyEighteenCalendar = new Calendar(0, 2018)
    julyTwentyEighteenCalendar.prevMonth()
    const expectedMonth = 'December'
    const expectedYear = '2017'
    expect(julyTwentyEighteenCalendar.getHTML()).toEqual(expect.stringContaining(expectedMonth))
    expect(julyTwentyEighteenCalendar.getHTML()).toEqual(expect.stringContaining(expectedYear))
  })

  test('next button changes html to next month', () => {
    let julyTwentyEighteenCalendar = new Calendar(6, 2018)
    julyTwentyEighteenCalendar.nextMonth()
    const expected = 'August'
    expect(julyTwentyEighteenCalendar.getHTML()).toEqual(expect.stringContaining(expected))
  })

  test('next button changes html to next year if month is December', () => {
    let julyTwentyEighteenCalendar = new Calendar(11, 2018)
    julyTwentyEighteenCalendar.nextMonth()
    const expectedMonth = 'January'
    const expectedYear = '2019'
    expect(julyTwentyEighteenCalendar.getHTML()).toEqual(expect.stringContaining(expectedMonth))
    expect(julyTwentyEighteenCalendar.getHTML()).toEqual(expect.stringContaining(expectedYear))
  })

  test('2018 is not a leap year', () => {
    expect(calendar.isLeapYear()).toEqual(false);
  });

  test('2020 is a leap year', () => {
    let twentyTwentyCalendar = new Calendar(2, 2020)
    expect(twentyTwentyCalendar.isLeapYear()).toEqual(true)
  })

});
