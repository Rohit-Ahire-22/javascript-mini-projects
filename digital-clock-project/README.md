# ⏰ Digital Clock

> **A minimalist real-time clock that synchronizes with your system time.**

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

The **Digital Clock** is a precise timekeeping application built with Vanilla JavaScript.

It leverages the browser's `Date` object to fetch the current local time and updates the display every second using an interval timer. This project serves as a perfect introduction to **asynchronous JavaScript functions** like `setInterval`.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Inline Styles, Flexbox) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Date Object, setInterval) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The core logic relies on creating a continuous loop that fetches the system time and injects it into the DOM.

| Component | The Code Logic | Functionality |
| :--- | :--- | :--- |
| **Time Fetching** | `new Date()` | Creates a new Date object representing the current moment. |
| **Formatting** | `time.toLocaleTimeString()` | Converts the raw date object into a readable string (e.g., "10:30:15 AM") based on the user's locale. |
| **DOM Update** | `div.textContent = ...` | Replaces the text inside the `<div>` with the new time string. |
| **Refresh Loop** | `setInterval(..., 1000)` | Executes the entire function every 1000 milliseconds (1 second) to keep the clock ticking. |

---

## 🚀 Features <a name="features"></a>

* **⚡ Real-Time Accuracy**: Updates instantly to match your computer's system clock.
* **🌑 Dark Mode**: Features a high-contrast dark background (`rgba(0, 0, 0, 0.973)`) for reduced eye strain.
* **📏 Flexbox Centering**: The time is perfectly aligned to the center of the viewport using `display: flex`.
* **📱 Responsive Typography**: Uses a large `50px` font weight for clear visibility on any screen size.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/digital-clock-project
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
