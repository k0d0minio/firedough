import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-balance">Part of the Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're proud to be part of Ireland's west coast community, supporting local events and partnering with nearby
            farms and producers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎪</span>
                Local Festivals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Find us at summer festivals, farmers markets, and community celebrations throughout the region.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🚚</span>
                Private Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Book our truck for weddings, corporate events, and private parties. We bring the authentic Italian
                experience to you.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🌱</span>
                Local Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We source our vegetables from O'Brien's Farm and our cheese from the local Dingle Peninsula creamery.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">{"What Our Customers Say"}</h3>
          <blockquote className="text-lg italic mb-4 text-muted-foreground max-w-2xl mx-auto">
            {
              '"The best pizza I\'ve had outside of Italy! The combination of authentic recipes and fresh Irish ingredients is incredible. Plus, eating pizza with that coastal view is unbeatable."'
            }
          </blockquote>
          <cite className="text-primary font-semibold">- Sarah M., Galway</cite>
        </div>
      </div>
    </section>
  )
}
