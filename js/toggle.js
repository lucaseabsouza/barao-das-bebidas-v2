const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

// Função para fechar o menu.
function closeMenu() {
    nav.classList.remove('active');
    btnMobile.setAttribute('aria-expanded', false);
    btnMobile.setAttribute('aria-label', 'Abrir Menu');
}

// A função toggleMenu é chamada quando o MenuMobile é clicado ou tocado, alternando a classe active no menu e atualizando os atributos aria-expanded e aria-label do botão. Essa função faz o menu abrir e fechar.
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const active = nav.classList.toggle('active');
    btnMobile.setAttribute('aria-expanded', active);
    btnMobile.setAttribute('aria-label', active ? 'Fechar Menu' : 'Abrir Menu');
}

// A função documentClickHandler é chamada quando um clique é detectado no documento. Ela verifica se o clique foi fora do botão móvel e do menu, e fecha o menu se necessário, essa função faz o menu fechar se o click for fora do menu.
function documentClickHandler(event) {
    if (!event.target.closest('#btn-mobile') && !event.target.closest('#nav')) {
        closeMenu();
    }
}
// Adiciona um ouvinte de evento ao documento para capturar cliques fora do menu
document.addEventListener('click', documentClickHandler);

// Seleciona todas as opções do menu
const menuOptions = document.querySelectorAll('#nav a');


// Faz um forEach adicionando um ouvinte de evento de clique a cada opção do menu, que chama a função closeMenu para fechar o menu quando uma opção é clicada.
menuOptions.forEach(option => {
    option.addEventListener('click', closeMenu);
});

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);