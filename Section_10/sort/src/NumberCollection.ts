import { Sorter } from './Sorter'

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super()
  }

  // reference link to this method by 'get', call it without parenthesis '()'
  get length(): number {
    return this.data.length
  }
  
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand 
  }


}