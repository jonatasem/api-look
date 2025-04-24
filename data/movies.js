const movies = [
    {
        id: 1,
        title: 'Um Sonho de Liberdade', 
        year: 1994,
        img: 'um-sonho-de-liberdade.jpg',
        rating: 9.3, 
        description: 'Andy Dufresne, um banqueiro, é condenado à prisão perpétua por um crime que não cometeu. Na prisão de Shawshank, ele forma uma amizade com um prisioneiro chamado Red e utiliza sua inteligência e habilidades para sobreviver, enquanto busca uma forma de escapar e provar sua inocência.' ,
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/um-sonho-de-liberdade.mp4'
    },
    {
        id: 2,
        title: 'O Poderoso Chefão',
        year: 1972, 
        img: 'o-poderoso-chefao.jpg',
        rating: 9.2, 
        description: 'A história da família mafiosa Corleone, liderada pelo patriarca Vito Corleone. Quando um ataque à sua vida leva seu filho mais novo, Michael, a se envolver no mundo do crime, ele acaba se tornando o novo líder da família, enfrentando dilemas morais e a luta pelo poder.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/o-poderoso-chefao.mp4'
    },
    {
        id: 3,
        title: 'O Poderoso Chefão – Parte II', 
        year: 1974, 
        img: 'o-poderoso-chefao-parte-2.jpg',
        rating: 9.0, 
        description: 'Essa sequência explora duas linhas do tempo: a ascensão de Michael Corleone como chefe da máfia e o passado de seu pai, Vito Corleone, imigrante italiano que construiu seu império em Nova York. O filme aborda a corrupção, a traição e os custos do poder.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/o-poderoso-chefao-parte-2.mp4'
    },
    {
        id: 4,
        title: 'Batman: O Cavaleiro das Trevas', 
        year: 2008, 
        img: 'batman-o-cavaleiro-das-trevas.jpg',
        rating: 9.0, 
        description: 'Batman enfrenta o Coringa, um vilão anárquico que deseja semear o caos em Gotham City. Enquanto a cidade lida com o aumento do crime, Batman deve decidir até onde está disposto a ir para proteger Gotham e manter sua própria moral.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/batman-o-cavaleiro-das-trevas.mp4'
    },
    {
        id: 5,
        title: '12 Homens e uma Sentença', 
        year: 1957, 
        img: '12-homens-e-uma-sentenca.jpg',
        rating: 8.9, 
        description: 'Um júri delibera sobre o destino de um jovem acusado de assassinato. À medida que um dos jurados questiona a evidência, ele provoca uma série de discussões que expõem preconceitos e dúvidas, levando os outros a reconsiderar seu veredicto.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/12-homens-e-uma-sentenca.mp4'
    },
    {
        id: 6,
        title: 'A Lista de Schindler', 
        year: 1993, 
        img: 'a-lista-de-schindler.jpg',
        rating: 8.9, 
        description: 'Baseado em uma história real, o filme segue Oskar Schindler, um empresário alemão que salva a vida de mais de mil judeus durante o Holocausto, empregando-os em sua fábrica. O filme retrata a brutalidade da guerra e o poder do altruísmo.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/a-lista-de-schindler.mp4'
    },
    {
        id: 7,
        title: 'O Senhor dos Anéis: O Retorno do Rei', 
        year: 2003, 
        img: 'o-senhor-dos-anéis-o-retorno-do-rei.jpg',
        rating: 8.9, 
        description: 'Na conclusão da épica trilogia, Frodo e Sam continuam sua jornada para destruir o Um Anel, enquanto Aragorn luta para unir os reinos livres da Terra Média contra Sauron. O filme aborda temas de amizade, coragem e sacrifício.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/o-senhor-dos-anéis-o-retorno-do-rei.mp4'
    },
    {
        id: 8,
        title: 'O Bom, o Mau e o Feio', 
        year: 1966, 
        img: 'o-bom-o-mau-e-o-feio.jpg',
        rating: 8.8, 
        description: 'Um clássico faroeste que segue três homens em busca de um tesouro escondido durante a Guerra Civil Americana. Cada um tem suas próprias motivações, e alianças e traições se formam ao longo do caminho, culminando em um confronto final.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/o-bom-o-mau-e-o-feio.mp4'
    },
    {
        id: 9,
        title: 'Clube da Luta', 
        year: 1999, 
        img: 'clube-da-luta.jpg',
        rating: 8.8, 
        description: 'Um homem insatisfeito com sua vida se une a um carismático vendedor de sabão para formar um clube de luta clandestino. À medida que o clube cresce, eles se envolvem em atividades cada vez mais radicais, levando a uma crítica à cultura de consumo e à masculinidade.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/clube-da-luta.mp4'
    },
    {
        id: 10,
        title: 'Forrest Gump: O Contador de Histórias', 
        year: 1994, 
        img: 'forrest-gump.jpg',
        rating: 8.8, 
        description: 'A vida de Forrest Gump, um homem com um QI abaixo da média, é narrada enquanto ele se envolve em eventos históricos significativos nos Estados Unidos. Sua inocência e bondade impactam as pessoas ao seu redor, mostrando que o amor e a amizade transcendem as dificuldades.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/forrest-gump.mp4'
    },
    {
        id: 11,
        title: 'O Senhor dos Anéis: A Sociedade do Anel', 
        year: 2001, 
        img: 'o-senhor-dos-anéis-a-sociedade-do-anel.jpg',
        rating: 8.8, 
        description: 'Frodo Bolseiro herda um Anel e, com a ajuda de uma sociedade diversa de aliados, embarca em uma jornada para destruí-lo. Eles enfrentam perigos e desafios enquanto tentam impedir que o mal retorne à Terra Média.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/o-senhor-dos-anéis-a-sociedade-do-anel.mp4'
    },
    {
        id: 12,
        title: 'Star Wars: Episódio V – O Império Contra-Ataca', 
        year: 1980, 
        img: 'star-wars-episodio-v-o-imperio-contra-ataca.jpg',
        rating: 8.7, 
        description: 'Após a destruição da Estrela da Morte, a Rebelião enfrenta o Império Galáctico. Luke Skywalker busca treinamento com o mestre Jedi Yoda, enquanto Han Solo e Leia Organa lutam contra as forças imperiais. O filme é conhecido por suas reviravoltas e o icônico confronto entre Luke e Darth Vader.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/star-wars-episodio-v-o-imperio-contra-ataca.mp4'
    },
    {
        id: 13,
        title: 'O Silêncio dos Inocentes', 
        year: 1991, 
        img: 'o-silencio-dos-inocentes.jpg',
        rating: 8.6, 
        description: 'A agente do FBI Clarice Starling é designada para investigar um serial killer. Para obter informações sobre o assassino que está à solta, ela busca a ajuda do Dr. Hannibal Lecter, um notório psicopata. O filme explora a psicologia do crime e a luta entre o bem e o mal.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/o-silencio-dos-inocentes.mp4'
    },
    {
        id: 14,
        title: 'Interestelar', 
        year: 2014, 
        img: 'interestelar.jpg',
        rating: 8.6, 
        description: 'Em um futuro onde a Terra enfrenta a extinção, um grupo de exploradores viaja através de um buraco de minhoca em busca de um novo lar para a humanidade. O filme explora temas como o amor, o tempo e a sobrevivência, combinando ciência e emoção.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/interestelar.mp4'
    },
    {
        id: 15,
        title: 'Matrix', 
        year: 1999, 
        img: 'matrix.jpg',
        rating: 8.6, 
        description: 'Um hacker chamado Neo descobre que a realidade que conhece é uma simulação criada por máquinas que controlam a humanidade. Ele se une a um grupo de rebeldes para lutar contra as máquinas e descobrir a verdade sobre seu mundo.',
        src: 'https://raw.githubusercontent.com/jonatasem/movies-api/main/matrix.mp4'
    }
];

module.exports = movies;
