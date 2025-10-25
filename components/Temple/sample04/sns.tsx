import Image from "next/image";
import Link from "next/link";

export default function Sample04SNS() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* MAGAZINE セクション */}
        <div>
          <div className="relative mb-6 text-center">
            <div className="border-t border-black w-full absolute top-1/2 left-0" />
            <h2 className="relative inline-block bg-white px-4 text-sm md:text-base font-bold tracking-widest">
              MAGAZINE
            </h2>
          </div>
          <div className="border p-4 flex gap-4 items-start">
            <div className="w-1/3">
              <Image
                src="/img/vertical/v_img01.jpg"
                alt="Magazine 20XX年XX月号"
                width={150}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base md:text-lg leading-snug mb-1">
                サンプル雑誌<br />20XXXXX月号
              </h3>
              <p className="text-xs md:text-sm font-semibold">2025年10月27日</p>
            </div>
          </div>
        </div>
        {/* Xセクション */}
        <div>
          <div className="relative mb-6 text-center">
            <div className="border-t border-black w-full absolute top-1/2 left-0" />
            <h2 className="relative inline-block bg-white px-4 text-sm md:text-base font-bold tracking-widest">
              X
            </h2>
          </div>
          <div className="border p-4 flex gap-4 items-start">
            <div className="w-1/3">
              <Image
                src="/img/vertical/v_img02.jpg"
                alt="SNS @sample_handle"
                width={150}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base md:text-lg leading-snug mb-1">
                @sample_acout
              </h3>
              <p className="text-xs md:text-sm font-semibold">最新投稿：20XX/XX/XX</p>
            </div>
          </div>
        </div>
        {/* FACEBOOK セクション */}
        <div>
          <div className="relative mb-6 text-center">
            <div className="border-t border-black w-full absolute top-1/2 left-0" />
            <h2 className="relative inline-block bg-white px-4 text-sm md:text-base font-bold tracking-widest">
              FACEBOOK
            </h2>
          </div>
          <div className="border p-4 flex gap-4 items-start">
            <div className="w-1/3">
              <Image
                src="/img/vertical/v_img03.jpg"
                alt="FaceBook acount"
                width={150}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base md:text-lg leading-snug mb-1">
                sample_acout<br />sample_articleXX
              </h3>
              <p className="text-xs md:text-sm font-semibold">20XX/XX/XX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}