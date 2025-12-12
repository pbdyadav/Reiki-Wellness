
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCard from "@/components/AnimatedCard";


const Home = () => {
  const [fullImage, setFullImage] = React.useState(null);
  return (
    <>
      <Helmet>
        <title>Reiki Wellness - Spiritual Healing & Energy Therapy by Master Nitin Agrawal</title>
        <meta name="description" content="Experience divine healing with Reiki Master Nitin Agrawal. 24+ years of spiritual healing, energy therapy, chakra balancing, and meditation guidance in Indore, India." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center spiritual-gradient mandala-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="floating">
              <img
                src="/Home_Logo.png"
                className="w-60 h-60 mx-auto rounded-full aura-glow"
                alt="Reiki Wellness Logo"
              />
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Reiki Wellness
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience divine healing and spiritual transformation with
              <br />
              <span className="font-semibold text-purple-700">Reiki Master Nitin Agrawal</span>
              <br />
              <span className="text-lg">24+ Years of Sacred Healing Journey</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/store">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 text-lg">
                  Book Healing Session
                </Button>
              </Link>
              <Link to="/what-is-reiki">
                <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg">
                  Learn About Reiki
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 floating pulse-gentle">
          {/*<Heart className="h-8 w-8 text-purple-400" /> */}
        </div>
        <div className="absolute bottom-20 right-10 floating pulse-gentle" style={{ animationDelay: '2s' }}>
          <Star className="h-6 w-6 text-violet-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Reiki Wellness?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the transformative power of authentic Reiki healing in a peaceful, sacred environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: '24+ Years Experience',
                description: 'Reiki Master Nitin brings over two decades of healing wisdom and spiritual guidance'
              },
              {
                icon: Heart,
                title: 'Multiple Modalities',
                description: 'Usui Reiki, Karuna, Sanjeevani, Violet Flame, Angelic Reiki, and more'
              },
              {
                icon: Users,
                title: 'Thousands Healed',
                description: 'Countless souls have found peace, healing, and spiritual awakening'
              },
              {
                icon: Star,
                title: 'Sacred Lineage',
                description: 'Direct connection to authentic Guru Parampara and spiritual traditions'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 spiritual-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Sacred Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of healing services and spiritual tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    { title: 'Reiki Healing Sessions', image: '/Reiki_Healing_Sessions.png' },
    { title: 'Sacred Crystals n Tools', image: '/Sacred_Crystals_n_Tools.png' },
    { title: 'Chakra Balancing', image: '/Chakra_Balancing.png' },
    { title: 'Healing Attunement', image: '/Healing_Attunement.png' },
    { title: 'Aura Cleaning', image: '/Aura_Cleaning.png' },
    { title: 'Karmic Healing', image: '/Karmic_Healing.png' },
  ].map((service, i) => (
    <div
      key={i}
      className="relative rounded-xl overflow-hidden cursor-pointer group floating"
      onClick={() => setFullImage(service.image)}
      style={{ animationDelay: `${i * 0.3}s` }}
    >
      {/* Animated Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        className="rounded-xl shadow-xl hover:shadow-2xl transition-all aura-glow"
      >
        {/* Image */}
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
        />
      </motion.div>

      {/* Shine Animation */}
      <div className="absolute inset-0 crystal-shine rounded-xl pointer-events-none"></div>

      {/* Glow Aura */}
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 aura-glow"></div>
    </div>
  ))}
</div>
        {/* Fullscreen Image Modal */}
        {fullImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setFullImage(null)}
          >
            <img
              src={fullImage}
              alt="Full View"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl animate-zoom"
            />
          </div>
        )}

      </div>
    </section >

      {/* Call to Action */ }
      < section className = "py-20 bg-gradient-to-r from-purple-600 to-violet-600 text-white" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Begin Your Healing Journey Today
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Take the first step towards spiritual wellness and inner peace.
              Connect with Reiki Master Nitin Agrawal for personalized healing guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/about-healer">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Meet the Healer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section >
    </>
  );
};

export default Home;
