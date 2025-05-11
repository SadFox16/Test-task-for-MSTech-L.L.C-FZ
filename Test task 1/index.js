const handleScroll = () => {
	if(window.scrollY == 0){
        document.getElementsByClassName('menu')[0].classList.remove('scrolled')
	}else{
        document.getElementsByClassName('menu')[0].classList.add('scrolled')
    }
}

window.addEventListener('scroll', handleScroll)