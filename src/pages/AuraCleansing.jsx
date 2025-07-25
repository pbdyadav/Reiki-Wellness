import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Wind, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AuraCleansing = () => {
  return (
    <>
      <Helmet>
        <title>What is Aura & Why Cleanse It? | Reiki Wellness</title>
        <meta name="description" content="Learn about the human aura, your personal energy field. Discover why aura cleansing is essential for spiritual, emotional, and physical well-being and learn simple techniques." />
      </Helmet>

      <div className="min-h-screen spiritual-gradient mandala-bg">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Understanding Your{' '}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Aura
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the vibrant energy field that surrounds you and learn why keeping it clear is vital for your well-being.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Aura Section */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="font-display text-3xl font-semibold text-gray-800 mb-4">
                    What is an Aura?
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    The aura is a vibrant, multi-layered energy field that surrounds every living thing. It's like a personal energetic fingerprint, reflecting your physical, emotional, mental, and spiritual state. This luminous body is composed of different colors and frequencies that change based on your thoughts, feelings, and overall health.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Think of it as your spiritual atmosphere. A healthy, bright aura can attract positive experiences and people, while a dense or dark aura can lead to feelings of fatigue, negativity, and imbalance.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="floating"
              >
                <img 
                  className="w-full rounded-xl shadow-lg aura-glow" 
                  alt="A colorful human aura surrounding a person in meditation"
                 src="https://images.unsplash.com/photo-1618736718700-79c29b5156a3" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Cleanse Your Aura Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Why Do You Need Aura Cleansing?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Just as you clean your physical body, your energy body needs regular cleansing to stay healthy and vibrant.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Remove Negative Energy',
                  description: 'Our aura can pick up negative or stressful energies from people, places, and situations. Cleansing clears this energetic debris.'
                },
                {
                  icon: Sparkles,
                  title: 'Enhance Intuition',
                  description: 'A clear aura allows for a stronger connection to your higher self and intuition, leading to better clarity and decision-making.'
                },
                {
                  icon: Wind,
                  title: 'Improve Mood & Vitality',
                  description: 'Clearing energetic blockages can instantly lift your mood, increase your energy levels, and restore your natural zest for life.'
                },
                {
                  icon: Droplets,
                  title: 'Promote Healing',
                  description: 'A cleansed aura supports the body’s natural healing processes on physical, emotional, and spiritual levels.'
                }
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Cleanse Your Aura Section */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Simple Aura Cleansing Techniques
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You can easily incorporate these practices into your daily routine for a consistently clear and bright aura.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Reiki Healing',
                  description: 'The most effective method. A Reiki Master can channel universal life force energy to cleanse, repair, and balance your entire auric field.',
                  image: 'Reiki practitioner performing aura cleansing with glowing hands'
                },
                {
                  title: 'Smudging with Sage',
                  description: 'Use the smoke from burning sage to smudge your body from head to toe, visualizing the smoke carrying away negativity.',
                  image: 'A hand holding a smoldering white sage stick with smoke trails'
                },
                {
                  title: 'Salt Water Bath',
                  description: 'Soak in a bath with Epsom salts or sea salt. Salt is a powerful crystal that neutralizes and clears negative energy.',
                  image: 'A serene bathtub filled with water, flowers, and salt crystals'
                },
                {
                  title: 'Connecting with Nature',
                  description: 'Spend time in nature. Walk barefoot on the grass, hug a tree, or sit by the ocean to ground your energy and cleanse your aura.',
                  image: 'A person walking barefoot on lush green grass in a sunny forest'
                },
                {
                  title: 'Sound Healing',
                  description: 'Use singing bowls, chimes, or tuning forks. The vibrations help break up stagnant energy in your auric field.',
                  image: 'A Tibetan singing bowl with sound waves emanating from it'
                },
                {
                  title: 'Visualization',
                  description: 'Visualize a brilliant white or golden light surrounding you, washing over your aura and dissolving any dark or heavy spots.',
                  image: 'A meditating person enveloped in a sphere of golden light'
                }
              ].map((technique, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      alt={technique.title}
                     src="https://images.unsplash.com/photo-1544185196-bd8bcb3bcca4" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-gray-800 mb-3">
                      {technique.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {technique.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                Ready for a Deep Aura Cleanse?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                While daily practices are beneficial, a professional Reiki session provides a deep, thorough cleansing and rebalancing that self-care alone cannot achieve. Let Master Nitin Agrawal help restore your energetic sparkle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/store">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 text-lg">
                    Book an Aura Healing Session
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuraCleansing;