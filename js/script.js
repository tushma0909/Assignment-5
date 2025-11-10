// heart icon functionalities
const heartIcons = document.getElementsByClassName("heart-icon");

  for (i=0; i< heartIcons.length; i++) {
    const icon = heartIcons[i]
    icon.addEventListener("click", function() {

    const totalHeartIcons = parseInt(document.getElementById("available-hearts").innerText);
     const newHeartCount= totalHeartIcons + 1;
document.getElementById("available-hearts").innerText = newHeartCount;

})
  }

