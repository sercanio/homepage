import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-5xl mx-auto px-4">
      <div className="opacity-70 text-center">
        <p>Sercan Ateş © {new Date().getFullYear()}</p>
        <p>Built with Nextjs, Powered by Vercel</p>
      </div>
    </footer>
  )
}

export default Footer
