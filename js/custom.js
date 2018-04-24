var questions = [
  ["<ul><li><p>What's the 'technology' behind that?             </p></li><li><p>Is it on-premise or in some cloud?         </p></li></ul><p>Even if you're not the 'architect'               </p>"],
  ["<ul><li><p>Who's using that 'IP Address'                    </p></li><li><p>and on what network switch?                </p></li></ul><p>Even if you're not the 'Network admin'           </p>"],
  ["<ul><li><p>Is that 'IP Address' ours?                       </p></li><li><p>Which AWS region is it on?                 </p></li></ul><p>Even if you're not the 'Network engineer'        </p>"],
  ["<ul><li><p>Where's that 'MAC Address'?                      </p></li><li><p>What IP address is it related to?          </p></li></ul><p>Even if you're not a 'Network expert'            </p>"],
  ["<ul><li><p>What 'regions' do we use?                        </p></li><li><p>Can we shut down any one to save money?    </p></li></ul><p>Even if you're not an 'AWS expert'               </p>"],
  ["<ul><li><p>Who created that 'EC2 instance'?                 </p></li><li><p>When did that happen?                      </p></li></ul><p>Even if you have never used the 'AWS console'    </p>"],
  ["<ul><li><p>Where's that 'Kubernetes pod'?                   </p></li><li><p>Is it listening on the network?            </p></li></ul><p>Even if you're not a 'K8 expert'                 </p>"],
  ["<ul><li><p>Who's using that 'F5 LTM Pool'?                  </p></li><li><p>Is it doing load-balancing?                </p></li></ul><p>Even if you're not a 'BigIP expert'              </p>"],
  ["<ul><li><p>What 'subnets' are on 'InfoBlox DHCP'?           </p></li><li><p>Are they fully utilized?                   </p></li></ul><p>Even if you're not an 'IPAM expert'              </p>"],
  ["<ul><li><p>Which 'Zones' are we delegating?                 </p></li><li><p>How many reverse records are we missing?   </p></li></ul><p>Even if you're not a 'DNS expert'                </p>"],
  ["<ul><li><p>What 'CNAME' records are we using?               </p></li><li><p>Any of them pointing to external providers?</p></li></ul><p>Even if you're not a 'DNS expert'                </p>"],
  ["<ul><li><p>What 'PTR' or 'MX' records are we using?         </p></li><li><p>Do we depend on external mail providers?   </p></li></ul><p>Even if you're not a 'DNS expert'                </p>"],
  ["<ul><li><p>Which 'VM' is using that 'storage volume'?       </p></li><li><p>Is it SRM protected?                       </p></li></ul><p>Even if you're not a 'VMWare expert'             </p>"],
  ["<ul><li><p>What 'storage volumes' are we using?             </p></li><li><p>Is there any idle disk?                    </p></li></ul><p>Even if you're not a 'Compellent expert'         </p>"],
  ["<ul><li><p>Which service is on the 'DMZ VLAN'?              </p></li><li><p>Who owns them?                             </p></li></ul><p>Even if you're not a 'network routing expert'    </p>"],
  ["<ul><li><p>What 'Oracle version' do we use?                 </p></li><li><p>How many instances do we have?             </p></li></ul><p>Even if the 'DBA' is on vacation                 </p>"],
  ["<ul><li><p>Do we have any 'MariaDB' server?                 </p></li><li><p>Do they have active connections?           </p></li></ul><p>Even if you only use 'NoSQL'                     </p>"],
  ["<ul><li><p>Who  owns this 'service'?                        </p></li><li><p>What are the maintenance windows?          </p></li></ul><p>Even if it is your first day on the job          </p>"],
  ["<ul><li><p>Who's the 'business owner' for this service?     </p></li><li><p>Who's the operator?                        </p></li></ul><p>Even if you're an outsourced 'NOC engineer'      </p>"],
  ["<ul><li><p>How many  'physical servers' do we have?         </p></li><li><p>Are they all in the same enclosure?        </p></li></ul><p>Even if you've never visited the 'COLO'          </p>"],
  ["<ul><li><p>Where's that 'Windows VM'?                       </p></li><li><p>Is it running an RDP service?              </p></li></ul><p>Even if you're not an 'Azure expert'             </p>"],
  ["<ul><li><p>Which are the 'entrypoints' for my 'environment'?</p></li><li><p>What do I need to duplicate it?            </p></li></ul><p>Even if you're the 'project manager'             </p>"],
  ["<ul><li><p>What's the list of our 'services'?               </p></li><li><p>Which ones are most critical to accounting?</p></li></ul><p>Even if you're the 'CFO'                         </p>"],
  ["<ul><li><p>What's our list of 'public URLs'?                </p></li><li><p>Are all of them under TLS?                 </p></li></ul><p>Even if you don't know what a 'CDN' is           </p>"],
  ["<ul><li><p>Where's the 'documentation' for 'that'?          </p></li><li><p>Where is it running from?                  </p></li></ul><p>Even on your first day on the job                </p>"],
  ["<ul><li><p>What's the 'diagram' for that 'service'?         </p></li><li><p>Is it running any Memcached service?       </p></li></ul><p>Even if you haven't heard about 'Visio'          </p>"],
  ["<ul><li><p>Who's 'logged' into that 'server'?               </p></li><li><p>What's the source IP address?              </p></li></ul><p>Even if you don't know 'last' from 'who'         </p>"],
  ["<ul><li><p>Are we running a 'vulnerable version' of that?   </p></li><li><p>Who owns the 'service'?                    </p></li></ul><p>Even if you're the 'deputy COO'                  </p>"],
  ["<ul><li><p>Who's using that 'S3 bucket'?                    </p></li><li><p>When was it created?                       </p></li></ul><p>Even if you're the 'product owner'               </p>"],
  ["<ul><li><p>What's the 'impact' of this 'problem'?           </p></li><li><p>Who do I escalte it to?                    </p></li></ul><p>Even if you're a 'trainee'                       </p>"],
  ["<ul><li><p>What's the 'impact' of this 'problem'?           </p></li><li><p>Can it wait until tomorrow?                </p></li></ul><p>Even on your first day on the job                </p>"],
  ["<ul><li><p>Who's listening on port '8080'?                  </p></li><li><p>What's the name of the process?            </p></li></ul><p>Even if you're the 'QA engineer'                 </p>"],
  ["<ul><li><p>What 'container' does that 'URL' go to?          </p></li><li><p>Is it going through the CDN?               </p></li></ul><p>Even if you can't tell 'Docker' from 'Kubernetes'</p>"],
  ["<ul><li><p>Where's 'Postfix MTA' running?                   </p></li><li><p>Is it also listening on localhost?         </p></li></ul><p>Even if you're the 'ActiveDirectory admin'       </p>"],
  ["<ul><li><p>Which 'users' are members of this 'AD group'?    </p></li><li><p>Who's their direct manager?                </p></li></ul><p>Even if you're the 'Linux engineer'              </p>"],
  ["<ul><li><p>What 'AD groups' do we have?                     </p></li><li><p>Is there any group with not members?       </p></li></ul><p>Even if you're the 'Java developer'              </p>"],
  ["<ul><li><p>What users have 'SUDO' rights?                   </p></li><li><p>Is there any currently logged in?          </p></li></ul><p>Even if you're the '.Net developer'              </p>"],
  ["<ul><li><p>Do we have any 'Redis instance' running?         </p></li><li><p>Does it have established connections?      </p></li></ul><p>Even if you're a 'Postgres admin'                </p>"],
  ["<ul><li><p>What 'Java versions' are we using?               </p></li><li><p>Is any one connected to the world directly?</p></li></ul><p>Even if you're the 'technical writer'            </p>"],
  ["<ul><li><p>Do all our 'servers' have a recent 'backup'?     </p></li><li><p>Are they showing any alert?                </p></li></ul><p>Even if you're the 'audio support' new hire      </p>"],
  ["<ul><li><p>Are we 'monitoring' all our 'servers', 'services'</p></li><li><p>and 'running processes'?                   </p></li></ul><p>Even if you have more than 5 monitoring systems  </p>"],
  ["<ul><li><p>Who's 'AD password' expires this week?           </p></li><li><p>And next week?                             </p></li></ul><p>Even if you're the 'UNIX admin'                  </p>"],
  ["<ul><li><p>What 'Windows servers' are joined to the domain? </p></li><li><p>Which ones aren not?                       </p></li></ul><p>Even if you're the 'UNIX admin'                  </p>"],
  ["<ul><li><p>What 'listening sockets' do we have?             </p></li><li><p>Is there any directly on the DMZ?          </p></li></ul><p>Even if you're the 'SCRUM master'                </p>"],
  ["<ul><li><p>Who's the 'manager' of that 'person'?            </p></li><li><p>Does he/she 'own' any service?             </p></li></ul><p>Even if it's your first day on the company       </p>"]
]

