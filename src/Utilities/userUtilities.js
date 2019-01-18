export const sortMessagesById = (messages) => {
    // update once data gets sorted out as this is sorting the user id currently
    messages.sort((a,b) => b.id - a.id);
};

export const addUsersStars = (messagesList) => {
    let stars = 0;
    messagesList.forEach(message => {
      stars += message.stars;
    });
    return stars;
};