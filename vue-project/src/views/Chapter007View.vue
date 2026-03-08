<template>
    <CoverTitle />
    <div class="h-32"></div>
    <div class="h-32"></div>
    <div class="text-black/80">
        VII
    </div>
    <div class="border-b-4 border-double">
    </div>
    <div class="h-16"></div>
    <div class="grid grid-cols-1 gap-8">
        <Chapter007 />
    </div>
    <div class="h-64"></div>
    <RouterLink to="/chapter008">
        <div class="p-8 m-8 border-2 rounded font-bold shadow text-center">
            <div class="text-lime-900">
                VIII
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import Chapter007 from '@/components/chapters/Chapter007.vue';
import CoverTitle from '@/components/CoverTitle.vue';

</script>