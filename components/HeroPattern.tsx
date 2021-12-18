import { styled } from "../stitches.config";

const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",
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
    {Array(height).fill(
      <Row>
        {Array(width).fill(
          <HeroElement>
            <InnerHeroElement />
          </HeroElement>
        )}
      </Row>
    )}
  </>
);

export default HeroPattern;
