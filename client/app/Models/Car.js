
export class Car {
  /**
   * The data needed to make a Car
   * @param {{ id: string, make: string, model: string, year: number, price: number, img: string, description: string }} CarData
   */
  constructor({ id, make, model, year, price, img, description }) {
    this.id = id || ''
    this.make = make || ''
    this.model = model || ''
    this.year = year || 1999
    this.price = price || 1000
    this.img = img || ''
    this.description = description || ''
  }

  get Template() {
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.make} | ${this.model} | ${this.year}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-info" onclick="app.carsController.adjustCar('${this.id}')">Adjust Car Settings</button>
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button>
        </div>
      </div>
    </div>
    `
  }
}
