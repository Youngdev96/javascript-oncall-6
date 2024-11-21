import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class programController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async prepareProgram() {
    const date = await this.inputView.requestMonthAndWeekday();
    const workers = await this.inputView.requestWorkerList();
    return [date, workers];
  }

  async runProgram(date, workers) {
    this.outputView.printSchedule(date[0], date[1], workers);
  }
}

export default programController;
