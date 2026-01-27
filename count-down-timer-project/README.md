# ⏳ Olympic Countdown Timer

> **A precise, real-time countdown engine tracking the moments until the 2028 Los Angeles Olympics.**

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

The **Olympic Countdown Timer** is a temporal visualization tool built with Vanilla JavaScript.

It calculates the exact time difference between the current moment and the start of the **2028 Los Angeles Olympics** (July 14, 2028). Unlike static timers, this application uses a dynamic `setInterval` loop to update the DOM every second, ensuring the countdown is always accurate to the millisecond.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Inline Styles, Flexbox) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Date Object, setInterval, Math) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The core logic relies on subtracting the current timestamp (`Date.now()`) from the target timestamp and processing the remainder using the **Modulo Operator (%)**.

| Time Unit | The Math Logic | Description |
| :--- | :--- | :--- |
| **Total Gap** | `olympTime - currentTime` | Calculates the raw difference in milliseconds. |
| **Days** | `Math.floor(timer / (1000 * 60 * 60 * 24))` | Extracts full days from the total milliseconds. |
| **Remainder** | `timer %= (1000 * 60 * 60 * 24)` | Uses Modulo to find the "leftover" time after extracting days. |
| **Refresh** | `setInterval(..., 1000)` | Re-runs the calculation logic every 1000ms (1 second) to update the UI. |

---

## 🚀 Features <a name="features"></a>

* **⚡ Real-Time Updates**: The DOM refreshes every second without requiring a page reload.
* **📅 Future-Proof Date**: Uses the JavaScript `Date` object (Year 2028, Month 6, Day 14) for precise targeting.
* **🌑 Minimalist Dark Mode**: Features a high-contrast interface (`rgba(0, 0, 0, 0.973)`) for easy readability.
* **📏 Flexbox Layout**: Content is perfectly centered horizontally and vertically on the screen.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/count-down-timer-project
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
