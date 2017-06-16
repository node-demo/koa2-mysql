$(function () {

  var oSend = $('.send');
  var oMain = $('.main');
  var oShadow = $('.shadow');

  oSend.on('click', function () {
    oShadow.show();
  });

  oShadow.find('.close').on('click', function () {
    oShadow.hide();
  });

  //获取心愿
  oMain.find('dl').each(function (i, el) {
    // 随机位置
    $(el).css({
      left: rnd(0, oMain.outerWidth() - $(this).outerWidth()),
      top: rnd(0, oMain.outerHeight() - $(this).outerHeight())
    });

    // 拖拽位置
    $(this).dragging({
      move: 'both',
      randomPosition: true,
      hander: $(this).find('dt')
    });
  });

  //发布心愿
  oShadow.find('.wishing-form').on('submit', function (ev) {
    ev.preventDefault();
    var $action = $(this).attr('action');
    var $method = $(this).attr('method');
    var $name = $(this).find('input[name=username]');
    var $text = $(this).find('textarea[name=content]');
    if ($name.val() == '' || $text.val() == '') {
      alert('昵称或愿望不能为空 ^_^');
      return;
    }
    $.ajax({
      url: $action,
      type: $method,
      dateType:'json',
      data: {
        username: $name.val(),
        content: show_emoji($text.val())
      },
      success: function (data) {
        oShadow.hide();

        oMain.find('dl').each(function (i, el) {
          // 随机位置
          $(el).css({
            left: rnd(0, oMain.outerWidth() - $(this).outerWidth()),
            top: rnd(0, oMain.outerHeight() - $(this).outerHeight())
          });

          // 拖拽位置
          $(this).dragging({
            move: 'both',
            randomPosition: true,
            hander: $(this).find('dt')
          });
        });
      },
      error: function (err) {
        console.log(err);
      }
    });
  });

  //Emoji
  oShadow.find('.emoji li').on('click', function () {
    var i = $(this).index();
    var emoji = oShadow.find('.emoji li').eq(i).data('emoji');
    var res = oShadow.find('textarea[name=content]').val() + emoji;
    oShadow.find('textarea[name=content]').val(res);
    //console.log(i);
  });

  var aIcon = ['大哭', '害羞', '憨笑', '奸笑', '可爱', '玫瑰', '难过', '太阳', '调皮', '偷笑', '香吻', '握手', '疑问', '拥抱', '再见', '真棒'];
  function show_emoji(str) {
    for (var i = 0; i < aIcon.length; i++) {
      str = str.replace(eval("/\\[" + aIcon[i] + "\\]/g"), '<i class="emoji' + i + '"></i>');
    }
    return str;
  }

  // 发布话题字数
  oShadow.find('textarea[name=content]').on('keyup', function () {
    show_key($(this));
  });
  oShadow.find('textarea[name=content]').on('blur', function () {
    show_key($(this));
  });

  function show_key(obj) {
    var len, text = obj.val();
    if (text == undefined || text == '') return;

    if (text.length >= 140) {
      obj.val(text.substr(0, 140));
      len = 0;
    } else {
      len = 140 - text.length;
    }
    oShadow.find('.key').html(len);
  }

  function rnd(n, m) {
    return Math.floor(Math.random() * (m - n)) + n;
  }
});