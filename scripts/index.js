let getData = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  //https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=football&to_date=13-01-2023&language=en

  

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  console.log(data);

  append_1(data.results)
  append_minidiv_2(data.results)

  append_2(data.results)
  append_3(data.results)
}

getData("general");





let append_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    /* let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].image_url;
      urlToImage.setAttribute("id","p1");
    } */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate;


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title
    /* title.style.fontSize="30px"; */


    let description = document.createElement("p")
    description.innerText = data[i].description

    let hr = document.createElement("hr")


    div.append(author, title, description, publishedAt, hr);
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#minidiv_1").append(div);


  }
}

let append_minidiv_2 = (data) => {
  for (let i = 1; i < 5; i++) {

    let div = document.createElement("div")


    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"

    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerText = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate;

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr);
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#minidiv_2").append(div)


  }
}

let append_2 = (data) => {
  for (let i = 5; i < 10; i++) {

    let div = document.createElement("div")


    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"

    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate;

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr);
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_2_av_1").append(div)


  }
}


let append_3 = (data) => {
  for (let i = 10; i < 13; i++) {

    let div = document.createElement("div")
    //  div.style.border="1px solid green"
    div.style.width = "fit-content"

/*     let urlToImage = document.createElement("img")
    urlToImage.src = data[i].image_url;
    urlToImage.style.height = "150px";
    urlToImage.style.width = "fit-content"; */



    let author = document.createElement("p")
    author.innerText = data[i].creator

    /* author.style.width = "60%" */
    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title
    /* title.style.width = "60%" */

    let description = document.createElement("p")
    description.innerText = data[i].description
    /* description.style.width = "60%" */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate;
    /* publishedAt.style.width = "60%" */
    let hr = document.createElement("hr")


    div.append(uauthor, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_3_av_1").append(div)


  }
}



let getData2 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  append_national_1(data.results)
  append_national_2(data.results)
  append_national_3(data.results)
}

getData2("national");






let getData3 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  BUSINESS_MONEY_1(data.results)
  BUSINESS_MONEY_2(data.results)
  BUSINESS_MONEY_3(data.results)
}

getData3("business");






let getData4 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  CRYPTO_CORNER_1(data.results)
  CRYPTO_CORNER_2(data.results)
  CRYPTO_CORNER_3(data.results)
  CRYPTO_CORNER_4(data.results)
}

getData4("crypto currency");






let getData5 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  SPORTS_1(data.results)
  SPORTS_2(data.results)
  SPORTS_3(data.results)
  SPORTS_4(data.results)
}

getData5("sports");






let getData6 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  ENTERTAINMENT_1(data.results)
  ENTERTAINMENT_2(data.results)
  ENTERTAINMENT_3(data.results)
}

getData6("entertainment");






let getData7 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  CULTUREANDSOCIETY(data.results)
}

getData7("culture");






let getData8 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  MAGAZINE__1(data.results)
  MAGAZINE__2_min_2(data.results)
  MAGAZINE__2(data.results)
  MAGAZINE__3(data.results)
}

getData8("magazine");






let getData9 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  WORLD_NEWS_1(data.results)
  WORLD_NEWS_2(data.results)
  WORLD_NEWS_3(data.results)
  WORLD_NEWS_4(data.results)
}

getData9("world news");






let getData10 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  photos(data.results)
}

getData10("most important news");






let getData11 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  SPOTLIGHT_1(data.results)
}

getData11("spotlight");






let getData12 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);

  let data = await res.json();

  BUSINESSSPOTLIGHT(data.results)
}

getData12("business"); 



///NATIONAL FEATURES

let append_national_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    /* let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].Image_url;
    } */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerText = data[i].description



    div.append(author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_2").append(div)
  }
}



let append_national_2 = (data) => {
  for (let i = 1; i < 6; i++) {

    let div = document.createElement("div")


    //  let urlToImage=document.createElement("img")
    //    if(i===0)
    //    {

    //     urlToImage.src=data[i].Image_url;
    //    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description
    let hr = document.createElement("hr")


    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_2").append(div)
  }
}



let append_national_3 = (data) => {
  for (let i = 6; i < 10; i++) {

    let div = document.createElement("div")


    /* let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].Image_url;
    } */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_2").append(div)
  }
}

// BUSINESS_MONEY_1


let BUSINESS_MONEY_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    /* let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].Image_url;
    } */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_3").append(div)
  }
}

let BUSINESS_MONEY_2 = (data) => {
  for (let i = 1; i < 4; i++) {

    let div = document.createElement("div")

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_3").append(div)
  }
}

let BUSINESS_MONEY_3 = (data) => {
  for (let i = 4; i < 7; i++) {

    let div = document.createElement("div")



    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_3").append(div)
  }
}

// CRYPTO_CORNER_1



let CRYPTO_CORNER_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    /* let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].Image_url;
    } */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_4").append(div)
  }
}

let CRYPTO_CORNER_2 = (data) => {
  for (let i = 1; i < 3; i++) {

    let div = document.createElement("div")



    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_4").append(div)
  }
}

let CRYPTO_CORNER_3 = (data) => {
  for (let i = 3; i < 5; i++) {

    let div = document.createElement("div")



    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_4").append(div)
  }
}

let CRYPTO_CORNER_4 = (data) => {
  for (let i = 5; i < 7; i++) {

    let div = document.createElement("div")


    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description
    let hr = document.createElement("hr")


    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_d_av_4").append(div)
  }
}


// SPORTS

