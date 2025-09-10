import { BiLogoFacebookCircle, BiLogoLinkedin } from 'react-icons/bi';
import { PiWhatsappLogoLight } from 'react-icons/pi';
import { SlSocialBehance, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import Input from '../../components/Input';

function Contact() {
  const links = [
    {
      link: 'https://www.linkedin.com/in/hammas-munir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: <BiLogoLinkedin />,
      title: 'LinkedIn',
    },
    {
      link: 'https://www.behance.net/hammasmunir3',
      icon: <SlSocialBehance size={20} />,
      title: 'Behance',
    },
    { link: '', icon: <PiWhatsappLogoLight size={20} />, title: 'WhatsApp' },
    { link: '', icon: <SlSocialInstagram size={20} />, title: 'Instagram' },
    { link: '', icon: <BiLogoFacebookCircle size={20} />, title: 'Facebook' },
  ];
  return (
    <section className="pt-27 px-5 w-full flex justify-center">
      <div className="flex flex-col gap-6 w-full max-w-[1407px]">
        <div className="bg-white shadow border rounded-2xl py-5 px-5 w-full flex flex-col gap-3 items-center">
          <h1 className="text-xl md:text-3xl lg:text-6xl text-secondary font-semibold text-center">
            Have an Awsome Project Idea? <br />
            <span className="text-primary">Let’s Discuss</span>
          </h1>
          <div className="w-full">
            <Input cn={'w-full'} />
          </div>
        </div>
        <div className="bg-white border rounded-2xl shadow p-7 flex flex-col gap-4">
          <p className="text-secondary text-4xl">Elsewhere</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {links.map((item, index) => (
              <a
                target="_blank"
                href={item.link}
                className="text-dark-text border duration-500 hover:bg-gray-300 border-[#BBBCBF] px-5 py-1.5 rounded-4xl"
                key={index}
              >
                <div className="flex justify-center items-center gap-2">
                  <p className="bg-black rounded-full text-white flex items-center justify-center w-8 h-8">
                    {item.icon}
                  </p>
                  <p className="underline text-sm text-dark-text">{item.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
