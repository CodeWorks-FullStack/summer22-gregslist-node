import { CarsController } from './Controllers/CarsController.js';

class App {
  // authController = new AuthController();
  // valuesController = new ValuesController();

  carsController = new CarsController()
}

// @ts-ignore
window.app = new App()
