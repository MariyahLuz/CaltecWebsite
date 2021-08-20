import React from "react"
import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';

export default function Form() {
    const messa = "Thanks for contacting us, We shall get back to you very soon."
    const [notification, setNotification] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [message, setMessage] = React.useState("");

    const show_message = () => {
        setNotification(true)
        clearState()
    }

    const clearState = () => {
        setEmail("")
        setName("")
        setMessage("")
      }
    return (
        <div className="flex flex-wrap justify-center mt-24 " style={{ 'background-color' : '#0b033a'}} >
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="lightBlue">Want to consult with us?</H3>
                            <Paragraph color="lightBlue">
                                Complete this form and we will get back to you
                                in 24 hours.
                            </Paragraph>
                        </div>
                        <div>
                            <div className="flex gap-8 mt-16 mb-12 ">
                                <Input
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    color="lightBlue"
                                />
                                <Input
                                    type="email"
                                    value={email}
                                    placeholder="Email Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    color="lightBlue"
                                />
                            </div>

                            <Textarea color="lightBlue" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />

                            <div className="flex justify-center mt-10 mb-10">
                                <Button color="lightBlue" onClick={show_message} tripple="light">
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    {
                        notification === true ? 
                        (
                            <div className="w-full text-center">
                                <Paragraph >
                                    <span style={{ 
                                            fontWeight: '500',
                                            fontSize: '22px',
                                            lineHeight: '58px',
                                            color: '#23286B',
                                        }}>{messa}</span>
                                </Paragraph>
                            </div>) : (null)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}
