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

export default function Gallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  let borderVal = "1px solid $sprout"

  return (
    <Flex css={{
      border: borderVal,
      borderRadius: 20,
      overflow: "hidden",
      minHeight: 350,
      cursor: "pointer",
    }}
      onClick={setIsOpen}
    >
      <Box css={{flex: 1, borderRight: borderVal}}>
          <PreviewImage {...images[0]} />
      </Box>
      <Box css={{
        width: "40%",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
      }}>
        <Box css={{ borderRight: borderVal, borderBottom: borderVal}}>
          <PreviewImage {...images[1]} ratio={4/3} />
        </Box>
        <Box>
          <PreviewImage {...images[2]} ratio={4/3} />
        </Box>
        <Box>
          <PreviewImage {...images[3]} ratio={4/3} />
        </Box>
        <Box css={{ borderTop: borderVal, borderLeft: borderVal}}>
          <PreviewImage {...images[4]} ratio={4/3} />
        </Box>
      </Box>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Box css={{width: "100%"}}>
          <Image
            src={images[0].src}
            alt={images[0].alt}
            layout="responsive"
            width={800}
            height={532}
          />
        </Box>

        {
        /*
*{images.map(( image, i) => (
*  <Image
*    key={i}
*    src={image.src}
*    alt={image.alt}
*    layout="fill"
*    objectFit
*  />
*))}
*/
      }
      </Modal>
    </Flex>
  )
}
