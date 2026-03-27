interface Props {
  image: any;
  onClose: () => void;
}

export default function Modal({ image, onClose }: Props) {
  if (!image) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <img src={image.urls.regular} />
        <p>{image.alt_description}</p>
      </div>
    </div>
  );
}