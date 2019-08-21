## Class
### Access Manage
```javascript
class Company {
	// core code 0
    private name: string;


    constructor(name: string) {
        this.name = name;
    }

	// core code 1
    get companyName():string {
        return this.name;
    }

	// core code 2
    set companyName(name: string){
        this.name = name;
    }
}


const c1 = new Company("google");

// get
console.log(c1.companyName)
// set
c1.companyName = "Linkedin";
```




## Interface
- **When**: you need to **call** something common in `protocol`
```javascript
interface Sortable {
    length: number;
    compare(){}
    swap(){}
}

class Car implements Sortable{
    length: number;
    constructor(length: number) {
        this.number = number;
    }
    compare(){}// must implement
    swap(){}// must implement
}

const car = new Car(100);
// you can call sort() on any instance meet the protocol of Sortable
sort(car);
```

## Abstract Class
- **When**: 
  - you need to **call** something common in `protocol`
  - These things share some `concrete` variables or behaviours as well
```javascript
// abstract class
abstract class Sorter {
    // protocol
    abstract compare(leftIndex: number, rigthIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract get length(): number;
    // concrete
    sort(): void {
        const unsorted = this;
        const n = this.length;
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < n - i; j++) {
                if (unsorted.compare(j, j + 1)) unsorted.swap(j, j + 1);
            }
        }
    }
}
```


```javascript
// concrete class
import Sorter from './Sorter';
class StringCollection extends Sorter {
    constructor(public data: string) {
        super();
        this.data = data;
    }
    get length() {...}
    compare(leftIndex: number, rightIndex: number): boolean {...}
    swap(leftIndex: number, rightIndex: number): void {...}
}
```

```javascript
const stringCollection = new StringCollection('aaxxaXaXbccd');
stringCollection.sort(); // core code 
```