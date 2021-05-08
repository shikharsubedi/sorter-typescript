import { Sorter } from './Sorter'

export class CharCollection extends Sorter {
  public data: string
  constructor(data: string) {
    super()
    this.data = data;
  }
  get length(): number {
    return this.data.length
  }
  compare(i:number, j:number):boolean {
    const left = this.data[i].toLocaleLowerCase()
    const right = this.data[j].toLocaleLowerCase()
    return (left.localeCompare(right) === 1)
  }
  swap(i:number, j:number):void {

    const strArray = this.data.split('')
    const temp = strArray[i]
    strArray[i] = strArray[j]
    strArray[j] = temp
    this.data = strArray.join('')
  }
}