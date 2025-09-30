import Header from '@/components/header';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaSpinner, FaLightbulb, FaGraduationCap, FaCode, FaMobile, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { SiNextdotjs, SiPython, SiDocker, SiGithubactions, SiCplusplus, SiFlutter } from 'react-icons/si';

export default function Learning() {
     const learnedSkills = [
          { name: 'HTML / CSS', icon: FaCode, description: 'Webページの構造とスタイリング', level: '中級' },
          { name: 'JavaScript / TypeScript', icon: FaCode, description: 'フロントエンド開発の基盤', level: '初級' },
          { name: 'React / Next.js', icon: SiNextdotjs, description: 'モダンなフロントエンドフレームワーク', level: '初級' },
          { name: 'Python / Django', icon: SiPython, description: 'バックエンド開発とWebフレームワーク', level: '初級' },
          { name: 'Laravel', icon: FaCode, description: 'バックエンド中心のプログラミング', level: '初級' },
          { name: 'Flutter', icon: SiFlutter, description: 'マルチプラットフォームアプリの開発', level: '初級' },
     ];

     const currentLearning = [
          {
               name: 'NextAuth.js 認証システム',
               icon: FaShieldAlt,
               description: 'セキュアなユーザー認証の実装',
               progress: 40,
               status: '基礎学習中、簡単な認証機能の実装を練習中'
          },
          {
               name: 'Flutter',
               icon: FaMobile,
               description: 'マルチプラットフォームアプリの開発',
               progress: 35,
               status: '学習・アプリ作成中'
          },
          {
               name: 'FastAPI',
               icon: FaCode,
               description: 'AIを用いたAPIの作成',
               progress: 25,
               status: '学習中'
          },
          {
               name: 'LangChainを用いた開発',
               icon: FaCode,
               description: 'AIを使い、プロセスを最適化させた開発方法を考案中（Figma×Cursorなどにも関心がある）',
               progress: 20,
               status: '試験的運用中'
          },
     ];

     const futureLearning = [
          {
               name: 'CI/CD (GitHub Actions)',
               icon: SiGithubactions,
               description: '継続的インテグレーション・デプロイメント',
               category: 'DevOps'
          },
          {
               name: 'セキュリティ対策',
               icon: FaShieldAlt,
               description: 'XSS/CSRF/SQL Injection防止',
               category: 'Security'
          },
          {
               name: 'Docker / コンテナ技術',
               icon: SiDocker,
               description: 'コンテナ化とオーケストレーション',
               category: 'DevOps'
          },
          {
               name: 'Swift',
               icon: SiCplusplus,
               description: 'モバイルアプリの開発',
               category: 'DevOps'
          },
          {
               name: 'デザインシステム',
               icon: FaCode,
               description: '再利用可能なUIコンポーネント設計',
               category: 'Design'
          },
     ];

     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2
               }
          }
     };

     const itemVariants = {
          hidden: { opacity: 0, y: 30 },
          visible: {
               opacity: 1,
               y: 0,
               transition: {
                    duration: 0.6
               }
          }
     };

     return (
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 text-gray-800">
               <Header />

               <main className="flex-grow mt-24 px-6 max-w-6xl mx-auto relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-200/10 to-gray-200/10 rounded-full blur-3xl"></div>
                         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-200/10 to-slate-200/10 rounded-full blur-3xl"></div>
                    </div>

                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         className="text-center mb-16 relative z-10"
                    >
                         <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-slate-600 to-gray-700 bg-clip-text text-transparent mb-4">
                              Learning Journey
                         </h1>
                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                              技術の習得は終わりのない旅です。これまでに学んだこと、現在学習中のこと、そしてこれから学びたいことをご紹介します。
                         </p>
                    </motion.div>

                    {/* Learned Skills Section */}
                    <motion.section
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         className="mb-16 relative z-10"
                    >
                         <div className="flex items-center gap-3 mb-8">
                              <FaGraduationCap className="text-3xl text-slate-600" />
                              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
                                   習得済みスキル
                              </h2>
                         </div>
                         <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                         >
                              {learnedSkills.map((skill) => (
                                   <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group"
                                   >
                                        <div className="flex items-center gap-4 mb-4">
                                             <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                  <skill.icon className="text-white text-xl" />
                                             </div>
                                             <div>
                                                  <h3 className="text-lg font-semibold text-gray-800">
                                                       {skill.name}
                                                  </h3>
                                                  <span className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                                                       {skill.level}
                                                  </span>
                                             </div>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                             {skill.description}
                                        </p>
                                        <div className="mt-4 flex justify-end">
                                             <FaCheckCircle className="text-slate-500 text-xl" />
                                        </div>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </motion.section>

                    {/* Current Learning Section */}
                    <motion.section
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.4 }}
                         className="mb-16 relative z-10"
                    >
                         <div className="flex items-center gap-3 mb-8">
                              <FaSpinner className="text-3xl text-slate-600 animate-spin" />
                              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
                                   現在学習中
                              </h2>
                         </div>
                         <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                              className="grid grid-cols-1 md:grid-cols-2 gap-6"
                         >
                              {currentLearning.map((skill) => (
                                   <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                                   >
                                        <div className="flex items-center gap-4 mb-4">
                                             <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center">
                                                  <skill.icon className="text-white text-xl" />
                                             </div>
                                             <div className="flex-1">
                                                  <h3 className="text-lg font-semibold text-gray-800">
                                                       {skill.name}
                                                  </h3>
                                                  <span className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                                                       {skill.status}
                                                  </span>
                                             </div>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">
                                             {skill.description}
                                        </p>
                                        <div className="mb-2">
                                             <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                  <span>進捗</span>
                                                  <span>{skill.progress}%</span>
                                             </div>
                                             <div className="w-full bg-gray-200 rounded-full h-2">
                                                  <div
                                                       className="h-2 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full transition-all duration-1000 ease-out"
                                                       style={{ width: `${skill.progress}%` }}
                                                  ></div>
                                             </div>
                                        </div>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </motion.section>

                    {/* Future Learning Section */}
                    <motion.section
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.6 }}
                         className="relative z-10"
                    >
                         <div className="flex items-center gap-3 mb-8">
                              <FaLightbulb className="text-3xl text-slate-600" />
                              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
                                   これから学びたいこと
                              </h2>
                         </div>
                         <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                         >
                              {futureLearning.map((skill) => (
                                   <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group"
                                   >
                                        <div className="flex items-center gap-4 mb-4">
                                             <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                  <skill.icon className="text-white text-xl" />
                                             </div>
                                             <div>
                                                  <h3 className="text-lg font-semibold text-gray-800">
                                                       {skill.name}
                                                  </h3>
                                                  <span className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                                                       {skill.category}
                                                  </span>
                                             </div>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                             {skill.description}
                                        </p>
                                        <div className="mt-4 flex justify-end">
                                             <FaRocket className="text-slate-500 text-xl" />
                                        </div>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </motion.section>

                    {/* Call to Action */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.8 }}
                         className="text-center mt-16 relative z-10"
                    >
                         <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                   一緒に学びませんか？
                              </h3>
                              <p className="text-gray-600 mb-6">
                                   新しい技術の習得やプロジェクトについて、お気軽にご相談ください。
                              </p>
                              <a
                                   href="mailto:mit2471509@stu.o-hara.ac.jp"
                                   className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                              >
                                   <FaCode />
                                   お問い合わせ
                              </a>
                         </div>
                    </motion.div>
               </main>

               <Footer />
          </div>
     );
}
