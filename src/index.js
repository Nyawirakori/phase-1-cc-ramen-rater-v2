// // index.js

// // Callbacks
// const handleClick = (ramen) => {
//   // Add code
//    document.querySelector(".detail-image").src = ramen.image;
//   document.querySelector(".name").textContent = ramen.name;
//   document.querySelector(".restaurant").textContent = ramen.restaurant;
//   document.querySelector("#rating-display").textContent = ramen.rating;
//   document.querySelector("#comment-display").textContent = ramen.comment;
// };

// const addSubmitListener = () => {
//   // Add code
//    const form = document.querySelector("#new-ramen");
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     const newRamen = {
//       name: event.target["new-name"].value,
//       restaurant: event.target["new-restaurant"].value,
//       image: event.target["new-image"].value,
//       rating: event.target["new-rating"].value,
//       comment: event.target["new-comment"].value,
//     };
    
//     displayRamenImage(newRamen);
//     form.reset();
//   });
// }

// const displayRamens = () => {
//   // Add code
//   fetch("http://localhost:3000/ramens")
//     .then((response) => response.json())
//     .then((ramens) => {
//       ramens.forEach(displayRamenImage);
//     });

// };

// const displayRamenImage = (ramen) => {
//   const ramenMenu = document.querySelector("#ramen-menu");
//   const img = document.createElement("img");
//   img.src = ramen.image;
//   img.alt = ramen.name;
//   img.addEventListener("click", () => handleClick(ramen));
//   ramenMenu.appendChild(img);
// };

// const main = () => {
//   // Invoke displayRamens here
//   // Invoke addSubmitListener here
//   displayRamens();
//   addSubmitListener();
// }

// main()

// // Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
// index.js

// Callbacks
const handleClick = (ramen) => {
  const ramenDetailDiv = document.getElementById('ramen-detail');
  ramenDetailDiv.innerHTML = `
    <img src="${ramen.image}" class="detail-image" alt="${ramen.name}">
    <h2 class="name">${ramen.name}</h2>
    <p class="restaurant">${ramen.restaurant}</p>
    <p>Rating: <span id="rating-display">${ramen.rating}</span></p>
    <p>Comment: <span id="comment-display">${ramen.comment}</span></p>
  `;
};

const addSubmitListener = (form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('new-name').value;
    const restaurant = document.getElementById('new-restaurant').value;
    const image = document.getElementById('new-image').value;
    const rating = document.getElementById('new-rating').value;
    const comment = document.getElementById('new-comment').value;

    const newRamen = {
      name,
      restaurant,
      image,
      rating,
      comment,
      id: Date.now(), // Generate a unique ID
    };

    const ramenMenuDiv = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = image;
    img.alt = name;
    img.addEventListener('click', () => handleClick(newRamen));
    ramenMenuDiv.appendChild(img);

    form.reset();
  });
};

const displayRamens = async () => {
  try {
    const response = await fetch(''); // Use the mocked fetch
    const ramens = await response.json();

    const ramenMenuDiv = document.getElementById('ramen-menu');
    ramenMenuDiv.innerHTML = ''; // Clear existing content

    ramens.forEach((ramen) => {
      const img = document.createElement('img');
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener('click', () => handleClick(ramen));
      ramenMenuDiv.appendChild(img);
    });
  } catch (error) {
    console.error('Error fetching ramen data:', error);
  }
};

const main = () => {
  displayRamens();
  addSubmitListener(document.getElementById('new-ramen'));
};

document.addEventListener('DOMContentLoaded', main);

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};