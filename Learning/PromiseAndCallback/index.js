// Promise
function meth(msg) {
  return new Promise((resolve, reject) => {
    if (msg) {
      resolve("Data Received");
    } else {
      reject("No Received");
    }
  });
}

const obj = meth(false);

// obj
//   .then((response) => {
//     console.log("Output");
//   })
//   .catch((reject) => {
//     console.log("Erorrr..");
//   });

//   async await

async function fun(obj) {
  const a = await obj;
  try {
    if (a) {
      console.log("Data Received");
    }
  } catch (error) {
    console.log(error);
  }
}
