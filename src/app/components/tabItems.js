import Constants from "../shared/constants.js";
export default function Tabs({ activeTab, activeTabHandler, modalOpenHandler }) {

    return (
        <>
            <div className="flex container px-2 mx-auto mt-12 mb-4 items-start justify-between">
                <div className="float-left flex items-center">
                    {/* Custom extractions are done on the styles/customs.css file */}
                    <button className={activeTab == Constants.tab_all ? "btn-clear-active" : "btn-clear"} onClick={() => activeTabHandler(Constants.tab_all)}>All Beers</button>
                    <button className={activeTab == Constants.tab_mine ? "btn-clear-active" : "btn-clear"} onClick={() => activeTabHandler(Constants.tab_mine)}>My Beers</button>
                </div>
                {
                    // Showing the add new beer button only when my beers tab is active
                    activeTab == Constants.tab_mine ?
                        (
                            <button className="btn-primary float-right" onClick={() => { modalOpenHandler() }}>Add a new beer</button>
                        ) : (<></>)

                }

            </div>


        </>
    )
}