/**
 * Promise is an Object represents the state of failure or completion of asynchronous operation
 * there are two ways to handle received data and failure data
 * one way is .then .catch and other one is async await
 * Promise return either resolve or reject state
 * first way =>.then - handle resolve where data is received.
 *             .catch - handle reject state where data not received.
 * second way => async - function declared with async keyword
 *               data handled with try catch block
 *               try block consist with data receiving part
 *               await - data received in await variable
 *              error - catched in catch block
 **/
// Normal Promise
function meth(msg) {
  return new Promise((resolve, reject) => {
    if (msg) {
      resolve("Data Received");
    } else {
      reject("Not Received");
    }
  });
}

const obj = meth(true);

obj
  .then((response) => {
    console.log(response);
  })
  .catch((reject) => {
    console.log(reject);
  });

// Promise with setTimeout and .then Chaining
const promiseFirst = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      name: "Ram",
      id: "01",
    });
  }, 1000);
});

promiseFirst
  .then((resolve) => {
    return resolve.name;
  })
  // Chaining .then
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  });

//   async await

const promiseTwo = new Promise((res, rej) => {
  setTimeout(() => {
    const state = false;
    if (state) {
      res({
        name: "JavaScipt",
      });
    } else {
      rej("Error occured");
    }
  }, 1000);
});

async function handlePromise() {
  try {
    const name = await promiseTwo;
    console.log(name.name);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
