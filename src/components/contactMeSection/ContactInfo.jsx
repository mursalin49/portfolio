import SingleInfo from "./SingleInfo";
import { contactInfo } from "../../data/portfolioData";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      {contactInfo.map((item) => (
        <SingleInfo key={item.text} text={item.text} Icon={item.Icon} />
      ))}
    </div>
  );
};

export default ContactInfo;
