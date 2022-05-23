export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-0e503981","v-fffb8e28","v-6b31f776","v-0829a367","v-610f499a","v-5825d8e7","v-26d68283","v-57bb2e35","v-44d4f664","v-2e9af374","v-dfef7c4e","v-412bd985","v-de37887c","v-d7235fe2","v-3ae91092","v-6d979f6e","v-343e7b3e","v-3f20ed26","v-973e7824","v-10f388a0","v-0af186b8","v-b148cd3a","v-54a4e372","v-08851b71","v-17ddd948","v-ddb8ddf0","v-e572f78e","v-62c74ec4","v-049f0cb4","v-051ac342"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slides/","keys":["v-0e503981","v-57bb2e35"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
