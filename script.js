const EMPLOYEES = [
  {
    id: 1,
    name: "Duncan Smith",
    slogan: "Agent Smith controlling the matrix?",
    image: "images/Duncan.png"
  },
  {
    id: 2,
    name: "Yakub Jacob Uddin",
    slogan: "Will the boss rise to the top?",
    image: "images/Yakub.png"
  },
  {
    id: 3,
    name: "George Owusu",
    slogan: "Owusu obtaining victory?",
    image: "images/George.png"
  }
];

function renderEmployees() {
  const container = document.getElementById("employee-container");
  EMPLOYEES.forEach(employee => {
    const card = document.createElement("div");
    card.className = "employee-card";

    card.innerHTML = `
      <img src="${employee.image}" class="employee-image" alt="${employee.name}" />
      <h3>${employee.name}</h3>
      <p>${employee.slogan}</p>
      <button class="vote-button" data-id="${employee.id}">Vote</button>
    `;

    container.appendChild(card);
  });

  document.querySelectorAll(".vote-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".vote-button").forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");
      // Trigger Power Automate API here
    });
  });
}

function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  const deadline = new Date("2025-06-15T23:59:59Z").getTime();

  function update() {
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance <= 0) {
      countdownEl.innerHTML = "Voting Closed";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((distance / (1000 * 60)) % 60);
    const secs = Math.floor((distance / 1000) % 60);

    countdownEl.innerHTML = `⏳ ${days}d ${hours}h ${mins}m ${secs}s left`;
  }

  update();
  setInterval(update, 1000);
}

renderEmployees();
startCountdown();