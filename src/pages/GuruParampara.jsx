import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Crown, Heart, Star } from 'lucide-react';

const GuruParampara = () => {
  const gurus = [
    {
      name: 'Dr. Mikao Usui',
      title: 'Founder of Reiki',
      period: '1865-1926',
      description:
        'The enlightened master who received the gift of Reiki during his spiritual retreat on Mount Kurama. His dedication to healing and spiritual development laid the foundation for all Reiki practice.',
      teachings:
        'The Five Reiki Principles, Traditional hand positions, Spiritual development through service',
      image: 'Dr. Mikao Usui.png',
    },
    {
      name: 'Dr. Chujiro Hayashi',
      title: 'Reiki Master & Naval Officer',
      period: '1880-1940',
      description:
        'A devoted student of Dr. Usui who systematized Reiki teachings and established the first Reiki clinic. His methodical approach helped preserve and spread Reiki healing.',
      teachings: 'Systematic hand positions, Clinical Reiki practice, Training methodology',
      image: 'Dr. Chujiro Hayashi.png',
    },
    {
      name: 'Hawayo Takata',
      title: 'Reiki Master & Bridge to the West',
      period: '1900-1980',
      description:
        'The Hawaiian-born master who brought Reiki to the Western world. Her dedication ensured that Reiki would spread globally, touching millions of lives.',
      teachings: 'Western Reiki adaptation, Oral tradition preservation, Global Reiki expansion',
      image: 'Hawayo Takata.png',
    },
    {
      name: 'Phyllis Lei Furumoto',
      title: 'Reiki Grandmaster',
      period: '1948-2019',
      description:
        "Granddaughter of Hawayo Takata and recognized Grandmaster who maintained the traditional lineage while supporting Reiki's evolution and growth worldwide.",
      teachings: 'Lineage preservation, Traditional Reiki standards, Global Reiki community',
      image: 'Phyllis Lei Furumoto.png',
    },
    {
      name: 'William Lee Rand',
      title: 'Reiki Master & Innovator',
      period: '1951-Present',
      description:
        'Founder of the International Center for Reiki Training and developer of Karuna Reiki. His research and innovation have expanded Reiki understanding and practice.',
      teachings: 'Karuna Reiki system, Reiki research, Modern Reiki techniques',
      image: 'William Lee Rand.png',
    },
     {
      name: 'Swami Gangadhar Tirth',
      title: 'Shaktipat Yogi & Spiritual Revivalist',
      period: '1870 – Unknown',
      description:
        'A reclusive saint from Mathura who revived the ancient Shaktipat tradition in the late 19th century. Known for his deep meditation, renunciation, and guidance to select disciples.',
      teachings: 'Revival of Shaktipat Yoga, Initiated Swami Narayan Dev Tirth, Solitary spiritual discipline',
      image: 'Swami Gangadhar Tirth.png',
    },
    {
      name: 'Master Nitin Agrawal',
      title: 'Current Reiki Practitioners',
      period: '(****-Present',
      description:
        'Carrying forward the sacred tradition with 24+ years of dedicated practice. Master Nitin honors the lineage while serving the healing needs of modern seekers.',
      teachings: 'Multiple Reiki systems, Spiritual counseling, Energy healing mastery',
      image: 'NitinAgrawalBG.png',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Guru Parampara - Sacred Reiki Lineage & Spiritual Teachers | Reiki Wellness</title>
        <meta
          name="description"
          content="Discover the sacred Guru Parampara lineage of Reiki masters from Dr. Mikao Usui to Master Nitin Agrawal. Honor the spiritual teachers who preserved and transmitted Reiki wisdom."
        />
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
                Sacred{' '}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Guru Parampara
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Honoring the unbroken lineage of spiritual masters who have preserved and transmitted the sacred art of Reiki healing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto"
            >
              <h2 className="font-display text-2xl font-semibold text-gray-800 mb-4 text-center">
                The Sacred Tradition of Guru-Disciple Lineage
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                In the ancient tradition of spiritual transmission, knowledge and wisdom flow from teacher to student in an unbroken chain of divine connection. This sacred lineage, known as Guru Parampara, ensures that the pure essence of Reiki healing is preserved and passed down through generations of dedicated masters.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lineage Timeline */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                The Sacred Lineage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From the mountains of Japan to the shores of Hawaii, and now to the heart of India
              </p>
            </motion.div>

            <div className="space-y-16">
              {gurus.map((guru, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:w-1/3">
                    <div className="relative">
                      <img
                        className="w-80 h-85 mx-auto shadow-2xl aura-glow object-cover rounded-xl"
                        alt={`${guru.name} - Reiki Master in sacred lineage`}
                        src={`/${guru.image}`}
                      />
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                        {index === 0 ? (
                          <Crown className="h-6 w-6 text-white" />
                        ) : index === gurus.length - 1 ? (
                          <Star className="h-6 w-6 text-white" />
                        ) : (
                          <Heart className="h-6 w-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="mb-6">
                        <h3 className="font-display text-3xl font-bold text-gray-800 mb-2">
                          {guru.name}
                        </h3>
                        <p className="text-purple-600 font-semibold text-lg mb-1">
                          {guru.title}
                        </p>
                        <p className="text-gray-500">{guru.period}</p>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6">{guru.description}</p>

                      <div className="border-t border-gray-200 pt-6">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          Key Teachings & Contributions:
                        </h4>
                        <p className="text-gray-600">{guru.teachings}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of page content remains unchanged */}
        {/* Blessing and Gratitude Section */}
      </div>
    </>
  );
};

export default GuruParampara;
