interface Props {
  image: any;
  onClick: () => void;
}

export default function ImageCard({ image, onClick }: Props) {
  return (
    <div onClick={onClick} className="card">
      <img src={image.urls.small} alt={image.alt_description} />
      <p>{image.user.name}</p>
    </div>
  );
}