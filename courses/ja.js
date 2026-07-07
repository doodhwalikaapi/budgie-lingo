// data/courses/ja.js — Japanese course: 6 lessons (romaji + kana/kanji shown together)
module.exports = {
  code: 'ja',
  name: 'Japanese',
  lessons: [
    {
      id: 'ja-1', title: 'Greetings',
      vocab: [
        { term: 'Konnichiwa (こんにちは)', meaning: 'Hello' }, { term: 'Sayounara (さようなら)', meaning: 'Goodbye' }, { term: 'Arigatou (ありがとう)', meaning: 'Thank you' }, { term: 'Ohayou (おはよう)', meaning: 'Good morning' }, { term: 'Konbanwa (こんばんは)', meaning: 'Good evening' }, { term: 'Sumimasen (すみません)', meaning: 'Excuse me / Sorry' }
      ],
      questions: [
        { id: 'q1', prompt: 'How do you say "Hello" in Japanese?', options: ['Konnichiwa (こんにちは)', 'Arigatou (ありがとう)', 'Sayounara (さようなら)', 'Sumimasen (すみません)'], answer: 'Konnichiwa (こんにちは)' },
        { id: 'q2', prompt: 'How do you say "Goodbye"?', options: ['Ohayou (おはよう)', 'Sayounara (さようなら)', 'Onegai (お願い)', 'Hai (はい)'], answer: 'Sayounara (さようなら)' },
        { id: 'q3', prompt: 'What does "Arigatou (ありがとう)" mean?', options: ['Please', 'Sorry', 'Thank you', 'Yes'], answer: 'Thank you' },
        { id: 'q4', prompt: 'How do you say "Good morning"?', options: ['Ohayou (おはよう)', 'Konbanwa (こんばんは)', 'Oyasumi (おやすみ)', 'Konnichiwa (こんにちは)'], answer: 'Ohayou (おはよう)' },
        { id: 'q5', prompt: 'What does "Sumimasen (すみません)" mean?', options: ['Excuse me/Sorry', 'Thank you', 'Goodbye', 'Yes'], answer: 'Excuse me/Sorry' },
        { id: 'q6', prompt: 'How do you say "Good evening"?', options: ['Konbanwa (こんばんは)', 'Ohayou (おはよう)', 'Oyasumi (おやすみ)', 'Konnichiwa (こんにちは)'], answer: 'Konbanwa (こんばんは)' }
      ]
    },
    {
      id: 'ja-2', title: 'Numbers 1-10',
      vocab: [
        { term: 'Ichi (一)', meaning: 'One' }, { term: 'Ni (二)', meaning: 'Two' }, { term: 'San (三)', meaning: 'Three' }, { term: 'Yon (四)', meaning: 'Four' }, { term: 'Go (五)', meaning: 'Five' }, { term: 'Roku (六)', meaning: 'Six' }, { term: 'Nana (七)', meaning: 'Seven' }, { term: 'Hachi (八)', meaning: 'Eight' }, { term: 'Kyuu (九)', meaning: 'Nine' }, { term: 'Juu (十)', meaning: 'Ten' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Ichi (一)"?', options: ['One', 'Two', 'Three', 'Four'], answer: 'One' },
        { id: 'q2', prompt: 'What is "San (三)"?', options: ['Two', 'Three', 'Five', 'Six'], answer: 'Three' },
        { id: 'q3', prompt: 'What is the Japanese word for "five"?', options: ['Yon (四)', 'Go (五)', 'Nana (七)', 'Hachi (八)'], answer: 'Go (五)' },
        { id: 'q4', prompt: 'What is "Juu (十)"?', options: ['Eight', 'Nine', 'Ten', 'Seven'], answer: 'Ten' },
        { id: 'q5', prompt: 'What is the Japanese word for "seven"?', options: ['Roku (六)', 'Nana (七)', 'Hachi (八)', 'Kyuu (九)'], answer: 'Nana (七)' },
        { id: 'q6', prompt: 'What is "Ni (二)"?', options: ['One', 'Two', 'Three', 'Four'], answer: 'Two' }
      ]
    },
    {
      id: 'ja-3', title: 'Colors',
      vocab: [
        { term: 'Aka (赤)', meaning: 'Red' }, { term: 'Ao (青)', meaning: 'Blue' }, { term: 'Midori (緑)', meaning: 'Green' }, { term: 'Kiiro (黄色)', meaning: 'Yellow' }, { term: 'Kuro (黒)', meaning: 'Black' }, { term: 'Shiro (白)', meaning: 'White' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Aka (赤)"?', options: ['Blue', 'Red', 'Green', 'Yellow'], answer: 'Red' },
        { id: 'q2', prompt: 'What is the Japanese word for "blue"?', options: ['Ao (青)', 'Midori (緑)', 'Kiiro (黄色)', 'Kuro (黒)'], answer: 'Ao (青)' },
        { id: 'q3', prompt: 'What is "Midori (緑)"?', options: ['White', 'Black', 'Green', 'Pink'], answer: 'Green' },
        { id: 'q4', prompt: 'What is the Japanese word for "black"?', options: ['Shiro (白)', 'Kuro (黒)', 'Hai-iro (灰色)', 'Pinku (ピンク)'], answer: 'Kuro (黒)' },
        { id: 'q5', prompt: 'What is "Kiiro (黄色)"?', options: ['Yellow', 'Orange', 'Purple', 'Brown'], answer: 'Yellow' },
        { id: 'q6', prompt: 'What is the Japanese word for "white"?', options: ['Shiro (白)', 'Kuro (黒)', 'Ao (青)', 'Midori (緑)'], answer: 'Shiro (白)' }
      ]
    },
    {
      id: 'ja-4', title: 'Family',
      vocab: [
        { term: 'Haha (母)', meaning: 'Mother' }, { term: 'Chichi (父)', meaning: 'Father' }, { term: 'Ani (兄)', meaning: 'Older brother' }, { term: 'Ane (姉)', meaning: 'Older sister' }, { term: 'Ryoushin (両親)', meaning: 'Parents' }, { term: 'Musuko (息子)', meaning: 'Son' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Haha (母)"?', options: ['Father', 'Mother', 'Sister', 'Brother'], answer: 'Mother' },
        { id: 'q2', prompt: 'What is the Japanese word for "father"?', options: ['Chichi (父)', 'Ani (兄)', 'Musuko (息子)', 'Oji (叔父)'], answer: 'Chichi (父)' },
        { id: 'q3', prompt: 'What is "Ani (兄)"?', options: ['Older sister', 'Older brother', 'Cousin', 'Uncle'], answer: 'Older brother' },
        { id: 'q4', prompt: 'What is the Japanese word for "older sister"?', options: ['Ane (姉)', 'Oba (叔母)', 'Musume (娘)', 'Haha (母)'], answer: 'Ane (姉)' },
        { id: 'q5', prompt: 'What is "Ryoushin (両親)"?', options: ['Grandparents', 'Parents', 'Children', 'Cousins'], answer: 'Parents' },
        { id: 'q6', prompt: 'What is the Japanese word for "son"?', options: ['Musuko (息子)', 'Musume (娘)', 'Chichi (父)', 'Ani (兄)'], answer: 'Musuko (息子)' }
      ]
    },
    {
      id: 'ja-5', title: 'Food',
      vocab: [
        { term: 'Pan (パン)', meaning: 'Bread' }, { term: 'Mizu (水)', meaning: 'Water' }, { term: 'Gohan (ご飯)', meaning: 'Rice / Meal' }, { term: 'Sakana (魚)', meaning: 'Fish' }, { term: 'Koohii (コーヒー)', meaning: 'Coffee' }, { term: 'Niku (肉)', meaning: 'Meat' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Pan (パン)"?', options: ['Bread', 'Cheese', 'Water', 'Milk'], answer: 'Bread' },
        { id: 'q2', prompt: 'What is the Japanese word for "water"?', options: ['Mizu (水)', 'Gyuunyuu (牛乳)', 'Wain (ワイン)', 'Koohii (コーヒー)'], answer: 'Mizu (水)' },
        { id: 'q3', prompt: 'What is "Gohan (ご飯)"?', options: ['Bread', 'Rice/Meal', 'Egg', 'Meat'], answer: 'Rice/Meal' },
        { id: 'q4', prompt: 'What is the Japanese word for "fish"?', options: ['Sakana (魚)', 'Niku (肉)', 'Tamago (卵)', 'Yasai (野菜)'], answer: 'Sakana (魚)' },
        { id: 'q5', prompt: 'What is "Koohii (コーヒー)"?', options: ['Tea', 'Coffee', 'Juice', 'Soup'], answer: 'Coffee' },
        { id: 'q6', prompt: 'What is the Japanese word for "meat"?', options: ['Niku (肉)', 'Sakana (魚)', 'Kome (米)', 'Suupu (スープ)'], answer: 'Niku (肉)' }
      ]
    },
    {
      id: 'ja-6', title: 'Everyday Phrases',
      vocab: [
        { term: 'Ogenki desu ka? (お元気ですか？)', meaning: 'How are you?' }, { term: 'Watashi no namae wa ... desu', meaning: 'My name is...' }, { term: 'Wakarimasen (分かりません)', meaning: 'I don\'t know / understand' }, { term: 'Sumimasen (すみません)', meaning: 'Excuse me' }, { term: '...wa doko desu ka? (...はどこですか？)', meaning: 'Where is...?' }, { term: 'Dou itashimashite (どういたしまして)', meaning: 'You\'re welcome' }
      ],
      questions: [
        { id: 'q1', prompt: 'What does "Ogenki desu ka? (お元気ですか？)" mean?', options: ['What\'s your name?', 'How are you?', 'Where are you?', 'What time is it?'], answer: 'How are you?' },
        { id: 'q2', prompt: 'How do you say "My name is..."?', options: ['Watashi no namae wa ... desu', 'Watashi wa ... ni sunde imasu', 'Watashi wa ... kara kimashita', 'Watashi wa ... ga arimasu'], answer: 'Watashi no namae wa ... desu' },
        { id: 'q3', prompt: 'What does "Wakarimasen (分かりません)" mean?', options: ['I understand', 'I don\'t know/understand', 'I am lost', 'I am sorry'], answer: 'I don\'t know/understand' },
        { id: 'q4', prompt: 'How do you say "Excuse me"?', options: ['Sumimasen (すみません)', 'Dou itashimashite (どういたしまして)', 'Ki o tsukete (気をつけて)', 'Ganbatte (頑張って)'], answer: 'Sumimasen (すみません)' },
        { id: 'q5', prompt: 'What does "...wa doko desu ka? (...はどこですか？)" mean?', options: ['What is...', 'Where is...', 'Who is...', 'When is...'], answer: 'Where is...' },
        { id: 'q6', prompt: 'How do you say "You\'re welcome"?', options: ['Dou itashimashite (どういたしまして)', 'Youkoso (ようこそ)', 'Mochiron (もちろん)', 'Daijoubu (大丈夫)'], answer: 'Dou itashimashite (どういたしまして)' }
      ]
    }
  ]
};
