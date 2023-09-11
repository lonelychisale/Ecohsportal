import '../../../css/studentpanel/accomodation/book.css'
function RegisterAccomodation(){
    return(
        <div className="accomodationbooking">
            <h1>book a room</h1>
            <div className="form">
            <form>
                    <div className="formgroup">
                        <label>full name</label>
                        <input type="text" value='lonely chisale'></input>
                    </div>

                    <div className="formgroup">
                        <label>registration number</label>
                        <input type="text" value='cis/003/18'></input>
                    </div>

                    <div className="formgroup">
                        <label>program of study</label>
                        <input type="text" value='cis'></input>
                    </div>

                    <div className="formgroup">
                        <label>Hall name</label>
                        <select name="hostelname">
                            <option>hall 7</option>
                            <option>hall 1</option>
                        </select>
                       
                    </div>

                    <div className="formgroup">
                        <label>message</label>
                       <input type="number" placeholder="rooms available up to 50"></input>
                    </div>

                    <div className="formgroup">
                        <input type="submit" value='send'></input>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export default RegisterAccomodation