<template>
  <div>
      <h1> home </h1>


      <div>
        <ul>
          <li><!--동적 라우트 매칭 -->
            <router-link to="/b/1">borad 1</router-link>
          </li>
          <li>
            <router-link to="/b/2">borad 2</router-link>
          </li>
          <li>
            <router-link to="/b/3">borad 3</router-link>
          </li>
        </ul>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>