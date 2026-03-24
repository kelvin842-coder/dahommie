import React from 'react'

const Carousel = () => {
    return (
        <div>
            {/* <!-- section 2 --> */}
            <section class="row mb-2 mt-2">
                <div class="col-md-12">
                    <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                        {/* <!-- wrapper --> */}
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="images/slide1.avif" alt="slide1" class="w-100 d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src="images/.jpeg" alt="slide2" class="w-100 d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src="images/slide3.jpeg" alt="slide3" class="w-100 d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src="images/slide4.jpeg" alt="slide4" class="w-100 d-block" />

                            </div>


                        </div>
                        {/* <!-- controllers --> */}
                        <a href="#mycarousel" data-bs-slide="prev" class="carousel-control-prev">
                            <span class="carousel-control-prev-icon bg-danger"></span>
                        </a>
                        <a href="#mycarousel" data-bs-slide="next" class="carousel-control-next">
                            <span class="carousel-control-next-icon bg-danger"></span>
                        </a>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Carousel