
import { Link } from "react-router-dom";

const categories = [
  {
    id: "furniture",
    name: "Furniture",
    description: "Beautifully restored and reimagined furniture pieces",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Sustainable fashion from upcycled materials",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "decor",
    name: "Home Decor",
    description: "Unique decor items crafted from repurposed materials",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "jewelry",
    name: "Jewelry",
    description: "Handcrafted accessories from reclaimed elements",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "art",
    name: "Art",
    description: "Creative artwork made from recycled components",
    imageUrl: "/placeholder.svg",
  },
];

const CategoryShowcase = () => {
  return (
    <section className="py-10 bg-portflex-light">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-portflex-purple text-center mb-8">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/category/${category.id}`} 
              key={category.id}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-portflex-purple mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
