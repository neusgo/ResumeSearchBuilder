import SwiperIndex from "./Swiper";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="heading black">
              <span className="black">Client's</span> Testimonials
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="swiper-container testimonial-swiper">
              <div className="swiper-wrapper">
                <SwiperIndex />
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
