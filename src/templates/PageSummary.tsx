import Link from "next/link"
import { styled, Wrapper, Heading, Text, Box, Button } from "@cabindao/topo";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { slugify } from "../../lib/slugify"

const PageSummary = ({
  title,
  description,
  readMoreLink,
  theme = "light"
}: {
  title: string;
  description: string;
  readMoreLink?: string;
  theme?: "light" | "dark";
}) => {
  return (
    <Container
      css={{
        background: theme === "dark" ? "$forest" : ""
      }}
      id={slugify(title)}
    >
      <Wrapper>
        <Content>
          <Heading
            css={{
              color: theme === "dark" ? "$sand" : ""
            }}
          >{title}</Heading>
          <Box>
            <Text
              css={{
                color: theme === "dark" ? "$sand" : ""
              }}
            >{description}</Text>
            {readMoreLink && (
              <Link href={readMoreLink} passHref>
                <Button as="a" rightIcon={<ArrowRightIcon />} tone={theme === "dark" ? "wheat" : ""} type="link">
                  Read More
                </Button>
              </Link>
            )}
          </Box>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = styled("section", {
  pt: "$10",
  pb: "$20",
  "@md": {
    pt: "$20",
    pb: "$24",
  },
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  px: "$10",
  py: "$8",
  border: "1px solid $sprout",
  br: "$2",
  [`& ${Heading}`]: {
    mt: "$1",
    mb: "$0",
    fontFamily: "$mono",
    lineHeight: 1.6,
    maxWidth: "28rem",
    flex: "1",
  },
  div: {
    flex: "2",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  "@md": {
    flexDirection: "row",
    br: "$3",
    h2: {
      fontSize: "$xxl",
      maxWidth: "40rem",
    },
  },
});

export default PageSummary;
