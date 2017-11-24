var short_questions = [
  {"<h2>What's the 'tech' for that?</h2>": "<h5>even if you're not the 'architect'</h5>"},
  {"<h2>Who's using that 'IP Address'?</h2>": "<h5>even if you're not the 'Network admin'</h5>"},
  {"<h2>Is that 'IP Address' ours?</h2>": "<h5>even if you're not the 'Network engineer'</h5>"},
  {"<h2>Where's that 'MAC Address'?</h2>": "<h5>even if you're not a 'Network expert'</h5>"},
  {"<h2>What 'regions' do we use?</h2>": "<h5>even if you're not an 'AWS expert'</h5>"},
  {"<h2>Who created that 'EC2 instance'?</h2>": "<h5>even if you have never used the 'AWS console'</h5>"},
  {"<h2>Where's that 'Kubernetes pod'?</h2>": "<h5>even if you're not a 'K8 expert'</h5>"},
  {"<h2>Who's using that 'F5 LTM Pool'?</h2>": "<h5>even if you're not a 'BigIP expert'</h5>"},
  {"<h2>What 'subnets' are on 'InfoBlox DHCP'?</h2>": "<h5>even if you're not an 'IPAM expert'</h5>"},
  {"<h2>Which 'Zones' are we delegating?</h2>": "<h5>even if you're not a 'DNS expert'</h5>"},
  {"<h2>What 'CNAME' records are we using?</h2>": "<h5>even if you're not a 'DNS expert'</h5>"},
  {"<h2>What 'PTR' or 'MX' records are we using?</h2>": "<h5>even if you're not a 'DNS expert'</h5>"},
  {"<h2>Which 'VM' is using that 'volume'?</h2>": "<h5>even if you're not a 'VMWare expert'</h5>"},
  {"<h2>What 'storage volumes' are using?</h2>": "<h5>even if you're not a 'Compellent expert'</h5>"},
  {"<h2>Which service is on the 'DMZ VLAN'?</h2>": "<h5>even if you're not a 'network routing expert'</h5>"},
  {"<h2>What 'Oracle version' do we use?</h2>": "<h5>even if the 'DBA' is on vacation</h5>"},
  {"<h2>Do we have any 'MariaDB' server?</h2>": "<h5>even if you only use 'NoSQL'</h5>"},
  {"<h2>Who  owns this 'service'?</h2>": "<h5>even if it is your first day on the job</h5>"},
  {"<h2>Who's the 'business owner'?</h2>": "<h5>even if you're an outsourced 'NOC engineer'</h5>"},
  {"<h2>How many  'physical servers' do we have?</h2>": "<h5>even if you've never visited the 'COLO'</h5>"},
  {"<h2>Where's that 'Windows VM'?</h2>": "<h5>even if you're not an 'Azure expert'</h5>"},
  {"<h2>Which are the 'entrypoints' for my 'environment'?</h2>": "<h5>even if you're the 'project manager'</h5>"},
  {"<h2>What's the list of our 'services'?</h2>": "<h5>even if you're the 'CFO'</h5>"},
  {"<h2>What's our list of 'public URLs'?</h2>": "<h5>even if you don't know what a 'CDN' is</h5>"},
  {"<h2>Where's the 'documentation' for 'that'?</h2>": "<h5>even on your first day on the job</h5>"},
  {"<h2>What's the 'diagram' for that 'service'?</h2>": "<h5>even if you haven't heard about 'Visio'</h5>"},
  {"<h2>Who's 'logged' into that 'server'?</h2>": "<h5>even if you don't know 'last' from 'who'</h5>"},
  {"<h2>Are we running a 'vulnerable version' of that?</h2>": "<h5>even if you're the 'deputy COO'</h5>"},
  {"<h2>Who's using that 'S3 bucket'?</h2>": "<h5>even if you're the 'product owner'</h5>"},
  {"<h2>What's the 'impact' of this 'problem'?</h2>": "<h5>even if you're a 'trainee'</h5>"},
  {"<h2>What's the 'impact' of this 'problem'?</h2>": "<h5>even on your first day on the job</h5>"},
  {"<h2>What's the 'impact' of this 'problem'?</h2>": "<h5>even if you're the 'iPhone developer'</h5>"},
  {"<h2>What's the 'impact' of this 'problem'?</h2>": "<h5>even if you're the 'graphic artist'</h5>"},
  {"<h2>What's the 'impact' of this 'problem'?</h2>": "<h5>even if you're in the 'HR department'</h5>"},
  {"<h2>What's the 'impact' of this 'problem'?</h2>": "<h5>even if you're the 'store manager'</h5>"},
  {"<h2>Who's listening on port '8080'?</h2>": "<h5>even if you're the 'QA engineer'</h5>"},
  {"<h2>What 'container' does that 'URL' go to?</h2>": "<h5>even if you can't tell 'Docker' from 'Kubernetes'</h5>"},
  {"<h2>Where's 'Postfix MTA' running?</h2>": "<h5>even if you're the 'ActiveDirectory admin'</h5>"},
  {"<h2>Which 'users' are members of this 'AD group'?</h2>": "<h5>even if you're the 'Linux engineer'</h5>"},
  {"<h2>What 'AD groups' do we have?</h2>": "<h5>even if you're the 'Java developer'</h5>"},
  {"<h2>What users have 'SUDO' rights?</h2>": "<h5>even if you're the '.Net developer'</h5>"},
  {"<h2>Do we have any 'Redis instance' running?</h2>": "<h5>even if you're a 'Postgres admin'</h5>"},
  {"<h2>What 'Java versions' are we using?</h2>": "<h5>even if you're the 'technical writer'</h5>"},
  {"<h2>Do all our 'servers' have a recent 'backup'?</h2>": "<h5>even if you're the 'audio support' new hire</h5>"},
  {"<h2>Are we 'monitoring' all our 'servers'?</h2>": "<h5>even if you have more than 5 monitoring systems</h5>"},
  {"<h2>Are we 'monitoring' all our 'services'?</h2>": "<h5>even if you have more than 5 monitoring systems</h5>"},
  {"<h2>Are we 'monitoring' all our 'servers'?</h2>": "<h5>even if you're the 'technical writer'</h5>"},
  {"<h2>Are we 'monitoring' all our 'services'?</h2>": "<h5>even if you're the 'CIO'</h5>"},
  {"<h2>What servers have a 'Puppet agent'?</h2>": "<h5>even if you're the 'Ansible expert'</h5>"},
  {"<h2>Who's 'AD password' expires this week?</h2>": "<h5>even if you're the 'UNIX admin'</h5>"},
  {"<h2>What 'Windows servers' aren't joined to the domain?</h2>": "<h5>even if you're the 'UNIX admin'</h5>"},
  {"<h2>What 'listening sockets' do we have?</h2>": "<h5>even if you're the 'SCRUM master'</h5>"},
  {"<h2>Who's the 'manager' of that 'person'?</h2>": "<h5>even if it's your first day on the company</h5>"}
]

