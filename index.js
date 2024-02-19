const express = require("express");
const EventEmitter = require('events')
const app = express();
const PORT = process.env.PORT || 3000;
const eventEmitter = new EventEmitter();


app.use(express.json());


app.get("/event", (req, res) => {
  eventEmitter.emit('event', res)
});


eventEmitter.on('event', (res)=> {

  res.send(`Coming from event`)
})

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/hello", async (req, res) => {
  try {
    const result = await promiseHandle();
    res.send(`Hello, World! from async & promise ${result}`);
  } catch (error) {
    console.log(error);
    res.send(`Error `)

  }
});

app.listen(PORT, () => {
  console.log(`Node app listening at port: ${PORT}`);
});

function promiseHandle() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      // If the operation is successful, call resolve with the result
      if (randomNumber > 10) {
        reject(new Error("Random number is too low"));
      } else {
        // If there's an error, call reject with an error message
        resolve(randomNumber);
      }
    }, 3000);
  });

  return promise;
}
