import { Box } from "@chakra-ui/react";

interface CharactersListHeaderProps {
  header: string;
  color: string;
}

export const CharactersListHeader = ({
  color,
  header,
}: CharactersListHeaderProps) => (
  <Box
    color={color}
    fontSize="38px"
    fontWeight={700}
    lineHeight="90%"
    textTransform="uppercase"
    transform="rotate(-180deg)"
    fontFamily="Halvar Engschrift"
    maxHeight="100%"
    style={{
      writingMode: "vertical-rl",
    }}
  >
    <Box>{header}</Box>
  </Box>
);
