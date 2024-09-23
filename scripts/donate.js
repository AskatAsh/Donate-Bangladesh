const donate_buttons = document.querySelectorAll("#donate_btn");
// console.log(donate_buttons);
const total_savings = document.getElementById("savings");

// input validation
function input_valid(input){
    if(input === "" || isNaN(input) || input < 0){
        alert("Please enter a valid number as input [e.g. 0,1,2..7,8,9]");
        return false;
    }else{
        return true;
    }
}

function get_donation_title(e){
    const title = e.target.parentElement.parentElement.querySelector("#donation_title").innerText;
    const title_shorten = title.substr(title.indexOf("for"), title.length);
    console.log(title_shorten);
}

donate_buttons.forEach(donate_btn => {
    donate_btn.addEventListener("click", function(e){
        e.preventDefault();
        const donation_input = Number(e.target.parentElement.querySelector("input").value);
        const cash = e.target.parentElement.parentElement.querySelector(".cash");
        // console.log(+donation_input);
        if(input_valid(donation_input)){
            const savings_left = +total_savings.innerText - donation_input;
            if(savings_left < 0 || +total_savings.innerText === 0){
                alert("Sorry!!! you don't have enough balance.");
            }else{
                cash.innerText = +cash.innerText + donation_input;
                total_savings.innerText = savings_left;

                get_donation_title(e);

                // clear all inputs
                donate_buttons.forEach(donate_btn => {
                    e.target.parentElement.querySelector("input").value = "";
                })
            }
            // my_modal_1.showModal();
        }
    })
})