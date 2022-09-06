import { styled, Flex, Button } from "@cabindao/topo"
import Link from "next/link"

export default function InnerPageNav({
  ctas
}: {
  ctas: Array<{ label: string; href: string; }>
}) {
  return (
    <Flex
      content="center"
      items="center"
      css={{
        background: "$forest",
        padding: "$4 0",
        margin: "0"
      }}
    >
      {ctas.map((cta, i) => (
        <Link
          key={i}
          href={cta.href}
          passHref
        >
          <Button as="a" tone="wheat" type="link">{cta.label}</Button>
        </Link>
      ))}
    </Flex>
  )
}
