import React from 'react'

export default function NewPost({onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
      <textarea required name='content'></textarea>
      <button type='submit'>Post</button>
    </form>
  )
}
