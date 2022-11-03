import GoBackButton from '../components/GoBackButton';
import Authors from '../components/Authors'

export default function AuthorsPage() {
  return (
    <main className="Authors" style={{ padding: '1rem' }}>
      <h1>Authors</h1>
      <Authors />
      <GoBackButton />
    </main>
  );
}
