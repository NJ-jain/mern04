import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Loggedin/swiper.css"


const Slider = () => {
    return (
     <>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{flexDirection : "column" , height:"100%" , display : "flex" , justifyContent : "center" , alignContent : "center"  }}>
            <p>Select text to change formatting, add headers, or create links.</p>
        <img style={{width : "60%"}} src="https://cdn-images-1.medium.com/proxy/1*eqlvF_kPTaDVcWZV4oPjVA.gif" alt="" />
        </SwiperSlide>
        <SwiperSlide style={{flexDirection : "column"}}>
        <p>Add images and other media by starting a new line</p>
        <img style={{width : "60%"}}  src="https://cdn-images-1.medium.com/proxy/1*LhrJcTFODoqjnPPuHNEInA.gif" alt="" />
        </SwiperSlide>
        <SwiperSlide style={{flexDirection : "column"}}>
            <p>Include content from Medium or other sites by pasting a link and pressing Enter.</p>
            <img style={{width : "60%"}} src="https://cdn-images-1.medium.com/proxy/1*2g5jIXYtWjsRFa9D-hBhMQ.gif" alt="" />
        </SwiperSlide>
        <SwiperSlide style={{flexDirection : "column"}}>
            <p>You can mention anyone in your story by typing @ and then their name. They will get a notification after you publish.</p>
            <img style={{width : "60%"}} class="drawer-image drawer-image--animated" src="https://cdn-images-1.medium.com/proxy/1*H9pEv0eHAvkGUVqdrHxH5g.gif" alt="" />
        </SwiperSlide>
        <SwiperSlide style={{display : "flex" , justifyContent : "center" , alignContent : "center" , height : "60%"}}>

            <p>Want another pair of eyes on your story? Click <em>Share</em>  for a link you can send to friends or editors.</p>
        </SwiperSlide>
        <SwiperSlide>
            <p>To customize how your story is distributed and presented to readers, click <em>More settings</em>  in the 3-dot menu.</p>
        </SwiperSlide>
        <SwiperSlide>
            <p>Click <button style={{borderRadius : "50px"}} class="button button--small button--circle button--dark button--withChrome u-baseColor--buttonDark button--withIcon button--withSvgIcon u-disablePointerEvents"><span class="svgIcon svgIcon--moreFilled svgIcon--25px"><svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg></span></button>  in the top right corner to bring back these hints and see more editor help.</p>
        </SwiperSlide>

      </Swiper>
     </>
    )
}

export default Slider