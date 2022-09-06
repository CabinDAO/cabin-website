import { useState } from "react"
import Image from "next/image"
import { styled, Box, Flex, Grid } from "@cabindao/topo"
import { Modal } from "@components"
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

const PreviewImage = function({src, alt, ratio}) {
  return (
    <Box css={{ position: "relative", height: "100%", width: "100%" }}>
      {ratio && (
        <AspectRatio.Root ratio={ratio}/>
      )}
      <Image
        src={src}
        alt={alt}
        layout="fill"
        height={150}
      />
    </Box>
  )
}

const OutlinedBox = styled(Box, {
  border: "1px solid $sprout"
})

export default function PreviewGallery({ images, encroach }) {
  let borderVal = "1px solid $sprout"

  return (
    <OutlinedBox css={{
      display: "grid",
      gridTemplateRows: "repeat(4, 1fr)",
      gridTemplateColumns: "repeat(4, 1fr)",
      borderRadius: 20,
      overflow: "hidden",
      marginTop: encroach ? "-$20" : "",
      "@lg": {
        gridTemplateRows: "repeat(2, 1fr)"
      },
      [`& ${Box}:first-of-type`]: {
        gridColumn: "1 / span 4",
        gridRow: "1 / span 3",
        "@md": {
          gridColumn: "1 / span 3",
          gridRow: "1 / span 4"
        },
        "@lg": {
          gridColumn: "1 / span 2",
          gridRow: "1 / span 2"
        }
      }
    }}
    >
        <OutlinedBox css={{}}>
            <PreviewImage {...images[0]} />
        </OutlinedBox>
        <OutlinedBox css={{}}>
          <PreviewImage {...images[1]} ratio={4/3} />
        </OutlinedBox>
        <OutlinedBox>
          <PreviewImage {...images[2]} ratio={4/3} />
        </OutlinedBox>
        <OutlinedBox>
          <PreviewImage {...images[3]} ratio={4/3} />
        </OutlinedBox>
        <OutlinedBox css={{}}>
          <PreviewImage {...images[4]} ratio={4/3} />
        </OutlinedBox>
    </OutlinedBox>
  )
}
