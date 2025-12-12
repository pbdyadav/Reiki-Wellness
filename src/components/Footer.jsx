
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-violet-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-300" />
              <span className="font-display text-2xl font-bold">Reiki Wellness</span>
            </div>
            <p className="text-purple-200">
              Healing through divine energy and spiritual guidance for over 24 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/what-is-reiki" className="block text-purple-200 hover:text-white transition-colors">
                What is Reiki?
              </Link>
              <Link to="/about-healer" className="block text-purple-200 hover:text-white transition-colors">
                About Healer
              </Link>
              <Link to="/chakras" className="block text-purple-200 hover:text-white transition-colors">
                Chakras
              </Link>
              <Link to="/meditation" className="block text-purple-200 hover:text-white transition-colors">
                Meditation
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Services</span>
            <div className="space-y-2">
              <Link to="/store" className="block text-purple-200 hover:text-white transition-colors">
                Healing Sessions
              </Link>
              <Link to="/reiki-tools" className="block text-purple-200 hover:text-white transition-colors">
                Reiki Tools
              </Link>
              <Link to="/store" className="block text-purple-200 hover:text-white transition-colors">
                Online Store
              </Link>
              <Link to="/guru-parampara" className="block text-purple-200 hover:text-white transition-colors">
                Guru Parampara
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-300" />
                <span className="text-purple-200">+91 94250 59664</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-300" />
                <span className="text-purple-200">nitinagrawal5@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-300" />
                <span className="text-purple-200">Annapurna Road, Indore, Madhy Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-200">
            © 2024 Reiki Wellness. All rights reserved. | Domain: reikiwellness.in
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
