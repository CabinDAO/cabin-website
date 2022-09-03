import Link from "next/link"
import { Flex, Button } from "@cabindao/topo";

export default function CTARibbon({
  href,
  label
}: {
  href: string;
  label: string;
}) {
  return (
    <Flex
      css={{ background: "$forest", padding: "$4 0" }}
      content="center"
      items="center"
    >
      <Link href={href} passHref>
        <Button tone="wheat">{label}</Button>
      </Link>
    </Flex>
  )
}
