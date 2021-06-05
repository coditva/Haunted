export type Post = {
  id: string
  uuid: string
  title: string
  url: string
  comment_id: string
  feature_image?: string
  featured: boolean
  visibility: string
  published_at: string
  excerpt?: string
  reading_time: number
};
