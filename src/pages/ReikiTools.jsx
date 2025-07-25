
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Gem, Music, Trophy as Statue, Heart, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ReikiTools = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Products', icon: Star },
    { id: 'crystals', name: 'Crystals', icon: Gem },
    { id: 'bowls', name: 'Singing Bowls', icon: Music },
    { id: 'statues', name: 'Buddha Statues', icon: Statue },
    { id: 'chakra', name: 'Chakra Kits', icon: Heart }
  ];

  const products = [
    // Crystals
    {
      id: 1,
      name: 'Amethyst Cluster',
      category: 'crystals',
      color: 'Purple',
      price: '₹2,500',
      description: 'High-grade amethyst cluster for spiritual protection and meditation enhancement',
      properties: 'Spiritual awareness, protection, calming energy',
      image: 'Beautiful purple amethyst crystal cluster with natural formations and spiritual energy'
    },
    {
      id: 2,
      name: 'Rose Quartz Heart',
      category: 'crystals',
      color: 'Pink',
      price: '₹1,200',
      description: 'Heart-shaped rose quartz for love, compassion, and emotional healing',
      properties: 'Unconditional love, emotional healing, self-acceptance',
      image: 'Soft pink rose quartz carved in heart shape with gentle loving energy'
    },
    {
      id: 3,
      name: 'Clear Quartz Point',
      category: 'crystals',
      color: 'Clear',
      price: '₹800',
      description: 'Master healer crystal point for amplifying energy and intentions',
      properties: 'Amplification, clarity, universal healing',
      image: 'Clear transparent quartz crystal point with brilliant clarity and light reflection'
    },
    {
      id: 4,
      name: 'Citrine Tumbled Stone',
      category: 'crystals',
      color: 'Yellow',
      price: '₹600',
      description: 'Sunny citrine for abundance, joy, and manifestation',
      properties: 'Abundance, joy, manifestation, solar plexus activation',
      image: 'Golden yellow citrine tumbled stone with warm sunny energy'
    },
    {
      id: 5,
      name: 'Black Tourmaline',
      category: 'crystals',
      color: 'Black',
      price: '₹900',
      description: 'Powerful protection stone for grounding and negative energy clearing',
      properties: 'Protection, grounding, EMF shielding',
      image: 'Deep black tourmaline crystal with protective energy and grounding properties'
    },
    {
      id: 6,
      name: 'Selenite Wand',
      category: 'crystals',
      color: 'White',
      price: '₹1,500',
      description: 'Pure selenite wand for cleansing and charging other crystals',
      properties: 'Cleansing, charging, angelic connection',
      image: 'Pure white selenite crystal wand with ethereal glow and cleansing energy'
    },
    // Singing Bowls
    {
      id: 7,
      name: 'Tibetan Singing Bowl Set',
      category: 'bowls',
      price: '₹3,500',
      description: 'Handcrafted Tibetan singing bowl with mallet and cushion',
      properties: 'Sound healing, meditation, chakra balancing',
      image: 'Traditional Tibetan singing bowl with intricate patterns and wooden mallet'
    },
    {
      id: 8,
      name: 'Crystal Singing Bowl',
      category: 'bowls',
      price: '₹8,500',
      description: 'Pure quartz crystal singing bowl for deep healing vibrations',
      properties: 'Pure tones, deep healing, crystal energy',
      image: 'Clear crystal singing bowl with pure white appearance and healing vibrations'
    },
    {
      id: 9,
      name: 'Chakra Singing Bowl Set',
      category: 'bowls',
      price: '₹12,000',
      description: 'Set of 7 singing bowls tuned to each chakra frequency',
      properties: 'Complete chakra balancing, sound therapy',
      image: 'Seven colorful singing bowls arranged in chakra colors with beautiful harmonious energy'
    },
    // Buddha Statues
    {
      id: 10,
      name: 'Meditating Buddha',
      category: 'statues',
      price: '₹2,200',
      description: 'Peaceful Buddha statue in meditation pose for sacred space',
      properties: 'Peace, meditation, spiritual presence',
      image: 'Serene Buddha statue in meditation pose with peaceful expression and golden finish'
    },
    {
      id: 11,
      name: 'Laughing Buddha',
      category: 'statues',
      price: '₹1,800',
      description: 'Joyful Buddha statue for happiness and abundance',
      properties: 'Joy, abundance, positive energy',
      image: 'Happy laughing Buddha statue with joyful expression and abundant energy'
    },
    {
      id: 12,
      name: 'Medicine Buddha',
      category: 'statues',
      price: '₹3,200',
      description: 'Healing Buddha statue for health and wellness',
      properties: 'Healing, wellness, compassion',
      image: 'Blue Medicine Buddha statue with healing bowl and compassionate expression'
    },
    // Chakra Kits
    {
      id: 13,
      name: 'Complete Chakra Set',
      category: 'chakra',
      price: '₹4,500',
      description: 'Seven chakra stones with guidebook and pouch',
      properties: 'Complete chakra balancing, energy alignment',
      image: 'Seven colorful chakra stones arranged in rainbow order with healing energy'
    },
    {
      id: 14,
      name: 'Chakra Bracelet',
      category: 'chakra',
      price: '₹1,200',
      description: 'Wearable chakra bracelet with seven chakra stones',
      properties: 'Portable chakra balancing, daily energy support',
      image: 'Beautiful bracelet with seven chakra stones in rainbow colors'
    },
    {
      id: 15,
      name: 'Chakra Pendulum',
      category: 'chakra',
      price: '₹800',
      description: 'Crystal pendulum for chakra dowsing and energy work',
      properties: 'Energy detection, chakra assessment, divination',
      image: 'Crystal pendulum with chakra colors and chain for energy work'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${product.name} would be added to your cart.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Reiki Tools & Sacred Products - Crystals, Singing Bowls, Buddha Statues | Reiki Wellness</title>
        <meta name="description" content="Discover authentic Reiki healing tools including crystals, Tibetan singing bowls, Buddha statues, and chakra kits. Sacred products for spiritual practice and energy healing." />
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
                  Reiki Tools
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Authentic healing tools and sacred products to enhance your spiritual practice and energy work
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl font-semibold text-gray-800 mb-4">
                Carefully Curated Sacred Tools
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Each product in our collection has been personally selected by Master Nitin for its 
                authentic energy and healing properties. These sacred tools will support your 
                spiritual journey and enhance your connection to divine healing energy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 ${
                    selectedCategory === category.id 
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white' 
                      : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img  
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      alt={product.name}
                     src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                    {product.color && (
                      <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-medium">
                        {product.color}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display text-xl font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <span className="text-2xl font-bold text-purple-600">
                        {product.price}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Healing Properties:</h4>
                      <p className="text-sm text-gray-600">
                        {product.properties}
                      </p>
                    </div>

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
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expanding our sacred collection with more healing tools
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Star,
                  title: 'Sacred Incense',
                  description: 'Premium incense for purification and meditation'
                },
                {
                  icon: Gem,
                  title: 'Crystal Pyramids',
                  description: 'Powerful pyramid shapes for energy amplification'
                },
                {
                  icon: Heart,
                  title: 'Healing Jewelry',
                  description: 'Wearable crystals and sacred symbols'
                },
                {
                  icon: Music,
                  title: 'Meditation Music',
                  description: 'Healing frequencies and guided meditations'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
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

export default ReikiTools;
