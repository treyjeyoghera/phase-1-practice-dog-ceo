console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");

    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          dogImageContainer.appendChild(imgElement);
        });
      })
      .catch(error => console.error("Error fetching dog images:", error));

    // Challenge 2: Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        for (const breed in data.message) {
          const liElement = document.createElement("li");
          liElement.textContent = breed;
          breedList.appendChild(liElement);
        }
      })
      .catch(error => console.error("Error fetching dog breeds:", error));

    // Challenge 3: Change font color on breed click
    breedList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        event.target.style.color = "blue"; // Change font color to blue on click
      }
    });

    // Challenge 4: Filter breeds by selected letter
    breedDropdown.addEventListener("change", function() {
      const selectedLetter = breedDropdown.value;
      const breeds = breedList.getElementsByTagName("li");

      for (const breed of breeds) {
        if (breed.textContent.startsWith(selectedLetter)) {
          breed.style.display = "block"; // Show breeds starting with selected letter
        } else {
          breed.style.display = "none"; // Hide breeds that don't start with selected letter
        }
      }
    });
  });