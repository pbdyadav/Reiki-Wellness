import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Crown, Star, Heart } from 'lucide-react';

const GuruParampara = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const gurus = [
    {
      name: 'Dr. Mikao Usui',
      title: 'Founder of Reiki',
      period: '1865–1926',
      description: `Dr. Mikao Usui\nFounder of Reiki\n\n1865–1926\n\nThe enlightened master who received the gift of Reiki during his spiritual retreat on Mount Kurama. His dedication to healing and spiritual development laid the foundation for all Reiki practice.`,
      longDescription: `Dr. Mikao Usui was born on August 15, 1865, in the small village of Taniai, located in the Gifu Prefecture of Japan. He came from a samurai heritage, a lineage that valued discipline, education, and spiritual insight. Raised in a Tendai Buddhist household, Usui was exposed to both religious and scholarly pursuits from an early age. His family followed a balanced blend of martial training and intellectual development, which laid the groundwork for his multifaceted journey.
      Throughout his youth and adulthood, Usui pursued studies in a diverse range of disciplines. These included medicine, psychology, religion, energy practices, and ancient healing arts. He was particularly drawn to the study of sacred texts from both Eastern and Western traditions, including Buddhist sutras and Christian scriptures. This wide-ranging curiosity was not merely academic but fueled by a deeper quest for spiritual truth and healing methods that could uplift humanity.
      A Spiritual Turning Point on Mount Kurama
      By 1922, after years of study and spiritual dissatisfaction, Usui embarked on a solitary retreat to Mount Kurama, a sacred site near Kyoto. His intention was to undergo deep spiritual cleansing through traditional Japanese practices such as meditation, chanting, fasting, and prayer. For 21 days, Usui isolated himself, immersed in these disciplines.
      On the 21st day, Usui reportedly experienced a profound spiritual awakening. According to tradition, a beam of spiritual energy entered through the crown of his head, triggering an intense realization. This moment marked the birth of Reiki — a healing system that channels universal life energy. The experience left him not only spiritually transformed but also physically energized. On his descent from the mountain, he is said to have spontaneously healed an injury on his foot, confirming the therapeutic nature of what he had received.
      Foundation of Reiki Healing Practices
      Following his enlightenment on Mount Kurama, Usui dedicated his life to sharing this newfound method of healing. He named the practice Reiki, derived from the Japanese words Rei (spiritual wisdom) and Ki (life energy). In April 1922, he established the Usui Reiki Ryoho Gakkai in Tokyo, a school where he began teaching Reiki and offering healing sessions to the public.
      The aftermath of the Great Kanto Earthquake in 1923 offered Usui an opportunity to apply Reiki on a large scale. Along with his students, he treated thousands of victims, providing both physical and emotional healing. The success of these efforts earned him national recognition and furthered the spread of Reiki.
      Core Principles and Teachings
      Usui understood that healing was not just physical but also emotional and spiritual. He emphasized moral living and inner clarity as prerequisites for lasting wellness. He introduced what came to be known as the Five Reiki Principles (Gokai):
      1.	Just for today, I will not be angry.
      2.	Just for today, I will not worry.
      3.	I will be grateful.
      4.	I will do my work honestly.
      5.	I will be kind to every living thing.
      These principles were designed not as commandments but as daily reminders for a balanced life. Usui believed that true healing arises when one aligns with these values in thought, word, and action.
      His method of teaching Reiki included:
      •	Hand placements for energy transfer
      •	Reiju (attunement) to awaken students’ capacity to channel Reiki
      •	Meditation and breathwork for inner awareness
      His philosophy was open and inclusive, teaching anyone who showed sincerity and readiness, regardless of social or religious background.
      Growth, Teaching, and Discipleship
      Over the next few years, Usui traveled across Japan, teaching and healing in places such as Hiroshima, Fukuyama, and Saga. He initiated more than 2,000 students and trained around 16 to 20 masters capable of passing on Reiki.
      One of his most prominent students was Chujiro Hayashi, a retired naval officer. Hayashi systematized Usui’s teachings into a more medical framework and played a critical role in the Westward spread of Reiki through his student, Hawayo Takata, a Japanese-American woman who later brought Reiki to Hawaii and the broader United States.
      Usui’s direct lineage continued through the Usui Reiki Ryoho Gakkai, which remains active in Japan today. Although much of its work is private, it preserves Usui’s traditional practices and methods.
      Passing and Memorial
      Dr. Mikao Usui passed away on March 9, 1926, in Fukuyama, Japan, from a stroke. His ashes were buried at the Saihōji Temple in Tokyo. A memorial stone erected by his students still stands there, honoring his contributions to healing and spiritual growth. The inscription praises his character, his compassion, and the universal value of the system he created.
      Legacy and Impact
      Today, Reiki is practiced worldwide in many forms, yet the core philosophy remains aligned with Usui’s vision: healing through love, wisdom, and service. Although modern branches of Reiki may differ in technique, the spiritual essence he uncovered on Mount Kurama continues to guide millions.
      Dr. Usui's legacy is not limited to the healing of the body. He introduced a path that empowers individuals to reconnect with their innate potential for balance and harmony, both within and with others.
      His life story reminds us that healing is more than technique—it is an offering of compassion, discipline, and alignment with universal truth.
      
      डॉ. मिकाओ उसुई: एक विस्तृत जीवन परिचय
      रेकी के संस्थापक
      1865 – 1926
      प्रारंभिक जीवन और पृष्ठभूमि
      डॉ. मिकाओ उसुई का जन्म 15 अगस्त 1865 को जापान के गिफू प्रान्त के तानियाई नामक एक छोटे गाँव में हुआ था। वह एक समुराई परिवार से ताल्लुक रखते थे, जहाँ अनुशासन, शिक्षा और आध्यात्मिक अंतर्दृष्टि को महत्व दिया जाता था। एक तेंदाई बौद्ध परिवार में पले-बढ़े उसुई को प्रारंभ से ही धार्मिक और बौद्धिक संस्कारों का वातावरण मिला।
      अपने युवावस्था और वयस्क जीवन में, उसुई ने चिकित्सा, मनोविज्ञान, धर्म, ऊर्जा उपचार और प्राचीन चिकित्सा पद्धतियों सहित अनेक विषयों का अध्ययन किया। उन्हें पूर्व और पश्चिम दोनों की धार्मिक पुस्तकों जैसे बौद्ध सूत्र और बाइबिल में विशेष रुचि थी। उनका यह अध्ययन केवल ज्ञानार्जन नहीं बल्कि मानवता की सेवा और आध्यात्मिक उन्नति की गहराई से प्रेरित था।
      माउंट कुरामा पर आध्यात्मिक जागरण
      1922 में, लंबे अध्ययन और आत्मिक खोज के बाद, उसुई ने क्योटो के निकट स्थित पवित्र स्थल माउंट कुरामा पर एकांत साधना का संकल्प लिया। वहाँ उन्होंने ध्यान, मंत्र जाप, उपवास और प्रार्थना जैसे जापानी आध्यात्मिक अनुशासनों का पालन करते हुए 21 दिन बिताए।
      इन्हीं 21 दिनों के अंतिम दिन, उन्होंने एक दिव्य ऊर्जा के प्रवेश का अनुभव किया जो उनके सिर के शीर्ष (सहस्रार चक्र) से होकर शरीर में प्रवाहित हुई। इस रहस्यमय अनुभव से उन्हें रेकी पद्धति की प्राप्ति हुई—एक ऐसी उपचार प्रणाली जो ब्रह्मांडीय जीवन ऊर्जा को माध्यम बनाकर चमत्कारी रूप से कार्य करती है।
      रेकी चिकित्सा पद्धति की स्थापना
      अपने अनुभव के बाद, उसुई ने इस ज्ञान को लोगों तक पहुँचाने का संकल्प लिया। उन्होंने इस पद्धति को नाम दिया रेकी, जिसमें 'रे' का अर्थ है 'आध्यात्मिक बुद्धि' और 'की' का अर्थ है 'जीवन ऊर्जा'। अप्रैल 1922 में उन्होंने टोक्यो के हाराजुकू क्षेत्र में उसुई रेकी रयोहो गक्काई की स्थापना की।
      1923 के कांतू भूकंप के बाद, उसुई और उनके शिष्यों ने हजारों लोगों का उपचार कर रेकी की उपयोगिता को जनमानस में स्थापित कर दिया। यह सफलता उनकी ख्याति को और व्यापक बना गई।
      प्रमुख सिद्धांत और शिक्षाएँ
      उसुई का मानना था कि उपचार केवल शारीरिक नहीं बल्कि मानसिक और आत्मिक स्तर पर भी होना चाहिए। उन्होंने पाँच मूलभूत सिद्धांत दिए जिन्हें आज पाँच रेकी सिद्धांत (गो-काई) के नाम से जाना जाता है:
      1.	सिर्फ आज के लिए, क्रोधित न हों।
      2.	सिर्फ आज के लिए, चिंता न करें।
      3.	कृतज्ञ रहें।
      4.	ईमानदारी से कार्य करें।
      5.	सभी जीवों के प्रति दयालु रहें।
      ये नियम जीवन को संतुलित, शांत और पूर्ण बनाने के लिए दैनिक स्मरण के रूप में दिए गए थे। साथ ही उन्होंने उपचार की निम्न विधियाँ भी सिखाईं:
      •	हाथों की स्थिति द्वारा ऊर्जा संचार
      •	रेजू (दीक्षा) द्वारा ऊर्जा जागरण
      •	ध्यान और श्वास क्रियाएँ आत्मिक जागरूकता हेतु
      उनकी शिक्षाएँ सार्वभौमिक थीं—जो भी इच्छुक और ईमानदार होता, उसे वे शिक्षा देते।
      शिक्षण और अनुयायी
      अगले कुछ वर्षों में, उसुई ने जापान भर में यात्रा की और हीरोशिमा, फुकुयामा, और सागा जैसे शहरों में रेकी का प्रचार-प्रसार किया। उन्होंने 2000 से अधिक छात्रों को प्रशिक्षित किया और 16 से 20 शिक्षकों को दीक्षा दी जो रेकी को आगे बढ़ा सकें।
      उनके प्रमुख शिष्यों में चुजीरो हयाशी का नाम उल्लेखनीय है, जिन्होंने रेकी को अधिक व्यवस्थित किया और चिकित्सा पद्धति के रूप में ढाला। हयाशी की शिष्या हवायो टकाटा ने बाद में रेकी को अमेरिका और पश्चिमी देशों में फैलाया।
      आज भी जापान में उसुई रेकी रयोहो गक्काई संस्था पारंपरिक विधियों के साथ सक्रिय है।
      देहावसान और स्मरण
      डॉ. मिकाओ उसुई का निधन 9 मार्च 1926 को फुकुयामा में हुआ। उनकी अस्थियाँ टोक्यो के साईहो-जी मंदिर में रखी गईं। वहाँ उनके सम्मान में एक स्मारक शिला स्थापित की गई है, जिसमें उनके जीवन और शिक्षाओं की प्रशंसा की गई है।
      विरासत और प्रभाव
      आज रेकी विश्वभर में कई रूपों में प्रचलित है, लेकिन उसका मूल दर्शन अभी भी उसी प्रेम, सेवा और आत्मिक विकास की राह पर आधारित है जो उसुई ने दिखाया था। उन्होंने उपचार को केवल तकनीक नहीं, बल्कि करुणा, अनुशासन और सत्य से जुड़ने का माध्यम बताया।
      उनकी जीवनगाथा आज भी हमें सिखाती है कि सच्चा उपचार भीतर से आरंभ होता है—एक ऐसा प्रकाश जो न केवल शरीर को, बल्कि आत्मा को भी संतुलन और शांति की ओर ले जाता है।`,
      teachings: 'The Five Reiki Principles, Traditional hand positions, Spiritual development through service',
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
      name: 'Swami Narayan Tirth Devji Maharaj',
      title: 'Shaktipat Master & Siddha Yogi',
      period: '1915 – Unknown',
      description:
        'Born as Kalipada Acharya in Varajuri, Bihar, he renounced worldly life in 1939 and met his guru, Swami Shankar Purushottam Tirtha, in Puri...',
      teachings: 'Leadership of Siddhayogashram, Preservation of Shaktipat lineage, Silent spiritual transmission',
      image: 'Swami Shri Narayan Tirth Devji maharaj.png',
    },
    {
      name: 'Swami Shankar Purushottam Tirth Maharaj',
      title: 'Shaktipat Yogi & Spiritual Mystic',
      period: '1890 – Unknown',
      description:
        'Born as Rohinikumar (later Atmanandprakash Brahmachari) in 1890 in Laxmipur, Tripura...',
      teachings: 'Propagation of the Shaktipat tradition, Exemplary celibacy and discipline, Spiritual guidance under Sudder and solitary asceticism',
      image: 'Shri Shankar Purushottam.png',
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
        <title>Guru Parampara - Sacred Reiki Lineage | Reiki Wellness</title>
        <meta
          name="description"
          content="Discover the sacred Guru Parampara lineage of Reiki masters from Dr. Mikao Usui to Master Nitin Agrawal."
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
                In the ancient tradition of spiritual transmission, knowledge and wisdom flow from teacher to student in an unbroken chain of divine connection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lineage Section */}
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
                        alt={`${guru.name} - Reiki Master`}
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

                      <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                        {guru.name === 'Dr. Mikao Usui' && !showFullDescription
                          ? guru.description
                          : guru.name === 'Dr. Mikao Usui'
                          ? `${guru.description}\n\n${guru.longDescription}`
                          : guru.description}
                      </p>

                      {guru.name === 'Dr. Mikao Usui' && (
                        <button
                          onClick={() => setShowFullDescription(!showFullDescription)}
                          className="text-sm text-purple-700 underline mb-4"
                        >
                          {showFullDescription ? 'Read Less' : 'Read More'}
                        </button>
                      )}

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
      </div>
    </>
  );
};

export default GuruParampara;
