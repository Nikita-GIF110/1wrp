import type {
  NewsEntity,
  CharactersEntity,
  SocialLinkEntity,
  ServerEntity,
} from "features/home/models";
import type { QuestionEntity } from "features/home/models";
// Profession
import prof1 from "assets/images/home/profession/profession-1.png";
import prof2 from "assets/images/home/profession/profession-2.png";
import prof3 from "assets/images/home/profession/profession-3.png";
import prof4 from "assets/images/home/profession/profession-4.png";
import prof5 from "assets/images/home/profession/profession-5.png";
import prof6 from "assets/images/home/profession/profession-6.png";
import prof7 from "assets/images/home/profession/profession-7.png";
import prof8 from "assets/images/home/profession/profession-8.png";
// Banda
import banda1 from "assets/images/home/profession/Banda-1.png";
import banda2 from "assets/images/home/profession/Banda-2.png";
import banda3 from "assets/images/home/profession/Banda-3.png";
// Mafia
import mafia1 from "assets/images/home/profession/mafia-1.png";
import mafia2 from "assets/images/home/profession/mafia-2.png";
import mafia3 from "assets/images/home/profession/mafia-3.png";
// News
import news1 from "assets/images/home/news-image-1.png"
import news2 from "assets/images/home/news-image-1.png"
import news3 from "assets/images/home/news-image-3.png"
import news4 from "assets/images/home/news-image-2.png"

export const NEWS_LIST: Array<NewsEntity> = [
  {
    isNew: true,
    header: "Обновление системы фракций",
    subHeader: "Представляем вам обновленную систем фракция",
    to: "/",
    image: {
      src: news1,
      alt: "",
      title: "",
    },
  },
  {
    isNew: true,
    header: "Обычная новость",
    subHeader: "Что бы увидеть новые возможности",
    to: "/",
    image: {
      src: news2,
      alt: "",
      title: "",
    },
  },
  {
    isNew: true,
    header: "Обычная новость",
    subHeader: "Что бы увидеть новые возможности",
    to: "/",
    image: {
      src: news3,
      alt: "",
      title: "",
    },
  },
  {
    isNew: true,
    header: "Обычная новость",
    subHeader: "Что бы увидеть новые возможности",
    to: "/",
    image: {
      src: news4,
      alt: "",
      title: "",
    },
  },
];

export const SOCIAL_LINK_LIST: Array<SocialLinkEntity> = [
  {
    to: "/",
    label: "YouTube",
    id: "youTube",
  },
  {
    to: "/",
    label: "Discord",
    id: "discord",
  },
  {
    to: "/",
    label: "Vk",
    id: "vk",
  },
];

export const SERVERS_LIST: Array<ServerEntity> = [
  {
    id: 1,
    name: "сервер 1",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
  {
    id: 2,
    name: "сервер 2",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
  {
    id: 3,
    name: "сервер 3",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
  {
    id: 4,
    name: "сервер 4",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
  {
    id: 5,
    name: "сервер 5",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
  {
    id: 6,
    name: "сервер 6",
    onlineCount: 7457,
    registeredCount: 7457,
    link: "server1.oneroleplay.com:22005",
  },
];

export const CHARACTERS_GOVERNMENT_AGENCIES_LIST: Array<CharactersEntity> = [
  {
    id: 1,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: prof1,
      alt: "",
      title: "",
    },
  },
  {
    id: 2,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: prof2,
      alt: "",
      title: "",
    },
  },
  {
    id: 3,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: prof3,
      alt: "",
      title: "",
    },
  },
  {
    id: 4,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: prof4,
      alt: "",
      title: "",
    },
  },
  {
    id: 5,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: prof5,
      alt: "",
      title: "",
    },
  },
  {
    id: 6,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: prof6,
      alt: "",
      title: "",
    },
  },
  {
    id: 7,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: prof7,
      alt: "",
      title: "",
    },
  },
  {
    id: 8,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: prof8,
      alt: "",
      title: "",
    },
  },
];

export const CHARACTERS_STREER_GROUPS_AGENCIES_LIST: Array<CharactersEntity> = [
  {
    id: 1,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: banda1,
      alt: "",
      title: "",
    },
  },
  {
    id: 1,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: banda2,
      alt: "",
      title: "",
    },
  },
  {
    id: 1,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: banda3,
      alt: "",
      title: "",
    },
  },
];

export const CHARACTERS_MAFIA_AGENCIES_LIST: Array<CharactersEntity> = [
  {
    id: 1,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: mafia1,
      alt: "",
      title: "",
    },
  },
  {
    id: 1,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: mafia2,
      alt: "",
      title: "",
    },
  },
  {
    id: 1,
    name: "Правительство",
    link: "/character/1",
    image: {
      src: mafia3,
      alt: "",
      title: "",
    },
  },
];

export const QUESTIONS: Array<QuestionEntity> = [
  {
    id: 1,
    name: "У меня возник важный вопрос. Ответ тут?",
    description:
      "Семейство коробчатых музыкальных инструментов сильфонного типа, также именуемые как концертные ручные гармоники. К этому семейству относятся баян, концертина, гармонь, бандонеон.",
  },
  {
    id: 2,
    name: "У меня возник важный вопрос. Ответ тут?",
    description:
      "Семейство коробчатых музыкальных инструментов сильфонного типа, также именуемые как концертные ручные гармоники. К этому семейству относятся баян, концертина, гармонь, бандонеон.",
  },
  {
    id: 3,
    name: "У меня возник важный вопрос. Ответ тут?",
    description:
      "Семейство коробчатых музыкальных инструментов сильфонного типа, также именуемые как концертные ручные гармоники. К этому семейству относятся баян, концертина, гармонь, бандонеон.",
  },
  {
    id: 4,
    name: "У меня возник важный вопрос. Ответ тут?",
    description:
      "Семейство коробчатых музыкальных инструментов сильфонного типа, также именуемые как концертные ручные гармоники. К этому семейству относятся баян, концертина, гармонь, бандонеон.",
  },
  {
    id: 5,
    name: "У меня возник важный вопрос. Ответ тут?",
    description:
      "Семейство коробчатых музыкальных инструментов сильфонного типа, также именуемые как концертные ручные гармоники. К этому семейству относятся баян, концертина, гармонь, бандонеон.",
  },
  {
    id: 6,
    name: "У меня возник важный вопрос. Ответ тут?",
    description:
      "Семейство коробчатых музыкальных инструментов сильфонного типа, также именуемые как концертные ручные гармоники. К этому семейству относятся баян, концертина, гармонь, бандонеон.",
  },
];
