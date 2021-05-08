export abstract class Sorter {
  abstract length: number
  abstract compare(i:number, j:number):boolean
  abstract swap(i:number, j:number):void
  /**
   * bubble sort the collection array
   */
  sort(): void {
    for(let i = this.length-1; i > 0;i--) {
      for(let j=0; j < i; j++) {
        if(this.compare(j, j+1)) {
          this.swap(j, j+1)
        }
      }
    }

  }
}

// const test = new Sorter([-4, 10, -2, 15, 2 , 5, -1])
// test.sort()
// console.log(test.collection)