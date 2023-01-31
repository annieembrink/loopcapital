
import { useState } from 'react';
import ContactFormComponent from '@/components/ContactFormComponent';
import InvestorFormComponent from '@/components/InvestorFormComponent';
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";

const Contact = () => {

    const [showForm, setShowForm] = useState(false);
    // const formData = {'your-name': name, 'your-email': email, 'your-subject': subject, 'your-message': message}


    return (
        <DefaultLayoutComponent>
            <h1>Contact</h1>

            {showForm ?
                <ContactFormComponent setShowForm={setShowForm} />
                :
                <div>
                    <div className='hello'>
                        <h1>Hello</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus ab iusto reiciendis maxime ipsam sint magni alias ut sapiente. Corporis, cum. Fuga mollitia voluptatum officiis harum, minus sequi! Architecto.</p>
                        <button onClick={() => setShowForm(true)}>Let&apos;s get in touch!</button>
                    </div>
                    <div className='hello'>
                        <h1>Hello</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus ab iusto reiciendis maxime ipsam sint magni alias ut sapiente. Corporis, cum. Fuga mollitia voluptatum officiis harum, minus sequi! Architecto.</p>
                        <button onClick={() => setShowForm(true)}>Contact us!</button>
                    </div>
                </div>
            }
        </DefaultLayoutComponent>
    );
}


export default Contact; 