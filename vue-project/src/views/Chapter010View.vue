<template>
    <CoverTitle />
    <div class="h-32"></div>
    <div class="h-32"></div>
    <div class="text-black/80">
        X
    </div>
    <div class="border-b-4 border-double">
    </div>
    <div class="h-16"></div>
    <div class="grid grid-cols-1 gap-8">
        <Chapter010 />
    </div>
    <div class="h-64"></div>
    <RouterLink to="/chapter011">
        <div class="p-8 m-8 border-2 rounded font-bold shadow text-center">
            <div class="text-lime-900">
                XI
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import Chapter010 from '@/components/chapters/Chapter010.vue';
import CoverTitle from '@/components/CoverTitle.vue';

</script>