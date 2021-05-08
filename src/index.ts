import { NumbersCollection } from './NumbersCollection'
import { CharCollection } from './CharCollection'
import { LinkedList } from './LinkedList'


const numbers = new NumbersCollection([10,3,-5,1,7])
numbers.sort()
console.log(numbers.data)

const string = new CharCollection('shiKHar')
string.sort()
console.log(string.data)


const list = new LinkedList()
list.add(10)
list.add(4)
list.add(3)
list.add(12)
list.add(1)
list.sort()
list.print()
