import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
     const socialLinks = [
          { icon: FaGithub, href: 'https://github.com/asano1413', label: 'GitHub' },
          { icon: FaEnvelope, href: 'mailto:mit2471509@stu.o-hara.ac.jp', label: 'Email' },
     ];

     return (
          <footer className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-inner mt-12 relative">
               {/* Background decoration */}
               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
               </div>

               <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                         {/* About Section */}
                         <div>
                              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                                   Koichiro Asano
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                   Web開発者として、ユーザー体験を重視したアプリケーションの開発に情熱を注いでいます。
                                   新しい技術の習得と実践的なプロジェクトを通じて、常に成長し続けています。
                              </p>

                         </div>

                         {/* Quick Links */}
                         <div>
                              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                                   Quick Links
                              </h3>
                              <ul className="space-y-2">
                                   <li>
                                        <Link
                                             href="/aboutme"
                                             className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                        >
                                             About Me
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             href="/myproject"
                                             className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                        >
                                             Projects
                                        </Link>
                                   </li>
                                   <li>
                                        <Link
                                             href="/learning"
                                             className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                        >
                                             Learning Journey
                                        </Link>
                                   </li>
                                   <li>
                                        <a
                                             href="mailto:mit2471509@stu.o-hara.ac.jp"
                                             className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                        >
                                             Contact
                                        </a>
                                   </li>
                              </ul>
                         </div>

                         {/* Contact Info */}
                         <div>
                              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                                   Contact Info
                              </h3>
                              <div className="space-y-3">
                                   <div className="flex items-center gap-3">
                                        <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                                        <a
                                             href="mailto:mit2471509@stu.o-hara.ac.jp"
                                             className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                        >
                                             mit2471509@stu.o-hara.ac.jp
                                        </a>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <FaGithub className="text-gray-800 dark:text-gray-400" />
                                        <a
                                             href="https://github.com/asano1413"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                        >
                                             github.com/asano1413
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Social Links */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         className="flex justify-center mb-8"
                    >
                         <div className="flex space-x-4">
                              {socialLinks.map((social) => (
                                   <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-600"
                                   >
                                        <social.icon className="text-xl" />
                                   </motion.a>
                              ))}
                         </div>
                    </motion.div>

                    {/* Copyright */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
                         <p className="text-gray-600 dark:text-gray-400">
                              © 2025 Koichiro Asano. All rights reserved.
                         </p>
                         <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                              Built with Next.js, TypeScript, and Tailwind CSS
                         </p>
                    </div>
               </div>
          </footer>
     );
}
