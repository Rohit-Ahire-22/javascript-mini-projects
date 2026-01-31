
setInterval(() => {
    const result = document.getElementById("result");
    const currentTime = Date.now();
    const olympTime = new Date(2028, 6, 14).getTime();
    let timer = olympTime - currentTime;

    let days = Math.floor((timer) / (1000 * 60 * 60 * 24));
    timer %= (1000 * 60 * 60 * 24);
    let hrs = Math.floor((timer) / (1000 * 60 * 60));
    timer %= (1000 * 60 * 60);
    let min = Math.floor((timer) / (1000 * 60));
    timer %= (1000 * 60);
    let sec = Math.floor((timer) / (1000));
    timer %= (1000);

    result.textContent = `${days}:Days ${hrs}:Hours ${min}:Minutes ${sec}:Seconds`;
}, 1000);



