function scuberGreetingForFeet(number){
  let result;
  if (number <= 400) {
    result = 'This one is on me!'
  } else if (400 < number && number < 2000 ) {
    result = 'That will be twenty bucks.'
  } else if (2000 < number && number <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (2500 < number) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city) {
  return (city == 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}