import { testimonials } from "../constants"

function Testimonials() {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-3xl lg:text-6xl sm:text-5xl tracking-wide text-center my-10">What People are saying</h2>
        <div className="flex flex-wrap justify-center ">
            {
                testimonials.map((testimonial, index) =>(
                    <div key={index} className="w-full lg:w-1/3 sm:w-1/2 px-4 py-2">
                        <div className="bg-neutral rounded-md p-6 text-md border border-nuetral-800 font-thin">
                            <p>{testimonial.text}</p>
                            <div className="flex mt-8 items-start">
                                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonial.image} alt={testimonial.user} />
                                <div>
                                    <h6>{testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
     </div>
  )
}

export default Testimonials