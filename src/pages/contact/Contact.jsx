import { BiLogoFacebookCircle } from 'react-icons/bi';
import { PiWhatsappLogoLight } from 'react-icons/pi';
import { SlSocialBehance, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import Input from '../../components/Input';

function Contact() {
  const links = [
    {
      link: '',
      icon: <SlSocialLinkedin size={20} />,
      title: 'LinkedIn',
    },
    { link: '', icon: <SlSocialBehance size={20} />, title: 'Behance' },
    { link: '', icon: <PiWhatsappLogoLight size={20} />, title: 'WhatsApp' },
    { link: '', icon: <SlSocialInstagram size={20} />, title: 'Instagram' },
    { link: '', icon: <BiLogoFacebookCircle size={20} />, title: 'Facebook' },
  ];
  return (
    <section className="px-[150px]">
      <section className="max-w-[1440px] mx-auto">
        <div className="mt-6 flex flex-col gap-6">
          <div className="bg-white shadow border rounded-2xl py-5 w-full flex flex-col gap-3 items-center">
            <h1 className="text-4xl text-secondary font-semibold text-center">
              Have an Awsome Project Idea? <br />
              <span className="text-primary">Let’s Discuss</span>
            </h1>
            <Input />
          </div>
          <div className="bg-white border rounded-2xl shadow p-7 flex flex-col gap-4">
            <p className="text-secondary text-4xl">Elsewhere</p>
            <div className="flex items-center justify-between">
              {links.map((item, index) => (
                <a
                  href={item.link}
                  className="text-dark-text border border-[#BBBCBF] px-5 py-1.5 rounded-4xl"
                  key={index}
                >
                  <div className="flex items-center gap-2">
                    <p className="bg-black rounded-full text-white flex items-center justify-center w-7 h-7">
                      {item.icon}
                    </p>
                    <p className="underline text-dark-text">{item.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
