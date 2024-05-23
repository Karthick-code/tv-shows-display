document.querySelector("button").addEventListener("click", result)

async function result() {
    try {
        var ask = document.getElementById("Shows").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${ask}`);
        var res = await data.json();
        console.log(res);
        var x = res[0].show;
        display(x);
        console.log(x);
        
    }
    catch (error) {
        console.log(error);
    }
}
function display(x) {
    var card_div = document.createElement("div");
    card_div.className = "col-lg-12 col-md-8 col-sm-6 ";
    card_div.id = "card";
    if(document.querySelector("#card")!==null){
        var parent = document.querySelector("#card");
        parent.innerHTML = `<div class="card" style="width: 18rem;">
    <img src=${x.image.medium} class="card-img-top" alt="${x.image.original} ">
    <div class="card-body">
      <p class="card-text">
      <h5>Show name: ${x.name}</h5>
      Genres: ${x.genres.join(",")}<br>
      Premiered Date: ${x.premiered}<br>
      Rating: ${x.rating.average}<br>
      Show running days: ${x.schedule.days.join(",")}<br>
      Official site: ${x.officialSite}<br><br>
      ${x.network.name}<br><br>
      ${x.network.country.name}<br><br>
      ${x.summary}
      </p>
    </div>
  </div>`
    }
    else{
        card_div.innerHTML = `<div class="card" style="width: 18rem;">
    <img src=${x.image.medium} class="card-img-top" alt="${x.image.original} ">
    <div class="card-body">
      <p class="card-text">
      <h5>Show name: ${x.name}</h5>
      Genres: ${x.genres.join(",")}<br>
      Premiered Date: ${x.premiered}<br>
      Rating: ${x.rating.average}<br>
      Show running days: ${x.schedule.days.join(",")}<br>
      Official site: ${x.officialSite}<br><br>
      ${x.network.name}<br><br>
      ${x.network.country.name}<br><br>
      ${x.summary}
      </p>
    </div>
  </div>`
        var parent = document.querySelector(".container");
        parent.append(card_div);
    }
    
    
    
    
    
    //document.body.append(card_div);
}