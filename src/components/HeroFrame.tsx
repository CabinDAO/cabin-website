import { styled, Box } from "@cabindao/topo";
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Image from "next/image";

const HeroFrame = ({
  alt = "Image failed to load",
  children,
  ...props
}: Parameters<typeof Image>[0]) => {
  return (
    <Frame
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('${props.src}')`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}
    >
      {children}
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
