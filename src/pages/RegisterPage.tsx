import {useState, type FormEvent} from 'react';
import {link, useNavigate} from 'react-router-dom';
import {register} from '../services';
import {getError} from '../api';
import {Field} from '../components/Field';

interface Errores {name?: string; email?: string; password?: string;}

export default function RegisterPage() {
    cpmst [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errores, setErrores] = useState<Errores>({});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await register({name, email, password});
            navigate('/login');
        } catch (err) {
            setError(getError(err).message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card p-6 gap-3 max-w-sm max-auto">


