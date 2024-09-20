const menu = [
  // Menu items with id, title, category, price, image, and description
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "img/Tteokbokki.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },

  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "img/Chicken-Ramen.png",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "img/bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "img/dandanmian.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "img/yangzhou fried rice.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "img/onigri.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "img/jajangymyon.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "img/ma yi shang shu.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "img/doroyaki.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const categories = [...new Set(menu.map((item) => item.category))];
// Get unique categories from menu

function displayMenuItems(menuItems) {
  const sectionCenter = document.querySelector(".section-center");
  sectionCenter.innerHTML = ""; // Clear existing content

  menuItems.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("menu-item", "col-md-4", "text-center");
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="img-fluid" />
      <h3>${item.title}</h3>
      <p class="price">$${item.price.toFixed(2)}</p>
      <p>${item.desc}</p>
    `;
    sectionCenter.appendChild(div); // Add new item to section
  });
}

function filterMenu(category) {
  if (category === "all") {
    displayMenuItems(menu); // Show all items if "all" is selected
  } else {
    const filteredMenu = menu.filter((item) => item.category === category);
    displayMenuItems(filteredMenu); // Show filtered items
  }
}

function setupButtons() {
  const btnContainer = document.querySelector(".btn-container");
  btnContainer.innerHTML = ""; // Clear existing buttons

  const allButton = document.createElement("button");
  allButton.innerText = "All";
  allButton.classList.add("btn", "btn-black");
  allButton.addEventListener("click", () => filterMenu("all"));
  btnContainer.appendChild(allButton); // Add 'All' button

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.innerText = category;
    button.classList.add("btn", "btn-white");
    button.addEventListener("click", () => filterMenu(category));
    btnContainer.appendChild(button); // Add category buttons
  });
}

function init() {
  setupButtons(); // Setup filter buttons
  displayMenuItems(menu); // Display menu on page load
}

window.addEventListener("DOMContentLoaded", init);
// Initialize when page is loaded
