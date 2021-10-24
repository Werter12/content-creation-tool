import { Typography } from 'antd';

const { Link } = Typography;

async function downloadImage(imageSrc) {
  const image = await fetch(imageSrc);
  const imageBlob = await image.blob();
  const imageURL = URL.createObjectURL(imageBlob);
  const link = document.createElement('a');
  link.href = imageURL;
  link.download = `${imageSrc}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function DownloadImageButton({ imageUrl }) {
  return (
    <Link
      href="#"
      onClick={async (e) => {
        e.preventDefault();
        await downloadImage(imageUrl);
      }}
    >
      Download
    </Link>
  );
}

export default DownloadImageButton;
