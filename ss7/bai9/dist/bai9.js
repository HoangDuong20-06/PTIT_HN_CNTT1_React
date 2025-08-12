"use strict";
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const newPost = new Post(`post-${Date.now()}`, this.id, content);
        this.posts.push(newPost);
        console.log(`${this.id} đã đăng bài: "${content}"`);
    }
    comment(post, commentContent) {
        const newComment = new PostComment(`cmt-${Date.now()}`, this.id, commentContent);
        post.addComment(newComment);
        console.log(`${this.id} đã bình luận: "${commentContent}"`);
    }
    follow(user) {
        if (!user.followers.includes(this)) {
            user.followers.push(this);
            console.log(`${this.id} đã theo dõi ${user.id}`);
        }
    }
    likePost(post) {
        post.addLike(this.id);
        console.log(`${this.id} đã thích bài đăng của ${post.userId}`);
    }
    viewFeed() {
        console.log(`--- Bảng tin của ${this.id} ---`);
        this.followers.forEach(follower => {
            follower.posts.forEach(post => {
                console.log(`[${follower.id}]: ${post.content} (Likes: ${post.likes.length}, Comments: ${post.comments.length})`);
            });
        });
    }
}
class Post {
    constructor(id, userId, content) {
        this.id = id;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class PostComment {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
const userA = new User("UserA");
const userB = new User("UserB");
userA.createPost("Hello, đây là bài viết đầu tiên!");
userB.follow(userA);
userB.viewFeed();
userB.likePost(userA.posts[0]);
userB.comment(userA.posts[0], "Chào bạn A!");
userA.posts[0].comments[0].addReply(new PostComment(`reply-${Date.now()}`, "UserA", "Cảm ơn B nhé!"));
userB.viewFeed();
