function startMap(){
    const coord = {lat: 20.573949581890183, lng:-103.32136811952873}
    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 17,
        center: coord
    })
    const markPosition = new google.maps.Marker({
        position: coord,
        map: map
    })
}