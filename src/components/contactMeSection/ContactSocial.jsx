import SingleContactSocial from "./SingleContactSocial";
import { socialLinks } from "../../data/portfolioData";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((item) => (
        <SingleContactSocial
          key={item.label}
          link={item.link}
          Icon={item.Icon}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default ContactSocial;
