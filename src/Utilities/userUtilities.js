export const addUsersStars = (messagesList) => {
    let stars = 0;
    messagesList.forEach(message => {
      stars += message.stars;
    });
    return stars;
};
