## Use Typescript with Node.js

### Initialize Project
```sh
npm init --yes
tsc --init
yarn add concurrently nodemon
yarn add @types/node
```
```json
	"scripts": {
		"start:build": "tsc -w", 
		"start:run": "nodemon build/index.js", 
		"start": "concurrently npm:start:*"
	}
```

### Initialize Express
```sh
yarn add express cookie-session
yarn add @types/express @types/cookie-session
```

### Review of Express
[Routing](https://expressjs.com/zh-cn/guide/routing.html);

#### Scaffold
```javascript
const express= require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('Hello World');
})

app.listen(port);
```

#### Router
```javascript
const express = require('express');
const router = express.Router();
const getCompany = (req,res) => {
    res.status(200).send('Apple');
}

router.use((req,res,next) => {
  console.log("authentication");
  next();
})
router.get('/count', getCompany);

// 用的比较少
router.get('/:id', (req, res) => {
	res.send('id namespace.');
});

router.get("/user", (req,res) => {
    res.send(req.query);
});

module.exports = router;
```

#### Authentication Middleware
```javascript
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// Core code
app.all('/', (req,res,next) => {
  console.log('authentication');
  next();
});

app.get('/',(req, res) => {
  res.send("How are you?")
});
app.listen(port);****
```

#### Data Validation
```sh
yarn add joi
```
```javascript
router.post("/", (req,res) => {
    // validation - joi version
    const schema = {
        name: Joi.string().min(3).required(),
    }
    const result = Joi.validate(req.body, schema);
    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})
```

#### Middleware
- helmet
- compression
- **express.urlencoded()**
- **express.json()**
- morgan
- config
- ...


### Express with Decorator
- A framework built on Express
- In Typescript
```sh
yarn add ts-express-decorators
```


### Some Notes
- Inspect Types: `Command` + `Left Click`
