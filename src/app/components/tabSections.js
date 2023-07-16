import { TabAll, TabMine } from './tabs';
import Constants from '../shared/constants.js';

export default function TabSections({ activeTab, openModal }) {
    return (
        <>
            {/* Showing tab that is currently active, if more than two tabs are required please create a map with key=constant value=component */}
            {activeTab == Constants.tab_all ?
                (<TabAll />) : (<TabMine openModal={openModal} />)}
        </>

    )
}