import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Learning() {
     return (
          <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
               <Header />

               <main className="flex-grow mt-24 px-6 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-12 text-center">Learning</h1>

                    <section className="mb-12">
                         <h2 className="text-2xl font-semibold mb-4 relative">
                              学んできたこと
                              <span className="block w-12 h-1 bg-green-400 mt-1 rounded-full" />
                         </h2>
                         <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
                              <li>HTML / CSS</li>
                              <li>JavaScript / TypeScript</li>
                              <li>React / Next.js</li>
                              <li>Python / Django</li>
                              <li>Java</li>
                              <li>MariaDB</li>
                         </ul>
                    </section>

                    <section className="mb-12">
                         <h2 className="text-2xl font-semibold mb-4 relative">
                              現在学習中のこと
                              <span className="block w-12 h-1 bg-blue-400 mt-1 rounded-full" />
                         </h2>
                         <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
                              <li>NextAuth.js を使った認証システム</li>
                              <li>マップを使った位置情報サービス（Google Maps API）</li>
                              <li>Laravel での通知機能実装</li>
                              <li>JSP / Tomcat でのサーバーサイド開発</li>
                         </ul>
                    </section>

                    <section className="mb-12">
                         <h2 className="text-2xl font-semibold mb-4 relative">
                              これから学びたいこと
                              <span className="block w-12 h-1 bg-pink-400 mt-1 rounded-full" />
                         </h2>
                         <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
                              <li>CI/CD（GitHub Actionsなど）</li>
                              <li>セキュリティ対策（XSS/CSRF/SQL Injection防止）</li>
                              <li>Docker / コンテナ技術</li>
                              <li>C++ を使ったゲーム開発</li>
                              <li>デザインシステムの構築</li>
                         </ul>
                    </section>
               </main>

               <Footer />
          </div>
     );
}
