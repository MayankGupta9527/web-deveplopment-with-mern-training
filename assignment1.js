function calculate() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let op = document.getElementById("op").value;
  let res = 0;

  if (op === "+") res = a + b;
  else if (op === "-") res = a - b;
  else if (op === "*") res = a * b;
  else if (op === "/") {
    if (b === 0) {
      document.getElementById("res").innerText = "Cannot divide by zero";
      return;
    }
    res = a / b;
  }

  document.getElementById("res").innerText = "Result: " + res;
}
