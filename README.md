# 📝 React Blog Project

Um blog moderno e responsivo desenvolvido com React, oferecendo uma experiência completa de criação e consumo de conteúdo. Este projeto demonstra as melhores práticas de desenvolvimento frontend com React, incluindo roteamento, componentes reutilizáveis e design responsivo.

## 🚀 Funcionalidades

### ✨ Principais Recursos

- **📱 Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **🔐 Sistema de Autenticação**: Login e registro de usuários
- **✍️ Criação de Posts**: Interface intuitiva para escrever e publicar artigos
- **📖 Leitura de Posts**: Visualização de posts individuais com layout otimizado
- **👤 Perfil do Usuário**: Configurações pessoais e gerenciamento de conta
- **🧭 Navegação Intuitiva**: Menu superior com links para todas as seções
- **📱 Redes Sociais**: Links para compartilhamento em mídias sociais

### 🎯 Páginas Disponíveis

- **Home (/)**: Página inicial com lista de posts em destaque
- **Login (/login)**: Autenticação de usuários existentes
- **Registro (/register)**: Cadastro de novos usuários
- **Escrever (/write)**: Criação e publicação de novos posts
- **Configurações (/settings)**: Gerenciamento do perfil do usuário
- **Post Individual (/post/:id)**: Visualização completa de um post específico

## 🏗️ Estrutura do Projeto

```
blog-project/
├── public/
│   ├── index.html          # Template HTML principal
│   └── favicon.ico         # Ícone da aplicação
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── header/         # Cabeçalho da página
│   │   │   ├── Header.jsx
│   │   │   └── header.css
│   │   ├── topBar/         # Barra de navegação superior
│   │   │   ├── TopBar.jsx
│   │   │   └── topBar.css
│   │   ├── sidebar/        # Barra lateral com informações
│   │   │   ├── Sidebar.jsx
│   │   │   └── sidebar.css
│   │   ├── singlePost/     # Componente de post individual
│   │   │   ├── SinglePost.jsx
│   │   │   └── singlePost.css
│   │   ├── write/          # Formulário de criação de posts
│   │   │   ├── Write.jsx
│   │   │   └── write.css
│   │   └── post/           # Componente de preview de post
│   │       ├── Post.jsx
│   │       └── post.css
│   ├── pages/              # Páginas da aplicação
│   │   ├── home/           # Página inicial
│   │   │   ├── Home.jsx
│   │   │   └── home.css
│   │   ├── login/          # Página de login
│   │   │   ├── Login.jsx
│   │   │   └── login.css
│   │   ├── register/       # Página de registro
│   │   │   ├── Register.jsx
│   │   │   └── register.css
│   │   ├── settings/       # Página de configurações
│   │   │   ├── Settings.jsx
│   │   │   └── settings.css
│   │   ├── single/         # Página de post único
│   │   │   ├── Single.jsx
│   │   │   └── single.css
│   │   └── posts/          # Lista de posts
│   │       ├── Posts.jsx
│   │       └── posts.css
│   ├── App.js              # Componente principal da aplicação
│   ├── App.css             # Estilos globais
│   └── index.js            # Ponto de entrada da aplicação
├── package.json            # Dependências e scripts do projeto
├── README.md               # Esta documentação
└── .gitignore             # Arquivos ignorados pelo Git
```

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19.2.5**: Biblioteca JavaScript para construção de interfaces
- **React Router DOM 7.15.1**: Roteamento para navegação SPA
- **React DOM 19.2.5**: Renderização do React no DOM

### Desenvolvimento e Testes

- **Create React App**: Ferramenta de build e desenvolvimento
- **Testing Library**: Suite de testes para React
- **Jest**: Framework de testes JavaScript
- **ESLint**: Linting e formatação de código

### Estilos e UI

- **CSS Modules**: Estilos componentizados
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia personalizada

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** (gerenciadores de pacotes)
- **Git** (para controle de versão)

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/Ana-Freitas-Ruas/react-blog-project.git
cd react-blog-project
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto em modo de desenvolvimento

```bash
npm start
# ou
yarn start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### 4. Build para produção

```bash
npm run build
# ou
yarn build
```

## 🧪 Testes

### Executar todos os testes

```bash
npm test
# ou
yarn test
```

### Executar testes em modo watch

```bash
npm test -- --watchAll=false
```

### Executar testes com coverage

```bash
npm test -- --coverage
```

## 🎨 Personalização

### Estilos

Cada componente possui seu próprio arquivo CSS localizado na mesma pasta. Para personalizar:

1. Localize o arquivo `.css` do componente desejado
2. Modifique as classes CSS conforme necessário
3. As mudanças serão aplicadas automaticamente com hot reload

### Componentes

- **Header**: Personalize o título e subtítulo do blog
- **TopBar**: Adicione ou remova links de navegação
- **Sidebar**: Modifique as categorias e informações do autor
- **Posts**: Ajuste o layout da lista de posts

## 🔧 Scripts Disponíveis

| Comando         | Descrição                                   |
| --------------- | ------------------------------------------- |
| `npm start`     | Inicia o servidor de desenvolvimento        |
| `npm run build` | Cria build otimizado para produção          |
| `npm test`      | Executa a suíte de testes                   |
| `npm run eject` | Remove dependências de build (irreversível) |

## 🌐 Deploy

### Netlify

1. Execute `npm run build`
2. Faça upload da pasta `build/` para o Netlify
3. Configure o domínio (opcional)

### Vercel

1. Conecte seu repositório no Vercel
2. Configure o comando de build como `npm run build`
3. Deploy automático será executado

### GitHub Pages

1. Instale `gh-pages`: `npm install --save-dev gh-pages`
2. Adicione ao `package.json`:
   ```json
   "homepage": "https://seu-usuario.github.io/react-blog-project",
   "scripts": {
     "deploy": "gh-pages -d build"
   }
   ```
3. Execute `npm run deploy`

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Adicione testes para novas funcionalidades
- Siga as convenções de nomenclatura existentes
- Atualize a documentação quando necessário

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autor

**Ana Ruas**

- Email: anaruas.professional@outlook.com
- GitHub: [@Ana-Freitas-Ruas](https://github.com/Ana-Freitas-Ruas)

## 🙏 Agradecimentos

- [Create React App](https://github.com/facebook/create-react-app) - Ferramenta de build
- [React Router](https://reactrouter.com/) - Roteamento SPA
- [Pexels](https://www.pexels.com/) - Imagens de exemplo
- [Font Awesome](https://fontawesome.com/) - Ícones
- [Lama Dev](https://www.youtube.com/@LlamaDev) - Tutorial em vídeo que serviu como base para este projeto

---

⭐ **Dê uma estrela se este projeto te ajudou!**
