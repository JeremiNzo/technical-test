import { useEffect, useState, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './store/booksSlice';
import { fetchAuthors } from './store/authorsSlice';
import { type RootState, type AppDispatch } from './store';
import { BookCard } from './components/BookCard/BookCard';

export function App() {
    const [search, setSearch] = useState('');
    
    const dispatch = useDispatch<AppDispatch>();
    const { books } = useSelector((state: RootState) => state.books);
    const { authors } = useSelector((state: RootState) => state.authors);


    useEffect(() => {
        dispatch(fetchBooks());
        dispatch(fetchAuthors());
    }, [dispatch]);

    const authorsMap = useMemo(() => {
        return authors.reduce((map, author) => {
            map[author.id] = author.nombres;
            return map;
        }, {} as Record<number, string>);
    }, [authors]);

    const filteredBooks = useMemo(() => {
      if (!search.trim()) return books;
      const term = search.trim().toLowerCase();
      return books.filter(book => {
        const autorNombre = authorsMap[book.authorId]?.toLowerCase() || '';
        return (
          book.title.toLowerCase().includes(term) ||
          autorNombre.includes(term)
        );
      });
    }, [books, authorsMap, search]);

    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Best sellers all times</h1>
            <input
              style={styles.searchInput}
              type="search"
              placeholder="write something to search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Buscar por título o autor"
            />
          </div>

          <div style={styles.list}>
            {filteredBooks.map(book => (
              <BookCard 
                key={book.id}
                titulo={book.title}
                descripcion={book.description}
                autorNombre={authorsMap[book.authorId] || 'Autor desconocido'}
                autorId={book.authorId}
              />
            ))}

            {filteredBooks.length === 0 && (
              <div style={styles.noResults}>
                <p>No se encontraron libros.</p>
              </div>
            )}
            
          </div>
        </div>
      </div>
    );    
};
  
    


const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#e8e8e8',
    textAlign: 'left',
    padding: '24px 16px 48px',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: 900,
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 28,
  },
  title: {
    margin: 0,
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 700,
    color: '#c41e3a',
    letterSpacing: '-0.02em',
  },
  searchInput: {
    minWidth: 260,
    maxWidth: '100%',
    padding: '10px 14px',
    borderRadius: 8,
    border: '1px solid #ccc',
    fontSize: 14,
    backgroundColor: '#fff',
    outline: 'none',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  noResults: {
    padding: 24,
    textAlign: 'center',
    color: '#666',
  },
};

export default App;