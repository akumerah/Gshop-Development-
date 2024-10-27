document.addEventListener("alpine:init", () => {
    Alpine.data("products", () => ({
        items: [
            { id: 1, name: " Black Handbag", img: "1.jpg", price: 25250 },
            { id: 2, name: "Black Backpack ", img: "2.jpg", price: 45000 },
            { id: 3, name: "Orange Backpack", img: "3.jpg", price: 25000 },
            { id: 4, name: "Three color Handbag", img: "4.jpg", price: 22000 },
            { id: 5, name: " Black School bag ", img: "5.jpg", price: 55000 },
            { id: 6, name: " Green Backpack ", img: "6.jpg", price: 49900 },
            { id: 6, name: " Green Waist bag", img: "7.jpg", price: 35000 },
            { id: 6, name: " Black Waist bag", img: "8.jpg", price: 38900 }
        ]
    }));

    Alpine.store("cart", {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // chek apakah ada barang yang sama
            const cartItem = this.items.find(item => item.id === newItem.id);
            // jika belum ada/ barang kosong
            if (!cartItem) {
                this.items.push({
                    ...newItem,
                    quantity: 1,
                    total: newItem.price
                });
                this.quantity++;
                this.total += newItem.price;
            } else {
                // jika barangnya udh ada, chek apakah barang beda atau sama
                this.items = this.items.map(item => {
                    //jika barang berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        //jika barang udah ada,tambah jumlah item/price
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
            //ambil item yang mau di remove berdasarkan id
            const cartItem = this.items.find(item => item.id === id);
            // jika item lebih dari 1
            if (cartItem.quantity > 1) {
                // telusuri 1/1
                this.items = this.items.map(item => {
                    // jika barang yang bukan di klik
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
                // jika barangnya sisa 1
                this.items = this.items.filter(item => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});

// konversi ke rupiah

const rupiah = number => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(number);
};
