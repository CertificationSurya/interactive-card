// user
// month
// year
// card-num
// cvc-num

let inputs = document.querySelectorAll('input');
let errorMsg = document.querySelectorAll('.error');
let form = document.querySelector('.inputFields');
let afterForm = document.querySelector('.verified');
let errorChecker = 0;

inputs.forEach(elem => {
    elem.addEventListener('input', (e) => {

        // console.log(elem , elem.id, document.querySelector(`.${elem.id}`))

        document.querySelector(`.${elem.id}`).innerHTML = elem.value;

        if (elem.id == "user") {

            if (/[0-9]/.test(elem.value)) {
                errorMsg[0].innerHTML = "Wrong Format, String Only";
                errorChecker++;
                console.log(errorChecker)
            }

            else {
                errorMsg[0].innerHTML = '';
                errorChecker = 0;
            }
        }

        if (elem.id == "card-num") {

            if (/[a-z]/i.test(elem.value)) {
                errorMsg[1].innerHTML = "Wrong Format, Number Only";
                errorChecker++;
            }

            else {
                errorMsg[1].innerHTML = '';
                errorChecker = 0;
            }
        }
        

        
    })
})



function transit(e) {

   
    let inpOfElem = 0;

    if (inputs.forEach(elem => {
        inpOfElem += elem.value === "" ? 1 : 0;
        console.log(inpOfElem);
    }))


        console.log(errorChecker)

    if (errorChecker == 0 && inpOfElem == 0) {
        console.log('hi');
        form.style = "display: none";

        setTimeout(function () {
            afterForm.classList.add('success');
        }, 1500)
    }
}

