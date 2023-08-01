export const PostServices = {
  async singlePost(id: number) {
    try {
      const data = await fetch(`http://tmk-v.ru:8080/api/post/${id}`)
      return data.json()
    } catch (error) {
      console.log(error)
    }
  },
}
