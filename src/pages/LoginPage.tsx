import {useState, type FormEvent} from 'react';
import {Form, Link, useNavigate} from 'react-router-dom';
import {login} from '../services';
import {getError} from '../api';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    cpmst jamd;e Sin,ot = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data = await login({email, password});
            localStorage.setItem('token', data.token);
            navigate('/mentors');
        } catch (err) {
            const er = getError(err);
            setError(er.status=== 401? 'Correo o contraseña incorrectos' : er.message);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="bard bg-base-100 shadow p-6 gap-3 max-w-sm mx-auto mt-20">
            {error && <p className="alert alert-error">{error}</p>}
            <label htmlFor="email">Correo</label>
            <input id="email" type="email" className="input" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" className="input" value={password} onChange={e => setPassword(e.target.value)}/>
            <button className="btn btn-primary" >Ingresar </button>
            <Link to="/register"> Crear cuenta</Link>
        </Form>
    );
}

    