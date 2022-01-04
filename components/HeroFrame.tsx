import { styled } from "../stitches.config";
import Image from "next/image";

const HeroFrame = ({
  alt = "Image failed to load",
  ...props
}: Parameters<typeof Image>[0]) => {
  return (
    <Frame>
      <Image
        layout="responsive"
        width={984}
        height={464}
        priority
        alt={alt}
        {...props}
      />
    </Frame>
  );
};

const Frame = styled("div", {
  boxShadow: "0 0 0 $sizes$px $colors$sprout",
  lineHeight: "0",
  br: "$2",
  overflow: "hidden",
  bc: "$forest",
  "@md": {
    br: "$3",
  },
});

export default HeroFrame;
