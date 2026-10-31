// Off-season holding page. Replaces the full landing page in app/page.tsx until the
// 2027 season; the original section components are left in components/ for re-use.
// Contact details below were confirmed by Jamie (2026-10-31). The old footer phone
// number was a placeholder and is deliberately not shown.

const EMAIL = "firedough@gmail.com"
const INSTAGRAM_HANDLE = "firedoughstrandhill"

export function UnderConstruction() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Same background image as the previous hero, darkened for legible text */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/pizza-truck-parked-on-scenic-irish-coastal-cliff-o.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">🍕</span>
          </div>
          <span className="font-bold text-2xl">Firedough Pizza</span>
        </div>

        <p className="uppercase tracking-widest text-sm text-white/70 mb-4">Site under construction</p>

        <h1 className="text-4xl md:text-6xl font-black mb-6 text-balance">
          Back for a new season at Easter 2027
        </h1>

        <p className="text-lg md:text-xl mb-10 text-pretty leading-relaxed text-white/90">
          The Firedough pizza truck is resting up for the winter. Expect to see us up and running again around
          Strandhill, Co. Sligo, from Easter 2027.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center text-lg">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-md bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 transition-colors"
          >
            ✉️ {EMAIL}
          </a>
          <a
            href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white hover:bg-white hover:text-foreground px-6 py-3 transition-colors"
          >
            📸 @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  )
}
