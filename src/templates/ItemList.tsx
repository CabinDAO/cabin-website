import {Wrapper, Box, Heading, Text} from "@cabindao/topo"

export default function ItemList({
  title,
  items
}: {
    title: string;
    items: Array<string>;
  }) {
  return (
    <Wrapper>
      <Box css={{pb: "$10"}}>
        <Heading css={{ fontSize: "$xxl" }}>{title}</Heading>
        <Text css={{
          "ul": {
            columnCount: 1,
            columnGap: "$12",
            "@md": {
              columnCount: 2
            },
            "@lg": {
              columnCount: 3
            },

          }
        }}>
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Text>
      </Box>
    </Wrapper>
  )
}

