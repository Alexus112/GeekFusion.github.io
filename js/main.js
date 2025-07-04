// Dados dos jogos (simulando um banco de dados ou API)
const games = [
    {
        id: 1,
        name: "Cyberpunk 2077",
        price: 199.99,
        image: "images/cyberpunk.webp", 
        genres: ["RPG", "Ação", "Aventura"],
        platform: "PC",
        description: "Cyberpunk 2077 é uma história de aventura de mundo aberto ambientada em Night City, uma megalópole obcecada por poder, glamour e modificações corporais. Você joga como V, um mercenário fora da lei que persegue um implante único que é a chave para a imortalidade. Você pode personalizar o cyberware, o conjunto de habilidades e o estilo de jogo do seu personagem, e explorar uma vasta cidade onde as escolhas que você faz moldam a história e o mundo ao seu redor.",
        features: [
            "Mundo Aberto Distópico: Explore a vasta e vibrante Night City.",
            "Personalização Profunda: Crie seu próprio mercenário cyberneticamente aprimorado.",
            "Narrativa Ramificada: Suas escolhas influenciam o enredo e os relacionamentos."
        ]
    },
    {
        id: 2,
        name: "The Witcher 3: Wild Hunt",
        price: 129.99,
        image: "images/witcher3.webp", 
        genres: ["RPG", "Aventura"],
        platform: "PC",
        description: "Torne-se Geralt de Rívia, um caçador de monstros profissional, enquanto você explora um vasto mundo aberto e cheio de cidades mercantis, ilhas piratas perigosas, passagens montanhosas e cavernas esquecidas para caçar Ciri, a Criança da Profecia. The Witcher 3 é um RPG com uma história emocionante, combate tático e gráficos impressionantes.",
        features: [
            "Mundo Aberto Fantástico: Descubra terras esquecidas e criaturas míticas.",
            "Escolhas Morais Complexas: Decisões difíceis com consequências de longo alcance.",
            "Combate Dinâmico: Utilize magia, espadas e alquimia em batalhas estratégicas."
        ]
    },
    {
        id: 3,
        name: "Hogwarts Legacy",
        price: 249.99,
        image: "images/hogwarts.webp", 
        genres: ["RPG", "Aventura"],
        platform: "PC",
        description: "Hogwarts Legacy é um RPG de ação imersivo em mundo aberto ambientado no mundo mágico do século XIX. Pela primeira vez, experimente Hogwarts nos anos 1800. Seu personagem é um aluno que guarda a chave de um antigo segredo que ameaça destruir o mundo bruxo. Faça aliados, lute contra as Trevas e, em última análise, decida o destino do mundo bruxo.",
        features: [
            "Explore Hogwarts: Descubra segredos e salas escondidas do castelo.",
            "Aprenda Magia: Domine feitiços, poções e treine criaturas mágicas.",
            "Sua Própria Aventura: Crie seu legado no mundo bruxo."
        ]
    },
    {
        id: 4,
        name: "Elden Ring",
        price: 229.99,
        image: "images/eldenring.webp", 
        genres: ["RPG", "Ação"],
        platform: "PC",
        description: "Elden Ring é um RPG de ação de fantasia ambientado em um mundo de mistério e perigo. Viaje pelas Terras Intermédias, um reino manchado pela perda do Anel Prístino, e lute contra criaturas temíveis e adversários tortuosos. O jogo oferece uma vasta paisagem interconectada, com masmorras escuras e complexas que se conectam perfeitamente ao mundo.",
        features: [
            "Vasto Mundo Aberto: Explore um reino de fantasia épico.",
            "Combate Desafiador: Batalhas intensas e estratégicas contra chefes memoráveis.",
            "Liberdade de Exploração: Descubra segredos e caminhos ocultos."
        ]
    },
    {
        id: 5,
        name: "God of War Ragnarök",
        price: 299.99,
        image: "images/godofwar.webp", 
        genres: ["Ação", "Aventura"],
        platform: "PC",
        description: "Kratos e Atreus embarcam em uma jornada mítica por todos os Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma guerra profetizada que acabará com tudo. Juntos, pai e filho terão que escolher entre a própria segurança e a segurança dos reinos.",
        features: [
            "Nove Reinos: Viaje por paisagens deslumbrantes e perigosas.",
            "Luta Épica: Combate visceral e envolvente com novos inimigos.",
            "Narrativa Emocionante: Aprofunde-se na relação entre Kratos e Atreus."
        ]
    },
    {
        id: 6,
        name: "Red Dead Redemption 2",
        price: 179.99,
        image: "images/reddead.webp", 
        genres: ["Ação", "Aventura", "Mundo Aberto"],
        platform: "PC",
        description: "Red Dead Redemption 2 é um épico de vida nos Estados Unidos implacável no coração da América. O vasto e atmosférico mundo do jogo também fornecerá a base para uma experiência multiplayer online totalmente nova.",
        features: [
            "Mundo Aberto Vivo: Um Velho Oeste detalhado e interativo.",
            "História Imersiva: Uma narrativa profunda sobre Arthur Morgan e sua gangue.",
            "Atividades Diversas: Cace, pesque, jogue poker e muito mais."
        ]
    },
    {
        id: 7,
        name: "FIFA 25",
        price: 349.99,
        image: "images/fifa.webp", 
        genres: ["Esportes", "Simulação"],
        platform: "PC",
        description: "EA SPORTS FC 25 traz a experiência mais autêntica e imersiva do esporte mais jogado do mundo. Com gráficos aprimorados, jogabilidade ultrarrealista e modos de jogo inovadores, sinta a emoção do futebol como nunca antes. Crie seu time dos sonhos, participe de ligas globais e leve seu clube à glória.",
        features: [
            "Gráficos Ultra-realistas: Detalhes impressionantes de jogadores e estádios.",
            "Modo Carreira Aprimorado: Gerencie seu time e leve-o ao topo.",
            "Ultimate Team: Monte seu elenco de estrelas e compita online."
        ]
    },
    {
        id: 8,
        name: "Grand Theft Auto V",
        price: 89.99,
        image: "images/gta5.webp", 
        genres: ["Ação", "Aventura", "Mundo Aberto"],
        platform: "PC",
        description: "Grand Theft Auto V é um jogo de mundo aberto que se passa em Los Santos, uma cidade fictícia inspirada em Los Angeles. Acompanhe a história de três criminosos distintos que se envolvem com o submundo do crime enquanto buscam seus próprios objetivos. O jogo oferece uma liberdade sem precedentes para explorar, assaltar e interagir com um mundo vibrante e cheio de possibilidades.",
        features: [
            "Três Personagens Jogáveis: Alterne entre Franklin, Michael e Trevor.",
            "Mundo Aberto Gigantesco: Explore Los Santos e Blaine County.",
            "Missões Variadas: Assaltos, perseguições e muita ação."
        ]
    }
];


