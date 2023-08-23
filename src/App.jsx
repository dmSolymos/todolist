import "./App.css"
import { useSelector } from "react-redux"
import TasklistContainer from "./components/tasklistContainer"
import Modal from "./components/Modal"
import ModalEdit from './components/ModalEdit'

function App() {
  const {isOpen} = useSelector((store)=>store.modal)
  const { isItOpen } = useSelector((store) => store.modalEdit)
  return (
  <>
    {isItOpen && <ModalEdit/>}
    {isOpen && <Modal />}
    <TasklistContainer></TasklistContainer>
  </>
  )
}

export default App
