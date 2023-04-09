import { links } from "@/data";
import tw from "tailwind-styled-components";

function LinkList() {
  return (
    <ul className="w-full md:w-4/5 lg:w-3/6 mx-auto mb-3">
      {links.map((link) => (
        <li className="mb-4" key={link.title}>
          <TWListItemLink
            className=""
            href={link.url}
            alt={link.title}
            target="_blank"
            rel="noopener"
          >
            <span className="text-3xl absolute left-0 top-0 bottom-0 pl-5 flex items-center">
              {link.emoji}
            </span>
            <span>{link.title}</span>
          </TWListItemLink>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;

const TWListItemLink = tw.a`
  w-full block relative 
  py-4 pl-12 md:px-12
  bg-lime-500 hover:bg-transparent 
  border-2 border-lime-500 rounded-3xl
  font-bold text-center text-gray-800 hover:text-lime-400
  transition-colors duration-200 
`;
