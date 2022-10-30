import React, { useState } from "react";
import axios from "axios";
import './Register_form.css';

function Register_form() {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    function SendData() {

        axios.post('http://localhost/axios_post.php', {
            nickname: name,
            password: pass,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <>
            <section className="register_form_container">
                <form>
                    <p className="register_title">Register</p>
                    <p className="desc">Enter your nickname:</p> <input type='text' onChange={(event) => setName(event.target.value)} className='Form_input'></input>
                    <p className="desc">Enter your password:</p> <input type='text' onChange={(event) => setPass(event.target.value)} className='Form_input'></input>
                    <p>Radiobox</p> <input type='radio' className='radio'></input><input type='radio' className='radio'></input><br/><br/>
                    <input type='button' className='submit' onClick={SendData} value='Submit'></input>

                </form>
            </section>
        </>
    );
}

export default Register_form;