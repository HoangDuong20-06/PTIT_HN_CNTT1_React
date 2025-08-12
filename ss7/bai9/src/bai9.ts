class User {
    public id: string;
    public posts: Post[];
    public followers: User[];
    constructor(id: string) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content: string) {
        const newPost = new Post(`post-${Date.now()}`, this.id, content);
        this.posts.push(newPost);
        console.log(`${this.id} đã đăng bài: "${content}"`);
    }
    comment(post: Post, commentContent: string) {
        const newComment  = new PostComment(`cmt-${Date.now()}`, this.id, commentContent);
        post.addComment(newComment );
        console.log(`${this.id} đã bình luận: "${commentContent}"`);
    }
    follow(user: User) {
        if (!user.followers.includes(this)) {
            user.followers.push(this);
            console.log(`${this.id} đã theo dõi ${user.id}`);
        }
    }
    likePost(post: Post) {
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
    public id: string;
    public likes: string[];
    public comments: PostComment[];
    public userId: string;
    public content: string;
    constructor(id: string, userId: string, content: string) {
        this.id = id;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }
    addLike(userId: string) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment: PostComment) {
        this.comments.push(comment);
    }
}
class PostComment {
    public id: string;
    public userId: string;
    public content: string;
    public replies: PostComment[];

    constructor(id: string, userId: string, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    addReply(reply: PostComment) {
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