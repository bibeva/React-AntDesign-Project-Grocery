import 'antd/dist/antd.min.css';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import AppHeader from './components/common/header';
import FooterWidget from './components/common/footerWidget';
import FooterCopyright from './components/common/footerCopyright';
import AppHome from './pages/home';
import AppAbout from './pages/about';
import AppShop from './pages/shop';
import AppFAQ from './pages/faq';
import AppContact from './pages/contact';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Routes>
            {/* <Route path='/' element={<AppHome />} />
            <Route path='/about' element={<AppAbout />} />
            <Route path='/shop' element={<AppShop />} />
            <Route path='/faq' element={<AppFAQ />} />
            <Route path='/contact' element={<AppContact />} /> */}
            <Route path='/demo/react/antdesign/grocery/' element={<AppHome />} />
            <Route path='/demo/react/antdesign/grocery/about' element={<AppAbout />} />
            <Route path='/demo/react/antdesign/grocery/shop' element={<AppShop />} />
            <Route path='/demo/react/antdesign/grocery/faq' element={<AppFAQ />} />
            <Route path='/demo/react/antdesign/grocery/contact' element={<AppContact />} />
          </Routes>
        </Content>
      </Router>
      <Footer>
        <FooterWidget />
        <FooterCopyright />
      </Footer>
    </Layout>
  );
}

export default App;