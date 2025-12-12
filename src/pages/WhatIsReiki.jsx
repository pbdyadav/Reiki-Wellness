
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Zap, Globe, Users } from 'lucide-react';

const WhatIsReiki = () => {
  return (
    <>
      <Helmet>
        <title>What is Reiki? - Understanding Universal Life Energy | Reiki Wellness</title>
        <meta name="description" content="Learn about Reiki, the ancient Japanese healing technique that channels universal life energy for physical, emotional, and spiritual wellness. Discover its origins and benefits." />
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
                What is{' '}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Reiki?
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the ancient art of healing through universal life energy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="font-display text-3xl font-semibold text-gray-800 mb-4">
                    The Sacred Art of Energy Healing
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Reiki (pronounced "ray-key") is a Japanese healing technique that means 
                    "universal life energy." It was developed by Mikao Usui in the early 1900s 
                    and is based on the principle that a therapist can channel energy into the 
                    patient through touch, activating the natural healing processes of the 
                    patient's body and restoring physical and emotional well-being.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="floating"
              >
                <img  
                  className="w-full rounded-xl shadow-lg aura-glow" 
                  alt="Reiki healing energy flowing through hands"
                 src="/w_i_reiki.png" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                The Sacred Origins
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the spiritual foundation of Reiki healing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img  
                  className="w-full rounded-xl shadow-lg" 
                  alt="Dr. Mikao Usui, founder of Reiki"
                 src="https://images.unsplash.com/photo-1684367208541-0cf1c4e1cc29" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-display text-2xl font-semibold text-gray-800 mb-4">
                    Dr. Mikao Usui's Discovery
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    In 1922, Dr. Mikao Usui experienced a spiritual awakening during a 
                    21-day meditation retreat on Mount Kurama in Japan. During this sacred 
                    time, he received the gift of Reiki - the ability to heal through 
                    universal life energy.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-display text-2xl font-semibold text-gray-800 mb-4">
                    The Five Principles
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• Just for today, I will not be angry</p>
                    <p>• Just for today, I will not worry</p>
                    <p>• Just for today, I will be grateful</p>
                    <p>• Just for today, I will do my work honestly</p>
                    <p>• Just for today, I will be kind to every living thing</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                The Healing Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding how Reiki energy flows and heals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Energy Channel',
                  description: 'The practitioner acts as a channel for universal life energy'
                },
                {
                  icon: Zap,
                  title: 'Energy Flow',
                  description: 'Healing energy flows through the hands to the recipient'
                },
                {
                  icon: Globe,
                  title: 'Holistic Healing',
                  description: 'Addresses physical, emotional, mental, and spiritual aspects'
                },
                {
                  icon: Users,
                  title: 'Natural Balance',
                  description: 'Restores natural energy balance and promotes self-healing'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Benefits of Reiki Healing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience transformation on multiple levels of being
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Physical Benefits',
                  benefits: [
                    'Pain relief and faster healing',
                    'Improved sleep quality',
                    'Enhanced immune system',
                    'Reduced inflammation',
                    'Better circulation'
                  ]
                },
                {
                  title: 'Emotional Benefits',
                  benefits: [
                    'Stress and anxiety reduction',
                    'Emotional balance',
                    'Release of trauma',
                    'Increased self-awareness',
                    'Inner peace and calm'
                  ]
                },
                {
                  title: 'Spiritual Benefits',
                  benefits: [
                    'Spiritual awakening',
                    'Enhanced intuition',
                    'Connection to higher self',
                    'Clarity of purpose',
                    'Expanded consciousness'
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="font-display text-2xl font-semibold text-gray-800 mb-4 text-center">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <Heart className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatIsReiki;
