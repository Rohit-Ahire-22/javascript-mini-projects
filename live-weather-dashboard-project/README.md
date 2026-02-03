# 🌦️ Real-Time Weather App

> **A live weather dashboard that fetches real-time climate data using the OpenWeatherMap API.**

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Maintained-Yes-green?style=for-the-badge" alt="Maintained">
  <img src="https://img.shields.io/badge/API-OpenWeatherMap-orange?style=for-the-badge" alt="API">
</p>

---

## 📖 Table of Contents
- [About the Project](#about)
- [Tech Stack](#tech-stack)
- [How It Works (The Logic)](#logic)
- [Features](#features)
- [Setup & Configuration](#setup)
- [Collection Context](#context)

---

## 🔍 About the Project <a name="about"></a>

The **Real-Time Weather App** is a functional dashboard that solves the problem of "what's the weather like?" instantly.

It acts as a client-side interface for the **OpenWeatherMap API**. Users simply enter a city name, and the app performs an asynchronous network request to fetch temperature, humidity, and weather conditions. It then intelligently maps specific weather IDs to visual emojis (e.g., mapping ID 200 to ⛈️) for a user-friendly experience.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Linear Gradients, Flexbox, Transforms) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Fetch API, Async/Await, Error Handling) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The application combines asynchronous data fetching with dynamic DOM injection.

| Concept | Code Logic | Description |
| :--- | :--- | :--- |
| **API Request** | `await fetch(apiUrl)` | Sends a request to `api.openweathermap.org` querying the specific city. |
| **Data Extraction** | `const {name, main, weather}` | Destructures the complex JSON response to extract only relevant data like `temp` and `humidity`. |
| **Emoji Engine** | `switch(true) ... case id>=200` | A custom logic function that maps numerical weather IDs (e.g., 300-400 for drizzle) to appropriate emojis (🌦️). |
| **Error Handling** | `displayError(msg)` | Catches failed requests (e.g., 404 City Not Found) and updates the DOM with a user-friendly error message. |

---

## 🚀 Features <a name="features"></a>

* **⚡ Async/Await**: Uses modern JavaScript syntax for cleaner, non-blocking network requests.
* **🌡️ Metric Conversion**: Automatically requests data in Metric units (`units=metric`) to display Celsius.
* **🎨 Dynamic Gradient UI**: Features a beautiful linear gradient background (`linear-gradient(185deg...)`) that highlights the weather card.
* **🛡️ Input Validation**: Prevents empty searches with immediate feedback ("Please enter a city name!").
* **🌫️ Detailed Info**: Displays Humidity %, Temperature, and a descriptive text summary (e.g., "broken clouds").

---

## 🔑 Setup & Configuration <a name="setup"></a>

**⚠️ Important:** This project requires a generic API Key to function.

1.  **Get an API Key**
    * Sign up for a free account at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
    * Generate a free API Key.

2.  **Configure the Code**
    * Open `script.js`.
    * Find the line: `const apikey = "YOUR_API_KEY_HERE";`.
    * Replace `"YOUR_API_KEY_HERE"` with your actual key string.

3.  **Run the App**
    * Open `index.html` in your browser.
    * Type a city (e.g., "London", "Mumbai") and hit Enter!

---

## 📦 JavaScript Mini Projects <a name="context"></a>

> **Note:** This project is part of a larger collection.

This repository contains a collection of beginner-friendly JavaScript mini projects created to strengthen core web development concepts.

Each project focuses on a specific idea such as **DOM manipulation**, **events**, **logic building**, and **user interaction**. The projects are built using **pure HTML, CSS, and JavaScript** without any external frameworks.

**Learning by doing is the main focus of this collection.**

Happy coding! 🚀
