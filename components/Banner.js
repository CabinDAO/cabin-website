import { styled, keyframes } from "../stitches.config.ts";
import { Heading, Text } from "@cabindao/topo";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Box = styled("div", {
  position: "relative",
});
const IconContainer = styled("span", {
  svg: {
    height: "$5",
    width: "$5",
    color: "$sand",
  },
});
const marquee = keyframes({
  "0%": { transform: "translate3d(0, 0, 0)" },
  "100%": { transform: "translate3d(-50%, 0, 0)" },
});
const Marquee = styled("div", {
  overflow: "hidden",
  width: "100%",
  color: "$sand",
  fontSize: "$lg",
  fontFamily: "$mono",
  fontWeight: "$600",
  top: "50%",
  position: "absolute",
  transform: "translate3d(0, -50%, 0)",
  zIndex: "$1",
  div: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "inline-block",
    animation: `${marquee} 30s linear infinite`,
  },
  span: {
    display: "inline-block",
    py: "$3",
    mt: "$1",
  },
});

const Banner = () => (
  <Box
    css={{
      backgroundColor: "$forest",
    }}
  >
    <Wrapper>
      <Link
        passHref
        href="https://creators.mirror.xyz/kzkUikiC1GT2PrzH3ymzto5uiiI775kOzfysZ8LSeSE"
      >
        <Text
          mono
          as="a"
          css={{
            display: "flex",
            alignItems: "center",
            color: "$sand",
            py: "$2",
            svg: { height: "$5", width: "$5" },
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {
            "Cabin & Montaia Basecamp Present: Summer in the Sierras. Learn more and book now."
          }
          <ArrowRightIcon />
        </Text>
      </Link>
    </Wrapper>
  </Box>
);

export default Banner;

/*
 *<Box
 *  css={{
 *    backgroundColor: "$forest",
 *    height: "2rem",
 *    position: "absolute",
 *    top: 0,
 *    left: 0,
 *    width: "100%",
 *  }}
 *>
 *  <Link
 *    href="https://creators.mirror.xyz/kzkUikiC1GT2PrzH3ymzto5uiiI775kOzfysZ8LSeSE"
 *    passHref
 *  >
 *    <a target="_blank" rel="noopener noreferrer">
 *      <Marquee>
 *        <div>
 *          <span>
 *            Cabin & Montaia Basecamp Present: "Summer in the Sierras" - In
 *            collaboration with Montaia Basecamp, our “Summer in the Sierras”
 *            is a month-long coliving experience, designed to be a fun way to
 *            spend IRL time with the Cabin community and with some of the
 *            finest Nature in the world.
 *          </span>
 *          <span>
 *            Cabin & Montaia Basecamp Present: "Summer in the Sierras" - In
 *            collaboration with Montaia Basecamp, our “Summer in the Sierras”
 *            is a month-long coliving experience, designed to be a fun way to
 *            spend IRL time with the Cabin community and with some of the
 *            finest Nature in the world.
 *          </span>
 *        </div>
 *      </Marquee>
 *    </a>
 *  </Link>
 *</Box>
 */
