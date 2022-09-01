import { styled, Wrapper, Text } from "@cabindao/topo";

const Container = styled("section", {
  pt: "$12",
});

const Header = styled("h1", {
  fontSize: 32,
  lineHeight: "44px",
  color: "$forest",
  fontFamily: "$mono",
  mt: 0,
  mb: 24,
  background: "$sand",
  textAlign: "center",
});

const FeatureRows = styled("div", {
  display: "grid",
  gridAutoRows: "1fr",
  gridGap: "$8",
  marginBottom: "$20",
  "@md": {
    gridAutoRows: "unset",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  "@lg": {
    gridTemplateColumns: "repeat(3, 1fr)"
  }
});

const FeatureCellContainer = styled("div", {
  boxSizing: "border-box",
  flex: "1 1 0px",
  background: "rgb(253,198,123,0.1)",
  borderTop: "4px solid $sprout",
  padding: "32px",
  boxShadow: "0px 4px 0px #00000008;",
});

const FeatureParagraphContent = styled("p", {
  margin: 0,
});

const FeatureCell = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <FeatureCellContainer>
      <Text>
        <h2>{title}</h2>
        <FeatureParagraphContent>{content}</FeatureParagraphContent>
      </Text>
    </FeatureCellContainer>
  );
};

export default function Features(
  {
    features
  }: {
    features: Array<{ title: string; content: string; }>
  }
) {
  return (
    <Container>
      <Wrapper>
        <Header>Core Features</Header>
        <FeatureRows>
          {features.map((feature, i) => (
            <FeatureCell key={i} {...feature} />
          ))}
        </FeatureRows>
      </Wrapper>
    </Container>
  )
}
