import React from 'react';
import './ticketPrint.css'

function TicketPrint() {
    return (
        <>

            <div class="container">
                <div className="row">
                    <div className="col-md-12">
                        <div class="receipt_header">
                            <h1><b>Bus Booking Management Syatem</b> <span></span></h1>
                            <h2>Address: A-205, Near Bus Stand <span>Tel: +1 012 345 67 89</span></h2>
                        </div>

                        <div class="receipt_body">

                            <div class="date_time_con">
                                <div>
                                    <div class="text fs-5"><b>Bus Departure Time : </b></div>
                                    <div class="date"><b>12/12/2023</b></div>
                                    <div class="time"><b>11:00:00 AM</b></div>
                                </div>

                                <div>
                                    <div class="text fs-5"><b>Bus Number: </b></div>
                                    <div class="text"><b>RJ-DH-8569</b></div>

                                </div>

                                <div>
                                    <div class="text fs-5"><b>Bus Arrvied Time : </b></div>
                                    <div class="date"><b>12/12/2023</b></div>
                                    <div class="time"><b>05:00:00 PM</b></div>
                                </div>
                            </div>


                            <div class="items">
                                <table className='table'>
                                    <thead className='fs-5 '>
                                        <th>QTY</th>
                                        <th>Name</th>
                                        <th>AMOUNT</th>
                                    </thead>

                                    <tbody class="fw-bold">
                                        <tr>
                                            <td>1</td>
                                            <td>Rajat Kumar</td>
                                            <td>500 /-</td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td>Vishal Pande</td>
                                            <td>500 /-</td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td>alok Verma</td>
                                            <td>500 /-</td>
                                        </tr>

                                    </tbody>

                                    <tfoot>
                                        <tr>
                                            <td>Total</td>
                                            <td></td>
                                            <td>1500 /-</td>
                                        </tr>

                                    </tfoot>

                                </table>
                            </div>

                        </div>


                        <h3>Thank You!</h3>

                        <ul className='mt-4'>
                            <h4>Important Information :</h4>
                            <li>This e-ticket is not transferable and will only be valid along with an ID proof in original. If found travelling
                                without ID Proof, Passenger will be treated as without ticket and charged as per extent Bus rules.
                            </li>
                            <li>One of the passenger on this e-ticket is required to carry the details of e-ticket in the form of print out or SMS
                                received on Registered mobile no. from Bus, along with Valid Photo Identification Proof like Voter Identity
                                Card / Passport / PAN Card / Driving License / Photo ID card issued by Central/State Govt. / Student Identity Card
                                with Photograph issued by recognized School or College for their students / Nationalized Bank Passbook with
                                Photograph / Credit Card issued by banks with laminated photograph / Unique Identification Card “Aadhaar”.
                            </li>
                            <li>Due to any technical reason if fare mismatch is found, the passenger has to pay the difference amount to the
                                conductor</li>
                            <li>The passenger who is unable to carry print out of e-ticket, may obtain duplicate e-ticket print out by producing
                                PNR/Ticket number details on Mobile in the form of SMS with Valid Photo Identification Proof to the Bus
                                staff available at Reservation/Enquiry/Booking Window. This is an additional facility provided by the Bus to
                                its passengers, but Bus is not bound to provide this facility compulsorily.
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </>
    );
}

export default TicketPrint;