// Função para criar o HTML de um card de jogo
function createGameCard(game) {
    return `
        <div class="game-card">
            <img src="${game.image}" alt="Capa do jogo ${game.name}" loading="lazy">
            <h3>${game.name}</h3>
            <p class="game-price">R$ ${game.price.toFixed(2).replace('.', ',')}</p>
            <a href="detalhes.html?id=${game.id}" class="btn-primary">Ver Detalhes</a>
        </div>
    `;
}

// Função para carregar jogos em uma grade específica
function loadGames(containerSelector, gamesToLoad, limit = null) {
    const gamesGrid = document.querySelector(containerSelector);
    if (!gamesGrid) return; 

    gamesGrid.innerHTML = ''; 

    const gamesSubset = limit ? gamesToLoad.slice(0, limit) : gamesToLoad;

    gamesSubset.forEach(game => {
        gamesGrid.innerHTML += createGameCard(game);
    });
}

// --- Lógica do Header (Hamburger Menu) ---
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const hamburgerIcon = document.querySelector('.hamburger-menu box-icon');

// Event listener para o menu hambúrguer
if (hamburgerMenu && navLinks && hamburgerIcon) {
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active'); 

        // Lógica para trocar o ícone
        if (navLinks.classList.contains('active')) {
            hamburgerIcon.setAttribute('name', 'x'); 
        } else {
            hamburgerIcon.setAttribute('name', 'menu'); 
        }
    });
}

