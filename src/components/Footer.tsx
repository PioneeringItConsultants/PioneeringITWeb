import Link from "next/link"

export default function Footer() {
    const footerData = [
        {
            title: "About NexGen lab",
            items: [
            { name: "Developing computer software maintain", link: "#" },
            { name: "Software applications, platforms, design,", link: "#" },
            { name: "Build, automate process and support", link: "#" },
            { name: "Business operations.", link: "#" },
            { name: "Custom software build.", link: "#" },
            ],
        },
        {
            title: "Products",
            items: [
            { name: "Web", link: "#" },
            { name: "App", link: "#" },
            { name: "Software", link: "#" },
            { name: "Ecommerce", link: "#" },
            ],
        },
        {
            title: "Company",
            items: [
            { name: "Terms & conditions", link: "#" },
            { name: "Privacy policy", link: "#" },
            ],
        },
    ];

  return (
    <>
        <footer className={`bg-[url('/images/footer/footer_backgoround.jpg')] bg-no-repeat bg-cover text-gray-200 pt-20 pb-12 px-20`}>
            <div className="container">
                <div className="grid grid-cols-10 gap-8">
                    {/* About Company  */}
                    <div className="col-span-3">
                        <FooterTitle text={footerData[0].title}/>
                        {
                            footerData[0].items.map(ele=>
                                <div key={ele.name}>
                                    <FooterLink ele={ele}/>
                                </div>
                            )
                        }
                    </div>

                    <div className="col-span-2 space-y-3">
                       <div>
                            {/* Products  */}
                            <FooterTitle text={footerData[1].title}/>
                            {
                                footerData[1].items.map(ele=>
                                    <div key={ele.name}>
                                        <FooterLink ele={ele}/>
                                    </div>
                                )
                            }
                       </div>

                       <div>
                        {/* Comapany  */}
                        <FooterTitle text={footerData[2].title}/>
                            {
                                footerData[2].items.map(ele=>
                                    <div key={ele.name}>
                                        <FooterLink ele={ele}/>
                                    </div>
                                )
                            }
                       </div>
                    </div>

                     {/* Address  */}
                    <div className="col-span-2">
                        <FooterTitle text="Address"/>
                        <p>Rupayon Shelford (23th Floor),58/2, Mirpur Road, Shayamoli.Dhaka-1207, Bangladesh</p>
                    </div>

                    <div className="col-span-2 space-y-3">
                        {/* Contact  */}
                        <div>
                            <FooterTitle text="Contact"/>
                            <a href="tel:000000" className="text-sm">Phone: 01419499494</a>
                            <a href="mailto:test@gmail.com" className="text-sm">email: exam@gmail.com</a>
                        </div>
                        {/* Work with us  */}
                        <div>
                            <FooterTitle text="Work With Us"/>
                            <a href="mailto:test@gmail.com" className="text-sm">View Jobs</a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <FooterTitle text="Follow Us"/>
                        <div className="flex gap-4">
                            <Link href={'#'}>FB</Link>
                            <Link href={'#'}>FB</Link>
                            <Link href={'#'}>FB</Link>
                        </div>
                    </div>

                </div>
                <hr  className="mt-12"/>
            </div>
        </footer>
    </>
  )
}

function FooterTitle({text}: {text: string}){
    return <h2 className="text-lg text-teal-500">{text}</h2>
}

function FooterLink({ele}: {ele: {name: string; link: string}}){
    return <Link href={ele.link} className="text-sm">{ele.name}</Link>
}
