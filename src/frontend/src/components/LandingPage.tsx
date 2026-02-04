import { Phone, Star, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function LandingPage() {
  const phoneNumber = '+918000262644';
  const displayPhone = '80002 62644';
  const whatsappLink = 'https://wa.me/918000262644';

  const services = [
    {
      icon: '🛋️',
      title: 'Sofa Cleaning',
      description: 'Deep shampoo cleaning and professional stain removal service for your sofas.',
    },
    {
      icon: '❄️',
      title: 'Split AC Service',
      description: 'AC service with jet pump wash for 100% full cooling performance.',
    },
    {
      icon: '🧺',
      title: 'Carpet Cleaning',
      description: 'Best dry and wet cleaning for office and home carpets.',
    },
    {
      icon: '🪑',
      title: 'Chair Cleaning',
      description: 'Perfect hygienic cleaning for office and dining chairs.',
    },
    {
      icon: '🛏️',
      title: 'Mattress Cleaning',
      description: 'Remove dust and bacteria from mattresses, making them like new.',
    },
    {
      icon: '📍',
      title: 'Service Areas',
      description: 'Ahmedabad and Gandhinagar (Nikol, Naroda, Bapunagar and all areas)',
      highlight: true,
    },
  ];

  const testimonials = [
    {
      initial: 'R',
      name: 'Ramesh Patel',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      review: 'Best sofa cleaning service in Nikol. They made my sofa look brand new. Excellent work.',
    },
    {
      initial: 'S',
      name: 'Sanjay Shah',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      review: 'I got my AC serviced and the results were amazing. The staff is very polite. Definitely try them.',
    },
    {
      initial: 'A',
      name: 'Ankit Mehra',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      review: 'Mattress and carpet cleaning was done very meticulously. Magical Service truly works like magic.',
    },
  ];

  const renderStars = () => {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/generated/magical-service-logo.dim_512x512.png" 
              alt="Magical Service" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-navy-blue">Magical Service</span>
          </div>
          <a
            href={`tel:${phoneNumber}`}
            className="bg-navy-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-navy-blue-dark transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(30, 41, 59, 0.8)), url('/assets/generated/hero-sofa-cleaning.dim_1920x900.jpg')`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
            Magical Sofa Cleaning Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 font-medium">
            Professional Cleaning in Ahmedabad & Gandhinagar
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappLink}
              className="bg-whatsapp text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-whatsapp-dark transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 transform"
            >
              <SiWhatsapp className="text-2xl" />
              WhatsApp Inquiry
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white text-navy-blue px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 transform"
            >
              <Phone className="h-5 w-5" />
              Call: {displayPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Our Premium Services
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Professional cleaning solutions for homes and offices across Ahmedabad and Gandhinagar
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${
                service.highlight
                  ? 'bg-gradient-to-br from-navy-blue to-navy-blue-dark text-white'
                  : 'bg-white'
              } p-8 rounded-2xl shadow-md border-b-4 ${
                service.highlight ? 'border-blue-400' : 'border-navy-blue'
              } hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-6xl mb-5 text-center">{service.icon}</div>
              <h3
                className={`text-2xl font-bold mb-3 text-center ${
                  service.highlight ? 'text-white' : 'text-gray-900'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-center text-lg ${
                  service.highlight ? 'text-blue-100' : 'text-gray-600'
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            અમારા સર્વિસ વિસ્તારો (Service Areas)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4 border-b border-blue-200 pb-2 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                અમદાવાદ (All Over Ahmedabad)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 text-sm">
                <span>નિકોલ</span>
                <span>નરોડા</span>
                <span>બાપુનગર</span>
                <span>ઓઢવ</span>
                <span>વસ્ત્રાલ</span>
                <span>મણિનગર</span>
                <span>સેટેલાઇટ</span>
                <span>પ્રહલાદનગર</span>
                <span>બોડકદેવ</span>
                <span>થલતેજ</span>
                <span>ગોતા</span>
                <span>ચાંદલોડિયા</span>
                <span>રાણીપ</span>
                <span>નવા વાડજ</span>
                <span>સાબરમતી</span>
                <span>નવરંગપુરા</span>
                <span>પાલડી</span>
                <span>વાસણા</span>
                <span>સી.જી. રોડ</span>
                <span>એસ.જી. હાઈવે</span>
                <span>વેજલપુર</span>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold text-green-700 mb-4 border-b border-green-200 pb-2 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                ગાંધીનગર (All Over Gandhinagar)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 text-sm">
                <span>સેક્ટર ૧ થી ૩૦</span>
                <span>સરગાસણ</span>
                <span>કુડાસણ</span>
                <span>રાયસણ</span>
                <span>ઈન્ફોસિટી</span>
                <span>ગિફ્ટ સિટી</span>
                <span>ચિલોડા</span>
                <span>અડાલજ</span>
                <span>પેથાપુર</span>
                <span>વાવોલ</span>
                <span>કોબા</span>
                <span>ઝુંડાલ</span>
              </div>
            </div>
          </div>
          
          <p className="text-center mt-8 text-gray-600 italic">
            * ઉપર દર્શાવેલ તમામ વિસ્તારોમાં અમે <strong>Home Service</strong> પૂરી પાડીએ છીએ.
          </p>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer Trust</h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-800">5.0</span>
              <div className="flex text-yellow-400 text-xl">
                {renderStars()}
              </div>
              <span className="text-gray-600">(210+ Reviews on Google)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-400"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-10 h-10 ${testimonial.bgColor} rounded-full flex items-center justify-center font-bold ${testimonial.textColor} mr-3`}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400 text-sm">
                      {renderStars()}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Find Us</h2>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-white max-w-6xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.742358316416!2d72.6652431!3d23.0353164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e870020120123%3A0x6soC4Epe0YGTqZRnj!2sMagical%20Service!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Magical Service Location"
            />
          </div>
          <p className="mt-6 text-gray-700 font-bold text-lg">
            Service Areas: Nikol, Naroda, Bapunagar, Odhav and all of Ahmedabad-Gandhinagar
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/assets/generated/magical-service-logo.dim_512x512.png" 
              alt="Magical Service" 
              className="h-12 w-12 object-contain"
            />
            <h3 className="text-3xl font-bold italic text-blue-400">
              Magical Sofa Cleaning Service
            </h3>
          </div>
          <p className="text-lg text-gray-300 mb-6">Contact Us: {displayPhone}</p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href={`tel:${phoneNumber}`}
              className="text-white bg-navy-blue p-4 rounded-full hover:bg-navy-blue-dark transition-all duration-300 hover:scale-110 transform shadow-lg"
              aria-label="Call us"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href={whatsappLink}
              className="text-white bg-whatsapp p-4 rounded-full hover:bg-whatsapp-dark transition-all duration-300 hover:scale-110 transform shadow-lg"
              aria-label="WhatsApp us"
            >
              <SiWhatsapp className="text-2xl" />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              &copy; 2026 Magical Service | Best Cleaning in Ahmedabad
            </p>
            <p className="text-gray-600 mt-2 text-sm">
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
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        className="fixed bottom-6 right-6 bg-whatsapp text-white p-5 rounded-full shadow-2xl hover:bg-whatsapp-dark transition-all duration-300 z-50 hover:scale-110 transform animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp className="text-4xl" />
      </a>
    </div>
  );
}
