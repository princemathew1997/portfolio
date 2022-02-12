(function(){

    var model = {
        skillCounter: 0,
        navToggled: false,
    }

    var app = {

        init: function(){
            this.cacheDOM();
            this.bindEvents();
            this.toggleScroll();
            this.showSkill(model.skillCounter);
        },

        cacheDOM: function(){
            this.$skill      = document.getElementsByClassName('skill');
            this.$skillArrow = $('.slider-arrow');
            this.$navOverlay = $('.nav-overlay');
            this.$toggleNav  = $('.toggle-nav');
        },

        bindEvents: function(){
            this.$skillArrow.on('click', this.skillSlider.bind(this));
            this.$toggleNav.on('click', this.toggleNav.bind(this));
            $(window).scroll(this.toggleScroll);
            $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(this.smoothScroll);
        },

        toggleScroll: function(){
            if ($(document).scrollTop() > 0) {
                $('nav').addClass('nav-scroll');
            } else {
                $('nav').removeClass('nav-scroll');
            }

            var scrollBarLocation = $(this).scrollTop();
            $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').each(function(){
                var sectionOffset = $(this.hash).offset().top;
                if (Math.floor(sectionOffset) <= scrollBarLocation) {
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        },

        showSkill: function(j){
            var length = this.$skill.length;
            for (var i = 0; i < length; i++) {
                $(this.$skill[i]).hide();
            }
            $(this.$skill[j]).show();
        },

        skillSlider: function(e){
            var i = $(e.target).attr('value');
            model.skillCounter += Number(i);
            if (model.skillCounter < 0) {
                model.skillCounter = this.$skill.length - 1;
            }
            this.showSkill(model.skillCounter % this.$skill.length);
        },

        toggleNav: function(){
            if (model.navToggled) {
                this.$navOverlay.css('width', '0%');
                model.navToggled = false;
            } else {
                this.$navOverlay.css('width', '100%');
                model.navToggled = true;
            }
        },

        smoothScroll: function(e){
            e.preventDefault();
            (model.navToggled) ? app.toggleNav() : '';
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000);
        },
    }

    app.init()
    
})();



// send email info 
function send(event){
    event.preventDefault();
Email.send({
    // name:document.getElementById('name').value,
    Host: "smtp.gmail.com",
    Username: "meprincemathew97@gmail.com",
    Password: "misewqllpsnmcsps",
    To: "meprincemathew97@gmail.com",
    From: document.getElementById('email').value,
    Body :document.getElementById('message').value,
}).then((message) => alert("mail sent successfully"))

}
 
document.addEventListener('contextmenu', function(e){
    swal( ""," Not allowed ", "warning");
    e.preventDefault();
    });

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
       return false;
    }  
  }
  

  