var tech_phrases = [
  "Physical (IBM, Dell, etc.) and virtual (VMWare, Xen, Citrix, etc.) servers",
  "Storage volumes (Compellent, NetApp, SSD, etc.)",
  "File system mount options: NFS, iSCSI, Fibre, LVM, S3 buckets, EBS, etc.",
  "Network routing and switching (IP, VPCs, DNS/DHCP, VLANs, gateways, sniffers, etc.)",
  "Web, socket and stream load-balancers (F5's BigIP, Nginx, CDNs, etc.)",
  "Organization charts, account management, roles, etc.",
  "ACL's, security roles, IP Tables, Kerberos, LDAP, etc.",
  "SUDO rights, HSMs, CloudHSMs, SSH keys, TLS/SSL Certificates, etc.",
  "Vendors, their appliances and their support contracts",
  "SLAs and SLRs monitoring, reporting and tracking",
  "Mailing lists, mailboxes and SaaS productivity services",
  "Data centers, server racks, service tags and HW replacements",
  "Clusters and replication configurations for all kinds of services",
  "Backups, templates, restore operations",
  "Containers and orchestration of all kinds (Kubernetes, Docker, DigitalOcean, etc.)",
  "Multiple cloud providers (AWS, Azure, Google, Alibaba, etc.)",
  "Development and QA environments for multiple, constantly-changing teams and projects",
  "CI/CD pipelines (Jenkins, GoCD, Bamboo, GitLab CI, etc.)",
  "Configuration / change management (ITIL, ITSM, Puppet, Ansible, Chef, Salt, etc.)",
  "Inventory and monitoring tools (automation, aggregation and impact analysis)",
  "Complex microservices-bases systems (low network latency, complex dependencies, etc.)",
  "New, more complex build environments (NPM, YUM, CDNs, images, registries, etc.)",
  "Ever-growing storage and bandwidth usage requirements",
  "Cost analysis of cloud and SaaS providers",
  "Security scanning, patching and vulnerability assesments",
  "IoT devices, mobile handhelds, apps and tablets",
  "VPNs, SSO integrations, multi-factor authentication and hundreds of credentials"
]

var some_paradigms = [
  'SaaS economy',
  'Internet of Things (IoT) growth',
  'DevOps culture',
  'NoOps culture',
  'Agile movement',
  'DevSecOps shift',
  'DevTestOps mindset',
  'InfraCode mindset',
  'IaaS economy',
  'PaaS economy',
  'Subscription-based economy'
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
  var questions = shuffle(short_questions)
  var qindex = 0
  function change_question() {
    if (qindex == questions.length) { qindex = 0 }
    var thing = questions[qindex]
    $('#thing').fadeOut(500, function() {
      $(this).html(Object.keys(thing)[0]).fadeIn(500)
    })
    $('#role').delay(750).fadeOut(500, function() {
      $(this).html(thing[Object.keys(thing)[0]]).fadeIn(500)
    })
    qindex += 1
  }

  var techs = shuffle(tech_phrases)
  var tindex = 0
  function change_tech() {
    if (tindex == techs.length) { tindex = 0 }
    $('#tech').fadeOut(500, function() {
      $(this).html(techs[tindex]).fadeIn(500)
    })
    tindex += 1
  }

  var paradigms = shuffle(some_paradigms)
  var pindex = 0
  function change_paradigm() {
    if (pindex == paradigms.length) { pindex = 0 }
    $('#paradigm').fadeOut(500, function() {
      $(this).html(paradigms[pindex]).fadeIn(500)
    })
    pindex += 1
  }

  $(function () {
    setInterval(change_question, 6500)
  })
  $(function () {
    setInterval(change_tech, 7500)
  })
  $(function () {
    setInterval(change_paradigm, 4000)
  })
})
