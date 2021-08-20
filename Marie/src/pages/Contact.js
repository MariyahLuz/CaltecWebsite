import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/contact/Header';
// import Content from 'components/about/Content';
import Contentcontact from 'components/about/Contentcontact';
import ContactSection from 'components/landing/ContactSection';
     
export default function Contact() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Contentcontact />
                <ContactSection />
            </main>
            <DefaultFooter />
        </>
    );
}
