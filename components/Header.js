import Image from "next/image"
import Link from "next/link"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Listen', href: '/listen' },
  { name: 'Shop Merch', href: '/merch' },
  { name: 'Shop Vinyl', href: '/vinyl' },
  { name: 'Sponsors', href: '/sponsors' },
]

export default function Header() {
  return (
    <header className="bg-indigo-500">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <span className="sr-only">Charlie Virgo Rocks</span>
            <Link passHref href="/">
              <Image src={'/charlie_virgo_logo_white.png'} width={150} height={90} alt="Charlie Virgo Logo" />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link passHref key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  <span className="text-white">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}