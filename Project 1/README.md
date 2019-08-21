
### Flow
- **Install**: `yarn global add typescript ts-node`
- **Initialize**: `npm init --yes && touch index.ts` and write the code you want in `index.ts`.
- **Stupid Start**: `tsc index.ts && node index.js`
- **Smart Start**: `ts-node index.ts`

### Questions
- What is the difference between `require` and `import`?
  - require is commonJS, don't need `babel`
  - import is ES6 which `requires babel` to complile to javascript to run.