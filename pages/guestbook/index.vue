<template>
    <div class="main-guestbook wrapper">
        <main class="main-guestbook">
            <!-- 评论 -->
            <client-only>
                <app-comment />
            </client-only>
        </main>
    </div>
</template>
<script>
import Vue from 'vue';
// import { value, computed, watch, onMounted } from 'vue-function-api';
export default {
    components: {
        'app-comment': () => import(/*webpackChunkName: "app-comment"*/'~/components/public/AppComment')
    },
    
};
</script>
