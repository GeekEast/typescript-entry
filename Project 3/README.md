### Config Typescript Compiler
```sh
tsc --init
```

### Key configs of Compiler
Attribute |  Description | Value 
----------|-----------|---------
rootDir | the location files to be compiled | `./build`
outDir | the location to compile to | `.src`

### Run Typescript Compiler
```sh
tsc
# watch the change of source files and recompile
tsc -w
```


### Concurrently run scripts
```sh
yarn add nodemon concurrently
```
- config package.json file
- run the Typescript Compiler at first
- run the nodemon to run common js file
```json

"scripts": {
	"start:build": "tsc -w",
	"start:run": "nodemon build/index.js",
	"start": "concurrently npm:start:*"
},
```

