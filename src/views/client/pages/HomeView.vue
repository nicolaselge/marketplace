<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
</script>

<template>
  <div class="px-3 mt-4">
    <div class="lg:max-w-[1400px] md:max-w-[744px] max-w-[375px] mx-auto">
      <div class="lg:px-10 md:px-6 px-4 py-7">
        <p
          class="lg:text-6xl md:text-5xl text-3xl text-center font-semibold text-zinc-800 dark:text-zinc-200 lg:max-w-[1300px] w-full mx-auto">
          Découvrez notre nouvel artisan
        </p>
        <p class="text-base text-center text-zinc-600 dark:text-zinc-300 mt-6 lg:max-w-[842px] w-full mx-auto">
          Venez découvrir sa boutique à l'effigie de son savoir-faire et commander le modèle de votre choix.
        </p>
        <div class="text-center mt-6 text-white ">
          <button class="bg-teal-800 lg:max-w-[250px] w-full mx-auto py-3 hover:bg-teal-900 transition duration-300"><RouterLink :to="{ name: 'shop' }">COMMANDEZ</RouterLink></button>
        </div>

        <div class="swiper mt-10">
          <swiper
          :slidesPerView="'auto'"
          :slidesPerGroupSkip="3"
          :grabCursor="true"
          :loopFillGroupWithBlank="true"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
            320: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
              slidesPerGroup: 1,
            },
            1336: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
          }" :modules="[Autoplay, Navigation]" className="swiper-wrapper">
            <swiper-slide className="swiper-slide">
              <div>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/vaaas.png" alt="nike shoes" className="" />
              </div>
            </swiper-slide>
            <swiper-slide className="swiper-slide">
              <div>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/vaaas2.png" alt="nike shoes" className="mt-20 md:mt-40" />
              </div>
            </swiper-slide>
            <swiper-slide className="swiper-slide">
              <div>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/vaaas3.png" alt="nike shoes" className="" />
              </div>
            </swiper-slide>
            <swiper-slide className="swiper-slide">
              <div>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/vaas5.png" alt="nike shoes" className="mt-20 md:mt-40" />
              </div>
            </swiper-slide>
            <swiper-slide className="swiper-slide">
              <div>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/vaaas6.png" alt="nike shoes" className="" />
              </div>
            </swiper-slide>
            <swiper-slide className="swiper-slide">
              <div>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/vaas5.png" alt="nike shoes" className="mt-20 md:mt-40" />
              </div>
            </swiper-slide>
          </swiper>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: -webkit-box;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  object-fit: cover;
}
</style>