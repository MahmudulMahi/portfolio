// app/components/GetInTouch.tsx

import React from "react";

const GetInTouch = () => {
  return (
    <section id='contact' className="bg-[#0a192f] text-center py-20 px-4">
      {/* Section number */}
      <p className="text-teal-400 text-sm font-mono mb-4">
        04. What’s Next?
      </p>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">
        Get In Touch
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
        Although I’m not currently looking for any new opportunities,
        my inbox is always open. Whether you have a question or just
        want to say hi, I’ll try my best to get back to you!
      </p>

      {/* Gmail Link Button */}
      <a
        href="https://mail.google.com/mail/?view=cm&to=mdmahmudulislam00@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send Email"
        className="inline-block px-6 py-3 border border-teal-400 text-teal-400 rounded transition-all duration-300
             hover:shadow-[4px_4px_0px_0px_#64ffda] 
             hover:-translate-y-1 hover:-translate-x-1"
      >
        Say Hello
      </a>
    </section>
  );
};

export default GetInTouch;
