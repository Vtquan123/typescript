// Long type annotation
// interface
interface Reportable {
  // name: string,
  // year: Date,
  // isBroken: boolean
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  isBroken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`)
  // console.log(`Year: ${vehicle.year}`)
  // console.log(`Broken: ${vehicle.isBroken}`)
  console.log(item.summary())

}

printSummary(oldCivic)
printSummary(drink)
