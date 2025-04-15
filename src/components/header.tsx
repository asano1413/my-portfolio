import Link from 'next/link';

export default function Header() {
     return (
          <header className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-sm shadow-sm">
               <div className="flex justify-between items-center px-6 py-4">

                    <h1 className="text-2xl font-semibold text-gray-800">
                         <Link href="/" className="hover:text-gray-900 transition duration-200">
                              About Me
                         </Link>
                    </h1>

                    <nav className="flex space-x-6 mt-8 mr-6">
                         {['aboutme', 'myproject', 'learning'].map((item) => (
                              <Link
                                   key={item}
                                   href={`/${item}`}
                                   className="relative text-gray-700 hover:text-gray-900 transition duration-200"
                              >
                                   <span className="hover-underline">{item}</span>
                              </Link>
                         ))}
                    </nav>
               </div>

               <style jsx>{`
        .hover-underline::before {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #4b5563; /* gray-700 */
          transition: width 0.3s ease-in-out;
        }

        .hover-underline:hover::before {
          width: 100%;
        }
      `}</style>
          </header>
     );
}
