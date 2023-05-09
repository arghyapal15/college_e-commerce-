const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function() {
    menu.classList.toggle("show");
    hamburger.classList.toggle("is-active");
});


// college crads 
let products = {
    item: [
        {
            title: "Jadavpur University - [JU]",
            Location: "Kolkata,West Bengal",
            rank: "1000",
            image: "C:\ARGHYA\Django\college_e_commerce\college\static\assets\images\c.jpeg",
        },
        {
            title: "Institute of Engineering and Management - [IEM]",
            Location: "Kolkata,West Bengal",
            rank: "10000",
            image: "../assets/images/c.jpeg",
        },
        {
            title: "The Neotia University - [TNU]",
            Location: "Kolkata,West Bengal",
            rank: "15000",
            image: "../assets/images/c.jpeg",
        },
        {
            title: "Heritage Institute of Technology - [HIT]",
            Location: "Kolkata,West Bengal",
            rank: "5000",
            image: "../assets/images/c.jpeg",
        },
        {
            title: "RCC Institute of Information Technology - [RCCIIT]",
            Location: "Kolkata,West Bengal",
            rank: "2000",
            image: "../assets/images/c.jpeg",
        },
        {
            title: "Narula Institute of Technology - [NIT Agarpara]",
            Location: "Aolkata,West Bengal",
            rank: "8000",
            image: "../assets/images/c.jpeg",
        },
        {
            title: "Adamas University",
            Location: "Kolkata,West Bengal",
            rank: "30000",
            image: "../assets/images/c.jpeg",
        },
        {
            title: "Maulana Abul Kalam Azad University of Technology - [MAKAUT]",
            Location: "Kolkata,West Bengal",
            rank: "40000",
            image: "../assets/images/c.jpeg",
        },
        {
            title: "Bengal Institute of Technology",
            Location: "Kolkata,West Bengal",
            rank: "40000",
            image: "../assets/images/c.jpeg",
        },
    ],
};

for (let i of products.item) {
    // cards creation 
    let card = document.createElement("div");
    card.classList.add("card", i.rank);

    // image
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container 
    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5");
    name.classList.add("title");
    name.innerText = i.title.toUpperCase();
    container.appendChild(name);

    let location = document.createElement("h4");
    location.classList.add("Location");
    location.innerText = "Location: " + i.Location;
    container.appendChild(location);

    let rank = document.createElement("h6");
    rank.classList.add("rank");
    rank.innerText = "Rank :- 0 - "+i.rank;
    container.appendChild(rank);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}





const sortSelect = document.getElementById('sort-select');
const itemList = document.querySelector('.product-list');
const items = Array.from(itemList.children);


sortSelect.addEventListener('change', function () {
    const selectedValue = sortSelect.value;
    sortItems(selectedValue);
});

function sortItems(selectedValue) {
    if (selectedValue === 'default') {
        // Do nothing, as the items are already in their default order
        return;
    }

items.sort(function (a, b) {
    let aValue, bValue;

    if (selectedValue === 'atoz') {
        aValue = a.innerText;
        bValue = b.innerText;
    } else if (selectedValue === 'ztoa') {
        aValue = b.innerText;
        bValue = a.innerText;
    } else if (selectedValue === 'hightolow') {
        aValue = parseFloat(b.classList[1]);
        bValue = parseFloat(a.classList[1]);
    } else if (selectedValue === 'lowtohigh') {
        aValue = parseFloat(a.classList[1]);
        bValue = parseFloat(b.classList[1]);
    }

    if (aValue < bValue) {
        return -1;
    }
    if (aValue > bValue) {
        return 1;
    }
    return 0;
});

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    items.forEach(function (item) {
        itemList.appendChild(item);
    });
}




//add new div button
function openForm() {
      document.getElementById("popup-form").style.display = "flex";
    }

    function closeForm() {
      document.getElementById("popup-form").style.display = "none";
    }




    document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("college-name").value;
  var email = document.getElementById("email").value;
        var location = document.getElementById("location").value;
        var rank = document.getElementById("rank").value;
        var image = document.getElementById("image").value;

  // Create a new object with the form values
  var newData = {
    "title": name,
      "Location": location,
      "rank": rank,
      "image": image
        };
        
        products.item.push(newData);
        console.log(products);

  // Call a function to add the new data to the JSON file
//   addDataToJsonFile(newData);
});