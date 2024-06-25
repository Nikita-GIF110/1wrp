import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Store, Actions } from "./entities";
// import { toast, BASE_TOAST_CONFIG } from "shared/ui/toast";

export const useHome = create<Store & Actions>()(
  immer((set) => ({
    selectedCharacter: null,
    characterDrawerIsOpen: false,
    viewCharacters: (selectedCharacter) => {
      set({
        selectedCharacter,
        characterDrawerIsOpen: true,
      });
    },
    closeCharactersDrawer: () => {
      set({
        characterDrawerIsOpen: false,
        selectedCharacter: null,
      });
    },
  }))
);
