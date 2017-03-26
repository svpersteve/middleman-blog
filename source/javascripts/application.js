var $section = $('.js-reveal__hidden');
var $trigger = $('.js-reveal__trigger');

var toggleSection = function() {
  $section.toggle('fast');
};

$trigger.on('click', toggleSection);
