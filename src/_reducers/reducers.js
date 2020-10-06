import { GET_BLOGS, GET_BLOG_DATA } from '../_actions/types'

const initialState = {
  blogs: [],
  blogData: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload.blogs
      }
    case GET_BLOG_DATA:
      return {
        ...state,
        blogData: action.payload.blog
      }
    default:
      return state
  }
}