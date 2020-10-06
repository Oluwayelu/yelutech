import axios from 'axios'
import { GET_BLOGS, GET_BLOG_DATA, GET_ERRORS } from './types'

export const getBlogs = () => dispatch => {

  axios
    .get('/api/v1/blogs')
    .then(res =>
      dispatch({
        type: GET_BLOGS,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      }))
}

export const getBlogData = (id) => dispatch => {

  axios
    .get(`/api/v1/blogs/${id}`)
    .then(res =>
      dispatch({
        type: GET_BLOG_DATA,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      }))
}