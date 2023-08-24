const sectionDiv = document.querySelector(`.container`)
const input = document.getElementById('input');
const searchBtn = document.getElementById('search');
const result = document.querySelector('.result');




searchBtn.addEventListener('click', () => {
    const Name = input.value;
    const Url = `https://restcountries.com/v3.1/name/${Name}?fullText=true`;

    fetch(Url).then(respo => respo.json()).then(data => {
        //import Data
        const importData = () => {
            const countryImg = data[0].flags.png;
            const countryName = data[0].name.common;
            const countryCapital = data[0].capital[0];
            const countryContinent = data[0].continents[0];
            const countryPopulation = data[0].population;
            const currency = data[0].currencies[Object.keys(data[0].currencies)].name;
            const countryCurrency = Object.keys(data[0].currencies)[0];
            const countryLang =  Object.values(data[0].languages).toString().split(",").join(", ");
        //embed to Dom
            result.innerHTML = `
                <div class="title">
                    <img src="${countryImg}" alt="flag">
                    <h2>${countryName}</h2>
                </div>
                <div class="info">
                    <p>Capital :${countryCapital}</p>
                    <p>Continent :${countryContinent} </p>
                    <p>Population : ${ countryPopulation}</p>
                    <p>Currency : ${currency} - ${countryCurrency}</p>
                    <p>Common Languages : ${countryLang}</p>
                </div>`
        }
        //Error Handling
            if (data.status === 404) {
                alert(`${Name} is not A country`)
                console.error(`${Name} is not A country`);
                return true;
            }
            else if(!Name){
                alert(`Please put a Country Name`);
            }
            else{
                importData();
            }
    })           
}) 
              


             
            
           
                

             



           
