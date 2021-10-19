document.addEventListener("DOMContentLoaded", () => {
  const num1 = document.querySelector("#num1");
  const num2 = document.querySelector("#num2");
  const addBtn = document.querySelector("#add");
  const subBtn = document.querySelector("#sub");
  const output = document.querySelector("#output");

  function getInputValues() {
    const value1 = +num1.value;
    const value2 = +num2.value;

    return [value1, value2];
  }

  const calcHandler = (action) => {
    const values = getInputValues();
    if (action === "sum") {
      result = values[0] + values[1];
    } else if (action === "sub") {
      result = values[0] - values[1];
    } else {
      ("");
    }
    output.closest(".card").style.display = "block";
    output.innerHTML = result;
    console.trace();
  };

  addBtn.addEventListener("click", () => calcHandler("sum"));
  subBtn.addEventListener("click", () => calcHandler("sub"));
});

const obj = [{
    name: "ivan",
    age: 23,
    city: "Kyiv"
  },
  {
    name: "Dmitro",
    age: 34,
    city: "Lviv"
  },
  {
    name: "Valentyn",
    age: 41,
    city: "Cherkassy"
  }
];
console.table(obj);
