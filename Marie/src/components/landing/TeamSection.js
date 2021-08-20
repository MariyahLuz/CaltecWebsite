import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/team-4-470x470.png';
import Image5 from 'assets/img/img2.jpg';
import Image6 from 'assets/img/img9.jpg';
import Image7 from 'assets/img/calogo2.png';
import Image8 from 'assets/img/ca3.png';



export default function TeamSection() {
    
    return (
        <section className="pt-20 pb-48" style={{ 'background-color' : '#0b033a'}}  >
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Our Caltec Culture">
                   Caltec Academy is a school for high qaulity education and talent such 
                   as music, drama, and sports(indoor and outdoor games). 
                   This school is a mixed day and boarding secondary school 
                   for O' and A' level students.
                </Title>
                <div className="flex flex-wrap">

                   <TeamCard
                        img={Image1}
                        name="Academics"
                        position="Students having a class."
                    />   
                    <TeamCard
                        img={Image2}
                        name="Music"
                        position="We let our students improve their talents in music and drama club."
                    />
                    <TeamCard
                        img={Image3}
                        name="Sports"
                        position="Our students engage in sports (indoor & outdoor) to greater competitions."
                    />
                    <TeamCard
                        img={Image4}
                        name="Caltec Scouts"
                        position="Students in the scouts club near their camp area."
                    />
                    <TeamCard
                        img={Image5}
                        name="Our Miss Caltec"
                        position="Student competing in the miss caltec awards ."
                    />
                    <TeamCard
                        img={Image6}
                        name="Students Discussing"
                        position="We encourage our students to engage in discussions on top of class lessons."
                    />
                    <TeamCard
                        img={Image7}
                        name="Caltec Cultural Gala"
                        position="Students acting on the cultural gala."
                    />
                    <TeamCard
                        img={Image8}
                        name="Our Shool Band"
                        position="Our students in the school band smartly dressed in the band uniform."
                    />

                    
                </div>
            </div>
        </section>
    );
}
