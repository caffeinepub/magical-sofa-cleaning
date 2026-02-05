import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function LandingPage() {
  const phoneNumber = '+918000262644';
  const displayPhone = '80002 62644';
  const upiId = 'jrg7311@okicici';
  const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=jrg7311@okicici&pn=Magical%20Service';
  const reviewUrl = 'https://share.google/CAZwztDsnRKHBaOAM';
  const whatsappUrl = 'https://wa.me/918000262644';

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Sticky Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 p-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <h1 className="text-2xl font-black text-blue-900 leading-none">MAGICAL SERVICE</h1>
              <p className="text-[10px] font-bold text-orange-600 tracking-widest uppercase mt-1">Ahmedabad & Gandhinagar</p>
            </div>
          </div>
          <a
            href={`tel:${phoneNumber}`}
            className="bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            {displayPhone}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 bg-blue-900 text-white text-center px-4">
        <h2 className="text-3xl md:text-5xl font-black mb-4">Professional Cleaning Service</h2>
        <p className="text-blue-200 font-bold mb-8">Trusted Experts in Ahmedabad & Gandhinagar</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={whatsappUrl}
            className="bg-green-600 px-8 py-4 rounded-full font-bold shadow-xl flex items-center justify-center gap-2"
          >
            <SiWhatsapp className="text-xl" />
            WhatsApp Inquiry
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-2 underline decoration-blue-500 underline-offset-8">Our Service Rates</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-b-8 border-blue-500 text-center hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 10v7h3v-7H4M10 10v7h4v-7h-4M2 22h20v-2H2v2M16 10v7h3v-7h-3M20 7H4V4h16v3Z"/>
                </svg>
              </div>
              <h3 className="font-black text-slate-800">Sofa Cleaning</h3>
              <p className="text-orange-600 font-black text-lg">₹90/ft</p>
            </div>
            <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-b-8 border-cyan-500 text-center hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12L12 4M12 6L6 12L12 18L18 12L12 6Z"/>
                </svg>
              </div>
              <h3 className="font-black text-slate-800">AC Jet Service</h3>
              <p className="text-orange-600 font-black text-lg">₹499</p>
            </div>
            <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-b-8 border-purple-500 text-center hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7H5V14H19V7M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2Z"/>
                </svg>
              </div>
              <h3 className="font-black text-slate-800">Mattress</h3>
              <p className="text-orange-600 font-black text-lg">₹599</p>
            </div>
            <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-b-8 border-green-500 text-center hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 5v14h20V5H2m2 2h16v10H4V7m2 2v6h12V9H6Z"/>
                </svg>
              </div>
              <h3 className="font-black text-slate-800 text-sm">Carpet/Chair</h3>
              <p className="text-orange-600 font-black text-lg">Best Rates</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-900 p-8 rounded-[2.5rem] text-white">
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"/>
              </svg>
              <div>
                <h4 className="font-bold">100% Sanitized</h4>
              </div>
            </div>
            <div className="flex items-center gap-4 border-t border-slate-700 pt-4 md:border-t-0 md:pt-0">
              <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
              </svg>
              <div>
                <h4 className="font-bold">Fast Service</h4>
              </div>
            </div>
            <div className="flex items-center gap-4 border-t border-slate-700 pt-4 md:border-t-0 md:pt-0">
              <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
              <div>
                <h4 className="font-bold">Easy Payment</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPI Payment & Review Section */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 shadow-inner mb-8">
            <h3 className="font-black text-blue-900 mb-4 uppercase">Scan to Pay (UPI)</h3>
            <img
              src={qrCodeUrl}
              alt="UPI QR Code"
              className="mx-auto rounded-xl shadow-md mb-4 border-4 border-white"
            />
            <p className="text-sm font-bold text-gray-600">UPI ID: {upiId}</p>
          </div>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-10 py-4 rounded-full font-black shadow-xl hover:scale-105 transition"
          >
            Write a Google Review ⭐⭐⭐⭐⭐
          </a>
        </div>
      </section>

      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 text-2xl"
        aria-label="Contact us on WhatsApp"
      >
        <SiWhatsapp />
      </a>
    </div>
  );
}
