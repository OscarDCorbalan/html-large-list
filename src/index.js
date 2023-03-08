console.log("Hello world!");

// no event delegation
const liElements = document.getElementsByTagName("li");
const iterableLiElements = Array.from(liElements);

iterableLiElements.forEach((liElement) => {
  console.log(liElement);
  liElement.addEventListener("click", (event) => {
    alert(event.target.dataset.age);
  });
});

//yes event delegation
document
  .getElementsByClassName("list-container")[0]
  .addEventListener("click", (event) => {
    alert(event.target.dataset.age);
  });
