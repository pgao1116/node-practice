### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    Callbacks, Promises, async/await
- What is a Promise?
    A Promise represents a value that may be available now, in the future, or never, providing a way to handle asynchronous operations.
- What are the differences between an async function and a regular function?
    async functions return a Promise and use await to pause execution until a Promise resolves.
- What is the difference between Node.js and Express.js?
    Node.js: JavaScript runtime for server-side applications.
    Express.js: A web framework built on Node.js for building APIs and web apps.
- What is the error-first callback pattern?
    A convention where the first argument in a callback is an error (if any), followed by the result.
- What is middleware?
    Functions in Express.js that process requests and responses during the request-response cycle.
- What does the `next` function do?
    Passes control to the next middleware in the chain.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
    - Sequential execution slows performance. Use Promise.all to run requests concurrently.
    - No error handling. Use try-catch.
    - Improve naming and readability for better maintainability.    
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
