//          100 days of coding challenge ( DAY 48 )
 // Question 01
let helloPromise = new Promise<string>((resolve) => {
   setTimeout(() => {
    resolve("Hello, Word!");
  }, 2000)
});
helloPromise.then((message) => console.log(message));

  // Question 02
// ---Creates a Promise that either resolves or rejects based on a condition
 const conditionalPhrase = new Promise<string>((resolve,reject) => {
    const success = Math.random() > 0.5;   // Randomly choose success or failure
    if (success) {
        resolve("Success!");
    } else {
       reject(new Error("failure"));
    }
 })
 
conditionalPhrase
.then((result) => console.log(result)) // Handles a successful resolution
.catch((error) => console.log(error.message)); // Handles a rejection

 // Question 03
 // Example using Promise.all to wait for multiple promises to resolve
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Outputs: [3, 42, "foo"]
});