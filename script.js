const PHOTOS = {
  oil: "https://stelioplast.de/wp-content/uploads/2023/02/STP-Produkte-Auto-001.webp",
  brake: "https://zoomstudio.com.au/wp-content/uploads/Brake-Pad-photography-1-scaled.jpg",
  battery: "https://www.sosbatteriesdom.com/340-large_default/batterie-reconditionnee-70ah.jpg",
  wiper: "https://static.summitracing.com/global/images/prod/xlarge/ado-84578275_ao_xl.jpg",
  mirror: "https://autowaysgroups.com/assets/img/Autoways3.jpg",
  lock: "https://www.autohausaz.com/images/PO-92862421100.jpg",
  seat: "https://images.carid.com/custom-seats/gallery/upholstery/new/cloth-seat-upholstery.jpg",
  filter: "https://www.carparts.com/blog/wp-content/uploads/2021/04/Replacement-Air-Filter-in-White-Background.jpg",
  bulb: "https://dhlighting.in/cdn/shop/collections/i_H7_STD_-n_T.png?v=1719909093&width=1500",
  tyre: "https://tirekingdom.co.cr/4262-large_default/1NF80-18.jpg"
};

/*
  Replace remote preview photos with licensed images you own
  before publishing a real commercial website.
*/
const API = "https://partdash-backend.onrender.com";

