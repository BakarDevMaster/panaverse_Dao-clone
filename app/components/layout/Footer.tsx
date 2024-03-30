
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-10 text-center text-white">
      <div className="container mx-auto">
        <h1 className="mb-3 text-xl font-bold">Panaverse DAO</h1>
        <p className="mb-3">© {new Date().getFullYear()} Panaverse DAO. All rights reserved.</p>
        <nav>
          <a href="#" className="text-blue-400 hover:text-blue-300 mr-4">Home</a>
          <a href="#" className="text-blue-400 hover:text-blue-300 mr-4">About</a>
          <a href="#" className="text-blue-400 hover:text-blue-300 mr-4">Services</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
