import { initStore } from "./store";
localStorage.setItem(
  "GET_ALL_SLIDER_IMGS_URL",
  localStorage.getItem("BASE_URL") + "/WebSiteManagement/GetAllSliderImages"
);
localStorage.setItem(
  "UPLOIAD_SLIDER_IMG_URL",
  localStorage.getItem("BASE_URL") + "/WebSiteManagement/UploadSliderImage"
);
localStorage.setItem(
  "SHOW_SLIDER_IMG_URL",
  localStorage.getItem("BASE_URL") + "/StaticFiles/SliderImages/"
);
localStorage.setItem(
  "DELETE_IMG_URL",
  localStorage.getItem("BASE_URL") + "/WebSiteManagement/DeleteSliderImage/"
);

const configureSliderImagessStore = () => {
  const actions = {
    INITIATE_SLIDER_IMAGES: async (globalState, imagesList) => {
      globalState.sliderImages.images = imagesList;
      return globalState;
    },
    DELETE_IMAGE: (globalState, imageId) => {
      const img = globalState.sliderImages.images.filter(
        (c) => c.id === imageId
      );
      const index = globalState.sliderImages.images.indexOf(img[0]);
      globalState.sliderImages.images=globalState.sliderImages.images.filter(c=>c.id !== imageId);
      console.log("\\\\\\\\\\\\", globalState.sliderImages.images.length);
      console.log("\\\\\\\\\\\\", globalState.sliderImages.images);
      return globalState;
    },
  };

  initStore(actions, {
    sliderImages: {
      images: [],
    },
  });
};

export default configureSliderImagessStore;
