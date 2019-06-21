### Install Dependencies
- A tool will integrate ts scripts into html file
```sh
yarn global add parcel-bundler
yarn add faker
```

### Open Browser using Parcel
- Parcel will `init npm environment` for you
- Parcel will install `Typescript` for you
```sh
parcel index.html
```

### Type Definition files
- You could use normal Javascript file in Typescript
- But how can you use that js file in a `ts` way or a `oop` way?
- You need `Type Definition`
  
`Type Definition = Doc in TS way`
- search `@types/faker` in npmjs.com
- this will add `type check `for package faker
- this will give you `input hint` for package faker
```sh
yarn add @types/faker
```

### Open Type Definition files
- Hold on `Command` then `Click` package name

### Import
- export default
```javascript
import User from './User';
```
- export 
```javascript
import { User } from './User'; 
```



### Fold/Unfold Code
`Shift` + `Command` + P
`fold level x`

### Solution to Duplicate code
```javascript
addLocation(user: User){
    // code
}
addLocation(company: Company){
    // same code
}
```
- Simple Solution but not `scalable`
```javascript
addLocation(mappable: User | Company){}
```
- Enterprise Solution
- User and Company `don't` have to implements Mappable, it will be implcitly checked.
- But it's always a good practice to `clealy implements interface`
```javascript
// 规定实现类必须具备location的属性
interface {
    location: {
        lat: number;
        lng: number;
    }
}
addLocation(mappable: Mappable){}
```

### Hint
- If we have Typescript, we could write frontend code just like Java.
- So we may use MVC framework to construct our code