function getAll(){
    const respon = axios.get("http://localhost:8069/Penjualan/allPenjualan")
    const m = respon.then(resp => resp.data)
    return m
}

async function create(data){
    await axios.post("http://localhost:8069/Penjualan/addPenjualan", data)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}
    
async function update(data){
    await axios.put("http://localhost:8069/Penjualan/updatePenjualan", mobil)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}

async function del(data){
    await axios.delete("http://localhost:8069/Penjualan/hapusPenjualan", mobil)
    .then((result) => {
        console.log(result)
        return result.data
    }).catch((err) => {
        console.error(err)
    });
}

