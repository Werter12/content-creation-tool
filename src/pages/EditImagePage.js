import { useEffect } from 'react';
import { Layout, PageHeader, Image, Row, Col, Spin } from 'antd';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImage, updateDraftImage } from '../redux/actions/images';
import { buildImageUrl } from '../redux/utils';
import { startSaveToStorage } from '../redux/actions/storage';
import NoImage from '../layouts/NoImage';
import EditImageForm from '../layouts/EditImageForm';

const { Content } = Layout;

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { imageId } = useParams();
  const draftImage = useSelector((state) =>
    state.image.item?.id === imageId ? state.image.item : null,
  );
  const savedImages = useSelector((state) => state.storage.savedImages);
  const loading = useSelector((state) => state.image.loading);
  useEffect(() => {
    if (!draftImage) {
      dispatch(getImage(`/${imageId}/info`));
    }
  }, [draftImage, imageId, dispatch]);

  const builtImageUrl = buildImageUrl(draftImage ?? {});

  const onFinish = (values) => {
    dispatch(
      startSaveToStorage(savedImages, {
        ...draftImage,
        ...values,
        download_url: builtImageUrl,
      }),
    );
  };

  const onValuesChange = (changedValues) => {
    if (changedValues.blur < 0 || changedValues.blur > 10) {
      return;
    }
    dispatch(updateDraftImage(changedValues));
  };

  return (
    <Layout className="page">
      <PageHeader title={`Image with ${imageId} id`}  onBack={() => history.goBack()} />
      <Content className="content">
        {draftImage ? (
          <Row gutter={[34, 16]}>
            <Col xs={24} md={12} className="page-image-wrapper">
              <Image className="page-image" src={builtImageUrl} placeholder />
            </Col>
            <EditImageForm
              draftImage={draftImage}
              onFinish={onFinish}
              onValuesChange={onValuesChange}
              donwloadImageUrl={builtImageUrl}
            />
          </Row>
        ) : loading ? (
          <Spin size="large" />
        ) : (
          <NoImage />
        )}
      </Content>
    </Layout>
  );
};

export default MainPage;
