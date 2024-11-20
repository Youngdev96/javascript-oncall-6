import { Console } from '@woowacourse/mission-utils';
import DaysInMonth from '../utils/constants/DayInMonth.js';
import Weekdays from '../utils/constants/Weekdays.js';
import HolidayDates from '../utils/constants/HolidayDates.js';

class OutputView {
  printSchedule(month, startDay) {
    const lastDay = DaysInMonth[month];
    const start = Weekdays.indexOf(startDay);
    for (let day = 1; day <= lastDay; day++) {
      const dayOfWeek = Weekdays[(start + day - 1) % 7];
      const dayType = this.checkHoliday(month, day, dayOfWeek);
      const dayTypeText = this.printDayType(dayType);
      Console.print(`${month}월 ${day}일 ${dayOfWeek}${dayTypeText}`);
    }
  }

  printDayType(dayType) {
    if (dayType === 'Holiday') {
      return '(휴일)';
    }
    return ' ';
  }

  checkHoliday(month, date, weekday) {
    if (['토', '일'].includes(weekday) || HolidayDates[month].includes(date)) {
      return 'Holiday';
    }
    return 'Weekday';
  }
}
export default OutputView;
