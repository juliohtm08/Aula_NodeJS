let posts = [
    {
        id: "1",
        title: "Entendendo o Padrão MVC: O Guia Definitivo para Iniciantes",
        content:
            "O padrão de arquitetura MVC (Model-View-Controller) é amplamente utilizado no desenvolvimento web para organizar e estruturar aplicações. Neste artigo, explicamos como o MVC separa responsabilidades em três camadas principais, facilitando a manutenção e a escalabilidade dos projetos. Acompanhe exemplos práticos para entender como implementar essa arquitetura no seu próximo projeto.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        title: "Renderizando Páginas Dinâmicas com EJS: Um Guia Passo a Passo",
        content:
            "EJS (Embedded JavaScript) é uma poderosa ferramenta de renderização de templates para aplicações Node.js. Neste artigo, exploramos como configurar EJS em um projeto Express, criar templates dinâmicos e exibir dados do backend na interface do usuário. Veja como simplificar o desenvolvimento de aplicações web dinâmicas com poucos passos.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "3",
        title: "Desenvolvimento Backend",
        content:
            "Express.js é um framework minimalista para Node.js que facilita a criação de servidores web robustos. Neste tutorial, vamos configurar um servidor básico, criar rotas e entender como lidar com requisições e respostas. Ao final, você terá uma aplicação funcional e pronta para ser expandida.",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

// Post { id, title, content, createdAt, updatedAt }

const postModel = {
    getAllPosts() {
        return posts;
    },
    getPostById(id) {
        return posts.find((post) => post.id === id);
    },
    createPost(title, content) {
        const post = {
            id: Date.now().toString(),
            title: title,
            content: content,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        return post;
    },
    savePost(post) {
        // o método unshift() irá retornar pro primeiro os novos posts(no início do array)
        posts.unshift(post);
    },
    updatePost(id, updatedPost) {
        const index = posts.findIndex((post) => post.id === id);

        posts[index] = {
            ...posts[index],
            ...updatedPost,
            updatedAt: new Date(),
        };
    },
    deletePost(id) {
        posts = posts.filter((post) => post.id !== id);
    },
};

module.exports = postModel;
