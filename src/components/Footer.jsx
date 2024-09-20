import { resourcesLinks, platformLinks, communityLinks } from "../constants"

function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10 ">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h3 className="text-md font-semibold mb-4">Resources</h3>
                <ul>
                    {resourcesLinks.map((link, index) => (
                        <li key={index} className="mb-2">
                            <a href={link.href} className="text-neutral-400 hover:text-white">{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="block lg:flex justify-center">
                <div className="w-fit ">
                    <h3 className="text-md font-semibold mb-4">Platforms</h3>
                    <ul>
                        {platformLinks.map((link, index) => (
                            <li key={index} className="mb-2 ">
                                <a href={link.href} className="text-neutral-400 hover:text-white">{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className=" block lg:flex justify-end">
                <div className="w-fit">
                    <h3 className="text-md font-semibold mb-4">Community</h3>
                    <ul>
                        {communityLinks.map((link, index) => (
                            <li key={index} className="mb-2">
                                <a href={link.href} className="text-neutral-400 hover:text-white">{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer