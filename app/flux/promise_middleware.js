export default function promiseMiddleware() {
  return (next) => (action) => {
    const { promise, type, ...rest } = action
    if (!promise) {
      return next(action)
    }

    next({ ...rest, type: type+'_REQUEST' })
    return promise.then(
      (result) => next({ ...rest, result, type: type }),
      (error) => {
        next({ ...rest, error, type: type+'_FAILURE' })
        return Promise.reject(error)
      }
    )
  }
}
