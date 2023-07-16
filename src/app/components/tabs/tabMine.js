import { useSelector } from "react-redux";

import CardType1 from "../cards/cardType1";

export function TabMine({ openModal }) {

    // States from store
    const beers = useSelector((state) => state.myBeers.beers)
    const error = useSelector((state) => state.myBeers.error)

    if (error != '') return (<p className="flex text-red-400 justify-center">{error}</p>)

    if (beers.length > 0) return (
        <div className="container px-2  mx-auto">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    beers && beers.map(beer => (
                        <CardType1 key={beer.name} item={beer} />
                    ))
                }
            </div>
        </div>

    )

    return (
        <>
            <div className="flex flex-col container mx-auto bg-blue-50 my-5 h-[80vh] justify-center items-center">
                <p className="text-gray-75"> Nothing to see here yet. </p>
                <span className="flex text-gray-75"> <p className="text-blue-100 font-semibold" onClick={openModal}>Click Here &nbsp;  </p> to add a new beer. </span>
            </div>
        </>
    )
}