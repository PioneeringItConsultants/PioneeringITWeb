import Image from "next/image";
import Logo from '../../public/images/header/logo.png'
import Link from "next/link";

export default function Header() {
    const pages = [
        {
            "name": "Home",
            "link": "/"
        },{
            "name": "About",
            "link": "/about"
        },{
            "name": "Services",
            "link": "/services"
        },{
            "name": "Mobile App",
            "link": "/mobile-app"
        }
    ]

  return (
    <>
      <nav className="shadow">
        <div className="container flex justify-between items-center">
            {/* Logo  */}
            <Link href={'/'}>
                <Image src={Logo} width={300} height={50} alt="logo"/>
            </Link>

            {/* Nav Links  */}
            <ul className="hidden md:flex flex-wrap items-center gap-8 text-sm">
                {
                    pages.map((item, i)=>
                        <li key={i}>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    )
                }
                <Link href={'/contact'}>
                  <button className="px-4 py-2 bg-sky-300 cursor-pointer">Contact</button>
                </Link>
            </ul>
            {/* Mobile menu icon  */}
        </div>
      </nav>
    </>
  )
}
