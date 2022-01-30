import React from "react";
import "./Filter.scss"



export const Filter: React.FC<any> = (props): any => {
    return <div className="filter-container">

        <div className="selec-container">
            <select className="select-type" name="select" onChange={(e) => props.setType(e.target.value)}>
                <option value="all">seleccionar categoria</option>
                <option value="Pantalon">Pantalon</option>
                <option value="Vestido">Vestido</option>
                <option value="Accesorio">Accesorio</option>
            </select>
        </div>
        {/* <div className="talles-container">
            <input className="talle-check" type="checkbox" name="s"></input>
            <label htmlFor="s">s</label>
            <input className="talle-check" type="checkbox" name="s"></input>
            <label htmlFor="m">m</label>
            <input className="talle-check" type="checkbox" name="s"></input>
            <label className="talle-check" htmlFor="l">l</label>
            <input type="checkbox" name="s"></input>
            <label className="talle-check" htmlFor="xl">xl</label>
        </div> */}
        <div className="price-container">
            <input onChange={(e) => props.setMinMaxPrice({ ...props.minMaxPrice, min: e.target.value })} className="price-range" type="input" placeholder="$ min" name="min-price"></input>
            <input onChange={(e) => props.setMinMaxPrice({ ...props.minMaxPrice, max: e.target.value })} className="price-range" type="input" placeholder="$ max" name="max-price"></input>
        </div>


    </div>


}