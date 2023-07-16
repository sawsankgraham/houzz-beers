import { useState, useEffect } from "react"
import Form from "../../shared/forms"

import { useDispatch } from "react-redux"
import { addNewBeer, setError } from "@/app/store/beers/myBeers"

export default function CustomForm({ collection, handleClose }) {

    // States from store
    const [newBeer, setNewBeer] = useState({})
    const [errors, setErrors] = useState({})
    // the dispatcher for actions
    const dispatch = useDispatch()


    // Here we take the event from target and see which value is needs to be updated
    const updateNewBeer = (event) => {
        const toUpdate = {
            [event.target.id]: event.target.value,
            id: crypto.randomUUID() // IMPROVE: better way would be to use the prepare function in the relevant slice
        }

        setNewBeer({ ...newBeer, ...toUpdate })
    }


    //Validate
    const validateBeer = () => {
        let error = false
        setErrors({}) //reset errors before validating
        if (newBeer.name == undefined || newBeer.name == "") {
            setErrors(current => ({ ...current, ...{ name: "Name is required" } }));
            error = true
        }

        if (newBeer.tagline == undefined || newBeer.tagline == "") {
            setErrors(current => ({ ...current, ...{ tagline: "Genre is required" } }));
            error = true
        }

        if (newBeer.description == undefined || newBeer.description == "") {
            setErrors(current => ({ ...current, ...{ description: "Description is required" } }));
            error = true
        }

        if (!error) handleSave()
    }

    // Save to local persistence layer
    const handleSave = () => {
        try {
            dispatch(addNewBeer({ newBeer: newBeer }))
            setNewBeer({})
            handleClose()
        } catch (err) {
            dispatch(setError("Something went wrong. Please try again"))
        }
    }

    return (
        <>

            {
                Form[collection].map(item => {


                    // IMPROVE: could this be made better by creating a factory that can take in the type|collection and give back the required component?
                    // the form collections can be found under shared/forms.js
                    if (item.type == 'image-static') {

                        return (
                            <div key={item.field} id={item.field} className="my-6 w-36 border border-gray-300 rounded h-auto">
                                <img src="/houzz-beer.jpg" />
                            </div>


                        )
                    }


                    if (item.type == 'text') {

                        return (
                            <>
                                {/* Errors will be mapped to the field value  */}
                                {errors[item.field] !== undefined ? (<p key={crypto.randomUUID()} className="text-red-600 text-sm">{errors[item.field]}</p>) : undefined}
                                <input key={item.field} id={item.field} placeholder={item.placeholder} className="text-field-primary" onChange={updateNewBeer}></input>
                            </>
                        )

                    }


                    if (item.type == 'textarea') {
                        return (
                            <>
                                {errors[item.field] !== undefined ? (<p key={crypto.randomUUID()} className="text-red-600 text-sm">{errors[item.field]}</p>) : undefined}
                                <textarea key={item.field} id={item.field} placeholder={item.placeholder} className="text-field-primary " onChange={updateNewBeer}></textarea>
                            </>
                        )

                    }




                })
            }


            <div className="flex justify-end">
                <button className="btn-clear" onClick={handleClose} >Cancel</button>
                {/* We will call the validateBeer, and that will in turn call the handleSave if validation is successfull, gives error if not */}
                <button className="btn-primary rounded px-4 text-base" onClick={validateBeer}>Save</button>
            </div>
        </>
    )
}