export default function HomeSection() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-white relative"
      style={{
        backgroundImage: "url('/assets/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay لجعل النص واضح */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* المحتوى فوق الصورة */}
      <div className="relative z-10 text-center px-4" dir="rtl">
        <h1 className="text-5xl font-bold max-w-3xl mx-auto leading-snug">
          نبني التميز بالإبداع والثقة
        </h1>

        <p className="mt-4 text-lg max-w-2xl mx-auto">
          رؤيتك نصنعها بدقة. نحن الأساس لعلامات معمارية تُخلّد في المستقبل.
        </p>

        <div className="flex gap-4 mt-8 justify-center">
          <a href="#about" className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
            اعرف أكثر
          </a>
          <a href="#projects" className="border px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
            مشاريعنا
          </a>
        </div>
      </div>
    </section>
  );
}
