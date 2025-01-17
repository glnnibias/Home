// import React from 'react';

// const App = () => {
//   return (
//     <div className="font-sans">
//       {/* Header */}
      
//       <header className="bg-white shadow sticky top-0 z-50">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         <div className="flex items-center space-x-2">
//             <img
//               src="https://via.placeholder.com/40" // Replace with your logo URL
//               alt="Logo"
//               className="h-8 w-8"
//             />
//             <h1 className="text-lg font-bold text-green-800">
//               Southern Luzon State University Procurement Office
//             </h1>
//           </div>
          
//           <nav>
//             <ul className="hidden md:flex space-x-6">
//               <li><a href="#about" className="hover:text-green-600">About</a></li>
//               <li><a href="#targets" className="hover:text-green-600">Key Targets</a></li>
//               <li><a href="#faq" className="hover:text-green-600">FAQs</a></li>
//               <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
//             </ul>
//             <button className="md:hidden text-green-600">Menu</button>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-green-100 py-16">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-3xl md:text-5xl font-bold text-green-700">Driving efficiency and value in every procurement step.</h1>
//           <p className="mt-4 text-lg md:text-xl">Let us streamline procurement and create significant value for our institution.</p>
//           <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">Explore</button>
//         </div>
//         <img src="/path/to/hero-image.jpg" alt="Hero" className="w-full mt-6" />
//       </section>

//       {/* Procurement Explanation Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-2xl md:text-4xl font-bold">What is Procurement?</h2>
//           <p className="mt-4 text-lg md:text-xl">The procurement process is defined as sourcing and acquiring goods and services to efficiently meet the needs of the institution.</p>
//         </div>
//         <div className="mt-8 flex justify-center">
//           <img src="/path/to/procurement-diagram.jpg" alt="Procurement" className="max-w-full rounded-lg shadow-lg" />
//         </div>
//       </section>

//       {/* Key Targets Section */}
//       <section id="targets" className="py-16 bg-green-700 text-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-2xl md:text-4xl font-bold text-center">Procurement Office Key Targets</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//             <div className="bg-green-600 p-6 rounded-lg text-center">
//               <h3 className="text-lg md:text-xl font-bold">01</h3>
//               <p>Efficiency in Procurement Process</p>
//             </div>
//             <div className="bg-green-600 p-6 rounded-lg text-center">
//               <h3 className="text-lg md:text-xl font-bold">02</h3>
//               <p>Procurement of Ethical and Sustainable Goods</p>
//             </div>
//             <div className="bg-green-600 p-6 rounded-lg text-center">
//               <h3 className="text-lg md:text-xl font-bold">03</h3>
//               <p>Cost-Saving Strategies</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-2xl md:text-4xl font-bold">About</h2>
//           <p className="mt-4 text-lg md:text-xl">The Procurement Management System of Southern Luzon State University is tasked to ensure the efficient, transparent, and timely acquisition of goods and services to support the University's mission of excellence and sustainability.</p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//             <div>
//               <h3 className="text-lg md:text-xl font-bold">Our Mission</h3>
//               <p className="mt-2">To provide ethical and sustainable procurement solutions that add value to stakeholders and support institutional objectives.</p>
//             </div>
//             <div>
//               <h3 className="text-lg md:text-xl font-bold">Our Vision</h3>
//               <p className="mt-2">To be a model of efficiency and transparency in procurement, serving as a benchmark for other institutions.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-2xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <h3 className="text-base md:text-lg font-bold">What is the procurement system?</h3>
//               <p className="mt-2">The procurement system ensures timely and efficient acquisition of goods and services.</p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <h3 className="text-base md:text-lg font-bold">How can I make a request?</h3>
//               <p className="mt-2">You can make a request by contacting the Procurement Office directly.</p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <h3 className="text-base md:text-lg font-bold">What are the office hours?</h3>
//               <p className="mt-2">Our office operates from 8:00 AM to 5:00 PM, Monday to Friday.</p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <h3 className="text-base md:text-lg font-bold">Who can I contact for queries?</h3>
//               <p className="mt-2">You can email us at procurement@slsu.edu.ph for any questions.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-2xl md:text-4xl font-bold">Contact Us</h2>
//           <form className="mt-8 max-w-lg mx-auto">
//             <div className="grid grid-cols-1 gap-6">
//               <input type="text" placeholder="Your Name" className="p-4 rounded-lg border border-gray-300" />
//               <input type="email" placeholder="Your Email" className="p-4 rounded-lg border border-gray-300" />
//               <textarea placeholder="Your Message" className="p-4 rounded-lg border border-gray-300 h-32"></textarea>
//               <button type="submit" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">Send Message</button>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-green-700 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2023 Southern Luzon State University | Lucban, Quezon, Philippines</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;
