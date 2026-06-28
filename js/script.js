const track = document.querySelector(".track");
track.innerHTML += track.innerHTML;

const modalOverlay = document.querySelector("#modal-overlay");
const botaoAbrirModal = document.querySelector("#agendar-consulta-botao");
const botaoFecharModal = document.querySelector("#modal-fechar");
const formAgendamento = document.querySelector("#form-agendamento");

function abrirModal(){
    modalOverlay.classList.add("ativo");
}

function fecharModal(){
    modalOverlay.classList.remove("ativo");
}

botaoAbrirModal.addEventListener("click", abrirModal);
botaoFecharModal.addEventListener("click", fecharModal);

modalOverlay.addEventListener("click", (evento) => {
    if(evento.target === modalOverlay) fecharModal();
});

document.addEventListener("keydown", (evento) => {
    if(evento.key === "Escape") fecharModal();
});

formAgendamento.addEventListener("submit", (evento) => {
    evento.preventDefault();
    fecharModal();
});