import { Phone, Sofa, Snowflake } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function LandingPage() {
  const phoneNumber = '+918000262644';
  const displayPhone = '80002 62644';
  const upiId = 'jrg7311@okicici';

  // Image error handler for logo
  const [logoError, setLogoError] = useState(false);

  // UPI card fade-in animation state
  const [isUpiVisible, setIsUpiVisible] = useState(false);
  const upiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsUpiVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (upiRef.current) {
      observer.observe(upiRef.current);
    }

    return () => {
      if (upiRef.current) {
        observer.unobserve(upiRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Sticky Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-orange-400">
              <img
                src={
                  logoError
                    ? 'https://img.icons8.com/color/96/000000/cleaning-service.png'
                    : 'https://magical-sofa-cleaning-7pe.caffeine.xyz/logo.png'
                }
                onError={() => setLogoError(true)}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-black text-blue-900 leading-none">MAGICAL</h1>
              <p className="text-[10px] font-bold text-orange-600 tracking-widest uppercase">SERVICE</p>
            </div>
          </div>
          <a
            href={`tel:${phoneNumber}`}
            className="bg-blue-700 text-white px-5 py-2 rounded-xl font-bold shadow-md hover:bg-blue-800 transition flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            {displayPhone}
          </a>
        </div>
      </nav>

      {/* Services and Rate List Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Our Special Services and Rate List</h2>
          <p className="text-blue-600 font-bold italic">Most affordable rates in Ahmedabad & Gandhinagar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-orange-500">
            <h3 className="text-2xl font-black mb-6 text-orange-800 border-b-2 border-orange-100 pb-2 flex items-center gap-2">
              <Sofa className="h-6 w-6" />
              Cleaning
            </h3>
            <ul className="space-y-4 font-bold text-gray-700">
              <li className="flex justify-between">
                <span>Sofa Cleaning</span> <span className="text-orange-700">₹90/ft</span>
              </li>
              <li className="flex justify-between">
                <span>Mattress Cleaning</span> <span className="text-orange-700">₹599</span>
              </li>
              <li className="flex justify-between">
                <span>Carpet Cleaning</span> <span className="text-orange-700">₹15/sq.ft</span>
              </li>
              <li className="flex justify-between">
                <span>Chair Cleaning</span> <span className="text-orange-700">₹100 - 150</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-blue-500">
            <h3 className="text-2xl font-black mb-6 text-blue-800 border-b-2 border-blue-100 pb-2 flex items-center gap-2">
              <Snowflake className="h-6 w-6" />
              AC Service
            </h3>
            <ul className="space-y-4 font-bold text-gray-700">
              <li className="flex justify-between">
                <span>AC Water Jet Service</span> <span className="text-blue-700">₹499</span>
              </li>
              <li className="flex justify-between">
                <span>AC Foam Jet Service</span> <span className="text-blue-700">₹599</span>
              </li>
              <li className="flex justify-between">
                <span>AC Gas Refilling</span> <span className="text-blue-700">₹3499</span>
              </li>
              <li className="flex justify-between">
                <span>AC Repairing</span> <span className="text-blue-700">Start ₹200</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* UPI Payment Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div
            ref={upiRef}
            className={`max-w-sm mx-auto bg-blue-50 p-6 rounded-3xl border-2 border-blue-200 shadow-lg transition-all duration-700 ${
              isUpiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-4">Pay Online via UPI</h3>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=jrg7311@okicici&pn=Magical%20Service&cu=INR"
              alt="QR Code"
              className="mx-auto mb-4 rounded-xl border-4 border-white shadow-sm"
            />
            <p className="font-black text-blue-700">UPI ID: {upiId}</p>
            <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-tighter">
              Ahmedabad & Gandhinagar
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 text-center">
        <p className="text-sm font-bold opacity-60">© 2026 Magical Service - Professional Cleaning Experts</p>
        <p className="text-xs text-gray-500 mt-2">
          Built with <span className="text-red-400">♥</span> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
