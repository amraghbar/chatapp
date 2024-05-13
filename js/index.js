document.addEventListener("DOMContentLoaded", function() {
    let data = JSON.parse(localStorage.getItem("data"));
    const user_id = 3;
    let openConvId = null;
    const msgBox = document.querySelector(".lowerBox");
    const userNameElement = document.querySelector("#userName");

    // تحديث اسم المستخدم
    const userObj = data.users.find(user => user.id === user_id);
    if (userObj) {
        userNameElement.innerHTML = userObj.name;
    }

    const myConversations = data.conve.filter(conversation => conversation.nodes.includes(user_id));

    // إنشاء عناصر المحادثات
    myConversations.forEach(conversation => {
        let otherObj = { name: null };

        if (conversation.type === 1) {
            const otherID = conversation.nodes.find(node => node !== user_id);
            otherObj = data.users.find(user => user.id === otherID) || otherObj;
        }

        const conversationInfo = `
            <div class="col-12 conversation d-flex align-items-center gap-3" onclick="openConve(${conversation.id})">
                <img src="./css/img/user1.png" />
                <div class="conversationInfo d-flex flex-wrap">
                    <h1 class="col-12 fs-5">${conversation.type === 2 ? conversation.name : otherObj.name}</h1>
                    <div  class="col-12 d-flex justify-content-between align-items-center">
                        <p class="mb-0">This is my message content</p>
                        <span class="mb-0 px-3">17h</span>
                    </div>
                </div>
            </div>
        `;

        msgBox.insertAdjacentHTML("beforeend", conversationInfo);
    });

    // فتح المحادثة
    window.openConve = function(con_id) {
        const conversation = data.conve.find(conv => conv.id === con_id);

        if (conversation) {
            const allMessagesElement = document.querySelector(".AllMsgse");
            allMessagesElement.innerHTML = ''; // مسح الرسائل السابقة
            conversation.masg.forEach(message => {
                const messageElement = `
                    <div class="col-12 msgRow">
                        <div class="${message.sender === user_id ? "mineMsg" : "otherMsg"} msg">
                            <p class="col-12 msgContent">${message.contect}</p>
                            <p class="col-12 msgTime">${message.time}</p>
                        </div>
                    </div>
                `;
                allMessagesElement.insertAdjacentHTML("beforeend", messageElement);
            });
            openConvId = con_id;
        }
    };

    const textar = document.querySelector("textarea");

    window.sendMsg = function() {
        let d = new Date();
        let time = `${d.getHours()} : ${d.getMinutes()}`;
        let val = textar.value;
        let conIndex = data.conve.findIndex((con) => con.id == openConvId);

        let msgObj = {
            id: data.conve[conIndex].masg.length + 1,
            contect: val,
            sender: user_id,
            time: time,
        };

        data.conve[conIndex].masg.push(msgObj);
        localStorage.setItem("data", JSON.stringify(data));
        openConve(openConvId);

        console.log(msgObj);
    };
});
