var questions = [
  ["<ul><li>What's the 'technology' behind that?</li><li>Is it on-premise or in some cloud?</li></ul><p>Even if you're not the 'architect'               </p>"],
  ["<ul><li>Who's using that 'IP Address' and on what network switch?</li></ul><p>Even if you're not the 'Network admin'                                 </p>"],
  ["<ul><li>Is that 'IP Address' ours?</li><li>Which AWS region is it on?</li></ul><p>Even if you're not the 'Network engineer'                          </p>"],
  ["<ul><li>Where's that 'MAC Address'?</li><li>What IP address is it related to?</li></ul><p>Even if you're not a 'Network expert'                      </p>"],
  ["<ul><li>What 'regions' do we use?</li><li>Do we have things we can shut down to save money?</li></ul><p>Even if you're not an 'AWS expert'           </p>"],
  ["<ul><li>Who created that 'EC2 instance'?</li><li>When did that happen?</li></ul><p>Even if you have never used the 'AWS console'                     </p>"],
  ["<ul><li>Where's that 'Kubernetes pod'?</li><li>Is it listening on the network?</li></ul><p>Even if you're not a 'K8 expert'                          </p>"],
  ["<ul><li>Who's using that 'F5 LTM Pool'?</li><li>Is it doing load-balancing?</li></ul><p>Even if you're not a 'BigIP expert'                          </p>"],
  ["<ul><li>What 'subnets' are on 'InfoBlox DHCP'?</li><li>Are they fully utilized?</li></ul><p>Even if you're not an 'IPAM expert'                      </p>"],
  ["<ul><li>Which 'Zones' are we delegating?</li><li>How many reverse records are we missing?</li></ul><p>Even if you're not a 'DNS expert'              </p>"],
  ["<ul><li>What 'CNAME' records are we using?</li><li>Is there any of them pointing to external providers?</li></ul><p>Even if you're not a 'DNS expert'</p>"],
  ["<ul><li>What 'PTR' or 'MX' records are we using?</li><li>Do we depend on external mail providers?</li></ul><p>Even if you're not a 'DNS expert'      </p>"],
  ["<ul><li>Which 'VM' is using that 'storage volume'?</li><li>Is it SRM protected?</li></ul><p>Even if you're not a 'VMWare expert'                     </p>"],
  ["<ul><li>What 'storage volumes' are we using?</li><li>Is there any idle disk?</li></ul><p>Even if you're not a 'Compellent expert'                    </p>"],
  ["<ul><li>Which service is on the 'DMZ VLAN'?</li><li>Who owns them?</li></ul><p>Even if you're not a 'network routing expert'                         </p>"],
  ["<ul><li>What 'Oracle version' do we use?</li><li>How many instances do we have?</li></ul><p>Even if the 'DBA' is on vacation                         </p>"],
  ["<ul><li>Do we have any 'MariaDB' server?</li><li>Do they have active connections?</li></ul><p>Even if you only use 'NoSQL'                           </p>"],
  ["<ul><li>Who  owns this 'service'?</li><li>What are the maintenance windows?</li></ul><p>Even if it is your first day on the job                      </p>"],
  ["<ul><li>Who's the 'business owner' for this service?</li><li>Who's the operator?</li></ul><p>Even if you're an outsourced 'NOC engineer'             </p>"],
  ["<ul><li>How many  'physical servers' do we have?</li><li>Are they all in the same enclosure?</li></ul><p>Even if you've never visited the 'COLO'     </p>"],
  ["<ul><li>Where's that 'Windows VM'?</li><li>Is it running an RDP service?</li></ul><p>Even if you're not an 'Azure expert'                            </p>"],
  ["<ul><li>Which are the 'entrypoints' for my 'environment'?</li><li>What do I need to duplicate it?</li></ul><p>Even if you're the 'project manager'   </p>"],
  ["<ul><li>What's the list of our 'services'?</li><li>Which ones are most critical to accounting?</li></ul><p>Even if you're the 'CFO'                  </p>"],
  ["<ul><li>What's our list of 'public URLs'?</li><li>Are all of them under TLS?</li></ul><p>Even if you don't know what a 'CDN' is                      </p>"],
  ["<ul><li>Where's the 'documentation' for 'that'?</li><li>Where is it running from?</li></ul><p>Even on your first day on the job                      </p>"],
  ["<ul><li>What's the 'diagram' for that 'service'?</li><li>Is it running any Memcached service?</li></ul><p>Even if you haven't heard about 'Visio'    </p>"],
  ["<ul><li>Who's 'logged' into that 'server'?</li><li>What's the source IP address?</li></ul><p>Even if you don't know 'last' from 'who'                </p>"],
  ["<ul><li>Are we running a 'vulnerable version' of that?</li><li>Who owns the 'service'?</li></ul><p>Even if you're the 'deputy COO'                   </p>"],
  ["<ul><li>Who's using that 'S3 bucket'?</li><li>When was it created?</li></ul><p>Even if you're the 'product owner'                                    </p>"],
  ["<ul><li>What's the 'impact' of this 'problem'?</li><li>Who do I escalte it to?</li></ul><p>Even if you're a 'trainee'                                </p>"],
  ["<ul><li>What's the 'impact' of this 'problem'?</li><li>Can it wait until tomorrow?</li></ul><p>Even on your first day on the job                     </p>"],
  ["<ul><li>Who's listening on port '8080'?</li><li>What's the name of the process?</li></ul><p>Even if you're the 'QA engineer'                         </p>"],
  ["<ul><li>What 'container' does that 'URL' go to?</li><li>Is it going through the CDN?</li></ul><p>Even if you can't tell 'Docker' from 'Kubernetes'   </p>"],
  ["<ul><li>Where's 'Postfix MTA' running?</li><li>Is it also listening on localhost?</li></ul><p>Even if you're the 'ActiveDirectory admin'             </p>"],
  ["<ul><li>Which 'users' are members of this 'AD group'?</li><li>Who's their direct manager?</li></ul><p>Even if you're the 'Linux engineer'            </p>"],
  ["<ul><li>What 'AD groups' do we have?</li><li>Is there any group with not members?</li></ul><p>Even if you're the 'Java developer'                    </p>"],
  ["<ul><li>What users have 'SUDO' rights?</li><li>Is there any currently logged in?</li></ul><p>Even if you're the '.Net developer'                     </p>"],
  ["<ul><li>Do we have any 'Redis instance' running?</li><li>Does it have established connections?</li></ul><p>Even if you're a 'Postgres admin'         </p>"],
  ["<ul><li>What 'Java versions' are we using?</li><li>Is there any connected to the world directly?</li></ul><p>Even if you're the 'technical writer'   </p>"],
  ["<ul><li>Do all our 'servers' have a recent 'backup'?</li><li>Are they showing any alert?</li></ul><p>Even if you're the 'audio support' new hire     </p>"],
  ["<ul><li>Are we 'monitoring' all our 'servers', 'services' and 'running processes'?</li></ul><p>Even if you have more than 5 monitoring systems       </p>"],
  ["<ul><li>Who's 'AD password' expires this week?</li></ul><p>Even if you're the 'UNIX admin'                                                           </p>"],
  ["<ul><li>What 'Windows servers' aren't joined to the domain?</li></ul><p>Even if you're the 'UNIX admin'                                              </p>"],
  ["<ul><li>What 'listening sockets' do we have?</li><li>Is there any directly on the DMZ?</li></ul><p>Even if you're the 'SCRUM master'                 </p>"],
  ["<ul><li>Who's the 'manager' of that 'person'?</li><li>Does he/she 'own' any service?</li></ul><p>Even if it's your first day on the company          </p>"]
]

