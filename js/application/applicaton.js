let firstName = document.querySelector("input.form_inp_first_name"),
    middleName = document.querySelector("input.form_inp_middle_name"),
    lastName = document.querySelector("input.form_inp_last_name"),
    birthDate = document.querySelector("input.form_inp_birth_date"),
    email = document.querySelector("input.form_inp_email"),
    phoneNumber = document.querySelector("input.form_inp_phone_number"),
    about = document.querySelector("input.form_inp_about");

const submitButton = document.querySelector("button.form_btn_submit")

submitButton.onclick = function () {
    const pattern = /[a-zA-Z]{2,}/i;

    if (!firstName.value.match(pattern)) {
        document.getElementById("notification_first_name").innerHTML = "ten nhap khong hop le";
    }
    


    if (!middleName.value.match(pattern)) {
        document.getElementById("notification_middle_name").innerHTML = "ten nhap khong hop le";
    } 

    if (!lastName.value.match(pattern) ) {
        document.getElementById("notification_last_name").innerHTML = "ten nhap khong hop le";
    }

    if (birthDate.value === "") {
        document.getElementById("notification_birth_date").innerHTML = "Enter birth date";
    }

    const patternEmail = /[\w]+@[a-zA-Z]+.[a-zA-Z]{2,4}/i
    if (!email.value.match(patternEmail)) {
        document.getElementById("notification_email").innerHTML = "Email khong hop le";
    }

    if (phoneNumber.value === "") {
        document.getElementById("notification_phone_number").innerHTML = "Enter phone numnber";
    }
}

class student {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

let student_1 = new student("Nam", 18);
console.log(student_1)