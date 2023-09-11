import '../../../css/studentpanel/help/index.css'
function Help(){
    return(
        <div className="help">
            <h1>send help</h1>
            <div className="form">
                <form>
                    <div className="formgroup">
                        <label>full name</label>
                        <input type="text" value='lonely chisale'></input>
                    </div>

                    <div className="formgroup">
                        <label>email address</label>
                        <input type="email" value='lonelyfchisale@gmail.com'></input>
                    </div>

                    <div className="formgroup">
                        <label>message</label>
                        <textarea></textarea>
                    </div>

                    <div className="formgroup">
                        <input type="submit" value='send message'></input>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Help