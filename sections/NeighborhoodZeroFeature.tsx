import { FeaturedNeighborhood } from "@templates"

export default function NeighborhoodZeroFeature({ encroach }: {
  encroach?: boolean;
}) {
  return (
    <FeaturedNeighborhood
      neighborhood={{
        image: "/node.jpg",
        title: "Neighborhood 0",
        subtitle: "Cabin in the Texas Hill Country",
        description: "28-acres of private land in the Texas Hill Country about 45 minutes outside of Austin. We are located minutes away from Pedernales Falls State Park and have a seasonal creek, wildlife, and amazing stargazing on site.",
        cta: {
          href: "neighborhoods/neighborhood-zero",
          label: "Explore the cabins"
        }
      }}
      encroach={encroach}
    />
  )
}
