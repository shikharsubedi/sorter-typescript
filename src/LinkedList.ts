import {Sorter} from './Sorter'
class Node {
  next: Node | null  = null
  data: number
  constructor (data: number) {
    this.data = data
  }
}

export class LinkedList extends Sorter {
  head: Node | null = null
  private size: number = 0;
  get length(): number {
    return this.size;
  }
  add(data:number):void {
    const node = new Node(data)
    this.size++
    if(!this.head) {
      this.head = node
      return
    }
    let tail = this.head
    while(tail.next) {
      tail = tail.next
    }
    tail.next = node
  }
  at(index:number): Node | null {
    if(!this.head) {
      throw new Error('empty linked list')
    }
    let counter = 0
    let node: Node | null = this.head;
    while(node) {
      if(counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    throw new Error('index out of bounds')
  }

  compare(left:number, right:number): boolean {
    if(!this.head) {
      throw new Error('List is empty')
    }
    const leftNode = this.at(left) as Node
    const rightNode = this.at(right) as Node
    return leftNode.data > rightNode.data
  }

  swap(left: number, right: number): void {
    const leftNode = this.at(left) as Node
    const rightNode = this.at(right) as Node
    const temp = leftNode?.data
    leftNode.data = rightNode?.data
    rightNode.data = temp
  }

  print(): void {
    let temp = this.head
    while(temp) {
      console.log(temp.data)
      temp = temp.next
    }
  }
  
}