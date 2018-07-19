import { Injectable } from '@angular/core';

@Injectable()
export class CommentListService {

  comments = [
    { id: 1,
      postId: 3,
      author: 'Sébastien',
      content: 'Commentaire de Sébastien.',
      date: '04/07/18',
      profilPictureLink: '../../../assets/user.png'
    },
    { id: 2,
      postId: 1,
      author: 'Lucie',
      content: 'Commentaire de Lucie.',
      date: '05/07/18',
      profilPictureLink: '../../../assets/user.png'
    },
    { id: 3,
      postId: 1,
      author: 'Alex',
      content: 'Commentaire d\'Alex.',
      date: '04/07/18',
      profilPictureLink: '../../../assets/user.png'
    },
    { id: 4,
      postId: 2,
      author: 'Vincent',
      content: 'Commentaire de Vincent.',
      date: '05/07/18',
      profilPictureLink: '../../../assets/user.png'
    }

  ];

  constructor() { }

  getCommentListByPostId(postId: number):any[] {
    const comments = this.comments.filter(
      (c) => {
        return c.postId == postId;
      }
    );
    return comments;
  }
}