export default function promiseMiddleware() {
  return (next) => (action) => {
    const { promise, type, ...rest } = action
    if (!promise) {
      return next(action)
    }

    next({ ...rest, type: type+'_REQUEST' })

    return promise.then(result => next({ ...rest, result, type: type })).
    catch(ex => {
      next({ ...rest, ex, type: type+'_FAILURE' })
      throw new Error(ex)
    })
  }
}
