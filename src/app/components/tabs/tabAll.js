import { useState, useEffect } from "react"
import network from "@/app/persistence/network"

import CardType1 from '../cards/cardType1'
import { useDispatch, useSelector } from "react-redux"
import { setBeers, setError } from "@/app/store/beers/allBeers"


export function TabAll() {

    // getting the states from store using useSelector. The store is provided to the provider in page.js
    const beers = useSelector((state) => state.allBeers.beers)
    const error = useSelector((state) => state.allBeers.error)
    const dispatch = useDispatch() // we will use dispatch to dispatch any actions to the store

    // local state for loading
    const [loading, setLoading] = useState(false)

    const totalPerPage = 10 // total number of items to be requested in a single response 

    const getBeers = async () => {
        setLoading(true)
        try {
            // the get function in network accepts page and limit, page = total / totalPerPage + 1, limit = totalPerPage
            // this will increment the page based on the items.length available
            // TODO: [SERVER] implement a total available on the SERVER so that we can know when to end the pagination
            const newBeers = await network.get('beers', beers.length == 0 ? 1 : beers.length / totalPerPage + 1, totalPerPage) // pagination implemented

            dispatch(setBeers({ beers: newBeers })) // dispatching action setBeers with the response
        } catch (err) {
            dispatch(setError({ error: "Something went wrong. Please try again." }))
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        if (beers.length == 0) getBeers() // this should run only when no data is available during render
    }, [])



    if (loading && beers.length == 0) return (<p className="flex justify-center mt-5">loading....</p>)
    if (error != '') return (<p className="flex text-red-400 justify-center">{error}</p>)

    return (
        <>
            <div className="container px-2  mx-auto">



                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        beers.map(beer => (
                            <CardType1 key={beer.name} item={beer} />
                        ))
                    }
                </div>



                {/* Load more button, show only when items present */}
                {
                    // if there is a total items provided check that to see if pagination ended and hide load more
                    beers.length > 0 ?
                        <button className=" clear-btn flex mx-auto w-full my-4 items-center justify-center " onClick={() => getBeers()}>
                            <p className="text-blue-0 font-bold text-sm capitalize"> load more  </p>
                            {/* added svg code directly because only this icon is required, if multiple SVGs are required then please separate these as components */}
                            <svg className="fill-blue-0 h-3 ml-2 stroke-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </button>
                        : undefined
                }


            </div>
        </>
    )
}