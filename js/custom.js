var questions = [
  ["<ul><li>What's the 'technology' behind that?</li><li>Is it on-premise or in some cloud?</li></ul>", "Even if you're not the 'architect'"],
  ["<ul><li>Who's using that 'IP Address' and on what network switch?</li></ul>", "Even if you're not the 'Network admin'"],
  ["<ul><li>Is that 'IP Address' ours?</li><li>Which AWS region is it on?</li></ul>", "Even if you're not the 'Network engineer'"],
  ["<ul><li>Where's that 'MAC Address'?</li><li>What IP address is it related to?</li></ul>", "Even if you're not a 'Network expert'"],
  ["<ul><li>What 'regions' do we use?</li><li>Do we have things we can shut down to save money?</li></ul>", "Even if you're not an 'AWS expert'"],
  ["<ul><li>Who created that 'EC2 instance'?</li><li>When did that happen?</li></ul>", "Even if you have never used the 'AWS console'"],
  ["<ul><li>Where's that 'Kubernetes pod'?</li><li>Is it listening on the network?</li></ul>", "Even if you're not a 'K8 expert'"],
  ["<ul><li>Who's using that 'F5 LTM Pool'?</li><li>Is it doing load-balancing?</li></ul>", "Even if you're not a 'BigIP expert'"],
  ["<ul><li>What 'subnets' are on 'InfoBlox DHCP'?</li><li>Are they fully utilized?</li></ul>", "Even if you're not an 'IPAM expert'"],
  ["<ul><li>Which 'Zones' are we delegating?</li><li>How many reverse records are we missing?</li></ul>", "Even if you're not a 'DNS expert'"],
  ["<ul><li>What 'CNAME' records are we using?</li><li>Is there any of them pointing to external providers?</li></ul>", "Even if you're not a 'DNS expert'"],
  ["<ul><li>What 'PTR' or 'MX' records are we using?</li><li>Do we depend on external mail providers?</li></ul>", "Even if you're not a 'DNS expert'"],
  ["<ul><li>Which 'VM' is using that 'storage volume'?</li><li>Is it SRM protected?</li></ul>", "Even if you're not a 'VMWare expert'"],
  ["<ul><li>What 'storage volumes' are we using?</li><li>Is there any idle disk?</li></ul>", "Even if you're not a 'Compellent expert'"],
  ["<ul><li>Which service is on the 'DMZ VLAN'?</li><li>Who owns them?</li></ul>", "Even if you're not a 'network routing expert'"],
  ["<ul><li>What 'Oracle version' do we use?</li><li>How many instances do we have?</li></ul>", "Even if the 'DBA' is on vacation"],
  ["<ul><li>Do we have any 'MariaDB' server?</li><li>Do they have active connections?</li></ul>", "Even if you only use 'NoSQL'"],
  ["<ul><li>Who  owns this 'service'?</li><li>What are the maintenance windows?</li></ul>", "Even if it is your first day on the job"],
  ["<ul><li>Who's the 'business owner' for this service?</li><li>Who's the operator?</li></ul>", "Even if you're an outsourced 'NOC engineer'"],
  ["<ul><li>How many  'physical servers' do we have?</li><li>Are they all in the same enclosure?</li></ul>", "Even if you've never visited the 'COLO'"],
  ["<ul><li>Where's that 'Windows VM'?</li><li>Is it running an RDP service?</li></ul>", "Even if you're not an 'Azure expert'"],
  ["<ul><li>Which are the 'entrypoints' for my 'environment'?</li><li>What do I need to duplicate it?</li></ul>", "Even if you're the 'project manager'"],
  ["<ul><li>What's the list of our 'services'?</li><li>Which ones are most critical to accounting?</li></ul>", "Even if you're the 'CFO'"],
  ["<ul><li>What's our list of 'public URLs'?</li><li>Are all of them under TLS?</li></ul>", "Even if you don't know what a 'CDN' is"],
  ["<ul><li>Where's the 'documentation' for 'that'?</li><li>Where is it running from?</li></ul>", "Even on your first day on the job"],
  ["<ul><li>What's the 'diagram' for that 'service'?</li><li>Is it running any Memcached service?</li></ul>", "Even if you haven't heard about 'Visio'"],
  ["<ul><li>Who's 'logged' into that 'server'?</li><li>What's the source IP address?</li></ul>", "Even if you don't know 'last' from 'who'"],
  ["<ul><li>Are we running a 'vulnerable version' of that?</li><li>Who owns the 'service'?</li></ul>", "Even if you're the 'deputy COO'"],
  ["<ul><li>Who's using that 'S3 bucket'?</li><li>When was it created?</li></ul>", "Even if you're the 'product owner'"],
  ["<ul><li>What's the 'impact' of this 'problem'?</li><li>Who do I escalte it to?</li></ul>", "Even if you're a 'trainee'"],
  ["<ul><li>What's the 'impact' of this 'problem'?</li><li>Can it wait until tomorrow?</li></ul>", "Even on your first day on the job"],
  ["<ul><li>Who's listening on port '8080'?</li><li>What's the name of the process?</li></ul>", "Even if you're the 'QA engineer'"],
  ["<ul><li>What 'container' does that 'URL' go to?</li><li>Is it going through the CDN?</li></ul>", "Even if you can't tell 'Docker' from 'Kubernetes'"],
  ["<ul><li>Where's 'Postfix MTA' running?</li><li>Is it also listening on localhost?</li></ul>", "Even if you're the 'ActiveDirectory admin'"],
  ["<ul><li>Which 'users' are members of this 'AD group'?</li><li>Who's their direct manager?</li></ul>", "Even if you're the 'Linux engineer'"],
  ["<ul><li>What 'AD groups' do we have?</li><li>Is there any group with not members?</li></ul>", "Even if you're the 'Java developer'"],
  ["<ul><li>What users have 'SUDO' rights?</li><li>Is there any currently logged in?</li></ul>", "Even if you're the '.Net developer'"],
  ["<ul><li>Do we have any 'Redis instance' running?</li><li>Does it have established connections?</li></ul>", "Even if you're a 'Postgres admin'"],
  ["<ul><li>What 'Java versions' are we using?</li><li>Is there any connected to the world directly?</li></ul>", "Even if you're the 'technical writer'"],
  ["<ul><li>Do all our 'servers' have a recent 'backup'?</li><li>Are they showing any alert?</li></ul>", "Even if you're the 'audio support' new hire"],
  ["<ul><li>Are we 'monitoring' all our 'servers', 'services' and 'running processes'?</li></ul>", "Even if you have more than 5 monitoring systems and are the 'technical writer' with no access to production's environment"],
  ["<ul><li>Who's 'AD password' expires this week?</li></ul>", "Even if you're the 'UNIX admin'"],
  ["<ul><li>What 'Windows servers' aren't joined to the domain?</li></ul>", "Even if you're the 'UNIX admin'"],
  ["<ul><li>What 'listening sockets' do we have?</li><li>Is there any directly on the DMZ?</li></ul>", "Even if you're the 'SCRUM master'"],
  ["<ul><li>Who's the 'manager' of that 'person'?</li><li>Does he/she 'own' any service?</li></ul>", "Even if it's your first day on the company"]
]

