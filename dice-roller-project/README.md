# 🎲 Dice Roller

> **A dynamic probability simulation tool that generates random dice rolls with visual feedback.**

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

The **Dice Roller** is an interactive web application designed to simulate the physical act of rolling multiple dice.

Unlike simple random number generators, this project provides a dual-layer output: it calculates the numerical value and instantly maps it to a corresponding visual representation (dice image). It demonstrates effective use of **loops**, **arrays**, and **template literals** in Vanilla JavaScript.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Flexbox, Responsive Layout) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Math.random, Loops, DOM Injection) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The core functionality relies on a `for` loop that iterates based on the user's input count, generating independent random values for each iteration.

| Component | The Code Logic | Functionality |
| :--- | :--- | :--- |
| **Input Handling** | `myInput.value` | Captures the number of dice the user wants to roll. |
| **Randomization** | `Math.floor(Math.random() * 6) + 1` | Generates a random integer between 1 and 6 for every die. |
| **Image Mapping** | ``src="dice_images/${value}.png"`` | Dynamically constructs the image file path using the random number. |
| **DOM Injection** | `diceImg.innerHTML = images.join(" ")` | Inserts the generated HTML string of images directly into the page. |

---

## 🚀 Features <a name="features"></a>

* **🔢 Scalable Inputs**: Can roll 1 die or 100+ dice simultaneously based on user input.
* **🖼️ Visual Feedback**: Instantly renders high-quality dice images corresponding to the rolled numbers.
* **📱 Responsive Design**: Uses a centered Flexbox layout that adapts to the screen size.
* **⚡ Text & Visual Output**: Displays both the numeric values (e.g., "Dice: 4, 2") and the visual dice faces.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/dice-roller-project
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
