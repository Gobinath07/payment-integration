const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

var options = {
  key: "rzp_test_M5gPtAEBXku0w0", // Enter the Key ID generated from the Dashboard
  amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  name: "Acme Corp",
  description: "Test Transaction",
  image: "https://example.com/your_logo",

  handler: function (response) {
    alert(response.razorpay_payment_id);
    alert(response.razorpay_order_id);
    alert(response.razorpay_signature);
  },

  notes: {
    address: "Razorpay Corporate Office",
  },
  theme: {
    color: "#F37254",
  },
};
var rzp1 = new Razorpay(options);
document.getElementById("rzp-button1").onclick = function (e) {
  rzp1.open();
  e.preventDefault();
};
