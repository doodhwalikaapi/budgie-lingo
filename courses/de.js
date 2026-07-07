// data/courses/de.js — German course: 6 lessons
module.exports = {
  code: 'de',
  name: 'German',
  lessons: [
    {
      id: 'de-1', title: 'Greetings',
      vocab: [
        { term: 'Hallo', meaning: 'Hello' }, { term: 'Tschüss', meaning: 'Goodbye' }, { term: 'Danke', meaning: 'Thank you' }, { term: 'Guten Morgen', meaning: 'Good morning' }, { term: 'Guten Abend', meaning: 'Good evening' }, { term: 'Bitte', meaning: 'Please / You\'re welcome' }
      ],
      questions: [
        { id: 'q1', prompt: 'How do you say "Hello" in German?', options: ['Hallo', 'Tschüss', 'Danke', 'Bitte'], answer: 'Hallo' },
        { id: 'q2', prompt: 'How do you say "Goodbye"?', options: ['Guten Morgen', 'Tschüss', 'Bitte', 'Ja'], answer: 'Tschüss' },
        { id: 'q3', prompt: 'What does "Danke" mean?', options: ['Please', 'Sorry', 'Thank you', 'Yes'], answer: 'Thank you' },
        { id: 'q4', prompt: 'How do you say "Good morning"?', options: ['Guten Morgen', 'Guten Abend', 'Gute Nacht', 'Guten Tag'], answer: 'Guten Morgen' },
        { id: 'q5', prompt: 'What does "Bitte" mean?', options: ['Please/You\'re welcome', 'Excuse me', 'Sorry', 'Goodbye'], answer: 'Please/You\'re welcome' },
        { id: 'q6', prompt: 'How do you say "Good evening"?', options: ['Guten Abend', 'Guten Morgen', 'Gute Nacht', 'Hallo'], answer: 'Guten Abend' }
      ]
    },
    {
      id: 'de-2', title: 'Numbers 1-10',
      vocab: [
        { term: 'Eins', meaning: 'One' }, { term: 'Zwei', meaning: 'Two' }, { term: 'Drei', meaning: 'Three' }, { term: 'Vier', meaning: 'Four' }, { term: 'Fünf', meaning: 'Five' }, { term: 'Sechs', meaning: 'Six' }, { term: 'Sieben', meaning: 'Seven' }, { term: 'Acht', meaning: 'Eight' }, { term: 'Neun', meaning: 'Nine' }, { term: 'Zehn', meaning: 'Ten' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "eins"?', options: ['One', 'Two', 'Three', 'Four'], answer: 'One' },
        { id: 'q2', prompt: 'What is "drei"?', options: ['Two', 'Three', 'Five', 'Six'], answer: 'Three' },
        { id: 'q3', prompt: 'What is the German word for "five"?', options: ['Vier', 'Fünf', 'Sieben', 'Acht'], answer: 'Fünf' },
        { id: 'q4', prompt: 'What is "zehn"?', options: ['Eight', 'Nine', 'Ten', 'Sieben'], answer: 'Ten' },
        { id: 'q5', prompt: 'What is the German word for "seven"?', options: ['Sechs', 'Sieben', 'Acht', 'Neun'], answer: 'Sieben' },
        { id: 'q6', prompt: 'What is "zwei"?', options: ['One', 'Two', 'Three', 'Four'], answer: 'Two' }
      ]
    },
    {
      id: 'de-3', title: 'Colors',
      vocab: [
        { term: 'Rot', meaning: 'Red' }, { term: 'Blau', meaning: 'Blue' }, { term: 'Grün', meaning: 'Green' }, { term: 'Gelb', meaning: 'Yellow' }, { term: 'Schwarz', meaning: 'Black' }, { term: 'Weiß', meaning: 'White' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "rot"?', options: ['Blue', 'Red', 'Green', 'Yellow'], answer: 'Red' },
        { id: 'q2', prompt: 'What is the German word for "blue"?', options: ['Blau', 'Grün', 'Gelb', 'Schwarz'], answer: 'Blau' },
        { id: 'q3', prompt: 'What is "grün"?', options: ['White', 'Black', 'Green', 'Pink'], answer: 'Green' },
        { id: 'q4', prompt: 'What is the German word for "black"?', options: ['Weiß', 'Schwarz', 'Grau', 'Rosa'], answer: 'Schwarz' },
        { id: 'q5', prompt: 'What is "gelb"?', options: ['Yellow', 'Orange', 'Purple', 'Brown'], answer: 'Yellow' },
        { id: 'q6', prompt: 'What is the German word for "white"?', options: ['Weiß', 'Schwarz', 'Blau', 'Grün'], answer: 'Weiß' }
      ]
    },
    {
      id: 'de-4', title: 'Family',
      vocab: [
        { term: 'Die Mutter', meaning: 'Mother' }, { term: 'Der Vater', meaning: 'Father' }, { term: 'Der Bruder', meaning: 'Brother' }, { term: 'Die Schwester', meaning: 'Sister' }, { term: 'Die Eltern', meaning: 'Parents' }, { term: 'Der Sohn', meaning: 'Son' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "die Mutter"?', options: ['Father', 'Mother', 'Sister', 'Brother'], answer: 'Mother' },
        { id: 'q2', prompt: 'What is the German word for "father"?', options: ['Der Vater', 'Der Bruder', 'Der Sohn', 'Der Onkel'], answer: 'Der Vater' },
        { id: 'q3', prompt: 'What is "der Bruder"?', options: ['Sister', 'Brother', 'Cousin', 'Uncle'], answer: 'Brother' },
        { id: 'q4', prompt: 'What is the German word for "sister"?', options: ['Die Schwester', 'Die Tante', 'Die Tochter', 'Die Mutter'], answer: 'Die Schwester' },
        { id: 'q5', prompt: 'What is "die Eltern"?', options: ['Grandparents', 'Parents', 'Children', 'Cousins'], answer: 'Parents' },
        { id: 'q6', prompt: 'What is the German word for "son"?', options: ['Der Sohn', 'Die Tochter', 'Der Vater', 'Der Bruder'], answer: 'Der Sohn' }
      ]
    },
    {
      id: 'de-5', title: 'Food',
      vocab: [
        { term: 'Das Brot', meaning: 'Bread' }, { term: 'Das Wasser', meaning: 'Water' }, { term: 'Der Käse', meaning: 'Cheese' }, { term: 'Der Apfel', meaning: 'Apple' }, { term: 'Der Kaffee', meaning: 'Coffee' }, { term: 'Das Fleisch', meaning: 'Meat' }
      ],
      questions: [
        { id: 'q1', prompt: 'What is "das Brot"?', options: ['Bread', 'Cheese', 'Water', 'Milk'], answer: 'Bread' },
        { id: 'q2', prompt: 'What is the German word for "water"?', options: ['Das Wasser', 'Die Milch', 'Der Wein', 'Der Kaffee'], answer: 'Das Wasser' },
        { id: 'q3', prompt: 'What is "der Käse"?', options: ['Butter', 'Cheese', 'Egg', 'Meat'], answer: 'Cheese' },
        { id: 'q4', prompt: 'What is the German word for "apple"?', options: ['Der Apfel', 'Die Banane', 'Die Erdbeere', 'Die Birne'], answer: 'Der Apfel' },
        { id: 'q5', prompt: 'What is "der Kaffee"?', options: ['Tea', 'Coffee', 'Juice', 'Soup'], answer: 'Coffee' },
        { id: 'q6', prompt: 'What is the German word for "meat"?', options: ['Das Fleisch', 'Der Fisch', 'Der Reis', 'Die Suppe'], answer: 'Das Fleisch' }
      ]
    },
    {
      id: 'de-6', title: 'Everyday Phrases',
      vocab: [
        { term: 'Wie geht\'s?', meaning: 'How are you?' }, { term: 'Ich heiße...', meaning: 'My name is...' }, { term: 'Ich verstehe nicht', meaning: 'I don\'t understand' }, { term: 'Entschuldigung', meaning: 'Excuse me' }, { term: 'Wo ist...?', meaning: 'Where is...?' }, { term: 'Gern geschehen', meaning: 'You\'re welcome' }
      ],
      questions: [
        { id: 'q1', prompt: 'What does "Wie geht\'s?" mean?', options: ['What\'s your name?', 'How are you?', 'Where are you?', 'What time is it?'], answer: 'How are you?' },
        { id: 'q2', prompt: 'How do you say "My name is..."?', options: ['Ich heiße...', 'Ich wohne...', 'Ich komme aus...', 'Ich habe...'], answer: 'Ich heiße...' },
        { id: 'q3', prompt: 'What does "Ich verstehe nicht" mean?', options: ['I understand', 'I don\'t know', 'I don\'t understand', 'I am lost'], answer: 'I don\'t understand' },
        { id: 'q4', prompt: 'How do you say "Excuse me"?', options: ['Entschuldigung', 'Gern geschehen', 'Vorsicht', 'Achtung'], answer: 'Entschuldigung' },
        { id: 'q5', prompt: 'What does "Wo ist..." mean?', options: ['What is...', 'Where is...', 'Who is...', 'When is...'], answer: 'Where is...' },
        { id: 'q6', prompt: 'How do you say "You\'re welcome"?', options: ['Gern geschehen', 'Willkommen', 'Natürlich', 'Alles klar'], answer: 'Gern geschehen' }
      ]
    }
  ]
};
