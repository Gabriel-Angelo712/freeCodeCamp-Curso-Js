const checkBtn = document.querySelector("#check-btn");

let textInput = document.querySelector("#text-input");

const result = document.querySelector("#result");

function filtering() {
  const resposta =
    textInput.value
      .split("")
      .filter((e) => e.match(/\w+/g) && !e.match("_"))
      .join("")
      .toLowerCase() ==
    textInput.value
      .split("")
      .filter((e) => e.match(/\w+/g) && !e.match("_"))
      .reverse()
      .join("")
      .toLowerCase()
      ? true
      : false;
  console.log(resposta);
  console.log(
    textInput.value
      .split("")
      .filter((e) => e.match(/\w+/g) && !e.match("_"))
      .join("")
      .toLowerCase()
  );
  console.log(
    textInput.value
      .split("")
      .filter((e) => e.match(/\w+/g) && !e.match("_"))
      .reverse()
      .join("")
      .toLowerCase()
  );
  return resposta;
}

checkBtn.addEventListener("click", () => {
  if (textInput.value) {
    result.innerHTML = filtering()
      ? `${textInput.value} is a palindrome`
      : `${textInput.value} is not a palindrome`;
  } else {
    alert("Please input a value");
  }
});
