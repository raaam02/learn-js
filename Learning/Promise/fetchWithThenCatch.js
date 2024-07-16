// Fetch itself return a promise so we have to handle it

fetch("https://api.github.com/users.raaam02")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.status);
  });
