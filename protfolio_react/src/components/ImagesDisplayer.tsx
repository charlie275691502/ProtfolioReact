import Carousel from "./Carousel";

interface Props {
  images: string[];
  isDark?: boolean;
}

const ImagesDisplayer = ({ images, isDark = false }: Props) => {
  return images.length >= 2 ? (
    <Carousel images={images} isDark={isDark} />
  ) : (
    <img src={images[0]} alt={images[0]} className="project-page-head-image" />
  );
};

export default ImagesDisplayer;