let SPORTS_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


   /*  let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].Image_url;
    } */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append( author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_5").append(div)
  }
}

let SPORTS_2 = (data) => {
  for (let i = 1; i < 3; i++) {

    let div = document.createElement("div")


    //  let urlToImage=document.createElement("img")
    //    if(i===0)
    //    {

    //     urlToImage.src=data[i].Image_url;
    //    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_5").append(div)
  }
}

let SPORTS_3 = (data) => {
  for (let i = 3; i < 5; i++) {

    let div = document.createElement("div")

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description


    let hr = document.createElement("hr")
    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_5").append(div)
  }
}

let SPORTS_4 = (data) => {
  for (let i = 5; i < 7; i++) {

    let div = document.createElement("div")



    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description
    let hr = document.createElement("hr")


    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_d_av_5").append(div)
  }
}

// ENTERTAINMENT

let ENTERTAINMENT_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    /* let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].Image_url;
    } */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_6").append(div)
  }
}

let ENTERTAINMENT_2 = (data) => {
  for (let i = 1; i < 4; i++) {

    let div = document.createElement("div")


    //  let urlToImage=document.createElement("img")
    //    if(i===0)
    //    {

    //     urlToImage.src=data[i].Image_url;
    //    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_6").append(div)
  }
}

let ENTERTAINMENT_3 = (data) => {
  for (let i = 4; i < 7; i++) {

    let div = document.createElement("div")

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description
    let hr = document.createElement("hr")


    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_6").append(div)
  }
}

// container_7_Av_7

let CULTUREANDSOCIETY = (data) => {
  for (let i = 0; i < 4; i++) {

    let div = document.createElement("div")

/*     let urlToImage = document.createElement("img")
    urlToImage.src = data[i].Image_url;
    urlToImage.style.height="250px";
    urlToImage.style.width="fit-content"; */

    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerText = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    div.append(author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#container_7_Av_7").append(div)


  }
}


//  magzine

let MAGAZINE__1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


 /*    let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].Image_url;
    } */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_8_min_1").append(div)


  }
}

let MAGAZINE__2_min_2 = (data) => {
  for (let i = 1; i < 5; i++) {

    let div = document.createElement("div")


    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"

    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate

    let hr = document.createElement("hr")



    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_8_min_2").append(div)


  }
}


let MAGAZINE__2 = (data) => {
  for (let i = 5; i < 11; i++) {

    let div = document.createElement("div")


    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"

    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate

    let hr = document.createElement("hr")



    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_8").append(div)


  }
}


let MAGAZINE__3 = (data) => {
  for (let i = 11; i < 14; i++) {

    let div = document.createElement("div")

 /*    let urlToImage = document.createElement("img")
    urlToImage.src = data[i].Image_url;
    urlToImage.style.height="150px";
    urlToImage.style.width="fit-content"; */
    

    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_8").append(div)


  }
}

//  WORLD_NEWS_1


let WORLD_NEWS_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")

/*     let urlToImage = document.createElement("img")
    urlToImage.src = data[i].Image_url; */

    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate



    div.append(author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_9").append(div)


  }
}

let WORLD_NEWS_2 = (data) => {
  for (let i = 1; i < 2; i++) {

    let div = document.createElement("div")

/*     let urlToImage = document.createElement("img")
    urlToImage.src = data[i].Image_url; */

    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate



    div.append(author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_9").append(div)


  }
}

let WORLD_NEWS_3 = (data) => {
  for (let i = 2; i < 4; i++) {

    let div = document.createElement("div")

    //  let urlToImage=document.createElement("img")
    //  urlToImage.src=data[i].Image_url;

    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let image= document.createElement("img");
    image.src=data[i].Image_url;
    image.style.height="80px";
    image.style.width="fit-content";

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate

    let hr = document.createElement("hr")

    div.append(author, title,image, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_9").append(div)


  }
}

let WORLD_NEWS_4 = (data) => {
  for (let i = 4; i < 5; i++) {

    let div = document.createElement("div")

    /* let urlToImage = document.createElement("img")
    urlToImage.src = data[i].Image_url; */

    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate



    div.append(author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_d_av_9").append(div)


  }
}

//  Photos

let photos = (data) => {
  for (let i = 0; i < 4; i++) {

    let div = document.createElement("div")

/*     let urlToImage = document.createElement("img")
    urlToImage.src = data[i].Image_url;
    urlToImage.style.height="200px";
    urlToImage.style.width="fit-content"; */

    let author = document.createElement("p")
    author.innerText = data[i].creator

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title
    title.style.fontSize="";

    div.append(author, title)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#container_10_Av_10").append(div)


  }
}
// SPOTLIGHT_1

let SPOTLIGHT_1 = (data) => {
  for (let i = 0; i < 4; i++) {

    let div = document.createElement("div")


  /*   let urlToImage = document.createElement("img")
    urlToImage.src = data[i].Image_url;
    urlToImage.style.height="200px";
    urlToImage.style.width="fit-content"; */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#container_11_Av_11").append(div)


  }
}

//  BUSINESSSPOTLIGHT
let BUSINESSSPOTLIGHT = (data) => {
  for (let i = 0; i < 4; i++) {

    let div = document.createElement("div")


   /*  let urlToImage = document.createElement("img")
    urlToImage.src = data[i].Image_url;
    urlToImage.style.height="250px";
    urlToImage.style.width="fit-content"; */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].pubDate


    let author = document.createElement("p")
    author.innerText = data[i].creator
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#container_12_Av_12").append(div)


  }
}