var samples = [
  'Predicting the impact of a change to services, people or business outcomes.',
  'Understanding the business and operational impact of a problem and who should fix it.',
  'Auditing spending by IT function, business unit, vendor, or any other pivot.',
  'Finding the differences between two data centers (including on-premise and cloud).',
  'Finding the functional differences between staging and production environments.',
  'Aggregating and escalating alerts by impact and ownership (not just text-matching).',
  'Documenting services (including inventory lists and architecture diagrams).',
  'Training, ownership hand-off, on-boarding and identification of skills by role, function, etc.',
  'Inventory of everything, everywhere (discovery, mapping of key metrics, classification, up-to-date).',
  'Answering, with certainty, if we are vulnerable or exposed to a threat.',
  'Auditing infrastructure for policy compliance throughout cloud and on-premise environments.',
  'Calculating how hundreds of simultaneous events may be related and general "problem management".',
  'Finding documents, dependencies, stakeholders and recent changes related to subject of interest.',
  'Identifying running processes, exposed services, established connections, listening sockets, etc.',
  'Auditing and measuring monitoring coverage. Even on multiple monitoring systems.',
  'Auditing and measuring backup, disaster-recovery and documentation coverage.',
  'Identifying rogue services, changed configurations, extraneous infrastructure.',
  'Calculating the "footprints" of team members, contractors or users. Auditing on/offboarding processes.',
  'Finding out what configuration changes are happening, anywhere. And how they impact the business.'
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
  var question_index = Math.floor(Math.random() * questions.length)
  function change_question() {
    if (question_index == questions.length) { question_index = 0 }
    $('#question').fadeOut(500, function() {
      $(this).html(questions[question_index][0]).fadeIn(500)
    })
    $('#qrole').fadeOut(500, function() {
      $(this).html(questions[question_index][1]).fadeIn(500)
    })
    question_index += 1
  }

  $(() => setInterval(change_process, 9000))
  $(() => setInterval(change_question, 9000))
})
