import { Layout, PageHeader, Row, Pagination, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listImages, setDraftImage } from '../redux/actions/images';
import { useLocation, useHistory } from 'react-router-dom';
import { createSearchAction, getSearchSelectors } from 'redux-search';
import { createSelector } from 'reselect';
import ThumbnailImage from '../components/ThumbnailImage';

const { Footer, Content } = Layout;

const items = (state) => state.image.items;

const { text, result } = getSearchSelectors({
  resourceName: 'items',
  resourceSelector: (resourceName, state) =>
    state.image[resourceName].reduce((acc, elem) => {
      acc[elem.id] = elem;
      return acc;
    }, {}),
});

const searchSelector = createSelector(
  [result, items, text],
  (itemIds, items, searchText) => ({
    itemIds,
    items: items.filter((item) => {
      return itemIds.includes(item.id);
    }),
    searchText,
  }),
);
const searchAction = createSearchAction('items');

const MainPage = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { items: images, searchText } = useSelector((state) =>
    searchSelector(state),
  );
  const urlSearchParams = new URLSearchParams(location.search);
  const pageParam = Number(urlSearchParams.get('page')) || 1;
  const pageLimitParam = Number(urlSearchParams.get('pageLimit')) || 10;
  const [page, setPage] = useState(pageParam);
  const [pageLimit, setPageLimit] = useState(pageLimitParam);
  const totalItems = images.length * page + pageLimit;
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
          total={totalItems}
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
