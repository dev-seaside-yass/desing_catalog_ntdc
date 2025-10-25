"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaSquareYoutube } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { Menu, X } from "lucide-react";
const navigation = [
  { name: "中庭のこだわり", href: "#", label: "Concept" },
  { name: "住まいの実例集", href: "#", label: "Works" },
  { name: "家づくり物語", href: "#", label: "Story" },
  { name: "リフォーム", href: "#", label: "Reform" },
  { name: "展示場情報", href: "#", label: "Exhibition" },
  { name: "会社案内", href: "#", label: "About" },
];

export default function Sample02Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 mr-3">
          <Image
            src="/img/logo_sample.png"
            alt="中庭住宅"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="md:hidden flex-grow flex justify-end items-center">
          {/* Hamburger Button (mobile) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-center text-sm">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="text-gray-800 hover:text-green-700 transition-colors"
              >
                <div>{item.name}</div>
                <div className="text-xs text-gray-500">{item.label}</div>
              </Link>
            </div>
          ))}
        </nav>
      </div>
      {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3 justify-end px-6 pb-4">
          <Link href="https://instagram.com" target="_blank">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white flex items-center space-x-2">
              <GrInstagram className="w-4 h-4" />
              <p>Instagram</p>
            </Button>
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2">
              <FaSquareYoutube className="w-4 h-4" />
              <p>YouTube</p>
            </Button>
          </Link>
          <Link href="/reform">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
              リフォーム
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
              資料請求・お問い合わせ
            </Button>
          </Link>
        </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-3 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-green-700 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <div>{item.name}</div>
                <div className="text-xs text-gray-500">{item.label}</div>
              </Link>
            ))}
          </nav>
          <div className="flex flex-col items-center space-y-3 pb-4">
            <Link href="https://instagram.com" target="_blank">
              <Button className="w-56 bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center space-x-2">
                <GrInstagram className="w-4 h-4" />
                <span>Instagram</span>
              </Button>
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Button className="w-56 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center space-x-2">
                <FaSquareYoutube className="w-4 h-4" />
                <span>YouTube</span>
              </Button>
            </Link>
            <Link href="/reform">
              <Button className="w-56 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
                リフォーム
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="w-56 bg-green-600 hover:bg-green-700 text-white font-semibold">
                資料請求・お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
