## Code Reuse
### Case: Function - Diverse Parameters with Same Code Logic
```javascript
addLocation(user: User) {
    // code
}
addLocation(company: Company) {
    // same code
}
```
- **Solution I: Rookie Solution**
```javascript
addLocation(mappable: User | Company) { }
```
- **Solution II: Enterprise Solution**
```javascript
// 规定实现类必须具备location的属性
interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
}
addLocation(mappable: Mappable){...}
```
