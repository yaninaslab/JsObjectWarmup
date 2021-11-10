function non_coastal(arry){
    var i=0;
    while(i < arry.length) {
        if(arry[i]['is_coastal'] === false){
            console.log(`Name: ${arry[i]['city_name']} is NOT coastal`);

        }
        i++;
    }

}
//var city_name = "Toronto";
//var population = 3000000;
//var is_coastal = true;
//if (is_coastal) {
   //console.log(`Name: ${city_name} Population: ${population}`);
//}
//if(is_coastal === true) {
    //console.log(city_name);
    //console.log(population)
//}

var city = {
    city_name: "Toronto",
    population: 3000000,
    is_coastal: false,

}
if(city.is_coastal !== true) {
    console.log(`Name: ${city['city_name']} Population: ${city['population']}`);
}

var cities = [{

    city_name: "Toronto",
    population: 3000000,
    is_coastal: false,

},
{
    city_name: "Montreal",
    population: 1500000,
    is_coastal: true,

},
{
    city_name: "London",
    population: 500000,
    is_coastal: false,

},
]

for(var i=0; i < cities.length; i++) {

    if(cities[i]['is_coastal'] === true && cities[i]['population'] > 1000000) {

    console.log(`Name: ${cities[i]['city_name']} Population: ${cities[i]['population']}`)
    
    }
}

var city = {
    city_name: "Toronto",
    population: 3000000,
    is_coastal: false,

}
if(city.is_coastal !== true) {
    console.log(city.city_name);
    console.log(city.population)
}

var cities = [{

    city_name: "Toronto",
    population: 3000000,
    is_coastal: false,

},
{
    city_name: "Montreal",
    population: 1500000,
    is_coastal: true,

},
{
    city_name: "London",
    population: 500000,
    is_coastal: false,

},
]

non_coastal(cities);

console.dir(document);



var first_p_tag = document.querySelector('p');
first_p_tag.innerText = "I have changed the text!";

var all_p_tags = document.querySelectorAll('p');
for(var i=0; i < all_p_tags.length; i++) {
    all_p_tags[i]['style']['color'] = "pink";
}

var page_title = document.getElementById("page_title");
page_title['innerText'] = 'Injected Title';
page_title['style']['fontFamily'] = 'sans-serif';

var page_body = page_title.parentNode;
var sub_title = document.createElement('h3');

page_body.appendChild(sub_title);
sub_title['innerText'] = "This is a subtitle";

var orange_tags = document.getElementsByClassName('orange');
for (var i=0; i < orange_tags.length; i++) {
    orange_tags[i]['style']['background'] = "orange";

}

var container = document.getElementById('container');
container.innerHTML += "<h2>Will I be a tag</h2>";
container['style']['transition'] = "all 1s ease-in-out";
container['style']['height'] = "20px";
container['style']['height'] = "100px";
container['style']['background'] = "skyblue";

var image = document.querySelector("img");
image.setAttribute("src", "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80");
