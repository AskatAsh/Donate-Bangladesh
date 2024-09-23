const donate_buttons = document.querySelectorAll("#donate_btn");
const total_savings = document.getElementById("savings");
const transactions_history = document.getElementById("transactions");

// input validation
function input_valid(input) {
  if (input === "" || isNaN(input) || input <= 0) {
    alert("Please enter a valid number as input [e.g. 0,1,2..7,8,9]");
    return false;
  } else {
    return true;
  }
}

// get date time
function get_datetime(e) {
  const date_time = new Date();
  return date_time;
}

// get donation title and show it in history
function get_donation_history(e, donation) {
  const date_time = get_datetime(e);
  const title =
    e.target.parentElement.parentElement.querySelector(
      "#donation_title"
    ).innerText;
  const title_shortened = title.substr(title.indexOf("for"), title.length);

  const li = document.createElement("li");
  li.innerHTML = `
        <h3 class="text-xl font-bold">
            ${donation} Taka is Donated ${title_shortened}
        </h3>
        <p class="font-light pt-4">
            Date : ${date_time}
        </p>`;
  li.className = "border-2 border-light_border rounded-2xl p-5 sm:p-8";
  transactions_history.appendChild(li);
}

donate_buttons.forEach((donate_btn) => {
  donate_btn.addEventListener("click", function (e) {
    e.preventDefault();
    const donation_input = Number(
      e.target.parentElement.querySelector("input").value
    );
    const cash = e.target.parentElement.parentElement.querySelector(".cash");

    if (input_valid(donation_input)) {
      const savings_left = +total_savings.innerText - donation_input;
      if (savings_left < 0 || +total_savings.innerText === 0) {
        alert("Sorry!!! you don't have enough balance.");
      } else {
        cash.innerText = +cash.innerText + donation_input;
        total_savings.innerText = savings_left;
        // show modal for successful donation
        my_modal_1.showModal();

        get_donation_history(e, donation_input);

        // clear all inputs
        donate_buttons.forEach((donate_btn) => {
            e.target.parentElement.querySelector("input").value = "";
        });
      }
    }
  });
});
