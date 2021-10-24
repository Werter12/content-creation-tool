import { Skeleton, Row, Col, Typography } from 'antd';

function NoImage() {
  return (
    <Row>
      <Col>
        <Skeleton.Image />
        <br />
        <Typography.Text> No such image</Typography.Text>
      </Col>
    </Row>
  );
}

export default NoImage;
