onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles =
      "Babyyyy, I just want to say thank you for coming into my life. I feel so lucky to have you as my girlfriend—a girl who truly loves me, understands me, and always lights up my day. I know sometimes we get upset with each other, but we always find our way back. I hope we can keep growing together and grow old side by side, because I really want to stay with you forever. I love you so much, baby, with all my heart🩷".split(
        ""
      );
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        // Handle spaces properly for better readability
        if (titles[index] === " ") {
          titleElement.innerHTML += "&nbsp;";
        } else {
          titleElement.innerHTML += titles[index];
        }
        index++;
        setTimeout(appendTitle, 70); // 70ms delay between characters
      }
    }

    appendTitle();

    // This clearTimeout is unnecessary since 'c' is used for the initial timeout
    // that has already completed by this point
  }, 1000);
};
