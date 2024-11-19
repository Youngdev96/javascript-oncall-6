import { Console } from '@woowacourse/mission-utils';
import Weekdays from '../utils/constants/Weekdays.js';

class InputView {
  async requestMonthAndWeekday() {
    while (true) {
      try {
        const input = await Console.readLineAsync(
          '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
        );
        return this.parseMonthAndWeekday(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  parseMonthAndWeekday(input) {
    if (input === '') {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해주세요.');
    }
    let [month, weekday] = input.split(',').map((item) => item.trim());
    month = Number(month);
    if (!this.isValidMonth(month) || !this.isValidWeekday(weekday)) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
    return [month, weekday];
  }

  isValidMonth(input) {
    return input >= 1 && input <= 12;
  }

  isValidWeekday(input) {
    return Weekdays.includes(input);
  }
}

export default InputView;
