const toggleButtons = document.querySelectorAll(".WhatWeDo");
const toggleDescriptions = document.querySelectorAll(".WhatWeDoDesc");
const toggleSwitchers = document.querySelectorAll(".toggleSwitcher");

toggleButtons.forEach((button, index) => {
  button.onclick = () => {
    toggleDescriptions.forEach((text, i) => {
      if (i != index) text.style.display = "none";
    });
    toggleSwitchers.forEach((swticher, i) => {
      if (i != index) swticher.style.transform = "rotate(0deg)";
    });

    const currentButton = toggleButtons[index];
    const currentDescription = toggleDescriptions[index];
    const currentSwitcher = toggleSwitchers[index];

    const isTextVisible = currentDescription.style.display === "block";
    currentDescription.style.display = isTextVisible ? "none" : "block";

    if (isTextVisible) {
      currentButton.style.backgroundColor = "#f3f3f3";
      currentButton.style.borderRadius = "45px";
    } else {
      currentButton.style.backgroundColor = "#b9ff66";
      currentButton.style.borderRadius = "45px 45px 0px 0px";
    }

    currentSwitcher.style.transform =
      currentSwitcher.style.transform === "rotate(90deg)"
        ? "rotate(0deg)"
        : "rotate(90deg)";
  };
});
