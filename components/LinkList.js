import React from 'react'
import links from '../json/links.json'

function LinkList() {
  return (
    <main className="flex px-3 sm:px-0">
      <ul class="w-full md:w-4/5 lg:w-3/6 mx-auto">
        {links.map(link => (
          <li className="mb-4" key={link.title}>
            <a
              className="font-bold bg-green-500 hover:bg-green-600 py-4 w-100 block text-center text-white rounded-lg "
              href={link.url}
              target="_blank"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default LinkList;