var processes = [
  'Predicting the impact of a change to services, people or business outcomes.                           ',
  'Understanding the business and operational impact of a problem and who should fix it.                 ',
  'Auditing spending by IT function, business unit, vendor, or any other pivot.                          ',
  'Finding the differences between two data centers (including on-premise and cloud).                    ',
  'Finding the functional differences between staging and production environments.                       ',
  'Aggregating and escalating alerts by impact and ownership (not just text-matching).                   ',
  'Documenting services (including inventory lists and architecture diagrams).                           ',
  'Training, ownership hand-off, on-boarding and identification of skills by role, function, etc.        ',
  'Inventory of everything, everywhere (discovery, mapping of key metrics, classification, up-to-date).  ',
  'Answering, with certainty, if we are vulnerable or exposed to a threat.                               ',
  'Auditing infrastructure for policy compliance throughout cloud and on-premise environments.           ',
  'Calculating how hundreds of simultaneous events may be related and general "problem management".      ',
  'Finding documents, dependencies, stakeholders and recent changes related to subject of interest.      ',
  'Identifying running processes, exposed services, established connections, listening sockets, etc.     ',
  'Auditing and measuring monitoring coverage. Even on multiple monitoring systems.                      ',
  'Auditing and measuring backup, disaster-recovery and documentation coverage.                          ',
  'Identifying rogue services, changed configurations, extraneous infrastructure.                        ',
  'Calculating the "footprints" of team members, contractors or users. Auditing on/offboarding processes.',
  'Finding out what configuration changes are happening, anywhere. And how they impact the business.     '
]


$(document).ready(function(){
  activateTextFader('#proc', processes, 9000);
  activateTextFader('#question', questions, 9000);
});


function activateTextFader(node, textArray, displayTime){

  var isPaused = false;
  var currentIndex = 0;

  textArray = shuffle(textArray);

  createFadeControls();

  changeText();
  $(() => setInterval(changeText, displayTime))
  

  function createFadeControls(){
    $(node).after("<div class='text-fade-controls'></div>");

    var controlsContainer = $(node).next();

    var backward = document.createElement('i');
    backward.className = 'fa fa-backward'; 
    controlsContainer.append(backward);
    backward.onclick = backwardClick;

    var play = document.createElement('i');
    play.className = 'fa fa-play hidden'; 
    controlsContainer.append(play);
    play.onclick = playClick;
    
    var pause = document.createElement('i');
    pause.className = 'fa fa-pause'; 
    controlsContainer.append(pause);
    pause.onclick = pauseClick;

    var forward = document.createElement('i');
    forward.className = 'fa fa-forward'; 
    controlsContainer.append(forward);
    forward.onclick = forwardClick;
  }

  function pauseClick(){
    isPaused = true;
    $(this).addClass('hidden');
    $(this).parent().find('.fa-play').removeClass('hidden')
  }

  function playClick(){
    isPaused = false;
    $(this).addClass('hidden');
    $(this).parent().find('.fa-pause').removeClass('hidden')
  }

  function forwardClick(){
    incrementCurrentIndex();
    animateText();
  }

  function backwardClick(){
    decrementCurrentIndex();
    animateText();
  }

  function animateText(){
    $(node).fadeOut(500, function() {
      $(this).html(textArray[currentIndex]).fadeIn(500);
    })
  }

  function incrementCurrentIndex(){
    if(currentIndex<textArray.length-1){
      currentIndex = currentIndex + 1;
    }else{
      currentIndex = 0;
    }
  }

  function decrementCurrentIndex(){
    if(currentIndex>0){
      currentIndex = currentIndex - 1;
    }else{
      currentIndex = textArray.length-1;
    }
  }

  function changeText() {
    if(!isPaused){
      animateText();
      incrementCurrentIndex();
    }
  }

}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}