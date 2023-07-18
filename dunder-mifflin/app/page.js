import Image from 'next/image'
export default function Home() {
  return (
    <main>
      <div className="container max-w-xl mx-auto flex flex-col min-h-screen bg-amber-300">
          <div className="my-5">
            <a href="/" className="text-blue-500 underline">Home</a>&nbsp;|&nbsp;
            <a href="/" className="text-blue-500 underline">About</a>&nbsp;|&nbsp;
            <a href="/" className="text-blue-500 underline">Team</a>
          </div>
          <div>
            <h1 className="text-5xl">DM</h1>
              <Image src="/image/giphy.gif" width={400} height={400} alt="tf"></Image>

          </div>
          <div className="mt-auto mb-5">
            <p>Copyright</p>

          </div>

      </div>
    </main>
  )
}
