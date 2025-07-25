
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Circle, Heart, Eye, Crown, Zap } from 'lucide-react';

const ChakrasExplained = () => {
  const [selectedChakra, setSelectedChakra] = useState(0);

  const chakras = [
    {
      name: 'Root Chakra',
      sanskrit: 'Muladhara',
      color: '#DC2626',
      location: 'Base of spine',
      element: 'Earth',
      mantra: 'LAM',
      description: 'The foundation of our energy system, governing survival, grounding, and basic needs.',
      physicalAspects: 'Legs, feet, bones, large intestine, adrenal glands',
      emotionalAspects: 'Security, stability, survival instincts, feeling grounded',
      imbalanceSymptoms: 'Anxiety, fear, restlessness, digestive issues, lower back pain',
      healingMethods: 'Grounding exercises, red foods, root vegetables, walking barefoot',
      affirmation: 'I am safe, secure, and grounded in this moment',
      image: 'Red glowing energy center at the base of spine with earth element symbols'
    },
    {
      name: 'Sacral Chakra',
      sanskrit: 'Svadhisthana',
      color: '#EA580C',
      location: 'Lower abdomen, below navel',
      element: 'Water',
      mantra: 'VAM',
      description: 'The center of creativity, sexuality, and emotional expression.',
      physicalAspects: 'Reproductive organs, kidneys, bladder, lower back',
      emotionalAspects: 'Creativity, sexuality, emotions, relationships, pleasure',
      imbalanceSymptoms: 'Creative blocks, relationship issues, sexual dysfunction, guilt',
      healingMethods: 'Creative activities, orange foods, water therapy, hip movements',
      affirmation: 'I embrace my creativity and allow my emotions to flow freely',
      image: 'Orange glowing energy center in lower abdomen with water element symbols'
    },
    {
      name: 'Solar Plexus Chakra',
      sanskrit: 'Manipura',
      color: '#EAB308',
      location: 'Upper abdomen, stomach area',
      element: 'Fire',
      mantra: 'RAM',
      description: 'The center of personal power, confidence, and self-esteem.',
      physicalAspects: 'Stomach, liver, gallbladder, pancreas, digestive system',
      emotionalAspects: 'Personal power, confidence, self-worth, decision making',
      imbalanceSymptoms: 'Low self-esteem, control issues, digestive problems, fatigue',
      healingMethods: 'Yellow foods, core strengthening, sun exposure, empowerment practices',
      affirmation: 'I am confident, powerful, and worthy of love and respect',
      image: 'Yellow glowing energy center in upper abdomen with fire element symbols'
    },
    {
      name: 'Heart Chakra',
      sanskrit: 'Anahata',
      color: '#16A34A',
      location: 'Center of chest',
      element: 'Air',
      mantra: 'YAM',
      description: 'The center of love, compassion, and connection to others.',
      physicalAspects: 'Heart, lungs, arms, hands, circulatory system',
      emotionalAspects: 'Love, compassion, forgiveness, relationships, empathy',
      imbalanceSymptoms: 'Difficulty loving, jealousy, heart problems, respiratory issues',
      healingMethods: 'Green foods, heart-opening yoga, loving-kindness meditation',
      affirmation: 'I give and receive love freely and unconditionally',
      image: 'Green glowing energy center in chest with heart and air element symbols'
    },
    {
      name: 'Throat Chakra',
      sanskrit: 'Vishuddha',
      color: '#2563EB',
      location: 'Throat area',
      element: 'Space/Ether',
      mantra: 'HAM',
      description: 'The center of communication, truth, and self-expression.',
      physicalAspects: 'Throat, neck, thyroid, mouth, ears',
      emotionalAspects: 'Communication, truth, self-expression, creativity',
      imbalanceSymptoms: 'Difficulty speaking truth, throat problems, fear of judgment',
      healingMethods: 'Blue foods, singing, chanting, honest communication',
      affirmation: 'I speak my truth with clarity, confidence, and compassion',
      image: 'Blue glowing energy center in throat with communication symbols'
    },
    {
      name: 'Third Eye Chakra',
      sanskrit: 'Ajna',
      color: '#7C3AED',
      location: 'Between eyebrows',
      element: 'Light',
      mantra: 'OM',
      description: 'The center of intuition, wisdom, and spiritual insight.',
      physicalAspects: 'Brain, eyes, pineal gland, nervous system',
      emotionalAspects: 'Intuition, wisdom, imagination, psychic abilities',
      imbalanceSymptoms: 'Lack of clarity, poor intuition, headaches, vision problems',
      healingMethods: 'Meditation, purple foods, visualization, third eye activation',
      affirmation: 'I trust my intuition and see clearly with inner wisdom',
      image: 'Indigo glowing energy center between eyebrows with eye and light symbols'
    },
    {
      name: 'Crown Chakra',
      sanskrit: 'Sahasrara',
      color: '#9333EA',
      location: 'Top of head',
      element: 'Thought/Consciousness',
      mantra: 'SILENCE/OM',
      description: 'The center of spiritual connection and divine consciousness.',
      physicalAspects: 'Brain, nervous system, pituitary gland',
      emotionalAspects: 'Spirituality, enlightenment, connection to divine',
      imbalanceSymptoms: 'Spiritual disconnection, depression, confusion, headaches',
      healingMethods: 'Meditation, prayer, violet foods, spiritual practices',
      affirmation: 'I am connected to the divine and trust in the wisdom of the universe',
      image: 'Violet glowing energy center at crown of head with divine light symbols'
    }
  ];

  return (
    <>
      <Helmet>
        <title>7 Chakras Explained - Complete Guide to Energy Centers | Reiki Wellness</title>
        <meta name="description" content="Comprehensive guide to the 7 chakras - their colors, locations, healing properties, and balancing techniques. Learn about energy centers for spiritual wellness." />
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
                The Seven{' '}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Chakras
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding your energy centers for optimal physical, emotional, and spiritual well-being
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl font-semibold text-gray-800 mb-4">
                Your Body's Energy System
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Chakras are spinning wheels of energy located along your spine. When balanced, 
                they promote health, vitality, and spiritual growth. When blocked or imbalanced, 
                they can cause physical, emotional, and spiritual difficulties.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Chakra Selector */}
        <section className="py-10 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {chakras.map((chakra, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedChakra(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    selectedChakra === index 
                      ? 'bg-white shadow-lg scale-105' 
                      : 'bg-white/70 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: chakra.color }}
                  ></div>
                  <span className="font-medium text-gray-800">{chakra.name}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Selected Chakra Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              key={selectedChakra}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="text-center">
                <div className="floating">
                  <img  
                    className="w-80 h-80 mx-auto rounded-full shadow-2xl aura-glow object-cover" 
                    alt={`${chakras[selectedChakra].name} energy center visualization`}
                   src="https://images.unsplash.com/photo-1695319252843-5af212c1965d" />
                </div>
                
                <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">
                    {chakras[selectedChakra].name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">
                    {chakras[selectedChakra].sanskrit}
                  </p>
                  <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                    <span>Element: {chakras[selectedChakra].element}</span>
                    <span>•</span>
                    <span>Mantra: {chakras[selectedChakra].mantra}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Circle className="h-5 w-5 mr-2" style={{ color: chakras[selectedChakra].color }} />
                    Location & Description
                  </h4>
                  <p className="text-gray-600 mb-3">
                    <strong>Location:</strong> {chakras[selectedChakra].location}
                  </p>
                  <p className="text-gray-600">
                    {chakras[selectedChakra].description}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-red-500" />
                    Physical Aspects
                  </h4>
                  <p className="text-gray-600">
                    {chakras[selectedChakra].physicalAspects}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-blue-500" />
                    Emotional Aspects
                  </h4>
                  <p className="text-gray-600">
                    {chakras[selectedChakra].emotionalAspects}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                    Imbalance Symptoms
                  </h4>
                  <p className="text-gray-600">
                    {chakras[selectedChakra].imbalanceSymptoms}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Crown className="h-5 w-5 mr-2 text-purple-500" />
                    Healing Methods
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {chakras[selectedChakra].healingMethods}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">Affirmation:</p>
                    <p className="text-gray-600 italic">
                      "{chakras[selectedChakra].affirmation}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Chakra Overview */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Complete Chakra System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A visual guide to all seven energy centers and their properties
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6">
              {chakras.map((chakra, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedChakra(index)}
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: chakra.color }}
                  >
                    <Circle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-gray-800 mb-1">
                    {chakra.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {chakra.sanskrit}
                  </p>
                  <p className="text-xs text-gray-500">
                    {chakra.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Balancing Tips */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Daily Chakra Balancing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple practices to keep your energy centers aligned and flowing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Meditation',
                  description: 'Daily meditation focusing on each chakra with visualization and breathing'
                },
                {
                  icon: Circle,
                  title: 'Color Therapy',
                  description: 'Wear or visualize chakra colors to activate and balance energy centers'
                },
                {
                  icon: Zap,
                  title: 'Sound Healing',
                  description: 'Use mantras, singing bowls, or tuning forks for vibrational healing'
                },
                {
                  icon: Crown,
                  title: 'Crystal Healing',
                  description: 'Place corresponding crystals on chakra points during meditation'
                }
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                    <tip.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600">
                    {tip.description}
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

export default ChakrasExplained;
