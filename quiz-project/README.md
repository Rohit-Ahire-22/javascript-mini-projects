# 📝 JavaScript Basics Quiz

> **An interactive, form-based quiz application that evaluates user knowledge using the FormData API.**

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

The **JavaScript Basics Quiz** is a lightweight educational tool designed to test fundamental coding concepts.

Unlike simple if/else chains, this project utilizes the **FormData API** to efficiently capture user input. It iterates through the form data dynamically, comparing user selection against a stored object of correct answers. This method is highly scalable—you can add more questions to the HTML without rewriting the JavaScript logic.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Box Shadows, Hover States) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (FormData API, Objects, Loops) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The core engine relies on comparing a `FormData` iterator against a defined "Answer Key" object.

| Component | Code Logic | Description |
| :--- | :--- | :--- |
| **Answer Key** | `const answers = { q1: "var", ... }` | A key-value object storing the correct answer for every question ID. |
| **Data Capture** | `new FormData(form)` | Instantly retrieves all checked radio buttons from the form without manual ID selection. |
| **Iteration** | `for (let [name, value] of data.entries())` | Loops through the user's submitted answers one by one. |
| **Validation** | `if (answers[name] == value)` | Compares the user's input against the Answer Key. If they match, the score increments. |

---

## 🚀 Features <a name="features"></a>

* **⚡ Efficient Iteration**: Uses a `for...of` loop to handle any number of questions automatically.
* **🔄 Auto-Reset**: The form clears all selections automatically after submission using `form.reset()`.
* **🎨 Visual Feedback**: A clean, white card layout with soft shadows (`box-shadow: 0 4px 10px`) for a modern look.
* **🖱️ Interactive UI**: Submit button features a color-change hover effect for better user engagement.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/quiz-project
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
