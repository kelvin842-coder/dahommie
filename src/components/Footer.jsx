import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* <!-- section footer --> */}
            <section class="row bg-warning text-light p-4 mt-4">
                <div class="col-md-4">
                    <h4 class="text-center">About us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic quae aliquam ullam perferendis sapiente!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, architecto quaerat quia aliquam ut autem?</p>
                </div>
                <div class="col-md-4">
                    <h4 class="text-center">Contact us</h4>
                    <form action="">
                        <input type="email" placeholder="Enter your email" class="form-control" required /> <br /> <br />
                        <textarea name="" id="" placeholder="Leave a comment..." class="form-control"></textarea> <br /><br />
                        <input type="submit" value="Send a Message" class="btn btn-info" />
                    </form>

                </div>

                <div class="col-md-4 text-center">
                    <h4 >Stay Connected</h4>
                    <a href="https://www.facebook.com"><img src="images/fb.png" alt="fb" /></a>
                    <a href="https://www.instagram.com"><img src="images/in.png" alt="ig" /></a>
                    <span class="badge bg-light"><a href="https://www.x.com"><img src="images/x.png" alt="x" /></a></span>

                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis et repellendus inventore impedit voluptas expedita aliquid, iste blanditiis totam eaque earum cupiditate nostrum, corrupti quibusdam quidem officiis pariatur vero?</p>

                </div>



            </section >
            <section class="row bg-dark text-light text-center pt-2 pb-2">
                <h5 class="fs-6">Developed by Kefini. &copy; 2026.All Rights Reserved</h5>

            </section>
            {/* <!-- end of footer --> */}

        </div >
    )
}

export default Footer