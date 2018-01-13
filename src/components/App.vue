<template lang="pug">
    div
        el-menu(mode="horizontal", @select="handleSelect")
            el-menu-item(index='load') Load images
        div
            p Photo Wall - Stitching photos randomly becomes a new big picture.
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
//import Viewer from '@/components/Viewer.vue';
@Component({
    components: {
    }
})
export default class extends Vue {
    message: string = 'Hello! List';
    activeIndex2: string
    mounted(): void {

    }
    sayHello() {
        console.log('Hello!');
    }
    handleSelect(key: number, keyPath: string): void {
        // console.log(key, keyPath);
    }
}
</script>
<style lang="less" scoped>
a {
  background-color: green;
}
</style>
