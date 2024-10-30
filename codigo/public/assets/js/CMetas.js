import { auth } from "./auth.js";
import { createIconsSelector } from "./icons-selector.js";

function closeModal() {
  document.querySelector(".modal").style.display = "none";
}

function selectIcon(direction) {
  const icons = document.querySelectorAll(".icon-selector img");
  let current = Array.from(icons).findIndex((icon) =>
    icon.classList.contains("selected")
  );

  icons[current].classList.remove("selected");
  if (direction === "next") {
    current = (current + 1) % icons.length;
  } else {
    current = (current - 1 + icons.length) % icons.length;
  }
  icons[current].classList.add("selected");
}

export function cancel() {
  document.getElementById("metaForm").reset();
}

document
  .getElementById("metaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const valor = document.getElementById("valor").value;
    const tempo = document.getElementById("tempo").value;
    let icone = document
      .querySelector(".form__field__icons__item__input:checked")
      .getAttribute("data-icon-name");

    if (icone === "none") icone = undefined;

    const meta = criarMeta({ nome, valor, tempo, icone });

    if (!meta) {
      alert("Erro ao criar a meta.");
      return;
    }

    cancel();
  });

// função para criar a meta
function criarMeta({ nome, valor, tempo, icone }) {
  const user = auth();

  const time = new Date().getTime();

  // fetch("/categories", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     ownerId: user.id,
  //     name: nome,
  //     time: tempo,
  //     icon: icone,
  //     value: valor,
  //     createdAt: time,
  //     updatedAt: time,
  //   }),
  // });

  // precisa retornar a meta criada
}

createIconsSelector();
