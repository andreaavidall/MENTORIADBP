import {Link} from "react-router-dom";
import type {Item} from "../types";

interface Props {item: Item;}

export default function ItemCard({item}: Props) {
    return (
        <div className="card bg-base-100 shadow p-4">
            <h2 className="font-bold">{item.name}</h2>
            <p> ETIQUETA; {item.CAMPO}</p>
            <Link to={`/mentors/${item.id}`} className="btn btn-sm btn-primary">Ver detalles
            </Link>
        </div>
    );
}