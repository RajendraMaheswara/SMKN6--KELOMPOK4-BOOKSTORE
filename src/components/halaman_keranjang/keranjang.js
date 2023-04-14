import '../../../src/App.css';
import '../../../src/index.css';
import Bar from '../navbar/navbar';



function Halaman_Keranjang() {
  return (
    <div className="bg-bg_cream min-h-screen">
      <Bar/>

      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-8">Keranjang Buku</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-10 py-4">
            <ul className="flex">
                <p className="text-md mr-10 ml-10">Deskripsi</p>
                <p className="text-md mr-10 ml-10">Deskripsi</p>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Halaman_Keranjang;