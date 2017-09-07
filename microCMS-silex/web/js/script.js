(function () {
  console.log(this)
    var expand;
    expand = function () {
        var $input, $search;
        $search = $('.search');
        $input = $('.input');
        if ($search.hasClass('close')) {
            $search.removeClass('close');
            $input.removeClass('square');
        } else {
            $search.addClass('close');
            $input.addClass('square');
        }
        if ($search.hasClass('close')) {
            $input.focus();
        } else {
            $input.blur();
        }
    };
    $(function () {
        var $accordion, $wideScreen;
        $accordion = $('#accordion').children('li');
        $wideScreen = $(window).width() > 767;
        if ($wideScreen) {
            $accordion.on('mouseenter click', function (e) {
                var $this;
                e.stopPropagation();
                $this = $(this);
                if ($this.hasClass('out')) {
                    $this.addClass('out');
                } else {
                    $this.addClass('out');
                    $this.siblings().removeClass('out');
                }
            });
        } else {
            $accordion.on('touchstart touchend', function (e) {
                var $this;
                e.stopPropagation();
                $this = $(this);
                if ($this.hasClass('out')) {
                    $this.addClass('out');
                } else {
                    $this.addClass('out');
                    $this.siblings().removeClass('out');
                }
            });
        }
    });
    $(function () {
        var $container, $menu, $menubtn, $navbar;
        $menubtn = $('#hb');
				$navbar = $('.navbar');
        $menu = $('.navigation');
        $container = $('.site-inner');
        $menubtn.on('click', function (e) {
            if ($menubtn.hasClass('active')) {
                $menubtn.removeClass('active');
                $menu.removeClass('slide-right');
                $container.removeClass('slide-right');
								$navbar.removeClass('slide-right');
            } else {
                $menubtn.addClass('active');
                $menu.addClass('slide-right');
                $container.addClass('slide-right');
								$navbar.addClass('slide-right');
            }
        });
    });
    $(function () {
        var $button, clickOrTouch;
        clickOrTouch = 'click touchstart';
        $button = $('#search-button');
        $button.on(clickOrTouch, expand);
    });
    $(function () {
        var $box;
        $box = $('.sm-box');
        $box.on('click', function (e) {
					e.preventDefault();
            var $this;
            $this = $(this);
            if ($this.hasClass('active')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
        });
    });
}.call(this));

$("select").each(function() {
		var $this = $(this),
				$options = $(this).children("option").length;

		$this.addClass("select-hidden");
		$this.wrap("<div class='select'></div>");
		$this.after("<div class='select-styled'></div>");

		var $styledSelect = $this.next("div.select-styled");
		$styledSelect.text($this.children("option").eq(0).text());

		var $list = $("<ul />", {
				"class": "select-options"
		}).insertAfter($styledSelect);

		for (var i = 0; i < $options; i++) {
				$("<li />", {
						text: $this.children("option").eq(i).text(),
						rel: $this.children("option").eq(i).val()
				}).appendTo($list);
		}

		var $listItems = $list.children("li");

		$styledSelect.on("click", function(e) {
				e.stopPropagation();
				$("div.select-styled.active").each(function() {
						$(this).removeClass("active").next("ul.select-options").hide();
				});

				$(this).toggleClass("active").next("ul.select-options").toggle();
		});

		$listItems.on("click", function(e) {
				e.stopPropagation();
				$styledSelect.text($(this).text()).removeClass("active");
				$this.val($(this).attr("rel"));
				$list.hide();
		});

		$(document).on("click", function() {
				$styledSelect.removeClass("active");
				$list.hide();
		});

		$(".select-sibling").next(".select-styled").css({
			"border-top": "0px"
		});
});

(function () {
	var $addItem = $("#add-item");
	var $badge = $(".badge");
	var $count = 1;

	$addItem.on("click", function(e) {
		e.preventDefault();
		$badge.html($count++);
	});
}.call(this));

// Smooth-scroll
(function () {
  $('.page-scroll').on('click', function() { // Au clic sur un élément
    // // Wroking on bg
    var bg = $(this).parent().css('background-image')
    $('body').css({'background-image': bg });
    var page = $(this).attr('href'); // Page cible
    console.log(page);
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    if( page == '#portfolio' ){
      $('html, body').animate( {
        scrollTop: $(page).offset().top-64
      }, speed ); // Go
    } else {
      $('html, body').animate( {
        scrollTop: $(page).offset().top-64
      }, speed ); // Go
    }
    return false;
  });
}.call(this));

// owl Carrousel

// (function(){
//   $('.owl-carousel').owlCarousel({
//       loop:true,
//       margin:10,
//       nav:true,
//       center: true,
//       responsive:{
//           0:{
//               items:1
//           },
//           600:{
//               items:1
//           },
//           1000:{
//               items:1
//           }
//       }
//   });
// }.call(this));


// Compétences

var skills = [
    {
      titre : "HTML",
      valeur : 9
    },
    {
      titre : "Javascript - Jquery",
      valeur : 5,
    },
    {
      titre : "CSS",
      valeur : 9,
    },
    {
      titre : "PHP",
      valeur : 7,
    },
    {
      titre : "Bootstrap",
      valeur : 8,
    },
    {
      titre : "Wordpress",
      valeur : 6,
    },
    {
      titre : "Silex",
      valeur : 6,
    },
    {
      titre : "Conduite de Projet",
      valeur : 8,
    }

  ]


        function initSkills( talents ){

        for( var i = 0; i<talents.length; i++  ){
          var inHtml = $('<div class="skill-column"><h1>'+ talents[i].titre +'</h1></div>')
          // var insert = $('<div class="title">'+ talents[i].titre +'</div>')
          var cont = $('<div class="skill-icons"></div>')
          for( var j = 0; j < 10; j++ ){
            if(j <= talents[i].valeur-1){
              cont.append( $('<span class="active"></span>'))
            } else {
              // console.log("else")
              cont.append($('<span></span>'))
            }
          }
          inHtml.append( cont )
              // console.log( inHtml )

          $('.skills').append(inHtml)
        }
      }
      initSkills(skills)


$('.second').hover(function() {
  $('.skill-icons').children('.active').each(function(i) {
    var row = $(this);
    setTimeout(function() {
      row.css('background','#c0392b');
    }, 100*i);
  });
});
// Fin de compétences

//Portfolio active
$(function(){
  // $( $('.item')[0] )
  $('.item').eq(0).addClass( "active" )
}.call(this));

//background
// $(function(){
//     $('.accordion-group li').hover(function(){
//       // console.log( this )
//       var images = this.style.backgroundImage
//         $('body').css({'background-image': images });
//     });
// });
