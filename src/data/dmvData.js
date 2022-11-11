import Images from "../images";

console.log(Images);
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
    }
    
]

export default dmvData;