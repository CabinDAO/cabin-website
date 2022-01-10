import { styled } from "@stitches";
import { Wrapper } from "@cabindao/topo";
import ArrowLink from "@components/ArrowLink";

const Vision = ({
  title,
  description,
  readMoreLink,
}: {
  title: string;
  description: string;
  readMoreLink?: string;
}) => {
  return (
    <Container id="about">
      <Wrapper>
        <Content>
          <h2>{title}</h2>
          <div>
            <p>{description}</p>
            {readMoreLink && (
              <ArrowLink
                external
                target="_blank"
                href={readMoreLink}
                label="Read more"
              />
            )}
          </div>
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
  h2: {
    mt: "$1",
    mb: "$0",
    fontFamily: "$mono",
    fontSize: "$xl",
    fontWeight: 600,
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

export default Vision;
