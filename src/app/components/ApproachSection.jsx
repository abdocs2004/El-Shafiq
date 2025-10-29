"use client";

export default function ApproachSection() {
  const steps = [
    {
      title: "أعمال الأساسات",
      desc: "نضع البداية الصحيحة عبر تنفيذ أساسات قوية تضمن متانة المشروع لسنوات طويلة."
    },
    {
      title: "إقامة الهيكل الإنشائي",
      desc: "بُنية قوية باستخدام أحدث تقنيات الخرسانة والفولاذ لضمان السلامة والاستقرار."
    },
    {
      title: "الأعمال الداخلية والخارجية",
      desc: "تشطيبات احترافية تحقق الانسجام بين الجمال والمتانة في كل التفاصيل."
    },
    {
      title: "الفحص النهائي والتسليم",
      desc: "اختبارات دقيقة قبل تسليم المشروع وفق أعلى معايير الجودة."
    },
  ];

  return (
    <section
      id="approach"
      className="py-28 bg-white text-gray-800"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            مراحل تنفيذ المشروع
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نعمل وفق خطوات مدروسة لضمان تنفيذ مشروعك باحترافية وكفاءة عالية.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-r-4 border-yellow-500 pr-10">
          {steps.map((step, i) => (
            <div key={i} className="mb-14 relative">

              {/* الدائرة */}
              <div className="absolute top-1 -right-6 w-10 h-10 bg-yellow-500 text-white 
              rounded-full flex items-center justify-center font-bold shadow-lg">
                {i + 1}
              </div>

              {/* الكارد */}
              <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-xl 
              transition-all duration-300 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
