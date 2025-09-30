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
          { name: 'HTML/CSS', level: 75, category: 'Frontend' },
          { name: 'JavaScript', level: 50, category: 'Frontend' },
          { name: 'TypeScript', level: 45, category: 'Frontend' },
          { name: 'React', level: 25, category: 'Frontend' },
          { name: 'Next.js', level: 30, category: 'Frontend' },
          { name: 'Python', level: 65, category: 'Backend' },
          { name: 'Django', level: 50, category: 'Backend' },
          { name: 'Java', level: 25, category: 'Backend' },
          { name: 'MariaDB', level: 35, category: 'Database' },
          { name: 'Flutter', level: 30, category: 'Frontend' },
          { name: 'Dart', level: 25, category: 'Frontend' },
          { name: 'supabase', level: 45, category: 'Database' },
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
                              About Me
                         </h1>
                         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                              私について詳しくご紹介します。技術的なスキルから趣味まで、私のすべてをお見せします。
                         </p>
                    </motion.div>

                    {/* Profile Section */}
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 relative z-10 border border-gray-200"
                    >
                         <div className="flex flex-col md:flex-row items-center gap-8">
                              <div className="relative">
                                   <div className="absolute inset-0 bg-gradient-to-r from-slate-300 via-gray-300 to-slate-400 rounded-full blur-lg opacity-20"></div>
                                   <Image
                                        src="/my_image2.jpg"
                                        alt="プロフィール画像"
                                        width={200}
                                        height={200}
                                        className="relative rounded-full shadow-lg border-4 border-white"
                                   />
                              </div>
                              <div className="text-center md:text-left">
                                   <h2 className="text-4xl font-bold text-gray-800 mb-2">
                                        浅野 晃一朗
                                   </h2>
                                   <p className="text-xl text-gray-600 mb-6">
                                        Koichiro Asano
                                   </p>
                                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {personalInfo.map((info) => (
                                             <div key={info.label} className="flex items-center gap-3">
                                                  <info.icon className="text-slate-600 text-lg" />
                                                  <div>
                                                       <p className="text-sm text-gray-500">{info.label}</p>
                                                       <p className="font-medium text-gray-800">{info.value}</p>
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
                         <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
                              My Hobbies
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                              {hobbies.map((hobby, index) => (
                                   <motion.div
                                        key={hobby.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group"
                                   >
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                             <hobby.icon className="text-white text-2xl" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                             {hobby.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">
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
                         <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-200">
                              <div className="flex items-center gap-3 mb-6">
                                   <FaMusic className="text-2xl text-slate-600" />
                                   <h3 className="text-2xl font-bold text-gray-800">
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
                                             className="px-4 py-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200"
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
                         <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
                              Technical Skills
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {skills.map((skill, index) => (
                                   <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                        className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                                   >
                                        <div className="flex justify-between items-center mb-3">
                                             <span className="font-semibold text-gray-800">{skill.name}</span>
                                             <span className="text-sm text-gray-600">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                             <div
                                                  className="h-2 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full transition-all duration-1000 ease-out"
                                                  style={{ width: `${skill.level}%` }}
                                             ></div>
                                        </div>
                                        <span className="text-xs text-gray-500 uppercase tracking-wide">
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
                         <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
                              Career Journey
                         </h3>
                         <div className="relative">
                              {/* Timeline line */}
                              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-400 to-gray-500"></div>

                              {career.map((item, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                                        className="relative flex items-start mb-8"
                                   >
                                        <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full border-4 border-white shadow-md"></div>
                                        <div className="ml-16 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-200 flex-1">
                                             <div className="flex items-center justify-between mb-3">
                                                  <span className="text-sm font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                                                       {item.year}
                                                  </span>
                                                  {item.achievement && (
                                                       <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
                                                            <FaHeart className="text-xs" />
                                                            {item.achievement}
                                                       </span>
                                                  )}
                                             </div>
                                             <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                                  {item.title}
                                             </h4>
                                             <p className="text-gray-600">
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
