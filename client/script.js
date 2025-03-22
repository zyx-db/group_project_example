const SERVER_URL = "http://127.0.0.1:3000";

function changeText() {
  document.getElementById("example_onclick_message").textContent = "you clicked the button";
}

async function getData() {
  try {
    let response = await fetch(`${SERVER_URL}/example`);
    let data = await response.json();
    document.getElementById("example_get_request").textContent = `${data.message}`;
  } catch (error) {
    console.log(error);
  }
}

async function getDataWithParams() {
  try {
    let name = document.getElementById('input-name').value;
    let response = await fetch(`${SERVER_URL}/example-with-param?name=${name}`);
    let data = await response.json();
    document.getElementById("example_get_with_params").textContent = `${data.message}`;
  } catch (error) {
    console.log(error);
  }
}
