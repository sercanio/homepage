import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="max-w-5xl mx-auto px-4">
      <div className="opacity-70 text-center">
        <p>Sercan Ateş © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
