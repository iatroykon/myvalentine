const btnYes = document.querySelector(".yes");
const btnNo = document.querySelector(".no");
const btnsContainer = document.querySelector(".btns");
const catImg = document.querySelector("img");
const message = document.querySelector("p");
const wrapper = document.querySelector(".main-wrapper");

let clickCount = 0;
btnsContainer.addEventListener("click", (e) => {
  //if its not a btn return
  if (!e.target.classList.contains("btn")) return;
  const btnClicked = e.target;

  //no btn
  if (btnClicked.classList.contains("no")) {
    clickCount += 1;
    //if its the 3rd time change the photo
    if (clickCount == 1) catImg.src = "cat-angry.png";
    if (clickCount == 3) catImg.src = "cat-sad.png";

    const width = Number((btnYes.offsetWidth / 10).toFixed(2));
    const height = Number((btnYes.offsetHeight / 10).toFixed(2));
    btnYes.style.width = `${width * 1.4}rem`;
    btnYes.style.height = `${height * 1.2}rem`;
  }

  //yes btn
  if (btnClicked.classList.contains("yes")) {
    btnsContainer.style.pointerEvents = "none";
    //change the cat img
    catImg.src = "cat-happy.png";
    //change the text
    message.textContent = "I knew you would say yes <3";
    //append text after the btns
    const element = document.createElement("h2");
    element.textContent =
      "I love you so freaking much and spending every day with you is the best thing that happens in my life <3";
    wrapper.insertAdjacentElement("beforeend", element);

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0, y: 0.6 }, // Left side of the screen
      });
    }, 0); // No delay

    // Confetti from the center after 500ms (0.5 seconds)
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.6 }, // Center of the screen
      });
    }, 700); // 500ms delay

    // Confetti from the right after 1000ms (1 second)
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 1, y: 0.6 }, // Right side of the screen
      });
    }, 350);
  }
});
