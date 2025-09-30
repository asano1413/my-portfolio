import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
     const [isDark, setIsDark] = useState(false);

     useEffect(() => {
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
               setIsDark(true);
               document.documentElement.classList.add('dark');
          }
     }, []);

     const toggleTheme = () => {
          setIsDark(!isDark);
          if (isDark) {
               document.documentElement.classList.remove('dark');
               localStorage.setItem('theme', 'light');
          } else {
               document.documentElement.classList.add('dark');
               localStorage.setItem('theme', 'dark');
          }
     };

     return (
          <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200">
               <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800">
                         <Link href="/" className="hover:text-slate-600 transition duration-200">
                              Koichiro Asano
                         </Link>
                    </h1>

                    <nav className="flex items-center space-x-8">
                         {[
                              { name: 'About', href: '/aboutme' },
                              { name: 'Projects', href: '/myproject' },
                              { name: 'Learning', href: '/learning' }
                         ].map((item) => (
                              <Link
                                   key={item.name}
                                   href={item.href}
                                   className="relative text-gray-700 hover:text-slate-600 transition duration-200 font-medium"
                              >
                                   <span className="hover-underline">{item.name}</span>
                              </Link>
                         ))}

                         <button
                              onClick={toggleTheme}
                              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200"
                              aria-label="Toggle theme"
                         >
                              {isDark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
                         </button>
                    </nav>
               </div>

               <style jsx>{`
        .hover-underline::before {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #475569;
          transition: width 0.3s ease-in-out;
        }

        .hover-underline:hover::before {
          width: 100%;
        }
      `}</style>
          </header>
     );
}
