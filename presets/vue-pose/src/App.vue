<template>
  <Box class="box" :pose="position" />
</template>

<script>
import posed from "vue-pose";

export default {
  data: function() {
    return {
      position: "left"
    };
  },
  mounted() {
    setInterval(() => {
      this.position = this.position === "left" ? "right" : "left";
    }, 1000);
  },
  components: {
    Box: posed.div({
      left: { x: -100 },
      right: { x: 100 }
    })
  }
};
</script>

<style>
body {
  display: flex;
  height: 95vh;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
}

.box {
  width: 100px;
  height: 100px;
  background: #54E365;
}
</style>
