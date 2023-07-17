import { Tooltip } from 'flowbite-react';

export default function CardType1({ item }) {
    const ingredients = Object.keys(item.ingredients || {})
    const ingredientsContent = `Ingredients: ${ingredients.join(', ')}, water` // added water at the end due to its presence on the mockups and absence in the api response
    return (
        <>
            {/* Card UI */}
            <div className="flex  max-w p-6 bg-white shadow-[2px_2px_4px_4px_rgba(0,0,0,0.07)] rounded-md hover:bg-blue-25 hover:shadow-none mt-4 items-center" >
                <div className="flex justify-center basis-1/12">

                    {/* Tooltip is not to be shown when no ingredients are available, this is true on myBeers tab since there are no ingredients there */}
                    {
                        item.ingredients

                            ?

                            (
                                <Tooltip className="w-40 text-sm" content={ingredientsContent}>
                                    <img src={item.image_url || '/houzz-beer.jpg'} className="object-contain h-20 w-auto mr-6 " />
                                </Tooltip>
                            )

                            :

                            (
                                <img src={item.image_url || '/houzz-beer.jpg'} className="object-contain h-20 w-auto mr-6 " />
                            )
                    }


                </div>

                <div className="basis-11/12 ml-2">
                    <h1 className="font-semibold text-xl  capitalize">{item.name}</h1>
                    <h3 className="text-sm text-yellow-0 font-semibold py-1">{item.tagline}</h3>
                    <p className="text-xs font-medium line-clamp-2 pt-1">{item.description}</p>
                </div>

            </div >
        </>
    )
}