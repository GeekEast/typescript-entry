import NumberCollection from './classes/NumberCollection';
import StringCollection from './classes/StringCollection';
import LinkedListCollection from './classes/LinkedlistCollection';

// number collection test
console.log('Number Collection Testing...');
const numberCollection = new NumberCollection([ 1, 6, 3, 200, 50 ]);
numberCollection.sort();
numberCollection.forEach((e) => console.log(e));
console.log('-------------');
console.log();

// string collection test
console.log('String Collection Testing...');
const stringCollection = new StringCollection('aaxxaXaXbccd');
stringCollection.sort();
stringCollection.forEach((e) => console.log(e));
console.log('-------------');
console.log();

// Linked-list test
console.log('Linked-List Collection Testing...');
const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(100);
linkedListCollection.add(1);
linkedListCollection.add(200);
linkedListCollection.add(5);
linkedListCollection.add(300);
linkedListCollection.sort();
linkedListCollection.forEach((e) => console.log(e));
console.log('-------------');
