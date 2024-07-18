handlePromise
  .then((resolve) => {
    return resolve();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });