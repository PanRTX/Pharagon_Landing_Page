const toastTrigger = document.getElementsByClassName('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

for(const toastBtns of toastTrigger){
    if (toastBtns) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBtns.addEventListener('click', () => {
          toastBootstrap.show()
        })
      }
}