import stepsForSoftwareProject from "./stepsData";
import shuffleArray from "./shuffleArray";

const createListItems = () => {
  const list = document.querySelector(".list");
  list.innerHTML = "";

  const shuffledArray = shuffleArray([...stepsForSoftwareProject]);

  shuffledArray.forEach((step, index) => {
    const listItem = document.createElement("li");
    list.append(listItem);
    listItem.textContent = `${index + 1}. ${step} `;
    listItem.classList.add("list__item");
    listItem.setAttribute("draggable", true);
    listItem.setAttribute("data-index", index);
  });
  const compareButton = document.createElement("button");
  document.querySelector(".main-container").append(compareButton);
  compareButton.textContent = "Check order";
  compareButton.classList.add("list__compare-button");

  const handleDragAndDrop = () => {};

  //   compareButton.addEventListener("click", compareOrder);
  //   handleDragAndDrop();
};

export default createListItems;
