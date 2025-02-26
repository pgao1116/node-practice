### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JWT is JSON Web Token, a compact, URL-safe token used for authentication and information exchange in a secure manner

- What is the signature portion of the JWT?  What does it do?
  The signature portion of a JWT is created by hashing the header and payload using a key, and it ensures the integrity of the token

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, if the JWT is not encrypted, the attacker can decode and see the payload. However they would need to invalidate the signature to modify it

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  - User log in with credentials
  - The server verifies the credentials and generates a JWT
  - Server send JWT to client
  - Client stores the JWT 
  - Server validates the JWT on each request to authenticate the user

- Compare and contrast unit, integration and end-to-end tests.
  - Unit: Test individual functions or modules
  - Integration: Test interactions between multiple modules or components
  - End-to-End: Simulate real user interactions across the entire system

- What is a mock? What are some things you would mock?
  A mock is a simulated object that mimics the behavior of real dependencies in tests. You can mock:
    - databases
    - API calls
    - user input
    - External services
- What is continuous integration?
  Continuous Integration (CI) is a development practice where code changes are automatically tested and merged into the main branch frequently to catch bugs 

- What is an environment variable and what are they used for?
  An environment variable is a variable set in the operating system to store configuration settings

- What is TDD? What are some benefits and drawbacks?
  TDD is Test-Drive Development. It is an approach where tests are written before the actual code
    Benefits: Ensures code reliability, catch bugs early
    Drawbacks: Slow initial development and require frequent test updates

- What is the value of using JSONSchema for validation?
  JSONSchema helps validate JSON data structures against a predefined schema, ensuring consistency, correctness, and reduce errors

- What are some ways to decide which code to test?
  - Critical business logic
  - Frequently used functions
  - Code with high complexity
  - Areas prone to past bugs
  - Code that integrates with external services

- What does `RETURNING` do in SQL? When would you use it?
   'RETURNING' in SQL allows the retrieving values from an INSERT, UPDATE, or DELETE statement. It is used for when you need to return generated IDs or modified records

- What are some differences between Web Sockets and HTTP?
  WebSockets: Full-duplex communication, persistent connection, and real-time updates
  HTTP: Request-Response model, stateless, requires new connection for each request

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
    I prefer Express over Flask because:
    - It has a larger ecosystem and is widely used in production.
    - JavaScript is used on both the frontend and backend, reducing context switching.
    - It has a simpler and more flexible middleware system compared to Flask.
    - It is better suited for handling asynchronous requests with Node.js' event-driven architecture.