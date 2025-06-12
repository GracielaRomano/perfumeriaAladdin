(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
   });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

    // Register Form
    function validateForm(event) {
        event.preventDefault();
        let isValid = true;

        // Reset previous error states
        document.querySelectorAll('.error-message').forEach(error => error.style.display = 'none');
        document.querySelectorAll('.form-control').forEach(input => input.classList.remove('is-invalid'));

        // Validate name
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim().length < 3) {
            document.getElementById('nombreError').style.display = 'block';
            nombre.classList.add('is-invalid');
            isValid = false;
        }

        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            document.getElementById('emailError').style.display = 'block';
            email.classList.add('is-invalid');
            isValid = false;
        }

        // Validate phone (optional)
        const telefono = document.getElementById('telefono');
        if (telefono.value && !/^\d{8,}$/.test(telefono.value.replace(/\D/g, ''))) {
            document.getElementById('telefonoError').style.display = 'block';
            telefono.classList.add('is-invalid');
            isValid = false;
        }

        // Validate password
        const password = document.getElementById('password');
        if (password.value.length < 8) {
            document.getElementById('passwordError').style.display = 'block';
            password.classList.add('is-invalid');
            isValid = false;
        }

        // Validate password confirmation
        const confirmPassword = document.getElementById('confirmPassword');
        if (password.value !== confirmPassword.value) {
            document.getElementById('confirmPasswordError').style.display = 'block';
            confirmPassword.classList.add('is-invalid');
            isValid = false;
        }

        if (isValid) {
            // Here you would typically send the form data to your server
            alert('Registro exitoso! Por favor revise su correo electrónico para confirmar su cuenta.');
            document.getElementById('registerForm').reset();
        }

        return false;
    }

    // Remove error styling on input
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('is-invalid');
            const errorElement = document.getElementById(this.id + 'Error');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        });
    });

    // Login Form Validation 
    
        function validateLoginForm(event) {
            event.preventDefault();
            let isValid = true;

            // Reset previous error states
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            emailInput.classList.remove('is-invalid');
            passwordInput.classList.remove('is-invalid');

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            }

            // Validate password (just check if it's not empty)
            if (passwordInput.value.trim() === '') {
                passwordInput.classList.add('is-invalid');
                isValid = false;
            }

            if (isValid) {
                // Here you would typically send the form data to your server
                // For now, we'll just show a success message
                alert('¡Inicio de sesión exitoso!');
                document.getElementById('loginForm').reset();
            }

            return false;
        }

        // Remove error styling on input
        document.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('is-invalid');
            });
        });
    

})(jQuery);

