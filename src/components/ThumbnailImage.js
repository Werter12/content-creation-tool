import { Image, Col } from 'antd';
import { Link } from 'react-router-dom';

function ThumbnailImage({ image, onImageLinkClick }) {
  return (
    <Col>
      <p>{image.author}</p>
      <Link to={`/${image.id}`} onClick={onImageLinkClick}>
        <Image width={200} src={image.preview_url} preview={false} />
      </Link>
    </Col>
  );
}

export default ThumbnailImage;
