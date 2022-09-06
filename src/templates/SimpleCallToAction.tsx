import Link from "next/link";
import { Box, Wrapper, Heading, Button, Flex, Container} from "@cabindao/topo";

export default function SimpleCallToAction( {
    title,
    cta,
    theme = "light"
}: {
    title: string;
    cta?: {
      href: string;
      label: string;
    },
    theme?: "light" | "dark"
  }
) {
  return (
    <Box 
      as="section"
      css={{
        background: theme === "dark" ? "$forest" : "",
        padding: "$12 0",
    }}>
      <Wrapper>
        <Flex css={{
          textAlign: "center",
          border: "1px solid $sprout",
          borderRadius: "$2",
          padding: "$6 $8",
        }} content="center" items="center" direction="column">
          <Box css={{
            "@md": {
              width: "75%"
            }
          }}>
            <Heading css={{
              color: theme === "dark" ? "$sand" : "",
              fontSize: "$xxxl",
              mb: "$12"
            }}>
              {title}
            </Heading>
          </Box>
          {cta && (
            <Link href={cta.href} passHref>
              <Button as="a" tone="wheat">
                {cta.label}
              </Button>
            </Link>
          )}
        </Flex>
      </Wrapper>
    </Box>
  )
}
