import Footer from "../components/Footer"
import Hero from "../components/Hero"
import ReservationForm from "../components/ReservationForm"
import ReservedTables from "../components/ReservedTables"
import {useState} from "react";




const Reservations = () => {
  const [ refresh, setRefresh ] = useState<boolean>(false)
  function handleSetRefresh(ref: boolean){
    setRefresh(!ref)
  }
  return (
    <>
    <Hero page='reservations'/>
      <div className="reservationBody">
      <div className="reservationSection">
          <ReservationForm refresh={refresh} setRefresh={handleSetRefresh}/>
      </div>
      <div className="reservedSection">

          <ReservedTables  refresh={refresh} setRefresh={handleSetRefresh}/>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Reservations