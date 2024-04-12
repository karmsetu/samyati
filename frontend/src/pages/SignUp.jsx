import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({ name: '', password: '' });
    const [loading, setLoading] = useState(false);
    const handleChange = (E) => {
        setFormData((prevData) => {
            return { ...prevData, [E.target.name]: E.target.value };
        });
    };
    const handleSubmition = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            name: e.target[0].value,
            password: e.target[1].value,
        };
        axios
            .post('http://localhost:3000/sign-up', data)
            .then((res) => console.log(res))
            .catch((E) => console.log(E))
            .finally(setLoading(false));
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmition}>
                <label className="">name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-2 border-gray-500 px-4 py-2 w-full"
                />
                <label className="">password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border-2 border-gray-500 px-4 py-2 w-full"
                />
                <button
                    type="submit"
                    className={`${loading ? 'cursor-not-allowed' : ''}`}
                >
                    Sign UP
                </button>
            </form>
        </div>
    );
};

export default SignUp;
