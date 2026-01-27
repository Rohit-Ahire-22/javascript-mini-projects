# 💘 Love Calculator

> **A fun, deterministic compatibility engine that calculates "love percentage" based on name algorithms.**

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

The **Love Calculator** is a lighthearted web application that simulates a compatibility test.

Unlike random number generators that give different results every time, this project uses a **deterministic mathematical formula** based on string lengths. This means if you enter the same two names, you will always get the exact same percentage, mimicking a consistent "algorithm" of love.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Inline Styles, Flexbox) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Math.pow, Form Handling) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The application calculates compatibility by processing the character lengths of the inputs. It uses the Cubic Power function combined with the Modulo operator to ensure the result always falls between 0 and 100.

| Step | Code Logic | Description |
| :--- | :--- | :--- |
| **Input Analysis** | `boy.value.length` | Calculates the number of characters in the first name (v1). |
| **Combination** | `v1 + v2` | Sums the lengths of both names. |
| **The Algorithm** | `Math.pow(sum, 3)` | Cubes the total sum to create a large, non-linear number variant. |
| **Normalization** | `% 101` | Uses the Modulo operator to force the result into a 0-100 percentage range. |

---

## 🚀 Features <a name="features"></a>

* **🔒 Deterministic Results**: The same name combination always yields the same score, adding a layer of "authenticity" to the logic.
* **⚡ Form Handling**: Uses `e.preventDefault()` to intercept submission and process data instantly via JavaScript.
* **🌑 Dark Theme**: Built with a high-contrast dark background (`rgba(0, 0, 0, 0.945)`) and white typography.
* **🔄 Auto-Reset**: The form automatically clears itself after every calculation for a clean user experience.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/love-calculator-project
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
