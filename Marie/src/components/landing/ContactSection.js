// import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="stars" title="Excelent Services">
                        At Caltec we provide good, first class education services
                    </ContactCard>
                    <ContactCard icon="insert_chart" title="School curriculum">
                        Our O´Level subjects and A'level Arts and Sciences
                    </ContactCard>
                    <ContactCard icon="launch" title="Admissions">
                        We are admitting Forms ones and Form fives This new academic year
                    </ContactCard>
                </div>

                <Form />
            </div>
        </section>
    );
}
