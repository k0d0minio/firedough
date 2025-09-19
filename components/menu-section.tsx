import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const menuItems = [
  {
    name: "Margherita Classica",
    description: "San Marzano tomatoes, fresh mozzarella di bufala, basil, extra virgin olive oil",
    price: "€12",
    image: "/classic-margherita-pizza-with-fresh-basil.jpg",
    tags: ["Vegetarian", "Classic"],
  },
  {
    name: "Atlantic Salmon",
    description: "Smoked Irish salmon, crème fraîche, capers, red onion, fresh dill",
    price: "€18",
    image: "/gourmet-salmon-pizza-with-capers-and-dill.jpg",
    tags: ["Local Catch", "Premium"],
  },
  {
    name: "Wild Mushroom & Truffle",
    description: "Mixed Irish mushrooms, truffle oil, goat cheese, rocket, balsamic glaze",
    price: "€16",
    image: "/wild-mushroom-pizza-with-truffle-oil-and-arugula.jpg",
    tags: ["Vegetarian", "Gourmet"],
  },
  {
    name: "Coastal Pepperoni",
    description: "Spicy pepperoni, mozzarella, roasted peppers, oregano, chili flakes",
    price: "€14",
    image: "/pepperoni-pizza-with-roasted-peppers.jpg",
    tags: ["Spicy", "Popular"],
  },
  {
    name: "Irish Farmhouse",
    description: "Local bacon, Cashel Blue cheese, caramelized onions, walnuts, honey drizzle",
    price: "€17",
    image: "/gourmet-pizza-with-blue-cheese-and-caramelized-oni.jpg",
    tags: ["Local Ingredients", "Unique"],
  },
  {
    name: "Quattro Stagioni",
    description: "Artichokes, mushrooms, ham, olives - representing the four seasons",
    price: "€15",
    image: "/quattro-stagioni-pizza-with-four-sections.jpg",
    tags: ["Traditional", "Hearty"],
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-balance">Our Signature Pizzas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each pizza is hand-stretched and cooked in our wood-fired oven, combining Italian tradition with the finest
            Irish ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {item.price}
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
