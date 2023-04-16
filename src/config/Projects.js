import tikima from "../assets/tikima.png";
import ecommerce from "../assets/ecommerce.png";
import ai from "../assets/ai.png";
import music from "../assets/music.png";
import video from "../assets/video.png";
import hw from "../assets/hm.png";

export const PersonalProjects = [
  {
    BackgroundImage: hw,
    Title: "English Practice App",
    Deploy: "https://inglescompabloth.vercel.app/",
    Code: "https://github.com/pabllot/homework/",
    DescPT:
      "Esse é um projeto que fiz para ajudar meus alunos a praticar o que aprenderam em suas aulas, para cada lição há 9 perguntas que eles devem traduzir de acordo",
    DescEN:
      "That's a project I made in order to help my students practice what they have been learning on their classes, for each lesson there are 9 questions they should translate accordinly.",
    Techs: "ReactJS | Styled-Components | React Router Dom",
  },
  {
    BackgroundImage: video,
    Title: "Video Player app",
    Deploy: "https://next-desafio-video.vercel.app/",
    Code: "https://github.com/pabllot/next-desafio-video",
    DescPT:
      "Esse é o meu projeto favorito até agora. Eu o desenvolvi sozinho para aplicar a uma posição de front-end, aprendi muito com isso. É um aplicativo de player de vídeo cheio de funcionalidades especificadas pelo cliente.",
    DescEN:
      "That's my favorite project so far. I've developed it by myself in order to apply for a frontend position, I've learned so much from it. It's a video player app full of functionalities specified by the client.",
    Techs: "NextJS | ReactJS | Styled-Components",
  },
];
export const TutorialProjects = [
  {
    BackgroundImage: music,
    Title: "Music Player App",
    Deploy: "https://spotifine.netlify.app/",
    Code: "https://github.com/pabllot/music-player",
    DescPT:
      "Neste projeto desenvolvi um aplicativo para escutar música semelhante ao spotify com todas as suas funcionalidades, foi uma ótima experiência e aprendi muito com isso",
    DescEN: "On this project I build a music player app similar to spotify with all its funcionalities, it was a great experience and I learned a lot from it",
    Techs: "ReactJS | Redux | Tailwind",
  },
  {
    BackgroundImage: ecommerce,
    Title: "E-commerce App",
    Deploy: "https://nike-ecommerce-pied.vercel.app/",
    Code: "https://github.com/pabllot/nike-ecommerce",
    DescPT:
      "Esse é um Nike Ecommerce onde implementei o gerenciamento de estado avançado de todo o aplicativo usando React Context API. Práticas recomendadas do Next.js usando Server Side Rendering e integração do Stripe para gerenciar pagamentos.",
    DescEN:
      "That's a Nike Ecommerce where I implemented advanced State Management of the entire application using React Context API. Next.js Best Practices using server-side rendering and integrationn of Stripe to manage payments.",
    Techs: "NextJS | ReactJS | Stripe | Sanity | UseContext",
  },
  {
    BackgroundImage: ai,
    Title: "AI Image Generator",
    Deploy: "https://ai-generator.vercel.app/",
    Code: "https://github.com/pabllot/openAI_server",
    DescPT: "Aplicação integrada com API de IA que cria instantaneamente uma imagem baseado no seu pedido feita com inteligência artificial.",
    DescEN: "Application integrated with an AI API that instanteniously creates an AI image based on your prompt.",
    Techs: "ReactJS | NodeJS | MongoDB | Cloudinary",
  },
  {
    BackgroundImage: tikima,
    Title: "Tik Tok Clone",
    Deploy: "https://tikima.vercel.app/",
    Code: "https://github.com/pabllot/tikima",
    DescPT:
      "Esse é um aplicativo clone do TikTok que inclui Autenticação Google, a capacidade de fazer upload, publicar, compartilhar, comentar e curtir os vídeos; filtragem por categorias e funcionalidades de pesquisa avançada, páginas de perfil, contas sugeridas, design responsivo personalizado e muito mais.",
    DescEN:
      "That's a TikTok clone app that includes Google Auth, the ability to upload, publish, share, comment on, and like the videos; filtering by categories and advanced search functionalities, profile pages, suggested accounts, custom responsive design, and much more.",
    Techs: "NextJS | Typescript | Tailwind | JWT | Sanity | Zustand",
  },
];

export const PersonalProjectsHeader = [
  {
    TitlePT: "Projetos Originais",
    TitleEN: "Original Projects",
    SubtitlePT: "Essa é uma seção especial onde coloco meus projetos originais favoritos.",
    SubtitleEN: "That's a special section where I put some of the projects I made from scratch.",
  },
];
export const TutorialProjectsHeader = [
  {
    TitlePT: "Projetos Tutoriais",
    TitleEN: "Tutorial Projects",
    SubtitlePT: "Projetos onde eu buscava melhorar minhas habilidades e aprender coisas novas.",
    SubtitleEN: "Projects made from tutorials in order to improve my skills.",
  },
];
