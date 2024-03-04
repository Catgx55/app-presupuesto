import Gasto from "./Gasto";

const ListadoGastos = ({
        gastos, 
        setGastoEditar, 
        eliminarGasto, 
        filtro, 
        gastosFiltrados
    }) => {
    return(
        <div className="listado-gastos contenedor">

            {filtro ? (
                    //filtramos por gastos definido
                <>
                    <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos en esta categoría'}</h2>
                    {gastosFiltrados.map(gasto => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                    ))}
                </>
                ) : (
                    //si no se muestran todos los gastos
                    <>
                    <h2>{gastos.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
                        {gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default ListadoGastos;