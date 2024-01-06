/* btn user and captain */
let userBtn = document.getElementById("userBtn");
let capBtn = document.getElementById("capBtn");
let cuserBtn = document.getElementById("cuserBtn");
let ccapBtn = document.getElementById("ccapBtn");
let cfront = document.getElementById("cfront");
let cback = document.getElementById("cback");

userBtn.onclick = function () {
  userBtn.classList.add("disable");
  capBtn.classList.remove("disable");
};

capBtn.onclick = function () {
  userBtn.classList.remove("disable");
  capBtn.classList.add("disable");
  cfront.classList.remove("sign-side-front-one");
  cback.classList.add("sign-side-front-one");
};
cuserBtn.onclick = function () {
  cuserBtn.classList.add("disable");
  ccapBtn.classList.remove("disable");
  cfront.classList.add("sign-side-front-one");
  cback.classList.remove("sign-side-front-one");
};

ccapBtn.onclick = function () {
  cuserBtn.classList.remove("disable");
  ccapBtn.classList.add("disable");
};

/*  image captain popup */

const image = document.querySelector(".popup-image"),
  input = document.querySelector(".popup-imgfile");
input.addEventListener("change", () => {
  image.src = URL.createObjectURL(input.files[0]);
});

/* image user popup */

const picture = document.querySelector(".popup-image-user"),
  inputuser = document.querySelector(".popup-imgfile");
inputuser.addEventListener("change", () => {
  picture.src = URL.createObjectURL(inputuser.files[0]);
});

/* password user */

var pass = document.getElementById("pw");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (pass.value.length < 7) {
    str.innerHTML = "weak";
    msg.style.color = "#ff5925";
    pass.style.borderBottom = "3px solid #ff5925";
  } else if (pass.value.length >= 7 && pass.value.length < 13) {
    str.innerHTML = "medium";
    msg.style.color = "yellow";
    pass.style.borderBottom = "3px solid yellow";
  } else if (pass.value.length >= 20) {
    str.innerHTML = "strong";
    msg.style.color = "#26d730";
    pass.style.borderBottom = "3px solid #26d730";
  }
});

/* password captain */

var passcap = document.getElementById("pa");
var msgcap = document.getElementById("mes");
var strcap = document.getElementById("strong");
passcap.addEventListener("input", () => {
  if (passcap.value.length > 0) {
    msgcap.style.display = "block";
  } else {
    msgcap.style.display = "none";
  }
  if (passcap.value.length < 7) {
    strcap.innerHTML = "weak";
    msgcap.style.color = "#ff5925";
    passcap.style.borderBottom = "3px solid #ff5925";
  } else if (passcap.value.length >= 7 && passcap.value.length < 13) {
    strcap.innerHTML = "medium";
    msgcap.style.color = "yellow";
    passcap.style.borderBottom = "3px solid yellow";
  } else if (passcap.value.length >= 20) {
    strcap.innerHTML = "strong";
    msgcap.style.color = "#26d730";
    passcap.style.borderBottom = "3px solid #26d730";
  }
});


/* btn back to up */

const showOnPx = 100;
const backToTopButton = document.querySelector(".button-up");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

document.addEventListener("scroll", () => {
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    110;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);
