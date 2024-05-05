import { VideoModel } from "../modules/Videos/models/VideoModel";

export default function someVideo(): VideoModel{
  return {
    id: '123123',
    title: 'Awesome video',
    splash: 'http://cdn.wallpapersafari.com/70/42/6PHngU.jpg',
    description: 'An awesome description for my video',
    uploadDate: new Date('01/24/2013'),
    duration: 68,
    views: 3,
    likes: 23,
    dislikes: 4,
    tags: ['tech', 'something', 'wow'],
    author: {
        id: '321321',
        name: 'Joseph',
        surname: 'Ford',
        picture: 'https://imageproxy.viewbook.com/403cfdfe1628678449e4b1ec3351655a_hd.jpg?fit=max&h=1280&w=1280',
        alias: 'Mackun',
        email: 'mackun@gmail.com',
        registerDate: new Date('03/13/2021'),
        birthDate: new Date('09/28/2000'),
        followersIDs: [''],
        followingIDs: [''],     
    },
  }
};