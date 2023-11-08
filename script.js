let divContainer = document.getElementById("container");

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

for (let i = 0; i <= 100; i++) {
  let divs = document.createElement("div");
  divContainer.appendChild(divs);
  divs.innerHTML = i;

  if (isPrime(i)) {
    divs.style.cssText = "background-color: red;height: 5vh;width: 5vw;";
  } else if (isOdd(i)) {
    divs.style.cssText = "background-color: yellow;height: 5vh;width: 5vw;";
  } else if (isEven(i)) {
    divs.style.cssText = "background-color: green;height: 5vh;width: 5vw;";
  }

  divs.addEventListener("mouseover", function () {
    if (divs.style.backgroundColor === "red") {
      divs.textContent = "Prime";
    } else if (divs.style.backgroundColor === "yellow") {
      divs.textContent = "Odd";
    } else if (divs.style.backgroundColor === "green") {
      divs.textContent = "Even";
    }
  });

  divs.addEventListener("mouseout", function () {
    divs.textContent = i;
  });
}
