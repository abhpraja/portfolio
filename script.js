const navbar = document.getElementById('navbar');

function openSidebar() {
  navbar.classList.add('show');
}

function closeSidebar(){
  navbar.classList.remove('show');
}

gsap.from("#about .about-details",{
  y: 100,
  opacity: 0,
  delay: 1,
  duration: 2,
  stagger:1,
})

gsap.from(".proj-info", {
  y: 100,
  backgroundColor: "Black",
  color: "white",
  opacity: 0,
  duration: 2,
  stagger:0.5,
  scrollTrigger: {
    trigger: ".proj-info",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "bottom 60%",
  }
})

const openBtns = document.querySelectorAll("#openModal");
const closeBtns = document.querySelectorAll("#closeModal");
const modals = document.querySelectorAll(".modal");

openBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].classList.add("open");
  });
});

closeBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].classList.remove("open");
  });
});

function closemodalBtn(modalElement) {
  modalElement.classList.remove("open");
}

