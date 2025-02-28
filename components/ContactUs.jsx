const ContactUs = () => {
	return (
	  <div className="relative bg-background px-5 md:px-12">
	    <img
		 className="absolute inset-0 w-full h-full object-cover opacity-50"
		 src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/clothes-bg.png"
		 alt="Background"
	    />
	    <div className="relative max-w-6xl mx-auto flex flex-wrap py-16">
		 {/* Left Content */}
		 <div className="w-full md:w-1/2 flex items-center text-white">
		   <div>
			<h2 className="text-[40px] leading-[50px] font-extrabold max-w-md">Transforming Homes With Excellence and Innovation </h2>
			<p className="text leading 26px text-white max-w-sm mt-4 mb-8">
			We adapt a uniquely personalized prospective to each project to deliver stunning spaces of optimal functions. Renowed for our architectural understanding and masterfull of craftmanship.
			</p>
		   </div>
		 </div>
		 {/* Right Form */}
		 <div className="w-full md:w-1/2 flex justify-center">
		   <form className="bg-gray-900 text-white p-8 max-w-md w-full rounded-lg">
			<h3 className="text-2xl font-semibold">Get a quote</h3>
			<p className="text-gray-400 text-sm mb-6">We will get back to you in 24 hours</p>
			<div className="space-y-4">
			  <input className="w-full p-3 bg-primary2 border border-gray-600 rounded-md" placeholder="First Name" />
			  <input className="w-full p-3 bg-primary2 border border-gray-600 rounded-md" placeholder="Last Name" />
			  <input className="w-full p-3 bg-primary2 border border-gray-600 rounded-md" placeholder="Email" />
			  <input className="w-full p-3 bg-primary2 border border-gray-600 rounded-md" placeholder="Phone Number" />
			  <textarea className="w-full p-3 h-24 bg-primary2 border border-gray-600 rounded-md" placeholder="Type message here"></textarea>
			</div>
			<button className="w-full mt-4 bg-secondary1 hover:bg-secondary2 text-white hover:text-background py-3 rounded-md font-semibold">
			  Get Quote
			</button>
		   </form>
		 </div>
	    </div>
	  </div>
	);
   };
   
   export default ContactUs;