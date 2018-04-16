var samples = [
  'Predicting the impact of a change to services and people',
  'Understanding the business impact of a problem and who should fix it',
  'Calculating time and money spending by IT function',
  'Finding the differences between two data centers',
  'Finding the differences between two environments',
  'Aggregating and escalating alerts by impact and ownership (not just text-matching)',
  'Documenting services (including architecture diagrams)',
  'Training and identification of skills by role, function, etc',
  'Inventory of everything, everywhere (and keeping it up-to-date)',
  'Answering with certainty if we are vulnerable or exposed to a threat',
  'Auditing for policy compliance throughout cloud and on-premise environments',
  'Calculating how hundreds of concurrent events may be related',
  'Finding documents, dependencies, stakeholders and recent changes',
  'Identifying running processes, exposed services, established connections, etc',
  'Auditing and measuring monitoring coverage',
  'Auditing and measuring backup coverage',
  'Auditing and measuring disaster recovery plan coverage',
  'Identifying rogue services, configurations, infrastructure or users',
  'Calculating the "footprints" of team members, contractors or users',
  'Finding out what configuration changes are happening, anywhere'
]

$(document).ready(function(){
  var sample_index = Math.floor(Math.random() * samples.length)
  function change_process() {
    if (sample_index == samples.length) { sample_index = 0 }
    $('#proc').fadeOut(500, function() {
      $(this).html(samples[sample_index]).fadeIn(500)
    })
    sample_index += 1
  }

  $(() => setInterval(change_process, 8500))
})
