import Books from '../components/Books';
import GoBackButton from '../components/GoBackButton';

export default function BooksPage() {
  return (
    <main className="Books" style={{ padding: '1rem' }}>
      <h1>Books</h1>
      <Books />
      <GoBackButton />
    </main>
  );
}