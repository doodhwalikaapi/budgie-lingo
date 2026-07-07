// data/courses/hi.js — Hindi course: 6 lessons (romanized + Devanagari shown together)
module.exports = {
  code: 'hi',
  name: 'Hindi',
  lessons: [
    {
      id: 'hi-1', title: 'Greetings',
      vocab: [
        { term: 'Namaste (नमस्ते)', meaning: 'Hello' }, { term: 'Alvida (अलविदा)', meaning: 'Goodbye' }, { term: 'Dhanyavaad (धन्यवाद)', meaning: 'Thank you' }, { term: 'Kripya (कृपया)', meaning: 'Please' }, { term: 'Haan (हाँ)', meaning: 'Yes' }, { term: 'Nahi (नहीं)', meaning: 'No' }
      ],
      questions: [
        { id: 'q1', prompt: 'How do you say "Hello" in Hindi?', options: ['Namaste (नमस्ते)', 'Dhanyavaad (धन्यवाद)', 'Alvida (अलविदा)', 'Kripya (कृपया)'], answer: 'Namaste (नमस्ते)' },
        { id: 'q2', prompt: 'How do you say "Goodbye"?', options: ['Namaste (नमस्ते)', 'Alvida (अलविदा)', 'Haan (हाँ)', 'Nahi (नहीं)'], answer: 'Alvida (अलविदा)' },
        { id: 'q3', prompt: 'What does "Dhanyavaad (धन्यवाद)" mean?', options: ['Please', 'Sorry', 'Thank you', 'Yes'], answer: 'Thank you' },
        { id: 'q4', prompt: 'What does "Kripya (कृपया)" mean?', options: ['Please', 'Excuse me', 'Thank you', 'Goodbye'], answer: 'Please' },
        { id: 'q5', prompt: 'How do you say "Yes"?', options: ['Haan (हाँ)', 'Nahi (नहीं)', 'Theek (ठीक)', 'Accha (अच्छा)'], answer: 'Haan (हाँ)' },
        { id: 'q6', prompt: 'How do you say "No"?', options: ['Haan (हाँ)', 'Nahi (नहीं)', 'Kya (क्या)', 'Kyun (क्यों)'], answer: 'Nahi (नहीं)' }
      ]
    },
    {
      id: 'hi-2', title: 'Numbers 1-10',
      vocab: [
        { term: 'Ek (एक)', meaning: 'One' }, { term: 'Do (दो)', meaning: 'Two' }, { term: 'Teen (तीन)', meaning: 'Three' }, { term: 'Char (चार)', meaning: 'Four' }, { term: 'Paanch (पाँच)', meaning: 'Five' }, { term: 'Chhe (छह)', meaning: 'Six' }, { term: 'Saat (सात)', meaning: 'Seven' }, { term: 'Aath (आठ)', meaning: 'Eight' }, { term: 'Nau (नौ)', meaning: 'Nine' }, { term: 'Das (दस)', meaning: 'Ten' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Ek (एक)"?', options: ['One', 'Two', 'Three', 'Four'], answer: 'One' },
        { id: 'q2', prompt: 'What is "Teen (तीन)"?', options: ['Two', 'Three', 'Five', 'Six'], answer: 'Three' },
        { id: 'q3', prompt: 'What is the Hindi word for "five"?', options: ['Char (चार)', 'Paanch (पाँच)', 'Saat (सात)', 'Aath (आठ)'], answer: 'Paanch (पाँच)' },
        { id: 'q4', prompt: 'What is "Das (दस)"?', options: ['Eight', 'Nine', 'Ten', 'Seven'], answer: 'Ten' },
        { id: 'q5', prompt: 'What is the Hindi word for "seven"?', options: ['Chhe (छह)', 'Saat (सात)', 'Aath (आठ)', 'Nau (नौ)'], answer: 'Saat (सात)' },
        { id: 'q6', prompt: 'What is "Do (दो)"?', options: ['One', 'Two', 'Three', 'Four'], answer: 'Two' }
      ]
    },
    {
      id: 'hi-3', title: 'Colors',
      vocab: [
        { term: 'Laal (लाल)', meaning: 'Red' }, { term: 'Neela (नीला)', meaning: 'Blue' }, { term: 'Hara (हरा)', meaning: 'Green' }, { term: 'Peela (पीला)', meaning: 'Yellow' }, { term: 'Kaala (काला)', meaning: 'Black' }, { term: 'Safed (सफेद)', meaning: 'White' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Laal (लाल)"?', options: ['Blue', 'Red', 'Green', 'Yellow'], answer: 'Red' },
        { id: 'q2', prompt: 'What is the Hindi word for "blue"?', options: ['Neela (नीला)', 'Hara (हरा)', 'Peela (पीला)', 'Kaala (काला)'], answer: 'Neela (नीला)' },
        { id: 'q3', prompt: 'What is "Hara (हरा)"?', options: ['White', 'Black', 'Green', 'Pink'], answer: 'Green' },
        { id: 'q4', prompt: 'What is the Hindi word for "black"?', options: ['Safed (सफेद)', 'Kaala (काला)', 'Bhura (भूरा)', 'Gulabi (गुलाबी)'], answer: 'Kaala (काला)' },
        { id: 'q5', prompt: 'What is "Peela (पीला)"?', options: ['Yellow', 'Orange', 'Purple', 'Brown'], answer: 'Yellow' },
        { id: 'q6', prompt: 'What is the Hindi word for "white"?', options: ['Safed (सफेद)', 'Kaala (काला)', 'Neela (नीला)', 'Hara (हरा)'], answer: 'Safed (सफेद)' }
      ]
    },
    {
      id: 'hi-4', title: 'Family',
      vocab: [
        { term: 'Maa (माँ)', meaning: 'Mother' }, { term: 'Pita (पिता)', meaning: 'Father' }, { term: 'Bhai (भाई)', meaning: 'Brother' }, { term: 'Behen (बहन)', meaning: 'Sister' }, { term: 'Maata-Pita (माता-पिता)', meaning: 'Parents' }, { term: 'Beta (बेटा)', meaning: 'Son' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Maa (माँ)"?', options: ['Father', 'Mother', 'Sister', 'Brother'], answer: 'Mother' },
        { id: 'q2', prompt: 'What is the Hindi word for "father"?', options: ['Pita (पिता)', 'Bhai (भाई)', 'Beta (बेटा)', 'Chacha (चाचा)'], answer: 'Pita (पिता)' },
        { id: 'q3', prompt: 'What is "Bhai (भाई)"?', options: ['Sister', 'Brother', 'Cousin', 'Uncle'], answer: 'Brother' },
        { id: 'q4', prompt: 'What is the Hindi word for "sister"?', options: ['Behen (बहन)', 'Chachi (चाची)', 'Beti (बेटी)', 'Maa (माँ)'], answer: 'Behen (बहन)' },
        { id: 'q5', prompt: 'What is "Maata-Pita (माता-पिता)"?', options: ['Grandparents', 'Parents', 'Children', 'Cousins'], answer: 'Parents' },
        { id: 'q6', prompt: 'What is the Hindi word for "son"?', options: ['Beta (बेटा)', 'Beti (बेटी)', 'Pita (पिता)', 'Bhai (भाई)'], answer: 'Beta (बेटा)' }
      ]
    },
    {
      id: 'hi-5', title: 'Food',
      vocab: [
        { term: 'Roti (रोटी)', meaning: 'Bread' }, { term: 'Paani (पानी)', meaning: 'Water' }, { term: 'Doodh (दूध)', meaning: 'Milk' }, { term: 'Chawal (चावल)', meaning: 'Rice' }, { term: 'Chai (चाय)', meaning: 'Tea' }, { term: 'Sabzi (सब्ज़ी)', meaning: 'Vegetable' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Roti (रोटी)"?', options: ['Bread', 'Cheese', 'Water', 'Milk'], answer: 'Bread' },
        { id: 'q2', prompt: 'What is the Hindi word for "water"?', options: ['Paani (पानी)', 'Doodh (दूध)', 'Chai (चाय)', 'Coffee (कॉफ़ी)'], answer: 'Paani (पानी)' },
        { id: 'q3', prompt: 'What is "Doodh (दूध)"?', options: ['Butter', 'Cheese', 'Milk', 'Meat'], answer: 'Milk' },
        { id: 'q4', prompt: 'What is the Hindi word for "rice"?', options: ['Chawal (चावल)', 'Sabzi (सब्ज़ी)', 'Dal (दाल)', 'Fal (फल)'], answer: 'Chawal (चावल)' },
        { id: 'q5', prompt: 'What is "Chai (चाय)"?', options: ['Tea', 'Coffee', 'Juice', 'Soup'], answer: 'Tea' },
        { id: 'q6', prompt: 'What is the Hindi word for "vegetable"?', options: ['Sabzi (सब्ज़ी)', 'Fal (फल)', 'Chawal (चावल)', 'Dal (दाल)'], answer: 'Sabzi (सब्ज़ी)' }
      ]
    },
    {
      id: 'hi-6', title: 'Everyday Phrases',
      vocab: [
        { term: 'Aap kaise hain? (आप कैसे हैं?)', meaning: 'How are you?' }, { term: 'Mera naam ... hai', meaning: 'My name is...' }, { term: 'Mujhe samajh nahi aaya', meaning: 'I don\'t understand' }, { term: 'Maaf kijiye (माफ़ कीजिये)', meaning: 'Excuse me / Sorry' }, { term: 'Kahaan hai...? (कहाँ है...?)', meaning: 'Where is...?' }, { term: 'Koi baat nahi (कोई बात नहीं)', meaning: 'You\'re welcome' }
      ],
      questions: [
        { id: 'q1', prompt: 'What does "Aap kaise hain? (आप कैसे हैं?)" mean?', options: ['What\'s your name?', 'How are you?', 'Where are you?', 'What time is it?'], answer: 'How are you?' },
        { id: 'q2', prompt: 'How do you say "My name is..."?', options: ['Mera naam ... hai', 'Main ... rehta hoon', 'Main ... se hoon', 'Mere paas ... hai'], answer: 'Mera naam ... hai' },
        { id: 'q3', prompt: 'What does "Mujhe samajh nahi aaya" mean?', options: ['I understand', 'I don\'t know', 'I don\'t understand', 'I am lost'], answer: 'I don\'t understand' },
        { id: 'q4', prompt: 'How do you say "Excuse me / Sorry"?', options: ['Maaf kijiye (माफ़ कीजिये)', 'Swagat hai (स्वागत है)', 'Dhyan dijiye (ध्यान दीजिये)', 'Shubh (शुभ)'], answer: 'Maaf kijiye (माफ़ कीजिये)' },
        { id: 'q5', prompt: 'What does "Kahaan hai...? (कहाँ है...?)" mean?', options: ['What is...', 'Where is...', 'Who is...', 'When is...'], answer: 'Where is...' },
        { id: 'q6', prompt: 'How do you say "You\'re welcome"?', options: ['Koi baat nahi (कोई बात नहीं)', 'Swagat (स्वागत)', 'Zaroor (ज़रूर)', 'Theek hai (ठीक है)'], answer: 'Koi baat nahi (कोई बात नहीं)' }
      ]
    }
  ]
};
