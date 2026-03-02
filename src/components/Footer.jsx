import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-8 px-4 text-center">
      <p className="text-sm text-gray-400">Thanks for choosing Us</p>
      <p className="text-xs text-gray-500 mt-1">
        Copyright &copy;{' '}
        <a
          href="https://github.com/isatyamshivam"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300 transition-colors"
        >
          https://github.com/isatyamshivam
        </a>
      </p>
    </footer>
  );
}
