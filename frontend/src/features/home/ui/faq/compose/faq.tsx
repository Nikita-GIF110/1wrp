import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import type { QuestionEntity } from "features/home/models";
import { useMediaQuery } from "shared/lib/useMediaQuery";
import { useTranslate } from "shared/lib/useTranslate";
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
  const translate = useTranslate();

  return (
    <Flex
      padding={{ base: "", md: "0 12px", xl: "80px 0" }}
      flexDirection={{ base: "column", xl: "row" }}
      columnGap="44px"
      rowGap="8px"
    >
      <Box width={{ base: "100%", xl: "50%" }}>
        <Support
          header={header}
          description={description}
          to={to}
          linkText={linkText}
        />
      </Box>

      <List
        width={{ base: "100%", xl: "50%" }}
        padding={{ base: "0 24px", md: 0 }}
      >
        {questions.map((question, index) => (
          <ListItem
            key={question.id}
            marginBottom={questions.length - 1 === index ? "0" : "8px"}
          >
            <Collapse
              header={translate(question.name as "lending.faq_question_title")}
              size={isDesktop ? "md" : "sm"}
            >
              {translate(
                question.description as "lending.faq_question_description"
              )}
            </Collapse>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};
