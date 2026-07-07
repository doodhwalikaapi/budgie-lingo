// data/courses/zh.js — Chinese (Mandarin) course: 6 lessons (pinyin + characters shown together)
module.exports = {
  code: 'zh',
  name: 'Chinese',
  lessons: [
    {
      id: 'zh-1', title: 'Greetings',
      vocab: [
        { term: 'Nǐ hǎo (你好)', meaning: 'Hello' }, { term: 'Zàijiàn (再见)', meaning: 'Goodbye' }, { term: 'Xièxiè (谢谢)', meaning: 'Thank you' }, { term: 'Zǎoshang hǎo (早上好)', meaning: 'Good morning' }, { term: 'Wǎnshàng hǎo (晚上好)', meaning: 'Good evening' }, { term: 'Duìbùqǐ (对不起)', meaning: 'Sorry' }
      ],
      questions: [
        { id: 'q1', prompt: 'How do you say "Hello" in Chinese?', options: ['Nǐ hǎo (你好)', 'Xièxiè (谢谢)', 'Zàijiàn (再见)', 'Duìbùqǐ (对不起)'], answer: 'Nǐ hǎo (你好)' },
        { id: 'q2', prompt: 'How do you say "Goodbye"?', options: ['Zǎoshang hǎo (早上好)', 'Zàijiàn (再见)', 'Qǐng (请)', 'Shì (是)'], answer: 'Zàijiàn (再见)' },
        { id: 'q3', prompt: 'What does "Xièxiè (谢谢)" mean?', options: ['Please', 'Sorry', 'Thank you', 'Yes'], answer: 'Thank you' },
        { id: 'q4', prompt: 'How do you say "Good morning"?', options: ['Zǎoshang hǎo (早上好)', 'Wǎnshàng hǎo (晚上好)', 'Wǎn ān (晚安)', 'Nǐ hǎo (你好)'], answer: 'Zǎoshang hǎo (早上好)' },
        { id: 'q5', prompt: 'What does "Duìbùqǐ (对不起)" mean?', options: ['Sorry', 'Thank you', 'Goodbye', 'Yes'], answer: 'Sorry' },
        { id: 'q6', prompt: 'How do you say "Good evening"?', options: ['Wǎnshàng hǎo (晚上好)', 'Zǎoshang hǎo (早上好)', 'Wǎn ān (晚安)', 'Nǐ hǎo (你好)'], answer: 'Wǎnshàng hǎo (晚上好)' }
      ]
    },
    {
      id: 'zh-2', title: 'Numbers 1-10',
      vocab: [
        { term: 'Yī (一)', meaning: 'One' }, { term: 'Èr (二)', meaning: 'Two' }, { term: 'Sān (三)', meaning: 'Three' }, { term: 'Sì (四)', meaning: 'Four' }, { term: 'Wǔ (五)', meaning: 'Five' }, { term: 'Liù (六)', meaning: 'Six' }, { term: 'Qī (七)', meaning: 'Seven' }, { term: 'Bā (八)', meaning: 'Eight' }, { term: 'Jiǔ (九)', meaning: 'Nine' }, { term: 'Shí (十)', meaning: 'Ten' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Yī (一)"?', options: ['One', 'Two', 'Three', 'Four'], answer: 'One' },
        { id: 'q2', prompt: 'What is "Sān (三)"?', options: ['Two', 'Three', 'Five', 'Six'], answer: 'Three' },
        { id: 'q3', prompt: 'What is the Chinese word for "five"?', options: ['Sì (四)', 'Wǔ (五)', 'Qī (七)', 'Bā (八)'], answer: 'Wǔ (五)' },
        { id: 'q4', prompt: 'What is "Shí (十)"?', options: ['Eight', 'Nine', 'Ten', 'Seven'], answer: 'Ten' },
        { id: 'q5', prompt: 'What is the Chinese word for "seven"?', options: ['Liù (六)', 'Qī (七)', 'Bā (八)', 'Jiǔ (九)'], answer: 'Qī (七)' },
        { id: 'q6', prompt: 'What is "Èr (二)"?', options: ['One', 'Two', 'Three', 'Four'], answer: 'Two' }
      ]
    },
    {
      id: 'zh-3', title: 'Colors',
      vocab: [
        { term: 'Hóng sè (红色)', meaning: 'Red' }, { term: 'Lán sè (蓝色)', meaning: 'Blue' }, { term: 'Lǜ sè (绿色)', meaning: 'Green' }, { term: 'Huáng sè (黄色)', meaning: 'Yellow' }, { term: 'Hēi sè (黑色)', meaning: 'Black' }, { term: 'Bái sè (白色)', meaning: 'White' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Hóng sè (红色)"?', options: ['Blue', 'Red', 'Green', 'Yellow'], answer: 'Red' },
        { id: 'q2', prompt: 'What is the Chinese word for "blue"?', options: ['Lán sè (蓝色)', 'Lǜ sè (绿色)', 'Huáng sè (黄色)', 'Hēi sè (黑色)'], answer: 'Lán sè (蓝色)' },
        { id: 'q3', prompt: 'What is "Lǜ sè (绿色)"?', options: ['White', 'Black', 'Green', 'Pink'], answer: 'Green' },
        { id: 'q4', prompt: 'What is the Chinese word for "black"?', options: ['Bái sè (白色)', 'Hēi sè (黑色)', 'Huī sè (灰色)', 'Fěn sè (粉色)'], answer: 'Hēi sè (黑色)' },
        { id: 'q5', prompt: 'What is "Huáng sè (黄色)"?', options: ['Yellow', 'Orange', 'Purple', 'Brown'], answer: 'Yellow' },
        { id: 'q6', prompt: 'What is the Chinese word for "white"?', options: ['Bái sè (白色)', 'Hēi sè (黑色)', 'Lán sè (蓝色)', 'Lǜ sè (绿色)'], answer: 'Bái sè (白色)' }
      ]
    },
    {
      id: 'zh-4', title: 'Family',
      vocab: [
        { term: 'Māma (妈妈)', meaning: 'Mother' }, { term: 'Bàba (爸爸)', meaning: 'Father' }, { term: 'Gēge (哥哥)', meaning: 'Older brother' }, { term: 'Jiějie (姐姐)', meaning: 'Older sister' }, { term: 'Fùmǔ (父母)', meaning: 'Parents' }, { term: 'Érzi (儿子)', meaning: 'Son' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Māma (妈妈)"?', options: ['Father', 'Mother', 'Sister', 'Brother'], answer: 'Mother' },
        { id: 'q2', prompt: 'What is the Chinese word for "father"?', options: ['Bàba (爸爸)', 'Gēge (哥哥)', 'Érzi (儿子)', 'Shūshu (叔叔)'], answer: 'Bàba (爸爸)' },
        { id: 'q3', prompt: 'What is "Gēge (哥哥)"?', options: ['Younger sister', 'Older brother', 'Cousin', 'Uncle'], answer: 'Older brother' },
        { id: 'q4', prompt: 'What is the Chinese word for "older sister"?', options: ['Jiějie (姐姐)', 'Āyí (阿姨)', 'Nǚ\'ér (女儿)', 'Māma (妈妈)'], answer: 'Jiějie (姐姐)' },
        { id: 'q5', prompt: 'What is "Fùmǔ (父母)"?', options: ['Grandparents', 'Parents', 'Children', 'Cousins'], answer: 'Parents' },
        { id: 'q6', prompt: 'What is the Chinese word for "son"?', options: ['Érzi (儿子)', 'Nǚ\'ér (女儿)', 'Bàba (爸爸)', 'Gēge (哥哥)'], answer: 'Érzi (儿子)' }
      ]
    },
    {
      id: 'zh-5', title: 'Food',
      vocab: [
        { term: 'Miànbāo (面包)', meaning: 'Bread' }, { term: 'Shuǐ (水)', meaning: 'Water' }, { term: 'Mǐfàn (米饭)', meaning: 'Rice' }, { term: 'Yú (鱼)', meaning: 'Fish' }, { term: 'Kāfēi (咖啡)', meaning: 'Coffee' }, { term: 'Ròu (肉)', meaning: 'Meat' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "Miànbāo (面包)"?', options: ['Bread', 'Cheese', 'Water', 'Milk'], answer: 'Bread' },
        { id: 'q2', prompt: 'What is the Chinese word for "water"?', options: ['Shuǐ (水)', 'Niúnǎi (牛奶)', 'Jiǔ (酒)', 'Kāfēi (咖啡)'], answer: 'Shuǐ (水)' },
        { id: 'q3', prompt: 'What is "Mǐfàn (米饭)"?', options: ['Bread', 'Rice', 'Egg', 'Meat'], answer: 'Rice' },
        { id: 'q4', prompt: 'What is the Chinese word for "fish"?', options: ['Yú (鱼)', 'Ròu (肉)', 'Jīdàn (鸡蛋)', 'Shūcài (蔬菜)'], answer: 'Yú (鱼)' },
        { id: 'q5', prompt: 'What is "Kāfēi (咖啡)"?', options: ['Tea', 'Coffee', 'Juice', 'Soup'], answer: 'Coffee' },
        { id: 'q6', prompt: 'What is the Chinese word for "meat"?', options: ['Ròu (肉)', 'Yú (鱼)', 'Mǐ (米)', 'Tāng (汤)'], answer: 'Ròu (肉)' }
      ]
    },
    {
      id: 'zh-6', title: 'Everyday Phrases',
      vocab: [
        { term: 'Nǐ hǎo ma? (你好吗？)', meaning: 'How are you?' }, { term: 'Wǒ jiào ... (我叫...)', meaning: 'My name is...' }, { term: 'Wǒ bù dǒng (我不懂)', meaning: 'I don\'t understand' }, { term: 'Bù hǎoyìsi (不好意思)', meaning: 'Excuse me / Sorry' }, { term: '...zài nǎlǐ? (...在哪里？)', meaning: 'Where is...?' }, { term: 'Bú kèqi (不客气)', meaning: 'You\'re welcome' }
      ],
      questions: [
        { id: 'q1', prompt: 'What does "Nǐ hǎo ma? (你好吗？)" mean?', options: ['What\'s your name?', 'How are you?', 'Where are you?', 'What time is it?'], answer: 'How are you?' },
        { id: 'q2', prompt: 'How do you say "My name is..."?', options: ['Wǒ jiào ... (我叫...)', 'Wǒ zhù zài ... (我住在...)', 'Wǒ láizì ... (我来自...)', 'Wǒ yǒu ... (我有...)'], answer: 'Wǒ jiào ... (我叫...)' },
        { id: 'q3', prompt: 'What does "Wǒ bù dǒng (我不懂)" mean?', options: ['I understand', 'I don\'t know', 'I don\'t understand', 'I am lost'], answer: 'I don\'t understand' },
        { id: 'q4', prompt: 'How do you say "Excuse me / Sorry"?', options: ['Bù hǎoyìsi (不好意思)', 'Bú kèqi (不客气)', 'Xiǎoxīn (小心)', 'Jiāyóu (加油)'], answer: 'Bù hǎoyìsi (不好意思)' },
        { id: 'q5', prompt: 'What does "...zài nǎlǐ? (...在哪里？)" mean?', options: ['What is...', 'Where is...', 'Who is...', 'When is...'], answer: 'Where is...' },
        { id: 'q6', prompt: 'How do you say "You\'re welcome"?', options: ['Bú kèqi (不客气)', 'Huānyíng (欢迎)', 'Dāngrán (当然)', 'Méi wèntí (没问题)'], answer: 'Bú kèqi (不客气)' }
      ]
    }
  ]
};
