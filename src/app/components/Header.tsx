import Link from 'next/link'
export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <h1>Rasberry</h1>
      <Link href="/about">About</Link>
    </header>
  )
}
