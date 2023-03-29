function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailRegex = /\S+@\S+\.\S+/;
  
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
    if (email == "") {
      alert("Please enter your email address.");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (message == "") {
      alert("Please enter a message.");
      return false;
    }
  }
  