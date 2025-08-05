import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/nirob-hasan-3b4776246/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/mursalin49" Icon={FiGithub} />
      <SingleContactSocial link="http://facebook.com/md.mursalin.hasan.nirob2" Icon={FaFacebook} />
    </div>
  );
};

export default ContactSocial;
