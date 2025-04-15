import { FaGithub } from 'react-icons/fa';

export default function Footer() {
     return (
          <footer className="w-full bg-white/30 backdrop-blur-sm shadow-inner mt-12 py-6 flex justify-center items-center">
               <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition shadow-md"
               >
                    <FaGithub className="text-xl" />
                    <span className="font-medium">View on GitHub</span>
               </a>
          </footer>
     );
}
