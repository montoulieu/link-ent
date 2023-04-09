import packageJson from "@/package.json";

function FooterDisclaimer() {
  return (
    <div className="text-xs">
      <p className="">
        Built by{" "}
        <a
          href="https://github.com/montoulieu"
          target="_blank"
          className="text-lime-400"
          rel="noopener"
        >
          Pieter Montoulieu
        </a>
      </p>
      <p className="mb-3">
        <a
          href="https://github.com/montoulieu/link-ent"
          target="_blank"
          className="text-lime-400"
          rel="noopener"
        >
          LinkEnt
        </a>{" "}
        is a free Linktree alternative built with Next.js and Tailwind.{" "}
      </p>
      v{packageJson.version}
    </div>
  );
}

export default FooterDisclaimer;
