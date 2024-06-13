# Crypto Dashboard

Crypto Dashboard is a web application for tracking cryptocurrency transactions and user support, built with React and Vite. The application has three main pages: Dashboard, Transactions, and Support.

## Live Demo

You can view the live demo of the project [here](https://nadiaturko.github.io/crypto-dashboard/).

## Functionality

- **Dashboard**: The main page where users can view an overview of their cryptocurrency assets.
- **Transactions**: A page showing the user's transaction history.
- **Support**: A support page where users can get help or find answers to frequently asked questions.

## Technologies Used

- **Vite**: A build tool for fast project setup with modern web technologies.
- **React**: A library for building user interfaces.
- **Chakra UI**: A component library for React that provides easy styling and responsive design.
- **React Router**: A library for managing routing in React applications.

## Installation and Setup

To install and run the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:NadiaTurko/crypto-dashboard.git
   cd crypto-dashboard

   Nadia, [13 черв. 2024 р., 16:15:37]:
   ```

2. Install dependencies:

Nadia, [13 черв. 2024 р., 16:15:37]:
npm install
Nadia, [13 черв. 2024 р., 16:15:37]: 3. Run the application in development mode:

Nadia, [13 черв. 2024 р., 16:15:37]:
npm run dev
Nadia, [13 черв. 2024 р., 16:15:37]: 4. Build the project for production:

Nadia, [13 черв. 2024 р., 16:15:37]:
npm run build
Nadia, [13 черв. 2024 р., 16:15:37]: 5. Preview the built project:

Nadia, [13 черв. 2024 р., 16:15:37]:
npm run preview
Nadia, [13 черв. 2024 р., 16:15:37]:

## Project Structure

Nadia, [13 черв. 2024 р., 16:15:37]:
crypto-dashboard/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ ├── pages/
│ │ ├── Dashboard/
│ │ │ └── Dashboard.jsx
│ │ ├── Transaction/
│ │ │ └── Transaction.jsx
│ │ └── Support/
│ │ └── Support.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── theme/
│ │ └── index.js
│ └── index.css
├── .gitignore
├── package.json
└── vite.config.jsNadia, [13 черв. 2024 р., 16:15:37]:

## Configuration

You can configure the base path of the application if it's deployed in a subdirectory. To do this, update the base value in the vite....Nadia, [13 черв. 2024 р., 16:15:37]:
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
plugins: [react()],
base: "/crypto-dashboard/", // Change to your base path if needed
});Nadia, [13 черв. 2024 р., 16:15:37]:

## Screenshot

![Crypto Dashboard Screenshot](screenshot.png)

_Note: Replace screenshot.png with the actual path to your screenshot image._

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

If you have any questions or suggestions, please contact us at [nadrom_0211@gmail.com](mailto:nadrom_0211@gmail.com).
Nadia, [13 черв. 2024 р., 16:15:37]: 2. Install dependencies:

Nadia, [13 черв. 2024 р., 16:15:37]:
npm install
Nadia, [13 черв. 2024 р., 16:15:37]: 3. Run the application in development mode:

Nadia, [13 черв. 2024 р., 16:15:37]:
npm run dev
Nadia, [13 черв. 2024 р., 16:15:37]: 4. Build the project for production:

Nadia, [13 черв. 2024 р., 16:15:37]:
npm run build
Nadia, [13 черв. 2024 р., 16:15:37]: 5. Preview the built project:

Nadia, [13 черв. 2024 р., 16:15:37]:
npm run preview
Nadia, [13 черв. 2024 р., 16:15:37]:

## Project Structure

Nadia, [13 черв. 2024 р., 16:15:37]:
crypto-dashboard/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ ├── pages/
│ │ ├── Dashboard/
│ │ │ └── Dashboard.jsx
│ │ ├── Transaction/
│ │ │ └── Transaction.jsx
│ │ └── Support/
│ │ └── Support.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── theme/
│ │ └── index.js
│ └── index.css
├── .gitignore
├── package.json
└── vite.config....Nadia, [13 черв. 2024 р., 16:15:37]:
