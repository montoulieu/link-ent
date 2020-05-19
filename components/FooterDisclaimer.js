import DonateButton from "./DonateButton";
import packageJson from '../package.json';

function FooterDisclaimer() {
  return (
    <div className="text-xs">
      <p className="">Built by <a href="https://github.com/montoulieu" target="_blank" className="text-green-400" rel="noopener">Pieter Montoulieu</a></p>
      <p className="mb-3"><a href="https://github.com/montoulieu/link-ent" target="_blank" className="text-green-400" rel="noopener">LinkEnt</a> is a free Linktree alternative built with React and Tailwind. <br className="hidden sm:block"/>
      If you find this useful, feel free to buy me a coffee <i className="fa fa-coffee"></i></p>
      <DonateButton />
      v{packageJson.version}
    </div>
  );
}

export default FooterDisclaimer;
