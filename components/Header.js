import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-green-500">
      <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
      </div>
    </header>
  );
}

export default Header;
