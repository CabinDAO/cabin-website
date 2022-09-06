import Image from "next/image"
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Box } from "@cabindao/topo"

export default function ImageCard({ src, alt, height, width, ratio }) {
  return (
    <Box css={{position: "relative", borderRadius: "$2", boxShadow: "0px 12px 50px -24px rgba(0, 0, 0, 0.24)", overflow: "hidden"}}>
      <AspectRatio.Root ratio={ ratio ? ratio : width / height}/>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        height={height}
        width={width}
        />
    </Box>
  )
}
