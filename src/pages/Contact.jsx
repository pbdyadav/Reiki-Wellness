
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919425059664', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919425059664';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:nitinagrawal5@gmail.com';
  };

  const handleMap = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Annapurna+Road+Indore',
      '_blank'
    );
  };
const handleSubmit = (e) => {
  e.preventDefault();

  const mailtoLink = `mailto:nitinagrawal5@gmail.com?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`
  )}`;

  window.location.href = mailtoLink;
};
  return (
    <>
      <Helmet>
        <title>Contact Reiki Wellness - Get in Touch with Master Nitin Agrawal | Annapurna Road, Indore</title>
        <meta name="description" content="Contact Reiki Wellness for healing sessions, spiritual guidance, and energy therapy. Reach Master Nitin Agrawal via phone, email, WhatsApp, or visit our Annapurna Road, Indore center." />
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
                Connect with{' '}
                <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Sacred Healing
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reach out to begin your healing journey or ask any questions about our services
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto text-center"
            >
              <h2 className="font-display text-2xl font-semibold text-gray-800 mb-4">
                We're Here to Support Your Journey
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you're seeking healing, have questions about our services, or want to learn more
                about Reiki, Master Nitin and our team are here to guide and support you with compassion and wisdom.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to connect with us for your convenience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  info: '+91 94250 59664',
                  description: 'Speak directly with our team for immediate assistance',
                  action: 'Call Now'
                },
                {
                  icon: MessageCircle,
                  title: 'WhatsApp',
                  info: '+91 94250 59664',
                  description: 'Quick and convenient messaging for questions and bookings',
                  action: 'Chat on WhatsApp'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  info: 'nitinagrawal5@gmail.com',
                  description: 'Send detailed inquiries and receive comprehensive responses',
                  action: 'Send Email'
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  info: 'Annapurna Road, Indore, India',
                  description: 'Experience healing in our peaceful and sacred center',
                  action: 'Get Directions'
                }
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium text-purple-600 mb-3">
                    {method.info}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {method.description}
                  </p>
                  <Button
                    onClick={() => {
                      if (method.title === 'WhatsApp') handleWhatsApp();
                      if (method.title === 'Call Us') handleCall();
                      if (method.title === 'Email') handleEmail();
                      if (method.title === 'Visit Us') handleMap();
                    }}
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    {method.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours.
                  For urgent matters, please call or WhatsApp us directly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="+91 94250 59664"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="healing-session">Book Healing Session</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="product-question">Product Question</option>
                        <option value="training">Reiki Training</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Please share your message, questions, or how we can help you..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-3 text-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="font-display text-2xl font-semibold text-gray-800 mb-6">
                    Visit Our Healing Center
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Address</p>
                        <p className="text-gray-600">
                          Reiki Wellness Center<br />
                          Annapurna Road, Indore, Madhy Pradesh,<br />
                          India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Operating Hours</p>
                        <p className="text-gray-600">
                          Monday - Saturday: 9:00 AM - 7:00 PM<br />
                          Sunday: 10:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="font-display text-2xl font-semibold text-gray-800 mb-4">
                    Emergency Healing Support
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For urgent healing needs or spiritual emergencies, we offer 24/7 distant healing support.
                  </p>
                  <Button
                    onClick={() => toast({
                      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                      description: "Emergency healing support would be contacted.",
                    })}
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-50"
                  >
                    Emergency Support
                  </Button>
                </div>

                <div className="floating">
                  <img
                    className="w-full rounded-xl shadow-lg"
                    alt="Peaceful Reiki Wellness healing center in Indore"
                    src="https://images.unsplash.com/photo-1548618699-7e3e8d7780b4" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'How do I book a healing session?',
                  answer: 'You can book through our online store, call us directly, or send a WhatsApp message. We\'ll confirm your appointment within 24 hours.'
                },
                {
                  question: 'Do you offer distant healing?',
                  answer: 'Yes! Our distant healing sessions are just as powerful as in-person sessions. We conduct them via video call with energy transmission.'
                },
                {
                  question: 'What should I expect in my first session?',
                  answer: 'Your first session includes a consultation, energy assessment, and personalized healing treatment. We\'ll explain everything as we go.'
                },
                {
                  question: 'Are your products authentic?',
                  answer: 'Absolutely. Master Nitin personally selects all crystals and healing tools for their authentic energy and healing properties.'
                },
                {
                  question: 'Do you offer Reiki training?',
                  answer: 'Yes, we offer complete Reiki training from Level 1 to Master level. Contact us for upcoming training schedules.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major payment methods including UPI, credit/debit cards, and bank transfers for your convenience.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
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

export default Contact;
