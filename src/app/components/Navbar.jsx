"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <nav className="fixed top-0 right-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py--1 px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            className="w-30 h-25"
            alt="El Shafiq Logo"
          />
          <span className="text-xl font-bold text-gray-900 tracking-wide">
            El Shafiq
          </span>
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium" dir="rtl">
          <li><a href="#home" className="hover:text-blue-600">الرئيسية</a></li>
          <li><a href="#about" className="hover:text-blue-600">من نحن</a></li>
          <li><a href="#services" className="hover:text-blue-600">خدماتنا</a></li>
          <li><a href="#approach" className="hover:text-blue-600">منهجنا</a></li>
          <li><a href="#projects" className="hover:text-blue-600">مشاريعنا</a></li>
          <li><a href="#contact" className="hover:text-blue-600">تواصل معنا</a></li>
        </ul>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={handleToggle}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 
        ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col gap-4 py-4 px-6 font-medium" dir="rtl">
          <li><a onClick={handleToggle} href="#home">الرئيسية</a></li>
          <li><a onClick={handleToggle} href="#about">من نحن</a></li>
          <li><a onClick={handleToggle} href="#services">خدماتنا</a></li>
          <li><a onClick={handleToggle} href="#approach">منهجنا</a></li>
          <li><a onClick={handleToggle} href="#projects">مشاريعنا</a></li>
          <li><a onClick={handleToggle} href="#contact">تواصل معنا</a></li>
        </ul>
      </div>
    </nav>
  );
}