let backendProducts = [];
async function loadBackendProducts() {
    try {
        const response = await fetch(
            `${API}/api/products`
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(
                result.message || "Could not load products"
            );
        }

        backendProducts = result.data || [];

        console.log(
            "Backend products loaded:",
            backendProducts
        );

        return backendProducts;

    } catch (error) {
        console.error(
            "Backend product loading error:",
            error
        );

        return [];
    }
}
const catalog = [
  {
    category: "Oils & Fluids",
    icon: "🧴",
    image: PHOTOS.oil,
    items: [
      ["Castrol Magnatec 5W-30 Full Synthetic", "Petrol cars · 3.5 litre", 2199, 2599, "BESTSELLER"],
      ["Castrol GTX 15W-40 Engine Oil", "Diesel cars · 3.5 litre", 1450, 1699, ""],
      ["Castrol Edge 5W-40 Full Synthetic", "Premium cars · 3.5 litre", 3299, 3799, "PREMIUM"],
      ["Mobil Super 3000 5W-30", "Synthetic oil · 3.5 litre", 2350, 2750, "POPULAR"],
      ["Mobil 1 0W-40 Full Synthetic", "Premium petrol engines · 3.5 litre", 3499, 3999, ""],
      ["Shell Helix HX8 5W-30", "Petrol and diesel cars · 3.5 litre", 2399, 2850, ""],
      ["Shell Helix Ultra 5W-40", "Fully synthetic · 3.5 litre", 3150, 3599, "20% OFF"],
      ["Gulf Formula 5W-30", "Full synthetic · 3.5 litre", 2250, 2699, ""],
      ["Gulf Ultrasynth 5W-40", "Full synthetic · 3.5 litre", 2650, 3099, ""],
      ["TotalEnergies Quartz 9000 5W-40", "Fully synthetic · 4 litre", 2899, 3399, ""],
      ["Valvoline SynPower 5W-30", "Synthetic oil · 3.5 litre", 2499, 2899, ""],
      ["Motul 8100 X-clean 5W-40", "Full synthetic · 5 litre", 4699, 5299, "PREMIUM"],
      ["Bosch Brake Fluid DOT 4", "Universal passenger cars · 500 ml", 349, 450, ""],
      ["Castrol Brake Fluid DOT 4", "Universal passenger cars · 500 ml", 329, 399, ""],
      ["Shell Long Life Coolant", "Ready-to-use coolant · 1 litre", 499, 599, ""]
    ]
  },

  {
    category: "Brakes",
    icon: "🛑",
    image: PHOTOS.brake,
    items: [
      ["Bosch Front Brake Pads", "Maruti Swift / Baleno", 1249, 1460, "BESTSELLER"],
      ["Bosch Rear Brake Shoe Set", "Maruti Alto / WagonR", 899, 1099, ""],
      ["Bosch Brake Disc Rotor", "Hyundai i20 / Venue", 1899, 2299, ""],
      ["Bosch Brake Fluid ENV6", "ABS and ESP compatible · 500 ml", 549, 649, "POPULAR"],
      ["TVS Girling Front Brake Pads", "Hyundai i20 / Venue", 1199, 1450, ""],
      ["TVS Girling Brake Disc Rotor", "Hyundai Creta / Venue", 1999, 2399, ""],
      ["TVS Girling Brake Shoe Set", "Tata Tiago / Tigor", 799, 999, ""],
      ["Rane Front Brake Pad Set", "Tata Nexon / Punch", 1099, 1350, ""],
      ["Rane Brake Master Cylinder", "Tata Tiago / Tigor", 1699, 2050, ""],
      ["Rane Wheel Brake Cylinder", "Maruti Alto / WagonR", 799, 999, ""],
      ["Brembo Front Brake Pads", "Premium sedan / SUV", 2499, 2999, "PREMIUM"],
      ["Brembo Brake Disc Rotor", "Premium sedan / SUV", 3599, 4199, "PREMIUM"],
      ["Brake Caliper Repair Kit", "Universal passenger cars", 649, 799, ""],
      ["ABS Wheel Speed Sensor", "Select car model before ordering", 1099, 1399, ""]
    ]
  },

  {
    category: "Batteries",
    icon: "🔋",
    image: PHOTOS.battery,
    items: [
      ["Amaron FLO 35B20R Battery", "Alto / WagonR / Swift", 3899, 4850, "20% OFF"],
      ["Amaron GO 55D23L Battery", "Creta / Seltos / Nexon", 5599, 6500, ""],
      ["Amaron BLACK 42B20R Battery", "Hatchbacks and compact sedans", 3499, 4100, ""],
      ["Exide Mileage ML38B20R Battery", "Alto / Celerio / WagonR", 3699, 4400, "POPULAR"],
      ["Exide Matrix DIN50 Battery", "Hyundai / Kia / Volkswagen", 6699, 7600, ""],
      ["Exide EPIQ Car Battery", "Premium passenger cars", 7299, 8500, "PREMIUM"],
      ["SF Sonic DIN44 Battery", "Baleno / Brezza / i20", 5299, 6100, ""],
      ["SF Sonic 35B20R Battery", "Hatchbacks", 3599, 4299, ""],
      ["Tata Green TG Series Battery", "Tata Tiago / Punch / Nexon", 4899, 5700, ""],
      ["Livguard 42Ah Car Battery", "Hatchback and compact sedan", 4299, 4999, ""],
      ["Luminous 45Ah Car Battery", "Petrol passenger cars", 4499, 5300, ""],
      ["Car Battery Terminal Set", "Universal positive and negative terminals", 249, 320, ""],
      ["12V Battery Charger", "All passenger car batteries", 1299, 1599, ""]
    ]
  },

  {
    category: "Wipers",
    icon: "🌧️",
    image: PHOTOS.wiper,
    items: [
      ["Bosch Aerotwin Wiper Blade Set", "Select car model and year", 1199, 1499, "BESTSELLER"],
      ["Bosch Clear Advantage Wiper Blade", "Universal beam wiper", 599, 749, ""],
      ["Michelin Hybrid Wiper Blade", "Universal fitment", 749, 899, ""],
      ["Rain-X Silicone Wiper Blade", "All-weather premium blade", 999, 1199, "PREMIUM"],
      ["Valeo First Wiper Blade", "Universal passenger cars", 649, 799, ""],
      ["Wiper Motor Assembly", "Select car model before ordering", 2299, 2799, ""],
      ["Windshield Washer Pump", "Universal 12V fitment", 399, 499, ""],
      ["Windshield Washer Nozzle Set", "Universal passenger cars", 199, 299, ""]
    ]
  },

  {
    category: "Side Mirrors",
    icon: "🪞",
    image: PHOTOS.mirror,
    items: [
      ["Electric Side Mirror Assembly", "Maruti Swift · Left side", 2299, 2799, "POPULAR"],
      ["Electric Side Mirror Assembly", "Maruti Swift · Right side", 2299, 2799, ""],
      ["ORVM Side Mirror Assembly", "Hyundai i20 · Left side", 2799, 3399, ""],
      ["ORVM Side Mirror Assembly", "Hyundai i20 · Right side", 2799, 3399, ""],
      ["Tata Nexon Side Mirror", "Electrical adjustment", 3299, 3999, ""],
      ["Side Mirror Glass", "Universal replacement glass", 349, 499, ""],
      ["Side Mirror Indicator Lamp", "Select car model", 499, 650, ""],
      ["Side Mirror Cover Cap", "Paintable universal cover", 399, 550, ""]
    ]
  },

  {
    category: "Door Locks",
    icon: "🔒",
    image: PHOTOS.lock,
    items: [
      ["Door Lock Actuator", "Maruti Swift / Baleno", 1199, 1499, "BESTSELLER"],
      ["Door Lock Actuator", "Hyundai i20 / Creta", 1399, 1699, ""],
      ["Door Lock Actuator", "Tata Nexon / Punch", 1299, 1599, ""],
      ["Central Locking Kit", "Universal 4-door car kit", 1499, 1899, "POPULAR"],
      ["Door Lock Latch Assembly", "Select car model", 999, 1299, ""],
      ["Door Handle Cable", "Universal replacement cable", 299, 399, ""],
      ["Power Window Switch", "Driver side master switch", 799, 999, ""],
      ["Power Window Regulator", "Front door · select car model", 1499, 1899, ""]
    ]
  },

  {
    category: "Seats & Covers",
    icon: "💺",
    image: PHOTOS.seat,
    items: [
      ["Premium Leatherette Seat Cover", "Maruti Swift / Baleno", 4999, 5999, "POPULAR"],
      ["Premium Leatherette Seat Cover", "Hyundai Creta / Venue", 5999, 6999, ""],
      ["Premium Leatherette Seat Cover", "Tata Nexon / Punch", 5499, 6499, ""],
      ["Fabric Car Seat Cover Set", "Universal hatchback fitment", 1999, 2499, ""],
      ["Memory Foam Seat Cushion", "Universal car seat", 899, 1199, ""],
      ["Driver Seat Rail Assembly", "Select car model", 1799, 2199, ""],
      ["Seat Belt Assembly", "Front passenger seat", 1499, 1899, ""],
      ["Car Headrest Pillow Set", "Universal pair", 699, 899, ""]
    ]
  },

  {
    category: "Filters",
    icon: "🧰",
    image: PHOTOS.filter,
    items: [
      ["Bosch Engine Air Filter", "Hyundai i20 / Venue", 449, 599, "BESTSELLER"],
      ["Bosch Engine Oil Filter", "Select car model", 349, 450, ""],
      ["MANN Air Filter", "Premium passenger cars", 799, 999, "PREMIUM"],
      ["MANN Cabin AC Filter", "Dust and pollen filter", 699, 899, ""],
      ["Mahle Engine Oil Filter", "Petrol and diesel cars", 429, 550, ""],
      ["Mahle Cabin Filter", "Select car model", 649, 799, ""],
      ["Fuel Filter Assembly", "Diesel passenger cars", 799, 999, ""],
      ["K&N Performance Air Filter", "Universal performance filter", 4499, 5299, "PREMIUM"]
    ]
  },

  {
    category: "Lights",
    icon: "💡",
    image: PHOTOS.bulb,
    items: [
      ["Philips H4 RacingVision Bulbs", "Set of 2 · universal H4", 899, 1099, "BESTSELLER"],
      ["Philips LED Headlight Bulbs", "H7 fitment · set of 2", 1899, 2299, ""],
      ["Osram H4 Halogen Bulbs", "Set of 2 · universal H4", 749, 899, ""],
      ["Bosch H7 Headlight Bulb", "Single bulb · H7", 449, 599, ""],
      ["LED Fog Lamp Set", "Universal passenger cars", 1399, 1699, ""],
      ["Tail Light Bulb Set", "Universal fitment", 399, 499, ""],
      ["Car Headlight Assembly", "Select car model", 3499, 4200, ""],
      ["Car Tail Light Assembly", "Select car model", 2999, 3699, ""]
    ]
  },

  {
    category: "Tyres & Wheels",
    icon: "🛞",
    image: PHOTOS.tyre,
    items: [
      ["MRF Tyre 165/80 R14", "Hatchbacks and compact sedans", 4899, 5400, ""],
      ["MRF Tyre 185/65 R15", "Sedans and compact SUVs", 5599, 6200, ""],
      ["Apollo Tyre 185/65 R15", "Sedans and compact SUVs", 5799, 6400, "POPULAR"],
      ["Apollo Tyre 195/60 R16", "SUV and premium hatchbacks", 6499, 7200, ""],
      ["CEAT Tyre 195/60 R16", "SUV and premium hatchbacks", 6399, 7100, ""],
      ["Michelin Tyre 205/55 R16", "Premium sedans", 8999, 9800, "PREMIUM"],
      ["Tyre Pressure Gauge", "Universal passenger cars", 349, 450, ""],
      ["12V Portable Tyre Inflator", "Universal car socket", 1199, 1499, ""],
      ["Wheel Cover Set", "Universal 14-inch wheels", 999, 1299, ""]
    ]
  }
];

