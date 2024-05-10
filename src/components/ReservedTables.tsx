import {  useEffect, useState } from "react"


type ComponentProps = {
    refresh: boolean;
    setRefresh:(ref: boolean) => void;
}
const ReservedTables :React.FC<ComponentProps> = ({refresh, setRefresh}) => {
    const [infoKeys, setInfoKeys] = useState<string[]>()
    const [infoValues, setInfoValues] = useState<any>()
    const [flag, setFlag] = useState(false)

    const handleRefresh = () => {
        setRefresh(refresh)
    }
    const handleDelete = async (key: string) => {
        try {
            const response = await fetch('https://little-lemon-server-61j1.onrender.com//deleteSlot',{
                method: 'POST',
                body: JSON.stringify(key)
              })
            if (response.ok) {
                handleRefresh();
            } else {
                console.error("Failed to delete reservation");
            }
        } catch (error) {
            console.error("Error deleting reservation:", error);
        }
    };

    useEffect(()=>{
        try{
          fetch("https://little-lemon-server-61j1.onrender.com/").then(async(res)=>{
          return res.json()
        }).then((tables : any)=>{
          setInfoKeys(Object.keys(tables))
          setInfoValues(Object.values(tables))
        })
        }
        catch {
          console.log('Server Access Failed')
        }
      },[refresh])
      console.log("different component",infoKeys, infoValues)

      return (
        <>
          {!flag && <button className="btnBG" onClick={() => setFlag(!flag)}>Show Past Reservations</button>}
          {flag &&
            <>
              <button className="btnBG" onClick={() => setFlag(!flag)}>Hide Reservations</button>
              {infoKeys && infoValues && infoKeys.map((item: string, i: number) => {
                return (
                  <div key={i} className="reservedBox">
                    <div>{`Date: ${item.split(",")[0]} Time: ${item.split(",")[1]}`}</div>
                    <div>{`${infoValues[i].firstname} ${infoValues[i].lastname}`}</div>
                    <div>{`${infoValues[i].email} +91 - ${infoValues[i].phone}`}</div>
                    <div>{`Number of Guests : ${infoValues[i].guests}`}</div>
                    <button className="btnBG" onClick={() => handleDelete(item)}>Delete</button>
                  </div>
                )
              })}
            </>
          }
        </>
      )
}

export default ReservedTables