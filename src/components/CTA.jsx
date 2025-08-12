import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: '',
    name: '',
    message: '',
  });

  const form = useRef(null);

  const validateForm = () => {
    const errors = { email: '', name: '', message: '' };
    let isValid = true;

    if (!form.current?.user_email.value) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!form.current?.user_name.value) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!form.current?.user_message.value) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (form.current === null) return;

    const email = form.current.user_email.value;
    const name = form.current.user_name.value;
    const text = form.current.user_message.value;

    setLoading(true);

    emailjs
      .sendForm(
        'service_qz4ugws', // Your email service ID
        'template_mi83gfy', // Your email template ID
        form.current, // The form reference
        'user_HuKpwTBqfsVm40phvlXmn' // Your user ID
      )
      .then(
        (_) => {
          form.current?.reset();
          setSubmitted(true);
          setLoading(false);
        },
        (error) => {
          window.alert(
            `Sorry, an error occurred. Please try again later. Error Message: ${error.message}`
          );
          setLoading(false);
          setSubmitError(true);
        }
      );
  };

  return (
    <section id='contact' className='mx-auto max-w-3xl px-4 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-2xl font-bold tracking-wide text-gold-300'
      >
        Free 48‑hour audit
      </motion.h2>
      <p className='mt-3 text-white/80'>
        Send a URL or quick brief. We’ll reply within 48 hours.
      </p>
      <motion.form
        onSubmit={formSubmissionHandler}
        ref={form}
        className='mt-6 grid gap-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <label className='grid gap-2'>
          <span className='text-sm text-gold-300'>Email</span>
          <input
            name='user_email'
            type='email'
            required
            placeholder='you@company.com'
            className='px-4 py-3 rounded-xl bg-[#111215] border border-gold-400/40 focus:border-gold-400'
          />
          {formErrors.email && (
            <span className='text-red-500 text-xs'>{formErrors.email}</span>
          )}
        </label>
        <label className='grid gap-2'>
          <span className='text-sm text-gold-300'>Name</span>
          <input
            name='user_name'
            type='text'
            required
            placeholder='Your Name'
            className='px-4 py-3 rounded-xl bg-[#111215] border border-gold-400/40 focus:border-gold-400'
          />
          {formErrors.name && (
            <span className='text-red-500 text-xs'>{formErrors.name}</span>
          )}
        </label>
        <label className='grid gap-2'>
          <span className='text-sm text-gold-300'>Message</span>
          <textarea
            name='user_message'
            required
            placeholder='Your message here...'
            className='px-4 py-3 rounded-xl bg-[#111215] border border-gold-400/40 focus:border-gold-400'
          />
          {formErrors.message && (
            <span className='text-red-500 text-xs'>{formErrors.message}</span>
          )}
        </label>
        <button
          type='submit'
          className='px-5 py-3 rounded-xl text-black bg-gold-400 border border-gold-400 hover:shadow-gold font-semibold'
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Request audit'}
        </button>
        {submitted && !submitError && (
          <p role='status' className='text-green-400'>
            Thanks! We’ll be in touch.
          </p>
        )}
        {submitError && (
          <p role='status' className='text-red-400'>
            There was an error submitting the form. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}
