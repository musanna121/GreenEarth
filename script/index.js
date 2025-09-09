const category = () =>{
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url)
    .then((res)=>res.json())
    .then(json=>showCategories(json.categories))
    
}

const manageSpinner = (status) =>{
    if(status == true){
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("card-container").classList.add("hidden")
    }
    else{
        document.getElementById("card-container").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")
    }
}

const showCategories = (category) => {
    const displayCategory = document.getElementById("category-list")
    // displayCategory.innerHTML = ""
    category.forEach((category) => {
    const btnDiv = document.createElement("div");
    // btnDiv.innerHTML = `<button id="click-category-${category.id}" class="btn"><li onclick='showPlant(${category.id})' class="p-2 hover:bg-white">${category.category_name}</li></button>`;
    btnDiv.innerHTML = `<li class="p-2 col-span-2"><button onclick='removeActive();showPlant(${category.id});this.classList.add("highlight")' class="btn btn-ghost btn-wide justify-start text-[16px] category-btn">${category.category_name}</button></li>`;
    displayCategory.append(btnDiv)
    });

}


const loadAll=()=>{
    allPlants();
}

const showPlant = (id) =>{
    manageSpinner(true)
    url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>displayCard(data.plants))
}
 
const allPlants = () =>{
    manageSpinner(true)
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
    .then((res)=>res.json())
    .then((data) => displayCard(data.plants))
    
}

const displayCard = (id) =>{
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = ""
    id.forEach((id)=>{
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML =  `<div class="card bg-white rounded-2xl p-5 space-y-4 h-[381.8] shadow-2xl">
                        <img class="h-[230px] object-cover rounded-2xl bg-gray-400" src="${id.image}" alt="">
                        <button onclick="displayDetails(${id.id})" class="btn btn-ghost justify-start text-xl font-bold" >${id.name}</button>
                        <p class="text-[#1F293780]">${id.description}</p>
                        <div class="flex justify-between items-center">
                            <button class="btn bg-[#dcfce7] text-[#15803D]">${id.category}</button>
                            <p>$${id.price}</p>
                        </div>
                        <button onclick='showCart("${id.name}",${id.price},${id.id})' id="addToCart" class="btn bg-[#15803D] text-white rounded-3xl">Add to Cart</button>
                        </div>`;
    cardContainer.append(btnDiv)
    })
    manageSpinner(false)
} 

const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".category-btn")
    // console.log(lessonButtons)
    const allCategory = document.getElementById("all-category")
    allCategory.classList.remove("highlight")
    lessonButtons.forEach((btn)=> btn.classList.remove("highlight"))
}

const displayDetails = (id) =>{
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
    .then((res)=>res.json())
    .then((details) => {
    const img = details.plants
    const detailsDisplay = document.getElementById("diplay-modal")
    console.log(img, detailsDisplay)

    detailsDisplay.innerHTML =   `<h2 class="text-2xl font-bold">${img.name}</h2>
                        <img src="${img.image}" alt="">
                        <p class="text-xl font-bold">Description</p>
                        <p>${img.description}</p>
                        <div class="flex justify-between items-center">
                            <button class="btn text-xl bg-[#dcfce7] text-[#15803D]">${img.category}</button>
                            <p class="text-xl font-bold text-green-600">$${img.price}</p>
                        </div>`

    my_modal_1.showModal()
    })
}

const printTotal = (total) =>{
    const showTotal = document.getElementById("showTotal")
    showTotal.innerHTML=""
    showTotal.innerHTML=`<hr class="px-3"><div class="flex justify-between p-3">
                            <p>Total</p>
                            <p>${total}</p>
                        </div>`
}

const showCart = (name,price,id) =>{
    // console.log(name,price,id)
    alert(`Add ${name} to cart price: ${price}`)
    const cartList = document.getElementById("cart")
    const newCart = document.createElement("div");
    const number = document.getElementById(`number${id}`)
    if(number != null){
        const count = parseInt(document.getElementById(`number${id}`).innerHTML)
        const prices = parseInt(document.getElementById(`price-${id}`).innerHTML)
        document.getElementById(`number${id}`).innerHTML = ""
        const newCount = count+1
        document.getElementById(`number${id}`).innerHTML = `${newCount}`
        calculateTotal();
    }
    else{
        newCart.innerHTML =`<div  class="flex justify-between items-center m-5 p-3 rounded-2xl bg-[#F0FDF4]">
                        <div class="">
                            <h3>${name}</h3>
                            <h3 id="price-${id}">${price}<i class="fa-solid fa-xmark text-sm "></i><span id="number${id}">1</span></h3>
                        </div>
                        <div class=""><button class="btn btn-ghost remove-btn"><i class="fa-solid fa-xmark"></i></button></div>
                    </div>`
    cartList.append(newCart)
    }    
    
    newCart.querySelector(".remove-btn").addEventListener("click", () =>{

        alert("Are you sure you want to delete it?")
        newCart.remove();

      // Recalculate total after removal
      calculateTotal();

    })

    calculateTotal();
}

function calculateTotal() {
  let total = 0;

  // loop over all items
  document.querySelectorAll("[id^='price-']").forEach(priceEl => {
    const id = priceEl.id.split("-")[1];
    const price = parseFloat(priceEl.innerHTML);
    const qty = parseInt(document.getElementById(`number${id}`).innerHTML);
    total += price * qty;
  });

  // print total
  printTotal(total);
}


// const showCart = (id) =>{
//     console.log(id);
// }
 
category()
allPlants()