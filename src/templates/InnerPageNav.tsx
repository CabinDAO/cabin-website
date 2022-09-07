import { styled, Box, Button } from "@cabindao/topo"
import Link from "next/link"

export default function InnerPageNav({
  ctas
}: {
  ctas: Array<{ label: string; href: string; }>
}) {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        background: "$forest",
        padding: "$4 0",
        margin: "0",
        "a": {
          width: "100%",
          padding: "$4 $6"
        },
        "@md": {
          flexDirection: "row",
          justifyContent: "center",
          "a": {
            width: "unset"
          }
        }
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
    </Box>
  )
}
