document.addEventListener("DOMContentLoaded", function () {
  const messageDiv = document.querySelector(".message");
  const btn = document.querySelector("form .btn");

  btn.addEventListener("click", function (event) {
    event.preventDefault(); 
    const emailInput = document.querySelector("#email");
    const email = emailInput.value; 
    DisplayMessage(email); 
  });

  function DisplayMessage(emailAddress) {
    if (isValidEmail(emailAddress)) {
      messageDiv.textContent = `Thank you! Your email address ${emailAddress} has been added to our mailing list!`;
      messageDiv.style.color = "white";
    } else {
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.style.color = "red";
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
