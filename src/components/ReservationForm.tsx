import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  date: string;
  timeslot: string;
  guests: number;
}

type ComponentProps = {
    refresh: boolean;
    setRefresh:(ref:boolean) => void;
}

const ReservationForm: React.FC<ComponentProps> = ({refresh, setRefresh}) => {

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    date: Yup.date().required('Date is required'),
    timeslot: Yup.string().required('Time is required'),
    guests: Yup.number()
      .min(1, 'Minimum 1 guest')
      .max(10, 'Maximum 10 guests')
      .required('Number of guests is required'),
  });
  const [error, setError] = useState("")
  const [showModal, setShowModal] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>()
  const [reservedTimes, setReservedTimes] = useState<any | null>()
  const [message, setMessage] = useState<any | null>()

  const timeSlots = [
    "select-time",
    "13:00 - 15:00",
    "15:00 - 17:00",
    "17:00 - 19:00",
    "19:00 - 21:00"
  ]
  useEffect(()=>{

    const handleDateChange = (e:Event) => {
      e.preventDefault()
      let availableTimeslots : string[] = []
      if(reservedTimes !== undefined && e.target !== null){
        const { value } = e.target as HTMLInputElement
        console.log(e.target, value)
        console.log(reservedTimes)
      if(Object.keys(reservedTimes).includes(value)){
        let reservedTimeArray = reservedTimes[value as string].filter((item: any,
          index: number) => reservedTimes[value as string].indexOf(item) === index);
        availableTimeslots = timeSlots.filter((item: any) => !reservedTimeArray.includes(item) && item )
        console.log(availableTimeslots)
        console.log("After the first date select", reservedTimes)
        setAvailableSlots(availableTimeslots)
      }
      else {
        setAvailableSlots(timeSlots)
      }
    }
  }
    const fieldRef = document.querySelector(`input[name="date"]`);
    if (fieldRef) {
      fieldRef.addEventListener("change", handleDateChange)
    }
    return () => {
      if (fieldRef) {
        fieldRef.removeEventListener("change", handleDateChange);
      }
    };
  })

  const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }) => {
    const key = `${values.date},${values.timeslot}`
      try {
        const object = {[key] : {...values}}
        await fetch('http://localhost:5000', {
          method: 'POST',
          body: JSON.stringify(object)
        }
      )
      setMessage(object[key])
      setShowModal(true);
      resetForm();
      } catch (err) {
        console.log(err)
        setError("Server Could not save the reservation")
      }
    setSubmitting(false);
    setRefresh(refresh)
  };

  useEffect(()=>{
    try{
      fetch("http://localhost:5000").then(async(res)=>{
      return res.json()
    }).then((tables : any)=>{
      if(tables !== undefined){
        let data:any = {}
        Object.keys(tables).map((item: any) =>{
          const date =  item.split(",")[0]
          const time = item.split(",")[1]
          if(data[date as string] === undefined){
            data[date as string] = [time as string]
          }else{
            data[date as string].push(time as string)
          }
          return(null)
          })
          setReservedTimes(data)
          console.log("fetched data successfully")
      }
    })
    }
    catch {
      console.log('Server Access Failed')
    }
  },[refresh])

  return (
    <>
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        date: '',
        timeslot: '',
        guests: 1,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label >First Name</label>
            <Field type="text" name="firstname" placeholder="First Name" className="form-control" />
            <ErrorMessage name="firstname" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label >Last Name</label>
            <Field type="text" name="lastname" placeholder="Last Name" className="form-control" />
            <ErrorMessage name="lastname" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label >Email</label>
            <Field type="email" name="email" placeholder="Email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label >Phone</label>
            <Field type="tel" name="phone" placeholder="Phone" className="form-control" />
            <ErrorMessage name="phone" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label >Date</label>
            <Field type="date" name="date" placeholder="Date" className="form-control"
                min={new Date().toISOString().split('T')[0]} />
            <ErrorMessage name="date" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label >Time Slot</label>
            <Field as="select" name="timeslot" className="form-control">
              {availableSlots && availableSlots.map((slot:string, i: number) => <option key={i} value={slot}>{slot}</option> )}
            </Field>
            <ErrorMessage name="timeslot" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label >Number of Guests</label>
            <Field as="select" name="guests" className="form-control">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Field>
            <ErrorMessage name="guests" component="div" className="text-danger" />
          </div>
          <button type="submit" disabled={isSubmitting} className="btnBG">
            Book a Table
          </button>
          {error && <span>{error}</span>}
        </Form>
      )}
    </Formik>
    <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
      <ModalHeader toggle={() => setShowModal(false)}>Reservation Successful</ModalHeader>
      <ModalBody>
        <p>Your reservation bearing the following details have been successfull booked</p>
        {message &&
        <>
        <p>Name: {message.firstname+" "+message.lastname}</p>
        <p>Email: {message.email}</p>
        <p>Date: {message.date}</p>
        <p>Time Slot: {message.timeslot}</p>
        <p>Number of Guests: {message.guests}</p>
        </>
        }
      </ModalBody>
      <ModalFooter>
        <button className="btnBG" onClick={() => setShowModal(false)}>Close</button>
      </ModalFooter>
    </Modal>
    </>
  );
};

export default ReservationForm ;