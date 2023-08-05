import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { CardContent, Card } from "@mui/material";
import { clientTestimonials } from "../constant";

// Swiper
SwiperCore.use([Autoplay, Scrollbar]);

const SwiperIndex = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      scrollbar={{ draggable: true }} // add the scrollbar here
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {clientTestimonials.map((comment) => (
        <SwiperSlide key={comment.id}>
          <Card sx={{}}>
            <CardContent>
              <div className="swiper-slide testimonial-box black">
                <h1>{comment.title}</h1>
                <p>{comment.description}</p>
                <div className="text-right">
                  <p className="name">{comment.clientName}</p>
                  <p className="designation">{comment.clientDesignation}</p>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={comment.src}
                      sx={{ width: 90, height: 90 }}
                    ></Avatar>
                  </Box>
                </div>
              </div>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperIndex;
