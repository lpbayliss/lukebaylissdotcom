export enum Status {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
}

export interface Post {
  slug: string;
  published: boolean;
  publishedAt: string;
  title: string;
  summary: string;
  status: Status;
}

export const posts: Post[] = [
  {
    slug: 'bali',
    published: true,
    publishedAt: '2020-03-13',
    title: 'Bali',
    summary: 'Something about bali',
    status: Status.DRAFT,
  },
  {
    slug: 'iceland',
    published: true,
    publishedAt: '2020-03-13',
    title: 'Iceland',
    summary: 'Something about iceland',
    status: Status.DRAFT,
  },
];
