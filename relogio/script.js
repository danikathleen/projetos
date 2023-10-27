
    setInterval(()=> {
        let date = new Date()
        let hora = date.getHours()
        let minuto = date.getMinutes()
        let segundo = date.getSeconds()

        document.getElementById('hora-relogio').textContent = hora+':'+minuto+':'+segundo;
},1000)

      