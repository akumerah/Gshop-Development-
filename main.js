// toggle class active #bars//
const navbarNav = document.querySelector('.navbar-nav');

//ketika bars di klik //
document.querySelector('#bars').
onclick = (event) => {
  navbarNav.classList.toggle('active');
  event.preventDefault();
};


//toggle class active search-form//
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (event) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  event.preventDefault();
}

//toggle class active shopping-cart//

const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shoping')
.onclick = (event) => {
  shoppingCart.classList.toggle('active');
  event.preventDefault();
}


//klik di luar, untuk menghilangkan//
const bars = document.querySelector('#bars');
const searchButton = document.querySelector('#search-button')
const shoping = document.querySelector('#shoping')

document.addEventListener('click', function(e) {
  if (!bars.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  
  if (!shoping.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
  
  
});



// modal-bix //
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');


itemDetailButtons.forEach((btn) => {
  
  btn.onclick = (event) => {
  itemDetailModal.style.display = 'block';
  event.preventDefault();
}
})






// clik-tombol-close //

document.querySelector('.modal .close-icon').onclick = (event) => {
  itemDetailModal.style.display = 'none';
  event.preventDefault();
}


// clik-diluar-modal //

window.onclick = (event) => {
  if (event.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
}




// Ambil elemen-elemen yang diperlukan
var itemCards = document.querySelectorAll(".menu-card");
var modal = document.getElementById("item-detail-modal");
var modalImg = document.getElementById("modalImg");
var modalTitle = document.getElementById("modalTitle");
var modalDescription = document.getElementById("modalDescription");
var modalStars = document.getElementById("modalStars");
var modalPrice = document.getElementById("modalPrice");
var closeIcon = document.querySelector(".close-icon");

// Loop melalui setiap elemen .menu-card
itemCards.forEach(function (itemCard) {
  // Ambil informasi dari elemen .menu-card
  var imgSrc = itemCard.querySelector(".menu-img .menu-card-img").src;
  var title = itemCard.querySelector(".menu-card-title").textContent;
  var stars = itemCard.querySelector(".menu-stars").innerHTML;
  var price = itemCard.querySelector(".menu-price .menu-card-price ").textContent;

  // Tambahkan event listener untuk setiap tombol .item-detail-button
  var detailButton = itemCard.querySelector(".item-detail-button");
  detailButton.addEventListener("click", function () {
    // Isi elemen modal dengan informasi yang sesuai
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalStars.innerHTML = stars;
    modalPrice.textContent = price;

    // Tampilkan modal
    modal.style.display = "block";
  });
});

// Fungsi untuk menutup modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener untuk tombol close modal
closeIcon.addEventListener("click", function () {
  closeModal();
});

// Event listener untuk menutup modal saat area luar modal diklik
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});




// untuk product-card

var itemCards = document.querySelectorAll(".product-card");
var modal = document.getElementById("item-detail-modal");
var modalImg = document.getElementById("modalImg");
var modalTitle = document.getElementById("modalTitle");
var modalDescription = document.getElementById("modalDescription");
var modalStars = document.getElementById("modalStars");
var modalPrice = document.getElementById("modalPrice");
var closeIcon = document.querySelector(".close-icon");

// Loop melalui setiap elemen .product-card
itemCards.forEach(function (itemCard) {
  // Ambil informasi dari elemen .product-card
  var imgSrc = itemCard.querySelector(".product-image img").src;
  var title = itemCard.querySelector(".product-card-title").textContent;
  var stars = itemCard.querySelector(".product-stars").innerHTML;
  var price = itemCard.querySelector(".product-price").textContent;

  // Tambahkan event listener untuk setiap tombol .item-detail-button
  var detailButton = itemCard.querySelector(".item-detail-button");
  detailButton.addEventListener("click", function () {
    // Isi elemen modal dengan informasi yang sesuai
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalStars.innerHTML = stars;
    modalPrice.textContent = price;

    // Tampilkan modal
    modal.style.display = "block";
  });
});

// Fungsi untuk menutup modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener untuk tombol close modal
closeIcon.addEventListener("click", function () {
  closeModal();
});

// Event listener untuk menutup modal saat area luar modal diklik
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});





document.addEventListener('DOMContentLoaded', function() {
  const itemShoppingCarts = document.querySelectorAll('.item-shopping-cart');

  itemShoppingCarts.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah perilaku bawaan dari tautan
      alert('Sedang dalam pengembangan, Currently under development !');
    });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const itemShoppingCarts = document.querySelectorAll('.item-shopping-cart');
  let clickCount = 0;
  const maxClicks = 3; // Jumlah maksimum klik sebelum mengarahkan kembali

  itemShoppingCarts.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      clickCount++;

      if (clickCount >= maxClicks) {
        window.location.href = 'menu-awal.html'; // Ganti dengan URL menu awal yang diinginkan
      } else {
        alert('Item shopping cart clicked!');
      }
    });
  });
});



//efek loading

document.addEventListener('DOMContentLoaded', function() {
  const loadingOverlay = document.getElementById('loading-overlay');

  // Menghilangkan tampilan loading saat halaman selesai dimuat
  window.addEventListener('load', function() {
    loadingOverlay.style.display = 'none';
  });
});



