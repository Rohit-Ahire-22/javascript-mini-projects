const form = document.getElementById('quizForm');

const answers = {
    q1: "var",
    q2: "//",
    q3: "console.log()",
    q4: "Boolean",
    q5: "==="
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;

    for (let [name, value] of data.entries()) {
        if (answers[name] == value)
            finalScore++;
    }

    document.getElementById("result").textContent = `You score ${finalScore} out of 5`;

    form.reset();
});