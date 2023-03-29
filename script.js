// Initialize empty array to store feedback
let feedbackList = [];

// Function to submit feedback and add it to the feedbackList array
function submitFeedback() {
  // Get form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Create feedback object
  let feedback = {
    name: name,
    email: email,
    message: message
  };

  // Add feedback to feedbackList array
  feedbackList.push(feedback);

  // Display feedback in feedbackList element
  displayFeedback();
}

// Function to display feedback in the feedbackList element
function displayFeedback() {
  let feedbackListElement = document.getElementById('feedbackList');
  feedbackListElement.innerHTML = '';

  for (let i = 0; i < feedbackList.length; i++) {
    let feedbackItemElement = document.createElement('div');
    feedbackItemElement.classList.add('feedback-item');

    let feedbackNameElement = document.createElement('h4');
    feedbackNameElement.innerText = feedbackList[i].name;

    let feedbackEmailElement = document.createElement('p');
    feedbackEmailElement.innerText = feedbackList[i].email;

    let feedbackMessageElement = document.createElement('p');
    feedbackMessageElement.innerText = feedbackList[i].message;

    feedbackItemElement.appendChild(feedbackNameElement);
    feedbackItemElement.appendChild(feedbackEmailElement);
    feedbackItemElement.appendChild(feedbackMessageElement);

    feedbackListElement.appendChild(feedbackItemElement);
  }
}
