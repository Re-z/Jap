    $(function(){
       $('.header__menu-burger').click(function(){
        $('.header__menu-item').addClass('header__menu-item_mobile');
        $('.header__menu-link').addClass('header__menu-link_mobile');
        $('.header__menu').slideToggle().addClass('header__menu_mobile');
       })
    })
