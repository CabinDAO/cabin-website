import Link from "next/link"
import { Box, Heading, Text, Button } from "@cabindao/topo"
import { ImageCard } from "@components"
import { ArrowRightIcon, } from "@radix-ui/react-icons";

export default function NeighborhoodDetail({
  image,
  title,
  description,
  cta
}: {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  },
  title: string;
  description: string,
  cta?: {
    href: string;
    label: string;
  }
}) {
  return (
    <Box>
      <ImageCard {...image} ratio={16 / 9} />
      <Heading css={{ fontSize: "$xxxl", mt: "$12", mb: "$8" }}>{title}</Heading>
      <Text css={{ fontSize: "$lg", fontWeight: "$light", mb: "$8" }}>{description}</Text>
      {cta && (
        <Link passHref href={cta?.label}>
          <Button type="link" leftIcon={<ArrowRightIcon />}>
            {cta?.label}
          </Button>
        </Link>
      )}
    </Box>
  )
}
