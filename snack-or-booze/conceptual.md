### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router is a library used for routing in React applications. It enables navigation between different views or components

- What is a single page application?
  A Single Page Application (SPA) is a web application that dynamically updates the page content using JavaScript without requiring a full reload from the server.

- What are some differences between client side and server side routing?
  Client-side routing: The application updates the URL and renders components dynamically without making a full request to the server. This leads to a faster user experience.
  Server-side routing: Each URL request is sent to the server, which responds with a new HTML page. This results in full-page reloads and can be slower.

- What are two ways of handling redirects with React Router? When would you use each?
  Using Navigate = to "Path"
  This is used inside components to programmatically navigate or redirect users after an event like authentication.
  Using the useNavigate() hook
  This allows for redirects within event handlers.

- What are two different ways to handle page-not-found user experiences using React Router? 
  1) Using a wildcard route (*) to display a custom 404 page
  2) Redirecting the user to the homepage or another page

- How do you grab URL parameters from within a component using React Router?
  You can use the useParams() hook from React Router

- What is context in React? When would you use it?
  React Context is a way to share values (such as theme, authentication state, or language) across components without having to pass props manually at each level.

- Describe some differences between class-based components and function
  components in React.
  Class-based components use ES6 classes, require lifecycle methods like `componentDidMount`, and manage state with `this.state`. Function components, on the other hand, use hooks like `useState` and `useEffect` for state management and lifecycle events. Function components are generally more concise and optimized for performance.

- What are some of the problems that hooks were designed to solve?
  Hooks simplify state management in function components, eliminating the need for class-based components. They improve code readability and reusability, reduce unnecessary re-renders, and prevent issues related to `this` binding in class components. Hooks like `useEffect` also simplify lifecycle logic, making it more intuitive.