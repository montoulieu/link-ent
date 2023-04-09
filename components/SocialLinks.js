import { socialLinks } from "@/data";

function SocialLinks() {
  return (
    <ul className="flex gap-5 justify-center">
      {socialLinks.map((link) => (
        <li className="h-8 flex items-center" key={link.icon}>
          <a
            className="text-lime-400 hover:text-lime-600 transition-colors duration-200"
            href={link.url}
            target="_blank"
            rel="noopener"
            alt={link.icon}
          >
            <i className={`bi-${link.icon} text-3xl`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
