const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const list = document.getElementById("list");
const totalEl = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Load expenses on page load
document.addEventListener("DOMContentLoaded", renderExpenses);

function addExpense() {
  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (title === "" || isNaN(amount) || amount <= 0) return;

  const expense = { title, amount };
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses();
  titleInput.value = "";
  amountInput.value = "";
}

function renderExpenses() {
  list.innerHTML = "";
  let total = 0;

  expenses.forEach((exp, index) => {
    const li = document.createElement("li");
    li.textContent = `${exp.title} - ₹${exp.amount}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.onclick = () => {
      expenses.splice(index, 1);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      renderExpenses();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
    total += exp.amount;
  });

  totalEl.textContent = total;
}