let nextId = 1;

const products = catalog.flatMap((group) =>
  group.items.map(([name, fit, price, oldPrice, badge]) => ({
    id: nextId++,
    category: group.category,
    icon: group.icon,
    image: group.image,
    name,
    fit,
    price,
    oldPrice,
    badge
  }))
);

const categories = catalog.map((group) => [
  group.category,
  group.icon
]);

let cart = JSON.parse(localStorage.getItem("partdash-cart")) || [];
let addresses = JSON.parse(localStorage.getItem("partdash-addresses")) || [];
let selectedCategory = "";
let selectedAddressId = addresses[0]?.id || null;

const $ = (selector) => document.querySelector(selector);

function money(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, (character) => {
    const characters = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return characters[character];
  });
}

function saveData() {
  localStorage.setItem("partdash-cart", JSON.stringify(cart));
  localStorage.setItem("partdash-addresses", JSON.stringify(addresses));
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function renderCategories() {
  const categoryGrid = $("#categoryGrid");
  if (!categoryGrid) return;

  categoryGrid.innerHTML = categories.map(([name, icon]) => `
    <button class="category ${selectedCategory === name ? "active" : ""}" data-category="${name}">
      <div>${icon}</div>
      ${name}
    </button>
  `).join("");

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
}
function getAllProducts() {
    return [...products, ...backendProducts];
}
function renderProducts() {
  const productGrid = $("#productGrid");
  if (!productGrid) return;

  const search = ($("#searchInput")?.value || "").trim().toLowerCase();
  const allProducts = getAllProducts();

  const filteredProducts = allProducts.filter((product) => {
  
    const searchText = `
      ${product.name}
      ${product.fit}
      ${product.category}
    `.toLowerCase();

    const categoryMatches =
      !selectedCategory || product.category === selectedCategory;

    const searchMatches =
      !search || searchText.includes(search);

    return categoryMatches && searchMatches;
  });

  if ($("#resultText")) {
    $("#resultText").textContent =
      selectedCategory || search
        ? `${filteredProducts.length} matching products`
        : `${allProducts.length} products available`;
  }

  productGrid.innerHTML = filteredProducts.map((product) => `
    <article class="product-card">
      ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}

      <div class="product-image">
        <img
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
          style="width:100%;height:100%;object-fit:contain;padding:12px"
          onerror="this.style.display='none';this.nextElementSibling.style.display='grid';"
        >
        <span style="display:none;font-size:65px">${product.icon}</span>
      </div>

      <h3>${escapeHTML(product.name)}</h3>
      <p>${escapeHTML(product.fit)}</p>

      <div class="product-bottom">
        <div class="price">
          ${money(product.price)}
          <del>${money(product.oldPrice)}</del>
        </div>

        <button class="add-btn" data-product-id="${product.id}">+</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll("[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.productId));
    });
  });
}
function addToCart(productId) {
  const allProducts = getAllProducts();

  const product = allProducts.find(
    (item) => Number(item.id) === Number(productId)
  );

  if (!product) {
    showToast("Product not found");
    return;
  }

  // Stock check
  if (product.stock !== undefined && Number(product.stock) <= 0) {
    showToast("This product is out of stock");
    return;
  }

  const cartItem = cart.find(
    (item) => Number(item.id) === Number(productId)
  );

  if (cartItem) {
    // Don't allow quantity above available stock
    if (
      product.stock !== undefined &&
      cartItem.quantity >= Number(product.stock)
    ) {
      showToast("No more stock available");
      return;
    }

    cartItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveData();
  renderCart();
  showToast("Added to your cart");
}
  function renderCart() {
  const cartItems = $("#cartItems");
  const cartTotal = $("#cartTotal");

  if (!cartItems || !cartTotal) return;

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 49;
  const total = subtotal + delivery;

  if ($("#cartCount")) {
    $("#cartCount").textContent = totalItems;
  }

  cartItems.innerHTML = cart.length
    ? cart.map((item) => `
      <div class="cart-item">
        <div class="cart-icon">${item.icon}</div>

        <div>
          <h4>${escapeHTML(item.name)}</h4>
          <p>${money(item.price)}</p>

          <div class="quantity">
            <button data-decrease="${item.id}">−</button>
            <span>${item.quantity}</span>
            <button data-increase="${item.id}">+</button>
          </div>
        </div>

        <button class="remove-btn" data-remove="${item.id}">
          Remove
        </button>
      </div>
    `).join("")
    : `
      <div class="empty-cart">
        Your cart is empty.<br>
        Add spare parts to continue.
      </div>
    `;

  cartTotal.innerHTML = cart.length
    ? `
      <div class="total-row">
        <span>Subtotal</span>
        <span>${money(subtotal)}</span>
      </div>

      <div class="total-row">
        <span>Delivery</span>
        <span>${delivery ? money(delivery) : "FREE"}</span>
      </div>

      <div class="total-row final">
        <span>Total</span>
        <span>${money(total)}</span>
      </div>

      <button class="checkout-btn" id="checkoutButton">
        Proceed to checkout
      </button>
    `
    : "";

  document.querySelectorAll("[data-increase]").forEach((button) => {
    button.addEventListener("click", () => {
      changeQuantity(Number(button.dataset.increase), 1);
    });
  });

  document.querySelectorAll("[data-decrease]").forEach((button) => {
    button.addEventListener("click", () => {
      changeQuantity(Number(button.dataset.decrease), -1);
    });
  });

  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      removeFromCart(Number(button.dataset.remove));
    });
  });

  $("#checkoutButton")?.addEventListener("click", openCheckout);
}

function changeQuantity(productId, amount) {
  const item = cart.find((product) => product.id === productId);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.id !== productId);
  }

  saveData();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);

  saveData();
  renderCart();
  showToast("Item removed");
}

function renderAddresses() {
  const addressList = $("#addressList");
  if (!addressList) return;

  if (!addresses.length) {
    addressList.innerHTML = `
      <p class="muted">
        No delivery address saved. Add one below.
      </p>
    `;
    return;
  }

  if (!selectedAddressId) {
    selectedAddressId = addresses[0].id;
  }

  addressList.innerHTML = addresses.map((address) => `
    <label class="address-choice">
      <input
        type="radio"
        name="address"
        value="${address.id}"
        ${address.id === selectedAddressId ? "checked" : ""}
      >

      <div>
        <b>${escapeHTML(address.label)} · ${escapeHTML(address.name)}</b>
        <small>
          ${escapeHTML(address.address)}, ${escapeHTML(address.city)} -
          ${escapeHTML(address.pincode)}<br>
          ${escapeHTML(address.mobile)}
        </small>
      </div>
    </label>
  `).join("");

  document.querySelectorAll("input[name='address']").forEach((input) => {
    input.addEventListener("change", () => {
      selectedAddressId = Number(input.value);
    });
  });
}

function saveAddress(event) {
  event.preventDefault();

  const name = $("#fullName")?.value.trim();
  const mobile = $("#mobile")?.value.replace(/\D/g, "");
  const address = $("#fullAddress")?.value.trim();
  const city = $("#city")?.value.trim();
  const pincode = $("#pincode")?.value.replace(/\D/g, "");
  const label = $("#addressLabel")?.value.trim() || "Home";

  if (!name || !address || !city || mobile.length !== 10 || pincode.length !== 6) {
    showToast("Enter a valid name, mobile number, address and pincode");
    return;
  }

  const newAddress = {
    id: Date.now(),
    label,
    name,
    mobile,
    address,
    city,
    pincode
  };

  addresses.unshift(newAddress);
  selectedAddressId = newAddress.id;

  saveData();
  renderAddresses();

  $("#addressForm")?.reset();
  $("#addressForm")?.classList.add("hidden");

  showToast("Address saved");
}

function openCheckout() {
  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }

  renderAddresses();
  $("#checkoutDialog")?.showModal();
}
async function placeOrder() {
    if (!cart.length) {
        showToast("Your cart is empty");
        return;
    }

    const selectedAddress = addresses.find(
        (address) => address.id === selectedAddressId
    );

    if (!selectedAddress) {
        showToast("Please add/select a delivery address");
        return;
    }

    const paymentInput = document.querySelector(
        'input[name="payment"]:checked'
    );

    const selectedPayment = paymentInput?.value;
    console.log("SELECTED ADDRESS:", selectedAddress);
    console.log("PAYMENT:", selectedPayment);
    console.log("CART:", cart);

    if (!selectedPayment) {
        showToast("Please select a payment method");
        return;
    }

    // =========================
    // PHONEPE / UPI
    // =========================
    if (selectedPayment === "UPI") {
        try {
            showToast("Starting PhonePe payment...");

            const response = await fetch(
                `${API}/api/payment/create`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        customer_name: selectedAddress.name,
                        email: null,
                        phone: selectedAddress.mobile,
                        address: [
                            selectedAddress.address,
                            selectedAddress.city,
                            selectedAddress.pincode
                        ].filter(Boolean).join(", "),
                        items: cart.map((item) => ({
                            id: Number(item.id),
                            quantity: Number(item.quantity)
                        }))
                    })
                }
            );

            const data = await response.json();
            console.log("PhonePe ORDER RESPONSE:", data);

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message || "Unable to start PhonePe payment"
                );
            }

            sessionStorage.setItem(
                "partdash_payment_order",
                JSON.stringify({
                    orderId: data.orderId,
                    merchantOrderId: data.merchantOrderId
                })
            );

            window.location.href = data.redirectUrl;

        } catch (error) {
            console.error("PhonePe error:", error);
            showToast(
                error.message ||
                "PhonePe payment could not be started"
            );
        }

        return;
    }

   // CASH ON DELIVERY
if (selectedPayment === "Cash on Delivery") {
    try {
        const items = cart.map((item) => ({
            id: Number(item.id),
            name: item.name,
            quantity: Number(item.quantity),
            price: Number(item.price)
        }));

        const customerAddress = [
            selectedAddress.address,
            selectedAddress.city,
            selectedAddress.pincode
        ].filter(Boolean).join(", ");

        const orderData = {
            customer_name: selectedAddress.name,
            email: null,
            phone: selectedAddress.mobile,
            address: customerAddress,
            total_amount: cart.reduce(
                (total, item) =>
                    total + Number(item.price) * Number(item.quantity),
                0
            ),
            payment_method: "Cash on Delivery",
            items: items
        };

        console.log("Cash on Delivery ORDER DATA:", orderData);

        const response = await fetch(`${API}/api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        });

        const data = await response.json();
        console.log("Cash on Delivery ORDER RESPONSE:", data);
        console.log("FULL Cash on Delivery RESPONSE:", JSON.stringify(data, null, 2));

        if (!response.ok || !data.success) {
            throw new Error(
                data.message || "Unable to place Cash on Delivery order"
            );
        }
        const customerOrderId =
    data.orderId ?? data.data?.id ?? data.id;

console.log("CUSTOMER ORDER ID:", customerOrderId);
console.log("FULL RESPONSE:", data);

if (!customerOrderId) {
    throw new Error("Order was created, but Order ID was not received.");
}

showToast(
    `Order placed successfully! Order ID: ${customerOrderId}`
);

cart = [];
saveData();
renderCart();

$("#checkoutDialog")?.close();

        
    } catch (error) {
        console.error("Cash on Delivery order error:", error);
        showToast(
            error.message || "Unable to place Cash on Delivery order"
        );
    }

    return;
}

    // Card अभी connected नहीं है
    if (selectedPayment === "Card") {
        showToast("Card payment is not connected yet");
        return;
    }

    showToast("Please select a valid payment method");
}
function closeCart() {
  $("#cartPanel")?.classList.remove("show");
  $("#overlay")?.classList.remove("show");
}

