import NewsObj from "./controllers/news.controler.js";
import Notices from "./models/Notices.js";

class News
{

    static async listingNews()
    {
        News.news = await NewsObj.takeNews()

        let sameId = 0
        this.news.forEach((news)=>
        {
            const {imagem,categoria,titulo,resumo,fonte,id} = news
            const notices = new Notices(imagem,categoria,titulo,resumo,fonte)
            if(id == 2)
            {
                this.createCapeNews(notices)
                sameId = id
            }
        })
        this.news.forEach((news)=>
        {
            const {imagem,categoria,titulo,resumo,fonte,id} = news
            if(id != sameId)
            {
                const notices = new Notices(imagem,categoria,titulo,resumo,fonte)
                this.createNews(notices)
            }
        })
    }
    static resolutionresize()
    {
        window.addEventListener("resize",()=>
        {
            const capa = document.querySelector(".capa")
            capa.innerHTML = ""

            const noticias_box = document.querySelector(".noticias__box")
            noticias_box.innerHTML = ""
            
            let sameId = 0
            
            this.news.forEach((news)=>
            {
                const {imagem,categoria,titulo,resumo,fonte,id} = news
                const notices = new Notices(imagem,categoria,titulo,resumo,fonte)
                if(id == 2)
                {
                    this.createCapeNews(notices)
                    sameId = id
                }
            })
            this.news.forEach((news)=>
            {
                const {imagem,categoria,titulo,resumo,fonte,id} = news
                if(id != sameId)
                {
                    const notices = new Notices(imagem,categoria,titulo,resumo,fonte)
                    this.createNews(notices)
                }
            })
        })          
    }
    static createCapeNews(notices)
    {
        const {imagem,categoria,titulo,resumo,fonte} = notices
        const main = document.querySelector("main")
        
        if(window.screen.width < 600)
        {
            const capa = document.querySelector(".capa")
            capa.style.backgroundImage = `url("${imagem}")`
    
            const capa_box = document.createElement("div")
            capa_box.classList.add("capa__box")
    
            const capa_content = document.createElement("div")
            capa_content.classList.add("capa__content")
    
            const capa_categoria = document.createElement("p")
            capa_categoria.classList.add("capa__p")
            capa_categoria.innerText = categoria

            const capa_titulo = document.createElement("h1")
            capa_titulo.classList.add("capa__h1")
            capa_titulo.innerText = titulo

            const capa_fonte = document.createElement("a")
            capa_fonte.classList.add("capa__a")
            capa_fonte.innerText = fonte


            capa_content.append(capa_categoria,capa_titulo,capa_fonte)
            capa_box.append(capa_content)
            capa.append(capa_box)
            main.insertAdjacentElement("afterbegin",capa)
        }
        else
        {
            const capa = document.querySelector(".capa")
            capa.style.backgroundImage = `url("")`
    
            const capa_box = document.createElement("div")
            capa_box.classList.add("capa__box")

            const afterBox=  document.styleSheets[3].cssRules[17].cssRules[7]
            afterBox.style.backgroundImage = `url("${imagem}")`


            const capa_content = document.createElement("div")
            capa_content.classList.add("capa__content")
            
            const capa_categoria = document.createElement("p")
            capa_categoria.classList.add("capa__p")
            capa_categoria.innerText = categoria
            
            const capa_titulo = document.createElement("h1")
            capa_titulo.classList.add("capa__h1")
            capa_titulo.setAttribute("data-content", `${resumo}`)
            capa_titulo.innerText = titulo
            
            const capa_fonte = document.createElement("a")
            capa_fonte.classList.add("capa__a")
            capa_fonte.innerText = fonte


            capa_content.append(capa_categoria,capa_titulo,capa_fonte)
            capa_box.append(capa_content)
            capa.append(capa_box)
            main.insertAdjacentElement("afterbegin",capa) 
        }
    

         
    }
    static createNews(notices)
    {
        const {imagem,categoria,titulo,resumo,fonte} = notices

        if(window.screen.width < 600)
        {
            const noticias_box = document.querySelector(".noticias__box")
    
            const noticias_content = document.createElement("li")
            noticias_content.classList.add("noticias__content")

            const content_box = document.createElement("box")
            content_box.classList.add("content__box")
    
            const content_p1 = document.createElement("p")
            content_p1.classList.add("content__p1")
    
            const content_h2 = document.createElement("h2")
            content_h2.classList.add("content__h2")
    
            const content_p2 = document.createElement("p")
            content_p2.classList.add("content__p2")
    
            const content_a = document.createElement("a")
            content_a.classList.add("content__a")
    
            content_p1.innerText = categoria
    
            content_h2.innerText = titulo
    
            content_p2.innerText = resumo
    
            content_a.innerText = fonte

            content_box.append(content_p1,content_h2,content_p2,content_a)
            noticias_content.append(content_box)
            noticias_box.appendChild(noticias_content)
        }
        else
        {
            const noticias_box = document.querySelector(".noticias__box")
    
            const noticias_content = document.createElement("li")
            noticias_content.classList.add("noticias__content")
            
            const noticias_img = document.createElement("img")
            noticias_img.classList.add("noticias__img")
            noticias_img.src = imagem
            
            const content_box = document.createElement("div")
            content_box.classList.add("content__box")
    
            const content_p1 = document.createElement("p")
            content_p1.classList.add("content__p1")
    
            const content_h2 = document.createElement("h2")
            content_h2.classList.add("content__h2")
    
            const details = document.createElement("details")

            const sumary = document.createElement("summary")

            const content_p2 = document.createElement("p")
            content_p2.classList.add("content__p2")
    
            const content_a = document.createElement("a")
            content_a.classList.add("content__a")
    
            content_p1.innerText = categoria
    
            sumary.innerText = "Ver detalhes"
            
            content_p2.innerText = resumo

            content_h2.innerText = titulo
    
            content_p2.innerText = resumo
    
            content_a.innerText = fonte
            
            details.append(sumary,content_p2)
            content_box.append(content_p1,content_h2,details,content_a)
            noticias_content.append(noticias_img,content_box)
            noticias_box.appendChild(noticias_content)
        }
    }
}
News.listingNews()
News.resolutionresize()