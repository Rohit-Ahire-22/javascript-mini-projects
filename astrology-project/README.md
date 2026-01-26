# 🌌 Astrology Insights Engine

> **A deterministic, logic-based web application that calculates personalized insights without a database.**

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

The **Astrology Insights Engine** is a vanilla JavaScript application designed to demonstrate DOM manipulation and algorithmic data retrieval. Unlike random fortune generators, this app uses **deterministic math** to map user inputs (Name, DOB) to specific indices in pre-defined data arrays.

The result is a consistent, personalized "reading" that includes your Zodiac sign, a daily compliment, an empathy statement, a recommendation, and a future prediction.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Flexbox, Linear Gradients) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (ES6 Arrays, Event Listeners) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The core "magic" lies in `index.js`. We use mathematical modulo operators (`%`) to handle array indexing, ensuring the app never crashes even with large number inputs.

| Insight Type | Input Used | The Algorithm | Data Source Size |
| :--- | :--- | :--- | :--- |
| **Zodiac Sign** | `Month` | `zodiacSigns[month - 1]` | 12 items |
| **Compliment** | `Day` | `compliments[day - 1]` | 31 items |
| **Victim Card** | `Year` | `victimCardCompliments[year % 20]` | 20 items |
| **Recommendation** | `Day`, `Month` | `recommendations[(day * month) % 30]` | 30 items |
| **Prediction** | `Name`, `Surname` | `predictions[(name.length * surname.length) % 20]` | 20 items |

---

## 🚀 Features <a name="features"></a>

* **✨ Semantic Form Handling**: Prevents default submission to process data via JS.
* **🎨 Responsive Design**: Centered layout with a deep-space gradient background (`#4a90e2` to `#50c1e9`).
* **🔢 Zero-Index Correction**: Automatically adjusts user inputs (1-12) to match array indices (0-11).
* **🔒 Input Validation**: HTML5 attributes ensure strict ranges (e.g., Days 1-31, Years 1900-2026).

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    Replace `your-username` with your GitHub username
    ```bash
    git clone https://github.com/your-username/javascript-mini-projects.git
    ```

3.  **Navigate to the Folder**
    ```bash
    cd my-js-project/astrology-project
    ```

4.  **Run the App**
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
