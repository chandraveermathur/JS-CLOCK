
function clock() {
    var time_variable = new Date()

    var hours = time_variable.getHours()
    var minutes = time_variable.getMinutes()
    var seconds = time_variable.getSeconds()

    var date = time_variable.toLocaleDateString()


    var final = date + " " + `${hours}:${minutes}:${seconds}`


    document.getElementById("time").innerHTML = final
}


setInterval(clock, 1000)