
import { Product } from "@/types/product";

// Assign images from available placeholders
const imageAssets = [
  "/placeholder.svg",
  "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9", // fruits on wooden plate (used for decor)
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04", // living room with table (furniture)
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901", // orange-white tabby cat (fashion/jewelry, just as placeholder)
];

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Reclaimed Wood Coffee Table",
    description: "Beautiful coffee table handcrafted from reclaimed barn wood. Each piece is unique with its own character and history.",
    price: 299.99,
    category: "Furniture",
    imageUrl: imageAssets[2],
    seller: "EcoWoodworks",
    rating: 4.8,
    inStock: true
  },
  {
    id: "2",
    name: "Denim Patchwork Tote Bag",
    description: "Stylish tote bag made from upcycled denim jeans. Lined with repurposed cotton fabric and featuring a secure inner pocket.",
    price: 59.99,
    category: "Fashion",
    imageUrl: imageAssets[3],
    seller: "ReStitched",
    rating: 4.6,
    inStock: true
  },
  {
    id: "3",
    name: "Bottle Glass Pendant Light",
    description: "Stunning pendant light created from a repurposed wine bottle. Hand-cut and polished to perfection with an Edison bulb included.",
    price: 89.99,
    category: "Decor",
    imageUrl: imageAssets[1],
    seller: "GlassReimagined",
    rating: 4.9,
    inStock: true
  },
  {
    id: "4",
    name: "Record Vinyl Wall Clock",
    description: "Functional wall clock made from a vintage vinyl record. A great gift for music lovers and environmentally conscious individuals.",
    price: 45.99,
    category: "Decor",
    imageUrl: imageAssets[1],
    seller: "VinylRevival",
    rating: 4.7,
    inStock: true
  },
  {
    id: "5",
    name: "Tin Can Planters Set",
    description: "Set of three planters made from upcycled tin cans, hand-painted with eco-friendly paints. Perfect for herbs or small plants.",
    price: 34.99,
    category: "Decor",
    imageUrl: imageAssets[1],
    seller: "GreenGrowStudios",
    rating: 4.5,
    inStock: true
  },
  {
    id: "6",
    name: "Pallet Wood Bookshelf",
    description: "Rustic bookshelf crafted from reclaimed shipping pallets. Sanded smooth and finished with natural oils for a beautiful, durable piece.",
    price: 149.99,
    category: "Furniture",
    imageUrl: imageAssets[2],
    seller: "EcoWoodworks",
    rating: 4.6,
    inStock: true
  },
  {
    id: "7",
    name: "Bicycle Chain Bracelet",
    description: "Edgy bracelet made from repurposed bicycle chain links. Thoroughly cleaned and polished to a subtle shine.",
    price: 29.99,
    category: "Jewelry",
    imageUrl: imageAssets[3],
    seller: "MetalUpcycleCrafts",
    rating: 4.3,
    inStock: true
  },
  {
    id: "8",
    name: "Sail Cloth Messenger Bag",
    description: "Durable messenger bag crafted from decommissioned sailboat sails. Water-resistant and built to last with adjustable straps.",
    price: 79.99,
    category: "Fashion",
    imageUrl: imageAssets[3],
    seller: "SeaChangeGoods",
    rating: 4.8,
    inStock: true
  },
  {
    id: "9",
    name: "Circuit Board Wall Art",
    description: "Fascinating wall art created from obsolete circuit boards and electronic components. A conversation piece with geek appeal.",
    price: 119.99,
    category: "Art",
    imageUrl: imageAssets[1],
    seller: "TechArtLab",
    rating: 4.9,
    inStock: true
  },
  {
    id: "10",
    name: "Wine Barrel Side Table",
    description: "Charming side table made from an authentic oak wine barrel. Features a generous surface area and storage space inside.",
    price: 189.99,
    category: "Furniture",
    imageUrl: imageAssets[2],
    seller: "BarrelWorks",
    rating: 4.7,
    inStock: true
  },
  {
    id: "11",
    name: "License Plate Bird House",
    description: "Quirky bird house constructed from vintage license plates. Weather-resistant and designed to attract small songbirds.",
    price: 39.99,
    category: "Decor",
    imageUrl: imageAssets[1],
    seller: "RoadwayCreations",
    rating: 4.4,
    inStock: true
  },
  {
    id: "12",
    name: "Skateboard Deck Shelf",
    description: "Cool wall shelf made from a repurposed skateboard deck. Comes with mounting hardware and instructions.",
    price: 69.99,
    category: "Decor",
    imageUrl: imageAssets[1],
    seller: "SkateUpcycle",
    rating: 4.6,
    inStock: true
  }
];
