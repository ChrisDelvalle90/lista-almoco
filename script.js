
let pratos = []

function adicionaPrato(){
    let novoPratos = {}
    novoPratos.urlPrato = document.getElementById("urlPrato").value
    novoPratos.addDescricao = document.getElementById("addDescricao").value
    novoPratos.valorPrato = document.getElementById("valorPrato").value

    // document.getElementById("urlPrato").value = ""
    // document.getElementById("addDescricao").value = ""
    // document.getElementById("valorPrato").value = ""

    if(novoPratos.urlPrato == "" || novoPratos.addDescricao == "" || novoPratos.valorPrato == "")
    {
        alert("Preencha todos os campos!")
    }
    else
    {
        pratos.push(novoPratos)
        imprimePrato()
    }
}


function imprimePrato()
{
    let sectionPratos = document.getElementById("catalogo")
    sectionPratos.innerHTML = ""
    for(let i = 0; i < pratos.length; i++)
    {
        sectionPratos.innerHTML += `
        <div class="prato">
            <img src="${pratos[i].urlPrato}" alt=""/>
            <p>${pratos[i].addDescricao}</p>
            <p>${pratos[i].valorPrato}</p>
        </div>
        `
    }
}

let pratosBkp
function filtrar(){
    let filtra = document.getElementById("campoBusca").value
    pratosBkp = pratos
    pratos = pratos.filter((elemento) => {
        return elemento.addDescricao.toLowerCase().includes(filtra.toLowerCase())
    })
    document.getElementById("catalogo").innerHTML = ""
    imprimePrato()
}

function limpar()
{
    pratos = pratosBkp
    document.getElementById("catalogo").innerHTML = ""
    imprimePrato()
}