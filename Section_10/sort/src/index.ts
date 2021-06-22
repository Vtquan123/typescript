// class Sorter {
//   constructor(public collection: number[] | string) { }
  
//   sort(): void {
//     const { length } = this.collection
    
//     for (let i = 0; i < length; i++){
//       for (let j = 0; j < length - i - 1; j++){
//         // Bad code
//         // If collection is a array of number
        
//         // Type guard
//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j + 1]) {
//             const temp = this.collection[j]
//             this.collection[j] = this.collection[j + 1]
//             this.collection[j+1] = temp
//           }
//         }

//         // If collection is a string
//         if (typeof this.collection === 'string') {
          
//         }
//         /////////////////////////////////////////////////////

//       }
//     }
//   }
// }
import { Sorter } from './Sorter'
import { NumberCollection } from './NumberCollection'
import { CharacterCollection } from './CharacterCollection'
import {LinkedList} from './LinkedList'

const numberCollection = new NumberCollection([1, 2, -5, 0, -6, 10])
const characterCollection = new CharacterCollection('Xaaayb')
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(300)
linkedList.add(800)

numberCollection.sort()
console.log(numberCollection.data)

characterCollection.sort()
console.log(characterCollection.data)
// const sorter = new Sorter(linkedList)
// sorter.sort()
// console.log(sorter.collection) 