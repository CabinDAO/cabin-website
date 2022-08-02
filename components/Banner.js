import { styled } from "../stitches.config.ts";
import { Text } from "@cabindao/topo";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Box = styled("div", {
  position: "relative",
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
        href="https://creatorcabins.typeform.com/puertorico?utm_source=banner"
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
          {"Build with us IRL in Puerto Rico this September. Learn more here."}
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
      </Link>
      </Link>
 */
