import ImageCard from "./ImageCard";

interface Props {
  images: any[];
  onSelect: (img: any) => void;
}

export default function ImageGrid({ images, onSelect }: Props) {
  return (
    <div className="grid">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} onClick={() => onSelect(img)} />
      ))}
    </div>
  );
}