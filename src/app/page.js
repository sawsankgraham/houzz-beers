'use client'
import Constants from "./shared/constants.js";
import Tabs from "./components/tabItems.js"
import TabSections from "./components/tabSections.js"
import Modal from "./components/modals/formModal.js"
import { useState } from "react"


// This is for global state management using redux
// we will wrap the most parent component with Provider so that all the children will have access to the store
import { Provider } from "react-redux";
import { store } from "./store/store.js";


export default function Home() {
  const [activeTab, setActiveTab] = useState(Constants.tab_all)
  const [addModalVisible, setAddModalVisible] = useState(false)

  const closeModal = () => {
    setAddModalVisible(false)
  }

  const openModal = () => {
    setAddModalVisible(true)
  }

  return (
    <>
      {/* Providing store to the the provider we can have multiple stores for various Providers in our case we are using only one store.*/}
      <Provider store={store}>
        <div>
          <Tabs activeTabHandler={(tab) => { setActiveTab(tab) }} activeTab={activeTab} modalOpenHandler={() => { setAddModalVisible(true) }} />
        </div>
        <br></br>
        <TabSections activeTab={activeTab} openModal={openModal} ></TabSections>
        <Modal isVisible={addModalVisible} closeModal={closeModal}></Modal>
      </Provider>
    </>
  )
}
