import { Heading } from "@cabindao/topo"
import { SimpleCallToAction, NeighborhoodPreview, CTARibbon, ImageWall, ItemList } from "@templates"
import galleryImages from "../../content/gallery.json"
import amenities from "../../content/amenities.json"

export default function NeighborhoodDetail() {
  return (
    <>
      {/* Airbnb-style neighborhood hero  */}
      <NeighborhoodPreview />

      {/* Colive micro CTA */}
      <CTARibbon
        href="https://creatorcabins.typeform.com/coliveN0?utm_source=website"
        label="Apply to Colive"
      />

      {/* Lore section */}
      <ImageWall
        title="The Lore of Neighborhood 0"
        description="Neighborhood Zero is the first node in Cabin’s decentralized city. It is Cabin’s home away from home — the place we go back to for retreats, residencies, and build weeks. For the first time, we are opening it up to the wider Cabin network and establishing the first long-term coliving neighborhood in our community."
        images={galleryImages}
      />
      {/* Amenities List */}
      <ItemList
        title="Amenities"
        items={amenities}
      />
      {/* Dark themed call to action section */}
      <SimpleCallToAction
        title="Join us at Neighborhood 0 and become part of the lore"
        cta={{ href: "https://creatorcabins.typeform.com/coliveN0?utm_source=website", label: "Apply to Colive" }}
        theme="dark"
      />
    </>
  )
}

