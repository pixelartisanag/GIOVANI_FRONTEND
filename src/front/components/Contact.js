import React, { useState } from 'react';
import axios from 'lib/axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            subject,
            message
        };
        try {
            const response = await axios.post('/api/contact', data);
            setSuccessMsg(response.data.message);
            setErrorMsg('');
        } catch (error) {
            setErrorMsg(error.response.data.errors.message);
            setSuccessMsg('');
        }
    };

    return (
        <section className="mt-90">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="contact">
                            {successMsg && (
                                <div className="alert alert-success contact_msg" role="alert">
                                    {successMsg}
                                </div>
                            )}
                            {errorMsg && (
                                <div className="alert alert-danger contact_msg" role="alert">
                                    {errorMsg}
                                </div>
                            )}

                            <form className="widget-form contact_form " onSubmit={handleSubmit}>
                                <h5>Feel free to contact any time.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repudiandae.</p>
                                <div className="alert alert-success contact_msg" style={{ display: 'none' }} role="alert">
                                    Your message was sent successfully.
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder="Your Name*"
                                        required="required"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Your Email*"
                                        required="required"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        className="form-control"
                                        placeholder="Your Subject*"
                                        required="required"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                  <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={5}
                      className="form-control"
                      placeholder="Your Message*"
                      required="required"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                  />
                                </div>
                                <button type="submit" name="submit" className="btn-custom">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
