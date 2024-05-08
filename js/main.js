document.addEventListener("DOMContentLoaded", function () {
  const conversationsData = [
    {
      name: "Abdel-fattah Mahmoud",
      message: "This is my message content",
      time: "17h",
    },
    {
      name: "Amr Tala Aghbar",
      message: "This is my message content",
      time: "17h",
    },
    { name: "Alice Smith", message: "Hi, how are you?", time: "10h" },
    { name: "Bob Johnson", message: "I'm doing great, thanks!", time: "9h" },
    { name: "Emily Brown", message: "What's up?", time: "8h" },
    { name: "Michael Davis", message: "Not much, just chilling.", time: "7h" },
    { name: "Emma Wilson", message: "Nice weather today!", time: "6h" },
    {
      name: "Daniel Taylor",
      message: "Yeah, it's lovely outside.",
      time: "5h",
    },
  ];

  const lowerBox = document.querySelector(".lowerBox");

  conversationsData.forEach((conversation) => {
    const conversationElement = document.createElement("div");
    conversationElement.className =
      "col-12 conversation d-flex align-items-center gap-3";

    const imgElement = document.createElement("img");
    imgElement.src = "./css/img/user1.png";

    const conversationInfoElement = document.createElement("div");
    conversationInfoElement.className = "conversationInfo d-flex flex-wrap";

    const nameElement = document.createElement("h1");
    nameElement.className = "col-12 fs-5";
    nameElement.textContent = conversation.name;

    const messageElement = document.createElement("p");
    messageElement.className = "mb-0";
    messageElement.textContent = conversation.message;

    const timeElement = document.createElement("span");
    timeElement.className = "mb-0 px-3";
    timeElement.textContent = conversation.time;

    conversationInfoElement.appendChild(nameElement);
    conversationInfoElement.appendChild(messageElement);
    conversationInfoElement.appendChild(timeElement);

    conversationElement.appendChild(imgElement);
    conversationElement.appendChild(conversationInfoElement);

    lowerBox.appendChild(conversationElement);
  });

  // Create and append the Filter element
  const filterElement = document.createElement("div");
  filterElement.className = "col-3 Filter";
  lowerBox.appendChild(filterElement);
});

