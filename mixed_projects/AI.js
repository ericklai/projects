// Function to generate a random response
function getRandomResponse() {
  const responses = [
    "Hello!",
    "How can I help you?",
    "Nice to meet you!",
    "What's on your mind?",
    "I'm here to assist you.",
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

// Function to process user input and generate a response
function processInput(input) {
  // Convert input to lowercase and remove leading/trailing whitespace
  const cleanedInput = input.toLowerCase().trim();

  // Check for specific keywords and generate appropriate response
  if (cleanedInput.includes("hello") || cleanedInput.includes("hi")) {
    return "Hi there!";
  } else if (cleanedInput.includes("how are you")) {
    return "I'm doing well, thank you!";
  } else if (cleanedInput.includes("goodbye") || cleanedInput.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else {
    // If no specific keyword is found, generate a random response
    return getRandomResponse();
  }
}

// Example usage
console.log(processInput("Hello")); // Output: Hi there!
console.log(processInput("How are you?")); // Output: I'm doing well, thank you!
console.log(processInput("What's your name?")); // Output: Hello!
console.log(processInput("Goodbye")); // Output: Goodbye! Have a great day!
console.log(processInput("")); // Output: What's on your mind?
