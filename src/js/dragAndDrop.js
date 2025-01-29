const handleDragAndDrop = () => {
  const list = document.querySelector(".list");
  let draggedItem = null;

  list.addEventListener("dragstart", (e) => {
    if (e.target && e.target.tagName === "LI") {
      draggedItem = e.target;
      e.target.classList.add("list__item--dragged");
    }
  });

  list.addEventListener("dragend", (e) => {
    if (draggedItem) {
      draggedItem = null;
      e.target.classList.remove("list__item--dragged");
      //   updateIndices();
    }
  });

  list.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  list.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.target && e.target.tagName === "LI" && draggedItem !== e.target) {
      const items = Array.from(list.children);

      const draggedIndex = items.indexOf(draggedItem);
      const targetIndex = items.indexOf(e.target);

      if (draggedIndex < targetIndex) {
        list.insertBefore(draggedItem, e.target.nextSibling);
      } else {
        list.insertBefore(draggedItem, e.target);
      }
    }
  });
};

export default handleDragAndDrop;
