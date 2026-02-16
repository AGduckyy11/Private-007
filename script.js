const mediaConfig = {
  legendPhoto:
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80",
  legendAudio: "",
  proofs: [
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=1200&q=80",
  ],
  audioProofs: [],
};

const photosGallery = document.querySelector("#photosGallery");
const audioList = document.querySelector("#audioList");
const legendPhotoPreview = document.querySelector("#legendPhotoPreview");
const legendAudioPreview = document.querySelector("#legendAudioPreview");

const proofModal = document.querySelector("#proofModal");
const proofModalImage = document.querySelector("#proofModalImage");
const proofModalClose = document.querySelector("#proofModalClose");

const setLegendMedia = () => {
  if (mediaConfig.legendPhoto) {
    legendPhotoPreview.src = mediaConfig.legendPhoto;
    legendPhotoPreview.alt = "Legend media";
  }

  if (mediaConfig.legendAudio) {
    legendAudioPreview.src = mediaConfig.legendAudio;
  }
};

const setActiveProof = (activeIndex) => {
  const proofCards = photosGallery.querySelectorAll(".proof-card");
  proofCards.forEach((card, index) => {
    card.classList.toggle("is-active", index === activeIndex);
  });
};

const closeProofModal = () => {
  proofModal.classList.remove("is-open");
  proofModal.setAttribute("aria-hidden", "true");
};

const openProofModal = (imageSrc, imageAlt) => {
  proofModalImage.src = imageSrc;
  proofModalImage.alt = imageAlt;
  proofModal.classList.add("is-open");
  proofModal.setAttribute("aria-hidden", "false");
};

const renderProofs = () => {
  photosGallery.innerHTML = "";

  mediaConfig.proofs.forEach((path, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "proof-card";

    const image = document.createElement("img");
    const imageAlt = `proof ${index + 1}`;
    image.alt = imageAlt;
    image.src = path;
    image.loading = "lazy";

    card.append(image);
    card.addEventListener("click", () => {
      setActiveProof(index);
      openProofModal(path, imageAlt);
    });
    photosGallery.append(card);
  });

  if (mediaConfig.proofs.length > 0) {
    setActiveProof(0);
  }
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

proofModalClose.addEventListener("click", closeProofModal);
proofModal.addEventListener("click", (event) => {
  if (event.target === proofModal) {
    closeProofModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProofModal();
  }
});

setLegendMedia();
renderProofs();
renderAudioProofs();
