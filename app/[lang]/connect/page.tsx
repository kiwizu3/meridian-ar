'use client';

import { Input, Textarea } from '@nextui-org/react';
import './connect.css';
import { useEffect, useState } from 'react';
import { ContactUsProps } from '@/types';
import { useDictionary } from '@/hooks/useDictionary';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgImage from '@/public/images/Clippath.png';
import bottomImage from '@/public/images/connect-bottom.png';
import Image from 'next/image';
import { credentials } from '@/utility/chatBotEmailUtils';
import SpeechText from '@/components/SpeechText';
import FacebookPageEmbed from '@/components/FacebookPageEmbed';
import { validateEmail, validateName, validatePhone } from './connectUtils';

export default function Contact({
  params: { lang },
  searchParams: { section },
}: Readonly<ContactUsProps>) {
  const dictionary = useDictionary(lang);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [showFacebookPlugin, setShowFacebookPlugin] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      if (
        firstName &&
        lastName &&
        message &&
        contact &&
        email &&
        agreedToPrivacy
      ) {
        const response = await fetch(`${process.env.BASE_URL}/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${credentials}`,
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            sender_email: email,
            contact,
            body: message,
            subject: 'Contact',
          }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        } else {
          const data = await response.json();
          toast.success(data?.message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          setContact('');
          setEmail('');
          setFirstName('');
          setLastName('');
          setMessage('');
        }
      }
    } catch (error) {
      throw new Error('Error sending email');
    }
  };

  useEffect(() => {
    const element = document.getElementById('contact-wrap');

    if (section === 'contact-us' && element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  useEffect(() => {
    setShowFacebookPlugin(true);
  }, []);

  return (
    <div className="relative">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="lg:-mt-[426px] absolute top-0 z-0 left-0 right-0">
        <Image src={bgImage} alt="background-image" className="w-full" />
      </div>
      <div className="connect-page-wrap z-10 relative">
        <div className="connect-page-inner">
          <SpeechText>
            <h1 className="connect-heading">{dictionary?.connect}</h1>
          </SpeechText>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1 connect-news-wrap md:order-1 order-2">
              {/* <div className="connect-news-inner">
                {showFacebookPlugin && (
                  <iframe
                    title="LB Finance PLC Facebook Page"
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FLBFinancePLC&tabs=timeline&width=300&height=1100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="300px"
                    height="1100"
                    style={{
                      border: 'none',
                      overflow: 'auto',
                    }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
              </div> */}
              <div className="w-full max-w-[350px] mx-auto my-10 px-4">
                {showFacebookPlugin && <FacebookPageEmbed />}
              </div>
            </div>

            <div
              className="flex flex-col contact-wrap p-10 md:p-5 md:order-2 order-1 md:col-span-2 lg:col-span-2"
              id="contact-wrap"
            >
              <div className="detail-wrap pr-0 md:pr-0 lg:pr-6 xl:pr-7">
                <SpeechText>
                  <p className="heading my-3">{dictionary?.contact_us}</p>
                </SpeechText>

                <div className="para font-secondary">
                  <SpeechText>
                    <p>{dictionary?.please_contact_us}</p>
                  </SpeechText>
                </div>

                <div className="address-wrap">
                  <div className="address-block">
                    <div className="title font-secondary">
                      <SpeechText>
                        <p>{dictionary?.address}</p>
                      </SpeechText>
                    </div>
                    <div className="text font-secondary">
                      <SpeechText>
                        <p className="whitespace-pre-line">
                          {dictionary?.manager}
                          {'\n'}
                          {dictionary?.lb_finance_plc}
                          {'\n'}
                          {dictionary?.corporate_office}
                          {'\n'}
                          {dictionary?.no_20_dharmapala_mawatha}
                          {'\n'}
                          {dictionary?.colombo_03}
                        </p>
                      </SpeechText>
                    </div>
                  </div>
                  <div className="address-block">
                    <div className="title font-secondary">
                      <SpeechText>
                        <p>{dictionary?.contact_number}</p>
                      </SpeechText>
                    </div>
                    <div className="text font-secondary">
                      <SpeechText>
                        <p>
                          <a href="tel:0112155473" className="hover:underline">
                            011 2155 473
                          </a>
                        </p>
                        <p>
                          <a href="tel:0112155504" className="hover:underline">
                            011 2155 504
                          </a>
                        </p>
                      </SpeechText>
                    </div>
                  </div>
                  <div className="address-block">
                    <div className="title font-secondary">
                      <SpeechText>
                        <p>{dictionary?.email}</p>
                      </SpeechText>
                    </div>
                    <div className="text font-secondary">
                      <SpeechText>
                        <a
                          href="mailto:thusithaw@lbfinance.lk"
                          className="hover:underline"
                        >
                          thusithaw@lbfinance.lk
                        </a>
                      </SpeechText>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-wrap">
                <form>
                  <div className="form-inner">
                    <div className="heading mb-6">
                      <SpeechText>
                        <p>{dictionary?.send_us_a_message}</p>
                      </SpeechText>
                    </div>
                    <div className="mb-6">
                      <Input
                        type="text"
                        className="contact-input font-secondary"
                        classNames={{
                          label: [
                            'group-data-[filled-within=true]:text-white',
                            'group-data-[focus=true]:text-blue',
                          ],
                          input: [
                            'group-data-[filled-within=true]:!text-white',
                            'group-data-[focus=true]:!text-blue',
                          ],
                        }}
                        label={dictionary?.first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        isRequired
                        isInvalid={validateName(firstName)}
                        errorMessage="Please enter a valid name"
                      />
                    </div>
                    <div className="mb-6">
                      <Input
                        type="text"
                        className="contact-input font-secondary"
                        label={dictionary?.last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        isRequired
                        isInvalid={validateName(lastName)}
                        errorMessage="Please enter a valid name"
                        classNames={{
                          label: [
                            'group-data-[filled-within=true]:text-white',
                            'group-data-[focus=true]:text-blue',
                          ],
                          input: [
                            'group-data-[filled-within=true]:!text-white',
                            'group-data-[focus=true]:!text-blue',
                          ],
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <Input
                        type="email"
                        className="contact-input font-secondary"
                        label={dictionary?.email}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        isRequired
                        isInvalid={validateEmail(email)}
                        errorMessage="Please enter a valid email"
                        classNames={{
                          label: [
                            'group-data-[filled-within=true]:text-white',
                            'group-data-[focus=true]:text-blue',
                          ],
                          input: [
                            'group-data-[filled-within=true]:!text-white',
                            'group-data-[focus=true]:!text-blue',
                          ],
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <Input
                        type="number"
                        className="contact-input font-secondary"
                        label={dictionary?.contact}
                        onChange={(e) => setContact(e.target.value)}
                        value={contact}
                        isRequired
                        isInvalid={validatePhone(contact)}
                        errorMessage="Please enter a valid phone number"
                        classNames={{
                          label: [
                            'group-data-[filled-within=true]:text-white',
                            'group-data-[focus=true]:text-blue',
                          ],
                          input: [
                            'group-data-[filled-within=true]:!text-white',
                            'group-data-[focus=true]:!text-blue',
                          ],
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <Textarea
                        className="contact-input font-secondary"
                        label={dictionary?.message}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        isRequired
                        classNames={{
                          label: [
                            'group-data-[filled-within=true]:text-white',
                            'group-data-[focus=true]:text-blue',
                          ],
                          input: [
                            'group-data-[filled-within=true]:!text-white',
                            'group-data-[focus=true]:!text-blue',
                          ],
                        }}
                      />
                    </div>
                    <div className="mb-6 flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="privacy-checkbox"
                        checked={agreedToPrivacy}
                        onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                        className="w-4 h-4"
                      />
                      <label
                        htmlFor="privacy-checkbox"
                        className="text-sm font-secondary text-white"
                      >
                        I have read and agree to the{' '}
                        <a
                          href={`/${lang}/privacy-policy`}
                          className="text-blue-400 hover:underline"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    <button
                      type="button"
                      className="submit-btn font-secondary"
                      onClick={() => handleSubmit()}
                      disabled={!agreedToPrivacy}
                    >
                      {dictionary?.submit}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-0 left-0 right-0 max-h-[30%] overflow-hidden">
        <Image
          src={bottomImage}
          alt="bottom-image"
          className="w-full opacity-[0.1] object-cover"
        />
      </div>
    </div>
  );
}
