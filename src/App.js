import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, X, MessageCircle, ChevronDown, Globe2, Rocket, BookOpen, Users, Mail, Phone, Instagram } from 'lucide-react';
import Profile from './asset/profile.JPG';
import About from './asset/about.jpg';

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const HexagonBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute w-full h-full" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23065f46' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );

  const GlowingOrb = () => (
    <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl" />
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <HexagonBackground />
        <GlowingOrb />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-green-900/50 to-gray-900/50"
          style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-xl opacity-50" />
                <img 
                  src={Profile}
                  alt="Akpama Joseph"
                  className="w-40 h-40 rounded-full border-4 border-green-500 relative z-10 object-cover object-center"
                />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Akpama Joseph
              </span>
            </h1>
            
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-lg opacity-25" />
              <p className="text-3xl md:text-4xl text-green-400 font-light relative">
                For NACOSS Vice President
              </p>
            </div>

            <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light italic">
              "A call to leadership is a call to service"
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                <a
                    href="https://t.me/rehoboth_academy"  // Replace with your Telegram group link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 flex items-center justify-center gap-2"
                  >
                  <Rocket className="w-5 h-5" />
                  Join the Movement
                  </a>
                </span>
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               
                className="px-8 py-4 border-2 border-green-500 rounded-xl text-green-400 hover:bg-green-500/10 transition-colors"
              >
                 <a
                    href="#vision"  
                    className="relative z-10"
                  >
                Explore Vision
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-green-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id='about' className="relative py-32 bg-gray-900">
        <HexagonBackground />
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-2xl opacity-20" />
                <img 
                  src={About}
                  alt="Akpama Joseph"
                  className="relative z-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                />
              </div>
              
              <div className="space-y-8">
                <h2 className="text-5xl font-bold text-green-400 mb-8">About Akpama</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Akpama Joseph is a visionary leader who combines his passion for technology with a deep commitment to community service. As a Genuine Lover of God, crypto enthusiast and accomplished product designer, he brings a unique perspective to leadership that bridges traditional values with cutting-edge innovation.
                </p>
              
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id='vision' className="relative py-32 bg-gray-900/50">
        <HexagonBackground />
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-green-400 mb-20">Our Vision</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Career Development",
                description: "Premium courses made freely accessible to all NACOSS members, empowering students with industry-relevant skills.",
                icon: BookOpen,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Community Growth",
                description: "Establishing the pioneering Veritas Google Developer Community and organizing specialized hackathons.",
                icon: Users,
                color: "from-emerald-500 to-green-500"
              },
              {
                title: "Web3 Innovation",
                description: "Spearheading the Veritas Web3 Community, beginning with an groundbreaking DevCon event.",
                icon: Globe2,
                color: "from-green-400 to-emerald-400"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gray-800 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-colors">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} p-3 mb-6`}>
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with two Telegram buttons */}
      <section id='community' className="relative py-32 bg-gradient-to-b from-gray-900 to-green-900">
        <HexagonBackground />
        <GlowingOrb />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-bold mb-8">Join Our Movement</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Be part of this revolutionary journey. Connect with us through our community channel or reach out directly to Akpama Joseph.<br/> There will be free xCourses on the community group as a sign of our unending vision.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
                href="https://t.me/rehoboth_academy"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center"  
              >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl overflow-hidden inline-flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity" />
                <Send className="w-5 h-5" />
                <span className="relative z-10">Join Community Channel</span>
              </motion.button>
              </a>
            
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-400">Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:akpamajoseph203@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>akpamajoseph203@gmail.com</span>
                  </a>
                  <a href="tel:+234 816 338 1080" className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>+234 816 338 1080</span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-400">Quick Links</h3>
                <div className="space-y-4">
                  <a href="#about" className="block text-gray-300 hover:text-green-400 transition-colors">About</a>
                  <a href="#vision" className="block text-gray-300 hover:text-green-400 transition-colors">Vision</a>
                  <a href="#community" className="block text-gray-300 hover:text-green-400 transition-colors">Community</a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-400">Connect</h3>
                <div className="flex gap-4">
                  {[
                    { Icon: X, link: "https://x.com/JosephAkpama", label: "X" },
                    { Icon: Linkedin, link: "https://www.linkedin.com/in/akpama-joseph-70641b2a1/", label: "LinkedIn" },
                    { Icon: Instagram, link: "https://www.instagram.com/a.joe.s2728/", label: "Instagram" },
                    { Icon: Github, link: "https://github.com/AKPAMAJOSEPH/", label: "Github" },
                    { Icon: MessageCircle, link: "https://wa.me/qr/5WEGC76M37MXE1", label: "Message" },
                    { Icon: Send, link: "http://t.me/AKPAMA_JOSEPH", label: "Telegram" }
                  ].map(({ Icon, link, label }, index) => (
                    <motion.a
                      key={index}
                      href={link}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="p-3 bg-gray-800 rounded-lg hover:bg-green-500/20 cursor-pointer transition-colors"
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6 text-green-400" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2024 Akpama Joseph. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>



    </div>
  );
};

export default LandingPage;