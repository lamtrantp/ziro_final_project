let firstName = document.querySelector("input.form_inp_first_name"),
    middleName = document.querySelector("input.form_inp_middle_name"),
    lastName = document.querySelector("input.form_inp_last_name"),
    birthDate = document.querySelector("input.form_inp_birth_date"),
    email = document.querySelector("input.form_inp_email"),
    phoneNumber = document.querySelector("input.form_inp_phone_number"),
    about = document.querySelector("textarea.form_inp_about");

const submitButton = document.querySelector("button.form_btn_submit")

submitButton.onclick = function () {
    const pattern = /[a-zA-Z]{2,}/i;
    const patternEmail = /[\w]+@[a-zA-Z]+.[a-zA-Z]{2,4}/i
    const patternPhoneNumber = /[\d]{10}/i


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

    if (!email.value.match(patternEmail)) {
        document.getElementById("notification_email").innerHTML = "Email khong hop le";
    }

    if (!phoneNumber.value.match(patternPhoneNumber)) {
        document.getElementById("notification_phone_number").innerHTML = "so dien thoai khong hop le";
    }

    let member1 = new member(firstName.value, middleName.value, lastName.value, birthDate.value, email.value, phoneNumber.value, about.value);
    // console.log(member1);

    // localStorage.setItem("member", JSON.stringify(member1));

    const MEMBER =  localStorage.getItem("member");

    if (MEMBER) {
        const jsonParse = JSON.parse(MEMBER)
        console.log("JSON.parse(MEMBER)", JSON.parse(MEMBER))
        jsonParse.push(member1)
      localStorage.setItem("member", JSON.stringify(jsonParse));
    } else {
      localStorage.setItem("member", JSON.stringify([member1]));
    }

    let myObject = JSON.parse(MEMBER);

    console.log(myObject);
    console.log(MEMBER);


}

class member {
    constructor (firstName, middleName, lastName, birthDate, email, phoneNumber, about) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.about = about;
    }
}