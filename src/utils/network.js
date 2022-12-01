const SWAPI_ROOT = 'https://swapi.dev/api/'
const SWAPI_PEOPLE = 'people/'

//Fetch in an async function
const getApiResource = async (url) => { 
    try {
        const res = await fetch(url)
        if(!res.ok){
            console.error('_Could not fetch_', res.status)
        }
        const parsedJson = await res.json() 
        return parsedJson
    }
    catch (error) {
        console.error('_Could not fetch_', error.message)
        return false        
    }    
}

(async()=>{
    const res = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
    console.log(res)
})();

/*
//Fetch in a regular function
const getApiResource2 = (url) => {
    fetch(url)
        .then(res=> console.log(res))
}

//XMLHTTPREQUEST
const getApiResource3 = (url) => {                                      
    const req = new XMLHttpRequest()
    req.open('get', url, true)
    req.onload = () => {
        const jsonElem = JSON.parse(req.responseText)
        console.log(jsonElem)
    }
    req.send()
       
}

const getApiResource4 = (url) => {
    console.log(this)
}

*/

export { getApiResource }; 