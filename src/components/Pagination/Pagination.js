import { PaginationWrap} from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import Button from '../common/Button/Button';
import { loadData } from "../../utils";
import { setCurrentPage } from "../../app/tableSlice.js";

function Pagination(props) {

  const filterFieldKey = useSelector((state) => state.table.filter.fieldKey);
  const filterType = useSelector((state) => state.table.filter.type);
  const filterValue = useSelector((state) => state.table.filter.value);
  const sort = useSelector((state) => state.table.sort);
  const currentPage = useSelector((state) => state.table.currentPage);
  const totalRecordsNumber = useSelector((state) => state.table.totalRecordsNumber);
  const pageSize = useSelector((state) => state.table.pageSize);

  const dispatch = useDispatch();

  function handlePageBtnClick(e, pageNumber) {
    dispatch(setCurrentPage(pageNumber));
    loadData(dispatch, filterFieldKey, filterType, filterValue, pageSize, currentPage, sort);
  }
  
  let pagesNumber = Math.ceil(totalRecordsNumber/pageSize);
  const pages = [];
  for (let i=0; i<pagesNumber; i++){
    pages.push(i);
  } 

  return (
      <PaginationWrap>
        {pages.map(((index) => {
          const pageNumber = index;
          const currentPageStyle = (pageNumber === currentPage)? true: false;
          return <Button key={index} circle={true} current={currentPageStyle} onClick={e=>handlePageBtnClick(e, pageNumber)}>{pageNumber+1}</Button>
        }))}
      </PaginationWrap> 
  );
}

export default Pagination;