var processes = [
  '<p>Predicting the impact of a change to services, people or business outcomes.                           </p>',
  '<p>Understanding the business and operational impact of a problem and who should fix it.                 </p>',
  '<p>Auditing spending by IT function, business unit, vendor, or any other pivot.                          </p>',
  '<p>Finding the differences between two data centers (including on-premise and cloud).                    </p>',
  '<p>Finding the functional differences between staging and production environments.                       </p>',
  '<p>Aggregating and escalating alerts by impact and ownership (not just text-matching).                   </p>',
  '<p>Documenting services (including inventory lists and architecture diagrams).                           </p>',
  '<p>Training, ownership hand-off, on-boarding and identification of skills by role, function, etc.        </p>',
  '<p>Inventory of everything, everywhere (discovery, mapping of key metrics, classification, up-to-date).  </p>',
  '<p>Answering, with certainty, if we are vulnerable or exposed to a threat.                               </p>',
  '<p>Auditing infrastructure for policy compliance throughout cloud and on-premise environments.           </p>',
  '<p>Calculating how hundreds of simultaneous events may be related and general "problem management".      </p>',
  '<p>Finding documents, dependencies, stakeholders and recent changes related to subject of interest.      </p>',
  '<p>Identifying running processes, exposed services, established connections, listening sockets, etc.     </p>',
  '<p>Auditing and measuring monitoring coverage. Even on multiple monitoring systems.                      </p>',
  '<p>Auditing and measuring backup, disaster-recovery and documentation coverage.                          </p>',
  '<p>Identifying rogue services, changed configurations, extraneous infrastructure.                        </p>',
  '<p>Calculating the "footprints" of team members, contractors or users. Auditing on/offboarding processes.</p>',
  '<p>Finding out what configuration changes are happening, anywhere. And how they impact the business.     </p>'
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
