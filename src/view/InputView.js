import { Console } from '@woowacourse/mission-utils';
import Weekdays from '../utils/constants/Weekdays.js';

class InputView {
  // 근무일
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

  // 근무자
  async requestWorkerList() {
    while (true) {
      try {
        const weekdayInput = await Console.readLineAsync(
          '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
        );
        const weekendInput = await Console.readLineAsync(
          '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
        );
        return [
          this.parseWorkers(weekdayInput),
          this.parseWorkers(weekendInput),
        ];
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  parseWorkers(input) {
    if (input === '') {
      throw new Error('[ERROR] 유효하지 않은 근무자 입니다. 다시 입력해주세요');
    }
    const workers = input.split(',').map((worker) => worker.trim());
    if (!this.validateWorker(workers)) {
      throw new Error('[ERROR] 유효하지 않은 근무자 입니다. 다시 입력해주세요');
    }
    return input;
  }

  validateWorker(workers) {
    const isOnlyOne = new Set(workers).size === workers.length;
    const isRightLength = workers.every((worker) => worker.length <= 5);

    return isOnlyOne && isRightLength;
  }
}

export default InputView;
