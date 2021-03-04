window.onload = () => {

    document.documentElement.style.setProperty('--animate-duration', '0.9s');

    // menuMobile

    const buttonMenu = document.querySelector('.icon_menu h2');
    const mobileMenu = document.querySelector('.mobile ul');

    const downMobile = 'animate__bounceInDown';
    const upMobile = 'animate__bounceOutUp';

    function showMenu(){
        if(mobileMenu.classList.contains(upMobile)){
            mobileMenu.classList.remove(upMobile);
        }
        mobileMenu.classList.add(downMobile);
    }

    function hideMenu(){
        if(mobileMenu.classList.contains(downMobile)){
            mobileMenu.classList.remove(downMobile);
        }
        mobileMenu.classList.add(upMobile);
    }

    buttonMenu.addEventListener('click', () => {
        if(mobileMenu.classList.contains('hide')){
            mobileMenu.classList.remove('hide');
            showMenu();
        }else{
            if(mobileMenu.classList.contains(upMobile)){
                showMenu();
            }else{
                hideMenu();
            }
        }

    });

    // adicionando classe de animação em todos os titulos

    const tittle = document.querySelectorAll('section');
    const img = document.querySelector('.about img');

    tittle.forEach((value) => {
        value.classList.add('animate__animated');
        value.classList.add('animate__backInLeft');

    });

    setInterval(() =>{
        img.classList.add('animate__animated');
        img.classList.add('animate__pulse');   
    }, 905);
    
}