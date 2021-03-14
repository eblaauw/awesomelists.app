import React from "react"

const Layout = ( { children } ) => {
    return (
      <div className="container mx-auto px-4 md:px-0 font-sans lg:w-3/4 mt-8 md:mt-16">
      {children}
    </div>
    )
}

export default Layout
