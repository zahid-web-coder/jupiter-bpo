export default function TrustBarSection() {
  return (
    <section className="bg-slate-900 py-8">
      <div className="section-wrapper">
        <div className="text-center">
          <p className="text-slate-400 text-sm tracking-widest uppercase mb-6">
            Trusted by growing businesses across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["ShopEase", "TechNova", "FinServ Corp", "MediCare", "LogiTrack"].map((company) => (
              <span
                key={company}
                className="text-slate-600 font-semibold text-lg tracking-tight opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}