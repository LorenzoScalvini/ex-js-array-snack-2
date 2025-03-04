const books = [
  {
    title: 'React Billionaire',
    pages: 250,
    author: {
      name: 'Alice',
      age: 35,
    },
    available: false,
    price: '101€',
    tags: ['advanced', 'js', 'react', 'senior'],
  },
  {
    title: 'Advanced JS',
    pages: 500,
    author: {
      name: 'Bob',
      age: 20,
    },
    available: true,
    price: '25€',
    tags: ['advanced', 'js', 'mid-senior'],
  },
  {
    title: 'CSS Secrets',
    pages: 320,
    author: {
      name: 'Alice',
      age: 17,
    },
    available: true,
    price: '8€',
    tags: ['html', 'css', 'junior'],
  },
  {
    title: 'HTML Mastery',
    pages: 200,
    author: {
      name: 'Charlie',
      age: 50,
    },
    available: false,
    price: '48€',
    tags: ['html', 'advanced', 'junior', 'mid-senior'],
  },
];

//ES 3
const authors = books.map((book) => book.author);

const areAuthorsAdults = authors.every((author) => author.age >= 18);

if (areAuthorsAdults) {
  authors.sort((a, b) => a.age - b.age);
} else {
  authors.sort((a, b) => b.age - a.age);
}

const ages = authors.map((author) => author.age);

const agesSum = ages.reduce((sum, age) => sum + age, 0);

const averageAge = agesSum / ages.length;

console.log('Authors:', authors);
console.log('Are all authors adults?', areAuthorsAdults);
console.log('Sorted Authors:', authors);
console.log('Ages:', ages);
console.log('Sum of Ages:', agesSum);
console.log('Average Age:', averageAge.toFixed(2));
