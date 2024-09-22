const tabs_btn = document.querySelectorAll(".tabs_btn");
const donation_content = document.querySelector(".donation_content");
const history_content = document.querySelector(".history_content");

tabs_btn.forEach((tab) => {
  if (tab.className.includes("active")) {
    if (tab.innerText === "Donation") {
      history_content.style.display = "none";
      donation_content.style.display = "block";
    } else {
      history_content.style.display = "block";
      donation_content.style.display = "none";
    }
  }
  tab.addEventListener("click", function (e) {
    tabs_btn.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    if (tab.className.includes("active")) {
      if (tab.innerText === "Donation") {
        history_content.style.display = "none";
        donation_content.style.display = "block";
      } else {
        history_content.style.display = "block";
        donation_content.style.display = "none";
      }
    }
  });
});
