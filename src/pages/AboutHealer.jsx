
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Heart, Star, Users, Calendar, BookOpen } from 'lucide-react';

const AboutHealer = () => {
  const modalities = [
    'Usui Reiki',
    'Karuna Reiki',
    'Sanjeevani Reiki',
    'Violet Flame Healing',
    'Angelic Reiki',
    'Omni Reiki',
    'Crystal Healing',
    'Chakra Balancing',
    'Aura Cleansing',
    'Past Life Healing'
  ];

  const achievements = [
    { icon: Calendar, title: '24+ Years', description: 'Of dedicated healing service' },
    { icon: Users, title: '5000+', description: 'Lives touched and healed' },
    { icon: BookOpen, title: '10+', description: 'Healing modalities mastered' },
    { icon: Star, title: '500+', description: 'Students trained and attuned' }
  ];

  return (
    <>
      <Helmet>
        <title>About Reiki Master Nitin Agrawal - 24+ Years Healing Experience | Reiki Wellness</title>
        <meta name="description" content="Meet Reiki Master Nitin Agrawal, with over 24 years of healing experience in Usui Reiki, Karuna, Sanjeevani, Violet Flame, Angelic Reiki, and more spiritual modalities." />
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
                Meet Your{' '}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Healing Guide
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reiki Master Nitin Agrawal - A beacon of light on the path to spiritual wellness
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <div className="floating">
                  <img  
                    className="w-80 h-90 mx-auto lg:mx-0 shadow-2xl aura-glow object-cover" 
                    alt="Reiki Master Nitin Agrawal in meditation pose"
                   src="NitinAgrawalBG.png" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="font-display text-3xl font-semibold text-gray-800 mb-4">
                    Reiki Master Nitin Agrawal
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    With over 24 years of dedicated service to the healing arts, Reiki Master Nitin 
                    Agrawal has become a beacon of hope and transformation for thousands of souls 
                    seeking spiritual wellness and inner peace.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    His journey began with a profound spiritual awakening that led him to master 
                    multiple healing modalities, each adding depth and dimension to his ability 
                    to facilitate healing on all levels - physical, emotional, mental, and spiritual.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-white rounded-lg p-4 shadow text-center"
                    >
                      <achievement.icon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h3 className="font-bold text-xl text-gray-800">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                The Spiritual Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A path of dedication, learning, and service to humanity
              </p>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  year: '2000',
                  title: 'The Awakening',
                  description: 'Master Nitin\'s spiritual journey began with his first Reiki attunement, opening him to the world of energy healing and divine connection.'
                },
                {
                  year: '2005',
                  title: 'Deepening Practice',
                  description: 'Achieved Reiki Master level and began studying advanced healing modalities including Karuna and Sanjeevani Reiki systems.'
                },
                {
                  year: '2010',
                  title: 'Expanding Horizons',
                  description: 'Mastered Violet Flame healing and Angelic Reiki, incorporating celestial energies into his healing practice.'
                },
                {
                  year: '2015',
                  title: 'Teaching & Sharing',
                  description: 'Began training and attuning students, sharing the sacred knowledge and empowering others to become healers.'
                },
                {
                  year: '2020',
                  title: 'Digital Healing',
                  description: 'Adapted to provide distant healing and online training, reaching souls across the globe during challenging times.'
                },
                {
                  year: '2024',
                  title: 'Reiki Wellness',
                  description: 'Established this sacred space to offer comprehensive healing services and spiritual guidance to all seekers.'
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">{milestone.year}</span>
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-gray-800">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img  
                      className="w-full rounded-xl shadow-lg" 
                      alt={`${milestone.title} - spiritual journey milestone`}
                     src="https://images.unsplash.com/photo-1588750844893-6395f445d5cf" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Healing Modalities */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Mastered Healing Modalities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive toolkit for holistic healing and spiritual transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modalities.map((modality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-800">
                    {modality}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Healing Philosophy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The guiding principles that shape every healing session
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
                  alt="Healing hands with divine light"
                 src="https://images.unsplash.com/photo-1679771650989-1d79c12c79a9" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-3">
                    "Healing is not just about the body..."
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    "True healing encompasses the entire being - body, mind, emotions, and spirit. 
                    My role is to be a clear channel for divine healing energy, allowing it to 
                    flow where it's needed most for the highest good of each individual."
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-3">
                    Core Beliefs
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-purple-600 mr-2" />
                      Every person has the innate ability to heal
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-purple-600 mr-2" />
                      Healing happens on divine timing
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-purple-600 mr-2" />
                      Love is the highest healing frequency
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-purple-600 mr-2" />
                      Service to others is service to the divine
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutHealer;
