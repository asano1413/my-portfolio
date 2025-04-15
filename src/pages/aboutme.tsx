import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function AboutMe() {
     return (
          <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
               <Header />

               <main className="flex-grow mt-24  px-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
                    <div className="flex flex-col items-center mb-12">
                         <Image
                              src="/profile.jpg"
                              alt="プロフィール画像"
                              width={160}
                              height={160}
                              className="rounded-full shadow-lg"
                         />
                         <h2 className="text-3xl font-bold mt-4">浅野 晃一朗</h2>
                         <p className="text-lg mt-2">Koichiro Asano</p>
                    </div>

                    <section className="mb-12 w-full">
                         <h3 className="text-xl font-bold text-left relative mb-4">
                              My Statetus
                              <span className="block w-28 h-1 bg-blue-400 mt-1 rounded-full" />
                         </h3>

                         <ul className="space-y-1 pl-4 text-gray-700 text-base list-disc">
                              <li>生年月日：2006年2月24日</li>
                              <li>血液型：O型</li>
                              <li>出身：茨城県</li>
                              <li>趣味：ゲーム、筋トレ、トレイルラン、テニス</li>
                              <li>好きなアーティスト：Suchmos , ずっと真夜中でいいのに。 など</li>
                         </ul>
                    </section>

                    <section className="mb-12 w-full">
                         <h3 className="text-xl font-bold text-left relative mb-4">
                              My Skills
                              <span className="block w-21 h-1 bg-blue-400 mt-1 rounded-full" />
                         </h3>

                         <ul className="space-y-1 pl-4 text-gray-700 text-base list-disc">
                              <li>HTML/CSS</li>
                              <li>JavaScript</li>
                              <li>TypeScript</li>
                              <li>React</li>
                              <li>Next.js</li>
                              <li>python</li>
                              <li>Django</li>
                              <li>Java</li>
                              <li>MariaDB</li>
                         </ul>
                    </section>
                    <section className="mb-12 w-full">
                         <h3 className="text-xl font-bold text-left relative mb-4">
                              My Career
                              <span className="block w-25 h-1 bg-blue-400 mt-1 rounded-full" />
                         </h3>
                         <ul className="space-y-3 pl-4 text-gray-700 text-base list-disc">
                              <li>2021-04 : 茨城高等学校に入学 , 同年12月に英検2級合格</li>
                              <li>2022-04 : 自分が興味がある分野を模索するためにS高等学校に編入、ここで初めてプログラミングに興味を持つ</li>
                              <li>2023-02 : プログラミングに初めて触れる（HTML,CSS）</li>
                              <li>2023-07 : システムエンジニアを志し、進学先を水戸情報ITクリエイター専門学校に決める</li>
                              <li>2024-01 : ITパスポートを取得</li>
                              <li>2024-05~ : python , TypeScript , Next.js , MariaDB等を勉強する</li>
                              <li>2026-03 : 水戸情報ITクリエイター専門学校を卒業予定</li>
                         </ul>
                    </section>
               </main>

               <Footer />
          </div>
     );
}
