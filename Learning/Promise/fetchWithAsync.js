// fetch()
// Fetch without Error
async function fetchData() {
  try {
    const response = await fetch("https://api.github.com/users/raaam02");
    // console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("You have an Error", error.message);
  }
}

fetchData();

// Fetch with Error
async function fetchDataErr() {
  try {
    const response = await fetch("https://api.github.com/users.raaam02");
    // console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("You have an Error", error.message);
  }
}

fetchDataErr();
