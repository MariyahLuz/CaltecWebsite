import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';
// bg-gray-100
export default function WorkingSection() {
    return (
        <section className="pb-20  -mt-32" style={{ 'background-color' : '#E5E4E2'}} >
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="red" icon="stars" title="Our mission">
                        To educate the youth and enable them to grow and develop in the 
                        catholic faith, responsible leadership and responsive service to society
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Our vision"
                    >
                        To be a semi urban co-educational senior secondary school of 
                        academic excellence, offering catholic education and instilling 
                        Christian and civic values.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Aim"
                    >
                        The school's aim is to help students grow and develop into mature Christian 
                        leaders and citizens of upright and dependable character, fully responsible 
                        to God, to society and to themselves, with a readiness to serve
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Caltec Academy Environment</H4>
                        <LeadText color="blueGray">
                            Our positive school atmosphere encourages student 
                            attendance, a factor that helps cure many school woes.
                            It also helps reduce stress in teachers and students and boosts 
                            a more positive mindset in everyone involved. 
                        </LeadText>
                        <LeadText color="blueGray">
                            Some studies even suggest that school climate 
                            is a key factor in student achievement and teacher 
                            retention
                        </LeadText>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Read More
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center cover mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Our good school infrastructure</H6>
                                <Paragraph color="blueGray">
                                    The impact of educational spaces on the students set out 
                                    to identify empirical well-being of students in schools. 
                                    It makes it interesting and gets the children motivated to
                                    come to school, this in turn improve the attendance and 
                                    interest of students in learning.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
