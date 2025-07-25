
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingCart, Calendar, Video, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const OnlineStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('sessions');
  const { toast } = useToast();

  const categories = [
    { id: 'sessions', name: 'Healing Sessions', icon: Calendar },
    { id: 'products', name: 'Healing Products', icon: ShoppingCart }
  ];

  const healingSessions = [
    {
      id: 1,
      name: 'In-Person Reiki Healing',
      duration: '60 minutes',
      price: '₹3,500',
      description: 'Complete Reiki healing session at our peaceful center in Mumbai',
      includes: [
        'Energy assessment and consultation',
        'Full body Reiki treatment',
        'Chakra balancing',
        'Personalized healing guidance',
        'Post-session integration support'
      ],
      type: 'in-person',
      image: 'Peaceful Reiki healing session in serene treatment room with healing energy'
    },
    {
      id: 2,
      name: 'Online Distant Healing',
      duration: '45 minutes',
      price: '₹2,500',
      description: 'Powerful distant Reiki healing session via video call',
      includes: [
        'Pre-session consultation call',
        'Distant Reiki energy transmission',
        'Guided meditation',
        'Energy report and insights',
        'Follow-up guidance'
      ],
      type: 'online',
      image: 'Person receiving distant Reiki healing through video call with energy transmission'
    },
    {
      id: 3,
      name: 'Chakra Balancing Session',
      duration: '75 minutes',
      price: '₹4,200',
      description: 'Comprehensive chakra assessment and balancing treatment',
      includes: [
        'Complete chakra assessment',
        'Individual chakra healing',
        'Crystal therapy integration',
        'Personalized chakra plan',
        'Take-home chakra kit'
      ],
      type: 'in-person',
      image: 'Chakra balancing session with colorful energy centers and healing crystals'
    },
    {
      id: 4,
      name: 'Emotional Healing Session',
      duration: '90 minutes',
      price: '₹5,000',
      description: 'Deep emotional healing and trauma release session',
      includes: [
        'Emotional assessment',
        'Trauma release techniques',
        'Heart chakra healing',
        'Emotional integration work',
        'Ongoing support plan'
      ],
      type: 'in-person',
      image: 'Gentle emotional healing session with heart-centered energy and compassionate care'
    },
    {
      id: 5,
      name: 'Spiritual Guidance Session',
      duration: '60 minutes',
      price: '₹3,000',
      description: 'Personal spiritual counseling and life guidance',
      includes: [
        'Spiritual life assessment',
        'Intuitive guidance',
        'Life path clarity',
        'Spiritual practice recommendations',
        'Ongoing mentorship options'
      ],
      type: 'online',
      image: 'Spiritual guidance session with wise teacher and divine light guidance'
    },
    {
      id: 6,
      name: 'Group Healing Circle',
      duration: '120 minutes',
      price: '₹1,500',
      description: 'Monthly group healing and meditation circle',
      includes: [
        'Group meditation',
        'Collective healing energy',
        'Sharing and support',
        'Group blessing',
        'Community connection'
      ],
      type: 'in-person',
      image: 'Peaceful group healing circle with people in meditation and shared energy'
    }
  ];

  const products = [
    {
      id: 7,
      name: 'Beginner Crystal Set',
      price: '₹2,800',
      description: 'Essential crystals for starting your healing journey',
      image: 'Beautiful collection of beginner healing crystals in wooden box'
    },
    {
      id: 8,
      name: 'Chakra Healing Kit',
      price: '₹4,500',
      description: 'Complete set of seven chakra stones with guidebook',
      image: 'Seven colorful chakra stones arranged with healing guidebook'
    },
    {
      id: 9,
      name: 'Tibetan Singing Bowl',
      price: '₹3,500',
      description: 'Handcrafted singing bowl for sound healing',
      image: 'Traditional Tibetan singing bowl with mallet and cushion'
    },
    {
      id: 10,
      name: 'Meditation Cushion Set',
      price: '₹2,200',
      description: 'Comfortable meditation cushion with support',
      image: 'Comfortable meditation cushion in peaceful setting'
    }
  ];

  const handleBookSession = (session) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${session.name} booking would be processed.`,
    });
  };

  const handleAddToCart = (product) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${product.name} would be added to your cart.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Online Store - Book Reiki Sessions & Buy Healing Products | Reiki Wellness</title>
        <meta name="description" content="Book Reiki healing sessions (in-person or online) and purchase authentic healing tools. Complete eCommerce for spiritual wellness and energy healing services." />
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
                  Healing Store
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Book transformative healing sessions and discover authentic spiritual tools for your journey
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl font-semibold text-gray-800 mb-4">
                Your Gateway to Healing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you seek personal healing sessions with Master Nitin or sacred tools to enhance 
                your spiritual practice, our store offers authentic, high-quality options for every 
                step of your healing journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Selection */}
        <section className="py-10 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-4 mb-8"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-8 py-3 text-lg ${
                    selectedCategory === category.id 
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white' 
                      : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Healing Sessions */}
        {selectedCategory === 'sessions' && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                  Healing Sessions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Transform your life with personalized healing sessions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {healingSessions.map((session, index) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img  
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                        alt={session.name}
                       src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        {session.type === 'online' ? (
                          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                            <Video className="h-3 w-3 mr-1" />
                            Online
                          </div>
                        ) : (
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            In-Person
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-display text-xl font-semibold text-gray-800">
                          {session.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">
                            {session.price}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {session.duration}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {session.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-medium text-gray-800 mb-3">Session Includes:</h4>
                        <ul className="space-y-2">
                          {session.includes.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                              <Star className="h-3 w-3 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        onClick={() => handleBookSession(session)}
                        className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
                      >
                        Book Session
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Products */}
        {selectedCategory === 'products' && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                  Healing Products
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Sacred tools to support your spiritual practice
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img  
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                        alt={product.name}
                       src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-display text-lg font-semibold text-gray-800">
                          {product.name}
                        </h3>
                        <span className="text-xl font-bold text-purple-600">
                          {product.price}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>

                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Looking for more healing tools?
                </p>
                <Button 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  View Complete Catalog
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Trust & Security */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Why Choose Our Store?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your healing journey deserves the highest quality and care
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Star,
                  title: 'Authentic Quality',
                  description: 'All products personally selected by Master Nitin for their healing properties'
                },
                {
                  icon: Calendar,
                  title: 'Flexible Scheduling',
                  description: 'Book sessions at times that work for your schedule and needs'
                },
                {
                  icon: Video,
                  title: 'Online & In-Person',
                  description: 'Choose the healing format that feels most comfortable for you'
                },
                {
                  icon: ShoppingCart,
                  title: 'Secure Checkout',
                  description: 'Safe and secure payment processing for your peace of mind'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-3">
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
      </div>
    </>
  );
};

export default OnlineStore;
