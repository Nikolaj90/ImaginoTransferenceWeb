# Plan for mastering web development!

### Progress

<style>
   /* Make sure that padding behaves as expected */
   * {box-sizing:border-box}
   p {
      padding-bottom:0px;
      padding-top:5px;
   }
   /* Container for skill bars */
   .container {
      width: 100%; /* Full width */
      background-color: #ddd; /* Grey background */
   }

   .skills {
      text-align: right; /* Right-align text */
      padding-top: 10px; /* Add top padding */
      padding-bottom: 10px; /* Add bottom padding */
      color: white; /* White text color */
   }

   .html {width: 60%; background-color: #04AA6D;} /* Green */
   .css {width: 27%; background-color: #2196F3;} /* Blue */
   .js {width: 19%; background-color: #FF69B4;} /* Red */
   .dbs {width: 6%; background-color: #483D8B} /* Dark Grey */
   .api {width: 6%; background-color: #FF8C00;} /* Dark Grey */
   .react {width: 2%; background-color: #008B8B;}
</style>
<h3>HTML</h3>
<div class="container">
  <div class="skills html"></div>
</div>
<h3>CSS</h3>
<div class="container">
  <div class="skills css"></div>
</div>
<h3>JavaScript</h3>
<div class="container">
  <div class="skills js"></div>
</div>
<h3>Database Systems</h3>
<div class="container">
  <div class="skills dbs"></div>
</div>
<h3>APIs</h3>
<div class="container">
  <div class="skills api"></div>
</div>
<br>
<h3>React</h3>
<div class="container">
  <div class="skills react"></div>
</div>
<br>

### Phase 1: Solidify Fundamentals

1. **HTML & CSS**

   - ~~Review and reinforce your understanding of HTML5 semantic elements and CSS3 styling techniques.~~
     - _Continue improving, but have solid understanding of all basic concepts_
   - ~~Practice building responsive layouts using Flexbox and Grid.~~
     - _Basic understanding_
   - ~~Explore CSS preprocessors like Sass or Less for efficient styling.~~
     - _loove sass_

2. **JavaScript**
   - ~~Deepen your knowledge of core JavaScript concepts such as functions, scope, closures, and asynchronous programming.~~
     - _Getting an understanding of asynchronous! 020224_
   - ~~Practice ES6+ features like arrow functions, template literals, destructuring, and promises.~~
     - _arrow functions done, template literals/template literal strings aka f-string done, promises pretty done_
     - _destructuring is picking arrays and objects apart and redefining them as separte variables_
   - ~~Learn about JavaScript modules and how to organize code using them.~~
     - `export {function_a, function_b}`
     - `import {function_a} from "js_module.js"`
     - `import * from "js_module.js"`
     - `export default func_default`
     - `import func_default from "js_modules.js"`
     - `import func_default, {function_a} from "js_modules.js"`

### Phase 2: Frontend Development

3. **Intermediate CSS**

   - ~~Dive deeper into CSS with advanced topics like animations, transitions, and keyframe animations.~~
   - ~~Explore CSS methodologies like BEM or SMACSS for scalable and maintainable stylesheets.~~
     - _Not done, but also something I will continuesly need to come back to_
       - [Site for description and combining different methodologies](https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies/2)
   - ~~Learn about CSS frameworks like Bootstrap or Tailwind CSS for rapid prototyping.~~

4. **Advanced JavaScript**

   - Study more complex JavaScript topics such as object-oriented programming, design patterns, and functional programming paradigms.
   - ~~Explore browser APIs like the DOM, Fetch API, and Local Storage.~~
      - Local storage: _Local storage is pretty, done_
      - DOM: _Lets read! But have worked with this a bit. Might still be some learnings about creating elements combined with asyn functions. But i'll work more on that later on_
      - Fetch API
   - Understand concepts like event bubbling, delegation, and event handling.
      - _bubbling/capture for eventlistener, which goes first inner or outer object. default=bubbling=inner_

5. **React**
   - Start with React fundamentals including JSX syntax, components, props, and state management.
   - Dive into advanced React topics like hooks, context API, and higher-order components (HOCs).
   - Learn about React Router for client-side routing and Redux for state management (or alternatives like Context API or Recoil).

### Phase 3: Backend Development
### 6. Learning Node.js

#### Step 1: Setting Up Node.js Environment
   - Install Node.js: Download and install Node.js from the official website or use a package manager like npm or nvm for installation.

#### Step 2: Understanding Node.js Basics
   - Learn the basics of Node.js: Understand the event-driven, non-blocking I/O model of Node.js and its single-threaded nature.
   - Explore the Node.js runtime environment and its features.

#### Step 3: Core Modules and NPM
   - Explore Node.js core modules: Study commonly used core modules like fs (file system), http, path, and others.
   - Learn about npm (Node Package Manager): Understand how to use npm to manage dependencies and create Node.js projects.

#### Step 4: Asynchronous Programming
   - Master asynchronous programming: Understand callbacks, promises, and async/await to handle asynchronous operations in Node.js effectively.
   - Practice writing asynchronous code to perform tasks like file I/O, network requests, and database operations.

#### Step 5: Express.js Framework
   - Introduction to Express.js: Learn about Express.js, a popular web application framework for Node.js.
   - Explore routing, middleware, and handling HTTP requests and responses using Express.js.

#### Step 6: Building RESTful APIs
   - Designing RESTful APIs: Understand the principles of RESTful API design, including resource naming, HTTP methods, and response formats.
   - Implement RESTful routes and controllers using Express.js for CRUD operations.

#### Step 7: Error Handling and Middleware
   - Error handling: Learn about error handling techniques in Express.js, including error middleware and global error handlers.
   - Explore middleware: Understand how middleware functions work in Express.js and how to use them for tasks like authentication, logging, and data validation.

### 8. Integrating Frontend with Backend

#### Step 1: Cross-Origin Resource Sharing (CORS)
   - Understanding CORS: Learn about Cross-Origin Resource Sharing and how it affects frontend-backend communication.
   - Implement CORS handling in your Express.js application to allow cross-origin requests from the frontend.

#### Step 2: Implementing Authentication and Authorization
   - Authentication methods: Explore different authentication methods such as JWT (JSON Web Tokens) and session-based authentication.
   - Implement user authentication using libraries like Passport.js or by rolling out your custom authentication middleware.
   - Authorization: Define user roles and permissions and implement authorization checks in your routes to restrict access to certain resources.

#### Step 3: Handling Form Data and File Uploads
   - Form handling: Learn how to handle form data submitted from the frontend using Express.js.
   - File uploads: Implement file upload functionality using libraries like multer for handling multipart/form-data.

#### Step 4: Error Handling and Validation
   - Data validation: Implement validation for incoming data to ensure data integrity and security.
   - Error handling: Handle validation errors and other runtime errors gracefully, providing meaningful error messages to the client.

#### Step 5: Security Best Practices
   - Secure coding practices: Learn about security best practices for Node.js applications, including input validation, output encoding, and data sanitization.
   - Implement security measures to protect against common vulnerabilities like SQL injection, XSS (Cross-Site Scripting), and CSRF (Cross-Site Request Forgery).

#### Step 6: Testing and Debugging
   - Unit testing: Write unit tests for backend routes and controllers using testing frameworks like Mocha and Chai.
   - Debugging: Learn debugging techniques using built-in Node.js debugger or third-party debugging tools.

#### Step 7: Deployment
   - Deployment setup: Prepare your Express.js application for deployment to a production environment.
   - Choose a deployment platform (e.g., Heroku, AWS, DigitalOcean) and follow deployment guidelines for Node.js applications.

### Phase 3: Backend Development (DBS and API)

6. **Database Systems**

   - Understand database management systems (DBMS) and their types (relational, NoSQL, NewSQL).
   - Dive deeper into relational databases:
     - ~~Learn advanced SQL querying techniques including joins, subqueries, and indexing.~~
     - Study database normalization and denormalization.
   - Explore NoSQL databases:
     - Learn about document-based (e.g., MongoDB), key-value (e.g., Redis), and column-family (e.g., Cassandra) databases.
     - Understand data modeling and querying in NoSQL databases.
   - Experiment with database design and optimization techniques.

7. **Building APIs**
   - Understand the principles of RESTful API design.
   - Learn about HTTP methods (GET, POST, PUT, DELETE) and status codes.
   - Study API authentication and authorization mechanisms (e.g., JWT, OAuth).
   - Dive into API documentation and versioning best practices.
   - Explore tools like Swagger or Postman for API testing and documentation.
   - Implement CRUD (Create, Read, Update, Delete) operations in your APIs.
   - Experiment with serialization and deserialization of data (e.g., JSON, XML).

### Phase 4: Full-Stack Integration

9. **Full-Stack Development**

   - Integrate frontend (React) with backend (Node.js/Express or your chosen backend framework).
   - Learn about RESTful API design principles and best practices.
   - Implement authentication and authorization using techniques like JWT (JSON Web Tokens) or OAuth.
   - Handle CORS (Cross-Origin Resource Sharing) and CSRF (Cross-Site Request Forgery) protection in your full-stack applications.
   - Explore real-time communication between frontend and backend using technologies like WebSockets or Server-Sent Events.

10. **Deployment and DevOps**
    - Explore deployment options like Heroku, AWS, or Netlify for hosting your web applications.
    - Learn about continuous integration and deployment (CI/CD) pipelines.
    - Understand basics of server management, scalability, and monitoring.


### Phase 5: Advanced Topics and Specializations

11. **Advanced Frontend Topics**

    - Dive deeper into frontend performance optimization techniques.
    - Explore modern frontend build tools like Webpack, Babel, or Parcel.
    - Learn about Progressive Web Apps (PWAs) and Service Workers for offline capabilities.

12. **Advanced Backend Topics**

    - Study topics like authentication best practices, data validation, and error handling in backend development.
    - Explore WebSocket communication for real-time applications.
    - Understand server-side rendering (SSR) and its benefits.

13. **Explore Specializations**
    - Depending on your interests, delve into areas like data visualization with libraries like D3.js, game development with frameworks like Phaser.js, or serverless architecture with AWS Lambda or Firebase.

### Phase 5: Advanced Topics and Specializations

9. **Advanced Frontend Topics**

   - Dive deeper into frontend performance optimization techniques.
   - Explore modern frontend build tools like Webpack, Babel, or Parcel.
   - Learn about Progressive Web Apps (PWAs) and Service Workers for offline capabilities.

10. **Advanced Backend Topics**

    - Study topics like authentication best practices, data validation, and error handling in backend development.
    - Understand server-side rendering (SSR) and its benefits.
    - Dive deeper into backend optimization techniques including caching, load balancing, and scaling.
    - Experiment with microservices architecture and containerization (e.g., Docker, Kubernetes) for scalable backend systems.

11. **Further Understanding Database Systems**

    - Explore advanced database topics such as transactions, locking, and concurrency control.
    - Study database administration tasks like backup and recovery, performance tuning, and monitoring.
    - Dive into database security principles including access control, encryption, and compliance.
    - Experiment with database replication and sharding for high availability and scalability.

12. **Building Robust APIs**
    - Explore advanced API design patterns like HATEOAS (Hypermedia as the Engine of Application State) and GraphQL.
    - Study API rate limiting, throttling, and caching strategies.
    - Learn about API versioning and backward compatibility.
    - Dive into API security best practices including input validation, parameterized queries, and OWASP API security top 10.
    - Experiment with API documentation tools and API governance frameworks.

### Practice and Projects

- Throughout each phase, reinforce your learning by building projects that encompass the topics covered.
- Start with small projects and gradually increase complexity.
- Consider contributing to open-source projects or participating in coding challenges to gain practical experience.
- Regularly revisit and refactor your code to improve your skills and understanding.
