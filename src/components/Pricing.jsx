import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
function Pricing() {
  return (
    <div className="mt-12">
        <h2 className="text-3xl lg:text-6xl sm:text-5xl my-8 tracking-wide text-center">Pricing</h2>
        <div className="flex flex-wrap">
          {
            pricingOptions.map((option, index) => (
              <div key={index} className="border-neutral-200 w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="p-10 border border-neutral-700 rounded-xl">
                  <p className="text-4xl  mb-8">{option.title}
                    {option.title === "Pro" && <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 mb-4"> (Most Popular)</span>}
                  </p>
                  <p className="mb-8">
                    <span className="text-5xl  mt-6 mr-2">{option.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Month</span>
                  </p>
                  <ul>
                    {option.features.map((feature, index)=> (
                      <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 />
                        <span className="ml-2">{feature}</span>
                        
                      </li>
                    ))}
                  </ul>
                  <a href="#"
                   className="inline-flex justify-center items-center w-full h-12 
                   px-5 mt-20 tracking-tight text-xl border border-orange-900 
                   hover:bg-orange-900 rounded-lg transition duration-200">
                    Subscribe</a>
                </div>
              </div>
            ))
          }
          
        </div>
    </div>
  )
}

export default Pricing