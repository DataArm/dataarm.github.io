var questions = [
  ["<ul><li>What's the 'technology' behind that?</li><li>Is it on-premise or in some cloud?</li></ul>"],
  ["<ul><li>Who's using that 'IP Address'</li><li>and on what network switch?</li></ul>"],
  ["<ul><li>Is that 'IP Address' ours?</li><li>Which AWS region is it on?</li></ul>"],
  ["<ul><li>Where's that 'MAC Address'?</li><li>What IP address is it related to?</li></ul>"],
  ["<ul><li>What 'regions' do we use?</li><li>Can we shut down any one to save money?</li></ul>"],
  ["<ul><li>Who created that 'EC2 instance'?</li><li>When did that happen?</li></ul>"],
  ["<ul><li>Where's that 'Kubernetes pod'?</li><li>Is it listening on the network?</li></ul>"],
  ["<ul><li>Who's using that 'F5 LTM Pool'?</li><li>Is it doing load-balancing?</li></ul>"],
  ["<ul><li>What 'subnets' are on 'InfoBlox DHCP'?</li><li>Are they fully utilized?</li></ul>"],
  ["<ul><li>Which 'Zones' are we delegating?</li><li>How many reverse records are we missing?</li></ul>"],
  ["<ul><li>What 'CNAME' records are we using?</li><li>Any of them pointing to external providers?</li></ul>"],
  ["<ul><li>What 'PTR' or 'MX' records are we using?</li><li>Do we depend on external mail providers?</li></ul>"],
  ["<ul><li>Which 'VM' is using that 'storage volume'?</li><li>Is it SRM protected?</li></ul>"],
  ["<ul><li>What 'storage volumes' are we using?</li><li>Is there any idle disk?</li></ul>"],
  ["<ul><li>Which service is on the 'DMZ VLAN'?</li><li>Who owns them?</li></ul>"],
  ["<ul><li>What 'Oracle version' do we use?</li><li>How many instances do we have?</li></ul>"],
  ["<ul><li>Do we have any 'MariaDB' server?</li><li>Do they have active connections?</li></ul>"],
  ["<ul><li>Who  owns this 'service'?</li><li>What are the maintenance windows?</li></ul>"],
  ["<ul><li>Who's the 'business owner' for this service?</li><li>Who's the operator?</li></ul>"],
  ["<ul><li>How many  'physical servers' do we have?</li><li>Are they all in the same enclosure?</li></ul>"],
  ["<ul><li>Where's that 'Windows VM'?</li><li>Is it running an RDP service?</li></ul>"],
  ["<ul><li>Which are the 'entrypoints' for my 'environment'?</li><li>What do I need to duplicate it?</li></ul>"],
  ["<ul><li>What's the list of our 'services'?</li><li>Which ones are most critical to accounting?</li></ul>"],
  ["<ul><li>What's our list of 'public URLs'?</li><li>Are all of them under TLS?</li></ul>"],
  ["<ul><li>Where's the 'documentation' for 'that'?</li><li>Where is it running from?</li></ul>"],
  ["<ul><li>What's the 'diagram' for that 'service'?</li><li>Is it running any Memcached service?</li></ul>"],
  ["<ul><li>Who's 'logged' into that 'server'?</li><li>What's the source IP address?</li></ul>"],
  ["<ul><li>Are we running a 'vulnerable version' of that?</li><li>Who owns the 'service'?</li></ul>"],
  ["<ul><li>Who's using that 'S3 bucket'?</li><li>When was it created?</li></ul>"],
  ["<ul><li>What's the 'impact' of this 'problem'?</li><li>Who do I escalate it to?</li></ul>"],
  ["<ul><li>What's the 'impact' of this 'problem'?</li><li>Can it wait until tomorrow?</li></ul>"],
  ["<ul><li>Who's listening on port '8080'?</li><li>What's the name of the process?</li></ul>"],
  ["<ul><li>What 'container' does that 'URL' go to?</li><li>Is it going through the CDN?</li></ul>"],
  ["<ul><li>Where's 'Postfix MTA' running?</li><li>Is it also listening on localhost?</li></ul>"],
  ["<ul><li>Which 'users' are members of this 'AD group'?</li><li>Who's their direct manager?</li></ul>"],
  ["<ul><li>What 'AD groups' do we have?</li><li>Is there any group with not members?</li></ul>"],
  ["<ul><li>What users have 'SUDO' rights?</li><li>Is there any currently logged in?</li></ul>"],
  ["<ul><li>Do we have any 'Redis instance' running?</li><li>Does it have established connections?</li></ul>"],
  ["<ul><li>What 'Java versions' are we using?</li><li>Is any one connected to the world directly?</li></ul>"],
  ["<ul><li>Do all our 'servers' have a recent 'backup'?</li><li>Are they showing any alert?</li></ul>"],
  ["<ul><li>Are we 'monitoring' all our 'servers', 'services'</li><li>and 'running processes'?</li></ul>"],
  ["<ul><li>Who's 'AD password' expires this week?</li><li>And next week?</li></ul>"],
  ["<ul><li>What 'Windows servers' are joined to the domain?</li><li>Which ones aren not?</li></ul>"],
  ["<ul><li>What 'listening sockets' do we have?</li><li>Is there any directly on the DMZ?</li></ul>"],
  ["<ul><li>Who's the 'manager' of that 'person'?</li><li>Does he/she 'own' any service?</li></ul>"]
]

