// back-end logic.
$(document).ready(function(){
  $('#design').click(function (){
    $(".design-icon-show").toggle();
    $(".design-icon-hide").toggle();
    $
  });

  $('#development').click(function(){
    $('.dev-icon-show').toggle();
    $('.dev-icon-hide').toggle();
  })

  $('#product-management').click(function(){
    $('.product-icon-show').toggle();
    $('.product-icon-hide').toggle();
  })
});

$(document).ready(function(){
  $("#work1").mouseover(function(){
    $(".image_text1").show();
  }).mouseout(function(){
    $(".image_text1").hide();
  });

  $("#work2").mouseover(function(){
    $(".image_text2").show();
  }).mouseout(function(){
    $(".image_text2").hide();
  });

  $("#work3").mouseover(function(){
    $(".image_text3").show();
  }).mouseout(function(){
    $(".image_text3").hide();
  });

  $("#work4").mouseover(function(){
    $(".image_text4").show();
  }).mouseout(function(){
    $(".image_text4").hide();
  });

  $("#work5").mouseover(function(){
    $(".image_text5").show();
  }).mouseout(function(){
    $(".image_text5").hide();
  });

  $("#work6").mouseover(function(){
    $(".image_text6").show();
  }).mouseout(function(){
    $(".image_text6").hide();
  });

  $("#work7").mouseover(function(){
    $(".image_text7").show();
  }).mouseout(function(){
    $(".image_text7").hide();
  });

  $("#work8").mouseover(function(){
    $(".image_text8").show();
  }).mouseout(function(){
    $(".image_text8").hide();
  });
});





//Front-End logic
$(document).ready(function(){
  $("form#form34A").submit(function(event){
     event.preventDefault();
     $.ajax({
      url: 'https://gmail.us14.list-manage.com/subscribe/post?u=a4c906441e186c972fa87c63e&amp;id=9587254a8d',
      type: 'post',
      data:$('#contact-form').serialize(),
      success:function(){
          
      }
  });
    let name = $("input#mce-FNAME").val();

    let email = $("input#mce-EMAIL").val();

    let message = $("textarea#comment").val();

    if ($("input#mce-FNAME").val() && $("input#mce-EMAIL").val()){
      alert ('hello' + name, + ' '  + 'we have recieved your message.thankyou for reaching out to us.');
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});