$("#searchForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  renderProducts();
});

$("#showAll")?.addEventListener("click", () => {
  selectedCategory = "";

  if ($("#searchInput")) {
    $("#searchInput").value = "";
  }

  renderCategories();
  renderProducts();
});

$("#findParts")?.addEventListener("click", () => {
  $("#searchInput")?.focus();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  showToast("Search by car model, for example Swift or Nexon");
});

$("#openCart")?.addEventListener("click", () => {
  $("#cartPanel")?.classList.add("show");
  $("#overlay")?.classList.add("show");
});

$("#closeCart")?.addEventListener("click", closeCart);
$("#overlay")?.addEventListener("click", closeCart);

$("#closeCheckout")?.addEventListener("click", () => {
  $("#checkoutDialog")?.close();
});

$("#toggleAddressForm")?.addEventListener("click", () => {
  $("#addressForm")?.classList.toggle("hidden");
});

$("#addressForm")?.addEventListener("submit", saveAddress);
$("#placeOrder")?.addEventListener("click", placeOrder);

renderCategories();

renderCart();
loadBackendProducts().then(() => {
    renderProducts();
});
async function checkBackend() {
    try {
        const response = await fetch("http://localhost:5000/api/test-db");
        const data = await response.json();

        console.log("Backend connected:", data);
    } catch (error) {
        console.error("Backend connection failed:", error);
    }
}

