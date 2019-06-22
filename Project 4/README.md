### Project Initialization
```sh
npm --init
tsc --init  # typescript
```

### Add Dependencies
```sh
yarn add concurrently nodemon
```

### Add Project Folder
- src: source file
- build: compiled file by typescript

### Configure `tscondig.json`
- "outDir": "./build", 
- "rootDir": "./src",  

### Configure `package.json`
```json
{
    "scripts":{
        "start:build": "tsc -w",
        "start:run": "nodemon build/index.ts",
        "start": "concurrently npm:start:*"
    }
}
```

### Import Node Built-in Library
- This will cause Error.
- Although fs is from built-in libaray, but there is no type definition file for it.
```javascript
import fs from 'fs'; 
```
- Soluction:
```sh
yarn add @types/node
```