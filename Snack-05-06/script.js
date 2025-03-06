// Array di libri fornito
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
// ES 05 06
const areThereAvailableBooks = books.some((book) => book.available);
console.log('Ci sono libri disponibili:', areThereAvailableBooks);

const booksByPrice = [...books].sort((a, b) => {
  const priceA = parseFloat(a.price.replace('€', ''));
  const priceB = parseFloat(b.price.replace('€', ''));
  return priceA - priceB;
});

console.log('Libri ordinati per prezzo (crescente):');
booksByPrice.forEach((book) => {
  console.log(`${book.title} - ${book.price}`);
});

booksByPrice.sort((a, b) => {
  if (a.available === b.available) return 0;
  if (a.available && !b.available) return -1;
  return 1;
});

console.log(
  '\nLibri ordinati per disponibilità (disponibili prima) e poi prezzo:'
);
booksByPrice.forEach((book) => {
  console.log(
    `${book.title} - Disponibile: ${book.available ? 'Sì' : 'No'} - ${
      book.price
    }`
  );
});

async function getBooks(ids) {
  try {
    const promises = ids.map((id) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id >= 0 && id < books.length) {
            const book = { ...books[id], id: id };
            resolve(book);
          } else {
            reject(new Error(`Impossibile trovare il libro con ID ${id}`));
          }
        }, 500);
      });
    });

    const risultatiLibri = await Promise.all(promises);
    return risultatiLibri;
  } catch (error) {
    console.error("Aiuto! C'è stato un errore:", error);
    throw error;
  }
}

const idsToTest = [0, 1, 2, 3];

(async () => {
  try {
    console.log("\nSto cercando i libri nell'array...");

    const libriTrovati = await getBooks(idsToTest);

    console.log('Ecco i libri che ho trovato:');
    console.log('-------------------');

    for (let i = 0; i < libriTrovati.length; i++) {
      const libro = libriTrovati[i];
      console.log(`Libro ${i + 1}:`);
      console.log(`ID: ${libro.id}`);
      console.log(`Titolo: ${libro.title}`);
      console.log(`Autore: ${libro.author.name} (${libro.author.age} anni)`);
      console.log(`Pagine: ${libro.pages}`);
      console.log(`Prezzo: ${libro.price}`);
      console.log(`Disponibile: ${libro.available ? 'Sì' : 'No'}`);
      console.log(`Tags: ${libro.tags.join(', ')}`);
      console.log('-------------------');
    }
  } catch (error) {
    console.error('Ops! Qualcosa non ha funzionato:', error);
    console.error('Devo ancora imparare come gestire meglio gli errori...');
  }
})();
