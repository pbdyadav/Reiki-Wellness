
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Play, Pause, Clock, Heart, Brain, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Meditation = () => {
  const [selectedMeditation, setSelectedMeditation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const meditationTypes = [
    {
      id: 1,
      name: 'Guided Meditation',
      duration: '10-30 minutes',
      description: 'Follow along with gentle voice guidance for deep relaxation and inner peace',
      benefits: ['Stress reduction', 'Better sleep', 'Emotional balance', 'Mental clarity'],
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      image: 'Peaceful person in meditation with gentle guidance and soft lighting'
    },
    {
      id: 2,
      name: 'Mantra Meditation',
      duration: '15-45 minutes',
      description: 'Use sacred sounds and repetitive phrases to focus the mind and elevate consciousness',
      benefits: ['Spiritual connection', 'Mind focus', 'Energy activation', 'Divine alignment'],
      icon: Star,
      color: 'from-purple-500 to-violet-500',
      image: 'Person chanting mantras with sacred symbols and spiritual energy'
    },
    {
      id: 3,
      name: 'Silent Meditation',
      duration: '20-60 minutes',
      description: 'Practice pure awareness and mindfulness in complete silence',
      benefits: ['Deep awareness', 'Inner stillness', 'Self-discovery', 'Spiritual growth'],
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      image: 'Serene meditation in complete silence with peaceful mountain backdrop'
    }
  ];

  const guidedMeditations = [
    {
      title: 'Morning Energy Activation',
      duration: '15 min',
      description: 'Start your day with positive energy and intention setting'
    },
    {
      title: 'Chakra Balancing Journey',
      duration: '25 min',
      description: 'Complete chakra alignment and energy healing meditation'
    },
    {
      title: 'Stress Release & Relaxation',
      duration: '20 min',
      description: 'Deep relaxation to release tension and restore peace'
    },
    {
      title: 'Heart Opening Meditation',
      duration: '18 min',
      description: 'Cultivate love, compassion, and emotional healing'
    },
    {
      title: 'Evening Gratitude Practice',
      duration: '12 min',
      description: 'End your day with gratitude and peaceful reflection'
    },
    {
      title: 'Inner Wisdom Connection',
      duration: '30 min',
      description: 'Connect with your higher self and inner guidance'
    }
  ];

  const handlePlayMeditation = (meditation) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${meditation} meditation would start playing.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Meditation Guide - Guided, Mantra & Silent Meditation Practices | Reiki Wellness</title>
        <meta name="description" content="Learn different meditation techniques including guided meditation, mantra chanting, and silent practice. Discover the importance of meditation for daily wellness and spiritual growth." />
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
                The Art of{' '}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Meditation
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover inner peace, clarity, and spiritual connection through the transformative practice of meditation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl font-semibold text-gray-800 mb-4">
                Why Meditation Matters
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Meditation is not just a practice—it's a way of life that brings profound transformation 
                to your mind, body, and spirit. Through regular meditation, you develop the ability to 
                find peace amidst chaos, clarity in confusion, and connection to your true self.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meditation Types */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Types of Meditation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore different meditation styles to find what resonates with your soul
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {meditationTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img  
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      alt={type.name}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center mr-4`}>
                        <type.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-gray-800">
                          {type.name}
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {type.duration}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {type.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="h-3 w-3 text-purple-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      onClick={() => setSelectedMeditation(type.id)}
                      className={`w-full bg-gradient-to-r ${type.color} text-white hover:opacity-90`}
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guided Meditations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Guided Meditation Library
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready-to-use guided meditations for every need and moment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guidedMeditations.map((meditation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-lg font-semibold text-gray-800">
                      {meditation.title}
                    </h3>
                    <span className="text-sm text-purple-600 font-medium">
                      {meditation.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {meditation.description}
                  </p>

                  <Button 
                    onClick={() => handlePlayMeditation(meditation.title)}
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 flex items-center justify-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>Start Meditation</span>
                  </Button>
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
                The Science of Meditation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven benefits for your mind, body, and spirit
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Mental Benefits',
                  benefits: [
                    'Improved focus and concentration',
                    'Enhanced memory and learning',
                    'Reduced anxiety and depression',
                    'Greater emotional regulation',
                    'Increased creativity'
                  ]
                },
                {
                  icon: Heart,
                  title: 'Physical Benefits',
                  benefits: [
                    'Lower blood pressure',
                    'Improved immune function',
                    'Better sleep quality',
                    'Reduced chronic pain',
                    'Slower aging process'
                  ]
                },
                {
                  icon: Star,
                  title: 'Spiritual Benefits',
                  benefits: [
                    'Deeper self-awareness',
                    'Enhanced intuition',
                    'Greater compassion',
                    'Sense of interconnectedness',
                    'Spiritual awakening'
                  ]
                },
                {
                  icon: Clock,
                  title: 'Daily Life Benefits',
                  benefits: [
                    'Better decision making',
                    'Improved relationships',
                    'Increased productivity',
                    'Greater life satisfaction',
                    'Enhanced resilience'
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
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-4 text-center">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                        <Star className="h-3 w-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Starting Your Practice
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple steps to begin your meditation journey today
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Find Your Space',
                  description: 'Choose a quiet, comfortable place where you won\'t be disturbed'
                },
                {
                  step: '2',
                  title: 'Start Small',
                  description: 'Begin with just 5-10 minutes daily and gradually increase duration'
                },
                {
                  step: '3',
                  title: 'Be Consistent',
                  description: 'Practice at the same time each day to build a sustainable habit'
                },
                {
                  step: '4',
                  title: 'Be Patient',
                  description: 'Remember that meditation is a practice—be gentle with yourself'
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

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Begin Your Journey Within
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                "The goal of meditation isn't to control your thoughts, it's to stop letting them control you. 
                Start today and discover the peace that has always been within you."
              </p>
              <p className="text-lg text-purple-200 italic">
                - Master Nitin Agrawal
              </p>
              <Button 
                onClick={() => handlePlayMeditation('Beginner\'s')}
                size="lg" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg"
              >
                Start Your First Meditation
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Meditation;
