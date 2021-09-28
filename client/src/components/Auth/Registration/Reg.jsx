import React, {useState} from 'react';


const Reg = (props) => {
    const [state, setState] = useState({
        nickname: '', birthday : '', password : '', email: ''
    });
    const changeData = (e) => {
        setState(
            {...state, [e.target.id] : e.target.value}
        )
        console.log(state)
    }
    const dataSend = () => {
        props.registrationThunk({...state})

    }
    return (

        <div className="row" style={{position: 'relative', left: '35%', top: '20%'}}>
            <div className="col s12 m3">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text ">
                        <span className="card-title">Card Title</span>
                        <div className="row">
                            <div className="input-field col s11">
                                <input onChange={changeData} id="nickname" type="email" className="validate"/>
                                <label htmlFor="nickname">Nickname</label>
                            </div>
                        </div>
                        <div className="col s12">
                            <label htmlFor="birthday">Birthday</label>
                            <input onChange={changeData} id="birthday" type="date" name="birthday"
                                   className="datepicker"/>
                        </div>
                        <div className="row ">
                            <div className="input-field col s11 ">
                                <input onChange={changeData} id="password" type="password" className="validate"/>
                                    <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s11">
                                <input onChange={changeData} id="email" type="email" className="validate"/>
                                    <label htmlFor="email">Email</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light btn" onClick={dataSend}>Зареестрироватся</a>

                    </div>
                </div>
            </div>
        </div>



    );
}

export default Reg;