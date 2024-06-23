import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import type { QuestionEntity } from "features/home/models";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { Collapse } from "../ui/collapse";
import { Support } from "../ui/support";

interface FaqProps {
  questions: Array<QuestionEntity>;
  header: string;
  description: string;
  linkText: string;
  to: string;
}

export const Faq = ({
  questions = [],
  header,
  description,
  linkText,
  to,
}: FaqProps) => {
  const { isDesktop } = useMediaQuery();

  return (
    <Flex
      padding={isDesktop ? "80px 0" : "0 12px"}
      flexDirection={isDesktop ? "row" : "column"}
      columnGap="44px"
      rowGap="8px"
    >
      <Box width={isDesktop ? "50%" : "100%"}>
        <Support
          header={header}
          description={description}
          to={to}
          linkText={linkText}
        />
      </Box>

      <List width={isDesktop ? "50%" : "100%"}>
        {questions.map((question, index) => (
          <ListItem
            key={question.id}
            marginBottom={questions.length - 1 === index ? "0" : "8px"}
          >
            <Collapse header={question.name}>{question.description}</Collapse>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};
