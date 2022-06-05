import React from "react"

import {Link} from "next/link"

const LinkComponent = ({children,...rest}) => {
  return <>
    <Link {...rest}>
        {children}
    </Link>
  </>
}

export default LinkComponent