// --- Lógica Específica da Página (Verifica qual página é) ---

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === '' || currentPage === 'index.html') {
        // Lógica para a Página Inicial
        loadGames('.featured-games .games-grid', games, 6); 
    } else if (currentPage === 'loja.html') {

        // Lógica para a Página da Loja
        const storeGamesGrid = document.querySelector('.main-store-grid .games-grid');
        const applyFiltersBtn = document.querySelector('.apply-filters');
        const genreCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
        const priceRadios = document.querySelectorAll('.filter-group input[type="radio"]');

        let currentFilteredGames = [...games]; 

        // Função para aplicar os filtros
        function applyFilters() {
            let filteredGames = [...games]; 

            // Filtrar por gênero
            const selectedGenres = Array.from(genreCheckboxes)
                                           .filter(checkbox => checkbox.checked)
                                           .map(checkbox => checkbox.id.replace('gen-', ''));

            if (selectedGenres.length > 0) {
                filteredGames = filteredGames.filter(game =>
                    game.genres.some(genre => selectedGenres.includes(genre.toLowerCase()))
                );
            }

            // Filtrar por preço
            const selectedPriceRange = Array.from(priceRadios).find(radio => radio.checked)?.value;

            if (selectedPriceRange && selectedPriceRange !== 'all') {
                const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
                filteredGames = filteredGames.filter(game =>
                    game.price >= minPrice && game.price <= maxPrice
                );
            }

            currentFilteredGames = filteredGames; 
            loadGames('.main-store-grid .games-grid', currentFilteredGames);
        }

        // Carrega todos os jogos na loja inicialmente
        loadGames('.main-store-grid .games-grid', games);

        // Adiciona evento ao botão "Aplicar Filtros"
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', applyFilters);
        }

    } else if (currentPage === 'contato.html') {
        // --- Lógica para a Página de Contato (Validação do Formulário) ---
        const contactForm = document.querySelector('.contact-form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        if (contactForm) {
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault(); 

                // Remove mensagens de erro anteriores
                const errorMessages = document.querySelectorAll('.error-message');
                errorMessages.forEach(msg => msg.remove());

                // Remove classes de erro dos inputs
                const errorInputs = document.querySelectorAll('.form-group input.error, .form-group textarea.error');
                errorInputs.forEach(input => input.classList.remove('error'));

                let isValid = true; 

                // Validação do Nome
                if (nameInput.value.trim() === '') {
                    displayError(nameInput, 'Por favor, digite seu nome.');
                    isValid = false;
                }

                // Validação do E-mail
                if (emailInput.value.trim() === '') {
                    displayError(emailInput, 'Por favor, digite seu e-mail.');
                    isValid = false;
                } else if (!isValidEmail(emailInput.value.trim())) {
                    displayError(emailInput, 'Por favor, digite um e-mail válido (ex: seuemail@dominio.com).');
                    isValid = false;
                }

                // Validação do Assunto
                if (subjectInput.value.trim() === '') {
                    displayError(subjectInput, 'Por favor, digite o assunto.');
                    isValid = false;
                }

                // Validação da Mensagem
                if (messageInput.value.trim() === '') {
                    displayError(messageInput, 'Por favor, digite sua mensagem.');
                    isValid = false;
                }

                // Se o formulário for válido, simula o envio
                if (isValid) {
                    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
                    contactForm.reset(); 
                    
                }
            });
        }

        // Função para exibir mensagens de erro
        function displayError(inputElement, message) {
            const formGroup = inputElement.closest('.form-group');
            const errorMessage = document.createElement('p');
            errorMessage.classList.add('error-message'); 
            errorMessage.textContent = message;
            formGroup.appendChild(errorMessage); 
            inputElement.classList.add('error'); 
        }

        // Função para validar formato de e-mail (mais robusta)
        function isValidEmail(email) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        }
    } else if (currentPage === 'detalhes.html') {

        // --- Lógica para a Página de Detalhes do Jogo ---
        const urlParams = new URLSearchParams(window.location.search);
        const gameId = parseInt(urlParams.get('id')); // Obtém o ID do jogo da URL

        if (gameId) {
            const game = games.find(g => g.id === gameId); // Encontra o jogo pelo ID

            if (game) {
                // Preenche os elementos da página com os dados do jogo
                document.getElementById('game-title').textContent = game.name;
                document.getElementById('game-genres').textContent = `Gêneros: ${game.genres.join(', ')}`;
                document.getElementById('game-platform').textContent = `Plataforma: ${game.platform}`;
                document.getElementById('game-price').textContent = `R$ ${game.price.toFixed(2).replace('.', ',')}`;

                // Popula a descrição
                document.getElementById('game-description').textContent = game.description || 'Descrição não disponível.';

                // Popula as características (features)
                const gameFeaturesUl = document.querySelector('.game-features ul');
                if (gameFeaturesUl && game.features && game.features.length > 0) {
                    gameFeaturesUl.innerHTML = ''; // Limpa a lista existente
                    game.features.forEach(feature => {
                        const li = document.createElement('li');
                        li.innerHTML = `<box-icon name='check-circle'></box-icon>${feature}`;
                        gameFeaturesUl.appendChild(li);
                    });
                } else if (gameFeaturesUl) {
                    gameFeaturesUl.innerHTML = '<li>Nenhuma característica adicional disponível.</li>';
                }

                // Define a imagem de fundo do hero section na página de detalhes
                const gameDetailsHero = document.querySelector('.game-details-hero');
                if (gameDetailsHero && game.image) {
                    gameDetailsHero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${game.image}')`;
                }

                // Lógica para o botão "Adicionar ao Carrinho" (apenas um alert por enquanto)
                const addToCartBtn = document.getElementById('add-to-cart-btn');
                if (addToCartBtn) {
                    addToCartBtn.addEventListener('click', () => {
                        alert(`"${game.name}" adicionado ao carrinho! (Funcionalidade de carrinho não implementada)`);
                    });
                }

            } else {
                // Jogo não encontrado: redireciona ou mostra mensagem de erro
                const gameDetailsContent = document.querySelector('.game-details-content');
                if (gameDetailsContent) {
                    gameDetailsContent.innerHTML = '<h1>Jogo não encontrado!</h1><p>O ID do jogo especificado não corresponde a nenhum jogo em nosso catálogo.</p><a href="loja.html" class="btn-primary">Voltar para a Loja</a>';
                }
                const gameDescriptionSection = document.querySelector('.game-description-section');
                if (gameDescriptionSection) gameDescriptionSection.style.display = 'none'; // Esconde a seção de descrição
            }
        } else {
            // ID não encontrado na URL: redireciona ou mostra mensagem de erro
            const gameDetailsContent = document.querySelector('.game-details-content');
            if (gameDetailsContent) {
                gameDetailsContent.innerHTML = '<h1>Erro!</h1><p>Nenhum ID de jogo especificado na URL.</p><a href="loja.html" class="btn-primary">Voltar para a Loja</a>';
            }
            const gameDescriptionSection = document.querySelector('.game-description-section');
            if (gameDescriptionSection) gameDescriptionSection.style.display = 'none';
        }
    }
});