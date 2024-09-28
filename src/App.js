// bootstrap package
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import MainLayout from './Layouts/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeComp from './Components/HomeComp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BlockCompo from './Components/BlockCompo';

function App() {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Routes>
          <Route path='/home' element={<HomeComp />} />
          <Route path="/" element={<Navigate to="/blog" />} />
          <Route path='/blog' element={<BlockCompo />} />
          <Route path='/*' element={<HomeComp />} />
        </Routes>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
