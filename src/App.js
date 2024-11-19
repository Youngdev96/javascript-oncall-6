import ProgramController from './controller/ProgramController.js';

class App {
  constructor() {
    this.controller = new ProgramController();
  }

  async run() {
    const [date, workers] = await this.controller.prepareProgram();
    this.controller.runProgram(date, workers);
  }
}

export default App;
