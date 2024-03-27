## Project Documentation for Web Development Tasks
 ### Introduction
This documentation serves as a comprehensive guide for the web development project encompassing four primary tasks: creating a side navigation bar, graphing population data, displaying cryptocurrency prices, and optionally integrating MetaMask wallet. Each task is designed to showcase specific front-end development skills using React JS, including responsiveness, data fetching, and third-party integration.

## Task 1: Side Navigation Bar
- **Objective:** Implement a responsive side navigation bar that collapses into a hamburger menu on smaller screens, includes at least three navigation items, and highlights the active item.

### Implementation Details:

- **Responsive Design:** Utilized CSS Flexbox and media queries to ensure the navigation bar's responsiveness across different devices.
- **Hamburger Menu:** Integrated a hamburger menu for mobile devices using a React state to toggle visibility.
- **Navigation Items:** Implemented three navigation items, each linked to a different section of the application.
- **Highlighting Active Item:** Used React Router's NavLink component to automatically highlight the active navigation item based on the current route.

#### Evaluation:
- **Layout:** The navigation bar's layout matches the provided design specifications.
- **Responsiveness:** Fully responsive across a range of devices, seamlessly transitioning to a hamburger menu on smaller screens.
- **Active Item Highlighting:** Active navigation item is correctly highlighted, enhancing user navigation experience.

<hr/>

## Task 2: Graph Population Data
- **Objective:** Fetch population data from an API and graph the data using React JS and Chart.js.

### Implementation Details:
- **Data Fetching:** Utilized fetch API within a React useEffect hook to asynchronously retrieve population data.
- **Chart.js Integration:** Leveraged Chart.js to plot the population data, ensuring a dynamic and interactive graph.
- **Graph Customization:** Added labels, legends, and axis titles for clarity and context.

### Evaluation:

- **Data Retrieval:** Successfully fetched and displayed population data.
- **Graph Accuracy:** The graph accurately represents the population data with clear differentiation between nations.
- **Styling:** Graph components are properly labeled and styled, enhancing readability.

<hr/>

## Task 3: Display Cryptocurrency Prices

- **Objective:** Fetch and display cryptocurrency prices in a visually appealing card format.

### Implementation Details:
- **Async Data Fetching:** Implemented asynchronous data fetching using React's useEffect to retrieve cryptocurrency prices.
- **Card Design:** Designed cards using CSS Grid to display Bitcoin prices in USD and Euro, focusing on visual appeal.
- **Responsive Cards:** Ensured that the cards are responsive and maintain their layout integrity across different screen sizes.

### Evaluation:
- **Integration and Retrieval:** Successfully integrated with the API and retrieved cryptocurrency prices.
- **Presentation:** Prices are clearly presented in card format, with each card displaying information concisely.
- **Visual Appeal:** Cards are visually appealing and consistent in design, enhancing the overall user experience.

<hr/>

## Task 4: Integrate MetaMask Wallet (Optional)

- **Objective:** Implement functionality to connect to the MetaMask wallet using the Web3 JS library.

### Implementation Details:
- **Web3 JS Library:** Utilized Web3 JS to integrate MetaMask wallet connection functionality.
- **Connect Wallet Button:** Created a button that triggers the wallet connection process when clicked.
- **User Feedback:** Implemented feedback messages to inform users of successful or unsuccessful connection attempts.

### Evaluation:

- **MetaMask Integration:** Successfully integrated the "Connect Wallet" feature with MetaMask.
- **User Interaction:** Effectively handles user interactions and displays appropriate feedback messages.
- **Compatibility:** Demonstrates compatibility across modern browsers and the MetaMask extension.

Submission Guidelines
Hosted Link:

<hr/>

### Conclusion
This project showcases a comprehensive set of web development skills, focusing on creating responsive UI components, fetching and displaying data from APIs, and integrating third-party services using React JS. Each task is evaluated based on its completion, code quality, adherence to best practices, and overall presentation. This documentation should accompany your project submission, providing evaluators with insight into your implementation approach and decision-making process.







