const posterEl = document.getElementsByClassName('poster')

for(const el of posterEl){

    el.addEventListener('mousemove', (evt) => {
        const {layerX, layerY} = evt
        
        const width = el.clientWidth
        const heigh = el.clientHeight


        const yRotation = (
            (layerX - width / 2) / width
        ) * 10

        const xRotation = (
            (layerY - heigh / 2) / heigh
        ) * 10


        const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`

        el.style.transform = string
    })
}

for(const el of posterEl){

    el.addEventListener('mouseout', () => {
        el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`
    })
}


