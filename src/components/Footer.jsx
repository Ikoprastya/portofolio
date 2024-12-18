import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-12 py-6 border-t bg-gray-50 border-red-600 ">
      <p className="text-sm text-gray-600 px-14 md:pd-1">
        © 2024 Developer by <strong>Iko Prastya</strong> with <strong>React & Tailwind CSS</strong>
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        {/* GitHub */}
        <a
          href="https://github.com/ikoprastya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.2-1.3-1.6-1.3-1.6-1-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.3 1.2 2.8.9.1-.7.3-1.2.6-1.5-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.4.1-3 0 0 1-.3 3.2 1.2a10.7 10.7 0 015.8 0C17 5.3 18 5.6 18 5.6c.6 1.6.1 2.7.1 3a5.1 5.1 0 011.2 3.2c0 4.7-2.8 5.8-5.5 6.1.4.4.7 1 .7 2v3c0 .3.2.6.8.5A12 12 0 0012 0z"
            />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/ikoprastya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.447 20.452H17.2v-5.48c0-1.31-.03-2.99-1.82-2.99-1.82 0-2.1 1.42-2.1 2.89v5.58h-3.25V9h3.13v1.56h.04c.44-.84 1.52-1.73 3.14-1.73 3.36 0 3.98 2.22 3.98 5.1v6.46zM5.337 7.433a1.88 1.88 0 110-3.76 1.88 1.88 0 010 3.76zM6.92 20.452H3.75V9h3.17v11.452zM22.225 0H1.771C.791 0 0 .785 0 1.75v20.5C0 23.215.792 24 1.771 24h20.452C23.209 24 24 23.215 24 22.25V1.75C24 .785 23.208 0 22.225 0z"
            />
          </svg>
        </a>
        {/* YouTube */}
        <a
          href="https://youtube.com/@indrayana3260"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.498 6.186a2.96 2.96 0 00-2.078-2.095C19.617 3.5 12 3.5 12 3.5s-7.617 0-9.42.591A2.96 2.96 0 00.502 6.186C0 8.015 0 12 0 12s0 3.985.502 5.814c.262 1.08 1.113 1.93 2.078 2.095C4.383 20.5 12 20.5 12 20.5s7.617 0 9.42-.591a2.96 2.96 0 002.078-2.095C24 15.985 24 12 24 12s0-3.985-.502-5.814zM9.546 15.568v-7.13l6.476 3.565-6.476 3.565z"
            />
          </svg>
        </a>
      </div>
    </footer>

  );
};

export default Footer;
