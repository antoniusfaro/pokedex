<template>
  <div>
    <label> {{ stat.stat.name | title }} </label>
    <div class="progress-bar mb-2">
      <div
        class="progress-bar-inside"
        :style="{ width: progressBarPercentage }"
      ></div>
      <span class="progress-bar-value">{{ stat.base_stat }} / 300</span>
    </div>
  </div>
</template>
<script>
import { textMixin } from "../mixins/textMixin";
export default {
  mixins: [textMixin],
  props: {
    stat: {
      type: Object,
      required: true
    }
  },
  computed: {
    progressBarPercentage() {
      return (this.stat.base_stat / 300) * 100 + "%";
    }
  }
};
</script>
<style>
.progress-bar {
  position: relative;
  width: 100%;
  height: 18px;
  background-color: #fafafa;
  border-radius: 18px;
}

.progress-bar-inside {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #0075be;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}

.progress-bar-value {
  position: absolute;
  right: 10px;
  font-style: italic;
  font-size: 14px;
  color: #0a285f;
}
</style>
