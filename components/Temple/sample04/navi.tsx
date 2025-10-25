"use client";
import { useState } from "react";;
import Link from "next/link";

export default function Sample04Navi() {
  const list01 = [
    { title: "デザイン検索", link: "#" },
    { title: "インタビュー", link: "#" },
    { title: "レポート", link: "#" },
    { title: "インフォメーション", link: "#" },
    { title: "ショールーム", link: "#" },
    { title: "サンプルシンプルプラン", link: "#" },
  ];

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <>
      <nav className="flex flex-col md:flex-row border-t md:border-t-0 w-full md:w-auto">
        {/* ===== ISSUES ドロップダウン ===== */}
        <div
          className={`relative flex-1 md:w-80 text-center ${
            openMenu === "issues" ? "bg-yellow-300" : "hover:bg-yellow-300"
          } group`}
        >
          {/* メインボタン */}
          <button
            className="w-full py-4 cursor-pointer"
            onClick={() => toggleMenu("issues")}
          >
            <p className="font-bold uppercase text-lg">ISSUES</p>
            <p className="text-sm font-normal">ドロップダウンメニュー１</p>
          </button>
          {/* ドロップダウンメニュー */}
          <ul
            className={`
              absolute left-0 top-full w-full bg-gray-100 text-left px-6 py-4 space-y-3
              font-bold text-sm md:text-base shadow-md z-50
              transition-opacity duration-200
              ${openMenu === "issues" ? "opacity-100 visible" : "opacity-0 invisible"}
              md:group-hover:opacity-100 md:group-hover:visible
            `}
          >
            {list01.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="block hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* ===== PRODUCTS ドロップダウン ===== */}
        <div
          className={`relative flex-1 md:w-80 text-center border-t md:border-t-0 md:border-l border-gray-300 ${
            openMenu === "products" ? "bg-sky-300" : "hover:bg-sky-300"
          } group`}
        >
          {/* メインボタン */}
          <button
            className="w-full py-4 cursor-pointer"
            onClick={() => toggleMenu("products")}
          >
            <p className="font-bold uppercase text-lg">PRODUCTS</p>
            <p className="text-sm font-normal">ドロップダウンメニュー２</p>
          </button>
          {/* ドロップダウンメニュー */}
          <ul
            className={`
              absolute left-0 top-full w-full bg-gray-100 text-left px-6 py-4 space-y-3
              font-bold text-sm md:text-base shadow-md z-50
              transition-opacity duration-200
              ${openMenu === "products" ? "opacity-100 visible" : "opacity-0 invisible"}
              md:group-hover:opacity-100 md:group-hover:visible
            `}
          >
            {list01.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="block hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}