import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBirthdayCake, FaTint, FaMapMarkerAlt, FaGamepad, FaDumbbell, FaRunning, FaMusic, FaHeart } from 'react-icons/fa';
import { GiTennisRacket } from 'react-icons/gi';

export default function AboutMe() {
     const personalInfo = [
          { icon: FaBirthdayCake, label: '生年月日', value: '2006年2月24日' },
          { icon: FaTint, label: '血液型', value: 'O型' },
          { icon: FaMapMarkerAlt, label: '出身', value: '茨城県' },
     ];

     const hobbies = [
          { icon: FaGamepad, name: 'ゲーム', description: '様々なジャンルのゲームを楽しんでいます' },
          { icon: FaDumbbell, name: '筋トレ', description: '健康と体力維持のため継続中' },
          { icon: FaRunning, name: 'トレイルラン', description: '自然の中でのランニングが好き' },
          { icon: GiTennisRacket, name: 'テニス', description: '友達と一緒に楽しんでいます' },
     ];

     const favoriteArtists = [
          'Suchmos',
          'ずっと真夜中でいいのに。',
          'EGOIST',
          'indigo la End',
     ];

     const skills = [
          { name: 'HTML/CSS', level: 90, category: 'Frontend' },
          { name: 'JavaScript', level: 65, category: 'Frontend' },
          { name: 'TypeScript', level: 60, category: 'Frontend' },
          { name: 'React', level: 45, category: 'Frontend' },
          { name: 'Next.js', level: 70, category: 'Frontend' },
          { name: 'Python', level: 80, category: 'Backend' },
          { name: 'Django', level: 65, category: 'Backend' },
          { name: 'Java', level: 35, category: 'Backend' },
          { name: 'MariaDB', level: 50, category: 'Database' },
          { name: 'Flutter', level: 40, category: 'Frontend' },
          { name: 'Dart', level: 30, category: 'Frontend' },
          { name: 'supabase', level: 60, category: 'Database' },
     ];

     const career = [
          {
               year: '2021-04',
               title: '茨城高等学校入学',
               description: '英語などの勉強に注力し、同年12月に英検2級を取得しました。',
               achievement: '英検2級取得'
          },
          {
               year: '2022-04',
               title: 'S高等学校に編入',
               description: '自分が興味がある分野を模索するために編入し、ここで初めてプログラミングに興味を持ちました。',
               achievement: 'プログラミングへの興味発見'
          },
          {
               year: '2023-02',
               title: 'プログラミングデビュー',
               description: 'HTML/CSSから始まり、Web開発の世界に足を踏み入れました。',
               achievement: '初めてのコード'
          },
          {
               year: '2023-07',
               title: '進路決定',
               description: 'システムエンジニアを志し、進学先を水戸情報ITクリエイター専門学校に決めました。',
               achievement: 'IT専門学校進学決定'
          },
          {
               year: '2024-01',
               title: 'ITパスポート取得',
               description: 'ITの基礎知識を証明する資格を取得しました。',
               achievement: 'ITパスポート合格'
          },
          {
               year: '2024-05~',
               title: '技術習得期',
               description: 'Python、TypeScript、Next.js、MariaDB等を本格的に勉強し始めました。',
               achievement: '多言語学習開始'
          },
          {
               year: '2026-03',
               title: '卒業予定',
               description: '水戸情報ITクリエイター専門学校を卒業予定です。',
               achievement: '専門学校卒業予定'
          },
     ];

     return (
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
               <Header />

               <main className="flex-grow mt-24 px-6 max-w-6xl mx-auto relative">
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
                              About Me
                         </h1>
                         <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                              私について詳しくご紹介します。技術的なスキルから趣味まで、私のすべてをお見せします。
                         </p>
                    </motion.div>

                    {/* Profile Section */}
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 relative z-10 border border-gray-200 dark:border-gray-700"
                    >
                         <div className="flex flex-col md:flex-row items-center gap-8">
                              <div className="relative">
                                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                                   <Image
                                        src="/my_image2.jpg"
                                        alt="プロフィール画像"
                                        width={200}
                                        height={200}
                                        className="relative rounded-full shadow-2xl border-4 border-white dark:border-gray-700"
                                   />
                              </div>
                              <div className="text-center md:text-left">
                                   <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                        浅野 晃一朗
                                   </h2>
                                   <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                                        Koichiro Asano
                                   </p>
                                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {personalInfo.map((info) => (
                                             <div key={info.label} className="flex items-center gap-3">
                                                  <info.icon className="text-blue-600 dark:text-blue-400 text-lg" />
                                                  <div>
                                                       <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                                                       <p className="font-medium text-gray-800 dark:text-gray-200">{info.value}</p>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </motion.div>

                    {/* Hobbies Section */}
                    <motion.section
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.4 }}
                         className="mb-12 relative z-10"
                    >
                         <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                              My Hobbies
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                              {hobbies.map((hobby, index) => (
                                   <motion.div
                                        key={hobby.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                                   >
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                             <hobby.icon className="text-white text-2xl" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                             {hobby.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                             {hobby.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </motion.section>

                    {/* Favorite Artists */}
                    <motion.section
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.6 }}
                         className="mb-12 relative z-10"
                    >
                         <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                              <div className="flex items-center gap-3 mb-6">
                                   <FaMusic className="text-2xl text-pink-500" />
                                   <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                        好きなアーティスト
                                   </h3>
                              </div>
                              <div className="flex flex-wrap gap-3">
                                   {favoriteArtists.map((artist, index) => (
                                        <motion.span
                                             key={artist}
                                             initial={{ opacity: 0, scale: 0.8 }}
                                             animate={{ opacity: 1, scale: 1 }}
                                             transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                             className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-pink-200 dark:border-pink-700"
                                        >
                                             {artist}
                                        </motion.span>
                                   ))}
                              </div>
                         </div>
                    </motion.section>

                    {/* Skills Section */}
                    <motion.section
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.8 }}
                         className="mb-12 relative z-10"
                    >
                         <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                              Technical Skills
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {skills.map((skill, index) => (
                                   <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                                   >
                                        <div className="flex justify-between items-center mb-3">
                                             <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                                             <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                                             <div
                                                  className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                                                  style={{ width: `${skill.level}%` }}
                                             ></div>
                                        </div>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                             {skill.category}
                                        </span>
                                   </motion.div>
                              ))}
                         </div>
                    </motion.section>

                    {/* Career Timeline */}
                    <motion.section
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 1.2 }}
                         className="relative z-10"
                    >
                         <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                              Career Journey
                         </h3>
                         <div className="relative">
                              {/* Timeline line */}
                              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                              {career.map((item, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                                        className="relative flex items-start mb-8"
                                   >
                                        <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                                        <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 flex-1">
                                             <div className="flex items-center justify-between mb-3">
                                                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                                                       {item.year}
                                                  </span>
                                                  {item.achievement && (
                                                       <span className="text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full flex items-center gap-1">
                                                            <FaHeart className="text-xs" />
                                                            {item.achievement}
                                                       </span>
                                                  )}
                                             </div>
                                             <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                                  {item.title}
                                             </h4>
                                             <p className="text-gray-600 dark:text-gray-400">
                                                  {item.description}
                                             </p>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </motion.section>
               </main>

               <Footer />
          </div>
     );
}
