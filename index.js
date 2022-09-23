const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const btns = {
    like: "images/icon-heart.png",
    comment: "images/icon-comment.png",
    share: "images/icon-dm.png",
};

const mainEl = document.querySelector("main");

posts.map( (item) => createPost(
        item.avatar, 
        item.name, 
        item.location, 
        item.post, 
        item.likes, 
        item.username, 
        item.comment,
        btns
    )
);


function createUserInfo(avatar, author, location) {
    let userInfo = document.createElement("div");
    let avatarEl = document.createElement("img");
    let container = document.createElement("div");
    let authorEl = document.createElement("p");
    let locationEl = document.createElement("p");

    avatarEl.setAttribute("src", `${avatar}`);
    authorEl.textContent = author;
    locationEl.textContent = location;

    container.append(authorEl);
    container.append(locationEl);
    userInfo.append(avatarEl);
    userInfo.append(container);

    authorEl.classList.add("bold-text");
    avatarEl.classList.add("avatar");
    container.classList.add("user-info-container");
    userInfo.classList.add("post-user-info");

    return userInfo;
}

function createImg(img) {
    let image = document.createElement("img");
    image.setAttribute("src", `${img}`);
    image.classList.add("post-img");
    image.addEventListener("dblclick", likesIncrement);
    return image;
}

function createButtonsEl(btnsObj) {
    let buttonsEl = document.createElement("div");
    for (key in btnsObj) {
        let icon = document.createElement("img");
        icon.setAttribute("src", btnsObj[key]);
        icon.classList.add("btn");
        if (key === "like") {
            icon.addEventListener("click", likeBtnFunction);
            icon.classList.add("like-btn");
        }
        buttonsEl.append(icon);
    }
    buttonsEl.classList.add("btns-container");
    return buttonsEl;
}

function createLikesEl(likes) {
    let likesEl = document.createElement("p");
    likesEl.textContent = `${likes} likes`;
    likesEl.classList.add("bold-text");
    likesEl.classList.add("likes");
    return likesEl;
}

function createCommentsEl(user, comment) {
    let commentsEl = document.createElement("div");
    let userEl = document.createElement("p");
    let commentEl = document.createElement("p");

    userEl.textContent = user;
    commentEl.textContent = comment;
    commentsEl.append(userEl);
    commentsEl.append(commentEl);

    userEl.classList.add("bold-text");
    commentsEl.classList.add("post-comments");

    return commentsEl;
}

function createPost(avatar, author, location, img, likes, user, comment, btnsObj) {
    let post = document.createElement("div");

    post.append(createUserInfo(avatar, author, location));
    post.append(createImg(img));
    post.append(createButtonsEl(btnsObj));   
    post.append(createLikesEl(likes));
    post.append(createCommentsEl(user, comment));

    post.classList.add("post");

    mainEl.append(post);
}

function likeBtnFunction(event) {
    posts.map( (item) => {
        if (`http://127.0.0.1:5500/${item.post}` === event.target.parentElement.previousElementSibling.src) {
            item.likes++;
            event.target.parentElement.nextElementSibling.textContent = `${item.likes} likes`;
        }
    });
}

/*likes counter by dblclick on the picture*/

function likesIncrement(event) {
    posts.map( (item) => {
        if (`http://127.0.0.1:5500/${item.post}` === event.target.src) {
            item.likes++;
            event.target.nextElementSibling.nextElementSibling.textContent = `${item.likes} likes`;
        }
    });
}