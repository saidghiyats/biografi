import Nav from '../components/Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="overflow-hidden">{children}</div>
    </>
  );
}
