# Gen AI Analytics Dashboard

## 🚀 Overview
The **Gen AI Analytics Dashboard** is an interactive data query application that simulates AI-driven data analysis. Built using **React**, **Redux Toolkit**, **Recharts**, and **Tailwind CSS**, this dashboard allows users to input queries, visualize results, and manage query history.

## 🎯 Features
- **Query Input System**: Users can input data queries with autosuggestions.
- **State Management**: Utilizes Redux Toolkit for managing queries and processing results.
- **Simulated AI Processing**: Generates randomized data to mimic AI-driven query responses.
- **Query History**: Users can re-run previous queries with a single click.
- **Data Visualization**: Interactive bar charts using **Recharts**.
- **Responsive UI**: Styled with **Tailwind CSS** for a sleek and modern look.

## 🏗️ Project Structure
```
📂 data-query-dashboard
 ├── 📂 src
 │   ├── 📂 components
 │   │   ├── QueryInput.jsx
 │   │   ├── QueryHistory.jsx
 │   │   ├── ResultsChart.jsx
 │   │   ├── StatusDisplay.jsx
 │   ├── 📜 App.jsx
 │   ├── 📜 main.jsx
 │   ├── 📜 store.js
 │   ├── 📜 index.css
 │
 ├── 📜 tailwind.config.js
 ├── 📜 package.json
 ├── 📜 README.md
```


## 🔍 Evaluation Focus
### 1️⃣ React Component Structure
- Components are modular and reusable.
- Each component has a single responsibility.
- Uses functional components with hooks for state management.

### 2️⃣ State Management Efficiency
- Redux Toolkit optimizes state management.
- Uses **createSlice** and **createAsyncThunk** to handle asynchronous actions.
- Stores **query history**, **status**, and **results** efficiently.

### 3️⃣ UI/UX Design Considerations
- Tailwind CSS ensures a modern, responsive design.
- Layout follows best UI/UX practices for usability.

### 4️⃣ Code Quality
- Clean and readable code with comments.
- Follows best practices for React and Redux development.

### 5️⃣ Creativity in AI Query Simulation
- **Mock AI Processing**: Uses **setTimeout** to simulate API calls.
- **Randomized Data Generation**: Provides different results for each query.
- **Query History**: Allows users to revisit and rerun previous queries.

## 🚀 Future Enhancements
- Integrate **OpenAI API** for real AI-driven query responses.
- Add **dark mode** toggle.
- Expand **charting options** (line graphs, pie charts).
- Enhance query **suggestion engine** with ML models.
