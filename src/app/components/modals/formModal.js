import CustomForm from "../forms/form"


export default function Modal({ isVisible, closeModal }) {

    if (!isVisible) return undefined;


    // To prevent modal closing when clicked inside of the modal content
    const handleClose = (e) => {
        // if the event is fired from target with id="backdrop" close the modal
        // else don't close the modal
        if (e.target.id == "backdrop") closeModal();
    }


    return (
        <>
            <div className="flex z-10 fixed inset-0 bg-black bg-opacity-50 justify-center items-center" id="backdrop" onClick={handleClose}>

                {/* modal content */}
                <div className="container bg-white mx-auto rounded w-[400px]">


                    <div className="m-6">

                        <p className="text-xl font-semibold">Add a New Beer</p>

                        {/* // Since there is only one form right now this defaults to addNewBeer, if other forms are required pass the collection to the Modal component as well */}
                        <CustomForm collection="addNewBeer" handleClose={closeModal} />
                    </div>
                </div>
            </div>
        </>
    )
}