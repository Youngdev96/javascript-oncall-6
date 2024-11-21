import { Console } from '@woowacourse/mission-utils';
import DaysInMonth from '../utils/constants/DayInMonth.js';
import Weekdays from '../utils/constants/Weekdays.js';
import HolidayDates from '../utils/constants/HolidayDates.js';

class OutputView {
  constructor() {
    this.weekdayIndex = 0;
    this.holidayIndex = 0;
    this.lastWorker = null;
  }

  printSchedule(month, startDay, workers) {
    const lastDay = DaysInMonth[month];
    const start = Weekdays.indexOf(startDay);

    const weekdayWorkers = workers[0].split(',');
    const holidayWorkers = workers[1].split(',');

    for (let day = 1; day <= lastDay; day++) {
      const dayOfWeek = Weekdays[(start + day - 1) % 7];
      const dayType = this.checkHoliday(month, day, dayOfWeek);
      const dayTypeText = this.printDayType(dayType);
      const worker = this.getTodayWorker(
        weekdayWorkers,
        holidayWorkers,
        dayType,
      );
      Console.print(`${month}월 ${day}일 ${dayOfWeek}${dayTypeText} ${worker}`);
    }
  }

  printDayType(dayType) {
    if (dayType === 'Holiday') {
      return '(휴일)';
    }
    return '';
  }

  checkHoliday(month, date, weekday) {
    if (['토', '일'].includes(weekday) || HolidayDates[month].includes(date)) {
      return 'Holiday';
    }
    return 'Weekday';
  }

  getTodayWorker(weekdayWorkers, holidayWorkers, dayType) {
    let currentWorkers =
      dayType === 'Weekday' ? weekdayWorkers : holidayWorkers;
    let currentIndex =
      dayType === 'Weekday' ? this.weekdayIndex : this.holidayIndex;

    let selectedWorker = currentWorkers[currentIndex];

    if (this.lastWorker === selectedWorker) {
      currentIndex = (currentIndex + 1) % currentWorkers.length;
      selectedWorker = currentWorkers[currentIndex];
    }

    if (dayType === 'Weekday') {
      this.weekdayIndex = (currentIndex + 1) % weekdayWorkers.length;
    } else {
      this.holidayIndex = (currentIndex + 1) % holidayWorkers.length;
    }

    this.lastWorker = selectedWorker;
    return selectedWorker;
  }
}
export default OutputView;
