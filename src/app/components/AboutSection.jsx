export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-gray-100 text-gray-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">عن الشفيق</h2>
        <p className="text-lg max-w-3xl mx-auto opacity-80 leading-relaxed">
          متخصصون في تقديم حلول بناء مبتكرة وموثوقة،
          ملتزمون ببناء مستقبل أفضل لمصر قائم على الجودة والنزاهة والتميز.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto mt-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">رؤيتنا ورسالتنا</h3>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-yellow-600">الرؤية</h4>
            <p className="opacity-80 mt-2 leading-relaxed">
              أن نكون الشركة الرائدة في مجال البناء والتجارة في المنطقة،
              معترف بنا بجودة أعمالنا وابتكارنا والتزامنا بالتنمية المستدامة.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-yellow-600">الرسالة</h4>
            <p className="opacity-80 mt-2 leading-relaxed">
              أن نتجاوز توقعات عملائنا من خلال تنفيذ مشاريع عالية الجودة
              وبتكلفة مناسبة وفي الوقت المحدد. نحافظ على ثقافة الأمان
              والتعاون والتطوير المستمر لضمان شراكات طويلة الأمد
              ونمو المجتمع.
            </p>
          </div>
        </div>

        {/* About Image */}
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img src="/assets/profile.jpg" alt="فريق العمل" className="w-full"/>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto mt-24 px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">قيمنا الأساسية</h3>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <p className="font-semibold">التميز والجودة</p>
            <p className="text-sm opacity-70">معايير لا نساوم عليها في كل تفصيلة.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <p className="font-semibold">العميل أولاً</p>
            <p className="text-sm opacity-70">ثقة، وضوح، وشراكات قوية.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <p className="font-semibold">النزاهة</p>
            <p className="text-sm opacity-70">العدل والشفافية في كل خطوة.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
            <p className="font-semibold">الاستدامة</p>
            <p className="text-sm opacity-70">مستقبل أكثر خضرة ومرونة.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
