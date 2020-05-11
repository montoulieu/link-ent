import DonateButton from "./DonateButton";

function FooterDisclaimer() {
  return (
    <div className="text-xs">
      <p className="">Built by <a href="https://github.com/montoulieu" target="_blank" className="text-green-400">Pieter Montoulieu</a></p>
      <p className="mb-3"><a href="https://github.com/montoulieu/link-ent" target="_blank" className="text-green-400">LinkEnt</a> is a free Linktree alternative built with React and Tailwind. <br className="hidden sm:block"/>
      {/* Consider the source and clone from the <span className="text-green-400">"new-leaf"</span> branch to create your own. <br className="hidden sm:block"/> */}
      If you find this useful, feel free to buy me a coffee <i className="fa fa-coffee"></i></p>
      <DonateButton/>
    </div>
  );
}

export default FooterDisclaimer;
