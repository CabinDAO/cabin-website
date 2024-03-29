import { styled } from "@cabindao/topo";

const Row = styled("div", {
  display: "none",
  "@md": {
    display: "flex",
    justifyContent: "space-between",
  }
});

const HeroElement = styled("div", {
  marginTop: 2.31,
  width: 8,
  height: 4.62,
  backgroundColor: "$sprout",
  position: "relative",
  "&:before": {
    content: "",
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
    position: "absolute",
    top: -2.31,
    borderBottom: "2.31px solid $sprout",
  },
  "&:after": {
    content: "",
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
    position: "absolute",
    bottom: -2.31,
    borderTop: "2.31px solid $sprout",
  },
});

const InnerHeroElement = styled(HeroElement, {
  transform: "scale(0.7,0.7)",
  backgroundColor: "$sand",
  zIndex: 1,
  marginTop: 0,
  "&:before": {
    borderBottomColor: "$sand",
  },
  "&:after": {
    borderTopColor: "$sand",
  },
});

const HeroPattern = ({ width, height }: { width: number; height: number }) => (
  <>
    {Array(height)
      .fill(null)
      .map((_, i) => (
        <Row key={i}>
          {Array(width)
            .fill(null)
            .map((_, j) => (
              <HeroElement key={j}>
                <InnerHeroElement />
              </HeroElement>
            ))}
        </Row>
      ))}
  </>
);

export default HeroPattern;
