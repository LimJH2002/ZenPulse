import getDailyMessage from "@/app/utils/PersonalisedMessage";

function PersonalizedMessages() {
  // Get the time in "HHMM" 24 hour format
  const time = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });

  // Get the daily message
  const message = getDailyMessage("Jian Hong", time);

  return <div>{message}</div>;
}

export default PersonalizedMessages;
