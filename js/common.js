$(function() {

   //FAQ (Аккордеон)
  $(".faq__answer").prev().click(function() {
    $(this).parents(".faq__questions-wrap").find(".faq__answer").not(this).slideUp().parent().removeClass("faq__question_active");
    $(this).next().not(":visible").slideDown().parent().addClass("faq__question_active");
  });
  $(".del-list__text_hidd").prev().click(function() {
    $(this).parents(".del-pay__item").find(".del-list__text_hidd").not(this).slideUp().prev().removeClass("del-list__title_active");
    $(this).next().not(":visible").slideDown().prev().addClass("del-list__title_active");
  });

  // BUTTON TOGGLE (Сэндвич)
  $(".toggle_mnu").click(function() {
    $(".sandwich").toggleClass("active");
  });
  $(".toggle_mnu").on('click', function(e) {
    e.preventDefault();
    $(".header__nav").slideToggle();
  });
  $(window).resize(function() {
    var wid = $(window).width();
    if(wid > 991 && $(".header__nav").is(':hidden')) {
      $(".header__nav").removeAttr('style');
    }
  });


  // EYE
  $('.input__pass .pages__input').focus( function() {
    $('.pass-eye').css('opacity', '1');
  });
  $('.input__pass .pages__input').blur( function() {
    $('.pass-eye').css('opacity', '.4');
  });
  
  // TASTE (Выбор вкуса)
  $(".taste-item-ch__icon").click(function() {
    $(this).parents('.taste-item__choose').find('.taste-item-ch').removeClass('taste-item-ch_active');
    $(this).parent().addClass('taste-item-ch_active');
  });

  // TABS (Табы)
  $(".tab_item").not(":first").hide();
  $(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");

   // SCROLL TO
   $('a[href^="#to"]').on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  // MORE (еще)
  $(".btn-more").click(function () {
    $(this).parents('.check__wrap').find('.check__items_hidden').slideToggle();
    $(this).text(function(i, text){
      return text === "еще" ? "свернуть" : "еще";
    })
  });

  // REVIEWS (Отзывы)
  $(".slide-review").click(function () {
    $(this).prev('.review-slide__content').toggleClass('review-slide__content_active');
    $(this).find('span').text(function(i, text){
      return text === "Развернуть" ? "свернуть" : "Развернуть";
    })
  });

  //RESET CHECKBOX (Сбросить чекбоксы)
  $('.reset-all').click(function() {
    $(this).parents('.check__wrap').find('input:checked').prop('checked', false);
  });



	// SLIDERS (Слайдеры)
  $('.brends .owl-carousel').owlCarousel({
    loop:true,
    nav: false,
    autoWidth:true,
    dots: false,
    center: true,
    responsive : {
      2000 : {
        items: 8,
      },
      991 : {
        items: 5,
      },
      768 : {
        items: 3,
      },
      481 : {
        items: 3,
      },
      320 : {
        nav: true,
        items: 2,
        center: false,
        autoWidth:false,
        dots: false
      },
    }
  });
  $('.reviews .owl-carousel').owlCarousel({
    loop:true,
    nav: false,
    items: 3,
    autoWidth:true,
    dots: false,
    center: true,
    responsive : {
      2000 : {
        items: 8,
      },
      991 : {
        items: 3,
      },
      768 : {
        items: 2,
      },
      481 : {
        items: 2,
      },
      320 : {
        dots: true,
        items: 1,
        center: false,
        autoWidth:false,
        nav: false,
      },
    }
  });


  $('html').click(function(event) {
    var orderTarget = $(event.target);
    var wrapBlur = $('.wrap_blur');
    var form = $('.form');

    if(orderTarget.is('.btn_blur') || orderTarget.is('.btn-order') || orderTarget.is('.footer__phone') || orderTarget.is('.btn-no') || orderTarget.is('.callback__btn') || orderTarget.is('.forget-pass')) {
      wrapBlur.addClass('body_blur');
    } else if ($('.form, .callback').is(':hidden') || wrapBlur.hasClass('body_blur')) {
      wrapBlur.removeClass('body_blur');
    }
  });
	// POPUP'S (Всплывающее окно)
	$('.footer__phone, .btn-order, .forget-pass, .callback-btn__link').magnificPopup({
		mainClass: 'mfp-fade',
	});

  $('.btn-no').click(function() {
    $('.f-old__wrap_no').fadeIn();
    $(this).parents('.f-old__wrap').fadeOut();
  });
  $('.btn-yes').click(function() {
    $(this).parents('.f-old__wrap').fadeOut();
  });


  //FORM VALIDATE (Валидатор форм и отправка письма)
  $('.pages-form').validate({
    rules: {
      name: {
        required: true,
        number: false
      },
      phone: {
        required: true,
        number: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      },
      fio: {
        required: true
      },
      date: {
        required: true
      }
    },
    submitHandler: function() {
      var th = $('.pages-form');
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        setTimeout(function() {
          th.trigger("reset");
        }, 1000);
      });
      return false;
    }
  });

  $('.pages-form').validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        number: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    submitHandler: function() {
      var th = $('.pages-form');
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        setTimeout(function() {
          th.trigger("reset");
        }, 1000);
      });
      return false;
    }
  });

  $('.callback').validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        number: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    submitHandler: function() {
      var th = $('.callback');
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        setTimeout(function() {
          th.trigger("reset");
        }, 1000);
      });
      return false;
    }
  });

  $('.f-pass-recovery').validate({
    rules: {
      email: {
        required: true
      }
    },
    submitHandler: function() {
      var th = $('.f-pass-recovery');
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        $('.form-thanks__wrap').fadeOut();
        setTimeout(function() {
          th.trigger("reset");
        }, 1000);
      });
      return false;
    }
  });


  // ANIMATION ICONS (Анимация иконок)
  $('.new-tovar__item').animated('fadeInUp');

  // ANIMATION 100% (Анимация 100%)
  $('.create-profile').waypoint(function() {
    $('.cr-profile__count span').fadeIn();
    $({blurRadius: 5}).animate({blurRadius: 0}, {
      duration: 1400,
      easing: 'swing',
      step: function() {
        $(".lines").css({
          "-webkit-filter": "blur("+this.blurRadius+"px)",
          "filter": "blur("+this.blurRadius+"px)"
        });
      }
    });
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
    $(".lines").each(function() {
      var tcount = $(this).data("count");
      $(this).animateNumber({ number: tcount,
        easing: 'easeInQuad',
        "font-size": "60px",
        numberStep: comma_separator_number_step},
        1400);
    });
  }, {
    offset: '43%'
  });

  // Селект
  $('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('sel-hidden'); 
    $this.wrap('<div class="sel"></div>');
    $this.after('<div class="sel-styled"></div>');

    var $styledsel = $this.next('div.sel-styled');
    $styledsel.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'sel-options'
    }).insertAfter($styledsel);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledsel.click(function(e) {
      e.stopPropagation();
      $('div.sel-styled.active').not(this).each(function(){
        $(this).removeClass('active').next('ul.sel-options').hide();
      });
      $(this).toggleClass('active').next('ul.sel-options').toggle();
    });

    $listItems.click(function(e) {
      e.stopPropagation();
      $styledsel.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
            //console.log($this.val());
          });

    $(document).click(function() {
      $styledsel.removeClass('active');
      $list.hide();
    });
  });


  //SELECT TASTE
  $('.sel-options li').click(function() {
    var itemText = $('.taste-select__item p');

    for (var i = 0;i < itemText.length; i++) {
      if($(this).text() == $(itemText[i]).text()) {
        $(itemText[i]).parent().appendTo($('.taste-items__selected'));
        /* $(this).detach();*/
      }
    }
  });
  //SELECT TASTE
  $('.sel-options li').click(function() {
    var itemText = $('.taste-select__item p');
    var payment = $('.card__icons-wrap');

    for (var i = 0;i < itemText.length; i++) {
      if($(this).text() == $(itemText[i]).text()) {
        $(itemText[i]).parent().appendTo($('.taste-items__selected'));
        /* $(this).detach();*/
      }
    }
    for (var l = 0;l < $(this).length; l++) {
      if($(this).text() == "Картой") {
        $('.card__icons').fadeIn();
      } else {
        $('.card__icons').fadeOut();
      }
    }
  });
  $('.taste-select__item').click(function(event) {
    var thisItemParent = $(this).parent();
    var thisItem = $(this);
    var liText = $('.sel-options li');
    var select = $('.sel-options');
    var target = $( event.target );

   /* for (var a = 0;a < liText.length; a++) {
      if(thisItem.find('p').text() == $(liText[a]).text() && thisItemParent.hasClass('taste-items__unselected')) {
        $(liText[a]).detach();
      }
    }*/
    if(thisItem.parent().is('.taste-items__unselected')) {
      thisItem.appendTo($('.taste-items__selected'));
    }
    if (thisItem.on('click') && thisItemParent.hasClass('taste-items__selected')) {
      thisItem.appendTo($('.taste-items__unselected'));/*
      select.append('<li rel="' + thisItem.find('p').text() + '">'+ thisItem.find('p').text() +'</li>');*/
    }
  });

  // SLIDER LINE
  var slider = document.getElementById('range-slider');

  noUiSlider.create(slider, {
    start: [0, 3],
    connect: true,
    range: {
      'min': 0,
      'max': 6
    },
    tooltips: true,
    step: 1,
  });

  

  var futureDate = new Date("2017-5-11 23:00:00 GMT");
  var currentDate = new Date();

  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  var clock = $('.timer').FlipClock(
    diff, {
      clockFace: 'DailyCounter',
      countdown: true,
      showSeconds: true,
      language: 'ru'
  });
  

});

// LOADER (Загрущик)
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

  $('.f-old__wrap').css({
    'display': 'block'
  });
  if($('.wrap_blur').parent().is('.main-blur')) {
    $('.wrap_blur').addClass('body_blur');
  }
});