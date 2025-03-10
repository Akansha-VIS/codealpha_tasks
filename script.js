// script.js

function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    
    if (birthdate) {
        const birthDateObj = new Date(birthdate);
        const currentDate = new Date();

        let age = currentDate.getFullYear() - birthDateObj.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDateObj.getMonth();

        // Adjust age if the current date is before the birthday this year
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDateObj.getDate())) {
            age--;
        }

        document.getElementById("result").innerText = `Your age is: ${age} years old.`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid birthdate.";
    }
}
