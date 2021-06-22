// Tuple

// Object drink
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// type alias
type Drink = [string, boolean, number]

const pepsi_alias: Drink = ['brown', true, 40]
const coca_cola: Drink= ['brown', true, 40]

const pepsi: [string, boolean, number] = ['brown', true, 40]
// pepsi[0] = 40
// pepsi[2] = 'brown'