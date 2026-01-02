
let total = 0;

function addExpense() {
 const title = document.getElementById("title").value;
 const amount = Number(document.getElementById("amount").value);
 if(title === "" || amount <= 0) return;

 const li = document.createElement("li");
 li.textContent = `${title} - ₹${amount}`;
 document.getElementById("list").appendChild(li);

 total += amount;
 document.getElementById("total").innerText = total;

 document.getElementById("title").value = "";
 document.getElementById("amount").value = "";
}
