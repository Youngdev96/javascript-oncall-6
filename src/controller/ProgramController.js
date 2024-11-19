import InputView from '../view/InputView.js';

class programController {
  constructor() {
    this.inputView = new InputView();
  }

  async prepareProgram() {
    const date = await this.inputView.requestMonthAndWeekday();
  }

  async runProgram() {}

  finishProgram() {}
}

export default programController;
