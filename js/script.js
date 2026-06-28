const track = document.querySelector(".track");
track.innerHTML += track.innerHTML;

const modalOverlay = document.querySelector("#modal-overlay");
const botaoAbrirModal = document.querySelector("#agendar-consulta-botao");
const botaoFecharModal = document.querySelector("#modal-fechar");
const formAgendamento = document.querySelector("#form-agendamento");
const campoNome = document.querySelector("#modal-nome");
const campoObjetivo = document.querySelector("#modal-objetivo");

// TODO: substitua pelo número real, no formato código do país + DDD + número (sem espaços, "+" ou traços)
const NUMERO_WHATSAPP = "5513991149254";

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

    const nome = campoNome.value.trim().replace(/[^\p{L}\s]/gu, "");;
    const objetivo = campoObjetivo.value ? campoObjetivo.options[campoObjetivo.selectedIndex].text.trim() : "";

    if(!nome || !objetivo){
        return;
    }

    const mensagem = `Olá Álvaro! \n\nMeu nome é *${nome}* e meu objetivo principal é *${objetivo}*.\nGostaria de agendar uma consulta.`;
    const linkWhatsapp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

    window.open(linkWhatsapp, "_blank", "noopener");

    formAgendamento.reset();
    fecharModal();
});