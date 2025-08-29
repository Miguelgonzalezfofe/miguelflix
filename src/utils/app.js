export function setLike(e) {
    const listaMegusta = JSON.parse(localStorage.getItem("ListaMeGusta")) || []
    const boolean = listaMegusta.find((m) => m.id === e.id)
    if (!boolean) {
        listaMegusta.push(e)
        localStorage.setItem("ListaMeGusta", JSON.stringify(listaMegusta))

    } else {
        localStorage.setItem("ListaMeGusta", JSON.stringify(listaMegusta.filter((m) => m.id !== e.id)))
    }


}
export function getLike() {
    const listaMegusta = JSON.parse(localStorage.getItem("ListaMeGusta")) || []
    console.log(listaMegusta)
    return listaMegusta

}

