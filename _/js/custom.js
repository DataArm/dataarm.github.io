var samples = [
  'impact analysis',
  'change management',
  'cost control',
	'continuous delivery',
	'alert escalation/aggregation',
	'architecture documention',
	'training',
	'inventory',
	'auditing',
	'problem management',
	'troubleshooting'
]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

$(document).ready(function(){
  var shuffled_samples = shuffle(samples), pindex = 0
  function change_process() {
    if (pindex == shuffled_samples.length) { pindex = 0 }
    $('#proc').fadeOut(500, function() {
      $(this).html(shuffled_samples[pindex]).fadeIn(500)
    })
    pindex += 1
  }

  $(function () {
    setInterval(change_process, 7500)
  })
})
