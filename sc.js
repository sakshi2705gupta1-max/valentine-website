document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const question = document.getElementById("question");
  const chocolateRain = document.getElementById("chocolateRain");
  const music = document.getElementById("bgMusic");

  let yesCount = 0;

  /* YES button + music */
  yesBtn.addEventListener("click", () => {
    yesCount++;

    if (yesCount === 1) {
      question.textContent = "Really really sure? 🥹💖 Click again!";
    }

    if (yesCount === 2) {
  question.textContent = "Hehe… I knew it 💕🎶";

  console.log("Music element:", music);

  music.volume = 0.8;
  music.play()
    .then(() => console.log("✅ Music started"))
    .catch(err => console.error("❌ Audio error:", err));
}

  });

  /* NO button runs */
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.transform = `translate(
      ${Math.random() * 200 - 100}px,
      ${Math.random() * 200 - 100}px
    )`;
  });

  /* 🍫 Chocolate rain (smooth, no flicker) */
  function createChocolate() {
    const choco = document.createElement("span");
    choco.textContent = "🍫";
    choco.style.left = Math.random() * 100 + "vw";
    choco.style.fontSize = Math.random() * 10 + 18 + "px";
    choco.style.animationDuration = Math.random() * 4 + 6 + "s";

    chocolateRain.appendChild(choco);

    // Remove only AFTER animation ends
    choco.addEventListener("animationend", () => {
      choco.remove();
    });
  }

  setInterval(createChocolate, 500); // slower = smoother

});
