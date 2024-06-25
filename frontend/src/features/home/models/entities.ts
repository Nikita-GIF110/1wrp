import type { Nullable } from "entities/utils";

export interface NewsEntity {
  isNew: boolean;
  header: string;
  subHeader: string;
  to: string;
  image: {
    src: string;
    alt: string;
    title: string;
  };
}

export interface SocialLinkEntity {
  id: "youTube" | "discord" | "vk";
  to: string;
  label: string;
}

export interface ServerEntity {
  id: number;
  name: string;
  onlineCount: number;
  registeredCount: number;
  link: string;
}

export interface CharactersEntity {
  id: number;
  name: string;
  link: string;
  image: {
    src: string;
    alt: string;
    title: string;
  };
}

export interface QuestionEntity {
  id: number;
  name: string;
  description: string;
}

export interface Store {
  selectedCharacter: Nullable<CharactersEntity>;
  characterDrawerIsOpen: boolean;
}

export interface Actions {
  viewCharacters: (character: CharactersEntity) => void;
  closeCharactersDrawer: () => void;
}
