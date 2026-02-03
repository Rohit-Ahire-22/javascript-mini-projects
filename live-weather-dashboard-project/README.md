# 🌦️ Real-Time Weather Dashboard

> **A professional-grade weather utility that visualizes live climate data using the OpenWeatherMap API and Asynchronous JavaScript.**

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Maintained-Yes-green?style=for-the-badge" alt="Maintained">
  <img src="https://img.shields.io/badge/API-OpenWeatherMap-orange?style=for-the-badge" alt="API Source">
  <img src="https://img.shields.io/badge/Skill_Level-Intermediate-yellow?style=for-the-badge" alt="Level">
</p>

---

## 📖 Table of Contents
- [About the Project](#about)
- [Tech Stack](#tech-stack)
- [Key Features](#features)
- [Code Structure & Logic](#logic)
- [Installation & Setup](#setup)
- [Configuration Guide](#config)
- [Project Collection](#context)

---

## 🔍 About the Project <a name="about"></a>

The **Real-Time Weather Dashboard** is a dynamic web application designed to provide instant weather updates for any city on the globe.

Unlike static websites, this application acts as a client-side interface for a remote server. It establishes a connection with the **OpenWeatherMap REST API** to retrieve live JSON data (temperature, humidity, description) and transforms that raw data into a beautiful, user-friendly UI with dynamic emojis and gradient backgrounds.

It solves the problem of "How do I fetch and display external data?" by demonstrating clean, modern `Async/Await` patterns and robust error handling.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Technology | Usage & Concepts Applied |
| :--- | :--- |
| **HTML5** | Semantic structure, Input forms, and Result containers. |
| **CSS3** | **Linear Gradients**, Flexbox centering, Box Shadows, and Hover Transitions. |
| **JavaScript (ES6+)** | **Fetch API**, **Async/Await**, DOM Manipulation, Event Listeners, and Object Destructuring. |

---

## 🚀 Key Features <a name="features"></a>

* **⚡ Asynchronous Data Fetching**: Utilizes `async/await` to perform non-blocking network requests, ensuring the UI remains responsive while data loads.
* **🌡️ Metric System Standard**: Automatically requests data in Celsius (`units=metric`) for global standard usability.
* **🎨 Dynamic Emoji Engine**: Features a custom `switch` logic engine that intelligently maps Weather IDs (e.g., `800`) to specific emojis (☀️, 🌧️, ❄️).
* **🛡️ Robust Error Handling**: Includes a `try...catch` block to gracefully handle invalid city names or network failures, displaying a user-friendly error message instead of crashing.
* **📱 Responsive & Interactive**: The UI cards use CSS Transforms (`scale(1.2)`) and gradients to create a "glass-morphism" feel.

---

## 🧠 Code Structure & Logic <a name="logic"></a>

The application logic is modularized into four distinct functions for readability and maintenance:

| Function Name | Responsibility |
| :--- | :--- |
| `getWeatherData(city)` | **The Data Fetcher:** Constructs the API URL and fetches raw JSON data. Throws an error if the response is not "OK". |
| `displayWeatherInfo(data)` | **The UI Builder:** Destructures the complex JSON object to extract `temp`, `humidity`, and `description`, then creates and appends HTML elements dynamically. |
| `gettingEmoji(id)` | **The Visualizer:** Takes a numeric Weather ID (from the API) and returns the corresponding emoji using a range-based switch statement. |
| `displayError(msg)` | **The Guardian:** Clears previous results and injects a bold error message into the DOM when something goes wrong. |

---

## 💻 Installation & Setup <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/income-tax-calculator-project
    ```

3.  **Run the App**
    * Simply double-click `index.html` to open it in your browser.
    * *Optional:* Use Live Server in VS Code for a better experience.

---

## 🔑 Configuration Guide <a name="config"></a>

⚠️ CRITICAL STEP: This app requires an API Key to function.

1.  **Get an API Key**
    * Sign up for a free account at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
    * Generate a free API Key.

2.  **Configure the Code**
    * Open `script.js`.
    * Find the line: `const apikey = "YOUR_API_KEY_HERE";`.
    * Replace `"YOUR_API_KEY_HERE"` with your actual key string(e.g., "a1b2c3d4e5...").

3.  **Run the App**
    * Open `index.html` in your browser.
    * Type a city (e.g., "London", "Mumbai") and hit Enter!
    
---

## 📦 JavaScript Mini Projects <a name="context"></a>
> **Note:** This project is part of a larger collection.

This repository contains a collection of beginner-to-intermediate JavaScript mini projects created to strengthen core web development concepts.

**The goal of this repository is to learn by building**. It spans from basic **DOM manipulation** (To-Do List) to **advanced API Integrations** (like this Weather App).

**Contribution**: Suggestions and improvements are welcome!

**Support**: If this helped you, please star ⭐️ the repository.

**Happy Coding!** 🚀
