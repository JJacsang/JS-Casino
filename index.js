const rangeMax = document.getElementById("generator");
const guessNum = document.getElementById("guessNum");
const submitBtn = document.querySelector(".submitBtn");

// text
const Box = document.querySelector(".resultBox");

// funcs
function getResultText(choseNum, randomNum) {
  return `
  You chose: ${choseNum || 0}, the machine chose: ${randomNum || 0}
  <br />
  ${
    choseNum === randomNum
      ? "<Win class='winning-alert'>You Win!</Win>"
      : "<Win>You lost!</Win> Try again!"
  }
`;
}

function handlePlayButtonClick(e) {
  e.preventDefault();

  if (rangeMax.value <= 0 || guessNum.value <= 0) {
    alert("Please put Number");
    return false;
  }
  const maxValue = parseInt(rangeMax.value, 10);
  const choseNum = parseInt(guessNum.value, 10);
  const randomNum = Math.ceil(Math.random() * maxValue);
  Box.innerHTML = getResultText(choseNum, randomNum);
}

submitBtn.addEventListener("click", handlePlayButtonClick);