var processes = [
  '<p>Predict the impact of a change to services, people or business outcomes</p>',
  '<p>Understand the business and operational impact of a problem and who should fix it</p>',
  '<p>Audit spending by IT function, business unit, vendor, or any other pivot</p>',
  '<p>Find the differences between two data centers (including on-premise and cloud)</p>',
  '<p>Find the functional differences between staging and production environments</p>',
  '<p>Aggregate and escalate alerts by impact and ownership (not just text-matching)</p>',
  '<p>Document services (including inventory lists and architecture diagrams)</p>',
  '<p>Training, ownership hand-off, on-boarding and identification of skills by role, function, etc</p>',
  '<p>Inventory of everything, everywhere (discovery, mapping of key metrics, classification, up-to-date)</p>',
  '<p>Answer with certainty if we are vulnerable or exposed to a threat</p>',
  '<p>Audit infrastructure for policy compliance throughout cloud and on-premise environments</p>',
  '<p>Calculate how hundreds of simultaneous events may be inter-related</p>',
  '<p>Find documents, dependencies, stakeholders and recent changes related to a subject of interest</p>',
  '<p>Identify running processes, exposed services, established connections, listening sockets, etc</p>',
  '<p>Audit and measure monitoring coverage. Even on multiple monitoring systems</p>',
  '<p>Audit and measure backup, disaster-recovery and documentation coverage</p>',
  '<p>Identify rogue services, changed configurations, extraneous infrastructure</p>',
  '<p>Determine the "digital traces" of team members, contractors or users for staffing changes.</p>',
  '<p>Determine what configuration changes are happening, anywhere. And how they impact the business</p>'
]


$(document).ready(function() {
  activateTextFader('#proc', processes, 9000)
  activateTextFader('#question', questions, 9000)
  $(() => setInterval(animateOctopus, 9000))
})


function activateTextFader(node, textArray, displayTime) {

  var isPaused = false
  var currentIndex = 0

  textArray = shuffle(textArray)

  createFadeControls()

  changeText()
  $(() => setInterval(changeText, displayTime))


  function createFadeControls() {
    $(node).after("<div class='text-fade-controls'></div>")

    var controlsContainer = $(node).next()

    var backward = document.createElement('i')
    backward.className = 'fa fa-backward'
    controlsContainer.append(backward)
    backward.onclick = backwardClick

    var play = document.createElement('i')
    play.className = 'fa fa-play hidden'
    controlsContainer.append(play)
    play.onclick = playClick

    var pause = document.createElement('i')
    pause.className = 'fa fa-pause'
    controlsContainer.append(pause)
    pause.onclick = pauseClick

    var forward = document.createElement('i')
    forward.className = 'fa fa-forward'
    controlsContainer.append(forward)
    forward.onclick = forwardClick
  }

  function pauseClick() {
    isPaused = true
    $(this).addClass('hidden')
    $(this).parent().find('.fa-play').removeClass('hidden')
  }

  function playClick() {
    isPaused = false
    $(this).addClass('hidden')
    $(this).parent().find('.fa-pause').removeClass('hidden')
  }

  function forwardClick() {
    incrementCurrentIndex()
    animateText()
  }

  function backwardClick() {
    decrementCurrentIndex()
    animateText()
  }

  function animateText() {
    $(node).animate({opacity: 0}, 500, function() {
      $(this).html(textArray[currentIndex]).animate({opacity: 1}, 500)
    })
  }

  function incrementCurrentIndex() {
    if(currentIndex<textArray.length-1) {
      currentIndex = currentIndex + 1
    }else{
      currentIndex = 0
    }
  }

  function decrementCurrentIndex() {
    if(currentIndex>0) {
      currentIndex = currentIndex - 1
    }else{
      currentIndex = textArray.length-1
    }
  }

  function changeText() {
    if(!isPaused) {
      animateText()
      incrementCurrentIndex()
    }
  }

}

function shuffle(a) {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}


function animateOctopus() {

  var src = $('.img-octopus').attr('src')
  var number = parseInt(src.match(/\d+/)[0])

  number = (number< 4) ? number + 1 : 0

  $('.img-octopus-wrapper').animate({opacity: 0}, 500, function() {
    $(this).html("<img src='./images/img-octopus-" + number +".png' class='img-octopus img-fluid mx-auto'>").animate({opacity: 1}, 500)
  })

}
