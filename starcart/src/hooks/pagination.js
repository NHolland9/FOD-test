import { useState } from 'react'
const usePagination = data => {
	const [activePage, setActivePage] = useState(1)

  function nextPage() {
    setActivePage(activePage +1);
  }

  function prevPage() {
    setActivePage(activePage -1);
  }
  console.log(activePage)

	return {
		activePage,
    nextPage,
    prevPage
	}
}

export default usePagination
