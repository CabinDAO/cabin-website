import { styled, Flex, Button } from "@cabindao/topo"
import Link from "next/link"

export default function InnerPageNav({ ctas }) {
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
      {ctas.map(( cta, i) => (
        <Link href={cta.href} key={i} passHref><Button as="a" tone="wheat" type="link" css={{ mx: "$8" }}>{ cta.text }</Button></Link>
      ))}
    </Flex>
  )
}
