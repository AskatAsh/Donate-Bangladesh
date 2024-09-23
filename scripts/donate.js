const donate_buttons = document.querySelectorAll("#donate_btn");
console.log(donate_buttons);

// input validation
function input_valid(input){
    if(input === "" || isNaN(input) || input < 0){
        alert("Please enter a valid number as input [e.g. 0,1,2..7,8,9]");
        return false;
    }else{
        return true;
    }
}

donate_buttons.forEach(donate_btn => {
    donate_btn.addEventListener("click", function(e){
        e.preventDefault();
        const donation_input = Number(e.target.parentElement.querySelector("input").value);
        const cash = e.target.parentElement.parentElement.querySelector(".cash");
        // console.log(+donation_input);
        if(input_valid(donation_input)){
            cash.innerText = +cash.innerText + donation_input;
            my_modal_1.showModal();
        }
    })
})