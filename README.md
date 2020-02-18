# MEAN Stack: Build a Bucket List App with Angular and the Angular CLI

This is a bucket list application that lets you create, view and delete [bucket list](https://www.macmillandictionary.com/dictionary/british/bucket-list) items. This is an example to demostrate setting up a project using MEAN stack.

## Requirements

* [Node.js](http://nodejs.org/)
* [MongoDB](https://www.mongodb.org/)

## Installation Steps

To start the server:

1. Clone the repo
2. In the project root run `npm i`
3. Ensure MongoDB is running
4. Run `npm start`

To start the Angular app in development mode:

1. Ensure the Angular CLI is installed globally: `npm install -g @angular/cli`
2. Change into the Angular directory: `cd angular-src`
3. Run `npm i`
4. Run `ng serve`
5. Visit [http://localhost:4200/](http://localhost:4200/) and start creating bucket list items

To start the app in production mode:

1. Stop the Angular server
2. In the `angular-src` directory run `ng build`. This should compile the static code into the root `public` directory.
3. Visit [http://localhost:3000/](http://localhost:3000/) and start creating bucket list items

## License

The MIT License (MIT)

Copyright (c) 2020 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
