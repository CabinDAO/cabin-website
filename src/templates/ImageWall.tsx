import { Container, Box, Heading, Text } from "@cabindao/topo";
import { Wrapper } from "@components";
import Gallery from "react-photo-gallery";
import Image from "next/image"

export default function ImageWall({
  title,
  description,
  images
}: {
  title?: string;
  description?: string;
  images: Array<{ src: string; alt: string; width: number; height: number; }>
}) {

  return (
    <Wrapper>
      <Box css={{ py: "$10" }}>
        {(title || description) &&
          <Box css={{ mb: "$10" }}>
            {title && <Heading css={{ fontSize: "$xxl" }}>{title}</Heading>}
            {description &&
              <Text css={{
                "@lg": {
                  width: "75%",
                  maxWidth: 800
                }
              }}>{description}</Text>
            }
          </Box>
        }
        <Box>
          <Gallery photos={images.slice(0, 9)} />
        </Box>
      </Box>
    </Wrapper>
  )
}
