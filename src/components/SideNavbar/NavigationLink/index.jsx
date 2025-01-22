import React from 'react'

const NavigationLink = ({ href, children }) => (
    <a
        href={href}
        className="block py-1 my-1 text-neutral-300 hover:text-neutral-100"
    >
        {children}
    </a>
)

export default NavigationLink
