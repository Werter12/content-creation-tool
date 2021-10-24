import {
  Typography,
  Col,
  Form,
  Switch,
  InputNumber,
  Button,
  Space,
} from 'antd';
import DownloadImageButton from '../components/DownloadImageButton';
const { Paragraph, Title } = Typography;

const validateMessages = {
  blur: {
    // eslint-disable-next-line no-template-curly-in-string
    range: '${label} must be between ${min} and ${max}',
  },
};

function EditImageForm({
  draftImage,
  onFinish,
  onValuesChange,
  donwloadImageUrl,
}) {
  return (
    <Col xs={24} md={12}>
      <Title level={2}>Edit</Title>
      <Paragraph>Author: {draftImage.author}</Paragraph>
      <Form
        name="edit-image"
        onFinish={onFinish}
        validateMessages={validateMessages}
        onValuesChange={onValuesChange}
        initialValues={{
          width: draftImage.width,
          height: draftImage.height,
          blur: draftImage.blur ?? 0,
          grayscale: draftImage.grayscale ?? false,
        }}
      >
        <Form.Item name="width" label="Width">
          <InputNumber />
        </Form.Item>
        <Form.Item name="height" label="Height">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" name="grayscale" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item
          name="blur"
          label="Blur"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 10,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Space direction="vertical" size="large">
          <DownloadImageButton imageUrl={donwloadImageUrl} />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </Col>
  );
}

export default EditImageForm;
