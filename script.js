async function getUser(){
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/photos");
        if(!res.ok) throw new Error("Faild to fatch")

            const data = await res.json()
            console.log(data)
            data.texTContent = data;
    } catch (error) {
        console.log(error.massage)
    }
}

getUser()