checkBackend();
async function trackOrder() {
    const orderId = document
        .getElementById("trackOrderId")
        .value
        .trim();

    const phone = document
        .getElementById("trackPhone")
        .value
        .trim();

    const resultBox = document.getElementById("trackOrderResult");

    if (!orderId || !phone) {
        resultBox.innerHTML = `
            <p style="color:#d93025;">
                Please enter Order ID and Phone Number.
            </p>
        `;
        return;
    }

    resultBox.innerHTML = `
        <p style="text-align:center;color:#697386;">
            Checking your order...
        </p>
    `;

    try {
        const response = await fetch(
            `${API}/api/orders/track/${orderId}?phone=${encodeURIComponent(phone)}`
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
            resultBox.innerHTML = `
                <p style="text-align:center;color:#d93025;">
                    ${result.message || "Order not found."}
                </p>
            `;
            return;
        }

        const order = result.data;

        const statuses = [
            "Pending",
            "Confirmed",
            "Shipped",
            "Delivered"
        ];

        const currentIndex = statuses.findIndex(
            status =>
                status.toLowerCase() ===
                String(order.status).toLowerCase()
        );

        const safeIndex = currentIndex >= 0 ? currentIndex : 0;

        const icons = ["✓", "✓", "🚚", "📦"];

        const timelineHTML = statuses.map((status, index) => {

            let className = "";

            if (index < safeIndex) {
                className = "completed";
            } else if (index === safeIndex) {
                className = "active";
            }

            const icon =
                index <= safeIndex
                    ? icons[index]
                    : String(index + 1);

            return `
                <div class="timeline-step ${className}">
                    <div class="timeline-icon">
                        ${icon}
                    </div>

                    <div class="timeline-title">
                        ${status}
                    </div>

                    <div class="timeline-time">
                        ${index === safeIndex
                            ? "Current status"
                            : index < safeIndex
                                ? "Completed"
                                : "Pending"}
                    </div>
                </div>
            `;
        }).join("");

        const progressWidth =
            safeIndex === 0
                ? 0
                : (safeIndex / (statuses.length - 1)) * 76;

        resultBox.innerHTML = `
            <div class="order-tracking-card">

                <div class="order-tracking-top">

                    <div>
                        <h3 class="order-number">
                            Order #${order.id}
                        </h3>

                        <div class="order-date">
                            Placed on
                            ${new Date(order.created_at).toLocaleString()}
                        </div>
                    </div>

                    <div class="order-status-badge">
                        ${order.status}
                    </div>

                </div>

                <div class="order-timeline">

                    <div class="timeline-line"></div>

                    <div
                        class="timeline-progress"
                        style="width:${progressWidth}%"
                    ></div>

                    ${timelineHTML}

                </div>

                <div class="order-details-grid">

                    <div class="order-detail-box">

                        <h4>Order Summary</h4>

                        <div class="order-detail-row">
                            <span>Order ID</span>
                            <span>#${order.id}</span>
                        </div>

                        <div class="order-detail-row">
                            <span>Customer</span>
                            <span>${order.customer_name}</span>
                        </div>

                        <div class="order-detail-row">
                            <span>Phone</span>
                            <span>${order.phone}</span>
                        </div>

                        <div class="order-detail-row">
                            <span>Payment</span>
                            <span>${order.payment_method || "N/A"}</span>
                        </div>

                    </div>

                    <div class="order-detail-box">

                        <h4>Payment Summary</h4>

                        <div class="order-detail-row">
                            <span>Payment Method</span>
                            <span>${order.payment_method || "N/A"}</span>
                        </div>

                        <div class="order-detail-row">
                            <span>Status</span>
                            <span>${order.status}</span>
                        </div>

                        <div class="order-detail-row">
                            <span>Total Amount</span>
                            <span class="order-total">
                                ₹${Number(order.total_amount).toFixed(2)}
                            </span>
                        </div>

                    </div>

                </div>

            </div>
        `;

    } catch (error) {
        console.error("TRACK ORDER ERROR:", error);

        resultBox.innerHTML = `
            <p style="text-align:center;color:#d93025;">
                Unable to track order. Please try again.
            </p>
        `;
    }
}
async function verifyPhonePePayment() {
    try {
        const savedPayment = localStorage.getItem("partdash_payment_order");

        if (!savedPayment) return;

        const payment = JSON.parse(savedPayment);

        if (!payment.merchantOrderId) return;

        console.log("Verifying PhonePe payment...");

        const response = await fetch(
            `${API}/api/payment/verify/${encodeURIComponent(
                payment.merchantOrderId
            )}`
        );

        const result = await response.json();

        console.log("PhonePe verification result:", result);

        if (result.success) {
            localStorage.removeItem("partdash_payment_order");

            const orderId =
                result.data?.id ||
                payment.orderId;

            showToast(
                `Payment successful! Order ID: ${orderId}`
            );
        }

    } catch (error) {
        console.error("PhonePe verification error:", error);
    }
}

