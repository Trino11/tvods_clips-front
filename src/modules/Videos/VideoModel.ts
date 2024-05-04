type VideoModel = {
    id: string;
    title: string;
    splash: string;
    description: string;
    uploadDate: Date;
    duration: number;
    views: number;
    likes: number;
    dislikes?: number;
    tags: string[];
    author: UserModel;
};

type UserModel = {
    id: string;
    name?: string;
    surname?: string;
    alias?: string;
    picture?: string;
    email?: string;
    registerDate?: Date;
    birthDate?: Date;
    followersIDs?: string[];
    followingIDs?: string[];
};

export { VideoModel, UserModel };