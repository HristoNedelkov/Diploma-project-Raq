const btn = document.querySelector("#search-btn");
const input = document.querySelector("#input-field");
const postBox = document.getElementsByClassName("posts")[0];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  postBox.innerHTML = "";
  for (const el of posts) {
    let currElName = el.name.split(" ");
    if (currElName.includes(input.value)) {
      postBox.innerHTML += card(el);
    } else {
      console.log("we left " + el.name);
    }
  }
  if (postBox.innerHTML == "") {
    postBox.innerHTML =
      '<h1 id="toq-tekst">We cannot find any ads including ' + input.value;
  }
});
function showAll() {
  for (const el of posts) {
    postBox.innerHTML += card(el);
  }
}
showAll();
