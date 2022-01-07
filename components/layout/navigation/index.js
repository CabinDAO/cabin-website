import Link from 'next/link'

// navigation component
// takes in an array of 'links' { href, title } as defined in ./footerLinks.js and ./headerLinks.js
// optionally takes in a boolean for external links to be opened in a new tab
const Navigation = ({links, external}) => links.map(({href, title}, i) => (
    external ? (
        <Link href={href} key={i}>
            <a target="_blank" rel="noreferrer" >{title}</a>
        </Link>
    ) : (
        <Link href={href} key={i}>
            <a>{title}</a>
        </Link>
    )
))

export default Navigation