import { Sorter } from './Sorter'
export class NumbersCollection extends Sorter   {
  data: number[]

  constructor(data: number[]) {
    super()
    this.data = data
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex:number,rightIndex:number): boolean {
    if(this.data[leftIndex] > this.data[rightIndex]) {
      return true
    }
    return false

  }

  swap(left:number, right:number):void {
    const temp = this.data[left]
    this.data[left] = this.data[right]
    this.data[right] = temp
  }
}