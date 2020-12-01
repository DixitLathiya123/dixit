import React, { useState, useEffect } from 'react'

const Data = () => {
    const [listItems, setListItems] = useState([])
    const [page, setPage] = useState(1)    

    useEffect(() => {
        function handleScroll() {
            if (
                Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
                document.documentElement.offsetHeight
            )
                return 
                setPage(page + 1)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    useEffect(() => {
        fetchMoreListItems()
    }, [page])

    function fetchMoreListItems() {
        fetch(
            `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`,
            {
                method: 'GET'
            }
        )
            .then(res => res.json())
            .then(response => {
                setListItems([...listItems, ...response])
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div>
                {listItems.map((item) => (
                    <div>
                        <img width="200" height="200" src={item.url} />
                        <h3>{item.id}</h3>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Data