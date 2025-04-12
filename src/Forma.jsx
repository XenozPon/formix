import React, { useState } from 'react';


const Forma = () => {
    const [dogAge, setDogAge] = useState('');
    const [phone, setPhone] = useState('+7 ');

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        const numbers = input.replace(/\D/g, '').substring(1);
        let formatted = '+7 ';

        if (numbers.length > 0) {
            formatted += '(';
            if (numbers.length > 3) {
                formatted += numbers.substring(0, 3) + ') ';
                if (numbers.length > 6) {
                    formatted += numbers.substring(3, 6) + '-';
                    if (numbers.length > 8) {
                        formatted += numbers.substring(6, 8) + '-';
                        formatted += numbers.substring(8, 10);
                    } else {
                        formatted += numbers.substring(6, 8);
                    }
                } else {
                    formatted += numbers.substring(3, 6);
                }
            } else {
                formatted += numbers.substring(0, 3);
            }
        }
        if (numbers.length <= 10) {
            setPhone(formatted);
        }
    };
    const handleAgeChange = (e) => {
        const value = e.target.value;

        if (value <= 99 && value > 0) {
            setDogAge(value);

        }
    };
    const [name, setName] = useState('');
    const handleNameChange = (e) => {
        const value = e.target.value;

        if (value.length <= 15) {
            setName(value);

        }
    };
    const [nameDog, setNameDog] = useState('');
    const handleNameDogChange = (e) => {
        const value = e.target.value;

        if (value.length <= 15) {
            setNameDog(value);

        }
    };

    const [email, setEmail] = useState('');
    const handleEmalChange = (e) => {
        const value = e.target.value;

        if (value.length <= 25) {
            setEmail(value);

        }
    };

    return (
        <div className="Formix">
            <form>
                <legend>Forma C++</legend>
                <div className="input-wrapper">
                    <input type="text" className="form-input" value={name} onChange={handleNameChange}
                           placeholder="Ваше имя" required/>
                    <input type="number" className="form-input" value={dogAge} onChange={handleAgeChange}
                           placeholder="Сколько лет собаке" required/>
                    <input type="text" className="form-input" value={nameDog} onChange={handleNameDogChange}
                           placeholder="Кличка вашей собаки" required/>
                    <input
                        type="tel"
                        className="form-input"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Ваш номер"
                        pattern="\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}"
                        required
                    />
                    <input type="email" className="form-input" value={email} onChange={handleEmalChange}
                           placeholder="Ваш Email" required/>
                    <div className="dropdown">
                        <label htmlFor="bread">Парода </label>
                        <select name="" id="bread" required>
                            <option value="" disabled selected>Выбор</option>
                            <option value="Корги">Корги</option>
                            <option value="Корги">Боксёр</option>
                            <option value="Корги">Питбуль</option>
                            <option value="Корги">Чихуа</option>
                        </select>
                    </div>
                </div>
                <br/>
                <button className="Btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Forma;