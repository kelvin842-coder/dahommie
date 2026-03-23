import React from 'react'

const Navbar = () => {
  return (
    <div>
         {/* <!-- section 1 --> */}
         <section class="row">
            <div class="col-md-12">
                {/* <!-- Nav will carry all the contents of the navbar --> */}
                <nav class="navbar navbar-expand-md navbar-light bg-light">
                    {/* <!-- navbar-brand shows the brand or the name of the website --> */}
                    <a href="#" class="navbar-brand"><b>FOOtball kits</b></a>
                    {/* <!-- navbar-toggle only shows when the navbar is collapsed  --> */}
                     {/* <!-- date-bs-toggle="collapse"shows the button will show/hide something --> */}
                      {/* <!-- data-bs-targets points to which element should expand/collapse --> */}
                    <button class="navbar-toggler" data-bs-toggle="collapse"  data-bs-target="#navbarcollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- hides content on a small device --> */}
                     {/* <!-- navbar-collapse alligns the navbar items when expanded --> */}
                      {/* <!-- id connects to the button so that when its clickes it expands on small device --> */}
                    <div class="collapse navbar-collapse"id="navbarcollapse">
                        {/* <!-- navbar-nav ensures correct spacing and alignment --> */}
                        <div class="navbar-nav">
                            {/* <!-- nav-link style each link and active shows the active link --> */}
                             
                            <a href="Home kits.html" class="nav-link active">Homekits</a>
                            <a href="Awaykits.html" class="nav-link">Away kits</a>
                            <a href="National.html" class="nav-link">National teams</a>
                            <a href="training.html" class="nav-link">training kits</a><a href="signed jerseys.html" class="nav-link">signed jerseys</a>
                            <a href="Football.html" class="nav-link">All time footbals</a>
                            <a href="footgadgets.html" class="nav-link">~foot gadgets~</a>
                        </div>

                    </div>

                </nav>

            </div>


         </section>
         {/* <!-- end of section 1 --> */}
       
    </div>
  )
}

export default Navbar