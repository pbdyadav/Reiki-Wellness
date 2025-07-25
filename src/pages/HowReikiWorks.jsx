
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Hand, Zap, Circle, Waves } from 'lucide-react';

const HowReikiWorks = () => {
  const chakras = [
    { name: 'Root', color: 'bg-red-500', position: 'Base of spine' },
    { name: 'Sacral', color: 'bg-orange-500', position: 'Lower abdomen' },
    { name: 'Solar Plexus', color: 'bg-yellow-500', position: 'Upper abdomen' },
    { name: 'Heart', color: 'bg-green-500', position: 'Center of chest' },
    { name: 'Throat', color: 'bg-blue-500', position: 'Throat area' },
    { name: 'Third Eye', color: 'bg-indigo-500', position: 'Between eyebrows' },
    { name: 'Crown', color: 'bg-purple-500', position: 'Top of head' }
  ];

  return (
    <>
      <Helmet>
        <title>How Reiki Works - Energy Flow, Hand Positions & Chakra Healing | Reiki Wellness</title>
        <meta name="description" content="Understand how Reiki healing works through energy flow, hand positions, and chakra balancing. Learn about the science and spirituality behind this ancient healing art." />
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
                How{' '}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Reiki Works
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the sacred mechanics of energy healing and spiritual transformation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Energy Flow Section */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                The Flow of Universal Energy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how life force energy moves through the body to create healing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="font-display text-2xl font-semibold text-gray-800 mb-4">
                    Universal Life Force (Ki)
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Ki (also known as Chi or Prana) is the universal life force energy that flows 
                    through all living beings. When this energy is low or blocked, we experience 
                    illness, stress, and emotional imbalance.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Reiki practitioners channel this universal energy through their hands, 
                    allowing it to flow where it's needed most in the recipient's body, 
                    mind, and spirit.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Waves, title: 'Energy Channels', desc: 'Meridians and nadis' },
                    { icon: Circle, title: 'Energy Centers', desc: 'Chakras and aura' },
                    { icon: Zap, title: 'Energy Flow', desc: 'Balanced circulation' },
                    { icon: Hand, title: 'Healing Touch', desc: 'Gentle transmission' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow text-center">
                      <item.icon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
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
                  alt="Energy flow through human body showing chakras and aura"
                 src="https://images.unsplash.com/photo-1645823207300-3820fa325a1c" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hand Positions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Sacred Hand Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Traditional hand placements for optimal energy transmission
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  position: 'Head Positions',
                  areas: ['Crown of head', 'Eyes and temples', 'Ears', 'Back of head'],
                  benefits: 'Mental clarity, stress relief, spiritual connection'
                },
                {
                  position: 'Front Body',
                  areas: ['Throat', 'Heart', 'Solar plexus', 'Lower abdomen'],
                  benefits: 'Emotional balance, organ healing, digestive health'
                },
                {
                  position: 'Back Body',
                  areas: ['Shoulders', 'Heart back', 'Kidneys', 'Lower back'],
                  benefits: 'Tension release, kidney support, grounding energy'
                },
                {
                  position: 'Limbs',
                  areas: ['Shoulders', 'Arms', 'Hands', 'Legs and feet'],
                  benefits: 'Circulation improvement, joint healing, energy grounding'
                },
                {
                  position: 'Chakra Focus',
                  areas: ['Root chakra', 'Heart chakra', 'Third eye', 'Crown chakra'],
                  benefits: 'Energy center balancing, spiritual awakening'
                },
                {
                  position: 'Aura Healing',
                  areas: ['Energy field', 'Aura layers', 'Etheric body', 'Astral body'],
                  benefits: 'Energetic cleansing, protection, spiritual alignment'
                }
              ].map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                    {position.position}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Areas:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {position.areas.map((area, areaIndex) => (
                          <li key={areaIndex} className="flex items-center">
                            <Hand className="h-3 w-3 text-purple-600 mr-2" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Benefits:</h4>
                      <p className="text-sm text-gray-600">{position.benefits}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Chakra System */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                The Chakra System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seven energy centers that govern physical, emotional, and spiritual well-being
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img  
                  className="w-full rounded-xl shadow-lg" 
                  alt="Seven chakras aligned in meditation pose"
                 src="https://images.unsplash.com/photo-1544591800-efe3083918fe" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {chakras.map((chakra, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow"
                  >
                    <div className={`w-8 h-8 rounded-full ${chakra.color} flex-shrink-0`}></div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{chakra.name} Chakra</h3>
                      <p className="text-sm text-gray-600">{chakra.position}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Healing Process */}
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
                What happens during a Reiki session and how healing unfolds
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Preparation',
                  description: 'Creating sacred space, setting intentions, and connecting to universal energy'
                },
                {
                  step: '2',
                  title: 'Energy Assessment',
                  description: 'Sensing energy blocks, imbalances, and areas needing healing attention'
                },
                {
                  step: '3',
                  title: 'Energy Transmission',
                  description: 'Channeling healing energy through hands to restore balance and harmony'
                },
                {
                  step: '4',
                  title: 'Integration',
                  description: 'Allowing the body to integrate new energy patterns and begin healing'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-3">
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
      </div>
    </>
  );
};

export default HowReikiWorks;
