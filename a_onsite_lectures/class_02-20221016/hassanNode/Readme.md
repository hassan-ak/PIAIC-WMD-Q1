# Node.js Intro

## .js vs .mjs

- .mjs files are used to define modules while .js files are for classic script
- .mjs files are parsed as modules
- on web doesn't matter uptill linked with correct type (text/javascript)

## Step 01

1. Create and naviagte to `hello` directory using following commands

   ```
   mkdir hello
   cd hello
   ```

2. Intilize an npm project using following command

   ```
   npm init
   ```

   this will create a `package.json` file with the following content

   ```json
   {
     "name": "hello",
     "version": "1.0.0",
     "description": "",
     "main": "hello.mjs",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "Hassan Ali Khan",
     "license": "ISC"
   }
   ```

3. Create `hello.mjs` file with following content

   ```mjs
   console.log('Hello from Hassan');
   ```

4. check output in the terminal using following command

   ```
   node hello.mjs
   ```

## Step 02

1. Create and naviagte to `addTwo` directory using following commands

   ```
   mkdir addTwo
   cd addTwo
   ```

2. Intilize an npm project using following command

   ```
   npm init
   ```

   this will create a `package.json` file with the following content

   ```json
   {
     "name": "addtwo",
     "version": "1.0.0",
     "description": "",
     "main": "app.mjs",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "Hassan Ali Khan",
     "license": "ISC"
   }
   ```

3. Create `addTwo.mjs` file with following content

   ```mjs
   function addTwo(num) {
     return num + 2;
   }
   export { addTwo };
   ```

4. Create `app.mjs` file with following content

   ```mjs
   import { addTwo } from './addTwo.mjs';
   console.log(addTwo(4));
   ```

5. check output in the terminal using following command

   ```
   node app.mjs
   ```

## Step 03

1. Create and naviagte to `simpleServer` directory using following commands

   ```
   mkdir simpleServer
   cd simpleServer
   ```

2. Intilize an npm project using following command

   ```
   npm init
   ```

   this will create a `package.json` file with the following content

   ```json
   {
     "name": "simpleserver",
     "version": "1.0.0",
     "description": "",
     "main": "index.mjs",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "Hassan Ali Khan",
     "license": "ISC"
   }
   ```

3. Install express using following commnad
   ```
   npm install express
   ```
4. This will update `package.json` and create a `package-lock.json` file along with `node_modules` folder. Create a `.gitignore` file with the following content

   ```
   node_modules
   package-lock.json
   ```

5. Create `index.mjs` file with following content

   ```mjs
   import express from 'express';
   const app = express();
   app.get('/', (req, res) => {
     res.send('Zia Responding from HTTP Server');
   });
   const PORT = 5001;
   app.listen(PORT, () => {
     console.log(`Running on PORT ${PORT}`);
   });
   ```

6. check output in the terminal using following command

   ```
   node index.mjs
   ```

7. open `http://localhost:5001/` in the browser to check the output

## Step 04

1. Create and naviagte to `myUserInputProgram` directory using following commands

   ```
   mkdir myUserInputProgram
   cd myUserInputProgram
   ```

2. Intilize an npm project using following command

   ```
   npm init
   ```

   this will create a `package.json` file with the following content

   ```json
   {
     "name": "myuserinputprogram",
     "version": "1.0.0",
     "description": "",
     "main": "index.mjs",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "Hassan Ali Khan",
     "license": "ISC"
   }
   ```

3. Install prompt-sync Library using following commnad

   ```
   npm install prompt-sync
   ```

4. This will update `package.json` and create a `package-lock.json` file along with `node_modules` folder. Create a `.gitignore` file with the following content

   ```
   node_modules
   package-lock.json
   ```

5. Create `index.mjs` file with following content

   ```mjs
   //index.mjs
   import promptSync from 'prompt-sync';
   const prompt = promptSync();
   var name = prompt('What is your name?');
   console.log(name);
   const num = prompt('Enter a number: ');
   console.log('Your number + 4 =');
   console.log(Number(num) + 4);
   ```

6. check output in the terminal using following command

   ```
   node index.mjs
   ```
