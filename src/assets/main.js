const API ='https://youtube-v3-alternative.p.rapidapi.com/channel?id=UC_ts1BXBfZ2D1ANv1neiwag';

const content= null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a88fdd5fe9msh54cf930aece3b07p1d6d5cjsn8479b84df2a7',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

async function fetchData(urlApi){

    const response = await fetch(urlApi,options);
    const data = await response.json(); 
    return data;
}

//funcion anonima que permite automaticamente ejecutar la funcion 
(async() => {

    try {
     
        const videos = await fetchData(API);
     
        //Vista que hace uso de template que itera por cada uno de los elementos de la respuesta
        // cada elemento html se muestra 
        let view = ` 
        ${videos.data.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.thumbnail[0].url}" alt="${video.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.title}
                    </h3>
                </div>
            </div>
        `)}
       
        `;

        content.innerHTML = view;

    } catch (error) {
        console.log(error)
    }
})(); 