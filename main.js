function generateContact(){
    return `
    <p><i class="fas fa-phone"></i> Call us: 817.689.3134</p>
    <p><i class="fas fa-envelope-open-text"></i> Send us a message or schedule a tour here:</p>
    <form>
    <fieldset>
    <legend>Contact Us</legend>
    <label for="name">Name</label>
    <input type="text" name="name">
    <label for="email">Email</label>
    <input type="text" name="email">
    <label for="opt-in">
        <input type="checkbox" name="opt-in">
        I'd like to receive email updates
    </label>
    <label for="subject">Subject</label>
    <input type="text" name="subject">
    <label for="message">Message</label>
    <textarea name="message"></textarea>
    </fieldset>
    <button type="submit">Submit</button>
    </form>`
}

function generateStory(){
    return `<p>Link to video</p>`;
}

function generateAbout() {
    return `<img src="https://s3.amazonaws.com/heritageroboticsacademy.com/Images/1.jpg" alt="">
        <h1>About us</h1>
        <p> We seek to improve and increase STEM / STEAM 
        education opportunities by offering enrichment 
        programs that take place during the out of school 
        hours. </p>
        <p>Science, Technology, Engineering and Math (STEM) 
        skills are increasingly necessary to navigate an 
        ever-more interconnected world and a globalized 
        economy. Most strategies and policies for reforming 
        STEM education focus on what happens during the 
        school day.</p>
        <p> High quality after school STEM programs can
         lead to increased interest and improved attitudes 
         towards STEM fields and careers, increased STEM 
         knowledge and skills, and increased likelihood of
         pursuing STEM majors and careers(Afterschool 
        Alliance, 2011 b).</p>
        <p>We also believe in the gifts and talents of every
         student. Our Computer Science, Electronics and 
         Robotics programs teach students 21st Century skills 
        as they engage in the Creative process of Making.</p>
        <p> Our programs are offered in Grapevine, Southlake
         and Euless. </p>
         <h2>Our values</h2>
         <ul>
            <li>Respect</li>
            <li>Perseverance</li>
            <li>Growth Mindset</li>
         </ul>`;
}

function generateMission() {
    return `<img src="https://s3.amazonaws.com/heritageroboticsacademy.com/Images/6.jpg" alt="">
        <h1>Mission</h1>
        <p> To provide a high quality, STEAM Challenge
         - based, mutually supportive and positive learning
          environment in which students have the opportunity
          to develop their Communication, Collaboration,
         Critical Thinking and Creativity skills. </p>
        <p>We provide opportunities to introduce students 
        to the growth mindset of making and develop their 
        technical skills for digital and physical content 
        creation. Students are empowered to explore Science, 
        Technology, Engineering, Art and Math (STEAM) and 
        literacy concepts through fun, hands - on projects, 
        while developing skills to be successful in the 21st 
        century.</p>
        <h2>Core Values</h2>
        <ul>
            <li><span class="upper-case">Discovery</span>: We explore new skills and ideas.</li>
            <li><span class="upper-case">Innovation</span>: We use creativity and persistence to solve problems.</li>
            <li><span class="upper-case">Impact</span>:  We apply what we learn to improve our world</li>
            <li><span class="upper-case">Inclusion</span>: We respect each other and embrace our differences.</li>
            <li><span class="upper-case">Teamwork</span>: We are stronger when we work together..</li>
            <li><span class="upper-case">Fun</span>: We enjoy and celebrate what we do!</li>
        </ul>`;
}

function generateProgram(){
    return `<img src="https://s3.amazonaws.com/heritageroboticsacademy.com/Images/2.jpg" alt="">
        <h1>Coding & Robotics Jr.</h1>
        <p><i class="far fa-calendar-alt"></i> Every Saturday 10 - 11 am</p>
        <p><i class="fas fa-map-marker-alt"></i> Heritage Robotics Academy</p>
        <p>4109 Grace Lane, Grapevine, TX 76051</p>
        <p>This program is open to students in grades K - 3
        who want a space to tinker, build and, learn to
        program LEGO WeDo 2.0 Robots. </p>
        <p>This is the perfect place to collaborate with 
        fellow students and build 21st century skills.</p>
        <p>Sign up soon! Space is limited.</p>`;
}


function renderOther(option){
    let generate = {
        program: generateProgram(),
        mission: generateMission(),
        contact: generateContact(),
        'our story': generateStory(),
        about: generateAbout(),
    }

    // If content section is hidden, show it
    // and hide home section
    if ($('.js-content').hasClass('hide')) {
        $('.js-content').removeClass('hide');
        $('.js-home').addClass('hide');
    }
    return $('.js-content').html(generate[option]);
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
        : renderOther(option);
}

function handleNavigationClick(event){
    event.preventDefault();
    event.stopPropagation();
    let menu = $(this).closest('.site-nav');
    // Close menu on mobile
    if( menu.hasClass('open') ){
        menu.toggleClass('open');
    }
    // Gt selected option
    let selectedOption = $(this).closest('button').text().trim().toLowerCase();
    return renderOption(selectedOption);
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