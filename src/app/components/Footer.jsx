import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="w-28">
          <img src="/assets/logo.png" alt="El Shafiq Logo" />
        </div>

        {/* Info */}
        <div className="text-center text-sm">
          <p>© 2025 الشفيق. جميع الحقوق محفوظة.</p>
          <p>تم التطوير بواسطة عبد الرحمن إبراهيم</p>
        </div>

        {/* Contact Buttons */}
        <div className="flex gap-4">

          {/* ✅ WhatsApp */}
          <a
            href="https://wa.me/201044184087"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg font-medium"
          >
            واتساب
          </a>

          {/* ✅ Phone Call */}
          <a
            href="tel:+201044184087"
            className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium"
          >
            اتصال
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
