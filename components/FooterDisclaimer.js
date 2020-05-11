import DonateButton from "./DonateButton";

function FooterDisclaimer() {
  return (
    <div className="text-xs">
      <p className="mb-2">LinkEnt is a free Linktree alternative built with React and Tailwind. <br className="hidden sm:block"/>
      Consider the source and clone from the <span className="text-green-400">"new-leaf"</span> branch to create your own. <br className="hidden sm:block"/>
      If you find this useful, feel free to buy me a coffee <i className="fa fa-coffee"></i></p>
      <p className="mb-2">Built by <a href="https://github.com/montoulieu" target="_blank" className="text-green-400">Pieter Montoulieu</a></p>
      <DonateButton/>
    </div>
  );
}

export default FooterDisclaimer;
