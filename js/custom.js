var questions = [
  ["What's the 'technology' behind that? Is it on-premise or in some cloud?", "Even if you're not the 'architect'"],
  ["Who's using that 'IP Address' and on what network switch?", "Even if you're not the 'Network admin'"],
  ["Is that 'IP Address' ours? Which AWS region is it on?", "Even if you're not the 'Network engineer'"],
  ["Where's that 'MAC Address'? What IP address is it related to?", "Even if you're not a 'Network expert'"],
  ["What 'regions' do we use? Do we have things we can shut down to save money?", "Even if you're not an 'AWS expert'"],
  ["Who created that 'EC2 instance'? When did that happen?", "Even if you have never used the 'AWS console'"],
  ["Where's that 'Kubernetes pod'? Is it listening on the network?", "Even if you're not a 'K8 expert'"],
  ["Who's using that 'F5 LTM Pool'? Is it doing load-balancing?", "Even if you're not a 'BigIP expert'"],
  ["What 'subnets' are on 'InfoBlox DHCP'? Are they fully utilized?", "Even if you're not an 'IPAM expert'"],
  ["Which 'Zones' are we delegating? How many reverse records are we missing?", "Even if you're not a 'DNS expert'"],
  ["What 'CNAME' records are we using? Is there any of them pointing to external providers?", "Even if you're not a 'DNS expert'"],
  ["What 'PTR' or 'MX' records are we using? Do we depend on external mail providers?", "Even if you're not a 'DNS expert'"],
  ["Which 'VM' is using that 'storage volume'? Is it SRM protected?", "Even if you're not a 'VMWare expert'"],
  ["What 'storage volumes' are we using? Is there any idle disk?", "Even if you're not a 'Compellent expert'"],
  ["Which service is on the 'DMZ VLAN'? Who owns them?", "Even if you're not a 'network routing expert'"],
  ["What 'Oracle version' do we use? How many instances do we have?", "Even if the 'DBA' is on vacation"],
  ["Do we have any 'MariaDB' server? Do they have active connections?", "Even if you only use 'NoSQL'"],
  ["Who  owns this 'service'? What are the maintenance windows?", "Even if it is your first day on the job"],
  ["Who's the 'business owner' for this service? Who's the operator?", "Even if you're an outsourced 'NOC engineer'"],
  ["How many  'physical servers' do we have? Are they all in the same enclosure?", "Even if you've never visited the 'COLO'"],
  ["Where's that 'Windows VM'? Is it running an RDP service?", "Even if you're not an 'Azure expert'"],
  ["Which are the 'entrypoints' for my 'environment'? What do I need to duplicate it?", "Even if you're the 'project manager'"],
  ["What's the list of our 'services'? Which ones are most critical to accounting?", "Even if you're the 'CFO'"],
  ["What's our list of 'public URLs'? Are all of them under TLS?", "Even if you don't know what a 'CDN' is"],
  ["Where's the 'documentation' for 'that'? Where is it running from?", "Even on your first day on the job"],
  ["What's the 'diagram' for that 'service'? Is it running any Memcached service?", "Even if you haven't heard about 'Visio'"],
  ["Who's 'logged' into that 'server'? What's the source IP address?", "Even if you don't know 'last' from 'who'"],
  ["Are we running a 'vulnerable version' of that? Who owns the 'service'?", "Even if you're the 'deputy COO'"],
  ["Who's using that 'S3 bucket'? When was it created?", "Even if you're the 'product owner'"],
  ["What's the 'impact' of this 'problem'? Who do I escalte it to?", "Even if you're a 'trainee'"],
  ["What's the 'impact' of this 'problem'? Can it wait until tomorrow?", "Even on your first day on the job"],
  ["Who's listening on port '8080'? What's the name of the process?", "Even if you're the 'QA engineer'"],
  ["What 'container' does that 'URL' go to? Is it going through the CDN?", "Even if you can't tell 'Docker' from 'Kubernetes'"],
  ["Where's 'Postfix MTA' running? Is it also listening on localhost?", "Even if you're the 'ActiveDirectory admin'"],
  ["Which 'users' are members of this 'AD group'? Who's their direct manager?", "Even if you're the 'Linux engineer'"],
  ["What 'AD groups' do we have? Is there any group with not members?", "Even if you're the 'Java developer'"],
  ["What users have 'SUDO' rights? Is there any currently logged in?", "Even if you're the '.Net developer'"],
  ["Do we have any 'Redis instance' running? Does it have established connections?", "Even if you're a 'Postgres admin'"],
  ["What 'Java versions' are we using? Is there any connected to the world directly?", "Even if you're the 'technical writer'"],
  ["Do all our 'servers' have a recent 'backup'? Are they showing any alert?", "Even if you're the 'audio support' new hire"],
  ["Are we 'monitoring' all our 'servers', 'services' and 'running processes'?", "Even if you have more than 5 monitoring systems and are the 'technical writer' with no access to production's environment"],
  ["Who's 'AD password' expires this week?", "Even if you're the 'UNIX admin'"],
  ["What 'Windows servers' aren't joined to the domain?", "Even if you're the 'UNIX admin'"],
  ["What 'listening sockets' do we have? Is there any directly on the DMZ?", "Even if you're the 'SCRUM master'"],
  ["Who's the 'manager' of that 'person'? Does he/she 'own' any service?", "Even if it's your first day on the company"]
]

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

  $(() => setInterval(change_process, 8500))
  $(() => setInterval(change_question, 11500))
})
