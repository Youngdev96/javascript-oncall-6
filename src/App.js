import ProgramController from './controller/ProgramController.js';

class App {
  constructor() {
    this.controller = new ProgramController();
  }

  async run() {
    this.controller.prepareProgram();
  }
}

export default App;
