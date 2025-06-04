import Page from "./components/sections/page";
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Main from "./components/sections/Main";
import WelcomeBonus from "./components/sections/WelcomeBonus";
import Games from "./components/sections/Games/Games";
import Footer from "./components/sections/Footer";
import Modal from "./components/sections/Modal/Modal";
import SignUpModal from "./components/sections/Modal/SignUpModal";
import { ModalContextProvider } from "./contexts/ModalContext";
import MobileMenu from "./components/sections/MobileMenu/MobileMenu";
import { MobileMenuContextProvider } from "./contexts/MobileMenuContext";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <MobileMenuContextProvider>
      <ModalContextProvider>
        <Page>
          <Header>
            <Navigation />
            <Hero />
          </Header>
          <Main>
            <WelcomeBonus />
            <Games />
            <Footer />
          </Main>
          <Modal modal="sign-up">
            <SignUpModal />
          </Modal>

          <MobileMenu />
          <Toaster
            position="bottom-right"
            toastOptions={{
            success: {
              style: {
                background: '#00c851',
                color: 'white',
              },
            },
            error: {
              style: {
                background: '#ff4444',
                color: 'white',
              },
            },
          }}
          />
        </Page>
      </ModalContextProvider>
    </MobileMenuContextProvider>
  )
}

export default App;
