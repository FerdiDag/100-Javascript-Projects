//After you enter text into the input box, upon pressing the “Enter” key, your message should show up in the “Last Message Delivered” Section.
//After the “Enter” key is pressed, the text box value should return to an empty text box.
//If no input is submitted, an alert should show (using the ‘show' class in the CSS file) in the “Last Message Delivered” section and then disappear after 2 second.

const form = document.querySelector("#message-form");
//Set up Submit Button
form.addEventListener("submit", function (e) {
  // prevent the form's default submission action
  e.preventDefault();
  //Get user's input from from
  const message = document.querySelector("#message");
  const feedback = document.querySelector(".feedback");
  const messageContent = document.querySelector(".message-content");

  if (message.value === "") {
    feedback.classList.add("show");
    setTimeout(function () {
      feedback.classList.remove("show");
    }, 2000);
  } else {
    //Change message content and clear the message input
    messageContent.textContent = message.value;
    message.value = "";
  }
});
