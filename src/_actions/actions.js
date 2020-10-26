import axios from 'axios'
import { firestore } from '../services/firebase'
import { GET_BLOGS, GET_BLOG_DATA, GET_ERRORS } from './types'

export const getBlogs = () => dispatch => {

  firestore.collection('blogs').get()
    .then(doc => {
      const blogs = []
      doc.forEach(data => {
        var blogData = data.data()
        blogs.push(blogData)
      })
      dispatch({
        type: GET_BLOGS,
        payload: blogs
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    )
}

export const getBlogData = (id) => dispatch => {

  console.log(id)
}