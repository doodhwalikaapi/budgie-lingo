// data/courses/fr.js — French course: 6 lessons, ~6 questions each
module.exports = {
  code: 'fr',
  name: 'French',
  lessons: [
    {
      id: 'fr-1', title: 'Greetings',
      questions: [
        { id: 'q1', prompt: 'How do you say "Hello" in French?', options: ['Bonjour', 'Merci', 'Au revoir', 'Pardon'], answer: 'Bonjour' },
        { id: 'q2', prompt: 'How do you say "Goodbye" in French?', options: ['Bonsoir', 'Au revoir', 'S\'il vous plaît', 'Oui'], answer: 'Au revoir' },
        { id: 'q3', prompt: 'What does "Merci" mean?', options: ['Please', 'Sorry', 'Thank you', 'Yes'], answer: 'Thank you' },
        { id: 'q4', prompt: 'How do you say "Good evening"?', options: ['Bonjour', 'Bonsoir', 'Bonne nuit', 'Salut'], answer: 'Bonsoir' },
        { id: 'q5', prompt: 'What does "S\'il vous plaît" mean?', options: ['Please', 'Excuse me', 'Thank you', 'Goodbye'], answer: 'Please' },
        { id: 'q6', prompt: 'How do you say "Hi" casually?', options: ['Salut', 'Adieu', 'Merci', 'Non'], answer: 'Salut' }
      ]
    },
    {
      id: 'fr-2', title: 'Numbers 1-10',
      questions: [
        { id: 'q1', prompt: 'What is "un"?', options: ['One', 'Two', 'Three', 'Four'], answer: 'One' },
        { id: 'q2', prompt: 'What is "trois"?', options: ['Two', 'Three', 'Five', 'Six'], answer: 'Three' },
        { id: 'q3', prompt: 'What is the French word for "five"?', options: ['Quatre', 'Cinq', 'Sept', 'Huit'], answer: 'Cinq' },
        { id: 'q4', prompt: 'What is "dix"?', options: ['Eight', 'Nine', 'Ten', 'Seven'], answer: 'Ten' },
        { id: 'q5', prompt: 'What is the French word for "seven"?', options: ['Six', 'Sept', 'Huit', 'Neuf'], answer: 'Sept' },
        { id: 'q6', prompt: 'What is "deux"?', options: ['One', 'Two', 'Three', 'Four'], answer: 'Two' }
      ]
    },
    {
      id: 'fr-3', title: 'Colors',
      questions: [
        { id: 'q1', prompt: 'What is "rouge"?', options: ['Blue', 'Red', 'Green', 'Yellow'], answer: 'Red' },
        { id: 'q2', prompt: 'What is the French word for "blue"?', options: ['Bleu', 'Vert', 'Jaune', 'Noir'], answer: 'Bleu' },
        { id: 'q3', prompt: 'What is "vert"?', options: ['White', 'Black', 'Green', 'Pink'], answer: 'Green' },
        { id: 'q4', prompt: 'What is the French word for "black"?', options: ['Blanc', 'Noir', 'Gris', 'Rose'], answer: 'Noir' },
        { id: 'q5', prompt: 'What is "jaune"?', options: ['Yellow', 'Orange', 'Purple', 'Brown'], answer: 'Yellow' },
        { id: 'q6', prompt: 'What is the French word for "white"?', options: ['Blanc', 'Noir', 'Bleu', 'Vert'], answer: 'Blanc' }
      ]
    },
    {
      id: 'fr-4', title: 'Family',
      questions: [
        { id: 'q1', prompt: 'What is "la mère"?', options: ['Father', 'Mother', 'Sister', 'Brother'], answer: 'Mother' },
        { id: 'q2', prompt: 'What is the French word for "father"?', options: ['Le père', 'Le frère', 'Le fils', 'L\'oncle'], answer: 'Le père' },
        { id: 'q3', prompt: 'What is "le frère"?', options: ['Sister', 'Brother', 'Cousin', 'Uncle'], answer: 'Brother' },
        { id: 'q4', prompt: 'What is the French word for "sister"?', options: ['La sœur', 'La tante', 'La fille', 'La mère'], answer: 'La sœur' },
        { id: 'q5', prompt: 'What is "les parents"?', options: ['Grandparents', 'Parents', 'Children', 'Cousins'], answer: 'Parents' },
        { id: 'q6', prompt: 'What is the French word for "son"?', options: ['Le fils', 'La fille', 'Le père', 'Le frère'], answer: 'Le fils' }
      ]
    },
    {
      id: 'fr-5', title: 'Food',
      questions: [
        { id: 'q1', prompt: 'What is "le pain"?', options: ['Bread', 'Cheese', 'Water', 'Milk'], answer: 'Bread' },
        { id: 'q2', prompt: 'What is the French word for "water"?', options: ['L\'eau', 'Le lait', 'Le vin', 'Le café'], answer: 'L\'eau' },
        { id: 'q3', prompt: 'What is "le fromage"?', options: ['Butter', 'Cheese', 'Egg', 'Meat'], answer: 'Cheese' },
        { id: 'q4', prompt: 'What is the French word for "apple"?', options: ['La pomme', 'La banane', 'La fraise', 'La poire'], answer: 'La pomme' },
        { id: 'q5', prompt: 'What is "le café"?', options: ['Tea', 'Coffee', 'Juice', 'Soup'], answer: 'Coffee' },
        { id: 'q6', prompt: 'What is the French word for "meat"?', options: ['La viande', 'Le poisson', 'Le riz', 'La soupe'], answer: 'La viande' }
      ]
    },
    {
      id: 'fr-6', title: 'Everyday Phrases',
      questions: [
        { id: 'q1', prompt: 'What does "Comment ça va?" mean?', options: ['What\'s your name?', 'How are you?', 'Where are you?', 'What time is it?'], answer: 'How are you?' },
        { id: 'q2', prompt: 'How do you say "My name is..."?', options: ['Je m\'appelle...', 'J\'habite...', 'Je suis de...', 'J\'ai...'], answer: 'Je m\'appelle...' },
        { id: 'q3', prompt: 'What does "Je ne comprends pas" mean?', options: ['I understand', 'I don\'t know', 'I don\'t understand', 'I am lost'], answer: 'I don\'t understand' },
        { id: 'q4', prompt: 'How do you say "Excuse me"?', options: ['Excusez-moi', 'De rien', 'Pardon moi', 'Attention'], answer: 'Excusez-moi' },
        { id: 'q5', prompt: 'What does "Où est..." mean?', options: ['What is...', 'Where is...', 'Who is...', 'When is...'], answer: 'Where is...' },
        { id: 'q6', prompt: 'How do you say "You\'re welcome"?', options: ['De rien', 'Bienvenue', 'Bien sûr', 'Ça va'], answer: 'De rien' }
      ]
    }
  ]
};
