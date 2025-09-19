import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 text-balance">Our Story: From Italy to Ireland's Coast</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Three generations ago, our family began crafting authentic Neapolitan pizza in a small village outside
                Naples. When we moved to Ireland's breathtaking west coast, we brought those time-honored recipes with
                us.
              </p>
              <p>
                Today, our mobile pizzeria travels the coastal roads, serving wood-fired pizza made with imported
                Italian flour, San Marzano tomatoes, and the freshest local Irish ingredients we can find.
              </p>
              <p className="text-primary font-semibold">
                Every pizza tells a story of tradition, family, and the wild beauty of the Irish coast.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/traditional-wood-fired-pizza-oven-with-flames.jpg"
                  alt="Wood-fired pizza oven"
                  className="w-full h-48 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img src="/pizza-chef-stretching-dough-with-irish-coastal-lan.jpg" alt="Pizza chef at work" className="w-full h-48 object-cover" />
              </CardContent>
            </Card>
            <Card className="overflow-hidden col-span-2">
              <CardContent className="p-0">
                <img src="/family-photo-in-front-of-pizza-truck-on-irish-coas.jpg" alt="Our family" className="w-full h-32 object-cover" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
