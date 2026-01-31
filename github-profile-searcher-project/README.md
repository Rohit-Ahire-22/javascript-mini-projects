# 📡 GitHub User Fetcher

> **An advanced asynchronous application that consumes the GitHub REST API to display real-time user profiles.**

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Maintained-Yes-green?style=for-the-badge" alt="Maintained">
  <img src="https://img.shields.io/badge/Skill_Level-Intermediate-orange?style=for-the-badge" alt="Skill Level">
</p>

---

## 📖 Table of Contents
- [About the Project](#about)
- [Tech Stack](#tech-stack)
- [How It Works (The Logic)](#logic)
- [Features](#features)
- [Setup & Installation](#setup)
- [Collection Context](#context)

---

## 🔍 About the Project <a name="about"></a>

The **GitHub User Fetcher** represents a significant "Level Up" from basic DOM manipulation.

Instead of working with static local data, this application acts as a client that talks to a remote server. It utilizes **Asynchronous JavaScript (`async/await`)** to fetch live data from the GitHub Users API, handles network latency states, and dynamically visualizes the JSON response into interactive profile cards.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Flexbox, Hover Transformations) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Fetch API, Async/Await, Error Handling) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The core engine relies on the modern `fetch` API wrapped in a `try...catch` block to ensure robust data handling.

| Concept | The Code Logic | Functionality |
| :--- | :--- | :--- |
| **Async Request** | `await fetch(".../users")` | Pauses execution to wait for GitHub's server to respond, preventing UI freezing. |
| **Validation** | `if (!response.ok)` | Checks for HTTP errors (like 404 or 500) before attempting to use the data. |
| **Data Parsing** | `await response.json()` | Converts the raw data stream into a usable JavaScript Array of objects. |
| **Dynamic DOM** | `document.createElement(...)` | programmatic generation of HTML elements (`img`, `h2`, `a`) for every user found. |
| **Safety Net** | `catch (error)` | Captures any network failures and displays the error message directly to the user. |

---

## 🚀 Features <a name="features"></a>

* **🌐 Live API Integration**: Consumes real-world data directly from `api.github.com`.
* **⚠️ Robust Error Handling**: Gracefully informs the user if the data cannot be found or the connection fails.
* **🎨 Interactive Cards**: Profiles feature a smooth scaling animation (`transform: scale(1.1)`) on hover.
* **📱 Responsive Layout**: Uses `flex-wrap: wrap` to ensure user cards adjust perfectly to any screen size.
* **🔗 Direct Linking**: Automatically generates valid `_blank` target links to visit the actual GitHub profiles.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/github-profile-searcher-project
    ```

3.  **Run the App**
    * Simply double-click `index.html` to open it in your browser.
    * *Optional:* Use Live Server in VS Code for a better experience.

---

## 📦 JavaScript Mini Projects <a name="context"></a>

> **Note:** This project is part of a larger collection.

This repository contains a collection of beginner-friendly JavaScript mini projects created to strengthen core web development concepts.

Each project focuses on a specific idea such as **DOM manipulation**, **events**, **logic building**, and **user interaction**. The projects are built using **pure HTML, CSS, and JavaScript** without any external frameworks.

This repository is ideal for students and beginners who want hands-on practice with JavaScript. Each project is organized in its own folder with a separate README file explaining its functionality.

The goal of this repository is to learn by building small but practical applications. These projects help improve problem-solving skills and real-world coding experience. The code is kept simple, readable, and easy to understand.

* **Run any project:** Open its `index.html` file in a browser.
* **Contribution:** Contributions, improvements, and suggestions are welcome.
* **Growth:** This repository will continue to grow as more projects are added.

**Learning by doing is the main focus of this collection.**

Happy coding! 🚀
