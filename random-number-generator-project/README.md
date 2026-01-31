# 🔢 Random Number Generator

> **A fundamental utility tool that generates pseudorandom integers within a defined range.**

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

The **Random Number Generator** is a core logic application that demonstrates how to handle computer-generated randomness.

While computers are deterministic, this tool uses the `Math` library to simulate "dice-roll" behavior. It takes a raw random decimal, scales it to a custom range (1 to 100), and rounds it to a whole integer, instantly displaying the result in the UI.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Transitions, Flexbox) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Math.random, Math.floor) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The application relies on a specific mathematical formula to convert JavaScript's standard `0-1` float generation into a useful integer range.

| Step | Code Logic | Description |
| :--- | :--- | :--- |
| **Range Setup** | `let min=1; let max=100;` | Defines the inclusive lower bound and exclusive upper bound for the generator. |
| **Randomization** | `Math.random()` | Generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). |
| **Scaling** | `* (max - min)` | Stretches the random decimal to cover the span of numbers (99 units). |
| **Normalization** | `Math.floor(...) + 1` | Rounds the decimal down to the nearest integer and shifts it to start at 1. |
| **Output** | `label.textContent = ...` | Injects the final calculated integer into the HTML display element. |

---

## 🚀 Features <a name="features"></a>

* **⚡ Instant Execution**: Generates a new number immediately upon click with zero latency.
* **🎨 Interactive Controls**: The "Generate" button features a smooth color-transition hover effect (`0.25s`).
* **Typography**: Uses a massive `5em` font size to make the generated number the visual focal point.
* **📱 Clean UI**: A centered, minimalist layout using standard system fonts for readability.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/random-number-generator-project
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
