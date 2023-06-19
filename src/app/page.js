import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <h1 className='text-center text-5xl mt-20 mb-3 font-bold' >Hunting Coder</h1>
      <div className='flex justify-center' >
        <Image className='rounded-lg my-10' src='/home-img.jpg' width={400} height={400} alt='image' />
      </div>

      <h2 className='text-center text-xl mb-16 ' >A Blogs for hunting coders by hunting coder</h2>
      <div className='w-1/2 m-auto px-20'>
        <div className='text-2xl font-bold mb-3' >Popular Blogs</div>
        <div className='text-xl font-semibold mb-1' >How to learn Javascript in 2022</div>
        <div className='text-sm mb-5'>Javascript is a language for web development</div>
        <div className='text-xl font-semibold mb-1' >How to learn Javascript in 2022</div>
        <div className='text-sm mb-5'>Javascript is a language for web development</div>
        <div className='text-xl font-semibold mb-1' >How to learn Javascript in 2022</div>
        <div className='text-sm mb-5'>Javascript is a language for web development</div>
      </div>
    </main>
  )
}
