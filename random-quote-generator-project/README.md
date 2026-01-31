# 💬 Random Quote Generator

> **A motivational tool that instantly serves curated wisdom using array-based data retrieval.**

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Maintained-Yes-green?style=for-the-badge" alt="Maintained">
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

The **Random Quote Generator** is a data-driven web application designed to inspire users with a click.

It stores a collection of 20 powerful motivational quotes in a JavaScript array. When triggered, the application uses a randomization algorithm to select a specific index and injects the corresponding text into the DOM. This project demonstrates how to handle **Data Structures (Arrays)** and **Random Logic** in Vanilla JS.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Inline Styles, Flexbox) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Arrays, Math.random) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The core engine relies on mapping a random integer to an array index.

| Component | Code Logic | Description |
| :--- | :--- | :--- |
| **Data Storage** | `const quotes = [...]` | A string array containing 20 unique motivational quotes. |
| **Randomization** | `Math.random() * 20` | Generates a floating-point number between 0 and 19.99. |
| **Normalization** | `Math.floor(...)` | Rounds the float down to the nearest whole integer (0-19) to create a valid index. |
| **Injection** | `quote.textContent = ...` | Replaces the current `<h1>` text with the quote found at the randomly generated index. |

---

## 🚀 Features <a name="features"></a>

* **⚡ Zero Latency**: Quotes update instantly upon clicking the button without any API calls or loading times.
* **🌑 Dark Mode**: Built with a high-contrast dark background (`rgba(0, 0, 0, 0.936)`) and white text for focus.
* **📏 Flexbox Layout**: The content is vertically and horizontally centered (`justify-content: center`) for a clean presentation.
* **📚 Curated Content**: Features 20 hand-picked quotes focusing on discipline, consistency, and growth.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/random-quote-generator-project
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
