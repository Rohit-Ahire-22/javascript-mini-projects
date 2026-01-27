# 🌡️ Temperature Conversion

> **A precise utility tool for converting temperatures between Celsius and Fahrenheit.**

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

The **Temperature Conversion** app is a mathematical utility that solves the daily problem of unit confusion.

It provides a simple interface where users can input a numerical value, select a conversion direction (Celsius ➡ Fahrenheit or Fahrenheit ➡ Celsius), and get an instant result. The application handles floating-point math and ensures the output is formatted cleanly using JavaScript's number methods.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Flexbox, Box Shadows) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Mathematical Formulas, DOM Manipulation) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The application applies standard physics formulas to convert the input value based on the selected radio button.

| Conversion Type | Mathematical Formula | Code Logic |
| :--- | :--- | :--- |
| **C ➡ F** | `(°C × 9/5) + 32` | `f = (temp * (9/5)) + 32` |
| **F ➡ C** | `(°F − 32) × 5/9` | `c = (temp - 32) * (5/9)` |
| **Precision** | `N/A` | `value.toFixed(2)` ensures the result stays within 2 decimal places. |
| **Validation** | `isNaN(temp)` | Prevents calculation if the user enters text instead of numbers. |

---

## 🚀 Features <a name="features"></a>

* **🔘 Radio Button Selection**: Allows users to toggle between conversion modes easily.
* **🛡️ Input Validation**: Detects invalid inputs and displays a "Please Enter valid temperature" warning.
* **🎨 Clean UI**: Features a card-based layout with a soft drop shadow (`box-shadow: 10px 10px 5px`) and rounded corners.
* **📏 Precision Output**: Automatically rounds complex decimals to two places (e.g., `98.60`) for better readability.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/temperature-conversion-project
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
