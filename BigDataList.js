import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'
import InfiniteScroll from 'react-infinite-scroll-component'
import ReactPaginate from 'react-paginate'
import './BigDataList.css'
//https://react-window.vercel.app/#/examples/list/fixed-size
//https://www.npmjs.com/package/react-paginate
export default function BigDataList() {
  const data = new Array(10000).fill().map((value, id) => ({
    id: id,
    title: faker.lorem.words(5),
    body: faker.lorem.sentences(8),
  }))

  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(data.slice(count.prev, count.next))
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false)
      return
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)))
      console.log('setTime out counted')
    }, 200)
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }))
  }
  const [pagination, setPagination] = useState({
    data: new Array(1000).fill().map((value, index) => ({
      id: index,
      title: faker.lorem.words(5),
      body: faker.lorem.sentences(8),
    })),
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: [],
  })
  const handlePageClick = (event) => {
    const selected = event.selected
    const offset = selected * pagination.numberPerPage
    setPagination({ ...pagination, offset })
  }
  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage,
      ),
    }))
  }, [pagination.numberPerPage, pagination.offset])
  return (
    <div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
      <br />
      {pagination.currentData &&
        pagination.currentData.map((item, index) => (
          <div key={item.id} className="post">
            <h3>{item.id}</h3>
            <h3>{`${item.title}`}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      <br />
      {/*<InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={
          <div>
            <h4 style={{ textAlign: 'center', color: 'red' }}>Loading...</h4>
          </div>
        }
      >
        <div>
          {current &&
            current.map((item, index) => (
              <div key={index} className="post">
                <h3>{`${item.id}`}</h3>
                <h3>{`${item?.title}`}</h3>
                <p>{item?.bbody}</p>
              </div>
            ))}
        </div>
      </InfiniteScroll>
            */}
    </div>
  )
}
