import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const skills = [
    'HTML/CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'Django',
    'PHP',
    'Laravel',
    'Java',
    'MariaDB',
  ];

  const career = [
    '2021 - 茨城高等学校入学、ここでは英語などの勉強に注力した',
    '2022 - S高等学校に編入、プログラミングに興味を持ち始める',
    '2023 - 初めてプログラミングに触れる',
    '2024 - python,java,typescriptなどを学習し、Webアプリに対する理解を深める',
    '2025 - 個人でWebアプリを開発できるようになる',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />

      <main className="flex-grow mt-24 flex flex-col items-center px-6 text-center">

        <div className="flex flex-col items-center mb-12">
          <Image
            src="/profile.jpg"
            alt="プロフィール画像"
            width={160}
            height={160}
            className="rounded-full shadow-lg"
          />
          <h2 className="text-3xl font-bold mt-4">浅野 晃一朗</h2>
        </div>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition text-sm font-medium border border-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="mb-12">
          <Link
            href="/learning"
            className="inline-block px-6 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
          >
            details
          </Link>
        </div>

        <section className="max-w-xl text-left">
          <h3 className="text-2xl font-semibold mb-4 text-center">Career</h3>
          <ul className="space-y-3">
            {career.map((item, index) => (
              <li
                key={index}
                className="border-l-4 border-gray-400 pl-4 text-sm text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
