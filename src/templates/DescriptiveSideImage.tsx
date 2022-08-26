// TODO: add optional CTA
import Image from "next/image";
import Link from "next/link"
import { styled, Wrapper, Button, Heading, Text } from "@cabindao/topo";
import { slugify } from "../../lib/slugify"

type ImageSrc = Parameters<typeof Image>[0]["src"];

const DescriptiveSideImage = ({
  title,
  content,
  bgImage,
  bgImageAlt = "No Image Found",
  featureImage,
  featureImageAlt = "No Image Found",
  cta,
  reversed = false,
}: {
  title: React.ReactNode;
  content: React.ReactNode;
  bgImage?: ImageSrc;
  bgImageAlt?: string;
  featureImage: ImageSrc;
  featureImageAlt?: string;
  reversed?: boolean;
  cta?: { href: string, label: string };
}) => {
  return (
    <Container reversed={reversed} id={slugify(title)}>
      {bgImage && (
        <Image
          src={bgImage}
          alt={bgImageAlt}
          layout="fill"
          objectFit="cover"
          quality={50}
        />
      )}
      <Wrapper>
        <Content reversed={reversed}>
          <ContentText reversed={reversed}>
            <Heading as="h2">{title}</Heading>
            <Text weight="light" css={{ mb: "$8" }}>{content}</Text>
            {cta && (
              <Link href={cta?.href} passHref>
                <Button as="a" tone="wheat">{cta?.label}</Button>
              </Link>
            )}
          </ContentText>
          <Frame>
            <Image
              src={featureImage}
              alt={featureImageAlt}
              layout="responsive"
              width={492}
              height={327}
            />
          </Frame>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = styled("section", {
  position: "relative",
  variants: {
    reversed: {
      true: {
        bc: "#1D2B2A",
      },
      false: {
        bc: "$forest",
      },
    },
  },
  "& > span > img": {
    filter: "grayscale(0.75) contrast(0.75) brightness(0.25)",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "$forest",
    opacity: "0.50",
  },
});

const Content = styled("div", {
  position: "relative",
  zIndex: "$1",
  color: "$sand",
  py: "$20",
  display: "flex",
  flexDirection: "column-reverse",
  h2: {
    fontSize: "$xxl",
    fontFamily: "$mono",
    fontWeight: "$600",
  },
  p: {
    lineHeight: 1.6,
  },
  "@md": {
    py: "$32",
    flexDirection: "row",
    alignItems: "center",
    "> div": {
      width: "50%",
    },
    h2: {
      fontSize: "$xxxl",
    },
  },
  variants: {
    reversed: {
      true: {
        "@md": {
          flexDirection: "row-reverse",
        },
      },
    },
  },
});

const ContentText = styled("div", {
  mt: "$12",
  textAlign: "center",
  "@md": {
    mt: "0",
    pr: "$20",
    textAlign: "start",
  },
  variants: {
    reversed: {
      true: {
        "@md": {
          pr: "0",
          pl: "$20",
        },
      },
    },
  },
});

const Frame = styled("div", {
  br: "$2",
  boxShadow: "0 0 0 $sizes$px $colors$sprout",
  overflow: "hidden",
  lineHeight: "0",
  bc: "$forest",
  "@md": {
    br: "$3",
  },
});

export default DescriptiveSideImage;
