import { Layout, PageHeader, Row, Pagination, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listImages, setDraftImage } from '../redux/actions/content';
import { useLocation, useHistory } from 'react-router-dom';
import { createSearchAction, getSearchSelectors } from 'redux-search';
import { createSelector } from 'reselect';
import ThumbnailImage from '../components/ThumbnailImage';

const { Footer, Content } = Layout;

const imagesSelector = (state) => state.content.images;

const { text, result } = getSearchSelectors({
  resourceName: 'images',
  resourceSelector: (resourceName, state) =>
    state.content[resourceName].reduce((acc, elem) => {
      acc[elem.id] = elem;
      return acc;
    }, {}),
});

const searchSelector = createSelector(
  [result, imagesSelector, text],
  (imageIds, images, searchText) => ({
    imageIds,
    images: images.filter((image) => {
      return imageIds.includes(image.id);
    }),
    searchText,
  }),
);
const searchAction = createSearchAction('images');

const MainPage = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { images, searchText } = useSelector((state) =>
    searchSelector(state),
  );
  const urlSearchParams = new URLSearchParams(location.search);
  const pageParam = Number(urlSearchParams.get('page')) || 1;
  const pageLimitParam = Number(urlSearchParams.get('pageLimit')) || 10;
  const [page, setPage] = useState(pageParam);
  const [pageLimit, setPageLimit] = useState(pageLimitParam);
  const totalImages = images.length * page + pageLimit;
  const setPagination = (setPaginationFunc, pageAttribute, num) => {
    setPaginationFunc(num);
    urlSearchParams.set(pageAttribute, num);
    history.push({
      pathname: location.pathname,
      search: urlSearchParams.toString(),
    });
  };
  useEffect(() => {
    dispatch(
      listImages({
        limit: pageLimit,
        page: page,
      }),
    );
  }, [page, pageLimit, dispatch]);

  return (
    <Layout className="page">
      <PageHeader
        title="Content Creation Tool"
        subTitle="based on picsum.photos"
        extra={
          <Input
            defaultValue={searchText}
            placeholder="Search by author"
            onChange={(e) => dispatch(searchAction(e.target.value))}
          />
        }
      />
      <Content className="content">
        <Row>
          {images &&
            images.map((image) => {
              return (
                <ThumbnailImage
                  key={image.id}
                  image={image}
                  onImageLinkClick={() => dispatch(setDraftImage(image))}
                />
              );
            })}
        </Row>
      </Content>
      <Footer className="footer">
        <Pagination
          current={page}
          total={totalImages}
          pageSize={pageLimit}
          onShowSizeChange={(_, pageSize) => {
            if (pageSize !== pageLimit) {
              setPagination(setPageLimit, 'pageLimit', pageSize);
            }
          }}
          onChange={(localPage) => {
            setPagination(setPage, 'page', localPage);
          }}
          showSizeChanger
        />
      </Footer>
    </Layout>
  );
};

export default MainPage;
