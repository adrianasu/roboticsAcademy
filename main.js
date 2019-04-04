function render(option){
    let generate = {
        'our programs': generatePrograms,
        mission: generateMission,
        about: generateAbout,
        contact: generateContact
    }
    
    if ($('.js-home').hasClass('hide')) {
        $('.js-content').toggleClass('hide');
        $('.js-home').toggleClass('hide');
    }
    generate[option];

}

function renderHome(){
    // If we're in home already, do nothing.
    // If not, show home and hide other content.
    if($('.js-home').hasClass('hide')){
        $('.js-content').toggleClass('hide');
        $('.js-home').toggleClass('hide');
    }
}

function renderOption(option){
    return option === 'home' ? 
        renderHome() 
        : render(option);
}

function handleNavigationClick(event){
    event.preventDefault();
    event.stopPropagation();
    // close menu on mobile
    $(this).closest('nav').toggleClass('open');
    // get selected option
    let selectedOption = $(this).closest('button').text().trim().toLowerCase();
    renderOption(selectedOption);
}

function watchNavigationButtons(){
    $('nav').on('click', '.site-nav button', handleNavigationClick);
}

function watchHamburguer() {
    $('nav').on('click', '.js-hamburguer', function( event ){
        event.preventDefault();
        event.stopPropagation();
        $('.site-nav').toggleClass('open');
    })
}

function main(){
    watchHamburguer();
    watchNavigationButtons();
}

$(main);