import React from 'react'

function LinkList() {
  return (
    <div>
      {[
        { title: "Home", route: "/" },
        { title: "About", route: "/about" }
      ].map(navigationItem => (
        <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
          {/* <Link href={navigationItem.route}>
            <a className="block text-white">{navigationItem.title}</a>
          </Link> */}
          {navigationItem.title}
        </li>
      ))}
    </div>
  )
}

export default LinkList;
