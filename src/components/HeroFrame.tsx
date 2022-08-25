import { styled } from "@cabindao/topo";
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Box } from "@cabindao/topo"
import Image from "next/image";
import { Seal } from "@components"

const HeroFrame = ({
  alt = "Image failed to load",
  ...props
}: Parameters<typeof Image>[0]) => {
  return (
    <Frame
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('hero.jpg')",
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}
    >
      <Seal
        css={{
          transform: "scale(0.35)",
          "@md": {
            transform: "scale(0.3)"
          },
        }}
      />
    </Frame>
  );
};

const Frame = styled("div", {
  position: "relative",
  boxShadow: "0 0 0 $sizes$px $colors$sprout",
  lineHeight: "0",
  br: "$2",
  overflow: "hidden",
  bc: "$forest",
  height: "45vh",
  minHeight: 300,
  maxHeight: 400,
  "@md": {
    br: "$3",
    height: "50vh",
    maxHeight: 500,
  },
  "@lg": {
    maxHeight: 600,
  }
});

export default HeroFrame;
