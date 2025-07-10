import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaReact, FaLaravel, FaCode, FaEnvelope } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMariadb, SiFlutter } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function MyProject() {
     const projects = [
          {
               id: 1,
               title: 'GourmeApp',
               subtitle: '飲食店情報共有SNS',
               description: '飲食店の情報を共有するSNSアプリ。ユーザーがお気に入りの店舗を投稿し、他のユーザーと情報を共有できるプラットフォームです。',
               features: [
                    'ユーザー認証・登録機能',
                    '店舗情報の投稿・編集',
                    '画像アップロード機能',
                    '検索・フィルタリング機能',
                    'いいね・コメント機能',
                    'レスポンシブデザイン'
               ],
               technologies: [
                    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
                    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
                    { name: 'React', icon: FaReact, color: 'text-cyan-500' },
                    { name: 'MariaDB', icon: SiMariadb, color: 'text-orange-500' }
               ],
               github: 'https://github.com/asano1413/gourmeapp',
               demo: '#',
               image: '/react.png',
               status: 'completed'
          },
          {
               id: 2,
               title: 'NoteApp',
               subtitle: 'メモ・ノートシェアアプリ',
               description: 'Laravelで作成したメモ + ノートシェアアプリ。ユーザーがメモを作成し、他のユーザーと共有できる機能を提供します。',
               features: [
                    'ユーザー管理システム',
                    'メモ作成・編集機能',
                    'ノートの共有機能',
                    '検索機能',
                    'カテゴリ分類',
                    'リアルタイム通知'
               ],
               technologies: [
                    { name: 'Laravel', icon: FaLaravel, color: 'text-red-500' },
                    { name: 'PHP', icon: FaCode, color: 'text-purple-500' },
                    { name: 'MariaDB', icon: SiMariadb, color: 'text-orange-500' },
                    { name: 'JavaScript', icon: FaCode, color: 'text-yellow-500' }
               ],
               github: 'https://github.com/asano1413/noteapp',
               demo: '#',
               image: '/laravel.png',
               status: 'completed'
          },
          {
               id: 3,
               title: 'Portfolio Site',
               subtitle: '個人ポートフォリオサイト',
               description: 'Next.jsとTypeScriptを使用して作成した個人ポートフォリオサイト。モダンなデザインとアニメーションを実装しています。',
               features: [
                    'レスポンシブデザイン',
                    'ダークモード対応',
                    'スムーズアニメーション',
                    'SEO最適化',
                    'モダンUI/UX',
                    'パフォーマンス最適化'
               ],
               technologies: [
                    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
                    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
                    { name: 'Tailwind CSS', icon: FaCode, color: 'text-cyan-500' },
                    { name: 'Framer Motion', icon: FaCode, color: 'text-purple-500' }
               ],
               github: 'https://github.com/asano1413/aboutme',
               demo: '#',
               image: '/nextjs.png',
               status: 'completed'
          },
          {
               id: 4,
               title: 'ToDoApp',
               subtitle: 'ToDoアプリ',
               description: 'Flutterで作成したToDoアプリ。ユーザーがToDoを作成し、他のユーザーと共有できる機能を提供します。',
               features: [
                    'ユーザー認証・登録機能',
                    'ToDoの作成・編集機能',
                    'ToDoの共有機能',
                    '検索機能',
                    'カテゴリ分類(実装予定)',
                    'リアルタイム通知(実装予定)'
               ],
               technologies: [
                    { name: 'Flutter', icon: SiFlutter, color: 'text-blue-500' },
                    { name: 'Dart', icon: FaCode, color: 'text-blue-600' },
                    { name: 'Firebase', icon: FaCode, color: 'text-orange-500' }
               ],
               github: 'https://github.com/asano1413/todoapp',
               demo: '#',
               image: '/flutter-logo.png',
               status: 'completed'
          }
     ];

     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.3
               }
          }
     };

     const itemVariants = {
          hidden: { opacity: 0, y: 50 },
          visible: {
               opacity: 1,
               y: 0,
               transition: {
                    duration: 0.6
               }
          }
     };

     return (
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
               <Header />

               <main className="flex-grow mt-24 px-6 max-w-6xl mx-auto">
                    {/* Background decoration */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
                    </div>

                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         className="text-center mb-16 relative z-10"
                    >
                         <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                              My Projects
                         </h1>
                         <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                              これまでに開発したプロジェクトをご紹介します。各プロジェクトは実践的なスキルを身につけるために作成されました。
                         </p>
                    </motion.div>

                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         animate="visible"
                         className="grid gap-8 relative z-10"
                    >
                         {projects.map((project) => (
                              <motion.div
                                   key={project.id}
                                   variants={itemVariants}
                                   className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden group"
                              >
                                   <div className="grid md:grid-cols-2 gap-0">
                                        {/* Project Image */}
                                        <div className="relative overflow-hidden">
                                             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                                             <Image
                                                  src={project.image}
                                                  alt={project.title}
                                                  width={400}
                                                  height={256}
                                                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                             />
                                             <div className="absolute top-4 right-4">
                                                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'completed'
                                                       ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                       : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                       }`}>
                                                       {project.status === 'completed' ? '完了' : '開発中'}
                                                  </span>
                                             </div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-8">
                                             <div className="mb-4">
                                                  <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                                       {project.title}
                                                  </h2>
                                                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                                                       {project.subtitle}
                                                  </p>
                                             </div>

                                             <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                                  {project.description}
                                             </p>

                                             {/* Technologies */}
                                             <div className="mb-6">
                                                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                                                       使用技術
                                                  </h4>
                                                  <div className="flex flex-wrap gap-3">
                                                       {project.technologies.map((tech) => (
                                                            <div
                                                                 key={tech.name}
                                                                 className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                                                            >
                                                                 <tech.icon className={`text-lg ${tech.color}`} />
                                                                 <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                                                            </div>
                                                       ))}
                                                  </div>
                                             </div>

                                             {/* Features */}
                                             <div className="mb-6">
                                                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                                                       主な機能
                                                  </h4>
                                                  <ul className="grid grid-cols-1 gap-2">
                                                       {project.features.map((feature, index) => (
                                                            <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                                                                 {feature}
                                                            </li>
                                                       ))}
                                                  </ul>
                                             </div>

                                             {/* Action Buttons */}
                                             <div className="flex gap-4">
                                                  <a
                                                       href={project.github}
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
                                                  >
                                                       <FaGithub className="text-lg" />
                                                       GitHub
                                                  </a>
                                                  {project.demo !== '#' && (
                                                       <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                                                       >
                                                            <FaExternalLinkAlt className="text-sm" />
                                                            デモを見る
                                                       </a>
                                                  )}
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         ))}
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 1 }}
                         className="text-center mt-16 relative z-10"
                    >
                         <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                                   新しいプロジェクトのアイデアがありますか？
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-6">
                                   一緒に素晴らしいプロジェクトを作りませんか？お気軽にお問い合わせください。
                              </p>
                              <a
                                   href="mailto:mit2471509@stu.o-hara.ac.jp"
                                   className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                              >
                                   <FaEnvelope />
                                   お問い合わせ
                              </a>
                         </div>
                    </motion.div>
               </main>

               <Footer />
          </div>
     );
}
