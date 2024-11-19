import InputView from '../view/InputView.js';

class programController {
  constructor() {
    this.inputView = new InputView();
  }

  async prepareProgram() {
    const date = await this.inputView.requestMonthAndWeekday();
    const workers = await this.inputView.requestWorkerList();
    return [date, workers];
  }

  async runProgram(date, workers) {}
}

export default programController;
