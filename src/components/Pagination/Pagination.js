import { PaginationWrap} from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import Button from '../common/Button/Button';
import { setCurrentPage } from "../../app/tableSlice.js";

function Pagination(props) {

  const currentPage = useSelector((state) => state.table.currentPage);
  const totalRecordsNumber = useSelector((state) => state.table.totalRecordsNumber);
  const pageSize = useSelector((state) => state.table.pageSize);

  const dispatch = useDispatch();

  function handlePageBtnClick(e, pageNumber) {
    dispatch(setCurrentPage(pageNumber));
  }
  let pagesNumber
  if (pageSize){
    pagesNumber = Math.ceil(totalRecordsNumber/pageSize);
  }else {
    pagesNumber = 0;
  }
  
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
