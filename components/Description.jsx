const Description = () => {
    return (
        // bg-gradient-to-r from-[#505050] via-gray-600 to-gray-800 rounded-lg shadow-lg
        <section className="flex items-center justify-center min-h-[300px] px-6 text-white bg-gradient-to-r from-primary via-gray-600 to-gray-800 shadow-lg relative">
            <div
                className="absolute inset-0 bg-cover opacity-10 pointer-events-none"
                aria-hidden="true"
                style={{
                    backgroundImage: `url(/images/grunge-wall-texture.jpg)`
                }}
            ></div>
            <div className="text-center max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    About Our Company
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                    We are a forward-thinking company committed to innovation
                    and excellence. Our mission is to deliver top-notch
                    solutions that make a real difference for our clients and
                    their communities.
                </p>
            </div>
        </section>
    );
};

export default Description;
