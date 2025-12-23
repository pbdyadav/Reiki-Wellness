import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Crown, Star, Heart } from 'lucide-react';

const GuruParampara = () => {
  const [expandedGuru, setExpandedGuru] = useState(null);

  const gurus = [
    {
      name: 'Dr. Mikao Usui',
      title: 'Founder of Reiki',
      period: '1865-1926',
      description: `Dr. Mikao Usui\nFounder of Reiki\n\n1865-1926\n\nThe enlightened master who received the gift of Reiki during his spiritual retreat on Mount Kurama. His dedication to healing and spiritual development laid the foundation for all Reiki practice.`,
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
      •	Reiju (attunement) to awaken students' capacity to channel Reiki
      •	Meditation and breathwork for inner awareness
      His philosophy was open and inclusive, teaching anyone who showed sincerity and readiness, regardless of social or religious background.
      Growth, Teaching, and Discipleship
      Over the next few years, Usui traveled across Japan, teaching and healing in places such as Hiroshima, Fukuyama, and Saga. He initiated more than 2,000 students and trained around 16 to 20 masters capable of passing on Reiki.
      One of his most prominent students was Chujiro Hayashi, a retired naval officer. Hayashi systematized Usui's teachings into a more medical framework and played a critical role in the Westward spread of Reiki through his student, Hawayo Takata, a Japanese-American woman who later brought Reiki to Hawaii and the broader United States.
      Usui's direct lineage continued through the Usui Reiki Ryoho Gakkai, which remains active in Japan today. Although much of its work is private, it preserves Usui's traditional practices and methods.
      Passing and Memorial
      Dr. Mikao Usui passed away on March 9, 1926, in Fukuyama, Japan, from a stroke. His ashes were buried at the Saihōji Temple in Tokyo. A memorial stone erected by his students still stands there, honoring his contributions to healing and spiritual growth. The inscription praises his character, his compassion, and the universal value of the system he created.
      Legacy and Impact
      Today, Reiki is practiced worldwide in many forms, yet the core philosophy remains aligned with Usui's vision: healing through love, wisdom, and service. Although modern branches of Reiki may differ in technique, the spiritual essence he uncovered on Mount Kurama continues to guide millions.
      Dr. Usui's legacy is not limited to the healing of the body. He introduced a path that empowers individuals to reconnect with their innate potential for balance and harmony, both within and with others.
      His life story reminds us that healing is more than technique—it is an offering of compassion, discipline, and alignment with universal truth.
      
      डॉ. मिकाओ उसुई: एक विस्तृत जीवन परिचय
      रेकी के संस्थापक
      1865 - 1926
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
      period: '1870 - Unknown',
      description:
        'A reclusive saint from Mathura who revived the ancient Shaktipat tradition in the late 19th century. Known for his deep meditation, renunciation, and guidance to select disciples.',
      teachings: 'Revival of Shaktipat Yoga, Initiated Swami Narayan Dev Tirth, Solitary spiritual discipline',
      image: 'Swami Gangadhar Tirth.png',
    },
    {
      name: 'Swami Narayan Tirth Devji Maharaj',
      title: 'Shaktipat Master & Siddha Yogi',
      period: '1915 - Unknown',
      description:
        'Born as Kalipada Acharya in Varajuri, Bihar, he renounced worldly life in 1939 and met his guru, Swami Shankar Purushottam Tirtha, in Puri...',
      teachings: 'Leadership of Siddhayogashram, Preservation of Shaktipat lineage, Silent spiritual transmission',
      image: 'Swami Shri Narayan Tirth Devji maharaj.png',
    },
    {
      name: 'Swami Shankar Purushottam Tirth Maharaj',
      title: 'Shaktipat Yogi & Spiritual Mystic',
      period: '1890 - Unknown',
      description:
        'Born as Rohinikumar (later Atmanandprakash Brahmachari) in 1890 in Laxmipur, Tripura...',
      teachings: 'Propagation of the Shaktipat tradition, Exemplary celibacy and discipline, Spiritual guidance under Sudder and solitary asceticism',
      image: 'Shri Shankar Purushottam.png',
    },
    {
      name: 'Shri Yoganandaji Maharaj',
      title: 'Shaktipat Yogi & Author of Mahayog Vigyan',
      period: '1900s - 1959',
      description:
        'Born as Daya Shankar in Gujarat, he renounced worldly life in search of true yogic wisdom. After receiving Shaktipat initiation from Swami Narayan Tirth, he became known as Yogendra Vigyani and guided many on the path of Kundalini awakening.',
      teachings: 'Shaktipat Initiation, Author of Mahayog Vigyan, Guru to Swami Vishnu Tirth & Swami Purushottam Tirth, Vigyan Ashram founder, Emphasis on inner spiritual experience',
      image: 'Shri Yoganand Ji Maharaj.png',
    },
    {
      name: 'Swami Shivom Tirth',
      title: 'Shaktipat Guru & Spiritual Author',
      period: '1924 - 2008',
      description:
        'Born as Om Prakash in Gujarat, Punjab (now in Pakistan), Swami Shivom Tirth renounced worldly life after years of deep inner calling. A disciple of Swami Vishnu Tirth Maharaj, he became a leading figure in the Siddhayoga lineage, known for his clarity, compassion, and depth in spiritual guidance.',
      teachings: 'Shaktipat Siddhayoga, Author of many yogic texts, Propagation of Tirth lineage, Spiritual retreats, Life dedicated to inner purification.',
      image: 'Swami Shivom Tirth Ji maharaj.png',
    },
    {
      name: 'Gurudev Basant Kumar Soni',
      title: 'Reiki Master & Spiritual Author',
      period: '19.... - 20...',
      description: `Gurudev Basant Kumar Soni was born on month.. dd.., 19..., in Indore, Madhya Pradesh, India, at time... AM, entering a world rich with spiritual undercurrents. Growing up in the vibrant heart of central India, he displayed an early affinity for introspection and holistic well-being, shaped by family values emphasizing inner peace and community service. His formative years in Indore instilled discipline and a quest for deeper meaning, laying the foundation for his lifelong spiritual journey.`,
      longDescription: `Early Life and Roots :-
From childhood, Gurudev Soni explored meditation and energy practices, influenced by local traditions blending ancient wisdom with modern life. These experiences sparked curiosity about healing modalities, leading him toward Reiki during adolescence. By his early twenties, he committed to mastering Usui Reiki Ryoho, recognizing its potential to harmonize body, mind, and spirit.

Spiritual Awakening and Reiki Initiation
Gurudev's Reiki path began with Level 1 attunement, where universal life force energy first flowed through him, revealing profound insights into human suffering and healing. Drawn to Mikao Usui's original teachings, he pursued rigorous training under certified masters, achieving Level 2 and Master Practitioner status swiftly. His dedication intensified during personal challenges, using self-Reiki to overcome stress and emotional hurdles, transforming adversity into empowerment.

A pivotal moment came during his Master Teacher attunement, unlocking abilities for distance healing and teaching others. Gurudev Soni integrated chakra balancing and aura cleansing, addressing root causes of ailments like anxiety and chronic pain. His practice evolved into a beacon for seekers, emphasizing ethical energy work aligned with spiritual growth.

Founding Reiki Tirth Healing Centre
In Indore's serene Indra Puri Colony, Gurudev established Reiki Tirth Healing Centre as a sanctuary for holistic transformation. This venture reflects his vision: accessible Usui Reiki for all levels, from beginners to advanced practitioners. Sessions blend hands-on healing with meditation, fostering deep relaxation and vitality.

Under his guidance, Reiki Tirth expanded offerings—personalized attunements, group workshops, and international distance sessions—serving clients worldwide. Gurudev's centre stands out for authenticity, rooted in Usui traditions while adapting to modern needs like remote healing amid global shifts.

Healing Philosophy and Techniques
Gurudev Soni views Reiki as channeled universal energy dissolving blockages, restoring harmony. Central to his approach: chakra alignment targets root, sacral, solar plexus, heart, throat, third eye, and crown centers, alleviating physical pain, emotional trauma, and spiritual disconnection. Aura cleansing clears etheric imprints, enhancing intuition and immunity.

He employs symbols like Cho Ku Rei for power amplification and Sei He Ki for emotional release, customizing sessions. Complementary practices—guided visualizations, crystal therapy, and sound healing—amplify results. Gurudev stresses self-healing empowerment, teaching clients lifelong tools.

Transformative Impact on Clients
Countless testimonials highlight Gurudev's efficacy: clients report stress reduction, improved sleep, pain relief from migraines and backaches, and emotional breakthroughs. One seeker overcame severe anxiety through regular sessions, regaining life balance. Another found chronic fatigue lifted via chakra work, boosting daily energy.

His international reach aids diaspora communities, with distance Reiki bridging continents. Gurudev's compassionate demeanor fosters trust, turning one-time visitors into lifelong practitioners. Success stories underscore Reiki Tirth's role in spiritual evolution.

Teachings and Attunement Legacy
As a Master Teacher, Gurudev Soni conducts attunements worldwide, igniting Reiki in hundreds. His curriculum covers ethics, symbols, and practical application, blending theory with hands-on practice. Workshops emphasize lineage purity from Usui, ensuring authentic transmission.

He authored guides on home Reiki practice, democratizing healing. Gurudev mentors emerging masters, perpetuating the tradition. His teachings integrate Sanskrit mantras and meditation, resonating with India's spiritual heritage.

Integration with Broader Ventures
Beyond Reiki, Gurudev balances healing with entrepreneurship, including financial services via Agrawal Financial & Investment Services. This synergy reflects his belief in holistic prosperity—financial stability fueling spiritual service. His RC gaming interests highlight multifaceted wellness, promoting mindful recreation.

Vision for Global Healing
Gurudev Soni envisions Reiki Tirth as a global hub, expanding online platforms for universal access. He advocates Reiki in healthcare, partnering for stress management programs. Future plans include retreats blending Reiki with yoga, targeting youth for preventive wellness.
      
      शुरुआती ज़िंदगी और जड़ें :-
गुरुदेव बसंत कुमार सोनी का जन्म DD.. mony.. 19... को इंदौर, मध्य प्रदेश, भारत में सुबह Time... बजे हुआ था। वे आध्यात्मिक सोच से भरी दुनिया में आए। मध्य भारत के जीवंत दिल में पले-बढ़े, उन्होंने शुरू से ही आत्मनिरीक्षण और पूरी सेहत के लिए लगाव दिखाया, जो पारिवारिक मूल्यों से बना था, जिसमें मन की शांति और समाज सेवा पर ज़ोर दिया जाता था। इंदौर में उनके शुरुआती सालों ने उनमें अनुशासन और गहरे मतलब की खोज पैदा की, जिसने उनकी ज़िंदगी भर की आध्यात्मिक यात्रा की नींव रखी।

बचपन से ही, गुरुदेव सोनी ने स्थानीय परंपराओं से प्रभावित होकर मेडिटेशन और एनर्जी प्रैक्टिस की खोज की, जिसमें पुरानी समझ को मॉडर्न ज़िंदगी के साथ मिलाया गया था। इन अनुभवों ने इलाज के तरीकों के बारे में उनकी जिज्ञासा जगाई, जिससे वे टीनएज में रेकी की ओर बढ़े। बीस साल की उम्र तक, उन्होंने उसुई रेकी रयोहो में महारत हासिल करने का पक्का इरादा कर लिया, और शरीर, मन और आत्मा में तालमेल बिठाने की इसकी क्षमता को पहचाना।

आध्यात्मिक जागृति और रेकी की शुरुआत
गुरुदेव का रेकी का रास्ता लेवल 1 अट्यूनमेंट से शुरू हुआ, जहाँ यूनिवर्सल लाइफ़ फ़ोर्स एनर्जी सबसे पहले उनके ज़रिए बही, जिससे इंसानी दुख और हीलिंग के बारे में गहरी समझ मिली। मिकाओ उसुई की ओरिजिनल टीचिंग्स से आकर्षित होकर, उन्होंने सर्टिफाइड मास्टर्स से कड़ी ट्रेनिंग ली, और तेज़ी से लेवल 2 और मास्टर प्रैक्टिशनर का स्टेटस हासिल किया। पर्सनल चैलेंज के दौरान उनका डेडिकेशन और बढ़ गया, उन्होंने स्ट्रेस और इमोशनल रुकावटों को दूर करने के लिए सेल्फ़-रेकी का इस्तेमाल किया, और मुश्किलों को एम्पावरमेंट में बदल दिया।

एक अहम पल उनके मास्टर टीचर अट्यूनमेंट के दौरान आया, जब उन्होंने डिस्टेंस हीलिंग और दूसरों को सिखाने की काबिलियत को अनलॉक किया। गुरुदेव सोनी ने चक्र बैलेंसिंग और ऑरा क्लींजिंग को इंटीग्रेट किया, जिससे एंग्जायटी और क्रोनिक पेन जैसी बीमारियों की असली वजहों का पता चला। उनकी प्रैक्टिस साधकों के लिए एक रोशनी बन गई, जिसमें आध्यात्मिक विकास के साथ एथिकल एनर्जी वर्क पर ज़ोर दिया गया।

रेकी तीर्थ हीलिंग सेंटर की स्थापना
इंदौर की शांत इंद्र पुरी कॉलोनी में, गुरुदेव ने पूरे बदलाव के लिए एक जगह के तौर पर रेकी तीर्थ हीलिंग सेंटर की स्थापना की। यह वेंचर उनके विज़न को दिखाता है: शुरुआती से लेकर एडवांस्ड प्रैक्टिशनर तक, सभी लेवल के लिए आसान उसुई रेकी। सेशन में हैंड्स-ऑन हीलिंग को मेडिटेशन के साथ मिलाया जाता है, जिससे गहरा आराम और एनर्जी मिलती है।

उनके गाइडेंस में, रेकी तीर्थ ने अपनी पेशकशों को बढ़ाया—पर्सनलाइज़्ड अट्यूनमेंट, ग्रुप वर्कशॉप और इंटरनेशनल डिस्टेंस सेशन—जो दुनिया भर के क्लाइंट्स को सर्विस देते हैं। गुरुदेव का सेंटर अपनी असली पहचान के लिए जाना जाता है, जो उसुई परंपराओं में निहित है और ग्लोबल बदलावों के बीच रिमोट हीलिंग जैसी मॉडर्न ज़रूरतों के हिसाब से ढलता है।

हीलिंग फिलॉसफी और टेक्नीक
गुरुदेव सोनी रेकी को चैनल की गई यूनिवर्सल एनर्जी के तौर पर देखते हैं जो रुकावटों को खत्म करती है, तालमेल बिठाती है। उनके अप्रोच का सेंटर: चक्र अलाइनमेंट रूट, सैक्रल, सोलर प्लेक्सस, हार्ट, थ्रोट, थर्ड आई और क्राउन सेंटर्स को टारगेट करता है, जिससे फिजिकल दर्द, इमोशनल ट्रॉमा और स्पिरिचुअल डिस्कनेक्शन कम होता है। ऑरा क्लींजिंग ईथरिक इंप्रिंट्स को साफ करती है, जिससे इंट्यूशन और इम्यूनिटी बढ़ती है।

वे पावर बढ़ाने के लिए चो कु रेई और इमोशनल रिलीज़ के लिए सेई हे की जैसे सिंबल्स का इस्तेमाल करते हैं, जिससे सेशन कस्टमाइज़ होते हैं। कॉम्प्लिमेंट्री प्रैक्टिस—गाइडेड विज़ुअलाइज़ेशन, क्रिस्टल थेरेपी, और साउंड हीलिंग—नतीजों को बढ़ाते हैं। गुरुदेव सेल्फ-हीलिंग एम्पावरमेंट पर ज़ोर देते हैं, क्लाइंट्स को लाइफलॉन्ग टूल्स सिखाते हैं।

क्लाइंट्स पर ट्रांसफॉर्मेटिव असर
अनगिनत टेस्टिमोनियल्स गुरुदेव के असर को दिखाते हैं: क्लाइंट्स स्ट्रेस में कमी, बेहतर नींद, माइग्रेन और पीठ दर्द से राहत, और इमोशनल ब्रेकथ्रू की रिपोर्ट करते हैं। एक साधक ने रेगुलर सेशन के ज़रिए गंभीर एंग्जायटी पर काबू पाया, और लाइफ बैलेंस वापस पाया। दूसरे ने चक्र वर्क के ज़रिए क्रोनिक थकान को दूर किया, जिससे डेली एनर्जी बढ़ी।

उनकी इंटरनेशनल पहुंच डायस्पोरा कम्युनिटीज़ की मदद करती है, डिस्टेंस रेकी कॉन्टिनेंट्स को जोड़ती है। गुरुदेव का दयालु व्यवहार भरोसा बढ़ाता है, जो एक बार आने वाले विज़िटर्स को लाइफलॉन्ग प्रैक्टिशनर बना देता है। सक्सेस स्टोरीज़ स्पिरिचुअल इवोल्यूशन में रेकी तीर्थ की भूमिका को दिखाती हैं।

टीचिंग्स और अट्यूनमेंट लिगेसी
एक मास्टर टीचर के तौर पर, गुरुदेव सोनी दुनिया भर में अट्यूनमेंट करते हैं, सैकड़ों लोगों को रेकी सिखाते हैं। उनके करिकुलम में एथिक्स, सिंबल्स, और प्रैक्टिकल एप्लीकेशन शामिल हैं, जिसमें थ्योरी को हैंड्स-ऑन प्रैक्टिस के साथ मिलाया गया है। वर्कशॉप में उसुई से वंश की शुद्धता पर ज़ोर दिया जाता है, जिससे असली ट्रांसमिशन पक्का होता है।

उन्होंने घर पर रेकी प्रैक्टिस पर गाइड लिखीं, जिससे हीलिंग को सब जगह फैलाया जा सके। गुरुदेव नए मास्टर्स को गाइड करते हैं, और इस परंपरा को बनाए रखते हैं। उनकी शिक्षाओं में संस्कृत मंत्र और मेडिटेशन शामिल हैं, जो भारत की आध्यात्मिक विरासत से मेल खाते हैं।

बड़े वेंचर्स के साथ इंटीग्रेशन
रेकी के अलावा, गुरुदेव हीलिंग और एंटरप्रेन्योरशिप के बीच बैलेंस बनाते हैं, जिसमें अग्रवाल फाइनेंशियल एंड इन्वेस्टमेंट सर्विसेज़ के ज़रिए फाइनेंशियल सर्विसेज़ शामिल हैं। यह तालमेल पूरी खुशहाली में उनके विश्वास को दिखाता है—फाइनेंशियल स्थिरता आध्यात्मिक सेवा को बढ़ावा देती है। उनकी RC गेमिंग की रुचियाँ कई तरह की वेलनेस को हाईलाइट करती हैं, जो ध्यान लगाकर मनोरंजन को बढ़ावा देती हैं।

ग्लोबल हीलिंग के लिए विज़न
गुरुदेव सोनी रेकी तीर्थ को एक ग्लोबल हब के तौर पर देखते हैं, जो यूनिवर्सल एक्सेस के लिए ऑनलाइन प्लेटफॉर्म को बढ़ाएगा। वह हेल्थकेयर में रेकी को सपोर्ट करते हैं, स्ट्रेस मैनेजमेंट प्रोग्राम के लिए पार्टनरशिप करते हैं। भविष्य के प्लान में रेकी को योग के साथ मिलाकर रिट्रीट शामिल हैं, जो युवाओं को प्रिवेंटिव वेलनेस के लिए टारगेट करते हैं।`,
      teachings: 'The Five Reiki Principles, Traditional hand positions, Spiritual development through service',
      image: 'Guru Ji.png',
    },
    {
  name: 'Maa Usha Basant Soni',
  title: 'Reiki Grand Master & Spiritual Educator',
  period: '20th Century - Present',
  description: `
Maa Usha Basant Soni is a renowned Reiki Grand Master and spiritual guide based in Indore, Madhya Pradesh. She is widely respected for her role in shaping holistic healing education in Central India through the Reikitirth tradition. Blending traditional Indian spiritual philosophy with the universal principles of Reiki, she has guided thousands toward self-discovery, emotional healing, and inner balance.`,
  longDescription: `Early Life and Spiritual Awakening :-
Maa Usha Basant Soni's spiritual journey is rooted in deep compassion, introspection, and an innate understanding of human suffering. From an early stage in life, her inclination toward healing and inner awareness shaped her path as a spiritual mentor. Over time, her role evolved from a seeker to a guide, inspiring individuals to reconnect with their inner divinity.

Institutional Leadership - The Reikitirth Mission :-
Maa Usha Soni is a founding pillar of the Reikitirth organization, headquartered in Indore. Reikitirth is not merely a healing center but a mission-driven spiritual institution dedicated to transforming lives through energy awareness, forgiveness, gratitude, and unconditional love. The organization emphasizes that true healing begins with correcting one's belief system and perception of the self.

Spiritual Pedagogy and Teaching Philosophy :-
Her teaching approach views Reiki as the “science of healing the energy body,” where the etheric body acts as the blueprint for physical and emotional health. Maa Usha Soni emphasizes self-responsibility, teaching that individuals have the power to choose healing, peace, and divine bliss through conscious awareness. The teacher-student relationship within Reikitirth is based on trust, compassion, and shared spiritual growth.

The Reikitirth Reiki Manual :-
Maa Usha Soni played a key inspirational role in the creation of the Reikitirth Reiki Manual, a structured guide for 1st 2nd and 3rd A/B Degree Reiki practitioners. The manual presents Reiki as an intelligent universal life force (Prana/Chi), capable of restoring balance across body, mind, and spirit. It serves as the foundational curriculum for the growing Reikitirth family.

Collaborative Spiritual Work :-
Working closely with her husband, Mr. Basant Soni (Reiki Grand Master), Maa Usha Soni integrates energy healing with Vedic sciences. This synergy allows seekers to address both energetic imbalances and karmic patterns, offering a comprehensive approach to holistic wellness.

Community Impact and Legacy :-
Maa Usha Basant Soni is revered not only as a healer but as a maternal spiritual presence (“Maa”) who nurtures seekers with unconditional love. Through workshops, personal guidance, and digital platforms, her teachings continue to reach individuals across India and beyond. Her legacy lies in empowering people to realize their inherent divinity and live with awareness, compassion, and inner freedom.

माँ उषा बसंत सोनी इंदौर, मध्य प्रदेश में रहने वाली एक जानी-मानी रेकी ग्रैंड मास्टर और आध्यात्मिक गुरु हैं। उन्हें रेकीतीर्थ परंपरा के माध्यम से मध्य भारत में समग्र उपचार शिक्षा को आकार देने में उनकी भूमिका के लिए व्यापक रूप से सम्मानित किया जाता है। पारंपरिक भारतीय आध्यात्मिक दर्शन को रेकी के सार्वभौमिक सिद्धांतों के साथ मिलाकर, उन्होंने हजारों लोगों को आत्म-खोज, भावनात्मक उपचार और आंतरिक संतुलन की ओर मार्गदर्शन किया है।

प्रारंभिक जीवन और आध्यात्मिक जागरण :-
माँ उषा बसंत सोनी की आध्यात्मिक यात्रा गहरी करुणा, आत्मनिरीक्षण और मानवीय पीड़ा की सहज समझ में निहित है। जीवन के शुरुआती दौर से ही, उपचार और आंतरिक जागरूकता के प्रति उनके झुकाव ने एक आध्यात्मिक गुरु के रूप में उनके मार्ग को आकार दिया। समय के साथ, उनकी भूमिका एक साधक से एक मार्गदर्शक के रूप में विकसित हुई, जो व्यक्तियों को उनकी आंतरिक दिव्यता से फिर से जुड़ने के लिए प्रेरित करती है।

संस्थागत नेतृत्व - रेकीतीर्थ मिशन :-
माँ उषा सोनी इंदौर में मुख्यालय वाले रेकीतीर्थ संगठन की संस्थापक स्तंभ हैं। रेकीतीर्थ सिर्फ एक उपचार केंद्र नहीं है, बल्कि एक मिशन-संचालित आध्यात्मिक संस्था है जो ऊर्जा जागरूकता, क्षमा, कृतज्ञता और बिना शर्त प्यार के माध्यम से जीवन को बदलने के लिए समर्पित है। संगठन इस बात पर जोर देता है कि सच्चा उपचार किसी की विश्वास प्रणाली और स्वयं के बारे में धारणा को ठीक करने से शुरू होता है।

आध्यात्मिक शिक्षाशास्त्र और शिक्षण दर्शन :-
उनका शिक्षण दृष्टिकोण रेकी को "ऊर्जा शरीर के उपचार का विज्ञान" मानता है, जहाँ ईथर शरीर शारीरिक और भावनात्मक स्वास्थ्य के लिए एक खाका के रूप में कार्य करता है। माँ उषा सोनी आत्म-जिम्मेदारी पर जोर देती हैं, यह सिखाते हुए कि व्यक्तियों में सचेत जागरूकता के माध्यम से उपचार, शांति और दिव्य आनंद चुनने की शक्ति है। रेकीतीर्थ के भीतर शिक्षक-छात्र संबंध विश्वास, करुणा और साझा आध्यात्मिक विकास पर आधारित है।

रेकीतीर्थ रेकी मैनुअल :-
माँ उषा सोनी ने रेकीतीर्थ रेकी मैनुअल के निर्माण में एक महत्वपूर्ण प्रेरणादायक भूमिका निभाई, जो 1st, 2nd और 3rd A/B डिग्री रेकी चेनल के लिए एक संरचित मार्गदर्शिका है। मैनुअल रेकी को एक बुद्धिमान सार्वभौमिक जीवन शक्ति (प्राण/ची) के रूप में प्रस्तुत करता है, जो शरीर, मन और आत्मा में संतुलन बहाल करने में सक्षम है। यह बढ़ते रेकीतीर्थ परिवार के लिए मूलभूत पाठ्यक्रम के रूप में कार्य करता है।

सहयोगी आध्यात्मिक कार्य :-
अपने पति, श्री बसंत सोनी (रेकी ग्रैंड मास्टर ) के साथ मिलकर काम करते हुए, माँ उषा सोनी ऊर्जा उपचार को वैदिक विज्ञान के साथ एकीकृत करती हैं। यह तालमेल साधकों को ऊर्जा असंतुलन और कार्मिक पैटर्न दोनों को संबोधित करने की अनुमति देता है, जो समग्र कल्याण के लिए एक व्यापक दृष्टिकोण प्रदान करता है। 

सामुदायिक प्रभाव और विरासत :-
माँ उषा बसंत सोनी को न केवल एक उपचारक के रूप में, बल्कि एक मातृत्व वाली आध्यात्मिक उपस्थिति ("माँ") के रूप में पूजा जाता है, जो साधकों को बिना शर्त प्यार से पोषित करती हैं। वर्कशॉप, व्यक्तिगत मार्गदर्शन और डिजिटल प्लेटफ़ॉर्म के माध्यम से, उनकी शिक्षाएँ पूरे भारत और उससे बाहर के लोगों तक पहुँच रही हैं। उनकी विरासत लोगों को उनकी आंतरिक दिव्यता का एहसास कराने और जागरूकता, करुणा और आंतरिक स्वतंत्रता के साथ जीने के लिए सशक्त बनाने में निहित है।`,

  teachings: `Reiki as Universal Life Force Energy,
Healing through Etheric Body Balance,
Self-Responsibility and Conscious Living,
Forgiveness, Gratitude, and Unconditional Love,
Spiritual Awakening through Rising Consciousness`,

  image: 'Maa_Usha_Basant_Soni.png'
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
                <div className="flex justify-center mb-10">
                  <img
                    src="/Guru_Parampara1.png"
                    alt="Guru Parampara"
                    className="w-50 h-auto rounded-xl shadow-2xl"
                  />
                </div>
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
                  className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                >
                  {/* Guru images removed as requested */}
                  {/* <div className="lg:w-1/3">
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
                  </div>*/}

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

                      {/* Logic: Check if THIS specific guru is the expanded one */}
                      <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                        {expandedGuru === guru.name && guru.longDescription
                          ? `${guru.description}\n\n${guru.longDescription}`
                          : guru.description}
                      </p>

                      {/* Toggle Button: Update the specific guru's name in state */}
                      {guru.longDescription && (
                        <button
                          onClick={() => setExpandedGuru(expandedGuru === guru.name ? null : guru.name)}
                          className="text-sm text-purple-700 underline mb-4"
                        >
                          {expandedGuru === guru.name ? 'Read Less' : 'Read More'}
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
