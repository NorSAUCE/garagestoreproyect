
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../Styles/DetalleArticulo.css";
import { Pagination } from "swiper";


export default function ScrollImg({imgURL}) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <img className='img-fluid box-img' src={imgURL}  alt="producto"/>
        </SwiperSlide>
        {/* <SwiperSlide>
            <img className='img-fluid box-img' src="https://lp2.hm.com/hmgoepprod?set=source[/99/38/99380ebf278be1c548eddc9f5a0a3894a6acc91c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"  alt="producto"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img-fluid box-img' src="https://lp2.hm.com/hmgoepprod?set=source[/99/38/99380ebf278be1c548eddc9f5a0a3894a6acc91c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"  alt="producto"/>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}