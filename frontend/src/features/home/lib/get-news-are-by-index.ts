export const getNewsAreByIndex = (index: number): string => {
  switch (index) {
    case 0:
      return "mainNews";
    case 1:
      return "firstNews";
    case 2:
      return "secondNews";
    case 3:
      return "thirdNews";

    default:
      throw new Error("index");
  }
};
