<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="bar">
            <span class="bar_content">
              CHECK THIS OUT
            </span>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {
  },
  data() {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Gelasio&display=swap");

* {
  box-sizing: border-box;
}

body,
html {
  overflow-x: hidden;
}

.bar {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 25px 0;

  background-color: #4a3ce7;
  color: white;

  font-family: Gelasio;
  font-size: 18px;
}

.bar_content {
  display: block;
  /* Important to give the content a width */

  width: 100%;
  transform: translateX(100%);
  /* Animation start out of the screen */

  /* Add the animation */
  animation: move 30s linear infinite
    /* infinite make reapeat the animation indefinitely */
  ;
}

/* Create the animation */
@keyframes move {
  to {
    transform: translateX(-100%);
  }
}</style>