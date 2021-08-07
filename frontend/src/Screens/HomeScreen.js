import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../Actions/AllActions';
import Alerts from '../HomeComponents/Alerts';
import Loading from '../HomeComponents/Loading';
import MainScreenTags from '../HomeComponents/MainScreenTags';
import Lottie from 'react-lottie';
import lottie1 from "../HomeComponents/54487-learning.json"
import lottie2 from "../HomeComponents/50124-user-profile.json"

export default function HomeScreen(props) {

    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('')

    const studentLogin = useSelector(state => state.studentLogin)
    const { studentInfo, loading, error, success } = studentLogin;

    const dispatch = useDispatch()
    useEffect(() => {
        if (success) {
            props.history.push("/")
        }
    }, [props.history, success])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(loginAction(name, rollNo))
    }


    var isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone/i.test(navigator.userAgent)) ? true : false;


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottie1 ,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    }
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: lottie2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    }



    return (
        <>

            <div className="main-div">

                {
                    studentInfo ? <MainScreenTags /> :
                        <div className="main-tags">
                            <form onSubmit={ (e) => submitHandler(e) }>
                                <ul>
                                    <li>
                                        <h2 >Welcome</h2>
                                        <h2>Login to continue !</h2>
                                    </li>

                                    {
                                        loading ? <Loading /> :
                                            error && <Alerts info="danger" message={ error } />
                                    }


                                    <li>
                                        <label htmlFor="name"> Student Name : </label>
                                        <input type="text" required value={ name } placeholder="Enter Name" onChange={ (e => setName(e.target.value)) } />
                                    </li>
                                    <li>
                                        <label htmlFor="rollNo"> Student RollNo : </label>
                                        <input type="text" required value={ rollNo } placeholder="Enter RollNo" onChange={ (e => setRollNo(e.target.value)) } />
                                    </li>
                                    <li>
                                        <button type="submit" className="btn btn-success">submit</button>
                                    </li>
                                    <div style={ { textIndent: 30 } }>

                                        Are you new here? <a style={ { color: "green", cursor: "pointer" } } onClick={ (e) => props.history.push("/signup") }> SignUp here ...</a>
                                    </div>


                                </ul>
                            </form>


                        </div>
                }
                <div className="main-picture" style={ { zIndex: 10000 } }>
                    {
                        !studentInfo ?
                            <Lottie options={ defaultOptions2 } width={ 500 } height={500} /> :
                            <Lottie options={ defaultOptions } height={ 580 } />
                    }
            </div>
            </div>
            <div className="main-div" style={ { width: "100%", height: 180 } }>

            </div>



        </>
    )
}
