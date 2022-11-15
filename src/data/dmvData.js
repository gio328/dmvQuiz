import Images from "../images";

const dmvData = [
    {
        question: 'This symbol implies that',
        answers: ['The upcoming road is blocked', 'A railroad crossing is up ahead', 'A highway intersection is up ahead', 'The road up ahead is being fixed'],
        correct: 2,
        img: <img src={Images.railroadSign} alt="Rail Road Sign" width="130" height="130" />
    },

    {
        question: 'If you see this warning on a road with limited access you should',
        answers: ['Not go faster than 30 MPH when you leave the freeway ', '30 MPH is a good pace to reach in order to overtake the car in front of you', 'When leaving the highway go at least 30 mph', '30 more miles until the next exit to be driven'],
        correct: 1,
        img: <img src={Images.exit30mph} alt="30 mph exit" width="130" height="130" />
    },    
    {
        question: 'Which of these pavement markings delineates a lane\'s two corresponding directions?',
        answers: ['A', 'B', 'C', 'Not the aforemetioned'],
        correct: 3,
        img: <img src={Images.pavementMarking} alt="Pavement Marking" width="200" height="130" />
    },    
    {
        question: 'This symbol denotes',
        answers: ['A flagger in front', 'Ahead is a school zone', 'A construction team is in front', 'An ambulance up ahead'],
        correct: 1,
        img: <img src={Images.flagger} alt="flagger" width="130" height="130" />
    },
    {
        question: ' You must _____ when you see this sign',
        answers: ['After turning left, turn right', 'Take quick turns', 'Hurry up', 'Slow down'],
        correct: 4,
        img: <img src={Images.slippery} alt="slippery sign" width="130" height="130" />
    },
    {
        question: 'What does this road sign mean ?',
        answers: ['A railroad overpass', 'A hospital', 'A junction', 'A crosswalk'],
        correct: 3,
        img: <img src={Images.crossroads} alt="crossroad" width="130" height="130" />
    },
    {
        question: 'This marker denotes',
        answers: ['A right turn is coming', 'Ahead is a double curve', 'An upward curve to the right', 'A crooked path is ahead'],
        correct: 2,
        img: <img src={Images.doublecurve} alt="double curve" width="130" height="130" />
    },
    {
        question: 'The shape of this sign tells you',
        answers: ['No-zone in front', 'Ahead is no passing zone', 'There is a two-way street ahead', 'Traffic combining up ahead'],
        correct: 2,
        img: <img src={Images.nopassingZone} alt="no passing zone" width="130" height="130" />
    },
    {
        question: 'What exactly does this sign mean?',
        answers: ['This route is not open to trucks.', 'Heavy-load trucks are not permitted', 'Keep an eye out for trucks entering the road', 'Ahead, the route descends in elevation'],
        correct: 4,
        img: <img src={Images.routeDecends} alt="route decends" width="130" height="130" />
    },
    {
        question: 'This sign advises drivers to',
        answers: ['Proceed onto a one-lane bridge', 'At a roundabout, keep to the left', 'On a one-way street, keep left', 'Move right.'],
        correct: 4,
        img: <img src={Images.devider} alt="devider" width="130" height="130" />
    },
    {
        question: 'What exactly does this sign mean?',
        answers: ['Ahead, a cycle path crosses a road', 'Only in the areas where the sign is placed may bikers use the lane', 'A bicycle no-passing zone is up ahead', 'This lane is not for bicycles'],
        correct: 1,
        img: <img src={Images.cycle} alt="crossroad" width="130" height="130" />
    },
    {
        question: 'What exactly does this sign mean?',
        answers: ['A narrow bridge lies ahead', 'Hill up ahead', 'Up ahead is a railroad crossing', 'One-way street up ahead'],
        correct: 1,
        img: <img src={Images.narrowBridge} alt="narrow bridge" width="130" height="130" />
    },
    {
        question: 'This sign tells you that',
        answers: ['should slow down and move onto the shoulder', 'not to leave the pavement', 'to quickly go onto the shoulder', 'to extend the time you follow by six seconds'],
        correct: 2,
        img: <img src={Images.softShoulder} alt="soft shoulder" width="130" height="130" />
    },
    {
        question: 'Which of these indicators points you in the direction of a hospital?',
        answers: ['C', 'A', 'D', 'B'],
        correct: 4,
        img: <img src={Images.indecators} alt="indecators" width="130" height="130" />
    },
    {
        question: 'What message does this sign convey?',
        answers: ['Zoo up front', 'There is a farm ahead', 'Crossing of cattle', 'A Deer might cross'],
        correct: 4,
        img: <img src={Images.deer} alt="deer" width="130" height="130" />
    },
    {
        question: 'What message does this sign convey?',
        answers: ['Up ahead, a school zone', 'Up next, a library', 'An approaching pedestrian crossing', 'A bus station is nearby'],
        correct: 1,
        img: <img src={Images.schoolZone} alt="school zone sign" width="130" height="130" />
    },
    {
        question: 'What exactly does this sign mean?',
        answers: ['Only specific uses or automobiles are permitted in the lane', 'Ahead are toll booths for this lane', 'Right turns only are permitted in this lane', 'Vehicles traveling in either direction may turn left using this lane'],
        correct: 1,
        img: <img src={Images.restrictedLane} alt="restrictd lane sign" width="130" height="130" />
    },
    {
        question: 'What exactly does this sign mean?',
        answers: ['There will be a bump on the way', 'A construction area is up ahead', 'There will be a detour', 'The road ahead has a low place'],
        correct: 4,
        img: <img src={Images.dip} alt="dip sign" width="130" height="130" />
    },
    {
        question: 'This marker denotes',
        answers: ['The start of a two-way street', 'Ahead is a divided highway', 'The start of a one-way street', 'Traffic combining up ahead'],
        correct: 1,
        img: <img src={Images.twoWay} alt="two way street sign" width="130" height="130" />
    },
    {
        question: 'When you see this sign, you have to',
        answers: ['turn to the left', 'not to turn left', 'do a U-turn', 'make no U-turns'],
        correct: 4,
        img: <img src={Images.noUturn} alt="no u turn sign" width="130" height="130" />
    },
    {
        question: 'If a drawbridge has a red light and you are approaching it, you must',
        answers: ['Turn around', 'Be careful as you go and keep an eye out for the traffic gates', 'Arrive at a complete halt', 'Go more slowly and watch for the signal'],
        correct: 3,
        img: ''
     },
     {
        question: 'A broken yellow pavement line',
        answers: ['Identifies the pavement\'s left edge', 'Divides opposing-direction traffic lanes', 'Divides lanes of traffic that are traveling in the same direction', 'Denotes the pavement\'s right edge'],
        correct: 3,
        img: ''
     },
     {
        question: 'On a slick, rainy road, you are operating a vehicle without antilock brakes (ABS). How can you stop your car as safely as possible?',
        answers: ['Remove your foot from the gas pedal', 'Pump the brakes', 'Change to neutral', 'Firmly press the brake pedal'],
        correct: 2,
        img: ''
     },
     {
        question: 'Except when otherwise stated, the speed limit in commercial or residential areas is',
        answers: ['35 mph', '40 mph', '30 mph', '45 mph'],
        correct: 3,
        img: ''
     },
     {
        question: 'Your vehicle is moving along an interstate. What should you do if you miss your exit?',
        answers: ['Go ahead and take the next exit', 'Turn around and head for the exit', 'Stop, and seek assistance', 'To get to your exit, move back'],
        correct: 1,
        img: ''
     },
     {
        question: 'Renewal of vehicle registration and license plates is required',
        answers: ['every year', 'every two years', 'three times a year', '(a) or (b)'],
        correct: 4,
        img: ''
     },
     {
        question: 'On a two-way street with a center lane, cars from either direction can ________ from the center lane.',
        answers: ['back up', 'make numerous stops', 'making right turns', 'turn to the left'],
        correct: 4,
        img: ''
     },
     {
        question: 'You should enter a roundabout,',
        answers: ['in any direction', 'a clockwise rotation', 'in a clockwise direction', 'the direction of oncoming traffic'],
        correct: 3,
        img: ''
     },
     {
        question: 'The proper hand signal for a right turn is',
        answers: ['The hand and arm extended outward', 'The hand and arm extended downward', 'Backward-extended hand and arm', 'The hand and arm extended upward'],
        correct: 4,
        img: ''
     },
     {
        question: 'From a driveway, an alley, or the side of the road, you must:',
        answers: ['Yield to oncoming traffic on the main road', 'make no right turn', 'Enter the main road at a faster pace', 'Reduce your speed and merge onto the main highway'],
        correct: 1,
        img: ''
     },
     {
        question: 'When two cars arrive at an open junction at about the same time,',
        answers: ['The right-hand driver must yield to the left-hand driver', 'Both autos are capable of moving at the same time', 'The driver who signals first has priority', 'The driver who signals first has priority'],
        correct: 4,
        img: ''
     },
     {
        question: 'A blind person\'s primary traveling aids are',
        answers: ['a white cane, as well as a trained guide dog', 'a wheelchair and a white cane', 'a cane in red and a trained guide cat', 'a cane in red and a trained guide dog'],
        correct: 1,
        img: ''
     },
     {
        question: 'The hazard zones around trucks and buses, where accidents are more prone to occur, are referred to as',
        answers: ['empty spaces', 'No-Zones', 'circular blemishes', 'There are no-passing zones'],
        correct: 2,
        img: ''
     },
     {
        question: 'The driver of a passing vehicle shall ________ until the pass is finished.',
        answers: ['not accelerating', 'turn to the left', 'stop', 'increase the pace'],
        correct: 1  ,
        img: ''
     },
     {
        question: 'What exactly does a flashing yellow arrow indicate?',
        answers: ['You may turn in the direction of the arrow after yielding to pedestrians and oncoming traffic.', 'You must instantly halt.', 'Oncoming traffic is stopped, therefore you may turn in the direction of the arrow', 'You must not turn in the direction of the yellow arrow as it is going to turn red.'],
        correct: 1,
        img: ''
     },
     {
        question: 'Maintain a ________ following distance under typical weather and traffic circumstances to avoid colliding with the vehicle in front of you.',
        answers: ['one-second', 'two-second', 'four-second', 'six-second'],
        correct: 3,
        img: ''
     },
     {
        question: 'If no traffic lights are present, you must slow down or stop for pedestrians in',
        answers: ['a clearly signposted crosswalk', 'a crosswalk that isn\'t designated', 'a point of convergence', 'all of the preceding'],
        correct: 4,
        img: ''
     },
     {
        question: 'You should not ___________ if another driver is tailgating you.',
        answers: ['extend your following distance', 'Enter the right lane', 'accelerate', 'decrease your speed'],
        correct: 3,
        img: ''
     },
     {
        question: 'When two vehicles arrive at an open junction at about the same time,',
        answers: ['Both vehicles are capable of moving at the same time', 'The driver who signals first has priority', 'The left-hand car must yield to the right-hand driver', 'The right-hand car must yield to the left-hand driver.'],
        correct: 3,
        img: ''
     },
     {
        question: 'Slower traffic should always utilize _______ lane on a highway having three or more lanes in each direction.',
        answers: ['the lane on the right', 'the lane on the left', 'a lane in the center', 'None of the preceding'],
        correct: 1,
        img: ''
     }
    
]

// const dmvData = [
//         {
//             question: 'This symbol implies that',
//             answers: ['The upcoming road is blocked', 'A railroad crossing is up ahead', 'A highway intersection is up ahead', 'The road up ahead is being fixed'],
//             correct: 2,
//             img: <img src={Images.railroadSign} alt="Rail Road Sign" width="130" height="130" />
//         },
    
//         {
//             question: 'If you see this warning on a road with limited access you should',
//             answers: ['Not go faster than 30 MPH when you leave the freeway ', '30 MPH is a good pace to reach in order to overtake the car in front of you', 'When leaving the highway go at least 30 mph', '30 more miles until the next exit to be driven'],
//             correct: 1,
//             img: <img src={Images.exit30mph} alt="30 mph exit" width="130" height="130" />
//         },    
//         {
//             question: 'Which of these pavement markings delineates a lane\'s two corresponding directions?',
//             answers: ['A', 'B', 'C', 'Not the aforemetioned'],
//             correct: 3,
//             img: <img src={Images.pavementMarking} alt="Pavement Marking" width="200" height="130" />
//         }
// ]

export default dmvData;