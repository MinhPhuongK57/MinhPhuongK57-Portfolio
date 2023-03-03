import React, { useRef } from 'react';

import { EMAIL } from 'constants/email';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';

function Contact() {
    const refForm = useRef();
    const { enqueueSnackbar } = useSnackbar();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(EMAIL.serviceId, EMAIL.templateId, refForm.current, EMAIL.publicKey).then(
            () => {
                enqueueSnackbar('Message successfully sent!', {
                    variant: 'success',
                    autoHideDuration: 5000,
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'top',
                    },
                });

                window.location.reload(false);
            },
            () => {
                enqueueSnackbar('Failed to send message!', {
                    variant: 'error',
                    autoHideDuration: 5000,
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'top',
                    },
                });
            }
        );
    };
    return (
        <div className='contact' id='contact'>
            <div className='contact__title'>Contact Me</div>
            <form className='contact__form' ref={refForm} onSubmit={sendEmail}>
                <div className='contact__form--groupInput'>
                    <div className='contact__form--border'>
                        <input
                            type='text'
                            name='name'
                            placeholder=' '
                            className='contact__form--input contact__form--inputName'
                            autoComplete='off'
                        />
                        <label className='contact__form--label contact__form--labelName'>Name</label>
                    </div>
                    <div className='contact__form--border'>
                        <input
                            type='email'
                            name='email'
                            required
                            placeholder=' '
                            className='contact__form--input contact__form--inputEmail'
                            autoComplete='off'
                        />
                        <label className='contact__form--label contact__form--labelEmail'>Email</label>
                    </div>
                    <div className='contact__form--border'>
                        <input
                            type='text'
                            name='subject'
                            placeholder=' '
                            className='contact__form--input contact__form--inputSubject'
                            autoComplete='off'
                        />
                        <label className='contact__form--label contact__form--labelSubject'>Subject</label>
                    </div>
                </div>
                <div className='contact__form--border contact__form--borderTextArea'>
                    <textarea
                        className='contact__form--textarea contact__form--inputMessage'
                        name='message'
                        required
                        type='text'
                        placeholder=' '
                    />
                    <label className='contact__form--label contact__form--labelMessage'>Type a massage</label>
                    <input type='submit' className='contact__form--btn' value='SEND' />
                </div>
            </form>
        </div>
    );
}
export default Contact;
