'use client';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-100 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على أسئلتك والبدء في التخطيط لمشروعك القادم.
            لا تتردد في التواصل معنا اليوم!
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Contact Info */}
          <div className="space-y-6">

            {/* Phone */}
            <a
              href="tel:+201044184087"
              className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md
              hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              <FaPhone className="text-3xl text-blue-600" />
              <div>
                <h4 className="font-semibold text-xl">رقم الهاتف</h4>
                <p className="text-gray-600">+20 1044184087</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201044184087"
              target="_blank"
              className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md
              hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              <FaWhatsapp className="text-3xl text-green-600" />
              <div>
                <h4 className="font-semibold text-xl">واتساب</h4>
                <p className="text-gray-600">+20 1044184087</p>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/Dy4P6hLZKm4tecp58"
              target="_blank"
              className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md
              hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              <FaMapMarkerAlt className="text-3xl text-red-600" />
              <div>
                <h4 className="font-semibold text-xl">الموقع</h4>
                <p className="text-gray-600">القطعة 505، حدائق أكتوبر، الجيزة</p>
              </div>
            </a>

          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6917.3792829024105!2d31.049748908872406!3d29.902042124648283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458539952317d8b%3A0xe3b6b8e68b0036ee!2z2KfZhNiz2YrYp9it2YrYqSDYow!5e0!3m2!1sfr!2seg!4v1761580115796!5m2!1sfr!2seg"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
