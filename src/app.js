document.addEventListener("alpine:init", () => {
    Alpine.data("products", () => ({
        items: [
            { id: 1, name: "Black Handbag", img: "1.jpg", price: 25250 },
            { id: 2, name: "Black Backpack", img: "2.jpg", price: 45000 },
            { id: 3, name: "Orange Backpack", img: "3.jpg", price: 25000 },
            { id: 4, name: "Three color Handbag", img: "4.jpg", price: 22000 },
            { id: 5, name: "Black School bag", img: "5.jpg", price: 55000 },
            { id: 6, name: "Green Backpack", img: "6.jpg", price: 49900 },
            { id: 7, name: "Green Waist bag", img: "7.jpg", price: 35000 },
            { id: 8, name: "Black Waist bag", img: "8.jpg", price: 38900 }
        ],
        showDetail(item) {
            // Menampilkan detail produk
            alert(`Detail Produk:\nNama: ${item.name}\nHarga: ${rupiah(item.price)}`);
        }
    }));

    Alpine.store("cart", {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            const cartItem = this.items.find(item => item.id === newItem.id);
            if (!cartItem) {
                this.items.push({
                    ...newItem,
                    quantity: 1,
                    total: newItem.price
                });
                this.quantity++;
                this.total += newItem.price;
            } else {
                this.items = this.items.map(item => {
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            const cartItem = this.items.find(item => item.id === id);
            if (cartItem.quantity > 1) {
                this.items = this.items.map(item => {
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                this.items = this.items.filter(item => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});



// Fungsi konversi ke rupiah
const rupiah = number => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(number);
};

// Form Validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');


form.addEventListener('keyup', function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove('disabled');
      checkoutButton.classList.add('disabled');
    } else {
      return false;
      }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove('disabled');
})

//kirim data ketika tombol checkoutButton di clik 

checkoutButton.addEventListener('click', function (e) {
  e.preventDefault(); 
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);
  window.open('http://wa.me/6287879917788?text=' + encodeURIComponent(message));
});



//format pesan whatsapp
const formatMessage = (obj) => {
  return `Data Customer
  Nama: ${obj.name}
  Email: ${obj.email}
  No Hp: ${obj.phone}
  data pesanan
  ${JSON.parse(obj.items).map((item) =>  `${item.name} (${item.quantity} x ${rupiah(item.total)} \n)`)}
 TOTAL: ${rupiah(obj.total)} ☺️TERIMA KASIH`;
};
