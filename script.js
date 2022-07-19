let pratos = 
[
    {
        addDescricao : document.getElementById("addDescricao"),
        valorPrato : document.getElementById("valorPrato"),
        urlPrato : document.getElementById("urlPrato")
    }
]

function adicionaPrato()
{
    let addDescricao = document.getElementById("addDescricao").value
    let valorPrato = document.getElementById("valorPrato").value
    if(addDescricao && valorPrato == "")
    {
        alert("Preencha todos os campos!")
    }
    else
    {
        pratos.push(addDescricao)
        pratos.push(valorPrato)
        document.getElementById("addDescricao", "valorPrato").value = ""
        //imprimePrato()
        console.log(pratos)
    }
}

function imprimePrato()
{
    let sectionPratos = document.getElementById("pratos")
    let cachePratos = ""
    sectionPratos.innerHTML = ""
    for(let i = 0; i < pratos.length; i++)
    {
        cachePratos = pratos[i]
        sectionPratos.innerHTML += `
        <div class="prato">
            <p>${cachePratos}</p>
        </div>
        `
    }
}