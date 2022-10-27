// copy from vue
// for tests
// R 是什么意思？
declare namespace jest {
  interface Matchers<R, T> {
    toBeDistinct(): R
  }
}