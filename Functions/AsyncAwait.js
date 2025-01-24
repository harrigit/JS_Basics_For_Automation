//Aysnc And Await Function
let value = new Promise((resolve, reject) => {
  if (1 > 2) {
    setTimeout(() => {
      resolve("Resolved!");
    }, 3000);
  } else {
    reject("Rejected!");
  }
});
value
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
async function getData() {
  try {
    let res = await value;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
getData();
