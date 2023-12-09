const Main = ({ children, className }) => {
  return (
    <main
      className={`${className} flex flex-col items-center justify-start min-h-screen`}
    >
      {children}
    </main>
  )
}
export default Main
