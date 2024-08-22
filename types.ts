interface Service {
  id: number;
  title: string;
  desc: string;
  detailedDesc: {
    paragraphs: string[]; // Array of text paragraphs
    images: {
      src: string;
      alt: string;
    }[]; // Array of images with src and alt attributes
    textDesc: string[]; // Array of text paragraphs
    icons?: {
      src: string;
      alt: string;
    }[]; // Optional array of icons with src and alt attributes
   
  };
  className: string;
  thumbnail: string;
}


