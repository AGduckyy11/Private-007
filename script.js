const mediaConfig = {
  legendPhoto:
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80",
  legendAudio: "",
  proofs: [],
  audioProofs: [],
};

const photosGallery = document.querySelector("#photosGallery");
const audioList = document.querySelector("#audioList");
const legendPhotoPreview = document.querySelector("#legendPhotoPreview");
const legendAudioPreview = document.querySelector("#legendAudioPreview");

const setLegendMedia = () => {
  if (mediaConfig.legendPhoto) {
    legendPhotoPreview.src = mediaConfig.legendPhoto;
    legendPhotoPreview.alt = "Legend media";
  }

  if (mediaConfig.legendAudio) {
    legendAudioPreview.src = mediaConfig.legendAudio;
  }
};

const renderProofs = () => {
  photosGallery.innerHTML = "";

  mediaConfig.proofs.forEach((path, index) => {
    const card = document.createElement("img");
    card.alt = `proof ${index + 1}`;
    card.src = path;
    card.loading = "lazy";
    photosGallery.append(card);
  });
};

const renderAudioProofs = () => {
  audioList.innerHTML = "";

  mediaConfig.audioProofs.forEach((path, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "audio-item";

    const title = document.createElement("p");
    title.textContent = `audio proof ${index + 1}`;
    title.style.margin = "0 0 0.45rem";

    const player = document.createElement("audio");
    player.controls = true;
    player.src = path;

    wrapper.append(title, player);
    audioList.append(wrapper);
  });
};

setLegendMedia();
renderProofs();
renderAudioProofs();
