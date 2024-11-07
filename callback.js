// Define a callback function
  function sayGoodbye() {
    console.log('Goodbye!');
  }

  function greet(name, sayGoodbye) {
    console.log(`Hello, ${name}!`);
    sayGoodbye(); // Call the callback function passed as an argument
  }
  
  
  // Call the greet function, passing the sayGoodbye function as a callback
  greet('hi', sayGoodbye);