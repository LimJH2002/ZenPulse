function getDailyMessage(username: string, currentTime: string): string {

  const hour = parseInt(currentTime.substring(0, 2), 10);
  const dayOfWeek = new Date().getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

  const morningMessages = [
    "Rise and shine, [Username]! A new week awaits. Happy Monday!",
    "Good morning, [Username]! Tackle Tuesday with your brightest smile.",
    "Happy Wednesday, [Username]! The week's halfway mark is here.",
    "Morning, [Username]! Thursday brings new opportunities.",
    "It's Friday, [Username]! End the week on a high note.",
    "Weekend mornings are the best, [Username]. Enjoy your Saturday!",
    "Good morning, [Username]! Sunday's calm is all yours.",
  ];

  const afternoonMessages = [
    "Keep up the momentum this Monday afternoon, [Username]! The day's not over yet.",
    "Tuesday afternoon's looking bright, [Username]. You're doing great!",
    "It's Wednesday afternoon, [Username]. Over the hump and onto victory!",
    "Thursday afternoon is here, [Username]. Stay strong and push through!",
    "Friday afternoon feels, [Username]. The weekend is nearly here!",
    "Enjoy this beautiful Saturday afternoon, [Username]. Relax and unwind.",
    "Sunday afternoon tranquility, [Username]. A perfect time to reflect and relax.",
  ];

  const eveningMessages = [
    "Kick off the week with a bang, [Username]! You've mastered Monday.",
    "Take on Tuesday with gusto, [Username]! Another day, another triumph.",
    "Halfway through the week, [Username]! Wednesday's well within your grasp.",
    "Thriving through Thursday, [Username]! Keep up the great momentum.",
    "Embrace the weekend, [Username]! You aced Friday.",
    "Savor the Saturday, [Username]! The weekend is yours to enjoy.",
    "Sunday's serenity is yours, [Username]! A perfect end to your week.",
  ];

  const nightMessages = [
    "Great hustle today, [Username]. Tuesday's turn next!",
    "Tremendous effort, [Username]. Here comes Wednesday!",
    "Well done today, [Username]. Thursday is just ahead!",
    "Terrific work, [Username]. Friday's just around the corner!",
    "Fantastic finish to the week, [Username]. Saturday's up next!",
    "Superb Saturday, [Username]. Now for a peaceful Sunday!",
    "Great hustle today, [Username]. Monday's out!",
  ];

  let message;
  
  if (hour >= 4 && hour < 12) {
    message = morningMessages[dayOfWeek];
  } else if (hour >= 12 && hour < 16) {
    message = afternoonMessages[dayOfWeek];
  } else if (hour >= 16 && hour < 20) {
    message = eveningMessages[dayOfWeek];
  } else {
    message = nightMessages[(dayOfWeek + 1) % 7]; // Next day's message for night time
  }

  return message.replace("[Username]", username);
}

export default getDailyMessage;