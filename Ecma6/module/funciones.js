
function crearFila( mentor ){
    const { nombre, edad, modulo } = mentor
    // Ternarios
    const bg = modulo == 'JS' ? 'bg-warning' : 'bg-info'
    return `
            <tr class="${ bg }" >
                <td class="text-dark" >${nombre}</td>
                <td class="text-dark" >${edad}</td>
                <td class="text-dark" >${modulo}</td>
            </tr>
        `
}

const fnReduce = (template, mentor) => template += crearFila( mentor )

export const numeros = [1,23,5,6]

export default {
    crearFila,
    fnReduce,
    numeros
}