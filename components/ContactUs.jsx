const ContactUs = () => {
    return (
        <section className="flex flex-col max-w-[1280px] mx-auto items-center justify-center min-h-[300px] px-6 text-white bg-gradient-to-r from-primary via-gray-600 to-gray-800 shadow-lg relative">
            <div
                className="absolute inset-0 bg-cover opacity-10 pointer-events-none"
                aria-hidden="true"
                style={{
                    backgroundImage: `url(/images/grunge-wall-texture.jpg)`
                }}
            ></div>
		<h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>

<div className="flex flex-col md:flex-row gap-8">
  {/* Contact Info */}
  <div className="md:w-1/2 space-y-4">
    <p className="text-lg text-gray-600">
	 Have any questions? We'd love to hear from you! Reach out using the form or the contact info below.
    </p>
    <div className="text-white">
	 <p><strong>Email:</strong> contact@company.com</p>
	 <p><strong>Phone:</strong> +1 (555) 123-4567</p>
	 <p><strong>Address:</strong> 123 Business Road, Suite 100, Cityville</p>
    </div>
  </div>

  {/* Contact Form */}
  <form className="md:w-1/2 space-y-4">
    <div>
	 <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
	 <input
	   type="text"
	   id="name"
	   placeholder="Your Name"
	   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
	   required
	 />
    </div>
    <div>
	 <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
	 <input
	   type="email"
	   id="email"
	   placeholder="Your Email"
	   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
	   required
	 />
    </div>
    <div>
	 <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
	 <textarea
	   id="message"
	   placeholder="Your Message"
	   rows={4}
	   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
	   required
	 />
    </div>
    <button
	 type="submit"
	 className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
    >
	 Send Message
    </button>
  </form>
</div>
	   </section>
    );
};

export default ContactUs;
