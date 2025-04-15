import Header from '@/components/header';
import Footer from '@/components/footer';
import { FaGithub } from 'react-icons/fa';

export default function MyProject() {
     return (
          <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
               <Header />

               <main className="flex-grow mt-24 px-6 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

                    <div className="grid gap-8">

                         <div className="bg-white p-6 rounded-xl shadow-md">
                              <h2 className="text-2xl font-semibold mb-2">GourmeApp</h2>
                              <p className="text-gray-700 mb-4">
                                   飲食店の情報を共有するSNSアプリ。Next.js + MariaDB + Reactを使用し、ログイン・投稿・検索などを実装。
                              </p>
                              <a
                                   href="https://github.com/asano1413/gourmeapp"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex items-center gap-2 text-blue-500 hover:underline"
                              >
                                   <FaGithub />
                                   GitHub リポジトリ
                              </a>
                         </div>

                         <div className="bg-white p-6 rounded-xl shadow-md">
                              <h2 className="text-2xl font-semibold mb-2">NoteApp</h2>
                              <p className="text-gray-700 mb-4">
                                   Laravelで作成したメモ + ノートシェアアプリ。ユーザー、検索、メモ、投稿等の機能を実装。
                              </p>
                              <a
                                   href="https://github.com/asano1413/noteapp"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex items-center gap-2 text-blue-500 hover:underline"
                              >
                                   <FaGithub />
                                   GitHub リポジトリ
                              </a>
                         </div>

                    </div>
               </main>

               <Footer />
          </div>
     );
}