verifyPhonePePayment();
async function loadMyOrders() {
    const phoneInput = document.getElementById("myOrdersPhone");
    const resultBox = document.getElementById("myOrdersResult");

    const phone = phoneInput.value.trim();

    if (!phone) {
        resultBox.innerHTML = "<p>Please enter your phone number.</p>";
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        resultBox.innerHTML = "<p>Please enter a valid 10-digit phone number.</p>";
        return;
    }

    resultBox.innerHTML = "<p>Loading your orders...</p>";

    try {
        const response = await fetch(
            `${API}/api/orders/my-orders?phone=${encodeURIComponent(phone)}`
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(result.message || "Failed to load orders");
        }

        if (!result.data || result.data.length === 0) {
            resultBox.innerHTML = `
                <div class="no-orders">
                    <h3>No orders found</h3>
                    <p>We couldn't find any orders for this phone number.</p>
                </div>
            `;
            return;
        }

        resultBox.innerHTML = result.data.map(order => `
            <div class="my-order-card">

                <div class="my-order-top">
                    <div>
                        <small>Order ID</small>
                        <h3>#${order.id}</h3>
                    </div>
                    <button
                      class="track-my-order-btn"
                      onclick="trackMyOrder(${order.id}, '${String(order.phone || phone).replace(/'/g, "\\'")}')"
                      >
                      Track this order →
                      </button>

                    <span class="order-status">
                        ${order.status}
                    </span>
                </div>

                <div class="my-order-info">
                    <p>
                        <strong>Payment:</strong>
                        ${order.payment_method || "Cash on Delivery"}
                    </p>

                    <p>
                        <strong>Payment status:</strong>
                        ${order.payment_status || "Pending"}
                    </p>

                    <p>
                        <strong>Total:</strong>
                        ₹${Number(order.total_amount).toFixed(2)}
                    </p>
                </div>

                <div class="my-order-items">
                    <strong>Items</strong>

                    ${order.items.map(item => `
                        <div class="my-order-item">
                            <span>
                                ${item.product_name} × ${item.quantity}
                            </span>

                            <span>
                                ₹${(
                                    Number(item.price) *
                                    Number(item.quantity)
                                ).toFixed(2)}
                            </span>
                        </div>
                    `).join("")}
                </div>

            </div>
        `).join("");

    } catch (error) {
        console.error("MY ORDERS ERROR:", error);

        resultBox.innerHTML = `
            <div class="no-orders">
                <p>Unable to load orders. Please try again.</p>
            </div>
        `;
    }
}
function trackMyOrder(orderId, phone) {
    const orderIdInput = document.getElementById("trackOrderId");
    const phoneInput = document.getElementById("trackPhone");

    if (orderIdInput) {
        orderIdInput.value = orderId;
    }

    if (phoneInput) {
        phoneInput.value = phone;
    }

    const trackSection = document.querySelector(".track-order-section");

    if (trackSection) {
        trackSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    if (typeof trackOrder === "function") {
        trackOrder();
    }
}
async function signupUser(event) {
    event.preventDefault();

    const resultBox = document.getElementById("signupResult");

    resultBox.textContent = "Connecting...";

    try {
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: document.getElementById("signupName").value.trim(),
                email: document.getElementById("signupEmail").value.trim(),
                password: document.getElementById("signupPassword").value
            })
        });

        const data = await response.json();

        resultBox.textContent = data.message || "Response received";

    } catch (error) {
        console.error(error);
        resultBox.textContent = "Connection error: " + error.message;
    }
}
async function loginUser() {
    const resultBox = document.getElementById("loginResult");

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        resultBox.textContent = "Please enter email and password.";
        return;
    }

    resultBox.textContent = "Logging in...";

    try {
        const response = await fetch(`${API}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        console.log("LOGIN RESPONSE:", data);

        if (!response.ok || !data.success) {
            resultBox.textContent = data.message || "Login failed.";
            return;
        }

        // Save customer login
        localStorage.setItem(
            "partdash_customer_token",
            data.token
        );

        localStorage.setItem(
            "partdash_customer",
            JSON.stringify(data.user)
        );

        // Show success
        resultBox.textContent =
            `Welcome, ${data.user.name}! Login successful.`;

        showToast(`Welcome, ${data.user.name}!`);

        console.log("CUSTOMER LOGGED IN:", data.user);

    } catch (error) {
        console.error("LOGIN ERROR:", error);
        resultBox.textContent =
            "Unable to connect to server.";
    }
}
function updateCustomerUI() {
    const customerData = localStorage.getItem("partdash_customer");

    const loginButton = document.querySelector(
        '[onclick="loginUser()"]'
    );

    if (!loginButton) return;

    if (!customerData) {
        loginButton.textContent = "Login";
        loginButton.onclick = loginUser;
        return;
    }

    try {
        const customer = JSON.parse(customerData);

        loginButton.textContent = customer.name;
        loginButton.onclick = logoutCustomer;

    } catch (error) {
        console.error("Customer UI error:", error);
    }
}
function logoutCustomer() {
    localStorage.removeItem("partdash_customer_token");
    localStorage.removeItem("partdash_customer");

    location.reload();
}